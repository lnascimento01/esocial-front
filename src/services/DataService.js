import http from "../request";

class DataService {
  getAll() {
    return http.get("/domain");
  }

  get(id) {
    return http.get(`/domain/${id}`);
  }

  create(data) {
    return http.post("/domain", data);
  }

  update(data) { 
    return http.patch(`/domain/`, data);
  }

  delete(id) {
    return http.delete(`/domain/${id}`);
  }
}

export default new DataService();