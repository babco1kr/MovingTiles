import axios from 'axios';

export default {
    findPhoto: function() {
        return axios.get('/api/photo');
    },

    addPhoto: function(info) {
        return axios.post('api/photo/add', info);
    }
}