"use strict";

const URL = "https://randomuser.me/api/";

// Class to fetch required data from above API
class Fetch {
  constructor() {
    this.url = URL;
  }

  async getData() {
    const data = await fetch(this.url);
    const response = await data.json();
    const person = response.results[0];
    // JSON Destrucure below
    const img = person.picture.large;
    const email = person.email;
    const age = person.dob.age;
    const firstName = person.name.first;
    const lastName = person.name.last;
    const name = `${firstName} ${lastName}`;
    const number = person.location.street.number;
    const street = person.location.street.name;
    const address = `${number} ${street}`;
    return {
      img,
      email,
      name,
      age,
      address
    }
  }
}

export default Fetch;