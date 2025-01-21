import { createToDo, deleteToDo, getToDoById, getToDos, updateToDo } from "../controllers/todoController";
import express from 'express'
const router = express.Router();

router.get('/', getToDos);
router.get('/:id', getToDoById);
router.post('/', createToDo);
router.put('/:id', updateToDo);
router.delete('/:id', deleteToDo);