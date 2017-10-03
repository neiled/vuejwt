var assert = require('assert')
require('dotenv').config()

describe('upon initial visit', function() {
    browser.url(process.env.WEB_URL)
    it('should have the right title - the fancy generator way', function () {
        var title = browser.getTitle()
        assert.equal(title, 'Vue JWT Example')
    })
    it('should show the user as logged out', function () {
        var title = $('#app > div > div > h3').getText()
        assert.equal(title, 'You are currently logged out')
    })
    //it should not allow the user to see the secure page
    //it should move to the login page when they click the login page
})
