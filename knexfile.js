// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true, // needed for sqlite3
        connection: {
            filename: "./database/auth.db3"
        },
        pool: {
            // needed to check if foreign keys are valid
            afterCreate: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done);
            }
        },
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    }
};
