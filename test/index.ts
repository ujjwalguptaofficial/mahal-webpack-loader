import Main from "./index.taj";
import { App } from "taj";

export const app = new App(Main, document.querySelector('#app'));

app.create();