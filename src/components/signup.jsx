import React, { useState } from 'react'
import axios from 'axios'


export default function Signup(){

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("registererad")
        const registered =  {
            name: name,
            username: username,
            email: email,
            password: password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(console.log(registered))
        .then(response => console.log(response.data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-inner">
                <h2>Registera dig här</h2>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" 
                    onChange={e => setName(e.target.value)} value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Username: </label>
                    <input type="text" name="name" id="username" 
                    onChange={e => setUsername(e.target.value)} value={username}/>
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
                <input type="submit" value="Register"/>
            </div>
        </form>
    )

}
