import './App.css';
import MyNav from './components/MyNav'
import Body from './components/Body'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="app-container">
        <MyNav />
       <Route path="/moviedetails" exact component={Body}/>
        <MyFooter />
      </div>
    </div>
    </Router>
  );
}

export default App;
