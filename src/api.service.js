import axios from "axios";

export default class ApiService {

    static async GetStatus(roomId) {
        return axios.get(
            `https://localhost:5001/reservations/status/${roomId}`
        );
    }
    static async CreateReservation(roomId, dateStart, duration, issuer) {
        return axios.post(`https://localhost:5001/reservations/add`, {
            RoomId: roomId,
            DateStart: dateStart,
            Duration: duration,
            Issuer: issuer
        });
    }
    static async CreateDirectReservation(roomId, duration, issuer) {
        return axios.post(`https://localhost:5001/reservations`, {
            RoomId: roomId,
            Duration: duration,
            Issuer: issuer
        });
    }
    static async StartMeeting(roomId) {
        return axios.post(`https://localhost:5001/reservations/start`, {
            RoomId: roomId
        });
    }
    static async EndMeeting(roomId) {
        return axios.post(`https://localhost:5001/reservations/remove`, {
            RoomId: roomId,
        });
    }
    static async GetSchedule(roomId) {
        return axios.get("https://localhost:5001/reservations/calendar?roomId=" + roomId);
    }
    static async SetExchangeCredentials(username, password) {
        return axios.post(`https://localhost:5001/config/setcredentials`, {
            username: username,
            password: password
        });
    }

    static async AddRoom(roomname, floor, size) {
        console.log(roomname, floor, size)
        return axios.post(`https://localhost:5001/rooms`, {
            RoomName: roomname,
            Floor: floor,
            RoomSize: size
        })
    }

    static async GetRoomById(id) {
        return axios.get(`https://localhost:5001/rooms?roomId=` + id)
    }
}
