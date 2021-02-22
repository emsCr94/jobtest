document.addEventListener("DOMContentLoaded", function(){
    // ------------ Definitions --------------// 

    let dataURL = new URL('https://ltv-data-api.herokuapp.com/api/v1/records.json'); //API url to retrieve data
    
    // ------------ Event Listeners --------------// 
  

        const btnEmailSearch = document.getElementById('btn-emailsearch');
        const loader = document.getElementById('emailsearch-loader');
        const inputEmailSearch = document.getElementById('input-emailsearch');
        btnEmailSearch.addEventListener("click", function(){searchEmail(inputEmailSearch.value)}, false);
        

    // ------------ Functions --------------//    

    /*
        ++ Function show loader -> Logic for showing loader after clicking GO button ++
    */
   let showLoader = () => {
        // Shows loader
        loader.style.visibility = "visible";
    }

    /*
        ++ Function to show search email result -> sdsad ++
    */
   let showResult = () => {
       
        //Time out function to simulate page loading -> to show loader on screen
        setTimeout(function () {
            window.location.href = 'result.html'; // page redirection
        }, 2000);
    
    }

    /*
        ++ Function search email -> Logic for searching emails on API ++
    */
   let validateEmail = (inputword) => {
        //Variables to get elemtns from DOM -> to render result data
        let inputEmailSearch = document.getElementById('input-emailsearch');
        let spanEmailSearchError = document.getElementById('span-emailsearcherror');
        let emailValidationExpression = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //email validation reg Expression

        //Validates the email submitted
        if(inputword.match(emailValidationExpression)){
            return true;
        }
        else
        {
            //In case email does not match, shows an error un screen input
            inputEmailSearch.classList.add('email-error');
            spanEmailSearchError.classList.add('email-error');
            return false;
        }
    }
    

    /*
        ++ Function search email -> Logic for searching emails on API ++
    */
    let searchEmail = (inputword) => {
        
        if(validateEmail(inputword)){
            //Call to show loader on screen
            showLoader();

            // Set URL parameters
            dataURL.searchParams.append("email",inputword);

            //Fetch data from API
            fetch(dataURL).then(response => response.json()).then(data => storeResult(data));

            //Call to load page and show results
            showResult();
        }
        
      }

    /*
        ++ Function search email -> Logic for searching emails on API ++
    */
    let storeResult = (data) => {

        //Variable to store data fro API
        const person = data;
        
        //Stores data on localStorage memory
        window.localStorage.setItem('person', JSON.stringify(person));

    }

});