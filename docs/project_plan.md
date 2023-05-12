# Opdracht SpaceX
## Inhoudsopgave:
// Geschreven door Tim <br>
Deze Markdown gaat over onze opdracht voor SpaceX. Waarin we het gaan hebben over het doel, de doelgroep, userstories, planning, wireframe, technische specificaties en het database design. Bij elk kopje gaan we dieper op de net genoemde onderwerpen verder. 

## Inleiding:
// Geschreven door Ersin <br>
Het doel van dit project is om een landingspagina te maken voor SpaceX, waar gebruikers vluchten kunnen boeken naar verschillende landen. De landingspagina leidt naar een kalender waar gebruikers beschikbare vluchten kunnen bekijken en boeken. Voordat gebruikers een vlucht kunnen boeken, moeten ze eerst een gezondheidsverklaring afleggen en bewijzen dat ze gezond en geschikt zijn om te reizen in een raket. Als alles in orde is, kunnen gebruikers een vlucht plannen naar andere landen.


## Doel:
// Geschreven door Ersin <br>
Het doel van dit project is om een gebruiksvriendelijke landingspagina te maken voor SpaceX, waar zowel huidige klanten met een hoger inkomen als potentiële klanten uit verschillende lagen van de bevolking kunnen zoeken en boeken voor vluchten naar verschillende continenten. Door een kalenderfunctie toe te voegen, kunnen gebruikers gemakkelijker beschikbare vluchten vinden en vergelijken. Daarnaast moet de landingspagina ook een gezondheidsverklaring bevatten om ervoor te zorgen dat alleen gezonde en geschikte reizigers boekingen kunnen maken voor SpaceX-vluchten. Het uiteindelijke doel is om ruimtereizen toegankelijk te maken voor een breder publiek, zodat iedereen de kans krijgt om deel te nemen aan deze unieke en spannende ervaring, naarmate ruimtereizen meer betaalbaar en toegankelijk worden.

## Doelgroep:
// Geschreven door Ersin <br>
De huidige doelgroep voor de SpaceX-landingspagina zijn mensen met een hoger inkomen die zich de luxe van ruimtetoerisme kunnen veroorloven. Echter, in de toekomst is het doel om ruimtereizen toegankelijk te maken voor een breder publiek, zodat iedereen de kans krijgt om deel te nemen aan deze unieke en spannende ervaring. De landingspagina zal dus ook gericht zijn op het aantrekken van mensen uit verschillende lagen van de bevolking, zodra ruimtereizen meer betaalbaar en toegankelijk worden.


