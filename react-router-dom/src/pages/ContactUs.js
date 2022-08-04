import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function ContactUs() {

    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        fullName: '',
        email: ''
    })

   const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
   }

    function submitForm() {
        navigate('/form-submitted')
    }

    return(
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name: </label>
                <input type='text' 
                       name='fullName'
                       value={formState.fullName}
                       onChange={updateFormField}/>
            </div>
            <div>
                <label>Email: </label>
                <input type='text' 
                       name='email'
                       value={formState.email}
                       onChange={updateFormField}/>
            </div>
            <input type='submit' onClick={submitForm} value='Submit'/>
        </React.Fragment>
    )
}