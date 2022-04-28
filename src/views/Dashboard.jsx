// grab all authors from backend
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'

const Dashboard = () => {
    const [authors, setAuthors] = useState()
    const history = useHistory ()
    const [refresh, setRefresh] = useState(true)


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res=>setAuthors(res.data))
            .catch(err=>console.log(err))
    },[refresh])

    const handleDelete =(deleteId)=>{
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
        .then(res=>{
            setRefresh(!refresh)
        })
        .catch(err=>console.log(err))

    }

    return (
        <fieldset>
            <legend> Dashboard.jsx </legend>
            <table>
                <thead>
                    <tr>
                        <th>Author Name:</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors &&
                            authors.map((author, i)=>(
                                <tr key={i}>
                                    <td> <Link to={`/authors/${author._id}`}>{author.authorname}</Link></td>
                                    <td><Link to ={`/authors/${author._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={()=>handleDelete(author._id)} >Delete</button></td>
                                </tr>
                            ))
                    }     
                </tbody>
            </table>
        </fieldset>
    )
    }

export default Dashboard

// <td> {author.authorname} </td>
//supposed to be in line 43 but when i put it in name shows twice on main page 