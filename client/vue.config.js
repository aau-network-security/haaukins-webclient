const fs = require('fs')
module.exports = {
	  devServer: {
		      host: 'admin.ntp-event.dk',
		      port:  '8000',
		      https: {
		         key: fs.readFileSync('/etc/certs/privkey.pem'),
		         cert: fs.readFileSync('/etc/certs/fullchain.pem'),
	  		},
		      public: 'https://localhost:8000' 
		    }
}
