import { createPanel } from "./components/panel.js"
import { createMainLayout } from "./components/mainLayout.js"
import {getDomElements} from "./components/getDomElements.js"
import {renderAllData} from "./components/renderAllData.js"
import {listenersInit} from "./components/listenersInit.js"


export function initApp(root){
    createMainLayout(root)
    const elem = getDomElements()
    renderAllData(elem)
    listenersInit(elem)
}