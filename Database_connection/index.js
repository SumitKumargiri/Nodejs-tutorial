const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const swaggerOptions = {
  definition: swaggerDocument,  // load your json file
  apis: ['./index.js'],         // scan routes from index.js
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database:'EnglishBuddy',
  password: 'Sumit@123',
  port: 5432,
})

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     description: Returns all employee records
 *     responses:
 *       200:
 *         description: List of employees
 */

app.get('/employees', async (req, res) => {
  const result = await pool.query('select * from public.employees');
  res.json(result.rows);
});

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single employee
 *       404:
 *         description: Employee not found
 */

app.get('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('select * from public.employees where id = $1', [id]);
  res.json(result.rows[0]);
});

pool.connect().then(()=>console.log("Connected to Database")).catch((err)=>console.error("Connection Failed", err));

app.listen(3000,()=>console.log('Server is running on port 3000'));