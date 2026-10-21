import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bucket,summarize,validVisit} from '../src/model.js';
test('visit-count boundaries include ten in the third band',()=>{assert.deepEqual([1,2,5,6,10,11].map(bucket),[0,1,1,2,2,3]);});
test('cities aggregate under countries and earliest date wins',()=>{const visits=[{country:'PT',count:2,date:'2024-06-01'},{country:'PT',count:1,date:'2019-01-01'},{country:'JP',count:6,date:'2023-05-03'}];assert.deepEqual(summarize(visits),{PT:{count:3,first:'2019-01-01'},JP:{count:6,first:'2023-05-03'}});assert.equal(summarize(visits.slice(2)).PT,undefined);});
test('backup validation rejects invalid counts and future dates',()=>{const v={id:'a',place:'Lisbon',country:'PT',count:1,date:'2020-01-01'};assert.ok(validVisit(v));for(const count of [0,-1,1.5,'2'])assert.ok(!validVisit({...v,count}));assert.ok(!validVisit({...v,date:'9999-01-01'}));});
