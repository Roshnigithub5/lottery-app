import { useState } from "react";
import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <>
        <div>
            <h1>Lottery Game</h1>
            <div>
            <Ticket ticket={ticket}/>
            </div>
            <Button action={buyTicket}/>
            <h3>{isWinning && <h3 className="win">"Congratulations, you won!"</h3>}</h3>
            <p>Terms & Conditions *You win if the sum of numbers represented on ticket is 15*</p>
        </div>
        </>
    );
}