import GameStates from "./GameStates";
import { useEffect } from "react";
import Swal from "sweetalert2";


function GameEnd({gameState,setTiles,setGameState}) { 
    useEffect(() => {
    switch (gameState) {
        case GameStates.inPrograss:
            return;
        case GameStates.xWins:
            Swal.fire("Player X Wins!");
            setTiles(Array(9).fill(null));
            setGameState(GameStates.inPrograss);
            break;
        case GameStates.oWins:
            Swal.fire("Player O Wins!");
            setTiles(Array(9).fill(null));
            setGameState(GameStates.inPrograss);
            break;
        case GameStates.draw:
            Swal.fire("Draw");
            setTiles(Array(9).fill(null));
            setGameState(GameStates.inPrograss);
            break;
        default:
            break;
    }
    },[gameState,setGameState,setTiles]);
}


export default GameEnd;