require('../dbConfig/mongodb.config');
// eslint-disable-next-line  import/no-extraneous-dependencies
const test = require('tape');
const Family = require('../models/Family.model.js');

test('test that tape is working!', (t) => {
  const actual = 1;
  const expected = 1;
  t.equal(actual, expected, 'Tape is working!');
  t.end();
});


test('Test insert into families collection', (t) => {
  const fam = new Family({
    name: 'test-Family-1',
    key: 'ABCDEF123ABCDEF',
  });

  fam.save((err) => {
    t.error(err);
    const actual = err ? 'Fail to add' : 'family has been added to DB';
    const expected = 'family has been added to DB';
    t.equal(actual, expected, 'Family added to DB!');
    require('mongoose').disconnect();
    t.end();
  });
});
