import axios from 'axios'
import { APIURL } from "./constants/constant"
console.log("APIURL", APIURL);
const instance = axios.create({
   
    
    baseURL: String(APIURL),


});

export default instance;