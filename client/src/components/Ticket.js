import React, { Component } from "react";

class Ticket extends Component {
  constructor(props) {
    super(props);
  }

  createLabels() {
    if (this.props.ticket.labels) {
      this.props.ticket.labels.map((val) => {
        console.log(val);
        return <button className="label"> {val} </button>;
      });
    } else return;
  }

  render() {
    return (
      <div className="ticket">
        <h2 className="title">{this.props.ticket.title}</h2>
        <div className="ticketContent">{this.props.ticket.content}</div>
        <button
          className="hideTicketButton"
          onClick={() => this.props.hide(this.props.ticket)}
        >
          <img src="https://img.icons8.com/windows/32/000000/hide.png" />
        </button>
        <button
          className={this.props.ticket.done ? "doneButton" : "undoneButton"}
          onClick={() => this.props.markAsDone(this.props.ticket)}
        >
          <img src="https://img.icons8.com/windows/32/000000/--checkmark-yes.png" />
        </button>
        <div>
          {" "}
          {this.props.ticket.labels
            ? this.props.ticket.labels.map((val) => (
                <button
                  className="label"
                  onClick={() => this.props.getLabelList(val)}
                >
                  {" "}
                  {val}{" "}
                </button>
              ))
            : ""}
        </div>
        <div className="ticketCreationData">
          {" "}
          By{" "}
          <a
            className="emailAdress"
            href={`mailto:${this.props.ticket.userEmail}`}
          >
            {" "}
            {this.props.ticket.userEmail}
            {"   "}
          </a>{" "}
          {new Date(this.props.ticket.creationTime).toDateString()}{" "}
        </div>
      </div>
    );
  }
}

export default Ticket;
