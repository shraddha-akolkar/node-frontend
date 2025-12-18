import axios from "axios";

const BASE_URL = "http://localhost:3000/api";
    const token = localStorage.getItem("token");
const getHtppOption = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

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
 */


const getAllTodos = async () => {
  try {

    const response = await axios.get(
      `${BASE_URL}/todos/all-todos`, getHtppOption
     
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// add todos



const addTodo = async (title, description) => {
  try {

    const response = await axios.post(`${BASE_URL}/todos/add-todo`, { title, description },
     getHtppOption );

    return response.data;
  } catch (error) {
    console.error("Add todo error:", error.response?.data || error.message);
    throw error;
  }
};


// delete todo
const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/todos/${id}`,
      getHtppOption
    );

    return response.data.message;
  } catch (error) {
    console.error("Delete error:", error.response?.data || error.message);
    throw error;
  }
};

// edit
const editTodo = async (id, newTitle, newDesc) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/todos/${id}`,
      { title: newTitle, description: newDesc },
      getHtppOption        
    );

    return response.data.message;
  } catch (error) {
    console.error("Edit error:", error.response?.data || error.message);
    throw error;
  }
};

export { register, login, getAllTodos ,addTodo, deleteTodo, editTodo};
