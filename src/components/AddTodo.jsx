import React, { useState } from 'react'
import { addTodo } from '../service/todo.service';

const AddTodo = ({ onTodoAdded}) => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addTodo(title, description);
    setTitle("");
    setDescription("");
    onTodoAdded();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
        <label className=" font-bold text-[#423736] text-xl">ENTER TITLE</label>
        <input type="text" className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#BEAEDB] focus:outline-none focus:ring-2 focus:ring-[#28123c]"
        value={title} onChange={(e) =>setTitle(e.target.value)} />

        <label className="text-XL font-bold text-[#423736]">ENTER DESCRIPTION</label>
        <textarea  className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#BEAEDB] focus:outline-none focus:ring-2 focus:ring-[#28123c]"
        value={description} onChange={(e) =>setDescription(e.target.value)} />

        <button type="submit" className="w-full bg-[#75619D] text-white py-3 rounded-xl font-semibold hover:bg-[#28123c] transition mb-11">SUBMIT</button>
      </form>
    </div>
  )
}

export default AddTodo
