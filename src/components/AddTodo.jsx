import React from 'react'

const AddTodo = () => {
  return (
    <div>
      <form className='flex flex-col'>
        <label className=" font-bold text-[#423736] text-xl">ENTER TITLE</label>
        <input type="text" className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#BEAEDB] focus:outline-none focus:ring-2 focus:ring-[#28123c]" />

        <label className="text-XL font-bold text-[#423736]">ENTER DESCRIPTION</label>
        <input type="text" className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-[#BEAEDB] focus:outline-none focus:ring-2 focus:ring-[#28123c]"/>

        <button type="submit" className="w-full bg-[#75619D] text-white py-3 rounded-xl font-semibold hover:bg-[#28123c] transition mb-11">SUBMIT</button>
      </form>
    </div>
  )
}

export default AddTodo
