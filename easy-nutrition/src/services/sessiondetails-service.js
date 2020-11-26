import http from './http-common';

class SessiondetailsService {
    getAll() {
        return http.get('/sessiondetails');
    }
    get(id) {
        return http.get(`/sessiondetails/${id}`);
    }

    create(data) {
        return http.post("/sessiondetails", data);
    }

    update(id, data) {
        return http.put(`/sessiondetails/${id}`, data);
    }

    delete(id) {
        return http.delete(`/sessiondetails/${id}`);
    }

    deleteAll() {
        return http.delete(`/sessiondetails`);
    }

    findByTitle(name) {
        return http.get(`/sessiondetails?name=${name}`);
    }
}

export default new SessiondetailsService();
