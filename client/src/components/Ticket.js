import React, { Component } from "react";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.ticket.title,
      data: this.props.ticket.data,
      writer: this.props.ticket.writer,
      creationDate: this.props.ticket.creationDate,
      label: this.props.ticket.label,
    };
  }

  render() {
    return (
      <div className="ticket">
        <h2 className="title">{this.state.title}</h2>
        <div className="ticketData">{this.state.data}</div>
        <button className="hideButton" onClick={this.props.hide}>
          hide
        </button>
        <div className="ticketCreationData">
          {" "}
          By {this.state.writer} {this.state.creationDate}{" "}
        </div>
      </div>
    );
  }
}

export default Ticket;
