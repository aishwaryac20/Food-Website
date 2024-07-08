
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/menu" element={<Menu/>}/>
            <Route  path="*" element={<PageNotFound/>}/>
            </Routes>
         <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;
