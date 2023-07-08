import React from "react";
import "./TicketList.scss";
import Ticket from "../Ticket/Ticket";
import { addFiveTickets } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { sortedTickets } from "./helpers/sortedTickets";
function TicketList({ tickets, visibility, filter, form }) {
  const dispatch = useDispatch();

  const element = sortedTickets(tickets, filter, form)
    .slice(0, visibility)
    .map((el) => {
      const { price, img, id } = el;
      return <Ticket key={id} {...el} />;
    });

  const showButton =
    visibility >= tickets.length ? null : sortedTickets(tickets, filter, form)
        .length > 0 ? (
      <button className="ticket-list__btn" onClick={addTicketsHandler}>
        Посмотреть еще 5 билетов{" "}
      </button>
    ) : (
      <div className="ticket-list__no-tickets-message">
        {" "}
        Нет подходящих рейсов, по заданным параметрам{" "}
      </div>
    );

  function addTicketsHandler() {
    dispatch(addFiveTickets());
  }

  return (
    <div className="ticket-list">
      {element}
      {showButton}
    </div>
  );
}

export default TicketList;
