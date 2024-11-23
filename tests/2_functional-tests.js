const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    suite('Delete Method', () => {
        test('normal delete', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .end((err, res) => {
                    assert.equal(res.status, 200)
                })
        });
        test('normal', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({ _id: '1' })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    //assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('invalid id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                //.send({ _id: '1' })
                .end((err, res) => {
                    assert.equal(res.status, 200)
                   // assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
        test('missing id', () => {
            chai.request(server)
                .keepOpen()
                .delete('/api/issues/apitest')
                .send({})
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    assert.deepEqual(res.body, { error: 'missing _id' })
                })
        });
    });
});
