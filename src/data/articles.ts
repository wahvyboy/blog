import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    slug: 'brooklyn-sunset-park-de-facto-dump-fire',
    categoryKey: 'news',
    category: {
      en: 'LOCAL NEWS • BROOKLYN',
      it: 'CRONACA LOCALE • BROOKLYN'
    },
    title: {
      en: 'DE FACTO DUMP IN BROOKLYN BURSTS INTO FLAMES AFTER DISCARDED BATTERY EXPLODES',
      it: 'DISCARICA ABUSIVA A BROOKLYN VA A FUOCO DOPO L\'ESPLOSIONE DI UNA BATTERIA AL LITIO'
    },
    date: {
      en: 'September 9, 2026 at 3:22 p.m. ET',
      it: '9 Settembre 2026 alle 15:22'
    },
    author: 'Liam Quigley (Gothamist)',
    commentsCount: 30,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Sunset Park, Brooklyn, NYC',
      it: 'Sunset Park, Brooklyn, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1576400883215-7083980b6197?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'FDNY responding to smoke billowing behind chainlink fence in Brooklyn',
      it: 'Vigili del fuoco di New York (FDNY) intervengono per una colonna di fumo a Brooklyn'
    },
    excerpt: {
      en: 'Neighbors say the trash pile in Sunset Park has been a problem all summer, attracting illegal dumping and rats. On Wednesday afternoon, thick smoke billowed across the neighborhood when an illicit lithium-ion battery ignited the combustible refuse.',
      it: 'I residenti denunciano da mesi la discarica abusiva di Sunset Park a Brooklyn: insetti, topi e immondizia. Mercoledì pomeriggio una densa colonna di fumo nero ha avvolto il quartiere dopo l\'esplosione di una batteria agli ioni di litio gettata tra i rifiuti.'
    },
    emotionalHighlight: {
      en: '"We called 311 sixteen times in July alone. We knew it was a ticking time bomb, and yesterday the entire corner went up in black smoke."',
      it: '"Abbiamo chiamato il 311 sedici volte solo a luglio. Sapevamo che era una bomba a orologeria, e ieri l\'intero incrocio è andato in fumo."'
    },
    keyTakeaways: {
      en: [
        'The unmonitored vacant lot in Sunset Park had accumulated mattresses, e-bike parts, and industrial waste.',
        'FDNY engine companies brought the blaze under control within 45 minutes with no injuries reported.',
        'City Council members are demanding emergency fencing and 24/7 surveillance cameras to stop repeat dumping.'
      ],
      it: [
        'Il lotto incustodito di Sunset Park aveva accumulato materassi, componenti di e-bike e rifiuti industriali.',
        'Le squadre dell\'FDNY hanno domato le fiamme in 45 minuti senza causare feriti.',
        'I consiglieri comunali chiedono recinzioni blindate e telecamere 24/7 per fermare lo scarico abusivo.'
      ]
    },
    fullStory: {
      en: [
        'A sprawling vacant lot in Sunset Park that residents described as a hazardous eyesore erupted in towering black flames on Wednesday afternoon after a discarded lithium-ion battery exploded into a mountain of dry trash.',
        'FDNY officials reported that the fire started around 3:15 p.m. near the intersection of 39th Street and 4th Avenue. Firefighters arrived within four minutes as toxic smoke drifted across residential brownstones and the nearby Gowanus Expressway corridor.',
        '"It smelled like burning plastic and chemicals so intense that we had to seal our windows with damp towels," said Elena Torres, who has lived across the street for twenty-two years. "We filed multiple reports through 311, warned community boards, and begged the Department of Sanitation to intervene. It takes a five-alarm blaze before the city pays attention to our block."',
        'Lithium-ion battery fires have surged across New York City over the past three years, prompting strict new safety standards for micromobility charging and storage. However, unregulated curbside dumping continues to pose severe threats in industrial-adjacent neighborhoods.',
        'Brooklyn Borough President Antonio Reynoso issued a statement urging immediate property lien enforcement: "Private landlords who abandon their parcels to illicit waste carting will face severe daily fines and municipal seizure."'
      ],
      it: [
        'Un vasto terreno abbandonato a Sunset Park, denunciato per mesi dai residenti come pericolo pubblico, è esploso in fiamme mercoledì pomeriggio quando una batteria al litio scartata ha innescato un cumulo di rifiuti infiammabili.',
        'I funzionari dell\'FDNY hanno riferito che il rogo è divampato attorno alle 15:15 all\'incrocio tra la 39ª Strada e la 4ª Avenue. I vigili del fuoco sono intervenuti in meno di quattro minuti mentre il fumo tossico si propagava verso i brownstone residenziali e la Gowanus Expressway.',
        '"C\'era un odore chimico insopportabile e abbiamo dovuto sigillare le finestre con panni umidi", racconta Elena Torres, residente da oltre vent\'anni. "Abbiamo segnalato la discarica decine di volte senza risposte efficaci prima di questo disastro."',
        'Gli incendi da batterie al litio continuano a rappresentare un\'emergenza critica per la sicurezza urbana di New York, spingendo la municipalità a nuove misure restrittive per lo stoccaggio e lo smaltimento.'
      ]
    },
    tags: ['Brooklyn', 'Sunset Park', 'FDNY', 'City News', 'Gothamist'],
    isFeatured: true
  },
  {
    id: '2',
    slug: 'nypd-massive-security-operation-911-jewish-holidays',
    categoryKey: 'news',
    category: {
      en: 'NEWS • PUBLIC SAFETY',
      it: 'NOTIZIE • SICUREZZA PUBBLICA'
    },
    title: {
      en: 'NYPD TO INCREASE PRESENCE FOR 9/11 ANNIVERSARY AND JEWISH HIGH HOLIDAYS',
      it: 'NYPD: MASSICCIO DISPIEGAMENTO DI SICUREZZA PER L\'ANNIVERSARIO DELL\'11 SETTEMBRE E LE FESTIVITÀ EBRAICHE'
    },
    date: {
      en: 'September 10, 2026 at 11:45 a.m. ET',
      it: '10 Settembre 2026 alle 11:45'
    },
    author: 'Catalina Gonella (Gothamist)',
    commentsCount: 18,
    readTime: {
      en: '3 min read',
      it: '3 min di lettura'
    },
    location: {
      en: 'One Police Plaza, Manhattan, NYC',
      it: 'One Police Plaza, Manhattan, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'NYPD official press briefing at One Police Plaza podium',
      it: 'Conferenza stampa NYPD presso One Police Plaza a Manhattan'
    },
    excerpt: {
      en: 'There will be a "massive security operation" in place on Friday, according to NYPD Commissioner Jessica Tisch. Heavily armed Critical Response Command units and bomb-sniffing K-9 patrols are deploying across major transit hubs, synagogues, and the 9/11 Memorial.',
      it: 'Venerdì scatterà una "massiccia operazione di sicurezza" in tutta New York, ha annunciato il Commissario NYPD Jessica Tisch. Unità antiterrorismo armate e squadre cinofile saranno operative nei nodi di trasporto, nelle sinagoghe e al Memoriale dell\'11 settembre.'
    },
    emotionalHighlight: {
      en: '"Our message to all New Yorkers and visitors is absolute: go about your lives with peace of mind. Every precaution is in place to safeguard our sanctuary and city."',
      it: '"Il nostro messaggio a tutti i newyorkesi è chiaro: continuate le vostre vite in serenità. Ogni precauzione è attiva per proteggere i nostri luoghi e la nostra città."'
    },
    keyTakeaways: {
      en: [
        'NYPD Commissioner Jessica Tisch outlined borough-wide mobilization covering Grand Central, Penn Station, and Lower Manhattan.',
        'High-visibility uniformed patrols will be bolstered by plainclothes intelligence officers.',
        'No specific credible threats have been detected; the posture is proactive and precautionary.'
      ],
      it: [
        'Il Commissario Jessica Tisch ha disposto una mobilitazione capillare tra Grand Central, Penn Station e Lower Manhattan.',
        'I pattugliamenti visibili saranno affiancati da agenti in borghese dei reparti d\'intelligence.',
        'Non sono state rilevate minacce imminenti; si tratta di un dispositivo di massima prevenzione.'
      ]
    },
    fullStory: {
      en: [
        'Standing before reporters at NYPD Headquarters, Police Commissioner Jessica Tisch announced a sweeping, multi-agency security deployment across the five boroughs ahead of the September 11 remembrance ceremonies and the impending Jewish High Holy Days.',
        '"You will see a heavy presence of our Critical Response Command, Strategic Response Group, and specialized explosive detection teams at mass transit terminals, crowded commercial corridors, and houses of worship," Tisch stated.',
        'Aviation units will conduct persistent aerial patrols along the East River and Hudson waterways, while harbor craft secure ferry terminals from Staten Island to Midtown Manhattan.',
        'Community liaison leaders commended the proactive coordination with faith-based organizations across Crown Heights, the Upper West Side, and Riverdale, ensuring that congregations can observe sacred services in safety.'
      ],
      it: [
        'Durante un punto stampa al quartier generale della polizia di New York, il Commissario Jessica Tisch ha annunciato un piano di sicurezza straordinario che interesserà tutti i cinque distretti della metropoli.',
        'Pattuglie della Critical Response Command, elicotteri di perlustrazione sui fiumi Hudson ed East River e motovedette nei porti garantiranno la massima tutela durante le commemorazioni al World Trade Center e le festività religiose.',
        'Le autorità hanno confermato che non esistono minacce specifiche e credibili, ma la presenza delle forze dell\'ordine sarà visibile e costante.'
      ]
    },
    tags: ['NYPD', 'Manhattan', 'Public Safety', 'City Hall', 'Gothamist'],
    isFeatured: true
  },
  {
    id: '3',
    slug: 'gov-hochul-childcare-uber-initiative',
    categoryKey: 'news',
    category: {
      en: 'POLITICS • CITY & STATE',
      it: 'POLITICA • STATO DI NEW YORK'
    },
    title: {
      en: 'CUTE KIDS FOR NEW YORK GOV. HOCHUL, COURTESY OF UBER',
      it: 'LA GOVERNATRICE HOCHUL TRA I BAMBINI: IL NUOVO PIANO DI TRASPORTO INFANZIA CON UBER'
    },
    date: {
      en: 'September 8, 2026 at 2:10 p.m. ET',
      it: '8 Settembre 2026 alle 14:10'
    },
    author: 'Jon Campbell (Gothamist)',
    commentsCount: 14,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Midtown Manhattan, NYC',
      it: 'Midtown Manhattan, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'New York City governor speaking at community center podium',
      it: 'Conferenza governativa a Midtown Manhattan sui servizi per le famiglie'
    },
    excerpt: {
      en: 'At a carefully staged Midtown Manhattan press conference flanked by toddlers and shiny balloons, Gov. Kathy Hochul touted a new public-private ride subsidy program backed by Uber for working parents facing transit deserts.',
      it: 'In una colorata conferenza stampa a Midtown Manhattan tra palloncini e famiglie, la governatrice Kathy Hochul ha presentato una partnership con Uber per sovvenzionare le corse dei genitori che vivono nei quartieri meno collegati dalla metropolitana.'
    },
    emotionalHighlight: {
      en: '"For a single mother in the East Bronx working night shifts, missing a bus connection can mean losing a job. This pilot helps bridge the transit gap."',
      it: '"Per una madre sola nel Bronx che fa turni di notte, perdere una coincidenza del bus può significare perdere il lavoro. Questo progetto colma il vuoto dei trasporti."'
    },
    keyTakeaways: {
      en: [
        'The $12 million pilot covers subsidized rides for registered daycare parents in outer-borough transit deserts.',
        'Uber is providing matching ride credits alongside New York State Department of Social Services funding.',
        'Critics question whether public dollars should subsidize private ride-hailing app conglomerates instead of MTA bus expansion.'
      ],
      it: [
        'Il progetto pilota da 12 milioni di dollari finanzia corse agevolate per i genitori nei quartieri periferici.',
        'Uber contribuisce con crediti corsa equivalenti accanto ai fondi dei servizi sociali statali.',
        'Le opposizioni contestano l\'uso di fondi pubblici verso app private anziché per potenziare la rete bus MTA.'
      ]
    },
    fullStory: {
      en: [
        'Governor Kathy Hochul gathered with union organizers, parents, and executives from Uber at a Midtown community center to unveil the "Family Transit Connect" initiative.',
        'Under the program, low-income families enrolled in state-assisted daycare programs in transit deserts—areas where subways are more than a 20-minute walk away—will receive monthly transportation stipends.',
        'While parents in attendance praised the immediate relief, transit advocacy coalitions argued that investing directly into MTA rapid bus lanes and frequency upgrades represents a more sustainable long-term solution for working New Yorkers.'
      ],
      it: [
        'La governatrice Kathy Hochul ha presentato l\'iniziativa "Family Transit Connect", offrendo voucher di viaggio a famiglie a basso reddito residenti in zone periferiche mal servite dai mezzi pubblici.',
        'L\'iniziativa ha suscitato reazioni contrastanti: apprezzata dalle famiglie beneficiarie, ma criticata dalle associazioni per il trasporto pubblico che chiedono maggiori investimenti diretti nella rete metropolitana e bus MTA.'
      ]
    },
    tags: ['Albany', 'Hochul', 'Transit', 'Uber', 'Gothamist']
  },
  {
    id: '4',
    slug: 'nyc-911-document-release-federal-benefits-expansion',
    categoryKey: 'news',
    category: {
      en: 'INVESTIGATION • HEALTHCARE',
      it: 'INCHIESTA • SANITÀ PUBBLICA'
    },
    title: {
      en: 'NYC\'S 9/11 DOCUMENT RELEASE COULD EXPAND NUMBER OF PEOPLE RECEIVING FEDERAL BENEFITS',
      it: 'DOCUMENTI INEDITI SULL\'11 SETTEMBRE: SI AMPLIA IL NUMERO DEI BENEFICIARI SANITARI FEDERALI'
    },
    date: {
      en: 'September 9, 2026 at 9:05 a.m. ET',
      it: '9 Settembre 2026 alle 09:05'
    },
    author: 'Brigid Bergin (Gothamist)',
    commentsCount: 22,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Lower Manhattan, NYC',
      it: 'Lower Manhattan, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Lower Manhattan skyline near Ground Zero memorial and World Trade Center',
      it: 'Skyline di Lower Manhattan e area del World Trade Center'
    },
    excerpt: {
      en: 'A newly declassified cache of municipal environmental testing records and dispatch logs from Lower Manhattan could unlock long-delayed World Trade Center Health Program compensation for thousands of downtown residents, students, and cleanup workers.',
      it: 'Una serie di documenti e analisi ambientali desecretati dal comune di New York apre la strada all\'estensione delle tutele sanitarie federali per migliaia di residenti e lavoratori esposti alle polveri tossiche a Lower Manhattan.'
    },
    emotionalHighlight: {
      en: '"For twenty-five years we were told the air was safe to breathe. These records prove the city knew the plume extended far deeper into Chinatown and the Lower East Side."',
      it: '"Per venticinque anni ci hanno ripetuto che l\'aria era respirabile. Questi documenti provano che la nube tossica ha colpito duramente anche Chinatown e il Lower East Side."'
    },
    keyTakeaways: {
      en: [
        'Over 14,000 pages of air quality surveys and municipal work orders were published online by the Department of Records.',
        'Attorneys say the documents establish residency and employment proof for previously rejected medical claims.',
        'Congressional leaders are preparing legislation to permanently fund the World Trade Center Health Program.'
      ],
      it: [
        'Oltre 14.000 pagine di rilevamenti dell\'aria sono state caricate online dal Dipartimento degli Archivi.',
        'Gli avvocati ritengono che i registri consentiranno la riapertura di migliaia di pratiche di risarcimento respinte.',
        'Al Congresso si lavora a una proroga definitiva dei fondi dedicati alle cure dei sopravvissuti.'
      ]
    },
    fullStory: {
      en: [
        'In an unprecedented archival release ahead of the 25th anniversary of September 11, the New York City Department of Records has uploaded over fourteen thousand pages of previously confidential internal communications and air sample maps.',
        'The materials document the precise boundaries and chemical density of toxic asbestos, pulverized concrete, and heavy metals that blanketed Lower Manhattan below Canal Street in the autumn of 2001.',
        'Advocates for downtown public school alumni and Chinatown garment workers hailed the release as a watershed moment for victims who have struggled to prove eligibility for the federal Victim Compensation Fund.'
      ],
      it: [
        'A ridosso del venticinquesimo anniversario dell\'11 settembre, l\'archivio storico municipale ha reso pubblici migliaia di fascicoli e mappe sulle polveri tossiche che hanno contaminato Lower Manhattan.',
        'La pubblicazione rappresenta un momento decisivo per tanti ex studenti e residenti di Chinatown e TriBeCa che lottano per ottenere il riconoscimento delle patologie respiratorie.'
      ]
    },
    tags: ['Lower Manhattan', '9/11', 'Healthcare', 'Investigation', 'Gothamist']
  },
  {
    id: '5',
    slug: 'third-arrest-crown-heights-hookah-lounge-shooting',
    categoryKey: 'news',
    category: {
      en: 'BREAKING • CRIMINAL JUSTICE',
      it: 'ULTIM\'ORA • GIUSTIZIA'
    },
    title: {
      en: 'THIRD ARREST MADE IN CROWN HEIGHTS HOOKAH LOUNGE MASS SHOOTING, NYPD SAYS',
      it: 'TERZO ARRESTO PER LA SPARATORIA NEL LOCALE DI CROWN HEIGHTS A BROOKLYN'
    },
    date: {
      en: 'September 7, 2026 at 6:40 p.m. ET',
      it: '7 Settembre 2026 alle 18:40'
    },
    author: 'Giulia Heyward (Gothamist)',
    commentsCount: 9,
    readTime: {
      en: '3 min read',
      it: '3 min di lettura'
    },
    location: {
      en: 'Crown Heights, Brooklyn, NYC',
      it: 'Crown Heights, Brooklyn, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Brooklyn residential block in Crown Heights with classic stone architecture',
      it: 'Palazzi d\'epoca lungo Nostrand Avenue a Crown Heights, Brooklyn'
    },
    excerpt: {
      en: 'Detectives in Brooklyn have taken a 24-year-old suspect into custody in connection with the late-night shooting at an unlicensed Nostrand Avenue lounge, bringing an end to an intense three-week manhunt.',
      it: 'La squadra investigativa di Brooklyn ha arrestato un ventiquattrenne collegato alla violenta sparatoria avvenuta in un locale notturno su Nostrand Avenue, concludendo tre settimane di serrate indagini.'
    },
    emotionalHighlight: {
      en: '"Our neighborhood wants peace and safe streets for our children. Every time illegal firearms enter our corridors, families suffer."',
      it: '"Il nostro quartiere vuole solo tranquillità e strade sicure per i nostri figli. Ogni arma illegale semina dolore tra le nostre famiglie."'
    },
    keyTakeaways: {
      en: [
        'The suspect was apprehended without incident in Queens by the NYPD Warrant Squad.',
        'Charges include second-degree attempted murder and criminal possession of a weapon.',
        'City agencies have padlocked the unlicensed lounge under nuisance abatement codes.'
      ],
      it: [
        'Il sospettato è stato fermato nel Queens dagli agenti della sezione catturandi dell\'NYPD.',
        'Le accuse contestate sono tentato omicidio di secondo grado e possesso illegale di arma da fuoco.',
        'Il locale abusivo è stato posto sotto sequestro giudiziario permanente.'
      ]
    },
    fullStory: {
      en: [
        'The NYPD announced the apprehension of the third and final suspect wanted in connection with an August shooting outside a crowded Crown Heights social venue.',
        'Investigators utilized license plate reader cameras and security footage from surrounding corner bodegas to track the getaway vehicle across borough lines.',
        'Crown Heights community leaders gathered on Nostrand Avenue to call for greater support for youth violence interrupters and stricter enforcement against illegal after-hours clubs operating without liquor permits.'
      ],
      it: [
        'La polizia di New York ha confermato l\'arresto dell\'ultimo ricercato per la sparatoria di agosto a Crown Heights.',
        'Le telecamere di sorveglianza delle attività commerciali hanno permesso di ricostruire la via di fuga verso il Queens.',
        'I comitati di quartiere hanno rinnovato l\'appello alla chiusura definitiva degli spazi abusivi.'
      ]
    },
    tags: ['Crown Heights', 'Brooklyn', 'NYPD', 'Investigation', 'Gothamist']
  },
  {
    id: '6',
    slug: 'carnegie-deli-return-pastrami-manhattan-renaissance',
    categoryKey: 'food',
    category: {
      en: 'FOOD & DINING • GRUB STREET',
      it: 'CUCINA & RISTORANTI • GRUB STREET'
    },
    title: {
      en: 'THE PASTRAMI PILGRIMAGE: CARNEGIE DELI’S POP-UP AND NYC\'S OLD-SCHOOL APPETIZING REVIVAL',
      it: 'IL RITORNO DEL PASTRAMI: IL POP-UP DI CARNEGIE DELI E IL RINASCIMENTO DEI DELI STORICI A MANHATTAN'
    },
    date: {
      en: 'September 10, 2026 at 1:00 p.m. ET',
      it: '10 Settembre 2026 alle 13:00'
    },
    author: 'Adam Platt (Grub Street)',
    commentsCount: 42,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Midtown & Lower East Side, Manhattan',
      it: 'Midtown e Lower East Side, Manhattan'
    },
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Classic hot pastrami sandwich piled high on rye bread with spicy mustard',
      it: 'Tradizionale panino al pastrami su pane di segale con senape e cetriolini'
    },
    excerpt: {
      en: 'Seven-inch-high cured brisket, sour dill pickles, and warm seedless rye: why food lovers and nostalgic New Yorkers are lining up around Midtown blocks as Jewish deli traditions experience an electrifying contemporary revival.',
      it: 'Strati monumentali di punta di petto affumicata al pepe, senape speziata e cetrioli sottaceto: New York riscopre l\'amore viscerale per i suoi storici deli ebrei, tra il leggendario Katz\'s e il pop-up evento di Carnegie Deli.'
    },
    emotionalHighlight: {
      en: '"A bite of steaming, pepper-crusted pastrami on caraway rye isn’t just lunch in New York—it is an unbroken lineage of immigrant grit, warmth, and culinary swagger."',
      it: '"Un morso a un pastrami fumante con crosta di pepe nero non è un semplice pranzo: è la storia viva dell\'immigrazione, della resilienza e dell\'orgoglio newyorkese."'
    },
    keyTakeaways: {
      en: [
        'Carnegie Deli’s limited Midtown pop-up served over 2,000 colossal pastrami sandwiches in its opening weekend.',
        'Lower East Side icons like Katz’s Delicatessen and Russ & Daughters report record multigenerational patronage.',
        'A new cohort of young Brooklyn and Manhattan chefs is embracing traditional curing and wood-smoking techniques.'
      ],
      it: [
        'Il pop-up di Carnegie Deli a Midtown ha venduto oltre duemila panini nel primo weekend di riapertura.',
        'Monumenti del Lower East Side come Katz\'s e Russ & Daughters registrano un afflusso record di giovani generazioni.',
        'Nuovi chef a Brooklyn reinterpretano l\'antica arte della salamoia e dell\'affumicatura artigianale.'
      ]
    },
    fullStory: {
      en: [
        'Few sights capture the brazen appetite of New York City quite like a towering sandwich of hot pastrami cut thick by a veteran counterman in a paper garrison cap.',
        'When Carnegie Deli closed its historic Seventh Avenue doors in 2016, a piece of old Broadway vanished. But this week’s pop-up opening proved that the city’s appetite for fatty brisket and nostalgic comfort food is more ferocious than ever.',
        'Lines snaked around 57th Street as early as 10 a.m. Tourists rubbed shoulders with Broadway stagehands and Wall Street analysts, united by the irresistible aroma of coriander, peppercorns, and garlicky brine.',
        'At the Lower East Side’s Katz’s Delicatessen, owner Jake Dell notes that the thirst for authentic, artisanal comfort food represents a pushback against hyper-processed fast casual chains: "You cannot fake thirty days of curing and seventy-two hours of hardwood smoke. In New York, the meat tells the truth."'
      ],
      it: [
        'Pochi piatti incarnano l\'anima generosa di New York come un pastrami tagliato al coltello da maestri salumieri che lavorano dietro banconi d\'acciaio inossidabile.',
        'Dalla leggendaria atmosfera di Houston Street fino ai nuovi laboratori artigianali di Williamsburg, il rito del panino su pane di segale unisce generazioni di newyorkesi in cerca di sapori autentici e senza compromessi.'
      ]
    },
    tags: ['Grub Street', 'Food & Dining', 'Manhattan', 'Pastrami', 'Carnegie Deli']
  },
  {
    id: '7',
    slug: 'secrets-of-the-chrysler-building-cloud-club-m42',
    categoryKey: 'culture',
    category: {
      en: 'SECRETS & ARCHITECTURE • UNTAPPED NY',
      it: 'SEGRETI & ARCHITETTURA • UNTAPPED NY'
    },
    title: {
      en: 'SECRETS OF THE CHRYSLER BUILDING: THE LOST CLOUD CLUB AND GRAND CENTRAL\'S SUB-BASEMENT M42',
      it: 'I SEGRETI DEL CHRYSLER BUILDING: L\'ANTICO CLOUD CLUB E IL SOTTERRANEO SEGRETO M42'
    },
    date: {
      en: 'September 6, 2026 at 4:15 p.m. ET',
      it: '6 Settembre 2026 alle 16:15'
    },
    author: 'Michelle Young (Untapped New York)',
    commentsCount: 27,
    readTime: {
      en: '6 min read',
      it: '6 min di lettura'
    },
    location: {
      en: 'Grand Central & 42nd St, Manhattan',
      it: 'Grand Central & 42ª Strada, Manhattan'
    },
    imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'The gleaming Art Deco stainless steel spire of the Chrysler Building in New York',
      it: 'La guglia Art Déco in acciaio inossidabile del Chrysler Building a New York'
    },
    excerpt: {
      en: 'High above Lexington Avenue sits the forgotten Art Deco glory of the Cloud Club, while ten stories below track level lies M42—the subterranean power station that was once Adolf Hitler\'s classified sabotage target during World War II.',
      it: 'In cima alla guglia Art Déco del Chrysler Building sopravvivono le sale abbandonate del Cloud Club degli anni \'30, mentre dieci piani sotto i binari di Grand Central si cela M42, la centrale elettrica segreta che alimentava l\'intera rete ferroviaria.'
    },
    emotionalHighlight: {
      en: '"New York is built in layers: you walk over secret catacombs in the morning and gaze up at soaring steel eagles that touched the clouds before the rest of the world caught up."',
      it: '"New York è costruita a strati: cammini sopra catacombe industriali la mattina e alzi lo sguardo verso aquile d\'acciaio che sfidano le nuvole da quasi un secolo."'
    },
    keyTakeaways: {
      en: [
        'The Cloud Club occupied floors 66 through 68 as a Prohibition-era private retreat for automotive titans and Walter Chrysler.',
        'The sub-basement M42 beneath Grand Central Terminal was omitted from city blueprints for decades to protect regional train power.',
        'Architectural tours reveal hidden hubcap gargoyles and radiator-cap eagles adorning the iconic tower’s setbacks.'
      ],
      it: [
        'Il Cloud Club occupava i piani dal 66 al 68 come ritrovo esclusivo di magnati dell\'industria automobilistica.',
        'La sottostazione M42 sotto Grand Central è rimasta assente dalle mappe ufficiali per proteggere le linee ferroviarie strategiche.',
        'I doccioni dell\'edificio riproducono fedelmente tappi del radiatore e dettagli meccanici delle auto Chrysler del 1929.'
      ]
    },
    fullStory: {
      en: [
        'There are buildings that define a skyline, and then there is the Chrysler Building—William Van Alen’s sunburst monument to American audacity and Art Deco elegance.',
        'Yet few passersby gazing up at its gleaming Nirosta steel crown realize that between floors 66 and 68 lies a ghost world: the Cloud Club. Opened in 1930 during the depths of the Great Depression, it featured private dining rooms adorned in etched glass, marble humidor vaults, and a hidden spiral staircase leading to Walter Chrysler’s personal suite.',
        'Just blocks away, hidden ten stories underneath the bustling concourse of Grand Central Terminal, lies an even more guarded urban secret: Substation M42. During World War II, German operatives landed on Long Island with orders to pour sand into its rotary converters—a plot foiled by the FBI that would have paralyzed troop transport along the East Coast.',
        'Today, both spaces stand as monumental reminders of New York City’s subterranean and stratospheric heritage.'
      ],
      it: [
        'Il Chrysler Building continua a incantare il mondo con la sua corona d\'acciaio Nirosta scintillante nel cielo di Manhattan.',
        'Al suo interno, il leggendario Cloud Club conserva saloni d\'epoca con caminetti in marmo e soffitti affrescati, testimoni del periodo d\'oro del jazz e del proibizionismo.',
        'Poco distante, sotto Grand Central Terminal, la storica sala macchine M42 custodisce i convertitori rotanti che hanno fatto la storia delle ferrovie americane.'
      ]
    },
    tags: ['Untapped New York', 'Chrysler Building', 'Architecture', 'Hidden NYC', 'Grand Central']
  },
  {
    id: '8',
    slug: 'the-350-wagyu-burger-phenomenon-bushwick',
    categoryKey: 'lifestyle',
    category: {
      en: 'CULTURE & STREET LIFE • HELL GATE',
      it: 'CULTURA & VITA DI STRADA • HELL GATE'
    },
    title: {
      en: 'THE $3.50 WAGYU BURGER PHENOMENON AND THE CHANGING SOUL OF BUSHWICK',
      it: 'IL FENOMENO DEL BURGER WAGYU DA $3.50 E L\'ANIMA IN EVOLUZIONE DI BUSHWICK'
    },
    date: {
      en: 'September 5, 2026 at 5:00 p.m. ET',
      it: '5 Settembre 2026 alle 17:00'
    },
    author: 'Nick Pinto (Hell Gate)',
    commentsCount: 36,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Bushwick, Brooklyn, NYC',
      it: 'Bushwick, Brooklyn, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Vibrant street art and industrial brick lofts along Flushing Avenue in Bushwick',
      it: 'Murales e loft industriali lungo le strade artistiche di Bushwick a Brooklyn'
    },
    excerpt: {
      en: 'Between spray-painted textile factories and late-night music lofts, an unassuming walk-up window on Flushing Avenue is serving pristine American cheese smashburgers for subway-fare prices—sparking long lines and fierce neighborhood debate.',
      it: 'Tra capannoni industriali riconvertiti e gallerie d\'arte sotterranee, una finestrella su Flushing Avenue propone smashburger a prezzi popolari, accendendo il dibattito sulla trasformazione urbana di Brooklyn.'
    },
    emotionalHighlight: {
      en: '"In an era where a latte costs nine dollars in Manhattan, eating a hot, crispy-edged burger on a Brooklyn curb with your friends feels like an act of joyful defiance."',
      it: '"In un\'epoca in cui a Manhattan un cappuccino costa nove dollari, mangiare un burger sfrigolante sul marciapiede con gli amici ha il sapore di una gioiosa resistenza."'
    },
    keyTakeaways: {
      en: [
        'The tiny counter-service kiosk sells out its 600-patty daily limit within three hours of opening.',
        'Longtime Latinx residents and arriving art students mingle in a neighborhood navigating commercial rent spikes.',
        'The spot illustrates how hyper-affordable street food still thrives in pockets of working-class Brooklyn.'
      ],
      it: [
        'Il piccolo chiosco esaurisce le seicento porzioni quotidiane in meno di tre ore.',
        'Residenti storici e giovani artisti si incontrano in un quartiere che affronta forti aumenti degli affitti.',
        'La formula dimostra che lo street food ad alto valore e costo accessibile è ancora il cuore pulsante di Brooklyn.'
      ]
    },
    fullStory: {
      en: [
        'On an industrial stretch of Flushing Avenue where the rumble of the J train echoes off corrugated iron, a neon red arrow points to a stainless steel window no wider than an ATM.',
        'Here, two line cooks in black aprons press Wagyu trim patties onto a searing 500-degree flat top until the edges lace into paper-thin, mahogany crisps. Tucked inside a squishy Martin\'s potato roll with dill pickles and house-made special sauce, the burger sells for just $3.50.',
        'In a city where dining out has increasingly become an exercise in spreadsheet calculations, the spot has become an instant cultural phenomenon.',
        'Yet the lines also reflect Bushwick’s complex evolution: old-school garment workers sharing sidewalks with techno producers, all searching for an honest bite in an ever-shifting metropolis.'
      ],
      it: [
        'Lungo Flushing Avenue, sotto le rotaie sopraelevate della linea J, un piccolo sportello d\'acciaio attira centinaia di appassionati di street food.',
        'Carne di prima scelta pressata sulla piastra rovente, bordi croccanti e pane morbidissimo a un prezzo inferiore a una corsa in taxi: Bushwick dimostra come la cucina informale riesca ancora a creare comunità spontanee sui marciapiedi di New York.'
      ]
    },
    tags: ['Hell Gate', 'Bushwick', 'Brooklyn', 'Street Food', 'Culture']
  },
  {
    id: '9',
    slug: 'avenue-b-bike-boulevard-east-village-corners',
    categoryKey: 'destinations',
    category: {
      en: 'NEIGHBORHOODS • EV GRIEVE',
      it: 'QUARTIERI • EV GRIEVE'
    },
    title: {
      en: 'AVENUE B\'S NEW BIKE BOULEVARD AND THE BATTLE FOR THE EAST VILLAGE’S HISTORIC CORNERS',
      it: 'LA NUOVA PISTA CICLABILE DI AVENUE B E LA RESISTENZA DEGLI INCROCI STORICI DELL\'EAST VILLAGE'
    },
    date: {
      en: 'September 4, 2026 at 10:15 a.m. ET',
      it: '4 Settembre 2026 alle 10:15'
    },
    author: 'Grieve Staff (EV Grieve)',
    commentsCount: 51,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'East Village & Alphabet City, Manhattan',
      it: 'East Village & Alphabet City, Manhattan'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Charming East Village avenue lined with tenements and leafy green trees',
      it: 'Palazzi storici in mattoni rossi e scale antincendio nell\'East Village a Manhattan'
    },
    excerpt: {
      en: 'As the Department of Transportation rolls out traffic-calming green paint and pedestrian islands along Avenue B, Alphabet City residents gather to safeguard community gardens, historic church facades, and beloved neighborhood dives.',
      it: 'Mentre il comune introduce nuove isole pedonali e corsie ciclabili su Avenue B, gli abitanti di Alphabet City si mobilitano per difendere gli orti urbani comunitari e i caffè storici dall\'omologazione commerciale.'
    },
    emotionalHighlight: {
      en: '"Alphabet City has always been the rebellious heart of downtown Manhattan. You can change the asphalt, but you can’t pave over the soul of Tompkins Square Park."',
      it: '"Alphabet City è da sempre il cuore ribelle di Manhattan. Puoi riverniciare l\'asfalto, ma non puoi cancellare l\'anima di Tompkins Square Park."'
    },
    keyTakeaways: {
      en: [
        'Avenue B from 14th Street to Houston is receiving protected pedestrian curb extensions and signal priority.',
        'Residents celebrate the survival of community spaces like 6thBC Garden and Most Holy Redeemer Church.',
        'Commercial vacancies along Avenue A and B show gradual stabilization with new indie bookstores and cafes.'
      ],
      it: [
        'Il tratto di Avenue B tra la 14ª Strada e Houston Street beneficia di marciapiedi allargati e maggiore sicurezza.',
        'I residenti festeggiano la tutela di spazi verdi comunitari come il giardino 6thBC.',
        'I negozi di quartiere registrano una graduale ripresa con librerie indipendenti e torrefazioni artigianali.'
      ]
    },
    fullStory: {
      en: [
        'Workers with the Department of Transportation spent the morning laying down bright green thermoplastic markers along Avenue B, officially designating the corridor as the East Village’s premier east-west bicycle thoroughfare.',
        'From Tompkins Square Park down to East Houston Street, the streetscape is experiencing one of its most substantial transformations in two decades.',
        'For longtime residents who remember the punk rock clubs, community garden occupations, and bodega chess games of the 1980s and 90s, the physical calming of Avenue B is met with bittersweet nostalgia.',
        '"It is certainly safer for cyclists and toddlers walking to the playground," remarked Marcus Vance, sitting outside a local cafe. "The real challenge is making sure the rent-stabilized artists and families who built this neighborhood can afford to stay and enjoy the shade."'
      ],
      it: [
        'L\'East Village continua a ridefinire il proprio spazio pubblico tra innovazione della viabilità e salvaguardia della memoria storica.',
        'Lungo Avenue B, le nuove corsie protette convivono con i murales dedicati ai pionieri della musica punk e le facciate in mattoni rossi con le tipiche scale d\'emergenza.',
        'I comitati locali insistono sull\'importanza di tutelare botteghe storiche e spazi verdi comunitari che rendono unico questo angolo di Manhattan.'
      ]
    },
    tags: ['EV Grieve', 'East Village', 'Alphabet City', 'Manhattan', 'Neighborhoods'],
    isSidebarHighlight: true
  },
  {
    id: '10',
    slug: 'brownstone-renaissance-bed-stuy-park-slope',
    categoryKey: 'real-estate',
    category: {
      en: 'REAL ESTATE • CURBED & BROWNSTONER',
      it: 'IMMOBILIARE • CURBED & BROWNSTONER'
    },
    title: {
      en: 'THE BROWNSTONE RENAISSANCE: INSIDE BED-STUY & PARK SLOPE’S HISTORIC LIMESTONE RESTORATIONS',
      it: 'IL RINASCIMENTO DEI BROWNSTONE: IL RESTAURO DEI PALAZZI STORICI A BED-STUY E PARK SLOPE'
    },
    date: {
      en: 'September 3, 2026 at 11:00 a.m. ET',
      it: '3 Settembre 2026 alle 11:00'
    },
    author: 'Cate Corcoran (Brownstoner)',
    commentsCount: 45,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Bedford-Stuyvesant & Park Slope, Brooklyn',
      it: 'Bedford-Stuyvesant e Park Slope, Brooklyn'
    },
    imageUrl: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Classic tree-lined Brooklyn brownstone street with historic limestone stoops',
      it: 'Fila di storici brownstone alberati con gradinate in pietra arenaria a Brooklyn'
    },
    excerpt: {
      en: 'Hand-carved mahogany pocket doors, pier mirrors, and intricate plaster rosettes: how modern preservationists and multi-generational Brooklyn families are navigating landmark regulations to restore 19th-century townhouse majesty.',
      it: 'Porte scorrevoli in mogano intagliato a mano, caminetti originali in marmo e soffitti affrescati: come le famiglie di Brooklyn e i restauratori tutelano l\'inestimabile patrimonio architettonico dei brownstone ottocenteschi.'
    },
    emotionalHighlight: {
      en: '"Sitting on a Brooklyn brownstone stoop on a warm September evening while the street trees whisper in the wind is the closest thing to heaven New York has to offer."',
      it: '"Sedersi sulle gradinate in pietra di un brownstone in una sera di fine estate, mentre gli alberi frusciano nella brezza, è l\'esperienza più autentica che New York possa regalare."'
    },
    keyTakeaways: {
      en: [
        'Restoration of original woodwork and brownstone masonry stoops requires rigorous Landmarks Preservation Commission approvals.',
        'Bed-Stuy has seen a surge in multi-family townhouses sensitively converted into energy-efficient, historic homes.',
        'Demand for authentic, intact 1880s-1900s details continues to command premium valuations in prime Brooklyn neighborhoods.'
      ],
      it: [
        'Il restauro delle facciate e delle gradinate in pietra arenaria richiede rigidi permessi della commissione monumenti storici.',
        'A Bed-Stuy cresce il numero di immobili d\'epoca riqualificati preservando boiserie originali ed efficienza energetica.',
        'Il fascino dei dettagli di fine Ottocento mantiene altissimo l\'interesse del mercato residenziale di prestigio.'
      ]
    },
    fullStory: {
      en: [
        'Walk down Hancock Street in Bedford-Stuyvesant or 8th Avenue in Park Slope, and you are immediately immersed in one of the world\'s greatest open-air architectural museums.',
        'Built in the late 19th century from New Jersey Triassic brown sandstone and Indiana limestone, these townhouses represent the pinnacle of Gilded Age craftsmanship.',
        'Inside a landmarked 1892 Renaissance Revival rowhouse, architectural conservator David Henderson points to the restored pier glass mirror standing twelve feet tall in the front parlor: "Underneath seven layers of latex paint, we discovered quarter-sawn white oak with the master carpenter’s pencil signature still visible from November 1892."',
        'Beyond cosmetic beauty, modern brownstone owners are pioneering geothermal heating and passive-house insulation techniques behind historic brick shells, marrying 19th-century romance with 21st-century sustainability.'
      ],
      it: [
        'Passeggiando tra Hancock Street a Bed-Stuy e l\'8ª Avenue a Park Slope si entra in uno spettacolare museo architettonico a cielo aperto.',
        'Edificati alla fine dell\'Ottocento in pietra arenaria e calcare, i brownstone rappresentano l\'apice dell\'artigianato dell\'epoca dorata newyorkese.',
        'Oggi i proprietari combinano il restauro filologico di stucchi e vetrate istoriate con impianti geotermici e isolamenti termici avanzati, unendo memoria e futuro.'
      ]
    },
    tags: ['Brownstoner', 'Curbed', 'Real Estate', 'Bed-Stuy', 'Park Slope'],
    isSidebarHighlight: true
  },
  {
    id: '11',
    slug: 'central-park-ramble-wildlife-sanctuary-secret-streams',
    categoryKey: 'culture',
    category: {
      en: 'SECRETS & NATURE • WEST SIDE RAG',
      it: 'SEGRETI & NATURA • WEST SIDE RAG'
    },
    title: {
      en: 'THE SECRET WILDERNESS: INSIDE THE RESTORATION OF CENTRAL PARK’S HISTORIC RAMBLE & WATERWAYS',
      it: 'LA FORESTA SEGRETA: IL RESTAURO DELLO STORICO RAMBLE E DEI RUSCELLI DI CENTRAL PARK'
    },
    date: {
      en: 'September 11, 2026 at 9:15 a.m. ET',
      it: '11 Settembre 2026 alle 09:15'
    },
    author: 'Carol Tannenhauser (West Side Rag)',
    commentsCount: 38,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'The Ramble & 79th St Traverse, Central Park, Manhattan',
      it: 'The Ramble, Central Park, Manhattan'
    },
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Lush green foliage and stone bridges over streams in Central Park Ramble',
      it: 'Ponti in pietra e ruscelli immersi nella vegetazione del Ramble a Central Park'
    },
    excerpt: {
      en: 'Designed by Frederick Law Olmsted and Calvert Vaux as a 36-acre "wild garden," the labyrinthine Ramble has undergone a delicate hydrological restoration—reopening hidden rock gorges, cedar bridges, and bird-watching sanctuaries.',
      it: 'Progettato da Frederick Law Olmsted come oasi selvaggia nel cuore di Manhattan, il labirintico Ramble riapre dopo un meticoloso restauro idrico e paesaggistico: ruscelli nascosti, ponticelli in cedro e rifugi per uccelli migratori.'
    },
    emotionalHighlight: {
      en: '"You step through the rustic oak arbor into the Ramble, and within twenty paces, the siren horns and concrete sirens of Manhattan evaporate into the trickle of freshwater springs."',
      it: '"Attraversi l\'archetto di quercia ed entri nel Ramble: venti passi e il frastuono di clacson e sirene di Manhattan scompare nel mormorio delle sorgenti naturali."'
    },
    keyTakeaways: {
      en: [
        'The Central Park Conservancy dredged and revitalized the historic Gill stream system using closed-loop recirculated spring water.',
        'Over 230 bird species pass through the Ramble during autumn Atlantic flyway migrations.',
        'Hand-chiseled Manhattan schist stone paths have been repaved to maintain historic 1859 textures while improving accessibility.'
      ],
      it: [
        'La Central Park Conservancy ha bonificato e riattivato il sistema di ruscelli "The Gill" con ricircolo idrico sostenibile.',
        'Oltre 230 specie di uccelli sostano nel Ramble durante le migrazioni autunnali lungo la rotta atlantica.',
        'I sentieri in scisto di Manhattan sono stati restaurati preservando l\'aspetto originale del 1859.'
      ]
    },
    fullStory: {
      en: [
        'When Frederick Law Olmsted envisioned Central Park in 1858, his greatest fear was that the park would become an orderly, domesticated Victorian garden devoid of romantic mystery.',
        'His countermeasure was The Ramble: thirty-six heavily wooded acres of winding pathways, deliberate blind turns, cascading rocky brooks, and native glacial erratics placed so carefully that visitors would forget civilization was mere blocks away.',
        'This week, conservators completed a three-year ecological overhaul of The Gill, the serpentine stream that winds through the heart of the sanctuary before tumbling into the Lake.',
        'Master stone masons rebuilt 19th-century boulder weirs by hand, ensuring that water flows at the exact cadence necessary to support native warblers, red-tailed hawks, and wood ducks during peak migration.'
      ],
      it: [
        'Quando Frederick Law Olmsted progettò Central Park nel 1858, volle creare un contrappunto selvaggio alla geometria della città: The Ramble.',
        'Trentasei acri di sentieri tortuosi, ruscelli artificiali e massi erratici posizionati con cura maniacale per dare al visitatore l\'illusione di trovarsi in una foresta incontaminata a pochi passi dalla Fifth Avenue.',
        'I restauratori della Central Park Conservancy hanno completato il recupero del ruscello "The Gill", consentendo a centinaia di specie di uccelli migratori di trovare un rifugio vitale durante la traversata atlantica.'
      ]
    },
    tags: ['West Side Rag', 'Central Park', 'Manhattan', 'Hidden NYC', 'Nature'],
    isFeatured: true
  },
  {
    id: '12',
    slug: 'flushing-chinatown-golden-mall-roosevelt-avenue-food-markets',
    categoryKey: 'food',
    category: {
      en: 'FOOD & BOROUGHS • EATER NY',
      it: 'CUCINA & DISTRETTI • EATER NY'
    },
    title: {
      en: 'THE FLUSHING FEAST: EXPLORING ROOSEVELT AVENUE’S NIGHT MARKETS AND REGIONAL HAND-PULLED NOODLES',
      it: 'IL BANCHETTO DI FLUSHING: I MERCATI NOTTURNI DI ROOSEVELT AVENUE E I VERI NOODLE DEL QUEENS'
    },
    date: {
      en: 'September 10, 2026 at 7:30 p.m. ET',
      it: '10 Settembre 2026 alle 19:30'
    },
    author: 'Robert Sietsema (Eater NY)',
    commentsCount: 54,
    readTime: {
      en: '6 min read',
      it: '6 min di lettura'
    },
    location: {
      en: 'Flushing & Main St Terminal, Queens, NYC',
      it: 'Flushing, Queens, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Vibrant neon signs and sizzling food stalls in Flushing Chinatown Queens',
      it: 'Insegne al neon e bancarelle fumanti nel cuore gastronomico di Flushing nel Queens'
    },
    excerpt: {
      en: 'Stepping off the 7 train at Main Street into a cloud of Sichuan peppercorns, cumin lamb skewers, and simmering beef tendon broth: how Queens remains the undisputed culinary capital of the Western Hemisphere.',
      it: 'Scendere dalla linea 7 della metro al capolinea di Main Street tra vapori di pepe di Sichuan, spiedini d\'agnello al cumino e brodi di manzo: il Queens si conferma la capitale gastronomica più vibrante del mondo.'
    },
    emotionalHighlight: {
      en: '"In Flushing, cooking is not an intellectual exercise or a fleeting trend—it is muscle memory, regional identity, and centuries of family craft served boiling hot in plastic bowls."',
      it: '"A Flushing la cucina non è una moda passeggera: è memoria muscolare, identità regionale e secoli di maestria artigianale serviti bollenti in ciotole fumanti."'
    },
    keyTakeaways: {
      en: [
        'The newly reopened Golden Mall basements feature third-generation noodle masters from Xi’an, Henan, and Wuhan.',
        'Main Street and Roosevelt Avenue foot traffic reaches up to 100,000 visitors per weekend evening.',
        'Food historians declare Flushing the most linguistically and culinarily diverse enclave on earth.'
      ],
      it: [
        'I seminterrati rinnovati del Golden Mall ospitano maestri dei noodle di terza generazione provenienti da Xi\'an e dallo Henan.',
        'Main Street e Roosevelt Avenue accolgono oltre centomila visitatori ogni fine settimana.',
        'Flushing è considerata dagli esperti la comunità più linguisticamente e gastronomicamente ricca del pianeta.'
      ]
    },
    fullStory: {
      en: [
        'No journey in New York City is more electrifying than the elevated ride on the 7 train as it cuts through Jackson Heights, Corona, and swoops down into the terminus at Flushing–Main Street.',
        'Here, beneath a canopy of illuminated bilingual signage, lies an extraordinary culinary bazaar. Street vendors roast lamb skewers over fiery lump charcoal, dusting each batch with coarse sea salt, chili flakes, and toasted cumin seeds.',
        'Down in subterranean food halls, cooks slap dough against flour-dusted marble counters in rhythmic, percussive thuds, stretching ribbons of biang biang noodles in seconds before plunging them into boiling cauldrons.',
        '"You cannot experience this energy anywhere else in America," notes culinary chronicler Robert Sietsema. "Every province from Guangdong to Xinjiang has a representative counter here, serving flavors that haven’t been diluted for outside palates."'
      ],
      it: [
        'Il viaggio sulla linea 7 della metro verso il Queens è un\'esperienza leggendaria: il treno sopraelevato sfila tra Jackson Heights e Corona prima di tuffarsi a Flushing.',
        'Sotto le insegne luminose si apre un immenso mercato a cielo aperto: spiedini speziati cotti su brace ardente, ravioli al vapore preparati al momento e mastri pastai che tirano noodle elastici con gesti antichi.',
        'È il trionfo della cucina regionale più autentica, lontana dai cliché turistici e fedele alle proprie radici millenarie.'
      ]
    },
    tags: ['Eater NY', 'Flushing', 'Queens', 'Street Food', 'Food & Dining'],
    isSidebarHighlight: true
  },
  {
    id: '13',
    slug: 'mta-second-avenue-subway-phase-two-east-harlem-groundbreaking',
    categoryKey: 'news',
    category: {
      en: 'TRANSIT & CIVIC WATCH • THE CITY',
      it: 'TRASPORTI & CITTA • THE CITY'
    },
    title: {
      en: 'TUNNELING INTO EAST HARLEM: THE HIGH-STAKES PUSH TO FINISH THE SECOND AVENUE SUBWAY',
      it: 'I TUNNEL DI EAST HARLEM: LA SFIDA PER IL COMPLETAMENTO DELLA METROPOLITANA DI SECOND AVENUE'
    },
    date: {
      en: 'September 8, 2026 at 10:40 a.m. ET',
      it: '8 Settembre 2026 alle 10:40'
    },
    author: 'Jose Martinez (The City)',
    commentsCount: 63,
    readTime: {
      en: '5 min read',
      it: '5 min di lettura'
    },
    location: {
      en: 'Second Avenue & 125th St, East Harlem, Manhattan',
      it: 'East Harlem & 125ª Strada, Manhattan'
    },
    imageUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'New York City subway car arriving at underground platform with glowing lights',
      it: 'Vagone della metropolitana di New York in arrivo sulla banchina sotterranea'
    },
    excerpt: {
      en: 'As tunnel boring machines prepare to carve northward toward 125th Street, East Harlem residents and small merchants demand concrete protections against gentrification and commercial displacement along Second Avenue.',
      it: 'Mentre le talpe meccaniche dell\'MTA si preparano a scavare fino alla 125ª Strada, residenti e commercianti di East Harlem chiedono tutele contro i rincari degli affitti e lo stravolgimento sociale del quartiere.'
    },
    emotionalHighlight: {
      en: '"For seventy years, East Harlem was promised a subway line that never arrived. Now that the drills are spinning, we want to make sure the families who endured the neglect are here to ride the train."',
      it: '"Per settant\'anni a East Harlem hanno promesso una metropolitana mai arrivata. Ora che le trivelle sono in azione, dobbiamo garantire che chi ha vissuto l\'abbandono possa restare e godersi il futuro."'
    },
    keyTakeaways: {
      en: [
        'Phase 2 of the Second Avenue Subway extends the Q train from 96th Street to 125th Street, adding three new accessible stations.',
        'Federal infrastructure grants have allocated $3.4 billion toward tunneling and deep station cavern excavation.',
        'Community board resolutions require commercial rent stabilization safeguards for longstanding bodegas and cultural venues.'
      ],
      it: [
        'La Fase 2 estende la linea Q da 96th Street fino alla 125ª Strada con tre nuove stazioni sotterranee completamente accessibili.',
        'I fondi federali hanno stanziato 3,4 miliardi di dollari per lo scavo delle gallerie e delle stazioni profonde.',
        'Il comitato di quartiere chiede agevolazioni sugli affitti commerciali per proteggere botteghe storiche e spazi culturali.'
      ]
    },
    fullStory: {
      en: [
        'The dream of the Second Avenue Subway is older than the memories of most living New Yorkers, having first been proposed in 1929 before being repeatedly shelved by the Great Depression, World War II, and the fiscal crisis of the 1970s.',
        'Today, high-powered hydraulic boring equipment stands staged near 105th Street as engineers prepare to push the Q line deep into El Barrio and across to the Metro-North hub at 125th and Lexington.',
        'Transit analysts project the extension will shave twenty-five minutes off daily commutes for over 100,000 residents, relieving chronic overcrowding on the overloaded 4, 5, and 6 trains along Lexington Avenue.',
        'Yet along the bustling commercial corridor, bakery owners and tailor shops fear that speculative landlords are already raising lease renewals in anticipation of new luxury residential development.'
      ],
      it: [
        'Il progetto della Second Avenue Subway risale addirittura al 1929, rinviato per decenni a causa di crisi economiche e guerre mondiali.',
        'Oggi i cantieri sotterranei avanzano verso El Barrio per collegare la linea Q con il nodo ferroviario di Metro-North alla 125ª Strada.',
        'L\'opera ridurrà di circa venticinque minuti gli spostamenti giornalieri di oltre centomila newyorkesi, ma solleva timori per l\'aumento del costo della vita lungo la storica arteria del quartiere.'
      ]
    },
    tags: ['The City', 'MTA', 'Subway', 'East Harlem', 'Transit']
  },
  {
    id: '14',
    slug: 'greenpoint-industrial-waterfront-revival-newtown-creek',
    categoryKey: 'lifestyle',
    category: {
      en: 'COMMUNITY & ECOLOGY • GREENPOINTERS',
      it: 'COMUNITA & AMBIENTE • GREENPOINTERS'
    },
    title: {
      en: 'FROM SUPERFUND TO SANCTUARY: GREENPOINT’S ROOFTOP GREENHOUSES AND WATERFRONT RENAISSANCE',
      it: 'DAL PASSATO INDUSTRIALE AI TETTI VERDI: LA RINASCITA ECOLOGICA DEL WATERFRONT DI GREENPOINT'
    },
    date: {
      en: 'September 7, 2026 at 3:15 p.m. ET',
      it: '7 Settembre 2026 alle 15:15'
    },
    author: 'Emma Orlow (Greenpointers)',
    commentsCount: 29,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Greenpoint & Newtown Creek, Brooklyn, NYC',
      it: 'Greenpoint & Newtown Creek, Brooklyn'
    },
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Historic water tower and converted industrial brick warehouses in Greenpoint Brooklyn',
      it: 'Torre dell\'acqua e magazzini in mattoni riconvertiti sul lungofiume di Greenpoint'
    },
    excerpt: {
      en: 'Along the banks of Newtown Creek, environmental volunteers, urban apiarists, and rooftop farmers are transforming Brooklyn’s former heavy-refinery shoreline into an interconnected corridor of public wetlands and organic agriculture.',
      it: 'Lungo le rive di Newtown Creek, apicoltori urbani, associazioni ambientaliste e agricoltori sui tetti trasformano l\'antico porto industriale di Brooklyn in un corridoio di parchi costieri e giardini idroponici.'
    },
    emotionalHighlight: {
      en: '"To see blue herons fishing along Newtown Creek against the backdrop of the Empire State Building proves that New York’s natural spirit can heal even the deepest industrial scars."',
      it: '"Vedere gli aironi cenerini pescare lungo il canale con lo sfondo dell\'Empire State Building dimostra che la natura sa riconquistare anche i luoghi più feriti dall\'industria."'
    },
    keyTakeaways: {
      en: [
        'The Newtown Creek Nature Walk has expanded to provide continuous waterfront pedestrian access to Greenpoint Avenue.',
        'Kingsland Wildflowers rooftop habitat hosts over 24,000 square feet of native grasses, pollinators, and honeybee hives.',
        'Historic Polish bakeries and kielbasa smokehouses on Manhattan Avenue celebrate record community patronage alongside new indie cafes.'
      ],
      it: [
        'La passeggiata ecologica di Newtown Creek offre ora un percorso pedonale continuo fino a Greenpoint Avenue.',
        'Il tetto verde di Kingsland Wildflowers ospita oltre duemila metri quadri di flora autoctona e arnie urbane.',
        'I panifici polacchi storici di Manhattan Avenue mantengono viva la tradizione comunitaria accanto a gallerie d\'arte e caffè.'
      ]
    },
    fullStory: {
      en: [
        'For over a century, the tip of Northern Brooklyn where Greenpoint kisses Queens was synonymous with heavy oil refineries, copper smelting, and chemical manufacturing.',
        'Today, that same shoreline is witnessing one of the most remarkable grassroots ecological restorations in North America.',
        'At Kingsland Wildflowers, perched atop an active soundstage facility, green roof infrastructure absorbs millions of gallons of stormwater each summer while providing nesting grounds for barn swallows and migrating monarch butterflies.',
        'Down at street level, Polish grandmothers buying hot poppy seed bread mingle with sculptors and marine biologists, exemplifying Greenpoint’s unique blend of blue-collar roots and progressive environmental stewardship.'
      ],
      it: [
        'Per decenni la punta settentrionale di Brooklyn è stata il cuore dell\'industria pesante e della raffinazione.',
        'Oggi Greenpoint guida la transizione ecologica con tetti fioriti che assorbono le acque piovane, orti comunitari e percorsi naturalistici lungo il fiume.',
        'Sulle strade storiche del quartiere, le tradizioni dell\'immigrazione polacca convivono con laboratori di design e progetti scientifici per il recupero delle acque.'
      ]
    },
    tags: ['Greenpointers', 'Greenpoint', 'Brooklyn', 'Ecology', 'Waterfront']
  },
  {
    id: '15',
    slug: 'south-bronx-mott-haven-art-lofts-cultural-renaissance',
    categoryKey: 'culture',
    category: {
      en: 'BOROUGHS & ART • MOTT HAVEN HERALD',
      it: 'DISTRETTI & ARTE • MOTT HAVEN HERALD'
    },
    title: {
      en: 'BEYOND BRICK & IRON: THE ARTISTS AND ACTIVISTS RECLAIMING THE SOUTH BRONX WATERFRONT',
      it: 'OLTRE IL MATTONE E IL FERRO: GLI ARTISTI CHE REINVENTANO IL LUNGOFIUME DEL SOUTH BRONX'
    },
    date: {
      en: 'September 6, 2026 at 2:00 p.m. ET',
      it: '6 Settembre 2026 alle 14:00'
    },
    author: 'Joe Hirsch (Mott Haven Herald)',
    commentsCount: 21,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Mott Haven & Port Morris, The Bronx, NYC',
      it: 'Mott Haven, The Bronx, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Brick industrial lofts with large factory windows under bright blue Bronx sky',
      it: 'Loft industriali in mattoni con grandi vetrate a Mott Haven nel Bronx'
    },
    excerpt: {
      en: 'Inside former piano factories and iron foundries of Port Morris, a vibrant collective of Afro-Caribbean sculptors, hip-hop historians, and community printmakers is proving that the real cultural power of the Bronx cannot be commodified.',
      it: 'Nelle ex fabbriche di pianoforti e fonderie di Port Morris, collettivi di artisti afro-caraibici, storici dell\'hip-hop e stampatori indipendenti difendono l\'identità culturale e l\'autonomia del South Bronx.'
    },
    emotionalHighlight: {
      en: '"The South Bronx gave birth to hip-hop, salsa, and urban murals when the rest of the world looked away. We don’t need outside validation—our art is woven into our sidewalks."',
      it: '"Il South Bronx ha donato al mondo l\'hip-hop, la salsa e il graffitismo quando nessuno ci guardava. La nostra arte nasce direttamente dal marciapiede."'
    },
    keyTakeaways: {
      en: [
        'The historic Estey Piano Factory now houses over eighty non-profit artist studios with subsidized long-term leases.',
        'South Bronx Unite continues advocacy for clean air corridors, tree canopies, and public access along the Harlem River rail yards.',
        'Local culinary collectives celebrate authentic Puerto Rican and Garifuna culinary recipes alongside craft micro-distilleries.'
      ],
      it: [
        'La storica fabbrica di pianoforti Estey ospita oltre ottanta atelier d\'artisti con affitti a canone concordato.',
        'L\'associazione South Bronx Unite promuove corridoi verdi e parchi pubblici lungo le sponde dello Harlem River.',
        'Ristoranti tradizionali portoricani e micro-distillerie artigianali attirano visitatori e appassionati di cultura urbana.'
      ]
    },
    fullStory: {
      en: [
        'In the late 19th and early 20th centuries, Mott Haven was the piano-making capital of the world, responsible for building over one hundred thousand uprights and grands every year inside brick fortresses along the Harlem River.',
        'Today, those towering timber-and-brick structures hum with a different kind of creative frequency.',
        'At the BronxArtSpace and surrounding lofts, sculptors weld reclaimed scrap iron while printmakers produce political silk-screens addressing environmental justice and healthcare equity.',
        '"There is an honesty to the Bronx that you cannot manufacture," says muralist Mateo Morales. "Our work honors the legacy of our grandparents while carving out space for the next generation of Bronx creators."'
      ],
      it: [
        'Tra la fine dell\'Ottocento e l\'inizio del Novecento Mott Haven era la capitale mondiale dei pianoforti artigianali.',
        'Oggi quelle imponenti strutture ospitano gallerie indipendenti, laboratori di serigrafia e spazi dedicati alla memoria dell\'hip-hop e della musica caraibica.',
        'Gli artisti locali mantengono vivo l\'orgoglio del Bronx attraverso opere pubbliche e progetti comunitari che coinvolgono i giovani dei quartieri popolari.'
      ]
    },
    tags: ['Mott Haven Herald', 'The Bronx', 'Mott Haven', 'Art', 'Culture']
  },
  {
    id: '16',
    slug: 'historic-richmond-town-staten-island-colonial-crafts',
    categoryKey: 'destinations',
    category: {
      en: 'HISTORIC NEW YORK • SILIVE',
      it: 'STORIA DI NEW YORK • SILIVE'
    },
    title: {
      en: 'STEPPING INTO 1680: HISTORIC RICHMOND TOWN AND STATEN ISLAND’S LIVING PRESERVATION',
      it: 'VIAGGIO NEL 1680: IL BORGO COLONIALE DI RICHMOND TOWN A STATEN ISLAND'
    },
    date: {
      en: 'September 5, 2026 at 11:30 a.m. ET',
      it: '5 Settembre 2026 alle 11:30'
    },
    author: 'Tom Wrobleski (SILive / Staten Island Advance)',
    commentsCount: 16,
    readTime: {
      en: '4 min read',
      it: '4 min di lettura'
    },
    location: {
      en: 'Historic Richmond Town, Staten Island, NYC',
      it: 'Richmond Town, Staten Island, New York'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    imageAlt: {
      en: 'Historic colonial stone and timber farmhouse surrounded by green trees on Staten Island',
      it: 'Antica dimora coloniale in pietra e legno immersa nel verde a Staten Island'
    },
    excerpt: {
      en: 'A twenty-minute ride past the Staten Island Ferry terminal leads to a hundred-acre sanctuary containing the oldest standing schoolhouse in the United States and blacksmith shops operating exactly as they did in the 17th century.',
      it: 'A pochi chilometri dal terminal del celebre traghetto di Staten Island sorge un parco storico di cento acri che custodisce la più antica scuola d\'America e botteghe di fabbri attive dal diciassettesimo secolo.'
    },
    emotionalHighlight: {
      en: '"Most people think New York City is steel skyscrapers and concrete sidewalks. But here in Staten Island, you can smell woodsmoke from an 18th-century hearth and touch cedar clapboards hand-split under British colonial rule."',
      it: '"Tutti associano New York ai grattacieli d\'acciaio. Ma a Staten Island puoi sentire il profumo del camino a legna e toccare travi di cedro intagliate a mano sotto il dominio coloniale britannico."'
    },
    keyTakeaways: {
      en: [
        'Historic Richmond Town preserves over thirty historic structures spanning four centuries of Staten Island life.',
        'The Voorlezer’s House, built around 1695, is recognized as the oldest surviving elementary schoolhouse in America.',
        'Master tradespeople demonstrate heritage tin-smithing, loom weaving, and colonial open-hearth baking every weekend.'
      ],
      it: [
        'Il borgo storico di Richmond Town protegge oltre trenta edifici originali che coprono quattro secoli di storia newyorkese.',
        'La Voorlezer’s House, eretta nel 1695, è la più antica scuola elementare ancora in piedi negli Stati Uniti.',
        'Artigiani dimostrano ogni fine settimana tecniche tradizionali di forgiatura del ferro, tessitura e panificazione su pietra.'
      ]
    },
    fullStory: {
      en: [
        'While millions of tourists take the orange Staten Island Ferry each year to snap photographs of the Statue of Liberty, few venture inland to discover New York City’s most remarkable living museum.',
        'Nestled in the green hills of central Staten Island lies Historic Richmond Town, a meticulously conserved settlement that served as the county seat from 1729 until the consolidation of Greater New York in 1898.',
        'Walking along the gravel lanes between Dutch colonial stone farmhouses and Greek Revival courthouses feels like stepping into another era.',
        '"This village preserves the everyday domestic life of working New Yorkers—the farmers, oystermen, and blacksmiths who laid the foundation for the metropolis," explains curator Andrew Miller.'
      ],
      it: [
        'Mentre milioni di visitatori prendono il famoso traghetto arancione per ammirare la Statua della Libertà, pochi sanno che nell\'entroterra di Staten Island esiste un autentico villaggio del Seicento.',
        'Richmond Town conserva cascine in pietra olandese, mulini e tribunali d\'epoca che raccontano la vita quotidiana dei primi coloni, pescatori e artigiani newyorkesi.',
        'Un\'oasi di quiete e memoria che completa il quadro dei cinque distretti della metropoli.'
      ]
    },
    tags: ['SILive', 'Staten Island', 'History', 'Colonial NYC', 'Boroughs']
  }
];
