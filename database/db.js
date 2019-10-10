
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
    host: 'ec2-13-59-85-208.us-east-2.compute.amazonaws.com',
    user: 'root',
    //port: '3311',
    password: '1234',
    database: 'profile-db',
    multipleStatements: true
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