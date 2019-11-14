// console.log("hoii")

// const afrikaGistUrl = 'https://gist.githubusercontent.com/joanpadolina/0a713ed11600c370d2cf269f123256ac/raw/ecdf60f50d285b54d38ec9653932a35bedcddfd6/Afrika'
// const myRequest = new Request(afrikaGistUrl)

// const fetchMyData = () => {
//     fetch(myRequest)
//     .then(response => response.json())
//     .then(getTypeLabelAndChoCount)

//     .catch(error => console.error(error))
// }
// fetchMyData()

// // testing array 
// let arrayTest = ["dfa", "kdfoa", "dfjakjdfa"]
// let arrayAddNumbers = [1,2,3,4,5,6,7]
// const reducer = (acc, curr) => acc + curr 


// function upperCase(data){
//     return data.toUpperCase()
// }
// console.log(arrayTest = arrayTest.map(upperCase))

// function allResultsLogged(data){
//     console.log(data.afrikaResults)
// }
// function getTypeLabelAndChoCount(data){
//     console.log(data.afrikaResults.map( function item(item){
//        let choItem = item.choCount
//        return choItem
//     }))
// }


// // fetch api data and change this

const el = document.querySelector('p')
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
//Note that the query is wrapped in es6 template strings to allow for easy copy pasting
const query = `
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?typeLabel ?placeName (COUNT(?cho) AS ?choCount) WHERE {
  # plaatsen in Afrika
  <https://hdl.handle.net/20.500.11840/termmaster3> skos:narrower* ?place .
  ?place skos:prefLabel ?placeName .

  # subtypes onder beedlmateriaal
  <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
  ?type skos:prefLabel ?typeLabel .

  ?cho edm:object ?type .
  ?cho dct:spatial ?place .

} GROUP BY ?typeLabel ?placeName
ORDER BY DESC(?choCount)
`
runQuery(url, query)

function runQuery(url, query){
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)
  fetch(url)
    .then(res => el.innerText = "Status of API: " + res.status)
  // Call the url with the query attached, output data
  fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
  .then(res => res.json())
  .then(json => {
    console.log(json.results.bindings);
//   console.table(json.results);
  el.textContent = JSON.stringify(json.results)
  })
  return data = results
}

console.log(data)