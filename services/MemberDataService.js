/** 
Author: Sairaghav Venkataraman
Description:
Defines methods to access Member-related data using Axios
*/
import http from "../http-common";

class MemberDataService {
  getAll() {
    return http.get("/members/all");
  }

  getByName(name) {
    return http.get(`/members/name?name=${name}`);
  }
  
  getByArea(name) {
    return http.get(`/members/area?area=${name}`);
  }
}

export default new MemberDataService();