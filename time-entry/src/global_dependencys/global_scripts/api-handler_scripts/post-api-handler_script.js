export class POST_ApiInterfaceHandler {
    async signUpApiHandler(signUpData) {
      try {
        const response = await fetch("http://localhost:8080/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        });
  
        if (!response.ok) {
          throw new Error("Fehler beim senden der Daten");
        }
        const responseData = await response.text();
        console.log(signUpData);
        alert(responseData)
      } catch (err) {
        console.error("A problem occured: " + err);
      }
    }
  
    async loginApiHandler(loginData) {
      try {
          console.log("Login API handler called");
          const response = await fetch("http://localhost:8080/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(loginData),
              credentials: 'include' // This ensures cookies are included in the request if needed
          });
  
          if (!response.ok) {
              throw new Error("Error sending data");
          }
  
          const responseData = await response.text(); // For testing
          console.log("Server responds with: " + responseData);
          return responseData; //response if login is successful will be a uuid
      } catch (err) {
          console.error("A problem occurred: " + err);
      }
  }
  
  
    async createdPostApiHandler(postData) {
      try {
        const response = await fetch("http://localhost:8080/surveycreation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
  
        if (!response.ok) {
          throw new Error("Fehler beim senden der Daten");
        }
  
        const responseData = await response.text(); //test
        console.log("Der server antwortet mit" + responseData);
        return responseData;
      } catch (err) {
        console.error("A problem occured: " + err);
      }
    }
  

  }
  