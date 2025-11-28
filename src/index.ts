import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use((req, res, next) => {
  console.log('Request received:', req.url);
  next();
});

app.get('/', (req: Request, res: Response) => {
  console.log('Home route accessed');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
      <style>
        body {
          background-color: #121212;
          color: #ffffff;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Dark Theme Home Page</h1>
        <p>This is a simple home page rendered with Express in dark theme.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`);
});
