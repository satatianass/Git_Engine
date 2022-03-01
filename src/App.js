import './App.css';
import Users  from './components/users/Users';
import Navbar from './components/partials/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserItem from './components/users/UserItem';

function App() {
  return (
    <Router>
       <div className="App">
      <Navbar/>
      <div className='container mt-2'>
        <Switch>
          <Route exact path='/users' component={Users}/>
          <Route exact path='/users/:login' component={UserItem}/>
          <Route exact component={Users}/>
        </Switch>
      </div>
    </div>
    </Router>   
  );
}

export default App;
