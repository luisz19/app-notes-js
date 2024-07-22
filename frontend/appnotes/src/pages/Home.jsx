import axios from "axios";
import { useEffect, useState } from "react";
import Notes from '../components/Notes.jsx'
import Header from "../components/Header.jsx";


const Home = () => {
    const url = 'http://localhost:8080'
    const [notes, setNotes] = useState([])
   
    const getNotes = async({token, userId}) => {

        await axios.get(`${url}/user/${userId}/notes`, {
            headers: {
                 Authorization: `Bearer ${token}`
            }
        })
        
        .then(res => {
            console.log(res)
            setNotes(res.data)

        })
        .catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('Token')
        const userId = localStorage.getItem('UserId')
        
        getNotes({token, userId})

    }, [])


    return (
        <>
            <Header />
            <div className="container-create-note">
                <h1 className="notesTitle">Notes</h1>
                <button>+</button>
            </div>
            <Notes notes={notes}/>
        </>
    )
}

export default Home