import logo from './logo.svg';
import './App.css';
import {BorwserRouter,BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Hotels from './pages/Hotels/Hotels';
import Search from './pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/hotels' Component={Hotels} />
      <Route path='/hotel/:id' Component={Hotel} />
      <Route path='/search' Component={Search} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
