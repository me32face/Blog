import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import UserLogin from './Components/USER/UserLogin';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AdminLogin from './Components/ADMIN/AdminLogin';


function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>

          <Route path='/UserLogin' element={<UserLogin/>}/>
          <Route path='/AdminLogin' element={<AdminLogin/>}/>

        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;