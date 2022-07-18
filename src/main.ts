import express from 'express';
import 'dotenv/config';

function main() {
  const app = express();
  const port = 9000;

  // endpoint sederhana untuk menampilkan teks 'Hello Express TS'
  app.get('/', (req, res) => res.send('Hello Express TS :)'));

  // mulai server express
  app.listen(port, () => {
    console.log(
      `[server] server dimulai di http://localhost:${process.env.PORT} ⚡`,
    );
  });
}

main();
