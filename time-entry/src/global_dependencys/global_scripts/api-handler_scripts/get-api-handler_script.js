export class GET_ApiInterfaceHandler {

    async getPostsApiHandler() {
      try{
      const response = await fetch("http://localhost:8080/surveyposts");
      if (!response.ok) {
        throw new Error("Fehler beim senden der Daten");
      }
      const responseData = await response.json(); 
      return responseData;
  
    }catch(err){
      console.error("A problem occured: " + err);
  
   }}
  
  
   async getGeneratedPasswordApiHandler(){
    
    try{
      const response = await fetch("http://localhost:8080/generatepassword")
      if(!response.ok) {
        throw new Error("Fehler beim senden der Daten");
      }
      const responseData = await response.json();
    
      return responseData;
    }catch(err){
       console.error("A problem occured: " + err);
  
    }}


    async getTimeEntryApiHandler(){
    
      try{
        const response = await fetch("http://localhost:8080/timeentrydata")
        if(!response.ok) {
          throw new Error("Fehler beim senden der Daten");
        }
        const responseData = await response.json();
      
        return responseData;
      }catch(err){
         console.error("A problem occured: " + err);
    
      }}

      async getEditTimeApiHandler(){
    
        try{
          const response = await fetch("http://localhost:8080/absencedata")
          if(!response.ok) {
            throw new Error("Fehler beim senden der Daten");
          }
          const responseData = await response.json();
        
          return responseData;
        }catch(err){
           console.error("A problem occured: " + err);
      
        }}
  

        async getTeamLeadApiHandler(){
    
          try{
            const response = await fetch("http://localhost:8080/teamleadwebdata")
            if(!response.ok) {
              throw new Error("Fehler beim senden der Daten");
            }
            const responseData = await response.json();
          
            return responseData;
          }catch(err){
             console.error("A problem occured: " + err);
        
          }}


          async getAdminApiHandler(){
    
            try{
              const response = await fetch("http://localhost:8080/admindata")
              if(!response.ok) {
                throw new Error("Fehler beim senden der Daten");
              }
              const responseData = await response.json();
            
              return responseData;
            }catch(err){
               console.error("A problem occured: " + err);
          
            }}

  }