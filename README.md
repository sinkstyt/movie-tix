# Movie Title Price Calculator

## Created by Kerry Lang and Tyler Sinks
_original work began 26 January 2021_

## Description


### Specs

Describe: Ticket()
Test: "It will return an instance of Ticket with typeof 'object'."<br>
Code: const newTicket = new Ticket("true", 1415, 34, "Last of the Mohicans")<br>
Expect(typeof newTicket).toEqual(object)<br>

Test: "It will return an instance of Ticket that includes a property 'timeOfDay'."<br>
Code: const newTicket = new Ticket("true", 1415, 34, "Last of the Mohicans")<br>
Expect(newTicket.timeOfDay).toEqual(1415)<br>

Test: "It will return an instance of Ticket that includes a property 'age'."<br>
Code: const newTicket = new Ticket("true", 1415, 37, "Last of the Mohicans")<br>
Expect(newTicket.age).toEqual(37)<br>

Test: "It will return an instance of Ticket that includes a property 'title'."<br>
Code: const newTicket = new Ticket("false", 1415, 34, "Dances with Wolves")<br>
Expect(newTicket.title).toEqual("Dances with Wolves")<br>

Describe: calculatePrice()<br>
Test: "It will return a number"<br>
Code: const newPrice = newTicket.calculatePrice()<br>
Expect(typeof newPrice).toEqual("number")<br>

Test: "It will return the highest price if new release condition is true"<br>
Code: const newTicket = new Ticket("true", 1415, 37, "Last of the Mohicans")<br>
Code: const newPrice = newTicket.calculatePrice()<br>
Expect(newPrice).toEqual($15)<br>

Test: "It will return a discounted price for senior discount (65+)"<br>
Code: const newPrice = newTicket.calculatePrice()<br>
Expect(newPrice).toEqual($10)<br>

Test: "It will return a discounted price for matinee before 1pm"<br>
Code: const newPrice = newTicket.calculatePrice()<br>
Expect(newPrice).toEqual($10)<br>