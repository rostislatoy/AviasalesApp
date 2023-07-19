export const sortedTickets = (array, filter, formState) => {
  const filteredArray = [...array].filter((ticket) => {
    if (formState.filters[0].isActive) {
      return true;
    }
    if (
      formState.filters[1].isActive &&
      ticket.segments.some((segment) => segment.stops.length === 0)
    ) {
      return true;
    }
    if (
      formState.filters[2].isActive &&
      ticket.segments.some((segment) => segment.stops.length === 1)
    ) {
      return true;
    }
    if (
      formState.filters[3].isActive &&
      ticket.segments.some((segment) => segment.stops.length === 2)
    ) {
      return true;
    }
    if (
      formState.filters[4].isActive &&
      ticket.segments.some((segment) => segment.stops.length === 3)
    ) {
      return true;
    }
    return false;
  });

  return filteredArray.sort((a, b) => {
    if (filter === "cheapest") {
      return a.price - b.price;
    }
    if (filter === "fastest") {
      const aTotalStops = a.segments.reduce(
        (total, segment) => total + segment.stops.length,
        0,
      );
      const bTotalStops = b.segments.reduce(
        (total, segment) => total + segment.stops.length,
        0,
      );
      return aTotalStops - bTotalStops;
    }
    if (filter === "optimal") {
      const aTotalStops = a.segments.reduce(
        (total, segment) => total + segment.stops.length,
        0,
      );
      const bTotalStops = b.segments.reduce(
        (total, segment) => total + segment.stops.length,
        0,
      );
      return a.price / aTotalStops - b.price / bTotalStops;
    }
  });
};
