import { GET_ApiInterfaceHandler } from "../api-handler_scripts/get-api-handler_script.js";
let get_ApiInterfaceHandler =  new  GET_ApiInterfaceHandler();
let databaseData;

window.addEventListener("DOMContentLoaded", ()=>{
    get_ApiInterfaceHandler.getEditTimeApiHandler.then(data => callEditTimeData(data))
  
})

function callEditTimeData(data) {
    databaseData = data;
}