document.addEventListener("DOMContentLoaded", function(){
    // ------------ Definitions --------------//  
    
    // ------------ Event Listeners --------------//  


    // ------------ Functions --------------//    

    /*
        ++ Function createResultInfo -> Logic for creating result card form (go by the way of making pure html nodes instead of using interpolation or strings, because of small form)++
    */
    let createResultInfo = (person) => {

        /* Main Nodes */
        let newresultCardContainer = document.createElement('div');   
        newresultCardContainer.classList.add('container-fluid','py-3');                    


        let newresultCardContainerColumn = document.createElement('div');   
        newresultCardContainerColumn.classList.add('mx-auto','col-sm-6','col-lg-12','col-md-12');                    
        newresultCardContainer.appendChild(newresultCardContainerColumn);  

        let newresultCard = document.createElement('div');
        newresultCard.classList.add('card','person-info');
        newresultCardContainerColumn.appendChild(newresultCard);  
    
        let newresultCardBody = document.createElement('div');
        newresultCardBody.classList.add('card-body');
        newresultCard.appendChild(newresultCardBody);  


        let newresultCardForm = document.createElement('div');
        newresultCardForm.classList.add('form','row','text-left','mt-3');
        newresultCardBody.appendChild(newresultCardForm);  

        let newresultCardForm_Col1 = document.createElement('div');
        newresultCardForm_Col1.classList.add('col-lg-2','col-md-2','text-center','d-none','d-sm-block');
        newresultCardForm.appendChild(newresultCardForm_Col1); 
        
        let newresultCardForm_Icon = document.createElement('i');
        newresultCardForm_Icon.classList.add('fas','fa-user');
        newresultCardForm_Icon.id = 'icon-user-personinfo';
        newresultCardForm_Col1.appendChild(newresultCardForm_Icon);

        let newresultCardForm_Col2 = document.createElement('div');
        newresultCardForm_Col2.classList.add('col-lg-10','col-md-10');
        newresultCardForm.appendChild(newresultCardForm_Col2);  

        let newresultCardForm_row1 = document.createElement('div');
        newresultCardForm_row1.classList.add('form-group', 'row','justify-content-left','mt-3');
        newresultCardForm_Col2.appendChild(newresultCardForm_row1);

        let newresultCardForm_NameColumn = document.createElement('div');
        newresultCardForm_NameColumn.classList.add('col-lg-10','col-md-10');
        newresultCardForm_row1.appendChild(newresultCardForm_NameColumn);  

        let newresultCardForm_NameTitle = document.createElement('h3');
        const titlename = document.createTextNode(person.first_name + " " + person.last_name);
        newresultCardForm_NameTitle.appendChild(titlename);
        newresultCardForm_NameColumn.appendChild(newresultCardForm_NameTitle);

        let newresultCardForm_NameDescription = document.createElement('p');
        const description = document.createTextNode(person.description);
        newresultCardForm_NameDescription.appendChild(description);
        newresultCardForm_NameColumn.appendChild(newresultCardForm_NameDescription);

        
        let newresultCardForm_row2 = document.createElement('div');
        newresultCardForm_row2.classList.add('form-group','row','justify-content-left');
        newresultCardForm_Col2.appendChild(newresultCardForm_row2);  

        /* ./Main Nodes */

        /*Address column */
        let newresultCardForm_AddressColumn = document.createElement('div');
        newresultCardForm_AddressColumn.classList.add('col-lg-6','col-md-6');
        newresultCardForm_row2.appendChild(newresultCardForm_AddressColumn);  

        let newresultCardForm_AddressTitle = document.createElement('h2');
        const titleaddress = document.createTextNode('Address');
        newresultCardForm_AddressTitle.appendChild(titleaddress);
        newresultCardForm_AddressColumn.appendChild(newresultCardForm_AddressTitle);

        let newresultCardForm_Adress = document.createElement('p');
        const address = document.createTextNode(person.address);
        newresultCardForm_Adress.appendChild(address);
        newresultCardForm_AddressColumn.appendChild(newresultCardForm_Adress);
        /* ./Address column */

        /*Phone numbers column */
        let newresultCardForm_PhoneNumbersColumn = document.createElement('div');
        newresultCardForm_PhoneNumbersColumn.classList.add('col-lg-6','col-md-6');
        newresultCardForm_row2.appendChild(newresultCardForm_PhoneNumbersColumn);  
    
        let newresultCardForm_PhoneNumbersTitle = document.createElement('h2');
        const titlephonenumbers = document.createTextNode('Phone Numbers');
        newresultCardForm_PhoneNumbersTitle.appendChild(titlephonenumbers);
        newresultCardForm_PhoneNumbersColumn.appendChild(newresultCardForm_PhoneNumbersTitle);
    
        let newresultCardForm_PhoneNumbers_List = document.createElement('ul');
        newresultCardForm_PhoneNumbers_List.classList.add( 'person-info-phonenumbers');
        for(var phone in person.phone_numbers){
            let phone_number = document.createElement('li');
            const phonenumbertext = document.createTextNode(person.phone_numbers[phone]);
            phone_number.appendChild(phonenumbertext);
            newresultCardForm_PhoneNumbers_List.appendChild(phone_number);  
        }
        newresultCardForm_PhoneNumbersColumn.appendChild(newresultCardForm_PhoneNumbers_List);
        /* ./Phone numbers column */

        let newresultCardForm_row3 = document.createElement('div');
        newresultCardForm_row3.classList.add('form-group','row','justify-content-left');
        newresultCardForm_Col2.appendChild(newresultCardForm_row3);  

        /*Email column */
        let newresultCardForm_EmailColumn = document.createElement('div');
        newresultCardForm_EmailColumn.classList.add('col-lg-6','col-md-6');
        newresultCardForm_row3.appendChild(newresultCardForm_EmailColumn);  
    
        let newresultCardForm_EmailTitle = document.createElement('h2');
        const titlemail = document.createTextNode('Email');
        newresultCardForm_EmailTitle.appendChild(titlemail);
        newresultCardForm_EmailColumn.appendChild(newresultCardForm_EmailTitle);
        
        let newresultCardForm_Email = document.createElement('p');
        const email = document.createTextNode(person.email);
        newresultCardForm_Email.appendChild(email);
        newresultCardForm_EmailColumn.appendChild(newresultCardForm_Email);
        
        newresultCardForm_EmailColumn.appendChild(newresultCardForm_Email);
        /* ./Email column*/    

        /* Relatives column */
        let newresultCardForm_RelativesColumn = document.createElement('div');
        newresultCardForm_RelativesColumn.classList.add('col-lg-6','col-md-6');
        newresultCardForm_row3.appendChild(newresultCardForm_RelativesColumn);  
    
        let newresultCardForm_RelativesTitle = document.createElement('h2');
        const titlerelatives = document.createTextNode('Relatives');
        newresultCardForm_RelativesTitle.appendChild(titlerelatives);
        newresultCardForm_RelativesColumn.appendChild(newresultCardForm_RelativesTitle);
    
        let newresultCardForm_Relatives_List = document.createElement('ul');
        for(var relative in person.relatives){
            let relative_name = document.createElement('li');
            const relativetext = document.createTextNode(person.relatives[relative]);
            relative_name.appendChild(relativetext);
            newresultCardForm_Relatives_List.appendChild(relative_name);  
        }
        newresultCardForm_RelativesColumn.appendChild(newresultCardForm_Relatives_List);
        /* ./Relatives column*/
       
        newresultCardContainer.appendChild(newresultCardContainerColumn);

        return newresultCardContainer; 

   
    }

    /*
        ++ Function createResultCount -> Logic for creating result count html ++
    */
    let createResultCount = (count) => {
    
        let newresultCount_Container = document.createElement('div');
        newresultCount_Container.classList.add('p-2');
    

        let newresultCount_Title = document.createElement('h2');
        newresultCount_Title.classList.add('result-counter');
        const countittletext = document.createTextNode('' + count + ' ' + (count == 1 ? 'Result' : 'Results'));
        newresultCount_Title.appendChild(countittletext);

        newresultCount_Container.appendChild(newresultCount_Title);

        let newresultCount_Help = document.createElement('p');

        let counthelptext = document.createTextNode(count == 1 ? 'Look at the result below to see the details of the person you’re searched for.' : 'Try starting a new search below' );
        newresultCount_Help.appendChild(counthelptext);
        newresultCount_Help.classList.add('result-help');

        
        newresultCount_Container.appendChild(newresultCount_Help);


        return newresultCount_Container; 

   
    }

    /*
        ++ Function loadResultData -> Logic for retrieving data from local storage ++
    */
    let loadResultData = () => {

        person = JSON.parse(window.localStorage.getItem('person'));
        return person;

    }

    /*
        ++ Function  showResult -> Logic showing result from api on html ++
    */
    let showResult = () => {

        let resultContainer = document.getElementsByClassName('result-person_container')[0];
        let resultCountContainer = document.getElementsByClassName('result-count_container')[0];
        let person = loadResultData();

        if(person.length == 0){
            let resultCount = createResultCount(0);
            resultCountContainer.appendChild(resultCount);
        }
        else{
            let resultCount = createResultCount(1);
            resultCountContainer.appendChild(resultCount);
            let resultCard = createResultInfo(person);
            resultContainer.appendChild(resultCard);
        }
    

    }

    showResult();

    
});