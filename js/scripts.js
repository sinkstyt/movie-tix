function Ticket(isFirstRelease, timeOfDay, ageYears, title) {
  this.isFirstRelease = isFirstRelease;
  this.timeOfDay = timeOfDay;
  this.age = ageYears;
  this.title = title;
}

Ticket.prototype.calculatePrice = function() {
  let price;
  if (this.isFirstRelease == true) {
    price = 20;
    console.log("got into expensive block of code!");
    return price;
  } else if (this.age >= 65 || this.timeOfDay < 1300) {
    price = 10;
  } else {
    price = 14;
  }
  return price;
}