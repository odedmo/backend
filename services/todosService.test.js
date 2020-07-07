require('dotenv/config')
const mongoose = require('mongoose')

const { addTodo } = require('./todosService')
const mongoUri = process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI

describe('todo service', () => {

    beforeAll(async () => {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
        })
    })

    test('should get object with key: test, value: some test', async () => {
        const data = await addTodo('some test')
        expect(data).toEqual(
            expect.objectContaining({
                test: 'some test'
            })
        )
        expect(data._id).toBeDefined()
    })

    afterAll(() => {
        mongoose.connection.close()
    })
})