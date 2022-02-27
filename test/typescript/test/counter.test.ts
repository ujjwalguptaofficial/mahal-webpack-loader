import { initiate, mount } from "mahal-test-utils";
import Counter from "@/components/counter.mahal";
import { expect } from "chai";
import { app } from "@/index";

describe("Counter", () => {
    let component: Counter;
    before(async () => {
        component = await mount.call(app, Counter);
    });

    function checkForCounter(value) {
        const counter = component.find('.counter');
        expect(counter.innerHTML).equal(value);
    }

    it("check counter value", () => {
        checkForCounter('10')
    });

    it("increment value", async () => {
        const counter = component.find('.increment-button');
        counter.click();
        await component.waitFor('update');
        checkForCounter('11')
    });

    it("decrement value", async () => {
        const counter = component.find('.decrement-button');
        counter.click();
        counter.click();
        await component.waitFor('update');
        checkForCounter('9')
    });

    it('check for scoped', (done) => {
        const el = component.find('.decrement-button');
        let isFound = false;
        for (var i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
            const attr = atts[i];
            console.log('att', attr.nodeName);
            if (attr.nodeName.includes('mahal-')) {
                isFound = true;
            }
        }
        if (!isFound) {
            done("scoped attr not found");
        }
        else {
            done();
        }
    });
});