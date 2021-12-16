describe('User Onboarding', () => {

    //tell cypress where is the host location to test
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    //helpers to grab elements (name, email, pw, terms, submitbtn)
    const nameInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]');
    const pwInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('[type="checkbox"]');
    const submit = () => cy.get('button[id="submitBtn"]');
    const testInput = () => cy.get('input[name=test]');

    //initial test to make sure everything is working correctly
    it('Initial test! Just checking!', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
    })

    //test Name 
    it('Elements are showing on page', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        pwInput().should('exist');
        termsInput().should('exist');
        submit().should('exist');
        testInput().should('not.exist');
    })

describe('Inputting Text and Submit', () => {
    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })
    it('submit button starts out disabled', () => {
        submit().should('be.disabled');
    })
    it('can type in input', () => {
        nameInput()
        .should('have.value', '')
        .type('Kim')
        .should('have.value', 'Kim')

        emailInput()
        .should('have.value', '')
        .type('kim@kim.com')
        .should('have.value', 'kim@kim.com')

        pwInput()
        .should('have.value', '')
        .type('123abc')
        .should('have.value', '123abc')
    })
    it('terms is unchecked', () => {
        termsInput()
        .uncheck()
    })
    it('submit button enabled when all inputs filled out', () => {
        nameInput().type('Kim Nguyen');
        emailInput().type('kim@kim.com');
        pwInput().type('abc123');
        termsInput().check();
        submit().should('not.be.disabled');
    })

   
   
})






})