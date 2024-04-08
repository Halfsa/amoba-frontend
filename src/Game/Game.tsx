import GameBoard from "./GameBoard.tsx";
import './game.css'
import {useQuery} from "react-query";
import axios from "axios";
import PollGameStance from "./PollGameStance.tsx";

function Game(){
    const board = [
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
    ]
    const { data, isLoading, error } = useQuery('dataKey', PollGameStance, {
        refetchInterval: 1000,
        refetchIntervalInBackground:false,
        refetchOnWindowFocus:true,
        enabled:true
    });
    console.log(data)
    return(
         <>
            <GameBoard board={board}/>
         </>
    )
}
export default Game;