const { app } = require('./modules/app/app.module');
const UserRouter = require('./modules/router/user.router');
const RestaurantRouter = require('./modules/router/restaurant.router');
const PlatRouter = require('./modules/router/plat.router');
const CommandeRouter = require('./modules/router/commande.router');
const db= require('./modules/db');

async function main() {
  app.listen(process.env.PORT || 8081);
  UserRouter('/api/user', app);
  RestaurantRouter('/api/restaurant', app);
  PlatRouter('/api/plat', app);
  CommandeRouter('/api/commande', app);
}

module.exports = { app, main,  db };
