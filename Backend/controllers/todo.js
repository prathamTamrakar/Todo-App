import Todo from "../models/todo.js";

const handleStoreTodos = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required",
            });
        }

        const newTodo = await Todo.create({
            title,
            description,
            completed,
        });

        return res.status(201).json({
            message: "Todo Added Successfully",
            data: newTodo,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const handleGetAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Todos fetched successfully",
            data: todos,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const handleUpdateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {
                title,
                description,
                completed,
            },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }

        return res.status(200).json({
            message: "Todo updated successfully",
            data: updatedTodo,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const handleDeleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }

        return res.status(200).json({
            message: "Todo deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export {
    handleStoreTodos,
    handleGetAllTodos,
    handleUpdateTodo,
    handleDeleteTodo,
};


