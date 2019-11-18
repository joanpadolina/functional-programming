export default function(termMasterCode, continent) {
    return `
   PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX dc: <http://purl.org/dc/elements/1.1/>
   PREFIX dct: <http://purl.org/dc/terms/>
   PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
   PREFIX edm: <http://www.europeana.eu/schemas/edm/>
   PREFIX foaf: <http://xmlns.com/foaf/0.1/>
   SELECT ?typeLabel ?placeName (COUNT(?cho) AS ?choCount) WHERE {
     # plaatsen in ${continent}
     <https://hdl.handle.net/20.500.11840/termmaster${termMasterCode}> skos:narrower* ?place .
     ?place skos:prefLabel ?placeName .
   
     # subtypes onder beedlmateriaal
     <https://hdl.handle.net/20.500.11840/termmaster5929> skos:narrower* ?type .
     ?type skos:prefLabel ?typeLabel .
   
     ?cho edm:object ?type .
     ?cho dct:spatial ?place .
   
   } GROUP BY ?typeLabel ?placeName
   ORDER BY DESC(?choCount)
   `
}