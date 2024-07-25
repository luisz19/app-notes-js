import axios from "axios";
import { useEffect, useState } from "react";
import Notes from '../components/Notes.jsx'
import Header from "../components/Header.jsx";
import CreateNote from "../components/CreateNote.jsx";
import Modal from "../components/Modal.jsx";
import ModalUpdate from "../components/ModalUpdate.jsx";

const Home = () => {
    const url = 'http://localhost:8080'
    const [notes, setNotes] = useState([]);
    const [titulo, setTitulo] = useState('');
    const token = localStorage.getItem('Token')
    const userId = localStorage.getItem('UserId')
    const [noteId, setNoteId] = useState('');
    const [trigger, setTrigger] = useState(false);
    const [click, setClick] = useState(0)
    const [novoTitulo, setNovoTitulo] = useState('');
    const [assunto, setAssunto] = useState('');
    
    const [showContainer, setShowContainer] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowContainer(false)
        getSearch()

    }

    const Clicked = () => {
        setClick(click + 1)
        console.log(click)
    }

    const getSearch = async () => {

        await axios.get(`${url}/user/${userId}/notes/search`, {
           
                headers: {
                     Authorization: `Bearer ${token}`
                },

                params: {
                    q: titulo
                }
           
        })

        .then(res => {
            setNotes(res.data);
            
        })
        .catch(err => {
            console.error(err.data);
        })

       
    }

    const modalNote = (id) => {
       
       
        setNoteId(id)
        console.log(noteId)

    }

    const updateNotes = async() => {
         await axios.put(`${url}/notes/${noteId}`, 
                {
                    user_id: userId,
                    titulo: novoTitulo,
                    assunto: assunto
                },
                {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            
            },
        )

        .then(res => {
            console.log(res)
            setNoteId(false)
            getNotes()
            
        })
    }

    const createNote = async() => {
        await axios.post(`${url}/notes`, 
               {
                   user_id: userId,
                   titulo: novoTitulo,
                   assunto: assunto
               },
               {
               headers: {
                   Authorization: `Bearer ${token}`
               }
           
           },
       )

       .then(res => {
           console.log(res)
           getNotes()
           setClick(false)
           
       })
   }

    //fazer update

    const getNotes = async() => {

        await axios.get(`${url}/user/${userId}/notes`, {
            headers: {
                 Authorization: `Bearer ${token}`
            }
        })
        
        .then(res => {
            setNotes(res.data)
        

        })
        .catch(err => {
            console.error(err)
        })
    }

    const deleteNotes = async(id) => {
        await axios.delete(`${url}/notes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
           }
        })
        .then(res => {
            console.log(res)
            getNotes()
        })
        .catch(err => {
            console.error(err)
        })
      
    }

    useEffect(() => {
    
        if (!titulo && !showContainer) {
            getNotes();
        }
        

    }, [trigger])

    return (
        <>
            <Header titulo={titulo} setTitulo={setTitulo} handleSubmit={handleSubmit} />
            <CreateNote Clicked={Clicked}/>

            {/* modal para criar nota */}
            {click && <Modal novoTitulo={novoTitulo} setTitulo={setNovoTitulo} 
            assunto={assunto} setAssunto={setAssunto} createNote={createNote}/>}

            {/* modal para atualizar nota */}
            {noteId && <ModalUpdate
            novoTitulo={novoTitulo} setTitulo={setNovoTitulo} 
            assunto={assunto} setAssunto={setAssunto} updateNotes={updateNotes}/>}

            <Notes notes={notes} deleteNotes={deleteNotes} modalNote={modalNote} />
        </>
    )
}

export default Home