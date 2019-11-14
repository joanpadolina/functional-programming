# Functional-programming
 Een D3.js implementatie van de data uit het Tropenmuseum. 

 ## Leerdoelen
- [x] Concept onderzoek
- [x] Data onderzoek
- [x] Data opschonen
- [x] Functionele javascript schrijven
- [ ] Externe data zoeken
- [x] TEST visualisatie maken van de dataset
- [ ] Vanilla javascript (freecodecamp etc)
- [ ] D3.js data opzet bekijken

 ## Debriefing | Rick

Het tropenmuseum heeft veel voorwerpen en foto’s verzameld rondom de wereld. Het is veel om alles tentoon te stellen en is daarom een datavisualisatie van een categorie een goede oplossing om gasten van het museum te laten zien wat er allemaal verzameld is. 

Als voorbeeld is er aangegeven dat het meest voorkomende categorie in een visualisatie kan worden verplaats. Omdat ze vooral bezig waren met een grafische oplossing is het vooral belangrijk dit vast te houden om visueel sterk te zijn. 

## Concept 

Voor mijn concept wil ik onderzoek doen naar het meest voorkomende voorwerpen die er zijn en dit grafisch uitbeelden op de muren van het tropenmusem. 
Wat mij het meest aantrok is de Sunburst Sequence waarbij je de landen als hoofdonderwerp neemt en in kleinere vlakken kan opdelen zodat je kan zien van welk herkomst het meest verzameld is.

![sketch-sequence](https://github.com/joanpadolina/functional-programming/blob/master/wiki%20assets/sketch_sequence.png)

Wat mij vooral aantrek bij mijn schets is dat door de 'Sequence Sunburst' lijkt het net een zon waardoor de data die ik onder heb geschets op gebouwen lijkt. Dit heeft mij meer een gevoel dat het een verhaal is meer dan een datavisualisatie. 
[Voor uitgebreide uitleg over mijn concept verwijs ik je naar mijn wiki.](https://github.com/joanpadolina/functional-programming/wiki/Concept--Datavisualisation)

Dit is een voorbeeld van D3.js, dit leek mij een goede inspiratiebron om werkelijkheid te maken voor mijn concept. 
![sunburst](https://github.com/joanpadolina/functional-programming/blob/master/wiki%20assets/sunburst.gif)

Ik wil mijn concept eerst kleinschalen op aantal per land. Ik wil deze laten zien door de landen bij elkaar te zetten de collectie op beeldmaterial te showcase. 


### Doelgroep
Mijn doelgroep van mijn concept zijn de bezoekers van het tropenmuseum. Ik wil in een oogopslag laten zien waar de collectie vandaan komen. Zo kan je de bijzonderheid van de collectie terugvinden. 

## Eerste opzet
Wat had ik nodig?
Om het klein te schalen heb ik van de collectie de beelmaterialen nodig van alleen Afrika. Mijn gedetailleerde query kan gevonden worden op [mijn Sparql](https://github.com/joanpadolina/functional-programming/wiki/SparQl) wiki.
Met SparQL heb ik data binnengehaald van alle beeldmaterialen in afrika. 

De data ziet er als volg uit:
Omdat ik alles binnenhaal van Afrika heeft geeft ie mij per plaats de aantallen aan wat dus niet handig is aangezien alles in Afrika hoort te zijn.

![data](https://github.com/joanpadolina/functional-programming/blob/master/wiki%20assets/datacsv.gif)

Ik heb deze data daarom in een excel bestand gedaan zodat ik een beter beeld krijg van de data die ik binnen haal. Dit heb ik versimpeld en dat ziet er als volg uit:

![excel](https://github.com/joanpadolina/functional-programming/blob/master/wiki%20assets/excel.png)

Daarna om het uit te beelden heb ik een chart gepakt van excel om te kijken hoe dit eruit ziet als je het visualiseert.

![chart excel](https://github.com/joanpadolina/functional-programming/blob/master/wiki%20assets/excel_chart.png)


## Mijn uiteindelijk visualisatie van de collectie [Beeldmaterialen](https://joanpadolina.github.io/functional-programming/)



## Functional Programming 

[wiki naar functional programming](https://github.com/joanpadolina/functional-programming/wiki/Functional-Programming)

## D3 

D3 process is [in mijn wiki](https://github.com/joanpadolina/functional-programming/wiki/D3-Let's-build-something) te vinden

## Credits

[mbostock](https://gist.github.com/mbostock/6fead6d1378d6df5ae77bb6a719afcb2)

