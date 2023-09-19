import React, { useEffect, useState } from 'react';
import Board from '../Components/Board';
import Navigation from './Navigation';
import clicksound from "../assets/sounds/clicksound.mp3"
import ScoreBoard from './ScoreBoard';
import Popup from './Popup';
import Turn from './Turn';

const TicTacTue = () => {
    const winPatteren = [
        [0, 4, 8],
        [2, 4, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [score, setScore] = useState({ x: 0, o: 0 })
    const [isPopupShowing, showPopup] = useState(false);
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState(null);
    const [isTie, setTie] = useState(false);

    const handleBoxClick = (boxInd) => {
        setTurn(turn + 1);
        new Audio(clicksound).play();
        const updatedBoard = board.map((value, index) => {
            if (index === boxInd) {
                let player = xPlaying ? "x" : "o";
                return player;

            }
            return value;
        })
        setBoard(updatedBoard);
        setXPlaying(!xPlaying);
        checkWinner(updatedBoard);
    }

    const checkWinner = (board) => {
        for (let i = 0; i < winPatteren.length; i++) {
            const [x, y, z] = winPatteren[i];
            if (board[x] && board[x] === board[y] && board[y] == board[z]) {
                setTurn(null);
                if (board[x] == "x") {
                    let { x } = score;
                    x++;
                    setXPlaying(true);
                    setScore({ ...score, x })
                } else {
                    let { o } = score;
                    o++;
                    setXPlaying(false);
                    setScore({ ...score, o })
                }
                    showPopup(true)
                    setWinner(board[x]);
                    restartGame();
            }
        }
    }
    const restartGame = () => {
        setTurn(0);
        setBoard(Array(9).fill(null));
    }

    const handlePopup = () => {
        showPopup(false)
        setTie(false);
    }

    useEffect(() => {
        if (turn === 9) {
            setTurn(0);
            restartGame();
            setTie(true);
            showPopup(true)
        }
    }, [turn])

    return (
        <>
            {isPopupShowing ? <Popup tie={isTie} handlePopup={handlePopup} winner={winner} score={score} /> : ""}
            <div className='h-screen py-3 w-[300px] md:w-[450px] flex justify-center items-center flex-col'>
                <span className='text-4xl font-semibold text-white text-center block'>Tic Tac Toe</span>
                <ScoreBoard scores={score} xPlaying={xPlaying} />
                <div className='flex justify-center mt-10 flex-col'>
                    <div className='flex justify-between items-center'>
                        <Board board={board} onClick={handleBoxClick} />
                    </div>
                    <Navigation onClick={restartGame} />
                </div>
            </div>
        </>
    )
}

export default TicTacTue