import { Flash } from "./index"
   
function theFlash(divName: string, name: string) {
   const elt = document.getElementById(divName)
   elt.innerHTML = Flash(name)
}

theFlash("Arrow", "Flash")