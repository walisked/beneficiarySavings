import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../redux/slices/authSlice';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username.trim()) errors.username = 'Username is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters long';
    if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }
  
    try {
      await dispatch(signupUser(formData)).unwrap();
      navigate('/dashboard');
    } catch (err) {
      console.error('Signup failed:', err);
      setFormErrors({ general: 'Signup failed. Please try again.' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-4">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">Create an Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            id="username"
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={formErrors.username}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
          />
          <SubmitButton label="Sign Up" loading={loading} />
          {error && <ErrorMessage message={error} />}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;