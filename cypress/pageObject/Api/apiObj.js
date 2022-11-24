const url = Cypress.env('api').url
const apiKey = Cypress.env('api').apiKey
const authToken = Cypress.env('api').authToken

export function homeCategoryTitle() {
  return cy.request({
    method: "GET",
    url: url + "/home",
    headers: {
      "Api-key": apiKey,
      "Warehouse-Id": "1",
    },
  }).then((resp) => {
    let appCategoriesTitle = [];
    resp.body.data.appCategories.forEach((item) => {
      appCategoriesTitle.push(item.title);
    });
    cy.writeFile("cypress/helper/apiData/appCategories.json", appCategoriesTitle)
  });
}

export function categoryApiTitle() {
  return cy.request({
    method: "GET",
    url: url + "/category",
    headers: {
      "Api-key": apiKey,
      "Warehouse-Id": "1",
    },
  }).then((resp) => {
    let categorytitle = [];
    resp.body.data.forEach((item) => {
      categorytitle.push(item.title);
    });
    cy.writeFile("cypress/helper/apiData/category.json", categorytitle)
  });
}

export function cartApi() {
  return cy.request({
    method: "GET",
    url: url + "/cart",
    headers: {
      "Api-key": apiKey,
      "Warehouse-Id": "1",
      "Authorization": authToken
    },
  }).then((resp) => {
    const cartDetails = resp.body.data.cartProducts;
    cy.writeFile("cypress/helper/apiData/cart.json", cartDetails);
  });
}