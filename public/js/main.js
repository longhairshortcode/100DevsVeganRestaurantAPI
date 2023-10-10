document.querySelector('#submitButton').addEventListener('click', fetchData)



async function fetchData(){
    console.log('fetchData function is being called.');
   try {
    // get restaurant name entered by user
    const restaurantName = document.querySelector('#restaurantName').value;
        //Get the elements where you want to display the data
        const cityElement = document.querySelector('.city');
        const parkingElement = document.querySelector('.parking');
    //Check if input is empty, and if so, clear the city and parking 3 elements and return
    if (!restaurantName){
    cityElement.innerText = '';
    parkingElement.innerText = '';
    return;

    }
    //Construct URL based on user input:
    const URL = `http://localhost:8000/api/${restaurantName}`;
    const response = await fetch(URL);
    const data = await response.json();
    

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




// check this out from chatGPT later and compare:
// document.querySelector('#submitButton').addEventListener('click', fetchData);

// async function fetchData() {
//     console.log('fetchData function is being called.');

//     try {
//         // Get restaurant name entered by user
//         const restaurantName = document.querySelector('#restaurantName').value;
//         // Get the elements where you want to display the data
//         const cityElement = document.querySelector('.city');
//         const parkingElement = document.querySelector('.parking');

//         // Check if input is empty, and if so, clear the city and parking elements and return
//         if (!restaurantName) {
//             cityElement.innerText = '';
//             parkingElement.innerText = '';
//             return; // Exit the function
//         }

//         // Construct URL based on user input
//         const URL = `http://localhost:8000/api/${restaurantName}`;
//         const response = await fetch(URL);

//         // Check if the response status code is not OK (e.g., 404)
//         if (!response.ok) {
//             console.error('Error fetching data:', response.status);
//             return; // Exit the function
//         }

//         const data = await response.json();

//         if (data.restaurant && data.city && data.parking) {
//             // Display the city and parking info
//             cityElement.innerText = `City: ${data.city}`;
//             parkingElement.innerText = `Parking: ${data.parking}`;
//         } else {
//             // If data is not found, clear the previous data
//             cityElement.innerText = '';
//             parkingElement.innerText = '';
//         }
//     } catch (error) {
//         console.error('Error fetching data', error);
//     }
// }