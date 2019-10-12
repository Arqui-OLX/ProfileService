
const mysql = require('mysql');

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }

sleep(20000);
const mysqlConnection = mysql.createConnection({
    host: '10.42.48.116',
    //host: '13.59.85.208',
    user: 'root',
    port: '3306',
    //port: '3311',
    password: '1234',
    database: 'profile-db'
});

       
    mysqlConnection.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('db is connected');
        }
    });

module.exports = mysqlConnection; 