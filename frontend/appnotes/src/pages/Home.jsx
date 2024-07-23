import axios from "axios";
import { useEffect, useState } from "react";
import Notes from '../components/Notes.jsx'
import Header from "../components/Header.jsx";
import CreateNote from "../components/CreateNote.jsx";
import Search from "../pages/Search.jsx";


const Home = () => {
    const url = 'http://localhost:8080'
    const [notes, setNotes] = useState([]);
    const [titulo, setTitulo] = useState('');
    const token = localStorage.getItem('Token')
    const userId = localStorage.getItem('UserId')
    const [showContainer, setShowContainer] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowContainer(false)
        getSearch()

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
      
    }

    useEffect(() => {
    
        if (!titulo && !showContainer) {
            getNotes();
        }
        

    }, [notes])

  
   


    return (
        <>
            <Header titulo={titulo} setTitulo={setTitulo} handleSubmit={handleSubmit}/>
            <CreateNote />
            <Notes notes={notes} deleteNotes={deleteNotes}/>
        </>
    )
}

export default Home