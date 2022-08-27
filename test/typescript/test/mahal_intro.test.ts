import { initiate, mount } from "@mahaljs/test-utils";
import MahalIntro from "@/components/mahal_intro.mahal";
import { expect } from "chai";
import { app } from "@/index";

describe("Mahal Intro", () => {
    let component: MahalIntro;
    before(async () => {
        component = await mount.call(app, MahalIntro);
    });

    it("check h1", () => {
        const h1 = component.find('h1');
        expect(h1.innerHTML).equal(`Welcome to the Mahal App`);
    });

    it('check for scoped', (done) => {
        const el = component.find('h1');
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
});