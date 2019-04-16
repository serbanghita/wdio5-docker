import {expect} from "chai";

describe("GitHub.com", () => {

    it("load my profile page", () => {
        browser.url("https://github.com/serbanghita");
        const elem = $(".vcard-fullname");
        elem.waitForDisplayed();
        
        const pageTitle = browser.getTitle();
        const fullName = elem.getText();

        expect(pageTitle).to.equal("serbanghita (Şerban Ghiţă) · GitHub");
        expect(fullName).to.equal("Şerban Ghiţă");
    });

});
