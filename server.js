const { syncAndSeed } =  require('./db');
const app = require('./app');

const init = async()=> {
  await syncAndSeed();
  const port = process.env.PORT || 3000;
//   console.log(process.env.JWT)
  app.listen(port, ()=> console.log(`listening on port ${port}`));
};

init();