## Userstories
// Geschreven door Tim <br>
| Nr | Als                  | Wil ik                                                                                                                | Zodat                                                                                        |
|----|----------------------|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1  | Overheid             | dat een passagier van SpaceX een CSFP verklaring nodig heeft als deze wilt reizen via raket                           | We zeker weten dat de passagiers van SpaceX gezond genoeg zijn om door de ruimte te reizen   |
| 2  | CEO van SpaceX       | dat mijn passagiers een vlucht kunnen boeken via een online omgeving                                                  | We de klant zo gemakkelijk mogelijk een vlucht kan boeken                                    |
| 3  | CEO van SpaceX       | Wil ik dat mijn passagiers de keuze hebben uit meerdere vervoersmiddelen om naar de raket te reiz                     | De reis van starport naar starport zo luxe mogelijk is                                       |
| 4  | CEO van SpaceX       | Wil ik een spannende en inspirerende landingspagina                                                                   | Ik deze kan adverteren en hiermee toekomstige passagiers kan overhalen om een reis te boeken |
| 5  | Passagier            | Wil ik een online oplossing waar ik vaak gestelde vragen kan vinden                                                   | Ik meer duidelijkheid heb over mijn gezondheid en de reis                                    |
| 6  | Passagier            | Wil ik een conformatie als mijn boeking compleet is                                                                   | Ik zeker weet dat mijn boeking gelukt is                                                     |
| 7  | Passagier            | Wil ik in het boekproces de totale prijs zien van mijn reis                                                           | Ik niet tegen onverwachtse kosten aan loop                                                   |
| 8  | Passagier            | Wil ik meer te weten komen over de starport bij mijn reis bestemming                                                  | Ik meer weet over waar de raket land                                                         |
| 9  | Werknemer van SpaceX | Wil ik een admin account waar ik verwachte vluchten kan annuleren of passagiers kan verwijderen, mocht dit nodig zijn | Ik meer controle hebt over de geboekte vluchten                                              |
| 10 | Werknemer van SpaceX | Wil ik een overzicht van welke passagiers op welke vlucht zitten                                                      | Ik sneller een passagier in ons systeem kan vinden als het nodig is                          |
## Planning
// Geschreven door Ugur <br>
| Feature                         | Gerelateerde user story | Verantwoordelijke | Af op | Linkje naar issue  op gitlab |   Prioriteit                                            |
|---------------------------------|---------------------------|-------------------|-------|----------------------------------------------------------------------------|---------------------------------------------------------|
| **Design**                      | 1                         | Tycho        | 08/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/11 | Gemiddeld |
| **Inlog en registratie pagina** | 1, 9 & 10                           |                   | 09/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/2 | Hoog |
| Database voor klanten/medewerkers  | 3, 9 & 10                        | Hicham             | 09/05 |                                                                            | Hoog |
| Aanmeld pagina                  |                          | Ersin, Tim      | 09/05 |                                                                            | Hoog |
| Inlog pagina                    |                          | Tycho, Tim        | 09/05 |                                                                            | Gemiddeld |
| Uitlog pagina                   |                          | Tycho, Tim        |    09/05   |                                                                            | Laag |
| **Database**   |                           |                   | 09/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/12 | Gemiddeld |
| **Landingspagina**              |      4                     |                   | 10/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/4 | Hoog |
| Front-end             |                          | Tim, Ugur        | 10/05 |    | Hoog |
| **CSFP Verklaring**                 |                           |                   | 10/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/1 | Hoog |
| Verklaring indienen               |                        | Tycho, Tim        | 10/05 |                                                                            | Hoog |
| Verklaring checker               |                        | Ersin, Tim        | 10/05 |                                                                            | Gemiddeld |
**Styling**                     |                           |                   | 10/05 |  | Gemiddeld |
| Home pagina                     |                         | Tim, Tycho, Ugur | 10/05 |                                                                            |  Hoog |
| Aanmeld pagina                  | 13                        | Ersin, Tycho | 10/05 |                                                                           |  Hoog |
| Inlog pagina                    | 13                        | Tim, Tycho, Ugur | 11/05 |                                                                            |  Hoog |
| Uitlog pagina                   | 13                        | Hicham, Tycho | 11/05 |   |  Hoog |
| FAQ pagina                   | 5                        | Hicham, Tycho, Ugur | 11/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/5 |  Gemiddeld |
| Booking pagina                   | 2                        | Tim, Ugur | 11/05 |  |  Hoog |
| Admin pagina                   | 10                        | Hicham, Tim, Ugur | 11/05 | https://bitlab.bit-academy.nl/timvangemert/bit-operators/-/issues/9 |  Laag |                         


## Wireframe
// gemaakt door Tim en Tycho
https://www.figma.com/file/vGi3hLJy20rwsCchl58Ie6/Untitled?type=design&node-id=1-2&t=yfOlVrRo9sVSZafR-0


## Technische specificaties
// Geschreven door Ersin
- <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" height="10" width="50"> Next.js

- <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" height="30" width="30"> JavaScript

- <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP Logo" height="30" width="60"> PHP

- <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo" height="40" width="50"> HTML

- <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo" height="40" width="50"> CSS

- <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="Tailwind CSS Logo" height="30" width="40"> Tailwind CSS

- <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg" alt="Axios Logo" height="" width="50"> Axios


## Database design
// gemaakt door Hicham
[Database Design](/docs/collect/database_design.jpg)
