## What is that

- It is some technical tasks, part of my interview

## Manual part

- You can see my check list by https://docs.google.com/spreadsheets/d/1bePrD18cff3C25jTSj0kmHCjMIGA6tBq9lT7OC6vnhM/edit#gid=0

## Automation part. Prepare to start

- Need Node.js 12 or 14 and above
- !!!Before using the software and running tests, run the `$npm i` command to download and compile the modules.
- For running Cypress use `$npx cypress open`

## Automation part. Questions list

1. Enter text in field
   - css  
      `cy.contains('some css selector').type('text') or cy.get('some css selector').type('text')`
   - xpath  
      `cy.xpath('sme xpath expression').type('text')` and I use xpath-cypress module
2. Button click  
   `cy.get('button').click()`
3. Check that element is exist  
   `cy.get('element').should('is.exist')`
4. Check that element isn`t exit 
   `cy.get('element').should('not.exist')`
5. Waiting for hide/unhide element 
   We can use `.should('be.visible') / .should('not.be.visible')` with or without `.wait()` but it is bad practice. One of ways to resolve this problem - use cypress-wait-until third-party module.
6. If element is visible, do something
   `cy.get('element').should('be.visible').then($element => {})`
7. How to get element text
   `cy.get('element').then($element => {const textFromElement = $element.text();});`
8. How to use variable between steps
   We can use global scope and declared variable before first step
9. If element is exist - do something, if element isn`t exist, do something else
   It is bad practice, but if I want to do that, I get `get.('body)` element and use `.then($body)` callback for use regular jQuery and JS constructions.
10. Resolutions for async
    In some cases `.wrap()` helps. In other cases we can use `.then()` promises constructions. Or we can try use third-party modules, that relized async-await.

## And I implemented all of that in my project