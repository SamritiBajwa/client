//getOne + create
// grab the id from the params 
//using the id, axios, useEffect, useState (grab info from backend )
// form, input (useState)
// history: redirect 


import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router'


const EditAuthor = () => {
    const {id} = useParams()
    const [authorname, setAuthorname] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=> {
            const author = res.data
            setAuthorname(author.authorname)
        })
        .catch(err=> console.log(err))
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorname})
            .then(res=>{
                history.push("/authors")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors 
                const errorArr = []
                for ( const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })
    }



    return (
        <fieldset>
            <legend> EditAuthor.jsx </legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Author Name</label>
                    <input type="text" name="authorname" value={authorname}
                        onChange={e=>setAuthorname(e.target.value)}
                    />
                </div>
                <button>Cancel</button>
                <button>Submit</button>
            </form>
            {
                errors.map((err, i)=>{return(
                    <p key={i} style={{color: "red"}}>{err}</p>
                )})
            }
        </fieldset>
    )
    }

export default EditAuthor