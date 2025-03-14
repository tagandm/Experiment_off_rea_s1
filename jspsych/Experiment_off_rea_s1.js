// LICENCE -----------------------------------------------------------------------------

// Copyright 2023 - Maude Tagand

// Initialize jsPsych -----------------------------------------------------------------
var jsPsych = initJsPsych({
});

// browser exclusion ------------------------------------------------------------------
var browser_check = {
  type: jsPsychBrowserCheck,
  inclusion_function: (data) => {
    return data.browser === 'firefox'|| data.browser === 'chrome' && data.mobile === false
  },
  exclusion_message: (data) => {
    if(data.mobile){
      return "p>Vous devez utiliser un ordinateur pour participer à cette étude.</p>";
    } else if (data.browser !== 'firefox' && data.browser !== 'chrome'){
      return "<p>Vous devez utiliser Chrome ou Firefox pour participer à cette étude. </p>"+
             "<p>Si vous voulez participer, veuillez copier le lien de l'expérience avec un navigateur de recherche compatible</p>";
    }
  }
}

// Create Timeline --------------------------------------------------------------------------
var timeline = [];

// Welcome
var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Chères participantes et participants,</p>" +
  "<p class='instructions'>Nous vous demandons de participer à notre étude qui s'intéresse à vos opinions sur divers sujets. " +
  "Veuillez s'il vous plaît lire la présentation de l'étude ainsi que les risques qu'elle peut présenter avant de décider d'y participer.</p>" +
  "<p class='instructions'>Qu'est-ce que nous vous demandons de faire ?" +
  "<br>Si vous décidez de participer à l'étude, vous allez compléter des questionnaires sur différents sujets. " +
  "Il est important que vous passiez l'étude en une fois et que vous ne fassiez pas de recherches sur Internet.</p>" +
  "<p class='instructions'>Quels sont les risques d'y participer ?" +
  "<br>Il n'y a pas de risques directs. Votre participation implique un investissement de 15-20 minutes de votre temps.</p>" +
  "<p class='instructions'>Vos droits si vous participez à l'étude :" +
  "<br> Vous êtes libre d'accepter ou de refuser de participer à l'étude. Si vous décidez de ne pas y prendre part, cela n'aura aucune conséquence. " +
  "De plus, vous pouvez décider de vous retirer à n'importe quel moment.</p>" +
  "<p class='instructions'>Ce qu'il adviendra de vos données :" +
  "<br>Toutes les données obtenues durant l'expérience seront strictement confidentielles. Vous serez identifié·e uniquement par un numéro attribué de manière aléatoire. " +
  "Votre nom, ou toutes autres données vous identifiant n'apparaîtront dans aucunes des publications ou des présentations qui résulteront de cette étude. " +
  "Aucune information ne permettra de relier vos réponses au questionnaire à votre identité.</p>" +
  "<p class='instructions'>En cliquant sur \u0022Continuer\u0022, vous acceptez de prendre part à ce questionnaire de façon volontaire " +
  "et déclarez avoir été informé·e des objectifs et du déroulement du questionnaire ainsi que des effets présumés, des avantages et des inconvénients.</p>",
  choices: ['Continuer']
};

//Instruction Scenario
var scenario_instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class= 'instructions_questionnaire'>Dans cette partie, vous allez lire de courtes descriptions d'événements. " +
  "Pour chacun de ces événements, nous vous demander de juger si, selon vous, ces événements ont bel et bien eu lieu.",
  choices: ['Continuer']
};

