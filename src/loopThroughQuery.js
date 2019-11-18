import termmasterCodes from "./termcodesarray.js";
import dataSparQLquery from "./dataFormSparql.js";
import sparqlCode from "./sparQLquerie.js"

export default function termmasterLoop(termmaster, continent){
     return termmasterCodes.map(item => {
      dataSparQLquery(sparqlCode(item.termmaster))
      console.log(item.continent)
    })
}
termmasterLoop()