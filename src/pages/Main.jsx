import axios from 'axios';
import { useEffect, useState } from 'react';
import AllAuthor from '../components/AllAuthors';
import { Link } from 'react-router-dom'

function Main(){
    const[authors,setAuthors] = useState('');
    const [loaded,setLoaded] = useState(false)

    const loadedState = () =>{
        setLoaded(!loaded)
    }


    useEffect(() =>{
        const controller = new AbortController();
        axios
            .get('http://localhost:8000/api/authors',{signal:controller.signal})
            .then((res) => {
                setAuthors(res.data);
                setLoaded(true)
            })
            .catch((err) => console.log(err));
        return () => controller.abort();
    },[loaded]);

    const handleDelete = (id) =>{
        axios
        .delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res.data)
            setLoaded(!loaded)
        })
        .catch(err => console.log(err));
    }
    return(
        <div>
            <h1>Favorite Authors</h1>
            <h2>We have qoutes by:</h2>
            <Link to='/authors/newauthor'>Create New Author!</Link>
            <AllAuthor authors={authors} loaded={loadedState} handleDelete={handleDelete}/>
        </div>
    )

}
export default Main;
