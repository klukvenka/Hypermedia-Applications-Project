/** 
Author: Sairaghav Venkataraman
Description:
Defines methods to access Area-related data using Axios
*/
import http from "../http-common";

class AreaDataService {
  getAll() {
    return http.get("/areas/all");
  }

  getByName(name) {
    return http.get(`/areas/name?name=${name}`);
  }
}

export default new AreaDataService();