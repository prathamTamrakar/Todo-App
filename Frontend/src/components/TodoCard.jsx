export default function TodoCard({
  todo,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition">
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={`font-semibold text-lg ${
              todo.completed
                ? "line-through text-gray-500"
                : "text-gray-100"
            }`}
          >
            {todo.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {todo.description}
          </p>
        </div>

        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${
            todo.completed
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {todo.completed ? "Done" : "Pending"}
        </span>
      </div>

      <div className="flex gap-2 mt-5">

        <button
          onClick={() => onEdit(todo)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(todo._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
