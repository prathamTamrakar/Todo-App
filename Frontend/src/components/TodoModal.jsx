import { useState, useEffect } from "react";

export default function TodoModal({
  isOpen,
  onClose,
  onSave,
  existingTodo,
}) {
  const emptyForm = {
    title: "",
    description: "",
    completed: false,
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (existingTodo) {
      setForm(existingTodo);
    } else {
      setForm(emptyForm);
    }
  }, [existingTodo, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(form);
    setForm(emptyForm);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md p-6 rounded-2xl shadow-2xl pointer-events-auto">

        <h2 className="text-xl font-bold mb-5 text-center text-gray-100">
          {existingTodo ? "Edit Todo" : "Create Todo"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Title"
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Description"
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={form.completed}
              onChange={(e) =>
                setForm({
                  ...form,
                  completed: e.target.checked,
                })
              }
            />
            Completed
          </label>

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-700 text-gray-300 hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
