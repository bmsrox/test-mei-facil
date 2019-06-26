const request = require('supertest')
const app = require('../../src/server')

describe('POST Payment', () => {
    it('should valid post request', async () => {
        const response = await request(app)
            .post('/')
            .send({
                "value": 400,
                "number_of_installment": 1,
                "account_origin": 1,
                "account_destiny": 2
            })

        expect(response.status).toBe(200)
    })

    it('should invalid post request', async () => {
        const response = await request(app)
            .post('/')
            .send()

        expect(response.status).toBe(404)
    })

    it('should valid post request with wrong account origin', async () => {
        const response = await request(app)
            .post('/')
            .send({
                "value": 400,
                "number_of_installment": 1,
                "account_origin": 4,
                "account_destiny": 2
            })

        expect(response.status).toBe(404)
    })

    it('should valid post request with wrong account destiny', async () => {
        const response = await request(app)
            .post('/')
            .send({
                "value": 400,
                "number_of_installment": 1,
                "account_origin": 2,
                "account_destiny": 5
            })

        expect(response.status).toBe(404)
    })

    it('should validate the net value', async () => {
        const response = await request(app)
            .post('/')
            .send({
                "value": 400,
                "number_of_installment": 1,
                "account_origin": 1,
                "account_destiny": 2
            })

        expect(response.status).toBe(200)
        expect(response.body.net_value).toBe(384.84)
    })
})