import './App.css';
import React from 'react';
import Drumpad from './Drumpad';

// list of sounds and associated key trigger
const list = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

// main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      clipId: "",
      keyTrigger: 'Q',
      url: "",
      display: ""
    }
    // binding the method
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
}

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // change the display to the name of the sound 
  updateDisplay(keyValue) {
    this.setState({
      display: keyValue
    })
  }

  // generate the sound associated to the key triggered on the keyboard
  handleKeyPress(e) {
    const filteredList = list.find(element => e.keyCode === element.keyCode);
    try {
      if(filteredList.keyTrigger) {
        this.setState({
            keyTrigger: filteredList.keyTrigger,
            url: filteredList.url,
            clipId: filteredList.id,
            display: filteredList.id
        })
        let sound = document.getElementById(this.state.keyTrigger);
        const playPromise = sound.play();
        // handle the error of sound.pause() called before sound.play()
        if(playPromise !== undefined) {
          playPromise.then().catch(error => console.warn("error prevented"))
        }
      }
    } catch(exception) { // warn the user if he clicks on a key different from one of the keyTrigger of filteredList
      console.warn("No corresponding key found.");
    }
  }

  render() {

    return(
        <div id = "drum-machine" className = "outer-container">
          <Drumpad display = {this.state.display} handleClick = {this.handleClick} handlekeyPress = {this.handleKeyPress} List = {list} keyTrigger = {this.state.keyTrigger} url = {this.state.url} clipId = {this.state.clipId} updateDisplay = {this.updateDisplay} />
          <p id = "display" className = "display-container">{this.state.display}</p>
        </div>
    )
  }
}

export default App;
