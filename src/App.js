import './App.css';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
function App() {

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Signup/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
