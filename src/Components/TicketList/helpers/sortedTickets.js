export const sortedTickets = (array, filter, formState) => {
  return [...array]
    .filter((ticket) => {
      if (formState.allChecked) {
        return true;
      }
      if (
        formState.noStopOverChecked &&
        ticket.segments.every((segment) => segment.stops.length === 0)
      ) {
        return true;
      }
      if (
        formState.oneStopOverChecked &&
        ticket.segments.some((segment) => segment.stops.length === 1)
      ) {
        return true;
      }
      if (
        formState.twoStopOversChecked &&
        ticket.segments.some((segment) => segment.stops.length === 2)
      ) {
        return true;
      }
      if (
        formState.threeStopOversChecked &&
        ticket.segments.some((segment) => segment.stops.length === 3)
      ) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
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
