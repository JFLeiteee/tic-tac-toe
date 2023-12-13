import { useState } from "react"

function Score() {
    const [ xScore, setXScore ] = useState(0)
    const [ oScore, setOScore ] = useState(0)

    return(
        <div className="score-container">
            <div className="x-score">X: {xScore}</div>
            <div className="o-score">O: {oScore}</div>
        </div>
    )
}

export default Score