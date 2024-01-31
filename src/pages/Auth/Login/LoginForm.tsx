import React from 'react';
import PrimaryButton from '../../../components/atoms/Button/PrimaryButton';
// import './LoginForm.css'; // Import your CSS file where you'll define additional styles

interface LoginFormProps {
  handleSubmit: (event: React.FormEvent) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 border rounded focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded focus:outline-none focus:border-indigo-500"
          />
        </div>
        <PrimaryButton 
                  className="w-full bg-indigo-500 text-white py-3 px-4 rounded focus:outline-none hover:bg-indigo-700"
                  >
            Log In
        </PrimaryButton>
      </form>
    </div>
  );
};

export default LoginForm;
