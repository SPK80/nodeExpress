const express = require('express')
const path = require('path')
console.log(express);
const app = express()

const PORT = process.env.PORT || 8080


app.use((req, res, next) => {
	next()
})

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
// console.log('view engine - ', app.get('view engine'))
// console.log('views - ', app.get('views'))
// app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Main page',
		active: 'main'
	})
})

app.get('/features', (req, res) => {
	res.render('features', {
		title: 'Features page',
		active: 'features'
	})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))