import React, { Component } from "react";
import Ticket from "./Ticket";

class ShownTickets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shownTickets">
        {this.props.shownTickets
          ? this.props.shownTickets.map((ticket) => {
              return (
                <Ticket
                  getLabelList={this.props.getLabelList}
                  markAsDone={this.props.markAsDone}
                  ticket={ticket}
                  hide={this.props.hide}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default ShownTickets;
