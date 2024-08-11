import Tile from "./Tile";

function Board({tiles,onPlayerTurnClick}) {
    return (
        <div className="board">
            <Tile onClick={()=>onPlayerTurnClick(0)} value={tiles[0]} className="right-border bottom-border" />
            <Tile onClick={()=>onPlayerTurnClick(1)} value={tiles[1]} className="right-border bottom-border"/>
            <Tile onClick={()=>onPlayerTurnClick(2)} value={tiles[2]} className="bottom-border"/>
            <Tile onClick={()=>onPlayerTurnClick(3)} value={tiles[3]} className="right-border bottom-border"/>
            <Tile onClick={()=>onPlayerTurnClick(4)} value={tiles[4]} className="right-border bottom-border"/>
            <Tile onClick={()=>onPlayerTurnClick(5)} value={tiles[5]} className="bottom-border"/>
            <Tile onClick={()=>onPlayerTurnClick(6)} value={tiles[6]} className="right-border "/>
            <Tile onClick={()=>onPlayerTurnClick(7)} value={tiles[7]} className="right-border "/>
            <Tile onClick={()=>onPlayerTurnClick(8)} value={tiles[8]}/>
        </div>

    );
}

export default Board;