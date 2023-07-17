import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import TicketList from "../Components/TicketList/TicketList";
import Loader from "../Components/Loader/Loader";
import { uploadTickets, setID, stopFetching } from "../redux/actions";
import { getTickets, getID } from "./helpers/getTickets";
import generateRandomId from "./helpers/generateID";
import "./App.scss";

export default function App() {
  const tickets = useSelector((state) => state.tickets);
  const visibility = useSelector((state) => state.visTickets);
  const filter = useSelector((state) => state.filter);
  const form = useSelector((state) => state.form);
  const stop = useSelector((state) => state.stop);
  const ID = useSelector((state) => state.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ID) {
      const fetchID = async () => {
        const IDtickets = await getID();
        dispatch(setID(IDtickets));
      };
      fetchID();
    }
  }, [dispatch, ID]);

  useEffect(() => {
    const fetchTickets = async () => {
      const [fetchedTickets, serverStop] = await getTickets(
        generateRandomId,
        ID,
      );

      dispatch(uploadTickets(fetchedTickets));

      if (!serverStop) {
        fetchTickets();
      } else {
        dispatch(stopFetching(serverStop));
      }
    };

    if (ID && !stop) {
      fetchTickets();
    }
  }, [dispatch, ID, stop]);

  const loadTickets = tickets.length ? (
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
          {loadTickets}
        </section>
      </main>
    </section>
  );
}
