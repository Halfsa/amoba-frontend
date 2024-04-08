function GameBoard({board}:{board:string[][]}){
    return(
        <div className={"gameBoard"}>
            {board.map((row,id)=>{
                return(
                    <div key={id} className={"row"}>
                        {row.map((col,id)=>{
                            return(
                                <button key={id} className={"gameButton"}>{col}</button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default GameBoard;