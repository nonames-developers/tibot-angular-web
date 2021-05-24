const sqlite3 = require('sqlite3').verbose();

static class Connection {

    constructor(dbFilePath) {
        this.conn = null
    }

    getConnection() {
        if (this.conn == null) {
            this.conn = new sqlite3.Database('./tibot.db', sqlite3.OPEN_READWRITE, (err) => {
                if (err) {
                    console.error(err.message);
                    return false;
                }
            });
        }
        console.log('Connected to the tibot database.');
        return this.conn;
    }
}

export default Connection

db.serialize(() => {
    db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});
