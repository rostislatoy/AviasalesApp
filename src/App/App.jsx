import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import TicketList from "../Components/TicketList/TicketList";
import Loader from "../Components/Loader/Loader";
import { uploadTickets, stopFetching } from "../redux/actions";
import getTickets from "./helpers/getTickets";
import generateRandomId from "./helpers/generateID";
import "./App.scss";

export default function App() {
  const tickets = useSelector((state) => state.tickets);
  const visibility = useSelector((state) => state.visTickets);
  const filter = useSelector((state) => state.filter);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTickets = async () => {
      const [fetchedTickets] = await getTickets(generateRandomId);
      dispatch(uploadTickets(fetchedTickets));
      dispatch(stopFetching(false));
    };
    fetchTickets();
  }, []);

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
