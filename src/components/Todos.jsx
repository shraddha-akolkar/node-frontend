import React, { useEffect,useState } from "react";
import AddTodo from "./AddTodo";
import { deleteTodo, getAllTodos } from "../service/todo.service";

const Todos = () => {
  const [todoArray, setTodoArray] = useState([]);

 const fetchTodos = async () => {
  try {
    const todos = await getAllTodos();
    setTodoArray(todos);   
  } catch (error) {
    console.log(error);
  }
};

// del
const deleteTodoApiCall = async (id) => {
  try {
    const message = await deleteTodo(id);
    await fetchTodos(); 
    alert(message);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchTodos();
  }, []);
      
  return (
    <div className="mt-24 px-6">
<AddTodo onTodoAdded={fetchTodos} />
      <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-800">
        ALL TODOS
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#3A2D34] text-center  overflow-hidden mb-10">
          <thead className="bg-[#BEAEDB] ">
            <tr>
              <th className="border  border-[#3A2D34] px-4 py-3 text-center">
                Sr.no
              </th>
              <th className="border border-[#3A2D34] px-4 py-3 text-center">
                Title
              </th>
              <th className="border border-[#3A2D34] px-4 py-3 text-center">
                Description
              </th>
              <th className="border border-[#3A2D34] px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
  {todoArray.length > 0 ? (
    todoArray.map((todo, index) => (
      <tr
        key={todo._id || index}
        className="hover:bg-gray-50 transition"
      >
        <td className="border border-[#3A2D34] px-4 py-2">
          {index + 1}
        </td>
        <td className="border border-[#3A2D34] px-4 py-2">
          {todo.title}
        </td>
        <td className="border border-[#3A2D34] px-4 py-2">
          {todo.description}
        </td>
        <td className="border border-[#3A2D34] px-4 py-2 space-x-2">
          <button className="bg-[#75619D] hover:bg-[#af92e4] text-white px-3 py-1 rounded cursor-pointer">
            Edit
          </button>
          <button className="bg-[#3F2A52] hover:bg-[#2a1e3e] text-white px-3 py-1 rounded cursor-pointer"
          onClick={() => deleteTodoApiCall(todo._id)}>
            Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center py-4">
        No todos found
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Todos;
