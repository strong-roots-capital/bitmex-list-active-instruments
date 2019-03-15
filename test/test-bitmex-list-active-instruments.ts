import test from 'ava'

/**
 * Library under test
 */

import listActiveInstruments from '../src/bitmex-list-active-instruments'

test('should return a Promise of string[] of active instruments', async t => {
    const active = await listActiveInstruments()
    for (const instrument of active) {
        if ('' === instrument) {
            t.fail()
        }
    }
    t.pass()
})

test('should ignore up/down contracts', async t => {
    const active = await listActiveInstruments()
    for (const instrument of active) {
        if (/.*7D_[UD].*/.test(instrument)) {
            console.log('found a match with', instrument)
            t.fail()
        }
    }
    t.pass()
})
