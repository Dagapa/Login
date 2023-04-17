const sql = require("mssql");
const express = require("express");

const app = express();

const config = {
  user: "Adminuser",
  password: "Pala9910*",
  server: "sr-sqlserverline03.database.windows.net",
  database: "lineasql",
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/users", (req, res) => {
  const pool = new sql.ConnectionPool(config);

  pool.connect((err) => {
    if (err) {
      console.error("Error de conexión:", err.message);
      return;
    }

    const request = pool.request();

    request.query("SELECT * FROM Users", (err, result) => {
      if (err) {
        console.error("Error de consulta:", err);
        return;
      }
      console.log(result.recordset);

      // Cierra la conexión después de obtener los resultados
      pool.close();

      // Envía los resultados como respuesta
      res.send(result.recordset);
    });
  });
});

app.get("/students", (req, res) => {
  const pool = new sql.ConnectionPool(config);

  pool.connect((err) => {
    if (err) {
      console.error("Error de conexión:", err.message);
      return;
    }

    const request = pool.request();

    request.query("SELECT * FROM Alumnos", (err, result) => {
      if (err) {
        console.error("Error de consulta:", err);
        return;
      }
      console.log(result.recordset);

      // Cierra la conexión después de obtener los resultados
      pool.close();

      // Envía los resultados como respuesta
      res.send(result.recordset);
    });
  });
});

app.listen(3001, () => {
  console.log("Servidor iniciado en el puerto 3001");
});
