import studieschuld-lijst from './js/studieschuld-list.js'
console.log("testing list to array")

let words = "greet campaign coffee care revise ridge pilot full prison wrestle account dictionary start giant fast monarch patrol bear motif detective trouser title act speaker pursuit penny appear ballet agreement welcome similar sensation strong fog limited implicit nursery neighborhood infinite refund double achievement ample socialist intensify nomination visit drag retiree mislead situation credit oil clarify conscience war sow suitcase fixture worth fuss remain moment frighten spider breathe install interactive allow deadly cabin restless service rise integrity artist short circuit perception listen arrangement patience creep landscape stain citizen microphone nose bullet view category reign horizon news social reliable passion stroll constitutional adult city";

let wordsArray = words.split(' ');
console.log(wordsArray);

// Data manipulatie data van leesstijl veranderen


let studentList = `
Wat vind je de belangrijkste eigenschap voor een ontwerper?
Creatief
Kan met feedback omgaan
Creatief en doorzettingsvermogen
Empathie
Oog voor detail
Ruim denkend, openstaand
Open staan voor ideeen
Leergierig zijn
kritisch zijn
Creativiteit 
Creativiteit
Moet kunnen denken aan de gebruiker
Oog voor detail
eigen stijl
Creativiteit
Leergierig
goed kunnen verplaatsen
Feedback-bestendig
Het begrijpen wat mensen willen en dat vertalen naar een ontwerp
Creatief denken
Authentiekiteit
Oog voor detail en be the user
Goed kunnen samenwerken met andere diciplines
Empathie
Creatief denken
Veelzijdigheid
Personal touch aan ontwerpen
Creatief
-
Gepassioneerd
Kunnen inleven in anderen
Een open blik hebben, je kwetsbaar op kunnen stellen, kritiek kunnen hebben en bereid zijn je eerste opvattingen te kunnen discarden
creativiteit
Creativiteit/out of the box
Communicatie
Originaliteit
Durven
creatief
Openstaan voor kritiek
Oog voor detail
Creativiteit 
Ethiek
Eerlijkheid
Growth mindset
Openminded
Creativiteit en open staande voor veranderingen
Doorzettings vermogen
Creativiteit
talent
Dynamiek
Empathie, het begrijpen van de gebruiker
Meedenkend vermogen
Inclusiviteit
Orginaliteit
Met feedback om kunnen gaan
Gevoel voor kleur en vorm
Creativiteit
goed oog voor details
Consistency
Inspelen op de doelgroep
nieuwsgierigheid 
Creativiteit
Creativiteit
Professioneel in combinatie naar handelen op gevoel
nieuwsgierig
eerlijk zijn
Ruimdenkend 
Creativiteit
Creatief
nieuwsgierig zijn
Creatief zijn
Zelf reflectie
Goed luisteren naar de opdrachtgever
Iets toevoegen met je werk
kritiek ontvangen en gebruiken
Netjes werken
Kritisch itereren
luisteren
Consistent zijn
Gevoel voor vorm`

studentList.toUpperCase()
console.log(studentList)

// nieuwe variabel stringInStudent waarbij de studentList gesplits wordt bij elke enter
let stringInStudent = studentList.split('\n') 

// van de stringInStudent wil ik met map de hele array pakken en een functie meegeven waardoor
// ik alle elementen hoofdletters mee geef
let uppercaseArray = stringInStudent.map((el) => {
    return el.toUpperCase();
})

console.log(uppercaseArray);

// console.log(stringInStudent)

// alles wordt door elkaar gehaald met reverse en join
function reverseArrayValues(array){
    return array.map((el) => {
        return el.split("").reverse().join(""); // een manier om het leesbaarder te maken door het te chainen.
    })
}

function convertArrayValuesToUppercase(array){
    return array.map((el) => {
        return el.toLowerCase();
    })
}

let newarray = convertArrayValuesToUppercase(stringInStudent);
console.log(convertArrayValuesToUppercase(newarray))


console.log(stringInStudent)


// opschoning nummer 2 | Studenten schuld
// stappen plan:
// 1. Data in een array plaatsen
// 2. De getallen van de studiepunten gelijk trekken door spatie 
// 3. Vervangen van een string naar een nummer
// 4. De gemiddelde halen van elke studieschuld die ingevuld is per student.
// 5. Terug geven van de nieuwe uitgerekende studieschuld.

let studieSchuldLijst = `
Geen studieschuld
1000-5000
Geen studieschuld
10000-15000
Geen studieschuld
Meer dan 25000
Geen studieschuld
Geen studieschuld
1000-5000
Geen studieschuld
Geen studieschuld
Geen studieschuld
1000-5000
Geen studieschuld
Geen studieschuld
Geen studieschuld
15000-20000
Geen studieschuld
1000-5000
20000-25000
Geen studieschuld
5000-10000
5000-10000, 15000-20000
Geen studieschuld
5000-10000
5000-10000
Geen studieschuld
Geen studieschuld
Geen studieschuld
15000-20000
10000-15000
Geen studieschuld
Geen studieschuld
Meer dan 25000
1000-5000
1000-5000
5000-10000
Geen studieschuld
5000-10000
20000-25000
10000-15000
15000-20000
Geen studieschuld
Geen studieschuld
Geen studieschuld
10000-15000
15000-20000
Meer dan 25000
Geen studieschuld
Geen studieschuld
1000-5000
Geen studieschuld
1000-5000
1000-5000
5000-10000
5000-10000
10000-15000
10000-15000
1000-5000
Meer dan 25000
5000-10000
5000-10000
15000-20000
10000-15000
20000-25000

20000-25000
20000-25000
Geen studieschuld
Meer dan 25000
15000-20000

1000-5000
15000-20000
10000-15000
5000-10000
15000-20000
Geen studieschuld
Meer dan 25000
Geen studieschuld
`.split('\n')

function changeStringToNumber(array) {
    // voor elk item een loop 
    array.forEach((item, count) => { 
        // zoekt naar de gegeven string en vervangt het met 0
        array[count] = item.replace('Geen studieschuld', 0) 
    })
    // geef de array terug
    return array 
}
// console log de functie met de array
console.log(changeStringToNumber(studieSchuldLijst))


// console.log(main(studieSchuldLijst))


// next function
// what do i want the function to do?
// + pak de waardes voor en na de "-"
// + voeg de eerste en de tweede getal bij elkaar op en pak het gemiddelde
// * wie heeft mij geholpen
// * 

function calculateStudieschuld(data) {

//if contains streepje
    return data.map((element) => {
        // console.log(element)
        if (element.includes('-')) {
            element = splitString(element).toString()
            console.log(element)
            
            return element
            
        }
        return element
    })
}

 //then split string into two strings and put in array
function splitString(data) {
    let splittedData = data.split('-')
    console.log(splittedData)
    return averageSum(splittedData[0], splittedData[1])
}

//convert strings to numbers
//sum both values in array
//divide by 2
// return average

function averageSum(a, b) {
    // stackoverflow average 
    return (a*1 + b*1) /2
}

console.log(main(studieSchuldLijst))

