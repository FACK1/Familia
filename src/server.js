const app = require('./app.js');
require('env2')('config.env');
require('./dbConfig/mongodb.config');

app.set('PORT', process.env.PORT);
app.listen(app.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log('The Server Is Up And Running On', app.get('PORT'));
});
