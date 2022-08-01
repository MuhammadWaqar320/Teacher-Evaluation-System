module.exports = {
  development: {
    username: "root",
    password: "Liverpool1",
    database: "tes-db",
    host: "localhost",
    dialect: "mysql",
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeSeedData",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
