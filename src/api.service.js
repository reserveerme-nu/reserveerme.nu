import axios from "axios";

export default class ApiService {
    static async GetStatus(roomId) {
        return axios.get(
            `https://localhost:44384/reservations/status/${roomId}`
        );
    }
    static async CreateReservation(roomId, dateStart, duration, issuer) {
        return axios.post(`https://localhost:44384/reservations/add`, {
            RoomId: roomId,
            DateStart: dateStart,
            Duration: duration,
            Issuer: issuer
        });
    }
    static async CreateDirectReservation(roomId, duration, issuer) {
        return axios.post(`https://localhost:44384/reservations`, {
            RoomId: roomId,
            Duration: duration,
            Issuer: issuer
        });
    }
    static async StartMeeting(roomId) {
        return axios.post(`https://localhost:44384/reservations/start`, {
            RoomId: roomId
        });
    }
    static async EndMeeting(roomId) {
        return axios.post(`https://localhost:44384/reservations/remove`, {
            RoomId: roomId,
        });
    }
}
