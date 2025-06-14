const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3001

app.use(cors())
app.use(express.static('public'))
const rappers = {
	'21 savage':{
		'age': 29,
		'birthname': 'Shéyaa Bin Abraham-Joseph',
		'birthLocation': 'London, England'
	},
	'chance the rapper':{
		'age': 29,
		'birthname': 'Chancelor Bennett',
		'birthLocation': 'Chicago, Illinois'
	},
	'dylan':{
		'age': 29,
		'birthname': 'Dylan',
		'birthLocation': 'Dylan'
	}

}
app.get('/', (request, response)=>{
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
	const rappersName = request.params.rapperName.toLowerCase()
	if(rappers[rappersName]){
		response.json(rappers[rappersName])
	}else{
		response.json(rappers['dylan'])
	}
	//response.json(rappers)
})

app.listen(process.env.PORT || 3001, ()=>{
	console.log(`The server is running on port ${process.env.PORT || 3001}! You better go catch it!`)
})