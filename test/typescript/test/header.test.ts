import { initiate, mount } from "@mahaljs/test-utils";
import Header from "@/components/header.mahal";
import { expect } from "chai";
import { app } from "@/index";

describe("Header test", () => {
    let component: Header;
    before(async () => {
        component = await mount.call(app, Header);
    });

    it("check h1 computed color", () => {
        const h1 = component.find('.header1');
        expect(h1.innerHTML).equal(`Header`);
        expect(window.getComputedStyle(h1).color).equal('red');
    });

    it('check for h1 scoped', (done) => {
        const el = component.find('.header1');
        let isFound = false;
        for (var i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
            const attr = atts[i];
            console.log('att', attr.nodeName);
            if (attr.nodeName.includes('mahal-')) {
                isFound = true;
            }
        }
        if (isFound) {
            done("scoped attr found");
        }
        else {
            done();
        }
    });

    it("check h2 computed color", () => {
        const h1 = component.find('.header2');
        expect(h1.innerHTML).equal(`Header`);
        expect(window.getComputedStyle(h1).color).equal('blue');
    });

    it('check for h2 scoped', (done) => {
        const el = component.find('.header2');
        let isFound = false;
        for (var i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
            const attr = atts[i];
            console.log('att', attr.nodeName);
            if (attr.nodeName.includes('mahal-')) {
                isFound = true;
            }
        }
        if (!isFound) {
            done("scoped attr found");
        }
        else {
            done();
        }
    });
});