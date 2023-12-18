import { useContext } from "react"
import { Context } from "../context/Context"
import Score from "./Score"

export default function Game() {

    const {userChoice, setUserChoice, setNextPage, nextPage} = useContext(Context)

    return(
        <>
            <Score />
            <p>Playing with: { userChoice == 1 ? "X" : "O" }</p>
            <div className="tic">
                <div className="block" id='one'></div>
                <div className="block" id='two'></div>
                <div className="block" id='three'></div>
                <div className="block" id='four'></div>
                <div className="block" id='five'></div>
                <div className="block" id='six'></div>
                <div className="block" id='seven'></div>
                <div className="block" id='eight'></div>
                <div className="block" id='nine'></div>
            </div>
        </>
    )
}