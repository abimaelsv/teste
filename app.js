const express = require('express');

const app = express();

let porta = process.env.PORT || 8080;

app.listen(porta, () => {
	console.log("rodando...");
});