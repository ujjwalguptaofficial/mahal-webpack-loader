import Main from "./index.mahal";
import { Mahal } from "mahal";

export const app = new Mahal(Main, document.querySelector('#app'));

app.create();