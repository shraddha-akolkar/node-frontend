import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../service/todo.service";

const Register = () => {
  const [user, setUser] = useState({name: "",email: "",password: "",});
  const navigate = useNavigate(); // ✅ ADD THIS

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ VALIDATION
    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }
    
    try {
      const message = await register(user.name, user.email, user.password);
      alert(message);
      navigate("/login"); // ✅ USE NAVIGATE INSTEAD
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6EFF7] pt-24">
      <form
        onSubmit={handleSubmit}
        className="bg-[#BEAEDB] w-[420px] p-10 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-[#423736] mb-8">
          Create Account
        </h2>

        <label className="text-sm font-semibold text-[#423736]">
          Name
        </label>
        <input
          type="text"
          placeholder="Shraddha Akolkar"
          className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#75619D] focus:outline-none focus:ring-2 focus:ring-[#28123c]"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
          required
        />

        <label className="text-sm font-semibold text-[#423736]">
          Email
        </label>
        <input
          type="email"
          placeholder="shraddha@gmail.com"
          className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#75619D] focus:outline-none focus:ring-2 focus:ring-[#28123c]"
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
          placeholder="*******"
          className="w-full mt-2 mb-7 px-4 py-3 rounded-xl bg-[#75619D] focus:outline-none focus:ring-2 focus:ring-[#28123c]"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
          required
        />

        <button className="w-full bg-[#75619D] text-white py-3 rounded-xl font-semibold hover:bg-[#28123c] transition" type="submit">
          Register
        </button>

        <p className="text-center text-sm text-[#423736] mt-6">
          Already registered?{" "}
          <Link
            to="/login"
            className="font-bold text-[#604c3a] hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
