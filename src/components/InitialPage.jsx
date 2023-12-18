import { useNavigate } from "react-router-dom"

export default function InitialPage() {

    const navigate = useNavigate()

    return(
        <div className='new-game-container'>
            <h1 className='game-title'>TIC-TAC-TOE</h1>
            <div className='new-game-button' onClick={() => navigate(`/asDaLAla51man13hsi1ASD%dsdahs!`)}> New Game </div> <br />
            <button className='new-game-button'> How to play </button>
        </div>
    )
}