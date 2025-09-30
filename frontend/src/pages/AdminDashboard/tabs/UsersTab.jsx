import React from "react";

export default function UsersTab() {
  const users = [
    { id: 1, name: "Ali Khan", email: "ali@example.com", role: "Customer" },
    { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Customer" },
    { id: 3, name: "Bilal Khan", email: "bilal@example.com", role: "Customer" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Users</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
