import axios from "axios";

export default class ApiService {
  static async GetStatus(roomId) {
      return axios.get(
        `https://localhost:44384/reservations/status/${roomId}`
      );
  }
  static async CreateReservation(roomId, duration, issuer) {
    return axios.post(`https://localhost:44384/reservations/add`, { RoomId: roomId, Duration: duration, Issuer: issuer });
  }    
}
