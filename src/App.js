
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';

import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';
import Offers from './Pages/Offers';
import ForgotPassword from './Pages/ForgotPassword';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signOut' element={<SignOut/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
