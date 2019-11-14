// // fetch api data from Afrika

const el = document.querySelector('p')
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
//Note that the query is wrapped in es6 template strings to allow for easy copy pasting

// termmaster benodigheiden 
// Afrika 3
// Eurazie 6025 
// Oceanie 6813
// Amerika 6782
// Azie 8401

let queryTermaster = 3

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
  <https://hdl.handle.net/20.500.11840/termmaster${queryTermaster}> skos:narrower* ?place .
  ?place skos:prefLabel ?placeName .

  # subtypes onder beedlmateriaal
  <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
  ?type skos:prefLabel ?typeLabel .

  ?cho edm:object ?type .
  ?cho dct:spatial ?place .

} GROUP BY ?typeLabel ?placeName
ORDER BY DESC(?choCount)
`
beeldMaterialenPerLand(url, query)

function beeldMaterialenPerLand(url, query){
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)
  fetch(url)
    .then(res => el.innerText = "Status of API: " + res.status)
  // Call the url with the query attached, output data
  fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
  .then(res => res.json())
  .then(json => {
    let results = json.results.bindings
    // Wiebe heeft uitgelegd hoe je alle choCount waardes in een string plaats
    // en daarna heb ik samen met hem de reduce gebruikt
    choCountItems = results.map(item => {
        // de * 1 is nodig om de cijfers bij elkaar toe te voegen anders worden de getallen achter elkaar geplakt
        return item.choCount.value * 1
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(`Er zijn ${choCountItems.reduce(reducer)} beeldmaterialen gevonden`)
    console.log('Alle data vind je hier',results)
//   console.table(json.results);
//   el.textContent = JSON.stringify(json.results)
  })
}
