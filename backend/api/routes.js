import express from 'express';
import User from './controller/user.js';
import Notes from './controller/notes.js';
import Auth from './controller/authuser.js';
import UserNotes from './controller/userNotes.js';
import verifyToken from './controller/verifyToken.js';
import Search from './controller/search.js';

const router = express.Router();

//User
router.get('/users', verifyToken, User.getUsers);
router.get('/users/:id', verifyToken, User.getUserById)
router.post('/register', User.createUser);
router.put('/users/:id', verifyToken, User.updateUser)
router.delete('/users/:id', verifyToken, User.deleteUser);

////////////////////////////////////////////

//Notes
router.get('/notes', verifyToken, Notes.getNotes);
router.get('/notes/:id', verifyToken, Notes.getNotesById);
router.post('/notes', verifyToken, Notes.createNote);
router.put('/notes/:id', verifyToken, Notes.updateNote);
router.delete('/notes/:id', verifyToken, Notes.deleteNote);

////////////////////////////////////////////

//Auth User
router.post('/auth/login', Auth.authUser)

////////////////////////////////////////////

//User Notes
router.get('/user/:id/notes', verifyToken, UserNotes.userNotes)

////////////////////////////////////////////

//Pesquisa
router.get('/user/:id/notes/search', Search.search)

// como usa = /search?q=

export default router;