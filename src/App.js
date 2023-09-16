import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Home.js";
import AddItem from "./AddItem.js";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Link to="/home">Home</Link>
        <Route path="/home" component={Home} />
      </Router> */}
      
      <Home/>
    </div>
  );
}

export default App;
