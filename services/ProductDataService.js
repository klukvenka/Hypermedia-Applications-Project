/** 
Author: Sairaghav Venkataraman
Description:
Defines methods to access Product-related data using Axios
*/
import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products/all");
  }

  getByName(name) {
    return http.get(`/products/name?name=${name}`);
  }

  getByArea(name) {
    return http.get(`/products/area?area=${name}`);
  }
  
  getByManager(name) {
    return http.get(`/products/manager?manager=${name}`);
  }

  getByReference(name) {
    return http.get(`/products/reference?reference=${name}`);
  }
}

export default new ProductDataService();