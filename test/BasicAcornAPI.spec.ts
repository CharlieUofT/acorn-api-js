/**
 * Created by Charlie on 2017-09-24.
 */

import {expect} from 'chai';
import {BasicAcornAPI} from '../src/BasicAcornAPI';
import {AcornError} from "../src/AcornError";

require('chai').use(require('chai-as-promised')).should();

const config = JSON.parse(require('fs').readFileSync('./test/test_config.json'));

describe('BasicAcornAPI', function () {
    this.timeout(15000); // set timeout to be 15s instead of default 2
    let basicAPI: BasicAcornAPI;
    it('should be created', function () {
        basicAPI = new BasicAcornAPI();
        expect(basicAPI).to.not.be.null;
    });

    it('should throw Acorn Error when user/pass pair is incorrect', function () {
        expect(basicAPI.login('user', 'pass')).to.be.rejected;
    });

    // High Delay
    it('should login the user', async function () {
        // console.log(basicAPI);
        let result = await basicAPI.login(config.data.user, config.data.pass);
        expect(result).to.be.true;
    });

    it('should logout the user', async function () {
        let result = await basicAPI.logout();
        expect(result).to.be.true;
        // TODO add logout check
    });
});