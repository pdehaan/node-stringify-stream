var tap = require('tap')
    , test = tap.test
    , stringify = require('..')
    , concat = require('concat-stream')
    , os = require('os')
    , streamify = require('stream-array')
;

test('pretty-print empty array', function(t) {
    streamify([]).pipe(stringify({open:'[', close:']'})).pipe(concat(function(err, res) {
        t.notOk(err, 'No error');
        t.type(res, 'Buffer', 'concat results into a Buffer');
        t.equal('[]', res.toString(), 'result matches expectation');

        t.end();
    }));
});