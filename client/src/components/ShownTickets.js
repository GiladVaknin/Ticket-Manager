import React, { Component } from "react";
import Ticket from "./ticket";

class ShownTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownTickets: this.props.shownTickets,
    };
  }

  render() {
    return (
      <div className="hiddenTickets">
        {this.state.shownTickets.map((ticket) => {
          return <Ticket ticket={ticket} />;
        })}
      </div>
    );
  }
}

export default ShownTickets;
