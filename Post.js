const db = require('./db');

/* User MAKER, just made to help making faster SQL QUERY */
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    async save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO users(
            name,
            email,
            created_at
        )
        VALUES(
            '${this.name}',
            '${this.email}',
            '${createdAtDate}'
        )`;

        const [newUser, _] = await db.execute(sql);

        return newUser;
    }

    static findAll(){
        let sql = "SELECT * FROM users;";

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM users WHERE id = ${id}`;

        return db.execute(sql);
    }
}

module.exports = User;