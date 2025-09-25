// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <div className="App">
        <Navbar title="Words and Characters Counter" />
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" />
        </div>
      </div>

    </>
  );
}

export default App;
