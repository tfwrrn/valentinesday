const STORY_LEVELS = [
  // Level 1 — Story: Intro (3 options)
  {
    type: 'story',
    category: null,
    image: 'images/scenes/01.svg',
    scene: 'Het is 14 februari. Je wordt wakker en het zonlicht valt zacht door de gordijnen. Vandaag is het Valentijnsdag en je hebt het gevoel dat dit een bijzondere dag gaat worden. Hoe begin je deze dag?',
    options: [
      {
        text: 'Je springt meteen uit bed, vol energie en klaar voor avontuur',
        value: 'energiek',
        label: null,
      },
      {
        text: 'Je blijft nog even liggen, ogen dicht, genietend van het moment',
        value: 'rustig',
        label: null,
      },
      {
        text: 'Je pakt je telefoon en stuurt alvast een lief berichtje',
        value: 'lief',
        label: null,
      },
    ],
  },

  // Level 2 — Date: Vibe (4 options)
  {
    type: 'date',
    category: 'vibe',
    image: 'images/scenes/02.svg',
    scene: 'De dag strekt zich voor je uit als een onbeschreven bladzijde. Je kijkt uit het raam en denkt na over wat voor soort dag dit moet worden. Wat voor sfeer past het best bij jullie Valentijnsdag?',
    options: [
      {
        text: 'Knus en warm — kaarslicht, dekentjes, en dicht bij elkaar',
        value: 'Knus & warm',
        label: 'Knus & warm',
      },
      {
        text: 'Avontuurlijk — de wereld in, nieuwe dingen ontdekken samen',
        value: 'Avontuurlijk',
        label: 'Avontuurlijk',
      },
      {
        text: 'Relaxed — geen haast, gewoon samen zijn en genieten',
        value: 'Relaxed',
        label: 'Relaxed',
      },
      {
        text: 'Ultiem romantisch — alles uit de kast, pure liefde',
        value: 'Romantisch',
        label: 'Romantisch',
      },
    ],
  },

  // Level 3 — Story: Challenge (3 options)
  {
    type: 'story',
    category: null,
    image: 'images/scenes/03.svg',
    scene: 'Net als je de deur uit wilt, gebeurt er iets onverwachts: de buurkat zit midden op de deurmat en weigert te bewegen. Hij kijkt je aan met grote groene ogen alsof hij iets wil zeggen. Wat doe je?',
    options: [
      {
        text: 'Je aait de kat uitgebreid en neemt een selfie — dit is een teken!',
        value: 'selfie',
        label: null,
      },
      {
        text: 'Je tilt de kat voorzichtig op en zet hem in een warm plekje',
        value: 'lief',
        label: null,
      },
      {
        text: 'Je stapt er elegant overheen als een geheim agent op een missie',
        value: 'actie',
        label: null,
      },
    ],
  },

  // Level 4 — Date: Food (4 options)
  {
    type: 'date',
    category: 'food',
    image: 'images/scenes/04.svg',
    scene: 'Je loopt door een mysterieuze straat en ziet vier deuren, elk met een ander aroma. De geuren zijn onweerstaanbaar en je maag begint te knorren. Achter welke deur ligt jullie perfecte Valentijnsdiner?',
    options: [
      {
        text: 'De deur met bamboe — verse sushi, miso soep en edamame',
        value: 'Sushi',
        label: 'Sushi',
      },
      {
        text: 'De deur met wijnranken — pasta, bruschetta en tiramisu',
        value: 'Italiaans',
        label: 'Italiaans',
      },
      {
        text: 'De deur met lavendel — coq au vin, kaas en crème brûlée',
        value: 'Frans',
        label: 'Frans',
      },
      {
        text: 'De deur met kruiden — samen koken, muziek aan, proeven en lachen',
        value: 'Samen koken',
        label: 'Samen koken',
      },
    ],
  },

  // Level 5 — Story: Romantic (3 options)
  {
    type: 'story',
    category: null,
    image: 'images/scenes/05.svg',
    scene: 'Terwijl je loopt, komt er plotseling een herinnering boven. Een moment samen dat je nooit zult vergeten. Je glimlacht vanzelf. Welke herinnering is het?',
    options: [
      {
        text: 'Die keer dat jullie verdwaalden en het de leukste omweg ooit werd',
        value: 'verdwaald',
        label: null,
      },
      {
        text: 'Die avond dat jullie urenlang praatten en de tijd vergaten',
        value: 'praten',
        label: null,
      },
      {
        text: 'Die keer dat jullie samen zo hard moesten lachen dat alles stil leek te staan',
        value: 'lachen',
        label: null,
      },
    ],
  },

  // Level 6 — Date: Activity (4 options)
  {
    type: 'date',
    category: 'activity',
    image: 'images/scenes/06.svg',
    scene: 'De avond strekt zich voor jullie uit, vol mogelijkheden. De {vibe} sfeer van vandaag vraagt om iets speciaals. Wat gaan jullie samen doen?',
    options: [
      {
        text: 'Naar de bioscoop — popcorn delen en handen vasthouden in het donker',
        value: 'Film kijken',
        label: 'Film kijken',
      },
      {
        text: 'Dansen — of het nu in de woonkamer is of in een club, jullie gaan los',
        value: 'Dansen',
        label: 'Dansen',
      },
      {
        text: 'Een avondwandeling door de stad — lichtjes, sfeer en goede gesprekken',
        value: 'Stadswandeling',
        label: 'Stadswandeling',
      },
      {
        text: 'Samen koken en een film aan — comfort food en quality time',
        value: 'Koken & film',
        label: 'Koken & film',
      },
    ],
  },

  // Level 7 — Story: Humor (3 options)
  {
    type: 'story',
    category: null,
    image: 'images/scenes/07.svg',
    scene: 'Plot twist! Je telefoon gaat af. Het is een voicemail van een onbekend nummer. Een dramatische stem zegt: "Gefeliciteerd! Je hebt gewonnen..." en dan valt de verbinding weg. Hoe reageer je?',
    options: [
      {
        text: 'Je doet alsof je nu miljonair bent en gedraagt je de rest van de dag zo',
        value: 'miljonair',
        label: null,
      },
      {
        text: 'Je lacht het weg en zegt: "De enige prijs die ik nodig heb heb ik al"',
        value: 'romantisch',
        label: null,
      },
      {
        text: 'Je belt terug en probeert de beller te overtuigen dat HIJ iets gewonnen heeft',
        value: 'terugbellen',
        label: null,
      },
    ],
  },

  // Level 8 — Date: Drink (4 options)
  {
    type: 'date',
    category: 'drink',
    image: 'images/scenes/08.svg',
    scene: 'Na al dat avontuur is het tijd voor een toast. Jullie zitten samen, de sfeer is perfect, en het moment vraagt om iets speciaals in je glas. Waar proost je mee?',
    options: [
      {
        text: 'Een goed glas rode wijn — klassiek, warm en tijdloos',
        value: 'Rode wijn',
        label: 'Rode wijn',
      },
      {
        text: 'Kleurrijke cocktails — creatief, vrolijk en een beetje fancy',
        value: 'Cocktails',
        label: 'Cocktails',
      },
      {
        text: 'Warme chocomelk met slagroom — zoet, knus en comfortabel',
        value: 'Warme chocomelk',
        label: 'Warme chocomelk',
      },
      {
        text: 'Champagne — bubbels, glamour en een vleugje luxe',
        value: 'Champagne',
        label: 'Champagne',
      },
    ],
  },

  // Level 9 — Story: Adventure (3 options)
  {
    type: 'story',
    category: null,
    image: 'images/scenes/09.svg',
    scene: 'Jullie lopen buiten en plotseling zie je een vallende ster aan de hemel. Het moment is magisch — de hele wereld lijkt even stil te staan. Wat wens je?',
    options: [
      {
        text: 'Dat dit gevoel voor altijd mag blijven — samen, gelukkig, precies zo',
        value: 'gevoel',
        label: null,
      },
      {
        text: 'Nog duizend avonturen samen, elk mooier dan de vorige',
        value: 'avonturen',
        label: null,
      },
      {
        text: 'Je wenst niks — je hebt alles al wat je nodig hebt',
        value: 'alles',
        label: null,
      },
    ],
  },

  // Level 10 — Date: Gift (3 options)
  {
    type: 'date',
    category: 'gift',
    image: 'images/scenes/10.svg',
    scene: 'Je partner glimlacht mysterieus en zegt: "Ik heb nog iets voor je..." Hij reikt in zijn jaszak. Wat hoop je dat het is?',
    options: [
      {
        text: 'Een schilderij van jullie favoriete plek samen, speciaal voor jou gemaakt door een kunstenaar',
        value: 'Custom schilderij',
        label: 'Custom schilderij',
      },
      {
        text: 'Twee tickets voor een verrassingsweekend — bestemming nog geheim',
        value: 'Verrassingsreis',
        label: 'Verrassingsreis',
      },
      {
        text: 'Een ster die officieel jullie naam draagt — voor altijd aan de hemel',
        value: 'Een ster',
        label: 'Een ster',
      },
    ],
  },

  // Level 11 — Story: Climax (3 options)
  {
    type: 'story',
    category: null,
    image: 'images/scenes/11.svg',
    scene: 'De avond valt en jullie staan samen op een rustig plekje. De stad gloeit op de achtergrond, de sterren schitteren boven jullie. Hij kijkt je aan en je voelt je hart sneller kloppen. Wat zeg je?',
    options: [
      {
        text: '"Ik ben zo blij dat ik jou gevonden heb."',
        value: 'gevonden',
        label: null,
      },
      {
        text: '"Elke dag met jou is mijn favoriete dag."',
        value: 'favoriet',
        label: null,
      },
      {
        text: 'Je zegt niks — je kust hem, want sommige dingen hoef je niet te zeggen.',
        value: 'kus',
        label: null,
      },
    ],
  },

  // Level 12 — Date: Afsluiter (4 options)
  {
    type: 'date',
    category: 'afsluiter',
    image: 'images/scenes/12.svg',
    scene: 'De avond is bijna voorbij, maar jullie willen dit perfecte gevoel nog even vasthouden. Hoe sluiten jullie deze onvergetelijke Valentijnsdag af?',
    options: [
      {
        text: 'Samen sterren kijken op een deken, liggend in het gras met warme chocolademelk',
        value: 'Sterren kijken',
        label: 'Sterren kijken',
      },
      {
        text: 'Een late-night wandeling langs het water, hand in hand, pratend over alles en niks',
        value: 'Nachtwandeling',
        label: 'Nachtwandeling',
      },
      {
        text: 'Samen op de bank kruipen met kaarsjes, dekentjes en jullie favoriete film',
        value: 'Bank & film',
        label: 'Bank & film',
      },
      {
        text: 'Een kampvuurtje of vuurkorf, marshmallows roosteren en genieten van de stilte samen',
        value: 'Kampvuur',
        label: 'Kampvuur',
      },
    ],
  },
];
