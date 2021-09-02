import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
        super(props);

        // binding method
        this.handleClick = this.handleClick.bind(this);
    }

    // geneate the sound associated with the key clicked on the drum machine
    handleClick(event) {
        const sound = event.target.children[0];
        const parentId = event.target.id;
        sound.currentTime = 0;
        const playPromise = sound.play();

        if(playPromise !== undefined) {
          playPromise.then().catch(error => console.warn("error prevented"))
        }
        this.props.updateDisplay(parentId);
    }


    render() {
        return(
            <div id = "drumpad" className = "mid-container">
                <div className = "inner-container">
                    <div className = "drum-pads">
                        <button className = "drum-pad" id = "Heater-1" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio id = "Q" className = "clip" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type = "audio/mp3" />
                        Q
                        </button>
                        <button className="drum-pad" id="Heater-2" onClick={this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
                        W
                        </button>
                        <button className="drum-pad" id="Heater-3" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "E" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
                        E
                        </button>
                        <button className="drum-pad" id="Heater-4" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "A" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
                        A
                        </button>
                        <button className="drum-pad" id="Clap" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "S" src = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
                        S
                        </button>
                        <button className="drum-pad" id="Open-HH" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "D" src = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
                        D
                        </button>
                        <button className="drum-pad" id="Kick-n'Hat" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "Z" src = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
                        Z
                        </button>
                        <button className="drum-pad" id="Kick" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "X" src = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
                        X
                        </button>
                        <button className="drum-pad" id="Closed-HH" onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                            <audio className = "clip" id = "C" src = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
                        C
                    </button> 
                </div>
            </div> 
        </div>
        )
    }
}

export default Drumpad;