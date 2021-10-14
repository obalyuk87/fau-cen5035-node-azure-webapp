// Import the dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/server");

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Testing Application", () => {

    describe("GET /", () => {

        // test default response
        it("should be a valid response", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    // ensure http code = 200 (success)
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });


        // test default response
        it("validate name, version, ts", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    // ensure expected properties are set
                    res.body.should.have.property('name');
                    res.body.should.have.property('version');
                    res.body.should.have.property('ts');
                    done();
                });
        });


        // test default response
        it("test version for specific value", (done) => {

            const MIN_VERSION_NUMBER = 2;
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    // ensure reported version is greater than expected by test
                    res.body.should.have.property('version').be.gte(MIN_VERSION_NUMBER);
                    done();
                });
        });

    });
});