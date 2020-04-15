import axios from "axios";

export default class ApiService {
  static async GetStatus(roomId) {
      return axios.get(
        `https://localhost:5001/reservations/status/${roomId}`
      );
  }
  static async CreateReservation(roomId, duration, issuer) {
    return axios.post(`https://localhost:5001/reservations/add`, { RoomId: roomId, Duration: duration, Issuer: issuer });
  }
  static async EndMeeting(roomId) {
    return axios.post(`https://localhost:5001/reservations/remove`, { RoomId: roomId });
  }
  static async GetSchedule(roomId) {
      console.log(roomId);
      return axios.get("https://localhost:5001/reservations/calendar");
  }
}
