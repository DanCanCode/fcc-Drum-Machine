import "./App.scss";

function App() {
  return (
    <div id="drum-machine">
      <div id="display"></div>

      <button id="Q" className="drum-pad">
        Q
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          className="clip"
          id="Q"
        ></audio>
      </button>

      <button id="W" className="drum-pad">
        W
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          className="clip"
          id="W"
        ></audio>
      </button>

      <button id="E" className="drum-pad">
        E
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          className="clip"
          id="E"
        ></audio>
      </button>

      <button id="A" className="drum-pad">
        A
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          className="clip"
          id="A"
        ></audio>
      </button>

      <button id="S" className="drum-pad">
        S
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          className="clip"
          id="S"
        ></audio>
      </button>

      <button id="D" className="drum-pad">
        D
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          className="clip"
          id="D"
        ></audio>
      </button>

      <button id="Z" className="drum-pad">
        Z
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          className="clip"
          id="Z"
        ></audio>
      </button>

      <button id="X" className="drum-pad">
        X
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          className="clip"
          id="X"
        ></audio>
      </button>

      <button id="C" className="drum-pad">
        C
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          className="clip"
          id="C"
        ></audio>
      </button>
    </div>
  );
}

export default App;
