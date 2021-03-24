import React, { Component } from "react";
import Ticket from "./Ticket";

class ShownTickets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shownTickets">
        {this.props.shownTickets.map((ticket) => {
          return <Ticket ticket={ticket} hide={this.props.hide} />;
        })}
      </div>
    );
  }
}

export default ShownTickets;
