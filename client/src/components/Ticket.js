import React, { Component } from "react";

class Ticket extends Component {
  constructor(ticket) {
    this.state = {
      title: ticket.title,
      data: ticket.data,
      writer: ticket.writer,
      creationDate: ticket.creationDate,
      label: ticket.label,
    };
  }

  render() {
    return (
      <div className="ticket">
        <h2 className="title">{this.state.title}</h2>
        <div className="ticketData">{this.state.data}</div>
        <div className="ticketCreationData">
          {" "}
          By {this.state.writer} {this.state.creationDate}{" "}
        </div>
      </div>
    );
  }
}

export default Ticket;
