const { apiResponse } = require('./responseHandler');

describe('response handler', () => {
    test('should output data and messsage', () => {
        const text = apiResponse('data', 'messsage');
        expect(text).toMatchObject({
            message: 'messsage',
            data: 'data'
        });
    })
    
    test('should output data and default messsage', () => {
        const text = apiResponse('data');
        expect(text).toMatchObject({
            message: 'Success',
            data: 'data'
        });
    })
})