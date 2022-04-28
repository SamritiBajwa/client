//grab the id from the params
//using the id, axios 
// useEffect, useState

import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const OneAuthor = () => {
    const {id} = useParams() // destructure id from the params
    const [author, setAuthor] = useState()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=> setAuthor(res.data))
        .catch(err=> console.log(err))
    },[])



    return (
        <fieldset>
            <legend> OneAuthor.jsx </legend>
            {
                author?
                <div>
                    <h3>{author.authorname}</h3>
                </div>:
                <h1>Loading...</h1>
            }
        </fieldset>
    )
    }

export default OneAuthor