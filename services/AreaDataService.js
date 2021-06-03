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