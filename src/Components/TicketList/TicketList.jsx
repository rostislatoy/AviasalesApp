import React from "react";
import "./TicketList.scss";
import Ticket from "../Ticket/Ticket";
import { connect } from "react-redux";

function TicketList({ tickets }) {
  const element = tickets.map((el) => {
    const { price, img, id } = el;
    return <Ticket key={id} {...el} />;
  });
  return <div className="ticket-list">{element}</div>;
}
const mapStateToProps = (state) => {
  console.log(state);
};

export default connect()(TicketList);
