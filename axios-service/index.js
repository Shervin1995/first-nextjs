import axios from "axios";
 

//
var api = process.env.DOMAIN;

// ---------------------------------------------------
// authHeader()
// ---------------------------------------------------
function authHeader() {  
  var token = localStorage.getItem('psyAccessToken')
  if (token) {
    return {"x-access-token": token}
  } else {
    return {}
  }
}

// ---------------------------------------------------
// axios 
// ---------------------------------------------------
const http = axios.create({
  baseURL: api,
  headers: {
    "Content-type": "application/json", 
  }
}); 

//-----------------------------------------------------
// service Class
//-----------------------------------------------------
class service {


  // auto
   
  post(data){ return http.post(data['api'], data['data'], {headers: data['headers'] ?  authHeader() : ''}) }  



}



// 
export default new service();