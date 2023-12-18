import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Choice() {

    const navigate = useNavigate();
    
    const {userChoice, setUserChoice, setNextPage, nextPage} = useContext(Context)

    function handleClick() {
        setUserChoice(event.target.value)
        return navigate("/nkNJ!joas%JasM0012NJasdjoacl")
    }

    return(
        <>
            <div className="choice-background"></div>
            <div className="choice-container">
                <button onClick={() => handleClick()} value={1}>X</button>
                <button onClick={() => handleClick()} value={2}>O</button>
            </div>
        </>
    )
}