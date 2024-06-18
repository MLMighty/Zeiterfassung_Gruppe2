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
        console.log(responseData);

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
              credentials: 'include'
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
          credentials: 'include'
        });
  
        if (!response.ok) {
          throw new Error("Fehler beim senden der Daten");
        }
  
        const responseData = await response.text(); //test
       
        return responseData;
      } catch (err) {
        console.error("A problem occured: " + err);
      }
    }


    async abcenseApiHandler(abcenseData){
      try {
        const responseData = await fetch("http://localhost:8080/saveabsence",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(abcenseData),
          credentials: 'include'
        })
        const response = responseData.status;
        console.log(response);
      } catch (error) {
        console.error("A problem occured: " + error)
      }

    }

    
    async timeEntryApiHandler(timeEntryData){
      try {
        const responseData = await fetch("http://localhost:8080/timeentry",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(timeEntryData),
          credentials: 'include'
        })
        const response = responseData.status;
        console.log(response);
      } catch (error) {
        console.error("A problem occured: " + error)
      }

    }


  
    async roleApiHandler(roleData){
      try {
        const responseData = await fetch("http://localhost:8080//saverole",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(roleData),
          credentials: 'include'
        })

        const response = await responseData.status();
        console.log(response);
        
      } catch (error) {
        console.error("A problem occured: " + error)
      }

    }
  

  }
  