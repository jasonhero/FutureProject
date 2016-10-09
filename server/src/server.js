import config from 'config';
import bodyParser from 'body-parser';
import Express from 'express';
import http from 'http';

const app = new Express();

const PORT = config.get('port');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));


const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
})
