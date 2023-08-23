
import logo from './logo.svg';
import './App.css';
import SimpleCounter from './simpleCounter';
import NumbersList from './NumbersList'
import Circle from './Circle'
import ColoredCircles from './ColoredCircles'; 
import Dice from './Dice'


function App() {
    return (
	   <div className="App" >
	    <Dice numDice={2}/>
	    </div>
    );
}
export default App;
