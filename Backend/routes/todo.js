import express from "express";
import {handleStoreTodos,handleGetAllTodos,handleUpdateTodo,handleDeleteTodo} from "../controllers/todo.js";

const router = express.Router();

router.post("/", handleStoreTodos);
router.get("/", handleGetAllTodos);
router.put("/:id", handleUpdateTodo);
router.delete("/:id", handleDeleteTodo);

export default router;
