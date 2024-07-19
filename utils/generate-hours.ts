export const generateHours = () => {
  const slots = []
  for (let hour = 11; hour < 18; hour++) {
    for (let minutes = 0; minutes < 60; minutes += 30) {
      const hourString = hour.toString().padStart(2, "0")
      const minuteString = minutes.toString().padStart(2, "0")
      slots.push(`${hourString}:${minuteString}`)
    }
  }
  return slots
}
