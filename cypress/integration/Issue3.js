describe ('Issue#3', function () {
    it('Visitar sitio”', function () {
        cy.visit('http://localhost/practica2-andrade/directorioPersonas/index.php')
    })

    it('Eliminar registros', function () {
        cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })