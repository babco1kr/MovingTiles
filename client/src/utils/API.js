import axios from 'axios';

export default {
    findPhoto: function() {
        return axios.get('/api/photos');
    }
}