const Connection = require('./connection.js');

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// USERS /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// GET /////////////////////////////////////////
module.exports = function () {
    this.get_user = function (user_id, cb) {
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
    this.insert_user = function (user_id, birth_date, house_name = 'NULL') {
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
    this.delete_user = function (user_id) {
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
    this.update_user = function (user_id, birth_date, house_name) {
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

    this.update_house_name = function (user_id, house_name) {
        let conn = new Connection();
        let sql = `UPDATE USERS SET house_name = ? WHERE user_id = ?`;
        let data = [house_name, user_id];
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
    this.get_hide_game = function (user_fk, cb) {
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
    this.insert_hide_game = function (start, end, is_winner, level, score, user_fk) {
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
    this.delete_hide_game = function (hide_id, user_fk) {
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

    this.delete_hide_games = function (user_fk) {
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
    this.get_phrase = function (phrase_id, cb) {
        let conn = new Connection();
        let sql = `SELECT * FROM PHRASES WHERE phrase_id = ?`;
        let data = phrase_id;
        conn.getConn().get(sql, data, function (err, row) {
            if (err) return console.log(err.message);
            conn.closeConn();
            cb(row);
        });
    }

    this.get_phrases = function (cb) {
        let conn = new Connection();
        let sql = `SELECT * FROM PHRASES`;
        conn.getConn().all(sql, function (err, rows) {
            if (err) return console.log(err.message);
            conn.closeConn();
            cb(rows);
        });
    }

    ///////////////////////////////////////// INSERT /////////////////////////////////////////
    this.insert_phrase = function (phrase_id, phrase) {
        let conn = new Connection();
        let sql = `INSERT INTO PHRASES(phrase_id, phrase) VALUES(?, ?)`;
        let data = [phrase_id, phrase]
        let result = "";
        conn.getConn().run(sql, data, function (err) {
            if (err) result = err.message;
            else result = `A row has been inserted with rowid ${this.lastID}`;
            console.log(result);
            conn.closeConn();
        });
    }

    ///////////////////////////////////////// DELETE /////////////////////////////////////////
    this.delete_phrase = function (phrase_id) {
        let conn = new Connection();
        let sql = `DELETE FROM PHRASES WHERE phrase_id = ?`;
        let data = phrase_id;
        conn.getConn().run(sql, data, function (err) {
            if (err) result = err.message;
            else result = `Row(s) deleted ${this.changes}`;
            console.log(result);
            conn.closeConn();
        });
    }

    this.delete_phrases = function () {
        let conn = new Connection();
        let sql = `DELETE FROM PHRASES`;
        conn.getConn().run(sql, function (err) {
            if (err) result = err.message;
            else result = `All Row(s) deleted ${this.changes}`;
            console.log(result);
            conn.closeConn();
        });
    }
}


////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// MAIN /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//require("./dao")()

function main() {
    //insert_user("Dylan", "2018");
    //delete_user("Dylan")
    //update_user("Dylan", "2019", "Casa1");
    //insert_hide_game(163273727405, 163273727435, 1, "easy", 145, "Dylan");
    //delete_hide_game(3, "Dylan");
    //delete_hide_games("Dylan");
    //delete_phrase(1);
    //delete_phrases();

    /*insert_phrase(1, "Hola, mi nombre es Tibot, ¿y el tuyo?");
    insert_phrase(2, "¿Quieres que seamos amigos?, ¡me encanta jugar a juegos divertidos!");
    insert_phrase(3, "Sé jugar al escondite, al pilla pilla o a las figuras, ¿A cuál quieres jugar?");
    insert_phrase(4, "¡Corre, corre! Voy a contar hasta 10, ¡escóndete para que no te encuentre!");
    insert_phrase(5, "Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, ¡diez! Voy a encontrarte");
    insert_phrase(6, "¡Estás aquí!, ¡Que divertido!, vamos a jugar otra vez");
    insert_phrase(7, "!Voy a pillarte!");
    insert_phrase(8, "¡Activando turbo!");
    insert_phrase(9, "¡Vaya!, corres super rápido");
    insert_phrase(10, "Tengo muchas figuras, a ver si sabes cuales son");
    insert_phrase(11, "Es un cuadrado rojo");
    insert_phrase(12, "Es un cuadrado verde");
    insert_phrase(13, "Es un cuadrado amarillo");
    insert_phrase(14, "Es un cuadrado azul");
    insert_phrase(15, "Es un triángulo rojo");
    insert_phrase(16, "Es un triángulo verde");
    insert_phrase(17, "Es un triángulo amarillo");
    insert_phrase(18, "Es un triángulo azul");
    insert_phrase(19, "Es un círculo rojo");
    insert_phrase(20, "Es un círculo verde");
    insert_phrase(21, "Es un círculo amarillo");
    insert_phrase(22, "Es un círculo azul");
    insert_phrase(23, "Esa no es la figura que te estoy enseñando");
    insert_phrase(24, "Ese no es el color de la figura");
    insert_phrase(25, "Ooooooh");
    insert_phrase(26, "No no");
    insert_phrase(27, "¡Muy bien!");
    insert_phrase(28, "¡Estupendo!");
    insert_phrase(29, "¡Si!");*/

    /*get_user("Dylan", (user) => {
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

    get_phrases((phrases) => {
        console.log(phrases)
    });*/

}

//main()