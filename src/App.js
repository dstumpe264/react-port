import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Project from './components/Project'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <AboutMe/>
        <Project/>
        <Footer/>
    </div>
  );
}

export default App;
