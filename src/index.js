
let theCount, theTypelabel

const afrikaGistUrl = 'https://gist.githubusercontent.com/joanpadolina/0a713ed11600c370d2cf269f123256ac/raw/ecdf60f50d285b54d38ec9653932a35bedcddfd6/Afrika'
const myRequest = new Request(afrikaGistUrl)

const fetchMyData = () => {
    fetch(myRequest)
    .then(response => response.json())
    .then(allResultsLogged)
    .then(getTypeLabelAndChoCount)
    .catch(error => console.error(error))
}
fetchMyData()

// testing array 
let arrayTest = ["dfa", "kdfoa", "dfjakjdfa"]

function upperCase(data){
    return data.toUpperCase()
}
console.log(arrayTest = arrayTest.map(upperCase))

function allResultsLogged(data){
    console.log(data.afrikaResults)
}
function getTypeLabelAndChoCount(data){
    console.log(data.afrikaResults.map(item =>  item.choCount))
    
}

// .then(data => console.log(data.afrikaResults[5].choCount))