import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TodoModal from "../components/TodoModal";
import TodoCard from "../components/TodoCard";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const fetchTodos = async () => {
        const res = await axios.get(BASE_URL);
        setTodos(res.data.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleSave = async (data) => {
        if (selectedTodo) {
            const res = await axios.put(
                `${BASE_URL}/${selectedTodo._id}`,
                data
            );
            setTodos((prev) =>
                prev.map((t) =>
                    t._id === selectedTodo._id
                        ? res.data.data
                        : t
                )
            );
        } else {
            const res = await axios.post(BASE_URL, data);
            setTodos([res.data.data, ...todos]);
        }

        setSelectedTodo(null);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${BASE_URL}/${id}`);
        setTodos((prev) =>
            prev.filter((t) => t._id !== id)
        );
    };


    return (
        <div className="min-h-screen bg-slate-950 text-gray-100">

            <Navbar onOpenModal={() => setModalOpen(true)} />

            <div className="p-8 max-w-6xl mx-auto">

                <div className="mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Your Tasks
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Manage and organize your daily work efficiently.
                    </p>
                </div>

                {todos.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 border border-dashed border-slate-700 rounded-2xl bg-slate-900">
                        <p className="text-gray-400 text-lg">
                            No Todos Found
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Click "Create Todo" to add your first task.
                        </p>
                    </div>
                )}

  
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {todos.map((todo) => (
                        <TodoCard
                            key={todo._id}
                            todo={todo}
                            onEdit={(todo) => {
                                setSelectedTodo(todo);
                                setModalOpen(true);
                            }}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>

            <TodoModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setSelectedTodo(null);
                }}
                onSave={handleSave}
                existingTodo={selectedTodo}
            />
        </div>
    );
}
