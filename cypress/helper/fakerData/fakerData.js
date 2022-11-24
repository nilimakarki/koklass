const faker = require('faker')

export function getUserSignupData (){
    const user_info = {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber("98########"),
        email: faker.internet.email(),
        password: 123456,
      };
    cy.writeFile('cypress/helper/savedData/user.json', user_info)
    return user_info
}

export function getAddressFormData(){
  const address_info = {
    cunstomername: faker.name.firstName(),
    phoneNumber: faker.phone.phoneNumber("98########"),
    address: faker.address.streetName(),
    x: faker.random.number(0,200),
    y: faker.random.number(0,200)
  };
  return address_info
}