// Conspiracy
var scenario = [
  
 {number: "1",
  name: "tabacco",
  scenario: "Une entreprise spécialisée dans le tabac a effectué différentes études en laboratoire afin de connaître les effets du tabac sur la santé humaine. Les résultats ont révélé que le tabac était cancérigène. Cependant, l'entreprise ainsi que d'autres industries du tabac ont nié publiquement ces faits scientifiques en promouvant de faux bienfaits du tabac par des publicités mensongères soutenues par des médecins.",
  conspiracy: true},

  {number: "2",
  name: "snowden",
  scenario: "Les gouvernements américains et britanniques ont utilisé des programmes de surveillance de masse, leur donnant accès aux données des smartphones, incluant les contacts, les SMS, les conversations téléphoniques et les coordonnées GPS, ainsi qu'aux données de connexion Internet des utilisateurs. Ces pratiques reposaient sur des accords entre des entreprises majeures telles qu'Apple, Facebook, Google et Microsoft, et les agences de sécurité nationale américaines.",
  conspiracy: true},
  
  {number: "3",
  name: "watergate",
  scenario: "Le comité de réélection d'un président américain sortant a mené une vaste opération de sabotage politique, impliquant notamment des écoutes illégales, des vols de documents et des actes d'intimidation contre leurs adversaires politiques. Le président était au courant des opérations et a tenté de les couvrir en dissimulant des faits et en faisant obstruction à l'enquête.",
  conspiracy: true},
   
  {number: "4",
  name: "sang_cont",
  scenario: "Alors qu'ils étaient au courant, certains médecins et hauts fonctionnaires français ont laissé des patients recevoir des transfusions sanguines infectées par le VIH, et ce, en se basant sur des considérations économiques et financières, au détriment des considérations morales et sanitaires.",
  conspiracy: true},
   
  {number: "5",
  name: "mk_ultra",
  scenario: "Les services secrets américains ont créé un programme secret visant à développer des techniques pour influencer et manipuler le comportement humain, notamment par le biais de drogues, d'hypnose ou de privation sensorielle. Les sujets des expériences, recrutés sans leur consentement, étaient souvent des patients d'hôpitaux psychiatriques, des prisonniers, des prostituées ou des soldats.",
  conspiracy: true},
   
  {number: "6",
  name: "irangate",
  scenario: "Bien que le gouvernement américain ait émis une interdiction sur la vente d'armes à l'Iran, certains membres du gouvernement ont clandestinement effectué des transactions d'armement avec ce pays en échange de la libération d'otages américains. L'argent provenant de ces ventes a ensuite été détourné pour financer un groupe rebelle menant des opérations de guérilla en Amérique du Sud.",
  conspiracy: true},
   
  {number: "7",
  name: "dieselgate",
  scenario: "Une entreprise automobile a cherché à contourner les normes environnementales à l'aide d'un logiciel truquant le calcul des émissions d'une partie de ses véhicules. Ce logiciel manipulait les tests d'émissions pour faire paraître les véhicules moins polluants qu'ils ne l'étaient réellement.",
  conspiracy: true},
   
  {number: "8",
  name: "adm_Irak",
  scenario: "Le gouvernement américain a fourni de fausses preuves sur la présence d'armes de destruction massive, notamment nucléaires, chimiques et biologiques, pour justifier une intervention militaire en Irak.",
  conspiracy: true},
   
  {number: "9",
  name: "campagne_russe",
  scenario: "Durant des élections démocratiques en Allemagne, aux Etats-Unis, en France, aux Pays-Bas et au Royaume-Uni, des acteurs liés à la Russie ont entrepris des campagnes de manipulation de l'information dans le but de polariser les débats et influencer les résultats des élections. Ces activités comprenaient notamment du piratage informatique et de la diffusion ciblée de désinformation via les médias sociaux.",
  conspiracy: true},
   
  {number: "10",
  name: "panama",
  scenario: "Les dirigeants de plusieurs pays européens, dont la Russie, l'Ukraine et l'Islande, ont été mis en cause pour avoir dissimulé des activités financières à travers l'utilisation de sociétés écrans, souvent dans le but d'évasion fiscale.",
  conspiracy: true},
  
  {number: "11",
  name: "cambridge_analytica",
  scenario: "Une société britannique de conseil politique a illégalement obtenu et exploité des données personnelles d'utilisateurs de réseaux sociaux à des fins de manipulation et d'influence politique. Ces données ont été utilisées pour créer des profils psychologiques et comportementaux afin de créer des publicités politiques personnalisées durant les débats sur le Brexit.",
  conspiracy: true},
   
  {number: "12",
  name: "hacking_team",
  scenario: "Une entreprise de sécurité informatique italienne s'est révélée être spécialisée dans le développement et la vente de logiciels de surveillance à des gouvernements et à des agences de renseignements de plusieurs pays tel que l'Arabie Saoudite, l'Egypte, les Emirats arabes unis, le Maroc, le Soudan ou le Kazakhstan.",
  conspiracy: true},
   
  {number: "13",
  name: "fifa",
  scenario: "Dans le monde du football, un vaste réseau de corruption à l'échelle mondiale impliquait des dirigeants de la FIFA, des sociétés de marketing sportif, des médias et des fonctionnaires gouvernementaux. Des actes de corruption, tels que des pots-de-vin, des commissions illégales et des fraudes dans divers domaines ont été perpétrés. Des millions de dollars ont été secrètement échangés dans le but d'influencer des décisions politiques et de s'enrichir.",
  conspiracy: true},
   
  {number: "14",
  name: "tonkin",
  scenario: "Afin de justifier l'escalade militaire dans la guerre du Vietnam, l'administration américaine a prétendu qu'il y avait eu des attaques contre des navires de guerre américains par la marine nord-vietnamienne. Ces attaques n'ont en réalité jamais eu lieu.",
  conspiracy: true},
   
  {number: "15",
  name: "tuskeegee",
  scenario: "Lors d'une série d'études visant à comprendre l'évolution naturelle de la syphilis, le service de santé publique des Etats-Unis et une de ses universités ont caché à des hommes afro-américains leur diagnostic réel et les ont amenés à croire qu'ils recevaient des soins médicaux pour leurs problèmes de santé alors qu'ils étaient en réalité laissés sans traitement, même après la découverte d'un remède efficace.",
  conspiracy: true},
   
  {number: "16",
  name: "lavon",
  scenario: "Les services de renseignement israéliens ont tenté de commettre un attentat à la bombe contre des installations occidentales en Egypte et de le faire passer pour des attaques venant d'extrémistes égyptiens. L'objectif était de discréditer le gouvernement égyptien et de pousser les puissances occidentales à maintenir leur soutien à Israël.",
  conspiracy: true},
   
  {number: "17",
  name: "ajax",
  scenario: "Les services secrets américains et britanniques ont orchestré des actions clandestines, de la propagande, des manifestations et des manipulations politiques pour favoriser l'émergence d'un coup d'Etat contre le premier ministre iranien qui cherchait à nationaliser l'industrie pétrolière du pays. Leur objectif était de préserver leurs intérêts économiques et géopolitiques en Iran.",
  conspiracy: true},
   
  {number: "18",
  name: "paperclip",
  scenario: "Les Etats-Unis ont intégré secrètement des scientifiques liés au parti nazi dans des programmes de recherche et de développement militaires et scientifiques, leur permettant d'échapper aux poursuites et de bénéficier de l'immunité en échange de leurs expertises.",
  conspiracy: true},
   
  {number: "19",
  name: "condor",
  scenario: "Plusieurs pays d'Amérique latine, notamment l'Argentine, le Chili, le Paraguay, l'Uruguay et le Brésil ont coordonné leurs efforts pour mettre en œuvre des actions transfrontalières de répression politique incluant la surveillance, l'enlèvement, la torture et l'assassinat de dissidents politiques et militants soupçonnés de représenter une menace pour les régimes en place.",
  conspiracy: true},
   
  {number: "20",
  name: "hormone",
  scenario: "Des hormones de croissance contaminées par des substances délétères pour le cerveau ont été commercialisées alors que les laboratoires et autorités sanitaires français connaissaient les risques de contamination. Les entreprises pharmaceutiques les commercialisant ont choisi de ne pas divulguer ces informations sur la contamination pour des raisons économiques.",
  conspiracy: true},
   
  {number: "21",
  name: "indus_sucre",
  scenario: "L'industrie sucrière a financé des recherches visant à minimiser les liens entre le sucre et les problèmes de santé. Ces études étaient conçues pour mettre en avant d'autres facteurs, tels que les graisses saturées, comme principaux contributeurs aux maladies cardiaques.",
  conspiracy: true},
   
  {number: "22",
  name: "indus_climat",
  scenario: "Certaines grandes entreprises pétrolières ont mené des campagnes de désinformation pour semer le doute sur la réalité du changement climatique et sur le rôle des combustibles fossiles dans ce phénomène. Ces entreprises ont délibérément minimisé les effets du changement climatique et exercé des pressions pour bloquer les politiques de lutte contre le réchauffement climatique.",
  conspiracy: true},
  
  {number: "23",
  name: "rainbow_warrior",
  scenario: "Les services de renseignement français ont organisé un attentat à la bombe contre un navire de Greenpeace pour l'empêcher de poursuivre ses activités contre les essais nucléaires français dans le Pacifique.",
  conspiracy: true},
  
  {number: "24",
  name: "sterilization",
  scenario: "Le gouvernement péruvien a mené un programme de stérilisation forcée de milliers de femmes indigènes pour contrôler les naissances de cette population.",
  conspiracy: true},
  
  {number: "25",
  name: "chaos",
  scenario: "Les services secrets américains ont mené une opération secrète pour surveiller et infiltrer les groupes et mouvements anti-gouvernementaux impliqués dans les protestations contre la guerre du Vietnam.",
  conspiracy: true},
  
  {number: "26",
  name: "afrikaner_broed",
  scenario: "Une organisation secrète sud-africaine composée de descendants de colons néerlandais a participé au maintien et à la promotion du système de ségrégation raciale de l'apartheid.",
  conspiracy: true},
  
  {number: "27",
  name: "dsk",
  scenario: "Des opposants politiques à un candidat à la présidentielle français ont fait arrêter ce dernier pour des agressions sexuelles qu'il n'avait pas commises dans le but de le discréditer dans sa course à la présidence.",
  conspiracy: false},
  
  {number: "28",
  name: "somme",
  scenario: "Les services techniques de l'Etat français ont délibérément provoqué l'inondation de la vallée de la Somme en alimentant ce fleuve avec l'eau de la Seine. Cette action a causé d'importants dommages matériels aux populations locales au profit de la protection de Paris, elle aussi soumise à la montée des eaux.",
  conspiracy: false},
  
  {number: "29",
  name: "kennedy",
  scenario: "Les services secrets américains ont orchestré l'assassinat d'un président des Etats-Unis en raison de désaccords avec ce dernier, notamment concernant des opérations militaires.",
  conspiracy: false},
  
  {number: "30",
  name: "grand_remp",
  scenario: "Certains politiques et intellectuels français encouragent et planifient un remplacement de la population française et européenne par des populations originaires d'Afrique, et ce, dans le but —entre autres— de déconstruire l'identité française.",
  conspiracy: false},
   
  {number: "31",
  name: "franc_maçon",
  scenario: "Des membres de loges maçonniques appartenant à l'élite intellectuelle et politique ont joué un rôle prépondérant dans la planification et l'exécution de la Révolution française. Ils ont renversé la monarchie et instauré une république pour promouvoir leurs intérêts économiques et consolider leur pouvoir politique.",
  conspiracy: false},
   
  {number: "32",
  name: "nouvel_ordre_mondial",
  scenario: "Des riches et influentes familles veulent créer un gouvernement mondial en unifiant toutes les nations sous un contrôle économique et médiatique centralisé afin d'instaurer un état policier mondial.",
  conspiracy: false},
   
  {number: "33",
  name: "cgmt_cl",
  scenario: "Les gouvernements et entreprises inventent des données sur le changement climatique et les utilisent comme prétexte pour introduire de nouvelles taxes et réglementations, afin d'accroître leur contrôle sur l'économie.",
  conspiracy: false},
   
  {number: "34",
  name: "sida",
  scenario: "Les pays occidentaux ont créé et propagé le virus du SIDA afin de nuire à des régions politiquement instables, des pays en voie de développement et des régions porteuses d'enjeux stratégiques. Le continent africain a été particulièrement touché par cette pratique et l'affaiblissement délibéré des populations locales a contribué à les rendre dépendantes des groupes pharmaceutiques.",
  conspiracy: false},
   
  {number: "35",
  name: "ben_laden",
  scenario: "Les services secrets américains ont mis en scène l'arrestation et la mort d'Oussama ben Laden, le fondateur d'Al-Qaïda décédé quelques années plus tôt. Cette action médiatique a permis d'accroître la popularité du président en place.",
  conspiracy: false},
   
  {number: "36",
  name: "chemtrail",
  scenario: "Les traînées laissées par les avions contiennent des produits chimiques dont l'existence et la fonction sont cachées à la population par les gouvernements.",
  conspiracy: false},
   
  {number: "37",
  name: "indus_agro",
  scenario: "Les industries agroalimentaires empoisonnent délibérément la population pour permettre aux industries pharmaceutiques d'engendrer davantage de bénéfice.",
  conspiracy: false},
   
  {number: "38",
  name: "11_sept",
  scenario: "Conscient de la préparation d'un attentat terroriste par Al-Qaïda, le gouvernement américain a choisi de laisser les événements se dérouler délibérément afin d'engager en représailles des interventions militaires au Moyen-Orient et de défendre ainsi ses intérêts financiers.",
  conspiracy: false},
   
  {number: "39",
  name: "avion",
  scenario: "Le crash de l'avion dans lequel a péri l'ancien premier ministre polonais, ainsi que de nombreux membres du gouvernement, a été commandité par l'opposition politique, aidée par des agents russes.",
  conspiracy: false},
   
  {number: "40",
  name: "haarp",
  scenario: "Le gouvernement américain dispose d'une technologie secrète permettant de manipuler les conditions météorologiques et de provoquer des catastrophes naturelles telles que des tempêtes et des cyclones. Il s'en sert pour générer des crises et ainsi manipuler l'agenda médiatique et les flux migratoires.",
  conspiracy: false},
   
  {number: "41",
  name: "hydroxychloroquine",
  scenario: "Le gouvernement français a refusé de recommander l'hydroxychloroquine, pourtant efficace contre la COVID-19, comme traitement contre cette dernière pour permettre aux entreprises pharmaceutiques de développer des vaccins qui sont plus lucratifs que la hydroxychloroquine.",
  conspiracy: false},
   
  {number: "42",
  name: "labo_covid",
  scenario: "Le gouvernement chinois a créé le COVID-19 dans un laboratoire et l'a volontairement utilisé comme une arme biologique dans le but d'affaiblir économiquement et géopolitiquement les pays occidentaux.",
  conspiracy: false},
   
  {number: "43",
  name: "vaccin_hepatite_B",
  scenario: "En échange de pot-de-vin de la part de compagnies pharmaceutiques, certains scientifiques ont volontairement manipulé des données pour cacher le fait que le vaccin contre l'hépatite B pouvait favoriser le développement de la sclérose en plaques.",
  conspiracy: false},
   
  {number: "44",
  name: "lune",
  scenario: "Le gouvernement américain et la NASA ont mis en scène la réussite des missions Apollo (américaines) d'alunissage pour permettre une démonstration de force face aux Russes durant la guerre froide.",
  conspiracy: false}, 
   
  {number: "45",
  name: "ogm",
  scenario: "Certaines entreprises agroalimentaires ont continué de commercialiser des OGM (organismes génétiquement modifiés) après la publication d'un rapport scientifique démontrant leur dangerosité, et ce, pour des intérêts économiques.",
  conspiracy: false},
  
  {number: "46",
  name: "loterie",
  scenario: "Certains gouvernements et groupes secrets manipulent et truquent les numéros gagnants des loteries pour empêcher les personnes avec des revenus modestes de s'enrichir et pour récupérer une portion des fonds de la population.",
  conspiracy: false},
  
  {number: "47",
  name: "indus_boissons",
  scenario: "Des entreprises de boissons gazeuses mettent secrètement de la caféine dans leurs recettes pour créer une dépendance à l'égard des boissons qu'ils commercialisent et, à terme, engendrer davantage de bénéfices.",
  conspiracy: false},
  
  {number: "48",
  name: "tmps_reaction",
  scenario: "Certains médias truquent les réactions des personnalités publiques avec lesquelles ces médias ont des désaccords politiques lors de leurs apparitions à la télévision. L'objectif est de les faire paraître moins compétentes et, à terme, d'influencer l'opinion publique.",
  conspiracy: false},
  
  {number: "49",
  name: "juif",
  scenario: "Les intellectuels, politiques et hommes d'affaires juifs contrôlent les gouvernements, médias et institutions financières dans le but de favoriser les intérêts de la communauté juive.",
  conspiracy: false},
   
  {number: "50",
  name: "lady_diana",
  scenario: "A la demande de la famille royale, les services secrets britanniques ont assassiné une princesse de Galles et ont maquillé cela en accident de voiture.",
  conspiracy: false,
  date: "1997"},
  
  {number: "51",
  name: "ondes_nocives",
  scenario: "Pour protéger leurs profits, les entreprises de télécommunication cachent des données scientifiques montrant que les ondes électromagnétiques émises par les appareils électroniques tels que les téléphones portables, les antennes de téléphonie mobile et les réseaux sans fil ont des effets néfastes sur la santé humaine (cancer, trouble du sommeil, etc.).",
  conspiracy: false},
  
  {number: "52",
  name: "lsd_cia",
  scenario: "Dans le cadre d'opérations secrètes, les services secrets américains ont intoxiqué les habitants d'un village français avec du LSD répandu par avion. Les services secrets se sont donc rendus coupables de la mort de 5 personnes et de l'internement de 50 autres.",
  conspiracy: false},
]

