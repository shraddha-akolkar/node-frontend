import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

/**
 * 
 * @param {*} name  string
 * @param {*} email string
 * @param {*} password string
 * @returns msg
 */


/**
 * Register user
 */
const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, {
      name,
      email,
      password,
    });
    return response.data.message;
  } catch (error) {
    console.error("Registration error:", error.response?.data);
    throw error.response?.data?.message || "Registration failed";
  }
};

/**
 * Login user
 */
const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });

    return response.data; // contains token + message
  } catch (error) {
    console.error("Login error:", error.response?.data);
    throw error.response?.data?.message || "Login failed";
  }
};

/**
 * Get all todos
 */const getAllTodos = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${BASE_URL}/todos/all-todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Fetch todos error:", error.response?.data);
    throw error.response?.data?.message || "Failed to load todos";
  }
};



export { register, login, getAllTodos };
