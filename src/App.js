
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import NavBar from './component/navBar';
import Login  from './component/login';
import Footer from './component/footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <Footer/>
    </div>
  
  );
}

export default App;
