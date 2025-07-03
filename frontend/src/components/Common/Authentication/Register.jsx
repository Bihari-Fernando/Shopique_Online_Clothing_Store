import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('http://localhost:8000/api/register', form);

      alert('Registration successful. You can now log in.');
      navigate('/login');
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert('Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Your Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-800 dark:border-gray-600"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium">Role</label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full hover:opacity-90 transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-primary hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
