//Обект с всички данни за всички продукти
let products = {
    'Puppy': {
        'Chihuahua': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 8, 9],
            'secondCriteria': [1, 2, 3.5],
            'grams': [29, 49, 71, 32, 55, 80, 33, 56, 84, 33, 56, 84, 29, 48, 77, 24, 40, 69, 24, 40, 61, 'Chihuahua Adult', 'Chihuahua Adult', 'Chihuahua Adult'],
            'info': 'Пълноценна храна за кучета - Специално за кученца чихуахуа - До 8 месеца.'
        },
        'Bulldog': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 9, 11, 12, 13],
            'secondCriteria': [18, 24, 30],
            'grams': [231, 257, 272, 276, 315, 341, 297, 341, 371, 304, 361, 410, 304, 378, 446, 283, 375, 447, 240, 305, 387, 216, 270, 320, 215, 215, 318, 'Bulldog Adult', 'Bulldog Adult', 'Bulldog Adult'],
            'info': 'Пълноценна храна за кучета - Специално за кученца булдог - До 12 -месечна възраст.'
        },
        'Dachshund': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            'secondCriteria': [3, 6, 10],
            'grams': [67, 108, 153, 75, 125, 180, 79, 131, 191, 79, 132, 195, 71, 131, 194, 64, 118, 175, 57, 106, 157, 56, 95, 140, 56, 95, 139, 'Dachshund Adult', 'Dachshund Adult', 'Dachshund Adult'],
            'info': 'Пълноценна храна за кучета - Специално за кученца порода дакел - До 10-месечна възраст.'
        },
        'French Bulldog': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 9, 11, 12],
            'secondCriteria': [8, 10, 14],
            'grams': [122, 144, 182, 143, 169, 215, 152, 180, 230, 154, 183, 235, 153, 182, 234, 138, 165, 217, 110, 131, 185, 'French Bulldog Adult', 129, 166, 'French Bulldog Adult', 'French Bulldog Adult', 'French Bulldog Adult'],
            'info': 'Пълноценна храна за кучета - Специално за кученца френски булдог - До 12-месечна възраст.'
        },
        'X-Small': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            'secondCriteria': [1, 3, 4],
            'grams': [29, 64, 79, 32, 72, 89, 33, 75, 93, 33, 75, 93, 28, 68, 84, 24, 64, 76, 24, 54, 67, 23, 55, 66, 23, 53, 66, 'X-Small Adult', 'X-Small Adult', 'X-Small Adult'],
            'info': 'Пълноценна храна за кучета - специално за подрастващи кучета от миниатюрни породи (тегло в зряла възраст до 4кг.) - до 10 месеца.'
        },
        'Mini': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            'secondCriteria': [2, 6, 10],
            'grams': [49, 103, 146, 54, 119, 172, 55, 125, 182, 55, 126, 185, 48, 125, 184, 40, 113, 167, 39, 101, 149, 39, 90, 133, 39, 89, 132, 'Mini Adult', 'Mini Adult', 131],
            'info': 'Пълноценна храна за кучета - специално за подрастващи кучета от дребни породи (тегло в зряла възраст от 1 до 10кг.) - до 10 месеца.'
        },
        'Medium': {
            'firstCriteria': [2, 3, 4, 5, 6, 8, 10, 12,13],
            'secondCriteria': [11,14,18,22,29],
            'grams': [155,184,217,237,244,182,216,259,288,300,194,232,279,311,325,197,236,285,324,247,197,236,285,332,366,159,204,247,298,330,141,164,205,239,264, 'Medium Adult', 'Medium Adult',202,235,261, 'Medium Adult','Medium Adult','Medium Adult','Medium Adult',259],
            'info': 'Пълноценна храна за кучета - специално за подрастващи кучета от средни породи (тегло в зряла възраст от 11 до 25кг.) - до 12 месеца.'
        }


    },
    'Adult': {
        'Chihuahua': {
            'firstCriteria': [1, 1.5, 2, 2.5, 3, 3.5],
            'secondCriteria': ['Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [24, 28, 33, 38, 41, 47, 48, 56, 55, 64, 62, 72],
            'info': 'Пълноценна храна за кучета - Специално за чихуахуа в зряла или напреднала възраст - Над 8 месеца.'
        },
        'Bulldog': {
            'firstCriteria': [18, 20, 22, 24, 26, 28, 30],
            'secondCriteria': ['На закрито - ниско ниво на активност', 'Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [223, 258, 294, 242, 280, 318, 259, 300, 341, 277, 321, 364, 294, 340, 387, 311, 360, 409, 327, 379, 431],
            'info': 'Пълноценна храна за кучета - Специално за булдоци в зряла възраст - Над 12 месеца.'
        },
        'Dachshund': {
            'firstCriteria': [2, 5, 8, 10],
            'secondCriteria': ['На закрито - ниско ниво на активност', 'Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [43, 50, 56, 85, 99, 112, 121, 140, 159, 143, 166, 188],
            'info': 'Пълноценна храна за кучета - Специално за дакели в зряла възраст - Над 10 месеца.'
        },
        'French Bulldog': {
            'firstCriteria': [8, 9, 10, 11, 12, 14],
            'secondCriteria': ['На закрито - ниско ниво на активност', 'Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [112, 130, 147, 122, 142, 161, 132, 153, 174, 142, 165, 187, 152, 176, 200, 170, 197, 224],
            'info': 'Пълноценна храна за кучета - Специално за френски булдоци в зряла възраст - Над 12 -месечна възраст.'
        },
        'X-Small': {
            'firstCriteria': [1, 1.5, 2, 2.5, 3, 3.5, 4],
            'secondCriteria': ['На закрито - ниско ниво на активност', 'Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [24, 27, 31, 32, 37, 42, 40, 46, 52, 47, 55, 62, 54, 63, 71, 61, 70, 80, 67, 78, 88],
            'info': 'Пълноценна храна За кучета от миниатюрни породи с тегло в зряла възраст до 4 кг Над 10-месечна възраст.'
        },
        'Mini': {
            'firstCriteria': [2, 3, 4, 5, 6, 7, 8, 9, 10],
            'secondCriteria': ['На закрито - ниско ниво на активност', 'Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [40, 47, 53, 55, 63, 72, 68, 79, 89, 80, 93, 105, 92, 106, 121, 103, 119, 136, 114, 132, 150, 125, 144, 164, 135, 156, 177],
            'info': 'Пълноценна храна за кучета в зряла възраст от дребни породи (до 10 кг.) - над 10 месеца.'
        },
        'Medium': {
            'firstCriteria': [11,12,14,16,18,20,22,24,25],
            'secondCriteria': ['На закрито - ниско ниво на активност', 'Нормално ниво на активност', 'Високо ниво на активност'],
            'grams': [149,173,196,159,185,210,179,207,235,198,229,260,216,250,284,234,271,308,251,291,330,268,310,353,276,320,364],
            'info': 'Пълноценна храна за кучета в зряла възраст от средни породи (от 11 до 25кг.) - oт 12 месеца до 7 години.'
        }
    },
}
let yearsArr = ['между 2 месеца и 1 година', 'над 1 година'];

//ФУНКИЯ, КОЯТО СЕ СТАРТИРА СЪС СТРАТИРАНЕТО
function start() {
    makeList(yearsArr, "selectYear");
    document.getElementById("foodSel-section").style.display = "none";
    document.getElementById("lastSel-section").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("dog2").style.display = "none";
    document.getElementById("textMessage").style.display = "none";
    document.getElementById("startButton").style.display = "none";
}

//Функция която се задейства като изберем бутона за избор на диапазон на възраст
function selectYearButton() {
    var selectedYear = document.getElementById("selectYear").value;
    if (selectedYear == 'моля, изберете') {
        alert('Моля изберете диапазона на възрастта на Вашето куче и натиснете ИЗБЕРИ!');
    } else {
        let yearType = '';
        let message = '';
        if (selectedYear == 'между 2 месеца и 1 година') {
            message = 'Избери храна от серията "Puppy" :';
            yearType = 'Puppy';
        } else if (selectedYear == 'над 1 година') {
            message = 'Избери храна от серията "Adult" :';
            yearType = 'Adult';
        }
        document.getElementById("selFoodMess").value = message;
        let foodsNames = [];
        let foodsEnt = Object.entries(products[yearType]);
        for (let [food, infoForFood] of foodsEnt) {
            let foodName = food + ' ' + yearType;
            foodsNames.push(foodName);
        }
        makeList(foodsNames, "selectFood");
        document.getElementById("yearSel-section").style.display = "none";
        document.getElementById("foodSel-section").style.display = "block";
        document.getElementById("startButton").style.display = "block";

    }
}

function selectFoodButton() {
    let selectedFood = document.getElementById("selectFood").value;
    if (selectedFood == 'моля, изберете') {
        alert('Моля изберете една от посочените марки храни и натиснете бутона ИЗБЕРИ!');
    } else {
        let selFoodArr = selectedFood.split(' ');
        let typeFood = selFoodArr.pop();
        let typeDog = selFoodArr.join(' ');
        if (typeFood == "Puppy") {
            document.getElementById("lastMessFirst").value = "Текуща възраст в месеци:";
            document.getElementById("lastMessSecond").value = "Очаквано тегло в зряла възраст в килограми:";
        } else if (typeFood == "Adult") {
            document.getElementById("lastMessFirst").value = "Текущо тегло в килограми:";
            document.getElementById("lastMessSecond").value = "Ниво на активност:";
        }

        makeList(products[typeFood][typeDog]['firstCriteria'], "selectFirst");
        makeList(products[typeFood][typeDog]['secondCriteria'], "selectSecond");
        document.getElementById("foodSel-section").style.display = "none";
        document.getElementById("lastSel-section").style.display = "block";
    }
}

function selectLast() {
    let firstChoice = document.getElementById("selectFirst").value;

    let secondChoice = document.getElementById("selectSecond").value;
    let selectedFood = document.getElementById("selectFood").value;
    let selFoodArr = selectedFood.split(' ');
    let typeFood = selFoodArr.pop();
    let typeDog = selFoodArr.join(' ');

    let yesAlert = false;
    let alertMessage = '';
    console.log(firstChoice)
    if (firstChoice == 'моля, изберете') {
        yesAlert = true;
        alertMessage += 'Моля, изберете ';
        if (typeFood == 'Puppy') {
            alertMessage += 'текущата възраст на Вашето куче в месеци!\n'
        } else if (typeFood == 'Adult') {
            alertMessage += 'текущото тегло на Вашето куче в килограми!\n'
        }
    }

    if (secondChoice == 'моля, изберете') {
        yesAlert = true;
        alertMessage += 'Моля, изберете ';
        if (typeFood == 'Puppy') {
            alertMessage += 'очаквано тегло в зряла възраст в килограми!'
        } else if (typeFood == 'Adult') {
            alertMessage += 'ниво на активност!'
        }
    }

    if (yesAlert == true) {
        alert(alertMessage);
    } else {
        firstChoice = Number(firstChoice);
        infoArr = doubleMatrix(products[typeFood][typeDog]['firstCriteria'], products[typeFood][typeDog]['secondCriteria'], products[typeFood][typeDog]['grams'])

        let gramsNeeded = 0;
        let indexOfFirstChoice = infoArr[0].indexOf(firstChoice);
        for (let i = 1; i <= products[typeFood][typeDog]['secondCriteria'].length; i++) {
            if (infoArr[i][0] == secondChoice) {
                gramsNeeded = infoArr[i][indexOfFirstChoice];
            }
        }

        console.log(gramsNeeded);
        let jpgtypeDog = typeDog.replace(' ', '');
        let path = 'images/'+jpgtypeDog + typeFood + '.jpg';
        console.log(path)
        document.getElementById("image").src = path;
        document.getElementById("description").value = products[typeFood][typeDog]['info'];
        document.getElementById("lastSel-section").style.display = "none";
        document.getElementById("result").style.display = "inline";


        let resultStr = '';
        if (gramsNeeded.toString().includes('Adult')) {
            document.getElementById("daylyDose").style.display = "none";
            resultStr = 'Вашето куче вече е порастнало достатъчно за да премине на Adult серията.\nИзберете \'над 1 година\' и потърсете ' + typeDog + ' Adult в списъка.';
            document.getElementById("resultAdult").value = resultStr;
            let newtypeDog = typeDog.replace(' ', '');
            let newPathImage = 'images/'+newtypeDog + 'Adult' + '.jpg';
            document.getElementById("imageAdult").src = newPathImage;
        } else {
            document.getElementById("dog2").style.display = "block";
            document.getElementById("textMessage").style.display = "block";
            document.getElementById("adultSeries").style.display = "none";
            if (typeFood == 'Puppy') {
                resultStr = `Вашето куче на ${firstChoice} месеца трябва да яде по ${gramsNeeded} грама гранули от ${selectedFood}, ако в зряла възраст очаквате да достигне ${secondChoice} килограма.`
            } else if (typeFood == 'Adult') {
                resultStr = `Ако Вашето куче е ${firstChoice} килограма и има ${secondChoice} трябва да яде по ${gramsNeeded} грама гранули от ${selectedFood}.`
            }
            document.getElementById("resultValue").value = resultStr;
        }
    }
}

//Функция, която да прави лист за падащо меню за избор - 
//Като вход приема (масив, и елемента от HTML, който искаме да прави лист )
//Изход - няма направо съзвава лист на посоченото поле
function makeList(array, element) {
    let dropdown = document.getElementById(element);
    for (let i = 0; i < array.length; ++i) {
        dropdown[dropdown.length] = new Option(array[i], array[i])
    }
}

//Функция за създаването на двумерна матрица от 3 други матрици
function doubleMatrix(arr1, arr2, arr3) {
    let info = [];
    for (let i = 0; i <= arr2.length; i++) {
        info[i] = [];
        for (let j = 0; j <= arr1.length; j++) {
            info[i][j] = 0;
        }
    }
    let kgIndex = 0;
    for (let i = 1; i <= arr2.length; i++) {
        info[i][0] = arr2[kgIndex];
        kgIndex++;
    }
    let monthsIndex = 0;
    for (let j = 1; j <= arr1.length; j++) {
        info[0][j] = arr1[monthsIndex];
        monthsIndex++;
    }
    let gramsIndex = 0;
    for (let j = 1; j <= arr1.length; j++) {
        for (let i = 1; i <= arr2.length; i++) {
            info[i][j] = arr3[gramsIndex];
            gramsIndex++;
        }
    }
    return info;
}


