import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Lobby() {
    const navigate = useNavigate();
    const [inQueue, setInQueue] = useState(false);

    function toggleQueue() {
        setInQueue(!inQueue)
    }
    function findGame(){
        console.log("I am finding a game (not really)")
    }
    return (
        (inQueue)?
            <div>
                <p>várakozás más játékosokra...</p>
                <button onClick={toggleQueue}>mégse</button><br/>
                <a href={"/play"}>shortcut</a>
            </div>
            :
            <div className={"lobby"}>
                <button onClick={()=>{toggleQueue(); findGame()}}>Játék keresése</button>
            </div>
)
}

export default Lobby;