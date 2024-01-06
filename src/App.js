import logo from './logo.svg';
import './App.css';
import NavBar from './componants/NavBar';
import TextForm from './componants/TextForm';
// import About from './componants/About';

function App() {
  return (
    <>
      <NavBar title="TextUtil"/>
      <div className="container my-3" >
         <TextForm heading = "Enter the text ot analze below"/>
         {/* <About/> */}
      </div>
    </>
  );
}

export default App;
