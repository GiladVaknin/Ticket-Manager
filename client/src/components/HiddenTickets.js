import React, { Component } from "react";
import Ticket from "./ticket";

class HiddenTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenTickets: this.props.hiddenTickets,
    };
  }

  render() {
    return (
      <div className="hiddenTickets">
        {this.state.hiddenTickets.map((ticket) => {
          return <Ticket hide={this.props.hide} ticket={ticket} />;
        })}
      </div>
    );
  }
}

export default HiddenTickets;
