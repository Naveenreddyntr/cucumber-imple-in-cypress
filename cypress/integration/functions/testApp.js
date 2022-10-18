/// <reference types="cypress"/>

import Homepage from 'C:\Users\naveen.kadiri\Desktop\cypressfwdemo10\cypress\e2e\pageObjects\Homepage.js'

describe('Exampletest cases',function(){
    //beforeEach(() => {
        const test = new Homepage()
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')

   // })
    it('addorremoveelement',function(){
        test.addelement().click()
        test.removeElement().click()

    })
})