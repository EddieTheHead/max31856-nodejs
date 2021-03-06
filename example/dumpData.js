#!/usr/bin/env node

'use strict';

const max31856 = require('../max31856.js');

const sensor = new max31856.MAX31856(0, 0, max31856.T_TYPE);
const cr0 = sensor.cr0Register();
const cr1 = sensor.cr1Register();
const faultByte = sensor.faultRegister();

console.log('CR0: ' + Number(cr0).toString(2));
console.log('CMODE: ' + Number((cr0 & 0b10000000) > 0).toString());

console.log('CR1: ' + Number(cr1).toString(2));
console.log('Thermocouple Type: ' + sensor.tcType());
console.log('Average ' + sensor.avgSamples() + ' samples');

console.log('FR:' + Number(faultByte).toString(2));
console.log(sensor.faults());

console.log(sensor.tempC().toPrecision(2) + 'C');

