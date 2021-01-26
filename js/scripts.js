function Ticket(isFirstRelease, timeOfDay, ageYears, title) {
  this.isFirstRelease = false;
  this.timeOfDay = timeOfDay;
  this.age = ageYears;
  this.title = title;
}

Ticket.prototype.calculatePrice = function() {
  let price = 14;
  if (this.age >= 65) {
    price -= 4;
  }
  return price;
}