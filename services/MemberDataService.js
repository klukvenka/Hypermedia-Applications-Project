import http from "../http-common";

class MemberDataService {
  getAll() {
    return http.get("/members/all");
  }

  getByName(name) {
    return http.get(`/members/name?name=${name}`);
  }

  getByProduct(name) {
    return http.get(`/members/product?product=${name}`);
  }

  getByArea(name) {
    return http.get(`/members/area?area=${name}`);
  }
}

export default new MemberDataService();