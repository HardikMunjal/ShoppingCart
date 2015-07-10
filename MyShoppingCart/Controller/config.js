//My Sql Setup

var mysql = require('mysql');

var mySqlConnectionString = mysql.createConnection({
    host: '180.151.101.114',
    port: '3306',
    user: 'sa',
    password: 'root',
    database:'ecommerce'
});

var Connection = {
    mySqlConnection: function (err) {
        if (err) return err;
        mySqlConnectionString.connect(function (err) {
            if (err) console.log('');
            else console.log('Connected');
        });
        return mySqlConnectionString;
    }
}

exports.Connection = Connection;