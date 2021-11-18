import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./router/Routes";
import Header from "./component/Header";
function App() {
  return (
    
    <div className="App">
     
        <Router>
        <Header/>
        <Routes/>
        </Router>
      
      
    </div>
  );
}

export default App;
