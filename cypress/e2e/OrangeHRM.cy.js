describe("OrangeHRM", () => {
  
  it("TC001 - Visit OrangeHRM", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should("eq", "OrangeHRM")
      cy.wait(3000)

  })

  it("TC001 - Login test", () => {
     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should("eq", "OrangeHRM")
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
     cy.get('.oxd-button').click()

  })

  it("TC001 - Login test", () => {
     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should("eq", "OrangeHRM")
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin1")
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin12")
     cy.get('.oxd-button').click()

  })

  it("TC001 - Login test", () => {
   cy.visit("https://opensource-demo.orangehrmlive.com/")
   cy.title().should("eq", "OrangeHRM")
   cy.get('.oxd-button').click()

  })

  it("TC001 - Login test", () => {
   cy.visit("https://opensource-demo.orangehrmlive.com/")
   cy.title().should("eq", "OrangeHRM")
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
   cy.get('.oxd-button').click()

  })

  it("TC001 - Login test", () => {
   cy.visit("https://opensource-demo.orangehrmlive.com/")
   cy.title().should("eq", "OrangeHRM")
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
   cy.get('.oxd-button').click()


})

})