true_side = jsPsych.randomization.sampleWithoutReplacement(["true_right", "true_left"], 1);

//Procedure Categorization
var scenario_categorization = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){
  return "<p class='instructions'>"+jsPsych.timelineVariable ('scenario')+"</p>" + "<p class='stimuli'>A votre avis, est-ce que cette affirmation est...<br></p>"},
  choices: function (){
    if (true_side == "true_right"){
      return ["fausse", "vraie"]
    } else {
      return ["vraie", "fausse"]
    }
  }
}
  
var scenario_procedure = {
  timeline: [scenario_categorization],
  timeline_variables: scenario,
  randomize_order: true,
    data: {
      number: jsPsych.timelineVariable('number'),
      name: jsPsych.timelineVariable('name'),
      group: jsPsych.timelineVariable('conspiracy')
    },
  }      


//Attention check
var attention_check = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnaire'>Quand nous allons vous demandez d'indiquer votre couleur préférée, veuillez s'il vous plait écrire le mot \u0022baguette\u0022.</p>" +
              "<p class='instructions_questionnaire'>En vous basant sur le texte ci-dessus, veuillez indiquer votre couleur préférée ?</p>",
      name: 'attention_check',
      required: true
    }
  ],
  button_label: 'Continuer'
}

//Survey
var instruction_questionnaires = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p class='instructions_questionnaire'>Dans cette partie, vous allez résoudre des problèmes et répondre à des questions sur votre vision du monde.</p>" ,
  choices: ['Continuer']
}

