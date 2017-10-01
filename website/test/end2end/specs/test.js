var assert = require('assert')
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://10.29.0.15:8080')
        var title = browser.getTitle()
        assert.equal(title, 'Vue JWT Example')
    })
})
