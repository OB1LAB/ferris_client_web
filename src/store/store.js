import { makeAutoObservable } from "mobx";

export default class Store {
  theme = localStorage.getItem("theme") || "dark";
  selected_server = localStorage.getItem("selected_server") || "HTC Elara";
  staff = {};
  lastLogsUpdate = "01-01-1970 00:00:00";
  constructor() {
    makeAutoObservable(this);
  }
  setLoading(bool) {
    this.isLoading = bool;
  }
  setSelectedServer(server) {
    this.selected_server = server;
    localStorage.setItem("selected_server", server);
  }
  changeTheme(bool) {
    if (bool) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
    localStorage.setItem("theme", this.theme);
  }
  setStaff(staff) {
    this.staff = staff;
  }
  setLastLogsUpdate(dateTime) {
    this.lastLogsUpdate = dateTime;
  }
}
