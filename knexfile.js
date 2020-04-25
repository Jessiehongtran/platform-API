// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: './migrations'
    }
  },

  ssl: true

};
