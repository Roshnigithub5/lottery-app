import TicketNum from "./TicketNum";
import "./Lottery.css"
export default function Ticket({ticket}) {
    return (
        <>
        <div className="ticket">
        <h4>Ticket</h4>
        {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>
        ))}
        </div>
        </>
    );
}