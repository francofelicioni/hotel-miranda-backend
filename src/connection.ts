import * as dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

export const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

connection.connect();

export function dbQuery(query: string, params: object | null) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

