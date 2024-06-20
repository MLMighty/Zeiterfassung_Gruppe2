import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";
import {CookieHandler  } from "../cookies-handler_script.js";

let cookie_handler = new CookieHandler();
let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();
let databaseData;

window.addEventListener("DOMContentLoaded", ()=>{
    let cookieUuid = cookie_handler.getUuidcookie("uuid");
    post_ApiInterfaceHandler.getEditTimeApiHandler(cookieUuid.replace(/"/g, '')).then(databaseData=> callEditTimeData(databaseData))
  
})

function callEditTimeData(databaseData) {
    databaseData = databaseData;
}
