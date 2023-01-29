import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function AllAuthor(props){
    const { authors } = props
    const navigate = useNavigate();
    console.log(authors)
    return(
        authors&& authors.map(author => {
            return(
                <div key ={author._id}>
                    <div>
                        <Link to={`/authors/${author._id}`}><h1>{author.name}</h1></Link>
                        <button onClick={() => navigate(`/authors/edit/${author._id}`)}>Update</button>
                        <button onClick={() => props.handleDelete(author._id)}>Delete</button>
                        
                    </div>
                </div>
            )
        })
    )
}
export default AllAuthor;

