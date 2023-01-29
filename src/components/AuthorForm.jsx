import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthorForm(props){
    const[name,setName] = useState("");
    const navigate = useNavigate();
    const[error, setError] = useState("");


const handleSubmit = (e) =>{
    e.preventDefault();
    const newAuthor = {
        name
    }
    axios
        .post('http://localhost:8000/api/authors',newAuthor)
        .then(() => navigate('/'))
        .catch(err => setError(err.response.data.errors.name.message));
}


return(
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Author Name: <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <button type="submit">Create</button>
                    <h3>{error}</h3>
                </div>
            </form>
        </div>
    </div>
)
}
export default AuthorForm;