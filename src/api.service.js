import axios from "axios";

export default class ApiService {
    static async GetStatus(roomId) {
        return axios.get(
          `https://localhost:44384/reservations/status/${roomId}`
        );
    }
}
