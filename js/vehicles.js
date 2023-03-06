let vehiclesArray = [
    {
        id: 1,
        model: "CITROEN",
        brand: "C3",
        category: "B",
        registration: "BG12345EV",
        registrationDate: "18.07.2023",
        instructors: ["Dragostav Petronijevic","Dragostav Petronijevic","Dragostav Petronijevic","Milivoje Hadzihafizbegovic",
                    ],
        technicalReview: ["17. 21. 2023.", "17. 33. 2023."]
    },
    {
        id: 2,
        model: "SUZUKI",
        brand: "GSX",
        category: "A",
        registration: "SO89898GG",
        registrationDate: "08.02.2023",
        instructors: ["Miroslav Petronijevic","Rada Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 3,
        model: "MERCEDES",
        brand: "ACTROS",
        category: "C",
        registration: "BG15555WV",
        registrationDate: "18.04.2023",
        instructors: ["Olgica Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 4,
        model: "AUDI",
        brand: "A4",
        category: "B",
        registration: "KG33322AV",
        registrationDate: "18.02.2023",
        instructors: ["Miroslav Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 5,
        model: "IKARBUS",
        brand: "103",
        category: "D",
        registration: "BG12345FF",
        registrationDate: "18.02.2023",
        instructors: ["Laza Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 6,
        model: "IKARBUS",
        brand: "103",
        category: "D",
        registration: "BG12345FF",
        registrationDate: "18.02.2023",
        instructors: ["Laza Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "17. 19. 2023."]
    }
];

function readVehiclesFromDB(){
    for(let i=0; i<vehiclesArray.length; i++){
        showVehicle(vehiclesArray[i]);
    }
}
readVehiclesFromDB();

function showVehicle(vehicle){
    const vehicleDrivingSchoolTemplate = document.getElementById("vehicle-driving-school-template");
    const vehiclepPototype = vehicleDrivingSchoolTemplate.content.getElementById('vehicle-driving-school');
    const vehiclesDrivingSchoolConteiner = document.getElementById('vehicles-driving-school-conteiner');
    const vehicleDrivingSchoolInstructorsUl = document.getElementsByClassName('vehicle-driving-school-instructors-ul');
    
    const clone = vehiclepPototype.cloneNode(true);
    let a = vehicle.registration[0] + vehicle.registration[1] + " " + "a";
    console.log(a);
    clone.getElementsByClassName('vehicle-driving-school-registration-h3')[0].innerText = vehicle.registration;
    clone.getElementsByClassName('vehicle-driving-school-registration-h3-date')[0].innerText = vehicle.registrationDate;
    clone.getElementsByClassName('vehicle-driving-school-category')[0].innerText = vehicle.category;
    clone.getElementsByClassName('model')[0].innerText = vehicle.model;
    clone.getElementsByClassName('brand')[0].innerText = vehicle.brand;
    for(let i=0; i<vehicle.instructors.length; i++){
        let li=document.createElement('li');
        clone.getElementsByClassName('vehicle-driving-school-instructors-ul')[0].appendChild(li);
        li.innerHTML=li.innerHTML + vehicle.instructors[i];
    }
    for(let i=0; i<vehicle.technicalReview.length; i++){
        clone.getElementsByClassName('vehicle-driving-school-technical-review-h3')[i].innerText = vehicle.technicalReview[i];
    }
    switch (vehicle.category){
        case 'a': case 'A':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/motor-ilustration.png";
            break;
        case 'b': case 'B':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/car-ilustration.png";
            break;
        case 'c': case 'C':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/truck-ilustration.png";
            break;
        case 'd': case 'D':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/bus-ilustration.png";
            break;
    }

    vehiclesDrivingSchoolConteiner.appendChild(clone);
}


const vehiclesSearchByRegistrationInput = document.getElementById('vehicles-search-by-registration-input');
const vehicleDrivingSchool = document.getElementsByClassName('vehicle-driving-school');

vehiclesSearchByRegistrationInput.addEventListener('keyup', (e)=>{
    let searchRegistrationContent = vehiclesSearchByRegistrationInput.value.toUpperCase();
    
    for(let i=0; i<vehicleDrivingSchool.length; i++){
        let vehicleDrivingSchoolRegistrationH3 = vehicleDrivingSchool[i].getElementsByClassName('vehicle-driving-school-registration-h3')[0];
        if(vehicleDrivingSchoolRegistrationH3){
            let vehicleDrivingSchoolRegistrationH3Text = vehicleDrivingSchoolRegistrationH3.innerText;
            if(vehicleDrivingSchoolRegistrationH3Text.toUpperCase().indexOf(searchRegistrationContent) > -1){
                vehicleDrivingSchool[i].style.display = "";
            }else{
                vehicleDrivingSchool[i].style.display = "none";
            }
        }
        
    }
})

const vehiclesSearchByCategorySelect = document.getElementById('vehicles-search-by-category-select');

function sortListOfCategories(){
    let categoryArray=[];
    let j=0;

    for(let i=0; i<vehicleDrivingSchool.length; i++){
        let auxCategory;
        let x=0;
        if(i === 0){
            categoryArray[j++] = vehicleDrivingSchool[i].getElementsByClassName("vehicle-driving-school-category")[0].innerText.toUpperCase();
        }else{
            auxCategory = vehicleDrivingSchool[i].getElementsByClassName("vehicle-driving-school-category")[0].innerText.toUpperCase();
            for(let j=0; j<categoryArray.length; j++){
                if(auxCategory == categoryArray[j]){
                    x=1;
                }
            }
            if(x==0){
                categoryArray[j++] = auxCategory;
            }else{
            }
        }
    }
    categoryArray.sort();
    completeSearchByCategoru(categoryArray);
}
sortListOfCategories();

function completeSearchByCategoru(categoryArray){
    for(let i=0; i<categoryArray.length; i++){
        let category;
        category = categoryArray[i];
        var option = document.createElement("option");
        option.text = category;
        vehiclesSearchByCategorySelect.add(option);
    }
}

vehiclesSearchByCategorySelect.addEventListener("change", (e)=>{
    let category = vehiclesSearchByCategorySelect.value;
    if(category == 0){
        for(let j=0; j<vehicleDrivingSchool.length; j++){
            vehicleDrivingSchool[j].style.display = "";
        }
        return;
    }
    
    for(let i=0; i<vehicleDrivingSchool.length; i++){
        let vehicleDrivingSchoolCategory = vehicleDrivingSchool[i].getElementsByClassName('vehicle-driving-school-category')[0];
        
        if(vehicleDrivingSchoolCategory){
            let vehicleDrivingSchoolCategoryText = vehicleDrivingSchoolCategory.innerText;
           
            if(vehicleDrivingSchoolCategoryText.toUpperCase().indexOf(category) > -1){
                vehicleDrivingSchool[i].style.display = "";
            }else{
                vehicleDrivingSchool[i].style.display = "none";
            }
        }
    }
})


