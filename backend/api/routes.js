import express from 'express';
import User from './controller/user.js';
import Notes from './controller/notes.js';

const router = express.Router();

//User
router.get('/users', User.getUsers);
router.post('/users', User.createUser);
router.get('/users/:id', User.getUserById)
router.put('/users/:id', User.updateUser)
router.delete('/users/:id', User.deleteUser);

////////////////////////////////////////////

//Notes
router.get('/notes', Notes.getNotes);
router.get('/notes/:id', Notes.getNotesById);
router.post('/notes', Notes.createNote);
router.put('/notes/:id', Notes.updateNote);
router.delete('/notes/:id', Notes.deleteUser);

export default router;