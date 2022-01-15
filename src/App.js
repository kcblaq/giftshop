import NavBar from "./components/NavBar";
import "./App.css";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/index";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import Gift from "./components/gift/Gift";
import Store from './components/store/Store';
import Redeem from './components/redeem/Redeem';
import Abstract from './components/Abstract';




function App() {
  return (
    <Router>
<NavBar/>
<Routes>
  <Route path="/store" element={<Store/>} />
  <Route path="/redeem" element={<Redeem/>} />
  <Route path="/gift" element={<Gift/>} />
  <Route path="/" element={<Home/>} />
  <Route path="abstract" element={<Abstract/>} />
</Routes>

  </Router>
  )
}

export default App;
