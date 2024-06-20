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
          return responseData ; //response if login is successful will be a uuid

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

    
    async roleApiHandler(createdRoleData){
      try {
        const responseData = await fetch("http://localhost:8080/saverole",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createdRoleData),
          credentials: 'include'
        })
        const response = responseData.status;
        console.log(response);
      } catch (error) {
        console.error("A problem occured: " + error)
      }

    }


  
    async adminWebDataApiHandler(adminWebData){
      try {
        const responseData = await fetch("http://localhost:8080/adminwebdata",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adminWebData),
          credentials: 'include'
        })

        const response = await responseData.status;
        console.log(response);
        
      } catch (error) {
        console.error("A problem occured: " + error)
      }

    }



// Interfaces für die OnLoad Ordner dateien
    
    async getTimeEntryApiHandler(uuid){
      try {
        const responseData = await fetch("http://localhost:8080/timeentrydata",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uuid),
          credentials: 'include'
        })

        const response = await responseData.json();
        console.log(response);
        
      } catch (error) {
        console.error("A problem occured: " + error)
      }

    }

      async getEditTimeApiHandler(uuid){
    
        try {
          const responseData = await fetch("http://localhost:8080/absencedata",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(uuid),
            credentials: 'include'
          })
  
          const response = await responseData.json();
          console.log(response);
          
        } catch (error) {
          console.error("A problem occured: " + error)
        }
  
      }

        async getTeamLeadApiHandler(uuid){
    
          try {
            const responseData = await fetch("http://localhost:8080/teamleadwebdata",{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(uuid),
              credentials: 'include'
            })
    
            const response = await responseData.json();
            console.log(response);
            
          } catch (error) {
            console.error("A problem occured: " + error)
          }
    
        }
        
          async getAdminApiHandler(uuid){
    
            try {
              const responseData = await fetch("http://localhost:8080/admindata",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(uuid),
                credentials: 'include'
              })
      
              const response = await responseData.json();
              console.log(response);
              
            } catch (error) {
              console.error("A problem occured: " + error)
            }
      
          }
          

  

  }
  