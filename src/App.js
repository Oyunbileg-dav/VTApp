import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Switch>
             <Route path='/' exact component={Home} />

        </Switch>
        <div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
