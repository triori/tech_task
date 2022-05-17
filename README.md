## What is that

- It is some technical tasks, part of my interview

## Manual part

- You can see my check list by https://docs.google.com/spreadsheets/d/1bePrD18cff3C25jTSj0kmHCjMIGA6tBq9lT7OC6vnhM/edit#gid=0

## Automation part. Prepare to start

- Need Node.js 12 or 14 and above
- !!!Before using the software and running tests, run the `$npm i` command to download and compile the modules.
- For running Cypress use `$npx cypress open`

## Automation part. Questions list

1. ввода текста в поле
   - css  
      `cy.contains('some css selector').type('text') or cy.get('some css selector').type('text')`
   - xpath  
      `cy.xpath('sme xpath expression').type('text')` and I use xpath-cypress module
2. для клика на кнопку  
   `cy.get('button').click()`
3. проверки что элемент есть  
   `cy.get('element').should('is.exist')`
4. что элемента нет  
   `cy.get('element').should('not.exist')`
5. ожидание появления или же исчезновения элемента  
   We can use `.should('be.visible') / .should('not.be.visible')` with or without `.wait()` but it is bad practice. One of ways to resolve this problem - use cypress-wait-until third-party module.
6. если элемент видим то сделать что-то  
   `cy.get('element').should('be.visible').then($element => {DO SOMETHING})`
7. как вытащить текст элемента  
   `cy.get('element').then($element => {const textFromElement = $element.text();});`
8. как использовать переменную между Степами  
   We can use global scope and declared variable before first step
9. если элемент есть сделать что-то если нет то сделать что-то  
   It is bad practice, but if I want to do that, I get `get.('body)` element and use `.then($body)` callback for use regular jQuery and JS constructions.
10. как бороться с асинхронном?  
    In some cases `.wrap()` helps. In other cases we can use `.then()` promises constructions. Or we can try use third-party modules, that relized async-await.

## And I implemented all of that in my project