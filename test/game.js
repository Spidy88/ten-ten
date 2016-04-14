"use strict";

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const should = chai.should();
chai.use(sinonChai);

require('babel-register');
require('babel-polyfill');

const Game = require('../lib/game').default;

describe('Game', function() {
    let game;

    describe('api', function() {
        beforeEach(function() {
            game = new Game();
        });

        it('should have isGameOver()', function() {
            game.should.respondTo('isGameOver');
        });
    });
});