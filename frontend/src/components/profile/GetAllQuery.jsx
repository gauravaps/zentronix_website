import React, { useState } from 'react';
import axios from 'axios';
import './GetAllQuery.css'; 
import { FaGlobeAmericas } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const GetAllQuery = () => {
  const [queries, setQueries] = useState([]);
  const [showData, setShowData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchQueries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getallquery');
      const sorted = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setQueries(sorted);
      setShowData(true);
      setCurrentPage(1); // reset page on fetch
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  const deleteQuery = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this query?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:5000/api/deletequery/${id}`);
    
    const updatedQueries = queries.filter(query => query._id !== id);
    setQueries(updatedQueries);

    // Adjust page if needed
    if ((currentPage - 1) * itemsPerPage >= updatedQueries.length && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    toast.success("Query deleted successfully ✅");
  } catch (error) {
    console.error('Error deleting query:', error);
    toast.error("Failed to delete query ❌");
  }
};


  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentQueries = queries.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(queries.length / itemsPerPage);

  return (
    <div className="query-container">
      <h1 className="query-title">Here's your all updated Query</h1>
<ToastContainer position="top-right" autoClose={3000} />

      <button className="fetch-btn" onClick={fetchQueries}>Get All User</button>

      {showData && currentQueries.map((query, index) => (
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

      {/* Pagination Controls */}
      {showData && queries.length > 0 && (
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>

          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLast >= queries.length}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default GetAllQuery;
