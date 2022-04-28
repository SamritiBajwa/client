// have a form and send to backend 
// form, input 
// axios: semd info to backend

import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const Create = () => {
    const [authorname, setAuthorname] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {authorname})
            .then(res=>{  //successful 
                history.push("/authors")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors 
                const errorArr = []
                for ( const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                console.log(errorArr)
                setErrors(errorArr)
            })
        }

    return (
        <fieldset>
            <legend> Create.jsx </legend>
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
                errors.map((err, i)=>{
                    return(
                    <p key={i} style={{color: "red"}}>{err}</p>
                )})
            }
        </fieldset>
    )
    }

export default Create