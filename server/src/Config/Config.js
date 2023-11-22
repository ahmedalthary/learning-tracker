module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || "leraningtracker",
    user: process.env.DB_USER || "ahmedalthary",
    password: process.env.DB_PASS || "112233",
    options: {
      dialect: process.env.DIALECT || "mssql",
      host: process.env.Host || "Localhost",
      //   storage:"./leraningtracker.sqlite",
      // encrypt: true,
      // trustServerCertificate: true, // Add this line to trust self-signed certificates
    },
  },
};
