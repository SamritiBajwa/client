import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CreateForm from '../components/CreateForm'
import DisplayList from '../components/DisplayList'

const Main = () => {
    const [authors, setAuthors] = useState()
    const [refresh, setRefresh] = useState(true)


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
            .then(res=>setAuthors(res.data))
            .catch(err=>console.log(err))
    }, [refresh])

    const reload = ()=> {
        setRefresh(!refresh)
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <CreateForm  reload={reload}/>
            {
                authors &&
                <DisplayList authors={authors} reload={reload}/>
            }
        </fieldset>
    )
    }

export default Main