//crt (Cognitive Reflection Test)
var crt_item = [
  {name: 'crt_1',
   item: "Une batte de baseball et une balle coûtent 110 € au total. La batte coûte 100 € de plus que la balle. Combien coûte la balle ?",
   expected_response: "5"},
  {name: 'crt_2',
   item: "Si 5 machines prennent 5 minutes pour faire 5 boulons, combien faudrait-il de temps à 100 machines pour faire 100 boulons ?",
   expected_response: "5"},
  {name: 'crt_3',
   item: "Dans un étang, il y a un banc de nénuphars. Chaque jour, le banc double de taille. S'il faut 48 jours au banc de nénuphars pour couvrir l'étang, combien lui faut-il de jours pour couvrir la moitié de l'étang ?",
   expected_response: "47"},
  {name: 'crt_4',
   item: "Si trois elfes peuvent emballer trois jouets en une heure, combien d'elfes faut-il pour emballer six jouets en 2 heures ?",
   expected_response: "3"},
  {name: 'crt_5',
   item: "La note reçue par Jérôme est à la fois la 15e plus haute et la 15e plus basse de sa classe. Combien d'élèves y a-t-il dans cette classe ?",
   expected_response: "29"},
  {name: 'crt_6',
   item: "Dans ce club sportif, les grands ont trois fois plus de chances de gagner une médaille que les petits. Cette année, le club a remporté 60 médailles. Combien de ces médailles ont-elles été gagnées par des petits ?",
   expected_response: "15"}
  ];
  
  var crt_question = {
  type: jsPsychSurveyText,
  preamble: `Veuillez résoudre le problème ci-dessous:<br>`,
  questions: [
    {
      prompt: function(){
        return "<p class='instructions'>"+jsPsych.timelineVariable ('item')+"</p>"},
      name: function(){
        return jsPsych.timelineVariable ('name')},
      required: true,
    }
  ]
}

  var crt_procedure = {
  timeline: [crt_question],
  timeline_variables: crt_item,
  randomize_order: true,
  data: {
    expected_response: jsPsych.timelineVariable('expected_response')
  }
};

