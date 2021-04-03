import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Ticket from "./components/Ticket";
import ShownTickets from "./components/ShownTickets";
import SearchInput from "./components/SearchInput";
import HiddenTickets from "./components/HiddenTickets";
import axios from "axios";

function App() {
  const [tickets, setTickets] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);

  function hide(ticketToHide) {
    const newHiddenTickets = hiddenTickets.concat(ticketToHide);
    setHiddenTickets(newHiddenTickets);
    const newShownTickets = tickets.filter((ticket) => {
      return ticket._id !== ticketToHide._id;
    });
    setTickets(newShownTickets);
  }

  function search(inputValue) {
    axios
      .get(`/api/tickets?searchText=${inputValue}`)
      .then((filteredTickets) => {
        setTickets(filteredTickets.data);
      });
  }

  function loadTickets() {
    axios.get(`/api/tickets`).then((loadedTickets) => {
      setTickets(loadedTickets.data);
    });
  }

  function restore() {
    const newShownTickets = hiddenTickets.concat(tickets);
    setHiddenTickets([]);
    setTickets(newShownTickets);
  }

  function markAsDone(ticket) {
    axios
      .patch(`/api/tickets/${ticket._id}/${ticket.done ? "done" : "undone"}`)
      .then((updateStatus) => {
        if (updateStatus.data.updated === true) {
          // ticket = Object.assign({}, ticket);
          // ticket.done = !ticket.done;
          // setTickets(tickets.slice());
          loadTickets();
        }
      });
  }

  function getLabelList(label) {
    axios
      .get(`api/tickets/${label}`)
      .then((labelList) => setTickets(labelList.data));
  }

  function getDoneTickets() {
    axios
      .get("/api/tickets/done")
      .then((doneTickets) => setTickets(doneTickets.data));
  }

  function getHiddenTickets() {
    setTickets(hiddenTickets);
  }

  useEffect(loadTickets, []);

  return (
    <div className="App">
      <div id="controlSection">
        <h1>Tickets-Manager</h1>
        <SearchInput search={search} />
        <div id="hiddenTicketsData">
          <span id="hideTicketsCounter">{hiddenTickets.length}</span> hidden
          tickets(
          <button id="restoreHideTickets" onClick={restore}>
            restore
          </button>
          {"  "})
        </div>
        <div className="navBar">
          <button className="navBarButton" onClick={loadTickets}>
            ALL{" "}
          </button>{" "}
          ,
          <button className="navBarButton" onClick={getHiddenTickets}>
            HIDDEN{" "}
          </button>{" "}
          ,{" "}
          <button className="navBarButton" onClick={getDoneTickets}>
            DONE{" "}
          </button>{" "}
        </div>
      </div>
      <ShownTickets
        getLabelList={getLabelList}
        markAsDone={markAsDone}
        hide={hide}
        shownTickets={tickets}
      />
    </div>
  );
}

export default App;
