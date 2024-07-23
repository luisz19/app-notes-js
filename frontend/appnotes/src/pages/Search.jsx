import Header from "../components/Header"
import Notes from "../components/Notes"
import Home from "./Home"
import CreateNote from "../components/CreateNote"
import { useEffect, useState } from "react" 
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Search = () => {
    const url = 'http://localhost:8080'
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('UserId')
    const [titulo, setTitulo] = useState('');
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/notes/search')
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



    return (
        <div className="Search">
            <Header setTitulo={setTitulo} titulo={titulo} handleSubmit={handleSubmit}/>
            {/* <CreateNote /> */}
            <Notes notes={notes}/>

        </div>
    )
}

///mudar tudo

export default Search