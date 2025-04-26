import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaUpload, FaDownload } from "react-icons/fa";

const DProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Smartphone", price: 599, category: "Electronics", stock: 10, status: "Available" },
    { id: 2, name: "Wireless Headphones", price: 199, category: "Audio", stock: 5, status: "Low Stock" },
    { id: 3, name: "Laptop", price: 999, category: "Computers", stock: 0, status: "Out of Stock" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const openModal = (product = null) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingProduct(null);
  };

  const saveProduct = (product) => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? product : p)));
    } else {
      setProducts([...products, { ...product, id: products.length + 1 }]);
    }
    closeModal();
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Product Management</h2>
        <div className="flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center" onClick={() => openModal()}>
            <FaPlus className="mr-2" /> Add Product
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
            <FaDownload className="mr-2" /> Export
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center">
            <FaUpload className="mr-2" /> Import
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex space-x-4">
        <select className="border p-2 rounded">
          <option value="">Filter by Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Audio">Audio</option>
          <option value="Computers">Computers</option>
        </select>
        <select className="border p-2 rounded">
          <option value="">Filter by Stock</option>
          <option value="Available">Available</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Product</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Stock</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border">
              <td className="p-3 border text-center">{product.id}</td>
              <td className="p-3 border">{product.name}</td>
              <td className="p-3 border text-green-600">${product.price}</td>
              <td className="p-3 border">{product.category}</td>
              <td className="p-3 border text-center">{product.stock}</td>
              <td className="p-3 border text-center">{product.status}</td>
              <td className="p-3 border text-center">
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => openModal(product)}
                >
                  <FaEdit />
                </button>
                <button className="text-red-500">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Product Modal */}
      {modalOpen && <ProductModal product={editingProduct} onSave={saveProduct} onClose={closeModal} />}
    </div>
  );
};

const ProductModal = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState(
    product || { name: "", price: "", category: "", stock: "", status: "Available" }
  );

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">{product ? "Edit Product" : "Add Product"}</h3>
        <input type="text" name="name" value={formData.name} placeholder="Product Name" className="w-full border p-2 rounded mb-2" onChange={handleChange} />
        <input type="number" name="price" value={formData.price} placeholder="Price" className="w-full border p-2 rounded mb-2" onChange={handleChange} />
        <select name="category" value={formData.category} className="w-full border p-2 rounded mb-2" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Audio">Audio</option>
          <option value="Computers">Computers</option>
        </select>
        <input type="number" name="stock" value={formData.stock} placeholder="Stock" className="w-full border p-2 rounded mb-2" onChange={handleChange} />
        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onSave(formData)}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default DProductManagement;
