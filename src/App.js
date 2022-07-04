import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from './components/Intro';
import Trending from './components/Trending';
import Indo from './components/Indo';
import Allmovies from './components/Allmovies';

function App() {
  return (
    <div>
      <div className="myBG">
      <NavigationBar/>
      <Intro/>
      </div>
      <div className="allmoviesBG">
        <Allmovies/>
      </div>
      <div className="trending">
        <Trending/>
      </div>
      <div className="indo">
        <Indo/>
      </div>
    </div>
    
  );
}

export default App;
