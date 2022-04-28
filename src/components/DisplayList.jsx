import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const DisplayList = (props) => {
    const {authors} = props

    const handleDelete = (deleteID)=>{
        axios.delete(`http://localhost:8000/api/authors/${deleteID}`)
            .then(res=>{
                props.reload()
            })
            .catch(err => console.log(err))
        }

    return (
        <fieldset>
            <legend>DisplayList.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>Author Name:</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i)=>(
                            <tr>
                                <td> <Link to={`/authors/${author._id}`}>{author.authorname}</Link></td>
                                <td> {author.authorname} </td>
                                <td><Link to ={`/authors/${author._id}/edit`}>Edit</Link></td>
                                <td><button onClick={()=>handleDelete(author._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    )}

export default DisplayList