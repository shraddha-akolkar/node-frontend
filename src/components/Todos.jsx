import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { deleteTodo, editTodo, getAllTodos } from "../service/todo.service";

const Todos = () => {
  const [todoArray, setTodoArray] = useState([]);
const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [editId, setEditId] = useState("");

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

  // edit
  const editSomething = (todo) => {
    setEditId(todo._id);
    setNewTitle(todo.title);
    setNewDesc(todo.description);
  };

const callEditAPi = async () => {
  try {
    const message = await editTodo(editId, newTitle, newDesc);
    alert(message);
    await fetchTodos();   // ✅ correct function
    cancelEditing();
  } catch (error) {
    console.log(error);
  }
};

  const cancelEditing = () => {
    setEditId("");
    setNewTitle("");
    setNewDesc("");
  }

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
                    {editId === todo._id ? (
                      <input
                        type="text"
                        className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#BEAEDB] focus:outline-none focus:ring-2 focus:ring-[#28123c]"
                        value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                      />
                    ) : (
                      todo.title
                    )}{" "}
                  </td>

                  <td className="border border-[#3A2D34] px-4 py-2">
                    {editId === todo._id ? (
                      <textarea className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#BEAEDB] focus:outline-none focus:ring-2 focus:ring-[#28123c]" 
                      value={newDesc} onChange={(e) => setNewDesc(e.target.value)}/>
                    ) : (
                      todo.description
                    )}{" "}
                  </td>
                  <td className="border border-[#3A2D34] px-4 py-2 space-x-2">
  {editId === todo._id ? (
    <>
      <button
        className="bg-[#75619D] hover:bg-[#af92e4] text-white px-3 py-1 rounded cursor-pointer"
      onClick={callEditAPi} >
        ok
      </button>
      <button
        className="bg-[#3F2A52] hover:bg-[#2a1e3e] text-white px-3 py-1 rounded cursor-pointer"
        onClick={() => cancelEditing()}
      >
        cancel
      </button>
    </>
  ) : (
    <>
      <button
        className="bg-[#75619D] hover:bg-[#af92e4] text-white px-3 py-1 rounded cursor-pointer"
        onClick={() => editSomething(todo)}
      >
        Edit
      </button>
      <button
        className="bg-[#3F2A52] hover:bg-[#2a1e3e] text-white px-3 py-1 rounded cursor-pointer"
        onClick={() => deleteTodoApiCall(todo._id)}
      >
        Delete
      </button>
    </>
  )}
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
