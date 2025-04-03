export function parseUtcOffset(offsetStr: string): number {
  const match = offsetStr.match(/UTC([+-])(\d{2}):(\d{2})/);

  if (!match) return 0;

  const sign = match[1] === "+" ? 1 : -1;
  const hours = Number.parseInt(match[2], 10);
  const minutes = Number.parseInt(match[3], 10);

  return sign * (hours + minutes / 60);
}

export function getTimeWithOffset(offset: number) {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + offset * 3600000);

  return localTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
