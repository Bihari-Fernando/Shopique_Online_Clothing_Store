import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...submitData } = form;

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/register`,
        submitData
      );

      const token = response.data.token;

      localStorage.setItem("token", token);

      alert("Registration successful. You are now logged in.");

      navigate("/");
    } catch (err) {
      const errors = err.response?.data?.errors;
      if (errors) {
        const firstError = Object.values(errors)[0][0];
        alert(firstError);
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Your Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              pattern="07[0-9]{8}"
              title="Phone number should start with 07 and have 10 digits"
              required
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              placeholder="07xxxxxxxx"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              placeholder="123, Main Street, Colombo"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full hover:opacity-90 transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
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
