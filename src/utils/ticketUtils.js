export const filterTickets = (tickets, filters) => {
  if (filters.all) {
    return tickets;
  }
  return tickets.filter((ticket) => {
    const tmp1 = ticket.segments[0].stops.length;
    const tmp2 = ticket.segments[1].stops.length;
    const max = Math.max(tmp1, tmp2);
    return filters[max];
  });
};

export const sortedTickets = (tickets, sortType) => {
  const sortMethods = {
    price: (a, b) => a.price - b.price,
    duration: (a, b) => a.segments[0].duration - b.segments[1].duration,
    optimal: (a, b) => a.price + a.segments[0].duration - (b.price + b.segments[1].duration),
  };

  return [...tickets].sort(sortMethods[sortType] || (() => 0));
};

export const transferStops = (stops) => {
  return stops.length ? stops.join(', ') : '';
};
