### Specs

Describe: Ticket()
Test: "It will return an instance of Ticket with typeof 'object'."
Code: const newTicket = new Ticket("true", 1415, 34, "Last of the Mohicans")
Expect(typeof newTicket).toEqual(object)

Test: "It will return an instance of Ticket that includes a property 'timeOfDay'."
Code: const newTicket = new Ticket("true", 1415, 34, "Last of the Mohicans")
Expect(newTicket.timeOfDay).toEqual(1415)

Test: "It will return an instance of Ticket that includes a property 'age'."
Code: const newTicket = new Ticket("true", 1415, 37, "Last of the Mohicans")
Expect(newTicket.age).toEqual(37)

Test: "It will return an instance of Ticket that includes a property 'title'."
Code: const newTicket = new Ticket("false", 1415, 34, "Dances with Wolves")
Expect(newTicket.title).toEqual("Dances with Wolves")

Describe: calculatePrice()
Test: "It will return a number"
Code: const newPrice = newTicket.calculatePrice()
Expect(typeof newPrice).toEqual("number")

Test: "It will return the highest price if new release condition is true"
Code: const newTicket = new Ticket("true", 1415, 37, "Last of the Mohicans")
Code: const newPrice = newTicket.calculatePrice()
Expect(newPrice).toEqual($15)

Test: "It will return a discounted price for senior discount (65+)"
Code: const newPrice = newTicket.calculatePrice()
Expect(newPrice).toEqual($10)

Test: "It will return a discounted price for matinee before 1pm"
Code: const newPrice = newTicket.calculatePrice()
Expect(newPrice).toEqual($10)
