import React, { Fragment, useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Word from "./Word";
import WrongWord from "./WrongWord";
import words from "./words";

const Grid = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState([]);
  const [isVisible, setIsVisible] = useState("");

  useEffect(() => {
    getRandomWord();
    console.log(`The word to guess is ${wordToGuess}`);
  }, [wordToGuess]);

  const getRandomWord = () => {
    let randomWord =
      words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWordToGuess(randomWord);
    return randomWord;
  };

  const onSubmitGuess = (e) => {
    e.preventDefault();
    let verify = /^[A-Za-z]+$/;
    try {
      if (check.length >= 60) {
        setMessage("No more attempt left! :( come back tomorrow to try again!");
      } else if (guess.length < 5) {
        setMessage("Please chose a word of 5 characters");
      } else if (!guess.match(verify)) {
        setMessage("Only letters are allowed");
      } else if (guess !== wordToGuess) {
        checkGame();
        setMessage("Sorry Try again");
        setGuess("");
      } else if (guess === wordToGuess) {
        setMessage("Congratulations!!!");
        checkGame();
        setIsVisible("visually-hidden ");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const checkGame = () => {
    let checked = [];
    let verifyArray = [...wordToGuess];
    for (let i = 0; i < guess.length; i++) {
      checked.push(guess[i]);
    }

    for (let i = 0; i < 5; i++) {
      if (guess[i] === wordToGuess[i]) {
        checked.push("bg-success");
        verifyArray.splice(verifyArray.indexOf(guess[i]), 1);
      } else if (
        guess[i] !== wordToGuess[i] &&
        !verifyArray.includes(guess[i])
      ) {
        checked.push("bg-danger");
      } else if (
        guess[i] !== wordToGuess[i] &&
        verifyArray.includes(guess[i])
      ) {
        checked.push("bg-warning");
        verifyArray.splice(verifyArray.indexOf(guess[i]), 1);
      }
    }
    setCheck(check.concat(checked));
  };

  return (
    <Fragment>
      <Container
        className={!guess[0] ? "visually-hidden" : "border text-center mt-5"}
      >
        <Word
          one={guess[0]}
          two={guess[1]}
          three={guess[2]}
          four={guess[3]}
          five={guess[4]}
        />
      </Container>
      <Container
        className={!check[0] ? "visually-hidden" : "border text-center mt-2"}
      >
        <WrongWord
          className={!check[0] ? "visually-hidden" : "border "}
          checkOne={check[5]}
          one={check[0]}
          checkTwo={check[6]}
          two={check[1]}
          checkThree={check[7]}
          three={check[2]}
          checkFour={check[8]}
          four={check[3]}
          checkFive={check[9]}
          five={check[4]}
        />
        <WrongWord
          className={!check[10] ? "visually-hidden" : "border "}
          checkOne={check[15]}
          one={check[10]}
          checkTwo={check[16]}
          two={check[11]}
          checkThree={check[17]}
          three={check[12]}
          checkFour={check[18]}
          four={check[13]}
          checkFive={check[19]}
          five={check[14]}
        />
        <WrongWord
          className={!check[20] ? "visually-hidden" : "border "}
          checkOne={check[25]}
          one={check[20]}
          checkTwo={check[26]}
          two={check[21]}
          checkThree={check[27]}
          three={check[22]}
          checkFour={check[28]}
          four={check[23]}
          checkFive={check[29]}
          five={check[24]}
        />
        <WrongWord
          className={!check[30] ? "visually-hidden" : "border "}
          checkOne={check[35]}
          one={check[30]}
          checkTwo={check[36]}
          two={check[31]}
          checkThree={check[37]}
          three={check[32]}
          checkFour={check[38]}
          four={check[33]}
          checkFive={check[39]}
          five={check[34]}
        />
        <WrongWord
          className={!check[40] ? "visually-hidden" : "border "}
          checkOne={check[45]}
          one={check[40]}
          checkTwo={check[46]}
          two={check[41]}
          checkThree={check[47]}
          three={check[42]}
          checkFour={check[48]}
          four={check[43]}
          checkFive={check[49]}
          five={check[44]}
        />
        <WrongWord
          className={!check[50] ? "visually-hidden" : "border "}
          checkOne={check[55]}
          one={check[50]}
          checkTwo={check[56]}
          two={check[51]}
          checkThree={check[57]}
          three={check[52]}
          checkFour={check[58]}
          four={check[53]}
          checkFive={check[59]}
          five={check[54]}
        />
      </Container>
      <div className="mt-5 d-flex justify-content-center">
        <p className="message">{message}</p>
      </div>

      <Container className={isVisible}>
        <form onSubmit={onSubmitGuess}>
          <input
            type="text"
            className="form-control text-center"
            maxLength={5}
            value={guess}
            onChange={(e) => setGuess(e.target.value.toUpperCase())}
          />
        </form>
        <div
          className={
            check.length >= 60
              ? "visually-hidden"
              : "d-flex justify-content-center"
          }
        >
          <Button
            className={`${isVisible} mt-5 text-center`}
            variant="light"
            onClick={onSubmitGuess}
          >
            Guess
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Grid;
