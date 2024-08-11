import {useState,useEffect} from "react"
import Board from "./Board";
import GameEnd from "./GameEnd";
import GameStates from "./GameStates";
const player_x='X';
const player_o='O';

const winningPropablits=[
    //Row
    {groub:[0,1,2]},
    {groub:[3,4,5]},
    {groub:[6,7,8]},
    //colmun
    {groub:[0,3,6]},
    {groub:[1,4,7]},
    {groub:[2,5,8]},
    //diagonal
    {groub:[0,4,8]},
    {groub:[2,4,6]},
]

function checkWinner(tiles,setGameState,setTiles,setplayerTurn) {
    for(const {groub} of winningPropablits){

        
        const tileValue1=tiles[groub[0]]
        const tileValue2=tiles[groub[1]]
        const tileValue3=tiles[groub[2]]

        if(
            tileValue1 !==null &&
            tileValue1 === tileValue2 &&
            tileValue1=== tileValue3
        ){
            if(tileValue1===player_x){
                setGameState(GameStates.xWins);
                setplayerTurn(player_x);
                
            }
            else{
                setGameState(GameStates.oWins);
                setplayerTurn(player_x);
            }
            return;
        }
    }
    const gameDraw=tiles.every((tile)=> tile!==null);
    if (gameDraw)
        {
            setGameState(GameStates.draw);
            setplayerTurn(player_x);
        } 
}
function TicTacToe(){
    const [tiles,setTiles]=useState(Array(9).fill(null));
    const [playerTurn,setplayerTurn]=useState(player_x)
    const [gameState, setGameState] = useState(GameStates.inPrograss);

    const handlePlayerTurn=(index)=>{

        if(gameState !== GameStates.inPrograss){
            return;
        }
        if (tiles[index] !== null ){
            return;
        }
        const newTiles=[...tiles];
        newTiles[index]=playerTurn;
        setTiles(newTiles);
        playerTurn === player_x ? setplayerTurn(player_o)  : setplayerTurn(player_x);
    }
    useEffect(()=>{
        checkWinner(tiles,setGameState,setTiles,setplayerTurn);
    },[tiles])
    return(
        <div>
            <h1>Tic-Tac-Toe Game in <span>React</span></h1>
            <Board tiles={tiles} onPlayerTurnClick={handlePlayerTurn}/>
            <GameEnd 
                gameState={gameState} 
                setTiles={setTiles} 
                setGameState={setGameState}  
            />
        </div>
    );
}
export default TicTacToe;