
document.addEventListener("DOMContentLoaded", function() {
    let scriptLocation = "../../global_dependencys/global_scripts/main_script.js";
    let main_Container = document.getElementById("main-Container");


    const loginDiv = `
    <div class="login-Container" id="login-Container-Visbility">
    <div class="login-Content">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">

                <form onsubmit="import('${scriptLocation}').then(module => {module.forwardingSignUpData(event)}).catch(err => {console.error(err);}); return false">
                <label class="login-label" for="chk" aria-hidden="true">Registrierung</label>

                <input class="login-input" id="firstname" name="txt" placeholder="Vorname*" required
                    size="10" />
                <input class="login-input" id="lastname" name="txt" placeholder="Nachname*" required />
                <input class="login-input" id="email" type="email" name="email" placeholder="Email*"
                    required />
                <input class="login-input"  oninput="import('${scriptLocation}').then(module => module.forwardingChangeOnInput(event)).catch(err => console.error(err))" id="password" type="password" name="pswd" placeholder="Passwort*"
                    required />
                <p id="password-guidline-text" class="pw-guidline-text">Voraussetzungen: 0-9 , A-Z , a-z , :_.!#$%&*+?= , Mindestlänge: 10 </p>
                <p id="sanitize-guidline-text" class=""></p>
                <button class="login-button">registrieren</button>
            </form>
        </div>
       

        <div class="login">
            
            <form onsubmit="import('${scriptLocation}').then(module => {module.forwardingLoginData(event)}).catch(err => {console.error(err);}); return false">
                <label class="login-label" for="chk" aria-hidden="true">Anmelden</label>
                <h4 id="loggedIn-display" class="loggedIn-false">Angemeldet</h4>
                <input class="login-input" value="" id="login-email" type="email" name="email"
                    placeholder="Email" required="" />
                <input class="login-input" value="" id="login-password" type="password" name="pswd"
                    placeholder="Passwort" required="" />
                <button class="login-button">einloggen</button>
            </form>
        </div>
    </div>
</div>
    `;



    main_Container.insertAdjacentHTML('beforebegin', loginDiv);
});
