document.querySelector('#submitButton').addEventListener('click', fetchData)



async function fetchData(){
    console.log('fetchData function is being called.');
   try {
    // get restaurant name entered by user
    const restaurantName = document.querySelector('#restaurantName').value;
    //Construct URL based on user input:
    const URL = `http://localhost:8000/api/${restaurantName}`;
    const response = await fetch(URL);
    const data = await response.json();
    //Get the elements where you want to display the data
    const cityElement = document.querySelector('.city');
    const parkingElement = document.querySelector('.parking');

    if (data.restaurant && data.city && data.parking) {
        //Display the city and parking info
        cityElement.innerText = `City: ${data.city}`;
        parkingElement.innerText = `Parking: ${data.parking}`;
    }else{
        //if data is not found, clear the previous data
        cityElement.innerText = '';
        parkingElement.innerText = '';
    }

    // console.log(data);
   } catch (error){
        console.error('Error fetching data', error);    
   }
}