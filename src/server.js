const app = require('./app.js');

app.set('PORT', 6002);
app.listen(app.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log('The Server Is Up And Running On http://localhost:6002');
});
