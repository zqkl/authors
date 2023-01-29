import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



function SingleAuthor() {
    const { id } = useParams();
    const [author,setAuthor] = useState(null)
    const navigate = useNavigate();
    useEffect(() =>{
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err));
        return() => controller.abort();
    },[])
    const handleDelete = () =>{
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err));
    }



    return (
        <div>
            <h1>Author:</h1>
            {author && <div>
                <h5>Author: {author.name}</h5>
                <Link to={`/authors/edit/${author._id}`}>Edit Author</Link>
                <button onClick={handleDelete}>Delete</button>
            </div>}
        </div>
    );
}

export default SingleAuthor;