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

    async getRolesApiHandler(){
    
      try{
        const response = await fetch("http://localhost:8080/getroles")
        if(!response.ok) {
          throw new Error("Fehler beim senden der Daten");
        }
        const responseData = await response.json();
      
        return responseData;
      }catch(err){
         console.error("A problem occured: " + err);
    
      }}
  
      async getEmailsApiHandler(){
    
        try{
          const response = await fetch("http://localhost:8080/emails")
          if(!response.ok) {
            throw new Error("Fehler beim senden der Daten");
          }
          const responseData = await response.json();
        
          return responseData;
        }catch(err){
           console.error("A problem occured: " + err);
      
        }}
    
  


  }