export function getTicketTime(date, duration) {
  const objDate = new Date(date);
  const hoursStart = objDate.getHours();
  const minutesStart = objDate.getMinutes();

  const totalMinutes = hoursStart * 60 + minutesStart;
  const hoursEnd = Math.floor((totalMinutes + duration) / 60);
  const minutesEnd = (totalMinutes + duration) % 60;

  const startTime = new Date(
    objDate.getFullYear(),
    objDate.getMonth(),
    objDate.getDate(),
    hoursStart,
    minutesStart,
  );
  const endTime = new Date(
    objDate.getFullYear(),
    objDate.getMonth(),
    objDate.getDate(),
    hoursEnd,
    minutesEnd,
  );

  const options = { hour: "2-digit", minute: "2-digit" };
  const startTimeFormatted = startTime.toLocaleTimeString("ru-RU", options);
  const endTimeFormatted = endTime.toLocaleTimeString("ru-RU", options);

  const resultTime = `${startTimeFormatted} - ${endTimeFormatted}`;

  return resultTime;
}

export function convertMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const formattedTime = `${hours}ч ${mins}м`;

  return formattedTime;
}
