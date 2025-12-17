import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../service/todo.service";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(user.email, user.password);
      alert(data.message);
      localStorage.setItem("token", data.token);
      navigate("/todos"); 
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6EFF7] ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#BEAEDB] w-[420px] p-10 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-[#423736] mb-8">
          Login
        </h2>

        <label className="text-sm font-semibold text-[#423736]">
          Email
        </label>
        <input
          type="email"
          className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#75619D]"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
          required
        />

        <label className="text-sm font-semibold text-[#423736]">
          Password
        </label>
        <input
          type="password"
          className="w-full mt-2 mb-7 px-4 py-3 rounded-xl bg-[#75619D]"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
          required
        />

        <button className="w-full bg-[#75619D] text-white py-3 rounded-xl font-semibold hover:bg-[#28123c] transition">
          Login
        </button>

        <p className="text-center text-sm mt-6">
          New user?{" "}
          <Link to="/register" className="font-bold hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;