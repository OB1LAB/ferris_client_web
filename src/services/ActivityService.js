import $api from "../http";

export default class ActivityService {
  static getActivity(firstDate, secondDate, players, server) {
    return $api.post("/activity", {
      first_date: firstDate,
      second_date: secondDate,
      players,
      server,
    });
  }
}
