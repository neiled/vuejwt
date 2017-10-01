var assert = require('assert')
describe('upon initial visit', function() {
    browser.url('http://10.29.0.15:8080')
    it('should have the right title - the fancy generator way', function () {
        var title = browser.getTitle()
        assert.equal(title, 'Vue JWT Example')
    })
    it('should show the user as logged out', function () {
        var title = $('#app > div > div > h3').getText()
        assert.equal(title, 'You are currently logged out')
    })
})
