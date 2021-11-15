const request = require('supertest');

const server = require('../server');

describe('API server', () => {
    let api;
    let testDog = {
        name: "Bob",
        age: 6,
    };

    beforeAll(() => {
        //start the server and store it in the api variable
        api = server.listen(5000, () =>
        console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        //close the server. then run done
        console.log('Gracefully stopping test server');
        api.close(done);

    })

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /cats with status 200', (done) => {
        request(api).get('/dogs').expect(200, done);
    });

})