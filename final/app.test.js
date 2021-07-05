const request = require('supertest');
const app = require('./app');

describe('Api testing', () => {
    afterAll(done => {
        app.close(done);
    });

    it('should get hello message ', done => {
        // given 
        const expectedResponse = { 
            message: "Hello World from DOCKER!"
        }

        // then
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(expectedResponse)
                done();
            })
    })
})
