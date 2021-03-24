const { request, response } = require("express");
const express = require("express");
const app = express();
const Ticket = require("./ticketModel");

app.use(express.static("client/build"));

app.get("/api/tickets/", (request, response) => {
  const searchText = request.query.searchText;
  Ticket.find({})
    .then((allTickets) => {
      if (searchText) {
        const filteredArr = allTickets.filter((ticket) =>
          ticket.title.toLowerCase().includes(searchText.toLowerCase())
        );
        response.status(200).json(filteredArr);
      } else {
        response.status(200).json(allTickets);
      }
    })
    .catch((err) => response.status(404).send(err, "Not Found"));
});

app.patch("/api/tickets/:ticketId/:isDone", (request, response) => {
  console.log(request.params);
  let done = request.params.isDone === "done" ? true : false;
  Ticket.findByIdAndUpdate(request.params.ticketId, { done: done }).then(() => {
    response.send({ updated: true });
  });
});

module.exports = app;
