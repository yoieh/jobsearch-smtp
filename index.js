const SMTPServer = require('smtp-server').SMTPServer;

const options = {
  secure: false,
  name: 'mail',

}

const server = new SMTPServer(options);

server.listen(465);
