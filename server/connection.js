const sqlite3 = require('sqlite3');

class Connection {

    constructor() {
        this.conn = null
    }

    getConn() {
        if (this.conn == null) {
            this.conn = new sqlite3.Database('./tibot.db', sqlite3.OPEN_READWRITE, (err) => {
                if (err) {
                    console.error(err.message);
                    return false;
                } else {
                    console.log('Connected to the tibot database.');
                }
            });
        }
        return this.conn;
    }

    closeConn() {
        this.conn.close((err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }

}

module.exports = Connection