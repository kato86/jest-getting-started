import axios from 'axios';
import Planets from './star-wars';

jest.mock('axios');

test('should fetch star wars first planet', () => {
    const planet = [{name: "Tatooine"}];
    const resp = {data: planet};
    axios.get.mockResolvedValue(resp);

    return Planets.first().then(data => expect(data).toEqual(planet));
});