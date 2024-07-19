import express from 'express';
import User from './controller/user.js';
import Notes from './controller/notes.js';
import Auth from './controller/authuser.js';

const router = express.Router();

//User
router.get('/users', User.getUsers);
router.get('/users/:id', User.getUserById)
router.post('/register', User.createUser);
router.put('/users/:id', User.updateUser)
router.delete('/users/:id', User.deleteUser);

////////////////////////////////////////////

//Notes
router.get('/notes', Notes.getNotes);
router.get('/notes/:id', Notes.getNotesById);
router.post('/notes', Notes.createNote);
router.put('/notes/:id', Notes.updateNote);
router.delete('/notes/:id', Notes.deleteNote);

////////////////////////////////////////////

//Auth User
router.post('/auth/login', Auth.authUser)

export default router;