import { initiate, mount } from "mahal-test-utils";
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
});