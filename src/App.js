import './App.css';
import MyNav from './components/MyNav'
import Body from './components/Body'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    
    <div className="App">
      <div className="app-container">

      <Router>
      
        <MyNav />
        
        <Route path="/" exact component={Body} />
        <Route path="/movieDetails/:movieId" exact component={MovieDetails} />
        <MyFooter />
      
      </Router>
      </div>
    </div>

  );
}

export default App;
