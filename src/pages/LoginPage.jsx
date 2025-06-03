import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/authSlice';
import InputField from '../components/ui/InputField';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    dispatch(loginUser({ email, password, apiUrl: process.env.REACT_APP_API_URL }));
  };

  if (token) navigate('/dashboard');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton label="Login" loading={loading} />
          {error && <ErrorMessage message={error} />}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;