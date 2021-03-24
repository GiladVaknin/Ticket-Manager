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
    const newHiddenTickets = hiddenTickets;
    newHiddenTickets.push(ticketToHide);
    setHiddenTickets(newHiddenTickets);
    const newShownTickets = tickets.filter(
      (ticket) => ticket.creationDate !== ticketToHide.creationDate
    );
    setTickets(newShownTickets);
  }

  function search(inputValue) {
    axios
      .get(`http://localhost:8080/api/tickets?searchText=${inputValue}`)
      .then((filteredTickets) => setTickets(filteredTickets.data));
  }

  function loadTickets() {
    console.log("in");
    axios.get(`http://localhost:8080/api/tickets`).then((loadedTickets) => {
      // console.log(loadedTickets.data);
      setTickets(loadedTickets.data);
    });
  }

  useEffect(loadTickets, []);

  return (
    <div className="App">
      <SearchInput search={search} />
      <ShownTickets hide={hide} shownTickets={tickets} />
      <HiddenTickets hide={hide} hiddenTickets={hiddenTickets} />
    </div>
  );
}

export default App;
