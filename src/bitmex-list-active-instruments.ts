/**
 * bitmex-list-active-instruments
 * List active instruments trading on BitMEX
 */

import { BitmexAPI } from 'bitmex-node'
const bitmex = new BitmexAPI()


/**
 * Returns the list of actively-traded contracts on BitMEX exchange.
 *
 * @return List of actively-traded contracts on BitMEX exchange
 */
export default async function listActiveInstruments(): Promise<string[]> {
    const instruments = (await bitmex.Instrument.getActive())
        .filter(i => i.symbol.indexOf('_') < 0)  /* ignore up/down contracts */
    return instruments.map(i => i.symbol)
}
