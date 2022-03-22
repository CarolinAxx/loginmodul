import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Login(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);
    const [submit, setSubmit] = useState(false);
    
    let API_URL = `http://localhost:4000/app/signup`;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("logged in");
        if (email === '' || password === '') {
            setError(true);
        } else {
            navigate('./dashboard')
            setSubmit(true);
            setError(false);
        }

    };
    const submitMessage = () =>{
        return (
            <div style={{
                display: submit ? '': 'none',
            }}>
            <h3>Logged in</h3>

            </div>
        );
    }

    const errorMessage = () =>{
        return (
            <div style={{
                display: error ? '': 'none',
            }}>
            <h3> Please enter all fields</h3>

            </div>
        );
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>Logga in här</h2>
           
            <div>
                {errorMessage()}
                {submitMessage()}
            </div>
          
            
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" 
                onChange={e => setEmail(e.target.value)} value={email}/>

            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password"
                onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <input type="submit" value="Log in"/>
        </div>
    </form>
    )
}