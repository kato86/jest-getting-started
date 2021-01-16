import axios from 'axios';

class Planets {
    static first() {
        return axios.get('https://swapi.dev/api/planets/1/').then(resp => resp.data);
    }
}

export default Planets;