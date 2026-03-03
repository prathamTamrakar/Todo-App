export default function Navbar({ onOpenModal }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold shadow-md">
          T
        </div>
        <h1 className="text-xl font-semibold text-gray-100">
          TaskFlow
        </h1>
      </div>

      <button
        onClick={onOpenModal}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition shadow-md"
      >
        Create Todo
      </button>
    </nav>
  );
}
