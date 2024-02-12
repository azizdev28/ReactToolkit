import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddEdit from './Components/AddEdit';
import View from './Components/View';
import Edit from './Components/Edit';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addstudent' element={<AddEdit/>}/>
        <Route path='/update/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
