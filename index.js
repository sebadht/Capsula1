const { faker } = require("@faker-js/faker");

const randomName = faker.name.fullName();

console.log("Hola!", randomName)