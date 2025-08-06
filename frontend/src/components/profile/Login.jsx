import React, { useState } from 'react';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth(); // use the login helper from AuthContext

  // where to redirect after login (if user was trying to access protected route)
  const from = location.state?.from?.pathname || null;

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/loginuser', credentials);

      // response se token aur user object expect kar rahe hain
      const { token, user, message } = res.data;

      // store token (AuthContext handles user persistence)
      if (token) {
        localStorage.setItem('token', token);
      }

      // use context login to normalise and persist user
      login(user);

      // optional other small info (if you need separate items)
      if (user?.image) localStorage.setItem('userImage', user.image);
      if (user?.firstName) localStorage.setItem('userName', user.firstName);

      // success toast
      toast.success(message || 'Login successful!', {
        position: 'top-right',
        autoClose: 1500,
      });

      // navigate after short delay so toast shows
      setTimeout(() => {
        // if original protected page exists, go back there
        if (from) {
          navigate(from, { replace: true });
          return;
        }

        // otherwise decide default destination by role
        const role =
          typeof user?.role === 'string' ? user.role : user?.role?.role || user?.role?.name;

        if (role === 'admin') {
          navigate('/userprofile', { replace: true });
        } else {
          // normal user landing (change as per your app)
          navigate('/not-authorize', { replace: true });
        }
      }, 700);
    } catch (err) {
      console.error('Login error:', err);
      const errorMsg = err.response?.data?.message || 'Login failed. Check credentials.';
      toast.error(errorMsg, { position: 'top-right', autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Please Enter your Credentials</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          required
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          required
          value={credentials.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </button>
      </form>

      {/* Toast container: It's okay to keep here, but ideally place once in App.jsx */}
      <ToastContainer />
    </div>
  );
};

export default Login;
