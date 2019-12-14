import * as assert from 'assert';
import * as path from 'path';
import * as csv from '../../src';

describe('Issue #68 - https://github.com/C2FO/fast-csv/issues/68', () => {
    it('should handle bubble up parse errors properly', next => {
        let called = false;
        csv.parseFile(path.resolve(__dirname, './assets/issue68-invalid.tsv'), { headers: true, delimiter: '\t' })
            .on('data', () => null)
            .on('end', (count: number) => {
                assert.strictEqual(count, 20000);
                throw new Error('End error');
            })
            .on('error', err => {
                if (!called) {
                    called = true;
                    assert.strictEqual(/^Parse Error/.test(err.message), true);
                    next();
                }
            });
    });

    it('should handle bubble up data errors properly', next => {
        let called = false;
        let count = 0;
        csv.parseFile(path.resolve(__dirname, './assets/issue68.tsv'), { headers: true, delimiter: '\t' })
            .on('data', () => {
                count += 1;
                if (count % 1001 === 0) {
                    throw new Error('Data error');
                }
            })
            .on('error', err => {
                if (!called) {
                    called = true;
                    assert.strictEqual(err.message, 'Data error');
                    next();
                } else {
                    throw err;
                }
            });
    });
});
