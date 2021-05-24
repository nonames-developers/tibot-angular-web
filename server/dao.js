const Connection = require('./connection.js');

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// USERS /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// GET /////////////////////////////////////////

function get_user(user_id, cb) {
    let conn = new Connection();
    let sql = `SELECT * FROM USERS WHERE user_id = ?`;
    let data = user_id;
    conn.getConn().get(sql, data, function (err, row) {
        if (err) return console.log(err.message);
        conn.closeConn();
        cb(row);
    });
}

///////////////////////////////////////// INSERT /////////////////////////////////////////
function insert_user(user_id, birth_date, house_name = 'NULL') {
    let conn = new Connection();
    let sql = `INSERT INTO USERS(user_id, birth_date, house_name) VALUES(?, ?, ?)`;
    let data = [user_id, birth_date, house_name];
    let result = "";
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `A row has been inserted with rowid ${this.lastID}`;
        console.log(result);
        conn.closeConn();
    });
}

///////////////////////////////////////// DELETE /////////////////////////////////////////
function delete_user(user_id) {
    let conn = new Connection();
    let sql = `DELETE FROM USERS WHERE user_id = ?`;
    let data = user_id;
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `Row(s) deleted ${this.changes}`;
        console.log(result);
        conn.closeConn();
    });
}

///////////////////////////////////////// UPDATE /////////////////////////////////////////
function update_user(user_id, birth_date, house_name) {
    let conn = new Connection();
    let sql = `UPDATE USERS SET birth_date = ?, house_name = ? WHERE user_id = ?`;
    let data = [birth_date, house_name, user_id];
    let result = "";
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `A row has been updated with rowid ${this.lastID}`;
        console.log(result);
        conn.closeConn();
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// HIDE_GAMES /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// GET /////////////////////////////////////////

function get_hide_game(user_fk, cb) {
    let conn = new Connection();
    let sql = `SELECT * FROM HIDE_GAMES WHERE user_fk = ?`;
    let data = user_fk;
    conn.getConn().get(sql, data, function (err, row) {
        if (err) return console.log(err.message);
        conn.closeConn();
        cb(row);
    });
}

///////////////////////////////////////// INSERT /////////////////////////////////////////
function insert_hide_game(start, end, is_winner, level, score, user_fk) {
    let conn = new Connection();
    let sql = `INSERT INTO HIDE_GAMES(start, end, is_winner, level, score, user_fk) VALUES(?, ?, ?, ?, ?, ?)`;
    let data = [start, end, is_winner, level, score, user_fk];
    let result = "";
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `A row has been inserted with rowid ${this.lastID}`;
        console.log(result);
        conn.closeConn();
    });
}

///////////////////////////////////////// DELETE /////////////////////////////////////////
function delete_hide_game(hide_id, user_fk) {
    let conn = new Connection();
    let sql = `DELETE FROM HIDE_GAMES WHERE hide_id = ? AND user_fk = ?`;
    let data = [hide_id, user_fk];
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `Row(s) deleted ${this.changes}`;
        console.log(result);
        conn.closeConn();
    });
}

function delete_hide_games(user_fk) {
    let conn = new Connection();
    let sql = `DELETE FROM HIDE_GAMES WHERE user_fk = ?`;
    let data = user_fk;
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `Row(s) deleted ${this.changes}`;
        console.log(result);
        conn.closeConn();
    });
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// PHRASES /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// GET /////////////////////////////////////////
function get_phrase(phrase_id, cb) {
    let conn = new Connection();
    let sql = `SELECT * FROM PHRASES WHERE phrase_id = ?`;
    let data = phrase_id;
    conn.getConn().get(sql, data, function (err, row) {
        if (err) return console.log(err.message);
        conn.closeConn();
        cb(row);
    });
}

///////////////////////////////////////// INSERT /////////////////////////////////////////
function insert_phrase(phrase) {
    let conn = new Connection();
    let sql = `INSERT INTO PHRASES(phrase) VALUES(?)`;
    let data = phrase;
    let result = "";
    conn.getConn().run(sql, data, function (err) {
        if (err) result = err.message;
        else result = `A row has been inserted with rowid ${this.lastID}`;
        console.log(result);
        conn.closeConn();
    });
}

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// MAIN /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function main() {
    //insert_user("Dylan", "2018");
    //delete_user("Dylan")
    //update_user("Dylan", "2019", "Casa1");
    //insert_hide_game(163273727405, 163273727435, 1, "easy", 145, "Dylan");
    //delete_hide_game(3, "Dylan");
    //delete_hide_games("Dylan");
    //insert_phrase("Hello friend, my name is Tibot!");
    
    get_user("Dylan", (user) => {
        console.log("User ID: " + user.user_id);
        console.log("Birth Date: " + user.birth_date);
        console.log("House Name: " + user.house_name);
    });

    get_hide_game("Dylan", (hide_game) => {
        console.log("Hide ID: " + hide_game.hide_id);
        console.log("Start: " + hide_game.start);
        console.log("End: " + hide_game.end);
        console.log("Is Winner: " + hide_game.is_winner);
        console.log("Level: " + hide_game.level);
        console.log("Score: " + hide_game.score);
        console.log("User FK: " + hide_game.user_fk);
    });

    get_phrase(1, (phrase) => {
        console.log("Phrase ID: " + phrase.phrase_id);
        console.log("Phrase: " + phrase.phrase);
    });

}

main()