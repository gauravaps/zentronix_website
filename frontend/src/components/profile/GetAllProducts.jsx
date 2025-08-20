// src/pages/admin/GetAllProducts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./GetAllProducts.css";
import { useAuth } from "../context/AuthContext";
import { HashLoader } from "react-spinners";


const GetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const token = localStorage.getItem("token");
    const [updating, setUpdating] = useState(false);
    const [loading, setLoading] = useState(false);
    
    
    
    

  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    liveUrl: "",
    image: null,
  });
  const [editProductId, setEditProductId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
          setLoading(true); 

    try {
      const { data } = await axios.get("http://localhost:5000/api/all_products");
      setProducts(data.products);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
    }
    finally {
      setLoading(false); 
    }

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
      setUpdating(true); 

    try {
      const fd = new FormData();
      fd.append("projectName", formData.projectName);
      fd.append("description", formData.description);
      fd.append("liveUrl", formData.liveUrl);
      if (formData.image) fd.append("image", formData.image);

      await axios.post("http://localhost:5000/api/add_product", fd, {
         headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Project added successfully!");
      setIsPopupOpen(false);
      fetchProducts();
      setFormData({
        projectName: "",
        description: "",
        liveUrl: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add project");
    }

    finally {
      setUpdating(false); 
    }
  };

  // Edit product
  const handleEditClick = (product) => {
    setEditProductId(product._id);
    setFormData({
      projectName: product.projectName,
      description: product.description,
      liveUrl: product.liveUr,
      image: null,
    });
    setIsEditPopupOpen(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
      setUpdating(true); 

    try {
      const fd = new FormData();
      fd.append("projectName", formData.projectName);
      fd.append("description", formData.description);
      fd.append("liveUrl", formData.liveUrl);
      if (formData.image) fd.append("image", formData.image);

      await axios.put(
        `http://localhost:5000/api/update_product/${editProductId}`,
        fd,
        {
          headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        }
      ); 

      toast.success("Project updated successfully!");
      setIsEditPopupOpen(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update project");
    }

    finally {
      setUpdating(false); 
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/delete_product/${id}`,
        {
          headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        }
      );
      toast.success("Project deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete project");
    }
  };


  // 🔹 Loader condition
  
    if (loading) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff"
          }}
        >
          <HashLoader size={70} color="#36d7b7" />
        </div>
      );
    }
  

  return (
    <div className="product-page">
      <ToastContainer />
      <div className="product-header">
        <h2>Our Projects</h2>
        <button
          className="product-add-btn"
          onClick={() => setIsPopupOpen(true)}
        >
          Add Your New Project
        </button>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.projectName} />
            <h3>{p.projectName}</h3>
            <p>{p.description}</p>
            <a href={p.liveUr} target="_blank" rel="noreferrer">
              View Live
            </a>
            <div className="product-actions">
              <button onClick={() => handleEditClick(p)}>Update</button>
              <button onClick={() => handleDeleteProduct(p._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Form Popup */}
      {isPopupOpen && (
        <div className="product-popup">
          <div className="product-popup-inner">
            <h2>Add New Project</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="text"
                name="liveUrl"
                placeholder="Live URL"
                value={formData.liveUrl}
                onChange={handleChange}
                required
              />
              <input type="file" name="image" onChange={handleChange} />

              <button type="submit" disabled={updating}>
            {updating ? (
              <span className="spinner"></span> 
            ) : (
              "Add Project"
            )}
          </button> 

          <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Form Popup */}
      {isEditPopupOpen && (
        <div className="product-popup">
          <div className="product-popup-inner">
            <h2>Edit Project</h2>
            <form onSubmit={handleUpdateProduct}>
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="text"
                name="liveUrl"
                placeholder="Live URL"
                value={formData.liveUrl}
                onChange={handleChange}
                required
              />
              <input type="file" name="image" onChange={handleChange} />


              <button type="submit" disabled={updating}>
            {updating ? (
              <span className="spinner"></span> 
            ) : (
              "Update Project"
            )}
          </button> 


              <button
                type="button"
                onClick={() => setIsEditPopupOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllProducts;
