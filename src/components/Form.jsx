import React from "react";

const Form = () => {
  return (
    <div className="p-6">
      <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="p-2 border rounded-md" placeholder="John" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="p-2 border rounded-md" placeholder="Doe" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="p-2 border rounded-md" placeholder="john@example.com" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" className="p-2 border rounded-md" placeholder="123-456-7890" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Company</label>
          <input type="text" className="p-2 border rounded-md" placeholder="Company Name" />
        </div>
        <div className="col-span-5">
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
