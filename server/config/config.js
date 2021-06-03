const conn = process.env.DATABASE_URL;

const dialect = conn.split('://')[0];
const user = conn.split('://')[1].split(':')[0];
const password = conn.split('://')[1].split(':')[1].split('@')[0];
const host = conn.split('://')[1].split(':')[1].split('@')[1].split('/')[0];
const db = conn.split('://')[1].split(':')[2].split('/')[1];
const ssl = true;

module.exports = {
  HOST: host,
  USER: user,
  PASSWORD: password,
  DB: db,
  dialect: dialect,
  ssl: ssl,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};