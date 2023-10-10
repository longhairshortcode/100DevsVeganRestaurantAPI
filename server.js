const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static(__dirname + '/public')); 

app.use('/js', express.static(__dirname + '/public/js'));

const veganrestaurants = {
  'sage' : {
    'restaurant': 'sage',
  'city': 'pasadena',
  'parking': 'free-with-validation'
},

'kitchen mouse' : {
  'restaurant': 'Kitchen Mouse',
  'city': 'Highland Park',
  'parking': 'street and meter parking'
},

'erewhon' : {
  'restaurant': 'Erewhon',
  'city': 'Studio City',
  'parking': 'free for 90 mins.'
},

'unknown' : {
  'restaurant': 'unknown',
  'city': 'unknown',
  'parking': 'unknown'

}
}

app.get('/', (request, response) =>{
  response.sendFile(__dirname + '/index.html')  
}),

app.get('/api/:name', (request, response) =>{
  const restName = request.params.name.toLowerCase();
  if(veganrestaurants[restName]){
    response.json(veganrestaurants[restName])
  }else{
    response.json(veganrestaurants['unknown'])
  }
}),

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})