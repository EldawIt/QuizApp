import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";
import "../App.css"

function Menu() {
  const {   setGameState ,   setUserName } = useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Marwan Tarek"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
