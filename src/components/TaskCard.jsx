import React from 'react';

export default function TaskCard({ task, onDelete, onEdit }) {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-500';
      case 'InProgress': return 'bg-blue-500';
      case 'Pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : 'No date';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 break-words">{task.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)} ml-2`}>
          {task.priority}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.description}</p>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
        </div>
        <p className="text-xs text-gray-500">Due: {formatDate(task.dueDate)}</p>
      </div>

      {task.documents && task.documents.length > 0 && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <p className="text-xs font-semibold text-gray-700 mb-2">Files ({task.documents.length})</p>
          <div className="space-y-1">
            {task.documents.map((doc, idx) => (
              <a
                key={idx}
                href={`/uploads/${doc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xs block truncate"
              >
                📄 {doc}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 px-3 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
