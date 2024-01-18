import React from "react";
import "../styles/buttons.css";
import { useState, useEffect } from "react";
import tijeras from "../images/icons8-tijeras-100.png";
import papel from "../images/icons8-papel-100 (1).png";
import roca from "../images/icons8-roca-100 (1).png";

function Buttons({ points, setpoints }) {
  const [jugada, setjugada] = useState(0);
  const [jugadaPC, setjugadaPC] = useState(0);
  const [play, setplay] = useState(0);

  useEffect(() => {
    if (play > 0) {
      getGameResult();
    }
  }, [jugada, jugadaPC, play]);

  const startGame = () => {
    setplay((play) => play + 1);
  };

  const restartGame = () => {
    setplay(0);
    setjugada(0);
    setjugadaPC(0);
  };

  const getPCgame = () => {
    setjugadaPC(Math.floor(Math.random() * 3));
  };

  const restartPoints = () => {
    setpoints(0);
  };

  const getGameResult = () => {
    switch (true) {
      case jugada === 0 && jugadaPC === 1:
        setpoints((points) => points + 10);
        break;
      case jugada === 1 && jugadaPC === 2:
        setpoints((points) => points + 10);
        break;
      case jugada === 2 && jugadaPC === 0:
        setpoints((points) => points + 10);
        break;
    }
  };

  return (
    <div className="buttons">
      <h1>Selecciona jugada:</h1>
      {play > 0 ? (
        <section className="result-game">
          <section className="results">
            <section>
              <img
                className="jugador1"
                src={jugada === 0 ? tijeras : jugada === 1 ? papel : roca}
                alt=""
              />
              <h3>You</h3>
            </section>
            <section>
              <img
                className="jugador2"
                src={jugadaPC === 0 ? tijeras : jugadaPC === 1 ? papel : roca}
                alt=""
              />
              <h3>PC</h3>
            </section>
          </section>
          <button onClick={restartGame} className="restart-btn">
            {" "}
            Nueva jugada
          </button>
        </section>
      ) : (
        <section className="icons">
          <img
            onClick={() => {
              startGame(), setjugada(0), getPCgame(), getGameResult();
            }}
            className="tijeras"
            src={tijeras}
            alt="tijeras"
          />
          <img
            onClick={() => {
              startGame(), setjugada(1), getPCgame(), getGameResult();
            }}
            className="papel"
            src={papel}
            alt="papel"
          />
          <img
            onClick={() => {
              startGame(), setjugada(2), getPCgame(), getGameResult();
            }}
            className="roca"
            src={roca}
            alt="roca"
          />
        </section>
      )}
      {play === 0 ? (
        <section className="game-btns">
          <button onClick={restartPoints} className="restart-btn">
            {" "}
            Reiniciar
          </button>
        </section>
      ) : null}
    </div>
  );
}

export default Buttons;
