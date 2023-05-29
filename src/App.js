import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home';
import Guest from './pages/guest_feedback';
import Mess from './pages/mess_feedback';
import Residence from './pages/residence_feedback';
import Admission from './pages/admission_feedback';
import Admin from './pages/admin';
import Fonts from './fonts'
import theme from './theme'
import {
  ChakraProvider,
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Fonts />
       <Router>
           <Routes>
                 <Route exact path='/' element={<Home/>}></Route>
                 <Route exact path='/admin' element={< Admin />}></Route>
                 <Route exact path='/guest' element={< Guest />}></Route>
                 <Route exact path='/admission' element={< Admission />}></Route>
                 <Route exact path='/mess' element={< Mess />}></Route>
                 <Route exact path='/residence' element={< Residence />}></Route>
          </Routes>
       </Router>
  </ChakraProvider>
  );
}

export default App;
