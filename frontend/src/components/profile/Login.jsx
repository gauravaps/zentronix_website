import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
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

  const { setUser } = useAuth();




  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/loginuser', credentials);

      // response se token aur user object le lo
      const { token, user, message } = res.data;

      // localStorage me store karna (role ko as plain string store karo)
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user)
      localStorage.setItem('role', user.role); // no JSON.stringify — simple string

      // optional: agar aapko image/name alag store karna hai:
      if (user.image) localStorage.setItem('userImage', user.image);
      if (user.firstName) localStorage.setItem('userName', user.firstName);

      // success toast
      toast.success(message || 'Login successful!', {
        position: 'top-right',
        autoClose: 2000,
      });
 
      // thoda delay de kar navigate karo taa ki toast visible rahe
      setTimeout(() => {
        if (user.role === 'admin') {
          navigate('/userprofile'); // admin route
        } else {
          navigate('/login'); 
        }
      }, 900);
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
          placeholder="Enter your Credential"
          required
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Credential"
          required
          value={credentials.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Sumbit'}
        </button>
      </form>

      {/* Toast container ko app me ek hi jagah rakho (usually App.jsx me) — 
          yaha agar nahi rakha to bhi chalega */}
      <ToastContainer />
    </div>
  );
};

export default Login;
