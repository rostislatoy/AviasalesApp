import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import TicketList from "../Components/TicketList/TicketList";
import Loader from "../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { uploadTickets } from "../redux/actions";
import generateRandomId from "./helpers/generateID";
import "./App.scss";

export default function App() {
  const tickets = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  async function getTickets() {
    const search = "https://aviasales-test-api.kata.academy/search";
    const tickets = "https://aviasales-test-api.kata.academy/tickets";

    try {
      const sessionDATA = await fetch(search);

      if (sessionDATA.ok) {
        const sessionJSON = await sessionDATA.json();

        try {
          const ticketsDATA = await fetch(
            `${tickets}?searchId=${sessionJSON.searchId}`,
          );
          if (ticketsDATA.ok) {
            const ticketsJSON = await ticketsDATA.json();
            const ticketsWithID = ticketsJSON.tickets.map((el) => {
              const newTicket = {
                ...el,
                img: `pics.avs.io/99/36/${el.carrier}.png`,
                id: generateRandomId(),
              };
              return newTicket;
            });

            return ticketsWithID;
          }
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  useEffect(() => {
    const fetchTickets = async () => {
      const fetchedTickets = await getTickets();
      dispatch(uploadTickets(fetchedTickets));
    };
    fetchTickets();
  }, []);

  useEffect(() => {}, [tickets]);

  const isLoad = tickets.length ? (
    <TicketList tickets={tickets} />
  ) : (
    <div className="load-box">
      <Loader />
    </div>
  );
  return (
    <section className="App">
      <Header />
      <main className="main">
        <aside className="main-ticets__form">
          <Form />
        </aside>
        <section className="main-tickets-list">
          <Filter />
          {isLoad}
        </section>
      </main>
    </section>
  );
}
