# Zeiterfassung_Gruppe2
Zeiterfassungs Projekt der Zweiten Provadis Gruppe

Notion Github Befehle (Erklärt): https://ing-azubi-workspace.notion.site/Git-Befehle-08ab1197fc804ab6acc235fa713d1efb?pvs=4



@Slf4j
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class RegristrationController {

    @Autowired
    SignUpService signUpService = new SignUpService();

    @Autowired
    LoginService loginService = new LoginService();

    @PostMapping("/login")
    public ResponseEntity<Boolean> loginController(@RequestBody UserModel user){

        return loginService.loginAuthentication(user);

    }
    @PostMapping("/signup")
    public ResponseEntity<String> signUpController(@RequestBody UserModel user){

        return signUpService.createUser(user);

    }

}
