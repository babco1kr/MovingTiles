import axios from 'axios';

export default {
    // Axios call for getting information based on the routes
    findPhoto: function() {
        return axios.get('/api/photo');
    },

    addPhoto: function(info) {
        return axios.post('api/photo/add', info);
    }
}