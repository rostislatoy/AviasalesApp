export async function getID() {
  const sessionDATA = await fetch(
    "https://aviasales-test-api.kata.academy/search",
  );
  if (sessionDATA.ok) {
    const sessionJSON = await sessionDATA.json();

    return sessionJSON.searchId;
  }
}

export async function getTickets(generateRandomId, id) {
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
  const ticketsURL = "https://aviasales-test-api.kata.academy/tickets";

  try {
    try {
      const ticketsDATA = await fetch(`${ticketsURL}?searchId=${id}`);
      if (ticketsDATA.ok) {
        const ticketsJSON = await ticketsDATA.json();
        const ticketsWithID = ticketsJSON.tickets.map((el) => {
          const newTicket = {
            ...el,
            id: generateRandomId(),
          };

          return newTicket;
        });

        return [ticketsWithID, ticketsJSON.stop];
      }
    } catch (error) {
      return [errorTicket];
    }
  } catch (error) {
    return [errorTicket];
  }
  return [errorTicket];
}
