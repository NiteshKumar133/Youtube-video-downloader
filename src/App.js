
import './App.css';
import Front from './ui/front';
import avtar from './Avatar-Profile-PNG-Photos.png';

function App() {
  return (
    <>
    <div className='body'>
 
    <Front/>
    <div className='bottom-nav'><h2 style={{marginRight:"20px"}}>Made by-</h2>
    <img className='bottom-image' alt="avtar" src={avtar}/>
    </div>
    </div>
    </>
  );
}

export default App;
