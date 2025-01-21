import { Request, Response } from 'express';

import toDoModel from "../models/toDoModel"

export const getToDos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos = await toDoModel.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todos', error })
    }
}

export const getToDoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const todo = await toDoModel.findById(id)

        if (!todo) {
            res.status(404).json({ message: 'Todo not found' })
            return;
        }
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todo', error })
    }
}

export const createToDo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body;
        const newToDo = await toDoModel.create({ title, description })

        res.status(201).json(newToDo)
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo', error })
    }
}

export const updateToDo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const updatedToDo = await toDoModel.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true }
        )
        if (!updatedToDo) {
            res.status(404).json({ message: 'Todo not found' })
            return;
        }
        res.status(200).json(updatedToDo)

    } catch (error) {
        res.status(500).json({ message: 'Error updating todo', error })
    }
}

export const deleteToDo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedTodo = await toDoModel.findByIdAndDelete(id)
        if (!deletedTodo) {
            res.status(404).json({ message: 'Todo not found' })
            return;
        }
        res.status(200).json({ message: 'Todo deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error })
    }
}