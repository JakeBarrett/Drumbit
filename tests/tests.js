const selectors = require('..//selectors')
const functions = require('..//functions')


module.exports = {

    before: browser => {
        browser.url('https://www.pluraldev.com/drumbit/')
    },
    after: browser => {

        browser.end()
        },

        

        "Select Crashes" : browser => {
            browser
            .click(selectors.crash1[Math.floor(Math.random()*4).toString()])
            .click(selectors.crash2[Math.floor(Math.random()*4).toString()])
            .click(selectors.crash3[Math.floor(Math.random()*4).toString()])
            .click(selectors.crash4[Math.floor(Math.random()*4).toString()])
            
            
        },

        "Select High Tom" : browser => {
            browser
            .click(selectors.htom1[Math.floor(Math.random()*4).toString()])
            .click(selectors.htom2[Math.floor(Math.random()*4).toString()])
            .click(selectors.htom3[Math.floor(Math.random()*4).toString()])
            .click(selectors.htom4[Math.floor(Math.random()*4).toString()])
            

        },

        "Select Medium Tom" : browser => {
            browser
            .click(selectors.mtom1[Math.floor(Math.random()*4).toString()])
            .click(selectors.mtom2[Math.floor(Math.random()*4).toString()])
            .click(selectors.mtom3[Math.floor(Math.random()*4).toString()])
            .click(selectors.mtom4[Math.floor(Math.random()*4).toString()])
            

        },


        "Select Low Tom" : browser => {
            browser
            .click(selectors.ltom1[Math.floor(Math.random()*4).toString()])
            .click(selectors.ltom2[Math.floor(Math.random()*4).toString()])
            .click(selectors.ltom3[Math.floor(Math.random()*4).toString()])
            .click(selectors.ltom4[Math.floor(Math.random()*4).toString()])
            

        },

        "Select Open Hi Hat" : browser => {
            browser
            .click(selectors.ohihat1[Math.floor(Math.random()*4).toString()])
            .click(selectors.ohihat2[Math.floor(Math.random()*4).toString()])
            .click(selectors.ohihat3[Math.floor(Math.random()*4).toString()])
            .click(selectors.ohihat4[Math.floor(Math.random()*4).toString()])
            

        },


        "Select Closed Hi Hat" : browser => {
            browser
            .click(selectors.chihat1[Math.floor(Math.random()*3).toString()])
            .click(selectors.chihat2[Math.floor(Math.random()*3).toString()])
            .click(selectors.chihat3[Math.floor(Math.random()*3).toString()])
            .click(selectors.chihat4[Math.floor(Math.random()*3).toString()])
            

        },

        "Select Snare" : browser => {
            browser
            .click(selectors.snare1[Math.floor(Math.random()*4).toString()])
            .click(selectors.snare2[Math.floor(Math.random()*4).toString()])
            .click(selectors.snare3[Math.floor(Math.random()*4).toString()])
            .click(selectors.snare4[Math.floor(Math.random()*4).toString()])
       

          },

        "Select Kick" : browser => {
            browser
            .click(selectors.kick1[Math.floor(Math.random()*4).toString()])
            .click(selectors.kick2[Math.floor(Math.random()*4).toString()])
            .click(selectors.kick3[Math.floor(Math.random()*4).toString()])
            .click(selectors.kick4[Math.floor(Math.random()*4).toString()])
            

        },

        "Select Settings" : browser => {
            browser
            
            .click(selectors.colors[Math.floor(Math.random()*4).toString()])
            .click('div[class="drum-kits"]')
            .click(selectors.kits[Math.floor(Math.random()*20).toString()])
            .pause(1000)
            .click('div[class="impulse-responses"]')
            .click(selectors.effects[Math.floor(Math.random()*7).toString()])
            //.clearValue('input[id="tempo"]')
            //.setValue('input[id="tempo"]', Math.floor(Math.random() * (85 - 60) + 60))
            .click('button[id="play"]')
            .pause(12000)

        
        }







}