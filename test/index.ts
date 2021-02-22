import Main from "./index.mahal";
import { App } from "mahal";

export const app = new App(Main, document.querySelector('#app'));

app.create();