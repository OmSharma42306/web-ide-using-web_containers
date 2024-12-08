import { WebContainer} from "@webcontainer/api";
import {files} from "../files";
let webContainerInstance ; 

window.addEventListener('load',async () => {
    webContainerInstance = await WebContainer.boot();
})