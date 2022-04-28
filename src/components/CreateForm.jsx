import React, {useState} from 'react'
import axios from "axios"

const CreateForm = (props) => {
    const [authorname, setAuthorname] = useState("")
    const [errors, setErrors] = useState([])


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {authorname})
            .then(res=>{
                props.reload()
                clearForm()
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors 
                const errorArr =[]
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })

    }
    const clearForm = () =>{
        setAuthorname("")
    }
    return (
        <fieldset>
            <legend>CreateForm.jsx</legend>
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
                errors.map((err, i)=>(
                    <p key={i} style={{color: "red"}}>{err}</p>
                ))
            }
        </fieldset>
    )
    }

export default CreateForm