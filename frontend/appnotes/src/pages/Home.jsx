import axios from "axios";
import { useEffect, useState } from "react";
import Notes from '../components/Notes.jsx'
import Header from "../components/Header.jsx";


const Home = () => {
    const url = 'http://localhost:8080'
    const [notes, setNotes] = useState([]);
    const token = localStorage.getItem('Token')
    const userId = localStorage.getItem('UserId')
    


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
    
        getNotes()

    }, [notes])

  
   


    return (
        <>
            <Header />
            <div className="container-create-note">
                <h1 className="notesTitle">Notes</h1>
                <button>+</button>
            </div>
            <Notes notes={notes} deleteNotes={deleteNotes}/>
        </>
    )
}

export default Home