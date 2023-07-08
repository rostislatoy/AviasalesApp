export default async function getTickets(generateRandomId) {
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
  const searchURL = "https://aviasales-test-api.kata.academy/search";
  const ticketsURL = "https://aviasales-test-api.kata.academy/tickets";

  try {
    const sessionDATA = await fetch(searchURL);

    if (sessionDATA.ok) {
      const sessionJSON = await sessionDATA.json();

      try {
        const ticketsDATA = await fetch(
          `${ticketsURL}?searchId=${sessionJSON.searchId}`,
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
