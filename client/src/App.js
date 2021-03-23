import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Ticket from "./components/ticket";
import ShownTickets from "./components/ShownTickets";
import SearchInput from "./components/SearchInput";

function App() {
  const [tickets, setTickets] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);

  function hide(ticket) {}

  return (
    <div className="App">
      <SearchInput />
      <ShownTickets hide={hide} shownTickets={tickets} />
      <HiddenTickets hide={hide} hiddenTickets={hiddenTickets} />
    </div>
  );
}

export default App;
