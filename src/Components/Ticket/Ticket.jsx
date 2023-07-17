import React from "react";
import { connect } from "react-redux";
import { getTicketTime, convertMinutesToTime } from "./helpers/formatTimeFunc";
import getStringToTransfer from "./helpers/transferCalc";
import "./Ticket.scss";

function Ticket(props) {
  const { price, segments, carrier } = props;

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h1 className="ticket-header title">{`${price} Р`}</h1>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          className="ticket-header ticket-logo"
        ></img>
      </div>

      <div className="ticket-main">
        <div className="ticket-main title">
          <div className="title container">
            <h6 className="ticket-main__way title-way">{`${segments[0].origin} - ${segments[0].destination}`}</h6>
            <h6 className="ticket-main__way">
              {getTicketTime(segments[0].date, segments[0].duration)}
            </h6>
          </div>
          <div className="title container">
            <h6 className="ticket-main__way title-way">В ПУТИ</h6>
            <h6 className="ticket-main__way">
              {convertMinutesToTime(segments[0].duration)}
            </h6>
          </div>
          <div className="title container">
            <h6 className="ticket-main__way title-way">
              {getStringToTransfer(segments[0].stops.length)}
            </h6>
            <h6 className="ticket-main__way">{segments[0].stops.join(", ")}</h6>
          </div>
        </div>

        <div className="ticket-main title">
          <div className="title container">
            <h6 className="ticket-main__way title-way">{`${segments[1].origin} - ${segments[1].destination}`}</h6>
            <h6 className="ticket-main__way">
              {getTicketTime(segments[1].date, segments[1].duration)}
            </h6>
          </div>
          <div className="title container">
            <h6 className="ticket-main__way title-way">В ПУТИ</h6>
            <h6 className="ticket-main__way">
              {convertMinutesToTime(segments[1].duration)}
            </h6>
          </div>
          <div className="title container">
            <h6 className="ticket-main__way title-way">
              {getStringToTransfer(segments[0].stops.length)}
            </h6>
            <h6 className="ticket-main__way">{segments[0].stops.join(", ")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Ticket);
