/// <reference types="cypress-xpath" />

//one way to save some variable between steps
const id = new Date().getTime();

describe('Check valid work registration form', () => {
    beforeEach(() => {
        cy.visit('https://aytm.com/users/new');
    });

    it('Fill all fields with valid values', () => {

        //find First Name input by css and fill it
        cy.contains('li', 'First Name:', 'input').type(`test_login_${id}`);

        //find Last Name input by xpath and fill it 
        cy.xpath('//li//input[@id="new_user_last_name"]').type(`test_last_name_${id}`);

        //find email input and fill it
        cy.contains('li', 'Email:', 'input').type(`test_email_${id}@domain.com`);

        //find and use autogenerate password button
        cy.contains('a', 'autogenerate').click();

        //check that password field in not empty
        //id look like constant and I use it to identify button
        cy.get('input[id="new_user_password"]').invoke('val').should('not.be.empty');

        //check that company name field in not empty
        cy.get('input[name="company_name"]').invoke('val').should('not.be.empty');

        //find and fill job title input by jQuery css selector
        cy.get('#new_user_job_title').should('be.visible').type(`test_job_title_${id}`);

        //check that real input with type checkbox is invisible
        cy.get('input[name="iila"]').should('not.visible');

        //set value checked to requirement checkbox
        cy.get('.tos-pp').children('span').should('is.visible').click();

        //check that element with some-strange-class is exists
        cy.get('.some-starnge-class').should('not.exist');

        //check that element exists
        cy.get('a').should('is.exist');

        //check that elemen is exists and DO SOMETHING if it is and DO SOMETHING ELSE in another case
        cy.get('body')
            .then($body => {
                if ($body.find('a').length > 0) {
                    cy.log('Element was <a> find').then(() => {
                        expect(true).to.equal(true);
                    });
                } else {
                    cy.log('Element <a> didn`t find').then(() => {
                        expect(true).to.equal(false);
                    });
                }
            });

        //check that elemen is exists and DO SOMETHING if it is and DO SOMETHING ELSE in another case
        cy.get('body')
            .then($body => {
                if ($body.find('video').length > 0) {
                    cy.log('Element <video> was find').then(() => {
                        expect(true).to.equal(false);
                    });
                } else {
                    cy.log('Element <video> didn`t find').then(() => {
                        expect(true).to.equal(true);
                    });
                }
            });

        //find some element and get text from it
        cy.contains('Have a promocode?').then($elem => {
            const textFromElemnt = $elem.text();
            cy.log(textFromElemnt);
        })
    });
})