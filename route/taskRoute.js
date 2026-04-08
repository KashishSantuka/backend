import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const taskArray = [];

router.get('/', (req, res) => {
    console.log("Hello World")
  res.status(200).json(taskArray);
});

router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTask = {
    id: uuidv4(),
    title: title.trim(),
    status: 'todo'
  };

  taskArray.push(newTask);

  res.status(201).json(newTask);
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const task = taskArray.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.status = status;
  res.status(200).json(task);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = taskArray.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  taskArray.splice(index, 1);
  res.status(200).json({ message: 'Task deleted' });
});

export default router;