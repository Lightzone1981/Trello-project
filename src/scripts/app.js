import { createPanel } from "./components/panel.js"
import { createMainLayout } from "./components/mainLayout.js"
import {getDomElements} from "./components/getDomElements.js"

export function initApp(root){
    createMainLayout(root)
    const elem = getDomElements()
}