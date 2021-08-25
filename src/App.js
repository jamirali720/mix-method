import './App.css';
import ConditionalBtn from './Components/Condition/ConditionalBtn';
import ReactCountUp from './Components/CountUp/ReactCountUp';
import Home from './Components/Home/Home';
import IdleTimerContainer from './Components/IdleTimer/IdleTimerContainer';
import RModal from './Components/Modal/RModal';
import OptionInput from './Components/OptionInput/OptionInput';
import Temperature from './Components/Temperature/Temperature';
import ReactTippy from './Components/Tippy/ReactTippy';

import ToggleOnOff from './Components/ToggleOnOFF/ToggleOnOff';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <hr />
      <ToggleOnOff></ToggleOnOff>
      <hr />
      <Temperature></Temperature>
      <hr />
      <ConditionalBtn></ConditionalBtn>
      <hr />
      <OptionInput></OptionInput>
      <hr />
      <RModal></RModal>
      <hr />
      <ReactTippy></ReactTippy>
      <hr />
      <ReactCountUp></ReactCountUp>
      <hr />
      <IdleTimerContainer></IdleTimerContainer>
   
    </div>
  );
}

export default App;
