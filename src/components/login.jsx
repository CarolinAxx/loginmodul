import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Login(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    
    let API_URL = `http://localhost:4000/app/signup`;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("logged in");
        setError(false);
        try {
            const result = await axios.get(`${API_URL}`);
            setEmail(result.data);
            navigate('./dashboard')
        }
        catch(error){
            setError(true)
        }

    };
    
    return (
        <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>Logga in här</h2>
            <div className="error">{error}</div>
            
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