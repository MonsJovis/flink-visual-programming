'use strict';

var appDomain = 'http://localhost:8080';

describe('Flink Visual App', function() {

    it('should have a title', function() {
        browser.get(appDomain);
        expect(browser.getTitle()).not.toBe(undefined);
    });

});

describe('Executing the Word-Count by clicking on Deploy & Run', function() {

    it('should have a OK result', function() {
        browser.get(appDomain);
        element(by.css('.navbar-btn-deploy-run')).click();
        // TODO: check an DOM element for the result
    });

});

describe('Executing the Word-Count by clicking on Code', function() {

    it('should have a OK result', function() {
        browser.get(appDomain);
        element(by.css('.navbar-btn-download-code')).click();
        // TODO: check an DOM element for the result
    });

});

describe('Executing the Word-Count by clicking on Jar', function() {

    it('should have a OK result', function() {
        browser.get(appDomain);
        element(by.css('.navbar-btn-download-jar')).click();
        // TODO: check an DOM element for the result
    });

});
