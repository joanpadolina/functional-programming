import query from "./sparQLquerie.js"

export default function newSparQLQueries(query){
    const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-12/sparql"
    //Test if the endpoint is up and print result to page 
    // (you can improve this script by making the next part of this function wait for a succesful result)
    fetch(url)
      // .then(res => el.innerText = "Status of API: " + res.status)
    // Call the url with the query attached, output data
  fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
      .then(res => res.json())
      .then(json => {
        let results = json.results.bindings
        return results
      })
      .then(results => {
        // Wiebe heeft uitgelegd hoe je alle choCount waardes in een string plaats
        // en daarna heb ik samen met hem de reduce gebruikt
        let choCountItems = results.map(item => {
          // de * 1 is nodig om de cijfers bij elkaar toe te voegen anders worden de getallen achter elkaar geplakt
          return item.choCount.value * 1
        })
  
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        // console.log(`Er zijn ${choCountItems.reduce(reducer)} beeldmaterialen gevonden.`)
        let countChoVariable = choCountItems.reduce(reducer)
        console.log(countChoVariable)
        return countChoVariable 
      })
      .then(choCountItems => {
       return choCountItems 
      })
}