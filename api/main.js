const { app } = require('./modules/app/app.module');
const UserRouter = require('./modules/router/user/user.router');
const db= require('./modules/db');

async function main() {
  app.listen(process.env.PORT || 8081);
  UserRouter('/api/user', app)
}

module.exports = { main, app, db };
