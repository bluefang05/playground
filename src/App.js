
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./router/Routes";
import Header from "./component/Header";
import Footer from "./component/footer";

function App() {
  return (
    
    <div className="App">
     
        <Router>
          <Header/>
          <Routes/>
          <Footer />
        </Router>
      
      
    </div>
  );
}

export default App;
