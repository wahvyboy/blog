import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    slug: 'beaches-on-lake-bolsena',
    categoryKey: 'news',
    category: {
      en: 'NEWS',
      it: 'NOTIZIE'
    },
    title: {
      en: 'BEACHES ON LAKE BOLSENA',
      it: 'LE SPIAGGE DEL LAGO DI BOLSENA'
    },
    date: {
      en: 'June 23, 2025',
      it: '23 Giugno 2025'
    },
    author: 'Admin',
    commentsCount: 0,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Lazio, Central Italy',
      it: 'Lazio, Italia Centrale'
    },
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Lake Bolsena crystal clear shoreline in Italy',
      it: 'Riva cristallina del Lago di Bolsena in Italia'
    },
    excerpt: {
      en: 'The Best Beaches on Lake Bolsena, Italy. An honest guide to the most tranquil lakeside retreats in central Italy. While the best emerald water of the lake is near the two islands—Bisentina and Martana—there is no public beach access on either of them. You can admire them from the shore...',
      it: 'Le migliori spiagge del Lago di Bolsena in Italia. Una guida sincera ai rifugi più tranquilli in riva al lago nel centro Italia. Sebbene le acque più limpide siano vicino alle due isole—Bisentina e Martana—non c\'è accesso pubblico da esse. Puoi ammirarle dalla riva...'
    },
    emotionalHighlight: {
      en: 'When the golden afternoon sun touches the dark volcanic sands of Lake Bolsena, time slows down and the gentle breeze carries the scent of wild mint.',
      it: 'Quando il sole dorato del pomeriggio sfiora la sabbia vulcanica del Lago di Bolsena, il tempo rallenta e la brezza leggera profuma di menta selvatica.'
    },
    keyTakeaways: {
      en: [
        'Lake Bolsena is Europe’s largest volcanic lake with calm, clean, warm water perfect for families.',
        'Capodimonte and Marta offer the softest sandy beaches with shaded olive groves nearby.',
        'Islands Bisentina and Martana are private nature reserves best viewed via small boat tours.'
      ],
      it: [
        'Il Lago di Bolsena è il più grande lago vulcanico d\'Europa con acque pulite e calme ideali per le famiglie.',
        'Capodimonte e Marta offrono spiagge sabbiose con ombrosi uliveti nelle vicinanze.',
        'Le isole Bisentina e Martana sono riserve naturali visibili al meglio tramite escursioni in barca.'
      ]
    },
    fullStory: {
      en: [
        'Have you ever stood in front of a calm lake in Italy where the water is so clear you can count the little pebbles beneath your feet? That is the magic of Lake Bolsena.',
        'Located in the green hills of northern Lazio, just an hour and a half from Rome, Lake Bolsena was created by an ancient volcano thousands of years ago. Today, it is famous for its dark volcanic sand, cool summer breeze, and peaceful vibe that makes everyday stress melt away.',
        'Families love the beaches near the cute town of Capodimonte. You can rent a pedal boat, eat fresh fish caught right in the lake, and watch the sun paint the sky in pink and gold. It is not crowded like seaside resorts; it feels like discovering a secret garden of Italy.'
      ],
      it: [
        'Ti sei mai trovato davanti a un lago calmo in Italia dove l\'acqua è così limpida da poter contare i sassolini sotto i tuoi piedi? Questa è la magia del Lago di Bolsena.',
        'Situato tra le verdi colline dell\'alto Lazio, a solo un\'ora e mezza da Roma, il Lago di Bolsena è nato da un antico vulcano migliaia di anni fa. Oggi è famoso per la sua sabbia vulcanica, la brezza estiva e un\'atmosfera serena che scioglie ogni preoccupazione.',
        'Le famiglie adorano le spiagge vicino al borgo di Capodimonte. Puoi noleggiare un pedalò, gustare pesce fresco di lago e ammirare il tramonto che colora il cielo di rosa e oro. Un vero rifugio di pace.'
      ]
    },
    tags: ['Lake Bolsena', 'Travel', 'Lazio', 'Beaches', 'Summer in Italy'],
    isFeatured: true
  },
  {
    id: '2',
    slug: 'eating-in-italy-like-a-local-citizen',
    categoryKey: 'food',
    category: {
      en: 'FOOD PRODUCTS, ITALIAN FOOD, NEWS',
      it: 'PRODOTTI ALIMENTARI, CUCINA ITALIANA, NOTIZIE'
    },
    title: {
      en: 'EATING IN ITALY LIKE A LOCAL CITIZEN: TIPS FOR FOREIGNERS',
      it: 'MANGIARE IN ITALIA DA VERO RESIDENTE: CONSIGLI PER STRANIERI'
    },
    date: {
      en: 'June 2, 2025',
      it: '2 Giugno 2025'
    },
    author: 'Francesco Paladini',
    commentsCount: 0,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'All Italian Regions',
      it: 'Tutte le Regioni Italiane'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Italian local food market with fresh fruits, pasta and vegetables',
      it: 'Mercato rionale italiano con frutta fresca, pasta e verdure'
    },
    excerpt: {
      en: 'Unfortunately, foreigners often come to Italy with the myth that pizza and pasta are the only gastronomic excellences, overlooking what it truly means to be eating in Italy like a citizen. In this article I explain how to find fresh goods on your own and experience village festivals like a local...',
      it: 'Purtroppo molti stranieri arrivano in Italia con il mito che pizza e pasta siano le uniche eccellenze, trascurando cosa significhi davvero mangiare come un residente. In questo articolo spiego come trovare prodotti freschi e vivere le sagre di paese...'
    },
    emotionalHighlight: {
      en: 'Food in Italy is not just something you put on a plate; it is an act of love, friendship, and centuries of family tradition shared around a noisy wooden table.',
      it: 'Il cibo in Italia non è solo un piatto in tavola; è un gesto d\'amore, unione e secoli di tradizioni familiari condivise intorno a un caloroso tavolo di legno.'
    },
    keyTakeaways: {
      en: [
        'Shop at the weekly morning open-air market (il mercato rionale) for fresh seasonal vegetables and artisan cheeses.',
        'Never order cappuccino after 11:00 AM; Italians drink a quick espresso (un caffè al volo) after lunch.',
        'Visit "Sagre" (local food festivals) in small towns to taste recipes made by local grandmothers.'
      ],
      it: [
        'Fai la spesa al mercato rionale settimanale per verdure fresche di stagione e formaggi artigianali.',
        'Il cappuccino si beve a colazione; dopo pranzo gli italiani prendono un espresso al banco.',
        'Partecipa alle "Sagre" paesane per assaggiare piatti autentici cucinati con amore.'
      ]
    },
    fullStory: {
      en: [
        'When you walk into a small neighborhood grocery store in Italy, the shopkeeper will not just sell you tomatoes. He will ask what you are cooking, tell you which tomato was picked this morning, and wish you "Buon appetito!" with a warm smile.',
        'In Italy, food follows the seasons. In winter, people gather around warm soups with fresh extra-virgin olive oil. In summer, sweet ripe peaches and handmade mozzarella rule the table.',
        'To eat like an Italian, step away from tourist menus. Go to small family-owned trattorias where the menu is handwritten, and join the local summer festivals called "Sagre". There, you will eat food cooked with genuine passion at friendly prices.'
      ],
      it: [
        'Quando entri in una bottega di quartiere in Italia, il negoziante non ti vende solo pomodori. Ti chiede cosa cucinerai, quale varietà è stata raccolta all\'alba e ti augura "Buon appetito!" col cuore.',
        'In Italia il cibo rispetta le stagioni. D\'inverno ci si scalda con zuppe fumanti e olio nuovo. D\'estate trionfano pesche profumate e mozzarella fresca artigianale.',
        'Per vivere la vera cucina italiana, evita i menu turistici e scegli le trattorie di paese o le allegre sagre estive, dove ogni piatto racconta una storia di famiglia.'
      ]
    },
    tags: ['Italian Food', 'Local Culture', 'Markets', 'Trattoria', 'Lifestyle']
  },
  {
    id: '3',
    slug: 'buying-a-historic-house-in-italy-living-inside-history',
    categoryKey: 'real-estate',
    category: {
      en: 'REAL ESTATE',
      it: 'IMMOBILIARE'
    },
    title: {
      en: 'BUYING A HISTORIC HOUSE IN ITALY: LIVING INSIDE HISTORY',
      it: 'COMPRARE UNA CASA STORICA IN ITALIA: VIVERE DENTRO LA STORIA'
    },
    date: {
      en: 'May 19, 2025',
      it: '19 Maggio 2025'
    },
    author: 'Francesco Paladini',
    commentsCount: 0,
    readTime: {
      en: '6 min read',
      it: '6 min di lettura'
    },
    location: {
      en: 'Tuscany & Umbria',
      it: 'Toscana e Umbria'
    },
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Historic Italian apartment building with stone balconies and flowers',
      it: 'Palazzo storico italiano con balconi in pietra e fiori'
    },
    excerpt: {
      en: 'Buying a historic house in Italy is not just a real estate choice: it means living in buildings that tell centuries of history, in villages where time seems to have stopped. If you are thinking about moving to Italy or buying a second home, and you are attracted by the idea...',
      it: 'Comprare una casa storica in Italia non è solo una scelta immobiliare: significa abitare in edifici che raccontano secoli di storia, in borghi dove il tempo sembra essersi fermato. Se stai pensando di trasferirti...'
    },
    emotionalHighlight: {
      en: 'Opening your wooden window shutters in the morning and seeing a stone bell tower that has stood for 600 years connects your heart directly to the past.',
      it: 'Aprire le persiane di legno al mattino e vedere un campanile in pietra che veglia sul borgo da seicento anni riempie l\'anima di pura meraviglia.'
    },
    keyTakeaways: {
      en: [
        'Historic properties feature original terracotta floors, chestnut wood beams, and hand-carved stone fireplaces.',
        'Renovation laws in Italy preserve heritage while allowing modern eco-friendly heating and fast internet.',
        'Many peaceful medieval villages in Umbria, Abruzzo, and Le Marche offer homes starting under €90,000.'
      ],
      it: [
        'Gli immobili storici custodiscono pavimenti in cotto antico, travi in castagno e camini scolpiti a mano.',
        'Le norme di restauro tutelano il fascino storico consentendo al contempo comfort moderni ed efficienza energetica.',
        'Numerosi borghi medievali in Umbria, Abruzzo e Marche offrono proprietà a prezzi sorprendentemente accessibili.'
      ]
    },
    fullStory: {
      en: [
        'Imagine stepping across a stone threshold smoothed by centuries of footsteps. High above your head, solid oak wooden beams hold up ceilings that saw painters, poets, and craftsmen.',
        'Buying a historic house in Italy is a dream come true for thousands of people worldwide. It is not just about having four walls; it is about becoming part of a community that welcomes you with open arms.',
        'From stone palazzos in hill towns to countryside farmhouses, living in an ancient Italian home teaches you how to appreciate craftsmanship, natural materials, and the quiet pleasure of evening walks.'
      ],
      it: [
        'Immagina di varcare una soglia in pietra levigata da secoli di passi. Sopra di te, robuste travi in legno di quercia sorreggono soffitti che hanno visto epoche di poeti e maestri artigiani.',
        'Acquistare una dimora storica in Italia è il sogno di una vita. Non significa solo possedere una casa, ma entrare a far parte di una comunità calorosa e autentica.',
        'Dai palazzi nobiliari nei borghi collinari ai casali di campagna, vivere nella storia insegna ad amare la bellezza dei materiali autentici e la pace delle serate di paese.'
      ]
    },
    tags: ['Real Estate', 'Historic Homes', 'Umbria', 'Tuscany', 'Architecture']
  },
  {
    id: '4',
    slug: 'buying-a-house-in-a-ghost-town-in-italy',
    categoryKey: 'real-estate',
    category: {
      en: 'REAL ESTATE, TOURISM',
      it: 'IMMOBILIARE, TURISMO'
    },
    title: {
      en: 'BUYING A HOUSE IN A GHOST TOWN IN ITALY',
      it: 'COMPRARE CASA IN UN BORGO FANTASMA IN ITALIA'
    },
    date: {
      en: 'May 18, 2025',
      it: '18 Maggio 2025'
    },
    author: 'Francesco Paladini',
    commentsCount: 0,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Southern & Central Italy',
      it: 'Sud e Centro Italia'
    },
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Cobblestone pathway in historic Italian stone village',
      it: 'Vicolo acciottolato in un borgo antico italiano in pietra'
    },
    excerpt: {
      en: 'What if your future lies in a town everyone else has left behind? It\'s not a provocation, but a question that many foreigners are asking themselves when faced with an opportunity as unexpected as it is fascinating: buying a house in a ghost town in Italy. It can be a...',
      it: 'E se il tuo futuro si trovasse in un borgo che tutti hanno abbandonato? Non è una provocazione, ma la domanda che molti viaggiatori si pongono davanti a un\'opportunità unica: comprare casa in un borgo fantasma in Italia...'
    },
    emotionalHighlight: {
      en: 'Bringing light and laughter back into an ancient stone street feels like healing a forgotten piece of our world.',
      it: 'Riportare luce, voci e calore umano tra i vicoli di un antico borgo dimenticato è come curare una ferita del tempo.'
    },
    keyTakeaways: {
      en: [
        'Abandoned villages (borghi fantasma) are being revitalized by artists, digital nomads, and eco-retreat builders.',
        'Town councils often assist new buyers with fast paperwork and tax reductions.',
        'You can enjoy pure silence, crystal mountain air, and unmatched privacy.'
      ],
      it: [
        'I borghi dimenticati stanno rinascendo grazie a progetti creativi, nomadi digitali e amanti della natura.',
        'Le amministrazioni locali supportano i nuovi acquirenti con agevolazioni e procedure semplificate.',
        'Un\'oasi di silenzio assoluto, aria pura e contatto intimo con la natura.'
      ]
    },
    fullStory: {
      en: [
        'Across Italy, there are charming stone villages nestled in mountains where time stood still. Decades ago, young people moved to big cities for factory jobs, leaving behind fairytale houses of stone and timber.',
        'Now, a new movement of people looking for peace, clean air, and creative freedom are buying and restoring these houses. They are turning forgotten ruins into warm homes with gardens, solar power, and star-filled night skies.',
        'It is a life of true purpose: you are not just a homeowner, you are helping save Italy’s heritage.'
      ],
      it: [
        'In tutta la penisola esistono incantevoli borghi di pietra incastonati tra le colline dove il tempo si è fermato. Nel secolo scorso molti si trasferirono nelle grandi città, lasciando case fiabesche.',
        'Oggi una nuova comunità di persone in cerca di armonia, aria pura e creatività sta facendo rifiorire queste dimore antiche con energia verde e passione.',
        'Una scelta che riempie di significato la vita: ridare respiro al patrimonio storico più intimo d\'Italia.'
      ]
    },
    tags: ['Ghost Towns', 'Real Estate', 'Village Revival', 'Nature', 'Off the Beaten Path']
  },
  {
    id: '5',
    slug: 'which-are-the-most-pet-friendly-cities-in-italy',
    categoryKey: 'lifestyle',
    category: {
      en: 'REAL ESTATE',
      it: 'IMMOBILIARE'
    },
    title: {
      en: 'WHICH ARE THE MOST PET-FRIENDLY CITIES IN ITALY?',
      it: 'QUALI SONO LE CITTÀ PIÙ AMICHE DEGLI ANIMALI IN ITALIA?'
    },
    date: {
      en: 'May 11, 2025',
      it: '11 Maggio 2025'
    },
    author: 'Francesco Paladini',
    commentsCount: 0,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Northern & Central Italy',
      it: 'Nord e Centro Italia'
    },
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Happy dog enjoying a walk outdoors',
      it: 'Cane felice all\'aperto durante una passeggiata'
    },
    excerpt: {
      en: 'Moving to Italy with a pet means choosing the right city carefully. Some Italian locations offer ideal conditions for those living with dogs or cats, thanks to targeted investments in green areas, veterinary services, accessible transport, and an urban culture that is more attentive to animals. In these cities, walking...',
      it: 'Trasferirsi in Italia con un animale domestico richiede di scegliere la città con cura. Alcune mete offrono condizioni ideali grazie a parchi verdi, trasporti accessibili e una cultura urbana accogliente per i nostri amici a quattro zampe...'
    },
    emotionalHighlight: {
      en: 'Watching your dog run freely on a dedicated Italian dog beach while you sip espresso is pure joy.',
      it: 'Vedere il tuo cane correre felice su una spiaggia attrezzata mentre ti godi un buon caffè è pura gioia.'
    },
    keyTakeaways: {
      en: [
        'Top pet-friendly cities include Bologna, Verona, Turin, and Florence.',
        'Italy has over 800 dedicated "Bau Beaches" (dog-friendly shores) with freshwater showers.',
        'High-speed trains (Frecciarossa and Italo) warmly welcome pets on board with simple guidelines.'
      ],
      it: [
        'Tra le città più pet-friendly spiccano Bologna, Verona, Torino e Firenze.',
        'L\'Italia vanta oltre 800 "Bau Beach" con zone dedicate e servizi per cani.',
        'I treni ad alta velocità accolgono cani e gatti con facilità e comfort.'
      ]
    },
    fullStory: {
      en: [
        'Italians love pets like family members. It is very common to see dogs sitting happily next to their owners at outdoor cafes, or riding high-speed trains to vacation spots.',
        'Cities like Bologna and Verona have built huge fenced dog parks with clean drinking fountains, agility courses, and shaded benches for owners to chat and make lifelong friends.',
        'If you move to Italy with your four-legged best friend, you will find welcoming veterinary clinics, pet boutiques, and neighbors who will stop to pet your dog and say "Che bello!".'
      ],
      it: [
        'In Italia gli animali sono considerati parte della famiglia. È normale vedere cani rilassati accanto ai tavoli all\'aperto dei bar o sui treni ad alta velocità.',
        'Città come Bologna e Verona vantano splendidi parchi con aree cani recintate, fontanelle d\'acqua fresca e zone ombreggiate dove fare amicizia.',
        'Trasferendoti con il tuo compagno a quattro zampe troverai servizi eccellenti e una comunità sempre pronta a regalare una carezza affettuosa.'
      ]
    },
    tags: ['Pets', 'Living in Italy', 'Bologna', 'Verona', 'Dog Friendly']
  },
  {
    id: '6',
    slug: 'where-to-move-in-italy-if-you-love-wine-and-olive-oil',
    categoryKey: 'lifestyle',
    category: {
      en: 'REAL ESTATE',
      it: 'IMMOBILIARE'
    },
    title: {
      en: 'WHERE TO MOVE IN ITALY IF YOU LOVE WINE AND OLIVE OIL',
      it: 'DOVE TRASFERIRSI IN ITALIA SE AMI IL VINO E L\'OLIO EXTRAVERGINE'
    },
    date: {
      en: 'April 28, 2025',
      it: '28 Aprile 2025'
    },
    author: 'Francesco Paladini',
    commentsCount: 0,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Tuscany, Puglia & Piedmont',
      it: 'Toscana, Puglia e Piemonte'
    },
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Rolling green vineyard hills in Tuscany with winding country roads',
      it: 'Dolci colline di vigneti in Toscana con strada panoramica'
    },
    excerpt: {
      en: 'Simple gestures measure life in Italy: a harvest done with hands dirty from the soil, the olive harvest with entire families working in the fields, and tasting the new oil on warm bread. Choosing to live near these excellences is not just about landscapes or personal taste: it is an...',
      it: 'Gesti semplici scandiscono la vita in Italia: la vendemmia fatta a mano, la raccolta delle olive con intere famiglie nei campi e l\'assaggio dell\'olio nuovo su pane caldo. Vivere vicino a queste eccellenze è uno stile di vita unico...'
    },
    emotionalHighlight: {
      en: 'Dipping warm crusty sourdough into freshly pressed, emerald-green olive oil is an unforgettable taste of pure sunshine.',
      it: 'Intingere una fetta di pane caldo nell\'olio appena franto, dal colore verde smeraldo, è il sapore più autentico della terra.'
    },
    keyTakeaways: {
      en: [
        'Tuscany (Chianti, Montalcino) offers world-class Sangiovese wines and peppery IGP olive oil.',
        'Puglia (Salento, Valle d’Itria) has centuries-old olive trees and rich red Primitivo wines at affordable living costs.',
        'Piedmont (Langhe, Barolo) is a UNESCO paradise of rolling fog-kissed hills and legendary truffles.'
      ],
      it: [
        'La Toscana (Chianti, Montalcino) regala grandi vini e un olio dal sapore vivace e inconfondibile.',
        'La Puglia (Salento, Valle d’Itria) offre ulivi monumentali, ottimo Primitivo e un costo della vita accessibile.',
        'Il Piemonte (Langhe, Roero) è patrimonio UNESCO tra colline spettacolari e tartufi pregiati.'
      ]
    },
    fullStory: {
      en: [
        'In autumn across Italy, you can hear the happy laughter of families shaking olive branches onto big green nets spread across the ground.',
        'When the olives go into the local press (il frantoio), the air fills with an intense, fruity perfume. You pour that emerald liquid over toasted bread, add a pinch of sea salt, and you will never look at food the same way again.',
        'Whether you dream of a stone cottage nestled among Tuscan vineyards or a whitewashed villa in Puglia surrounded by ancient olive groves, living here connects you directly to nature’s richest gifts.'
      ],
      it: [
        'In autunno, tra le colline italiane, risuonano le risate e le chiacchiere delle famiglie intente nella raccolta delle olive su grandi teli verdi stesi sul prato.',
        'Al frantoio il profumo intenso dell\'olio nuovo invade l\'aria. Versato su una fetta di pane abbrustolito con un pizzico di sale, regala un\'emozione indimenticabile.',
        'Che tu scelga un casolare in Toscana o una masseria in Puglia tra ulivi secolari, qui ritroverai il legame più profondo con la terra.'
      ]
    },
    tags: ['Wine', 'Olive Oil', 'Tuscany', 'Puglia', 'Country Living']
  },
  {
    id: '7',
    slug: 'living-in-italy-with-horses-the-paradise-of-rural-areas',
    categoryKey: 'travel',
    category: {
      en: 'REAL ESTATE, TOURISM, TRAVEL',
      it: 'IMMOBILIARE, TURISMO, VIAGGI'
    },
    title: {
      en: 'LIVING IN ITALY WITH HORSES: THE PARADISE OF RURAL AREAS',
      it: 'VIVERE IN ITALIA CON I CAVALLI: IL PARADISO DELLE AREE RURALI'
    },
    date: {
      en: 'March 23, 2025',
      it: '23 Marzo 2025'
    },
    author: 'Francesco Paladini',
    commentsCount: 0,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Maremma & Umbrian Hills',
      it: 'Maremma e Colline Umbre'
    },
    imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Beautiful horses grazing peacefully in morning meadow mist',
      it: 'Cavalli al pascolo immersi nella nebbia dorata del mattino'
    },
    excerpt: {
      en: 'If you\'re thinking about moving to Italy with your horses or farm animals, you\'re probably wondering about the differences in regulations and management costs compared to your home country. Italy boasts a long equestrian and agricultural tradition, offering breathtaking landscapes and vast rural areas where you can find great real...',
      it: 'Se stai pensando di trasferirti in Italia con i tuoi cavalli o animali da fattoria, ti starai chiedendo quali siano le normative e i costi. L\'Italia vanta una profonda tradizione equestre e grandi spazi aperti...'
    },
    emotionalHighlight: {
      en: 'Riding at sunrise across the wild hills of Maremma as the morning dew glistens like diamonds on the grass.',
      it: 'Cavalcare all\'alba tra le colline selvagge della Maremma mentre la rugiada brilla come diamanti sui prati.'
    },
    keyTakeaways: {
      en: [
        'The Maremma region (Tuscany/Lazio) is famous for butteri (Italian cowboys) and vast equestrian trails.',
        'Rural properties with large pastures and barn facilities are widely available at reasonable rates.',
        'Italy’s climate allows outdoor grazing nearly all year round in central and southern valleys.'
      ],
      it: [
        'La Maremma è la culla dei butteri tradizionali e di infiniti sentieri panoramici per passeggiate a cavallo.',
        'Casali con ampi terreni e scuderie sono disponibili a prezzi vantaggiosi nelle valli centrali.',
        'Il clima temperato favorisce il pascolo all\'aperto per gran parte dell\'anno.'
      ]
    },
    fullStory: {
      en: [
        'Early morning in the Italian countryside is peaceful. As the silver mist lifts from the grassy fields, your horses graze quietly beneath sweet chestnut and oak trees.',
        'Italy has thousands of miles of marked bridleways (ippovie) that allow you to ride across national parks, past medieval castle ruins, and down to sunny coastal dunes.',
        'Equine veterinarians and local farriers are skilled and passionate. Having your animals in Italy means enjoying an open-hearted lifestyle filled with natural beauty.'
      ],
      it: [
        'Il primo mattino nella campagna italiana regala una quiete speciale. Mentre la nebbia si alza dai prati, i cavalli pascolano sereni sotto castagni e querce secolari.',
        'Migliaia di chilometri di ippovie attraversano parchi naturali, sfiorano rocche medievali e scendono fino al mare.',
        'Veterinari e maniscalchi locali vantano grande esperienza e passione, rendendo la vita rurale con gli animali un\'esperienza ricca di serenità.'
      ]
    },
    tags: ['Horses', 'Rural Life', 'Maremma', 'Nature', 'Equestrian']
  },
  {
    id: '8',
    slug: 'trevi-fountain-reopening-all-the-new-rules',
    categoryKey: 'destinations',
    category: {
      en: 'ITALIAN DESTINATIONS',
      it: 'DESTINAZIONI ITALIANE'
    },
    title: {
      en: 'TREVI FOUNTAIN REOPENING: ALL THE NEW RULES',
      it: 'RIAPERTURA DELLA FONTANA DI TREVI: TUTTE LE NUOVE REGOLE'
    },
    date: {
      en: 'June 15, 2025',
      it: '15 Giugno 2025'
    },
    author: 'Rome Editorial',
    commentsCount: 0,
    readTime: {
      en: '3 min read',
      it: '3 min di lettura'
    },
    location: {
      en: 'Rome, Historic Center',
      it: 'Roma, Centro Storico'
    },
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Trevi Fountain in Rome with gleaming marble and turquoise waters',
      it: 'Fontana di Trevi a Roma con marmi splendenti e acque turchesi'
    },
    excerpt: {
      en: 'Rome has refreshed its most celebrated baroque masterpiece. Discover the new visitor flow guidelines, the raised glass viewing ramp, and how to safely toss your coin to ensure your return to the Eternal City...',
      it: 'Roma rinnova il suo capolavoro barocco più famoso. Scopri le nuove regole d\'accesso, la passerella trasparente e come lanciare la monetina per tornare nella Città Eterna...'
    },
    emotionalHighlight: {
      en: 'Hearing the thunderous rush of water in front of Trevi’s sculpted marble giants rekindles everyone’s love for Rome.',
      it: 'Il fragore maestoso dell\'acqua tra i giganti di marmo scolpiti rinnova in ognuno l\'amore eterno per Roma.'
    },
    keyTakeaways: {
      en: [
        'New designated walking paths allow every visitor an unobstructed photo without large crowds.',
        'Coin tossing over your left shoulder is preserved as the beloved tradition supporting local charities.',
        'Evening illumination has been upgraded with energy-efficient golden LED spotlights.'
      ],
      it: [
        'Nuovi percorsi pedonali consentono di ammirare e fotografare la fontana con calma e rispetto.',
        'Il tradizionale lancio della monetina con la mano destra sopra la spalla sinistra sostiene le associazioni benefiche.',
        'Nuova illuminazione artistica serale a basso impatto energetico.'
      ]
    },
    fullStory: {
      en: [
        'Standing in front of the Trevi Fountain at night is one of those moments you never forget. The sound of cascading water echoes through the narrow Roman alleys.',
        'Following recent careful restoration, the City of Rome introduced a gentle visitor flow system. Now, travelers can stroll closer to the turquoise basin and appreciate every delicate leaf and sea horse carved by Nicola Salvi.',
        'Don\'t forget: turn your back to the fountain, close your eyes, and throw a coin over your left shoulder with your right hand. Legend promises you will return to Rome!'
      ],
      it: [
        'Trovarsi davanti alla Fontana di Trevi di notte è un\'emozione che resta per sempre nel cuore. Il suono dell\'acqua risuona tra i vicoli storici della capitale.',
        'Dopo i recenti restauri, un nuovo percorso permette di avvicinarsi alla vasca e ammirare ogni dettaglio dei tritoni e dei cavalli marini scolpiti nel marmo.',
        'Ricorda la tradizione: volta le spalle alla fontana e lancia una monetina con la mano destra oltre la spalla sinistra per tornare a Roma!'
      ]
    },
    tags: ['Rome', 'Trevi Fountain', 'Travel News', 'Jubilee 2025'],
    isSidebarHighlight: true
  },
  {
    id: '9',
    slug: 'piazza-navona-fountain-of-the-four-rivers-restoration',
    categoryKey: 'destinations',
    category: {
      en: 'ITALIAN DESTINATIONS',
      it: 'DESTINAZIONI ITALIANE'
    },
    title: {
      en: 'PIAZZA NAVONA, ROME: RESTORATION OF THE FOUNTAIN OF THE FOUR RIVERS COMPLETED',
      it: 'PIAZZA NAVONA, ROMA: COMPLETATO IL RESTAURO DELLA FONTANA DEI QUATTRO FIUMI'
    },
    date: {
      en: 'June 8, 2025',
      it: '8 Giugno 2025'
    },
    author: 'Rome Editorial',
    commentsCount: 0,
    readTime: {
      en: '3 min read',
      it: '3 min di lettura'
    },
    location: {
      en: 'Piazza Navona, Rome',
      it: 'Piazza Navona, Roma'
    },
    imageUrl: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Piazza Navona Fountain of the Four Rivers in Rome',
      it: 'Fontana dei Quattro Fiumi in Piazza Navona a Roma'
    },
    excerpt: {
      en: 'Gian Lorenzo Bernini\'s 17th-century triumph at the center of Piazza Navona is once again gleaming in full glory. Discover the four allegorical giants representing the Danube, Nile, Ganges, and Río de la Plata...',
      it: 'Il trionfo seicentesco di Gian Lorenzo Bernini al centro di Piazza Navona risplende nel suo massimo splendore. Scopri i quattro giganti che rappresentano Danubio, Nilo, Gange e Rio de la Plata...'
    },
    emotionalHighlight: {
      en: 'Watching the afternoon light dance on Bernini’s white travertine figures while street violinists play nearby is pure Italian romance.',
      it: 'Ammirare la luce dorata sulle statue del Bernini mentre un violino suona in lontananza è pura magia romana.'
    },
    keyTakeaways: {
      en: [
        'Restoration removed mineral deposits, revealing sharp sculptural details unseen for decades.',
        'Piazza Navona remains Rome’s vibrant open-air living room filled with painters and gelaterias.'
      ],
      it: [
        'Il restauro ha rimosso i depositi calcarei, riscoprendo dettagli scultorei nascosti da decenni.',
        'Piazza Navona si conferma il salotto a cielo aperto più vivo e romantico della capitale.'
      ]
    },
    fullStory: {
      en: [
        'Piazza Navona was built over the ancient stadium of Emperor Domitian. In its heart sits Bernini’s masterpiece: the Fountain of the Four Rivers.',
        'With the restoration finished in time for the Jubilee, the sculpted lion, horse, palm tree, and giant river gods look as crisp and vibrant as the day they were unveiled in 1651.',
        'Grab a cone of pistachio gelato, sit on the sun-warmed stone benches, and take in the living history surrounding you.'
      ],
      it: [
        'Piazza Navona sorge sull\'antico stadio dell\'imperatore Domiziano e custodisce al centro l\'opera sublime del Bernini.',
        'Completato il restauro in vista del Giubileo, le sculture del leone, del cavallo e delle divinità fluviali risplendono di nuova luce.',
        'Un cono al pistacchio artigianale, una panchina baciata dal sole e tutta la bellezza di Roma intorno a te.'
      ]
    },
    tags: ['Rome', 'Bernini', 'Piazza Navona', 'Art', 'Culture'],
    isSidebarHighlight: true
  },
  {
    id: '10',
    slug: 'the-vatican-launches-an-app-for-the-jubilee-2025',
    categoryKey: 'destinations',
    category: {
      en: 'ITALIAN DESTINATIONS',
      it: 'DESTINAZIONI ITALIANE'
    },
    title: {
      en: 'THE VATICAN LAUNCHES AN APP FOR THE JUBILEE 2025',
      it: 'IL VATICANO LANCIA L\'APP UFFICIALE PER IL GIUBILEO 2025'
    },
    date: {
      en: 'May 30, 2025',
      it: '30 Maggio 2025'
    },
    author: 'Admin',
    commentsCount: 0,
    readTime: {
      en: '3 min read',
      it: '3 min di lettura'
    },
    location: {
      en: 'Vatican City, Rome',
      it: 'Città del Vaticano, Roma'
    },
    imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe57871b0?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'St Peter Basilica in Rome Vatican Jubilee 2025',
      it: 'Basilica di San Pietro a Roma Giubileo 2025'
    },
    excerpt: {
      en: 'The Holy See has rolled out the official multilingual smartphone app for the Jubilee 2025. It provides digital Pilgrim Cards, booking for the Holy Doors, interactive Roman walking routes, and live event updates in 6 languages...',
      it: 'La Santa Sede ha presentato l\'applicazione ufficiale multilingue per il Giubileo 2025. Permette di ottenere la Carta del Pellegrino, prenotare il passaggio alla Porta Santa e seguire itinerari culturali in 6 lingue...'
    },
    emotionalHighlight: {
      en: 'Connecting millions of pilgrims and lovers of art through seamless digital simplicity.',
      it: 'Unire milioni di pellegrini e amanti dell\'arte attraverso la semplicità digitale.'
    },
    keyTakeaways: {
      en: [
        'Free official app available for iOS and Android in English, Italian, Spanish, French, German, and Portuguese.',
        'Enables advance reservation for passing through the Holy Doors of Rome’s major papal basilicas.',
        'Includes cultural audio guides for over 60 historic Roman churches.'
      ],
      it: [
        'App gratuita per iOS e Android disponibile in italiano, inglese, spagnolo, francese, tedesco e portoghese.',
        'Permette la prenotazione per il passaggio della Porta Santa nelle basiliche papali.',
        'Include audioguide culturali su oltre 60 chiese storiche della capitale.'
      ]
    },
    fullStory: {
      en: [
        'The Jubilee year 2025 welcomes over 30 million visitors to Rome. To make every journey peaceful and enjoyable, the Vatican created a modern mobile guide.',
        'With the app, you can reserve access times to St. Peter\'s Basilica, explore walking routes through Rome\'s hidden courtyards, and receive live notifications about public transport and events.',
        'It is an easy, friendly companion whether you come as a spiritual pilgrim or a curious traveler eager to see Renaissance treasures.'
      ],
      it: [
        'Il Giubileo 2025 accoglie milioni di visitatori da ogni continente. Per rendere ogni visita serena, il Vaticano ha sviluppato una guida digitale moderna.',
        'Tramite l\'app è possibile prenotare l\'ingresso a San Pietro, esplorare percorsi pedonali tra i chiostri nascosti di Roma e ricevere aggiornamenti in tempo reale.',
        'Uno strumento intuitivo e prezioso per ogni viaggiatore desideroso di scoprire i capolavori rinascimentali.'
      ]
    },
    tags: ['Vatican', 'Jubilee 2025', 'Rome', 'Technology', 'Travel App'],
    isSidebarHighlight: true
  },
  {
    id: '11',
    slug: 'italian-fashion-craftsmanship-timeless-elegance',
    categoryKey: 'fashion',
    category: {
      en: 'ITALIAN FASHION',
      it: 'MODA ITALIANA'
    },
    title: {
      en: 'ITALIAN FASHION & SARTORIAL ART: THE SOUL OF MADE IN ITALY',
      it: 'MODA ITALIANA E ARTE SARTORIALE: L\'ANIMA DEL MADE IN ITALY'
    },
    date: {
      en: 'May 25, 2025',
      it: '25 Maggio 2025'
    },
    author: 'Milano Style Desk',
    commentsCount: 0,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Milan & Florence',
      it: 'Milano e Firenze'
    },
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Italian fashion atelier craftsmanship with fine fabrics and leather',
      it: 'Atelier di moda e sartoria italiana con tessuti e pelli pregiate'
    },
    excerpt: {
      en: 'From the leather workshops of Florence to the runway ateliers of Milan, Italian fashion is rooted in an obsession with quality, timeless cut, and natural textiles that feel effortless to wear every day...',
      it: 'Dalle botteghe del cuoio di Firenze agli atelier di Milano, la moda italiana affonda le sue radici nella qualità dei tessuti naturali e in un\'eleganza senza tempo da indossare con naturalezza...'
    },
    emotionalHighlight: {
      en: 'True elegance in Italy is called "Sprezzatura"—a natural grace that makes looking well-dressed seem completely effortless.',
      it: 'La vera eleganza italiana si chiama "Sprezzatura": una grazia spontanea che rende lo stile naturale e senza sforzo.'
    },
    keyTakeaways: {
      en: [
        'Focuses on natural fibers: pure linen for Mediterranean summers, fine merino wool and cashmere for winters.',
        'Handmade leather shoes and bags from Tuscan workshops last a lifetime with proper care.',
        'Milan Fashion Week continues to champion sustainable textile innovation.'
      ],
      it: [
        'Predilezione per fibre naturali: lino fresco per l\'estate e morbido cashmere per l\'inverno.',
        'Pelletteria e calzature artigianali toscane create per durare tutta la vita.',
        'Milano resta la capitale mondiale dello stile e dell\'innovazione tessile sostenibile.'
      ]
    },
    fullStory: {
      en: [
        'When you watch Italians walk along the Corso during the evening passeggiata, you notice a relaxed sense of beauty in the way they dress.',
        'It is never about loud logos. It is about soft linen shirts, supple leather loafers, and coats tailored to fit like a second skin.',
        'Centuries of textile guilds in Biella, Como, and Florence created a culture where making things well with patience and love is considered the highest form of art.'
      ],
      it: [
        'Osservando il passeggio serale lungo il corso delle città italiane, colpisce l\'armonia naturale e il gusto ricercato nel vestire.',
        'Non si tratta di ostentare marchi, ma di scegliere camicie in lino traspirante, scarpe in pelle morbidissima e tagli sartoriali impeccabili.',
        'Una tradizione secolare che celebra la pazienza, la cura del dettaglio e l\'amore per le cose fatte a regola d\'arte.'
      ]
    },
    tags: ['Fashion', 'Milan', 'Made in Italy', 'Leather Craft', 'Style']
  }
];
