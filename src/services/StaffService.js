import $api from "../http";

export default class StaffService {
  static getStaff() {
    return $api.get("/staff");
  }
}
