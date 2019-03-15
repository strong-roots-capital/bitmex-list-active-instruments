# bitmex-list-active-instruments [![Build status](https://travis-ci.org/strong-roots-capital/bitmex-list-active-instruments.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bitmex-list-active-instruments) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bitmex-list-active-instruments.svg)](https://npmjs.org/package/@strong-roots-capital/bitmex-list-active-instruments) [![codecov](https://codecov.io/gh/strong-roots-capital/bitmex-list-active-instruments/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/bitmex-list-active-instruments)

> List active instruments trading on BitMEX

## Install

``` shell
npm install @strong-roots-capital/bitmex-list-active-instruments
```

## Use

``` typescript
import listActiveInstruments from '@strong-roots-capital/bitmex-list-active-instruments'

(async () => {
    console.log(await listActiveInstruments())
    //=> [ 'XRPH19',
    //     'BCHH19',
    //     'ADAH19',
    //     'EOSH19',
    //     'TRXH19',
    //     'XBTUSD',
    //     'XBTH19',
    //     'XBTM19',
    //     'ETHUSD',
    //     'ETHH19',
    //     'LTCH19' ]
}) ()
```

## Related

- [bitmex-node](https://www.npmjs.com/package/bitmex-node)
