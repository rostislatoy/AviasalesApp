import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import TicketList from "../Components/TicketList/TicketList";
import Loader from "../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { uploadTickets, stopFetching } from "../redux/actions";
import generateRandomId from "./helpers/generateID";
import "./App.scss";

export default function App() {
  const tickets = useSelector((state) => state.tickets);
  const visibility = useSelector((state) => state.visTickets);
  const filter = useSelector((state) => state.filter);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const errorTicket = {
    id: 99999999,
    price: "ERROR!",
    img: "",
    segments: [
      {
        origin: "",
        destination: "",
        date: new Date(),
        duration: 0,
        stops: ["failed", "to", "fetched"],
      },
      {
        origin: "",
        destination: "",
        date: new Date(),
        duration: 0,
        stops: ["failed", "to", "fetched"],
      },
    ],
  };
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
            return [ticketsWithID, ticketsJSON.stop];
          }
        } catch (error) {
          return [errorTicket];
        }
      }
    } catch (error) {
      return [errorTicket];
    }
    return [errorTicket];
  }

  useEffect(() => {
    const fetchTickets = async () => {
      const [fetchedTickets, stop] = await getTickets();
      dispatch(uploadTickets(fetchedTickets));

      dispatch(stopFetching(false));
    };
    fetchTickets();
  }, []);

  useEffect(() => {}, [tickets]);

  const isLoad = tickets.length ? (
    <TicketList
      tickets={tickets}
      visibility={visibility}
      filter={filter}
      form={form}
    />
  ) : (
    <div className="load-box">
      <Loader />
    </div>
  );
  return (
    <section className="App">
      <Header />
      <main className="main">
        <aside className="main-tickets__form">
          <Form />
        </aside>
        <section className="main-tickets__list">
          <Filter />
          {isLoad}
        </section>
      </main>
    </section>
  );
}
