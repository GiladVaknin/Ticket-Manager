import React, { Component } from "react";

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.ticket.title,
      content: this.props.ticket.content,
      userEmail: this.props.ticket.userEmail,
      creationTime: this.props.ticket.creationTime,
      labels: this.props.ticket.labels,
    };
  }

  render() {
    return (
      <div className="ticket">
        <h2 className="title">{this.state.title}</h2>
        <div className="ticketContent">{this.state.content}</div>
        <button
          className="hideButton"
          onClick={() => this.props.hide(this.props.ticket)}
        >
          hide
        </button>
        <div>
          {if(this.state.labels)this.state.labels.map((label) => 
            return <button> {label} </button>;
          )}{" "}
        </div>
        <div className="ticketCreationData">
          {" "}
          By {this.state.userEmail} , {this.state.creationTime}{" "}
        </div>
      </div>
    );
  }
}

export default Ticket;
