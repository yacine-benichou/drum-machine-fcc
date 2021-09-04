import React from 'react';

class Drumpad extends React.Component {
    constructor(props) {
        super(props);

        // binding method
        this.handleClick = this.handleClick.bind(this);
    }

    // generate the sound associated with the key clicked on the drum machine
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
        // map over the list element in the App component and returns, for each element, an associated button and audio element
        const listMapped = this.props.List.map(audio => {
            return(
                <button className = "drum-pad" id = {audio.id} onClick = {this.handleClick} onKeyPress = {this.props.handleKeyPress}>
                    <audio id = {audio.keyTrigger} className = "clip" src = {audio.url} type = "audio/mp3" key = {audio.id} />{audio.keyTrigger}
                </button>
            )
        })
        return(
            <div id = "drumpad" className = "mid-container">
                <div className = "inner-container">
                    <div className = "drum-pads">
                        {listMapped}
                    </div>
                </div> 
            </div>
        )
    }
}

export default Drumpad;