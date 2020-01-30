const fs = require('fs')
module.exports = {
    devServer: {
        host: 'admin.ntp-event.dk',
        port:  '8000',
        https: {
            key: fs.readFileSync('./privkey.pem'),
            cert: fs.readFileSync('./fullchain.pem'),
        },
        public: 'https://localhost:8000'
    }
}
