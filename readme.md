# QR-Scanner-and-generator

## Description

Create and read Qr code.

### Installing

- You cane download my project.

```
git clone https://github.com/aml-fakhry/QR-Scanner-and-generator.git
```

- project requires having node installed https://nodejs.org/en/download/

## Project build depended on

- The language used and application logic

1. [TypeScript](https://www.typescriptlang.org/docs/)
2. [Node.JS](https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express](https://expressjs.com/)

- For Fixing and Formatting Code

1. [ESLint](https://eslint.org/docs/user-guide/getting-started)
2. [Prettier](https://prettier.io/docs/en/index.html)

### Executing program (scripts)

- Install all dependencies

```
yarn
```

- Run the program in development environment.

```
yarn dev
```

- Run compiled code (build).

```
yarn start:build
```

- ports the backend and database are running on

```
http://localhost:3001
```

### Functionality and Endpoints.

1- Create QR code by id..

```javascript
/**
 * Create QR code by id.
 */
app.get('/qr/:id', async (req, res) => {
  const id = req.params.id;
  res.render('QR', {
    url: `http://localhost:3001/data/${id}`,
  });
});
```

2- Read QR code by id.

```javascript
/**
 * Read QR code by id.
 * send a url and can run in browser to see data
 */
app.get('/data/:id', async (req, res) => {
  const id = req.params.id;
  const result = (await axios.get) < AppHttpResponse > `https://jsonplaceholder.typicode.com/todos/${id}`;
  res.render('profile', {
    data: result.data,
  });
});
```

### Views

1- Generate QR.

```javascript
<!doctype html>
	<head>
		<title>JavaScript QR Code Generator</title>
	</head>
	<body>
		<h3>QR Code Generator</h3>
        <canvas></canvas>
       <script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>
		<script>
			console.log('<%-url%>');
			var qr = new QRious({
                    element: document.querySelector('canvas'),
                    size: 200,
                    value:'<%-url%>'
                });
			console.log(qr.toDataURL());
		</script>

	</body>
</html>

```

2- Read Qr.

```javascript

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>

  <body>
    <div>'<%-data.userId%>'</div>
    <div>'<%-data.id%>'</div>
    <div>'<%-data.completed%>'</div>
  </body>
</html>

```

## Endpoints

> Create QR code by id.

```

http://localhost:3001/qr/1

```

> Read QR code by id.

```

http://localhost:3001/data/1

```

## License

This project is licensed under the Aml Fakhri License - see the LICENSE.md file for details

## Project structure.

```

.
📦src
 ┣ 📂views
 ┃ ┣ 📜generate_qr.ejs
 ┃ ┗ 📜read_qr.ejs
 ┗ 📜app.ts
```

## Authors

Contributors names and contact info

ex. Aml fakhri @aml-fakhry
ex. [@aml_fakhri](amlfakhry13@gmail.com)

```

```
