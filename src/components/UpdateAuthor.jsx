import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';


function UpdateAuthor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [author,setAuthor] = useState({});
    
    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/authors/${id}`,{signal:controller.signal})
            .then(res =>{
                setAuthor(res.data);
            })
            .catch(err => console.log(err));
            return () => controller.abort();
    },[id]);

    const handleChange = (e) =>{
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${id}`,{
                name:author.name
            })
            .then(res =>{
                console.log(res.data);
                navigate('/authors');
            })
            .catch(err => console.log(err));
    };
    
    
    
    
    return (
        <div>
            <h1>Update Author</h1>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Author</label>
                            <input type="text" name="name" value={author.name} onChange={handleChange}></input>
                            <button>Submit changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateAuthor;
