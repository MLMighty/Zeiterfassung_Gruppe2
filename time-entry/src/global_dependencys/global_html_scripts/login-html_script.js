
document.addEventListener("DOMContentLoaded", function() {
    let scriptLocation;
    let main_Container = document.getElementById("main-Container");
    
    if(location.href === "http://127.0.0.1:5500/src/infinisurv/self_resources/infinisurv.html"){
        scriptLocation ='../global_dependencys/global_scripts/main_script.js'
    }else{
        scriptLocation ='../../../global_dependencys/global_scripts/main_script.js'
    }

    const loginDiv = `
    <div class="login-Container" id="login-Container-Visbility">
    <div class="login-Content">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">

                <form onsubmit="import('${scriptLocation}').then(module => {module.forwardingSignUpData(event)}).catch(err => {console.error(err);}); return false">
                <label class="login-label" for="chk" aria-hidden="true">Sign up</label>

                <input class="login-input" id="firstname" name="txt" placeholder="Firstname*" required
                    size="10" />
                <input class="login-input" id="lastname" name="txt" placeholder="Lastname*" required />
                <input class="login-input" id="birthday" type="date" name="txt" placeholder="birthday*"
                    required />
                <input class="login-input" id="username" name="txt" placeholder="Username*" required />
                <input class="login-input" id="email" type="email" name="email" placeholder="Email*"
                    required />
                <input class="login-input"  oninput="import('${scriptLocation}').then(module => module.forwardingChangeOnInput(event)).catch(err => console.error(err))" id="password" type="password" name="pswd" placeholder="Password*"
                    required />
                <p id="password-guidline-text" class="pw-guidline-text">Needed: 0-9 , A-Z , a-z , :_.!#$%&*+?= , min. length: 10 , </p>
                <p id="sanitize-guidline-text" class=""></p>
                <button class="login-button">Sign up</button>
            </form>
        </div>
       

        <div class="login">
            
            <form onsubmit="import('${scriptLocation}').then(module => {module.forwardingLoginData(event)}).catch(err => {console.error(err);}); return false">
                <label class="login-label" for="chk" aria-hidden="true">Login</label>
                <h4 id="loggedIn-display" class="loggedIn-false">Angemeldet</h4>
                <input class="login-input" value="" id="login-email" type="email" name="email"
                    placeholder="Email" required="" />
                <input class="login-input" value="" id="login-password" type="password" name="pswd"
                    placeholder="Password" required="" />
                <button class="login-button">Login</button>
            </form>
        </div>
    </div>
</div>
    `;



    main_Container.insertAdjacentHTML('afterbegin', loginDiv);
});