///questionnaire
var labels = [
  "<br>Pas du tout d'accord", 
  "<br>Pas d'accord",
  "<br>Ni d'accord, ni pas d'accord",
  "<br>D'accord",
  "<br>Totalement d'accord"
  ];


///CMQ questionnaire 
var cmq_questionnaire = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnaire'>Pour chacune de ces affirmations, veuillez indiquez dans quelle mesure vous êtes en accord avec.</p>"+ 
  "<p class='instructions_questionnaire'>Il n'y a pas de bonne réponse, nous sommes intéressés par vos opinions personnelles.</p>",
  questions: [
       {prompt: "Beaucoup de choses très importantes se produisent dans le monde dont le grand public n'est pas informé.", name: 'cmq_1', labels: labels, required: true},
       {prompt: "Les politiciens ne nous disent généralement pas ce qui motive réellement leurs décisions.", name: 'cmq_2', labels: labels, required: true},
       {prompt: "Les agences gouvernementales surveillent étroitement les citoyens.", name: 'cmq_3', labels: labels, required: true},
       {prompt: "Des événements qui, en apparence, ne semblent pas avoir de lien sont souvent le résultat d'activités secrètes.", name: 'cmq_4', labels: labels, required: true},
       {prompt: "Il existe des organisations secrètes qui influencent considérablement les décisions politiques.", name: 'cmq_5', labels: labels, required: true},  
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

///Modified CMQ questionnaire
var mcmq_questionnaire = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnaire'>Pour chacune de ces affirmations, veuillez indiquez dans quelle mesure vous êtes en accord avec."+ 
  "<p class='instructions_questionnaire'>Il n'y a pas de bonne réponse, nous sommes intéressés par vos opinions personnelles.</p>",
  questions: [
       {prompt: "Certaines choses importantes dont le grand public n'est pas informé se produisent parfois dans le monde.", name: 'mcmq_1', labels: labels, required: true},
       {prompt: "Les politiciens ne nous disent pas toujours ce qui motive réellement leurs décisions.", name: 'mcmq_2', labels: labels, required: true},
       {prompt: "Les agences gouvernementales surveillent étroitement certains citoyens.", name: 'mcmq_3', labels: labels, required: true},
       {prompt: "Des événements qui, en apparence, ne semblent pas avoir de lien peuvent être le résultat d'activités secrètes.", name: 'mcmq_4', labels: labels, required: true},
       {prompt: "Il existe des organisations secrètes qui influencent parfois les décisions politiques.", name: 'mcmq_5', labels: labels, required: true},  
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

cmq_or_mcmq_randomization = jsPsych.randomization.sampleWithoutReplacement(["cmq", "mcmq"], 1);

var cmq_or_mcmq = {
  timeline: (function(){
    if (cmq_or_mcmq_randomization == "cmq"){
      return [cmq_questionnaire]
    } else {
      return [mcmq_questionnaire]
    }
  })()
}

//Officialism questionnaire
var officialism_questionnaire = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnaire'>Pour chacune de ces affirmations, veuillez indiquez dans quelle mesure vous êtes en accord avec.</p>"+ 
  "<p class='instructions_questionnaire'>Il n'y a pas de bonne réponse, nous sommes intéressés par vos opinions personnelles.</p>",
  questions: [
       {prompt: "Les personnes au pouvoir ont comme but de servir le bien commun.", name: 'off_1', labels: labels, required: true},
       {prompt: "Les institutions gouvernementales agissent de manière éthique.", name: 'off_2', labels: labels, required: true},
       {prompt: "Les autorités cachent très peu de secrets au public.", name: 'off_3', labels: labels, required: true},
       {prompt: "Les personnes au pouvoir sont dignes de confiance.", name: 'off_4', labels: labels, required: true},
       {prompt: "Les lobbys ont très peu de pouvoir en démocratie.", name: 'off_5', labels: labels, required: true},
       {prompt: "Les autorités de santé sont indépendantes des lobbys pharmaceutiques.", name: 'off_6', labels: labels, required: true},
       {prompt: "Les experts sont rarement biaisés.", name: 'off_7', labels: labels, required: true},
       {prompt: "Les médias traditionnels admettent et signalent toujours quand ils font des erreurs.", name: 'off_8', labels: labels, required: true},
       {prompt: "Les élections démocratiques sont toujours menées correctement.", name: 'off_9', labels: labels, required: true},
       {prompt: "Les institutions gouvernementales (police, services secrets, justice) investiguent correctement les évenements majeurs (p. ex. attentats, accidents).", name: 'off_10', labels: labels, required: true},
      ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}  

//Healthy Scepticism questionnaire
var hs_questionnaire = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnaire'>Pour chacune de ces affirmations, veuillez indiquez dans quelle mesure vous êtes en accord avec.</p>"+ 
  "<p class='instructions_questionnaire'>Il n'y a pas de bonne réponse, nous sommes intéressés par vos opinions personnelles.</p>",
  questions: [
       {prompt: "Il y a des gens qui ne veulent pas que la vérité éclate au grand jour.", name: 'hs_1', labels: labels, required: true},
       {prompt: "Certaines choses ne sont pas ce qu'elles semblent être.", name: 'hs_2', labels: labels, required: true},
       {prompt: "Beaucoup de choses se passent à l'insu du public.", name: 'hs_3', labels: labels, required: true},
       {prompt: "Les gens feront des choses folles pour cacher la vérité.", name: 'hs_4', labels: labels, required: true},  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

//Conspiracy Ideation questionnaire
var ci_questionnaire = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnaire'>Pour chacune de ces affirmations, veuillez indiquez dans quelle mesure vous êtes en accord avec.</p>"+ 
  "<p class='instructions_questionnaire'>Il n'y a pas de bonne réponse, nous sommes intéressés par vos opinions personnelles.</p>",
  questions: [
       {prompt: "La vérité n'est connue que par un groupe secret puissant qui dissémine activement des fausses informations ou trompe le public.", name: 'ci_1', labels: labels, required: true},
       {prompt: "Un petit groupe de personnes influencent les événements du monde et tentent de le cacher.", name: 'ci_2', labels: labels, required: true},
       {prompt: "Le gouvernement ou des organisations cachées sont responsables d'événements qui sont inhabituels ou inexpliqués.", name: 'ci_3', labels: labels, required: true},
       {prompt: "Derrière de nombreux événements, il y a un plan pour soustraire certaines choses et essayer de les faire passer pour autre chose.", name: 'ci_4', labels: labels, required: true},  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

///Randomization questionnaire
var questionnaires = [crt_procedure, cmq_or_mcmq, officialism_questionnaire, hs_questionnaire, ci_questionnaire]

var questionnaires_randomization = jsPsych.randomization.sampleWithoutReplacement(questionnaires);

var task_or_questionnaires_first_randomization = jsPsych.randomization.sampleWithoutReplacement(["task", "questionnaires"], 1)[0];

var measures = {
  timeline: (function(){
    if (task_or_questionnaires_first_randomization == "task"){
      return [
        scenario_instruction,
        scenario_procedure,
        attention_check,
        instruction_questionnaires,
        ...questionnaires_randomization]
    } else {
      return [
        instruction_questionnaires,
        ...questionnaires_randomization,
        attention_check,
        scenario_instruction,
        scenario_procedure
      ]
    }
  })()
}

/// Demographic Questions
var instruction_demographic_questionnaire = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions_questionnaire'>Vous avez presque fini l'étude. Veuillez répondre à ces dernières questions.</p>",
  choices: ['Continuer']
}
          
var gender = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "<p class='instructions_questionnaire'>Vous vous identifiez en tant que...</p>", 
      options: ["Femme", "Homme", "Autre"],
      name: 'gender',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}
          
var age = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnaire'>Quel âge avez-vous ? (en année, par exemple 32)</p>",
      placeholder: 'XX',
      name: 'age',
      required: true
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

var search_check = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnaire'>Avez-vous effectué des recherches sur internet pendant la tâche ?</p>" +
      "<p class='instructions_questionnaire'>Veuillez répondre honnêtement à cette question, nous vous assurons que votre réponse n'aura pas d'impact sur votre rémunération.</p>", 
      options: ["oui", "non"],
      name: 'research_check',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

var comment = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions'>Avez-vous des commentaires ?</p>",
      name: 'comment',
      rows: 5
    }
  ],
  required_error: "Veuillez répondre à toutes les questions.",
  button_label: 'Continuer'
}

