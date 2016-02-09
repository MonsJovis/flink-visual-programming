'use strict';

var appDomain = 'http://localhost:8080';

describe('Flink Visual App', function() {

    it('should have a title', function() {
        browser.get(appDomain);
        expect(browser.getTitle()).not.toBe(undefined);
    });

});
