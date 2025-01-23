import { createToDo, deleteToDo, getToDoById, getToDos, updateToDo } from "../controllers/todoController";
import express from 'express'
const router = express.Router();

router.get('/api/v1/todos', getToDos);
router.get('/api/v1/todo/:id', getToDoById);
router.post('/api/v1/todo/', createToDo);
router.put('/api/v1/todo/:id', updateToDo);
router.delete('/api/v1/todo/:id', deleteToDo);

export default router;