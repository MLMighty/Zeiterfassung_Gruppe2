import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";
import {CookieHandler  } from "../cookies-handler_script.js";

let cookie_handler = new CookieHandler();
let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();
let databaseData;

window.addEventListener("DOMContentLoaded", ()=>{
    post_ApiInterfaceHandler.getEditTimeApiHandler(cookie_handler.getUuidcookie("uuid")).then(databaseData=> callEditTimeData(databaseData))
  
})

function callEditTimeData(databaseData) {
    databaseData = databaseData;
}