import Main from './pages/Main';
import { Navigate, Route, Routes} from 'react-router-dom';
import SingleAuthor from './components/SingleAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/authors' />}/>
        <Route path='/authors' element={<Main/>}/>
        <Route path='/authors/newauthor' element={<AuthorForm/>}/>
        <Route path ='/authors/:id' element={<SingleAuthor/>}/>
        <Route path ='/authors/edit/:id' element={<UpdateAuthor/>}/>
      </Routes>
    </div>
  );
}
export default App;