var waiting_demand = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Vous avez maintenant fini de répondre à l'ensemble des questions. " +
  "Après avoir cliquer sur continuer, les données vont être sauvegardées pendant le chargement. " +
  "Veuillez patienter jusqu'à ce que la prochaine page apparaisse. " +
  "Sinon, nous n'aurons aucune preuve que vous avez complété l'étude.</p>",
  choices: ['Continuer']
}

var prolific = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Vos données ont bien été enregistrées. " +
  "Merci beaucoup pour votre participation!"+
  "<p class='instructions'>Si vous souhaitez poser des questions ou demander des précisions, vous pouvez à tout moment contacter les personnes suivantes:" +
  "<br>Ana Rita Fangueiro Pires (ana.fangueiropires@unifr.ch)" +
  "<br>Pascal Wagner-Egger (pascal.wagner@unifr.ch)" +
  "<br>Département de psychologie, Université de Fribourg</p>" +
  "<p class='instructions'>Après avoir cliquer sur continuer, vous allez être redirigé sur prolific.</p>",
  choices: ['Continuer'],
  on_finish: function(){
  window.location.href = "https://app.prolific.com/submissions/complete?cc=C8AXO7ZV";
  }
}

var prolific_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');
 
//Save data ---------------------------------------------------------------------------------
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;
const experiment_id = "IfQZnkKwQ7wG";

jsPsych.data.addProperties({
  subject_id: subject_id,
  prolific_id: prolific_id,
  study_id: study_id,
  session_id: session_id,
  cmq_or_mcmq: cmq_or_mcmq_randomization,
  task_or_questionnaires_first: task_or_questionnaires_first_randomization,
  true_side: true_side
})

var save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: experiment_id,
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
}

//timeline
timeline.push 
  (browser_check,
  welcome,
  measures,
  instruction_demographic_questionnaire,
  gender,
  age,
  search_check,
  comment,
  waiting_demand,
  save_data,
  prolific
  )

jsPsych.run(timeline)