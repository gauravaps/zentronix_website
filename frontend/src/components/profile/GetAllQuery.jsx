import React, { useState } from 'react';
import axios from 'axios';
import './GetAllQuery.css'; 
import { FaGlobeAmericas } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

const GetAllQuery = () => {
  const [queries, setQueries] = useState([]);
  const [showData, setShowData] = useState(false);

  const fetchQueries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getallquery');
      const sorted = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setQueries(sorted);
      setShowData(true);
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  const deleteQuery = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletequery/${id}`);
      setQueries(queries.filter(query => query._id !== id));
    } catch (error) {
      console.error('Error deleting query:', error);
    }
  };

  return (
    <div className="query-container">
      <h1 className="query-title">Here's your all updated Query</h1>

      <button className="fetch-btn" onClick={fetchQueries}>Get All User</button>

      {showData && queries.map((query, index) => (
        <div className="query-card" key={index}>
          <div className="query-header">
            <FaGlobeAmericas className="earth-icon" />
            <span className="ago-text">
              {formatDistanceToNow(new Date(query.createdAt), { addSuffix: true })}
            </span>
          </div>

          <p><strong>Name:</strong> {query.firstName} {query.lastName}</p>
          <p><strong>Email:</strong> <a href={`mailto:${query.email}`}>{query.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${query.phone}`}>{query.phone}</a></p>
          <p><strong>Service:</strong> {query.service}</p>
          <p><strong>Budget:</strong> ₹{query.budget}</p>
          <p><strong>How soon do you want to start?:</strong> {query.how_soon}</p>
          <p><strong>Message:</strong> {query.message}</p>

          <button className="delete-btn" onClick={() => deleteQuery(query._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default GetAllQuery;
