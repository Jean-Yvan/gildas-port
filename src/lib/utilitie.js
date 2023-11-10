
const awards = [
    {
      event: "FESPACO",
      date: "02.2023",
      location: "Ouagadougou",
      award: "Sélection officielle du film « GÀN Do Nù (Le Gong a résonné) » dans la catégorie « films des écoles »"
    },
    {
      event: "JOURNÉE INTERNATIONALE DE LA LIBERTÉ DE LA PRESSE",
      date: "05.2022",
      location: "Abomey-calavi (Bénin)",
      award: "Certificat de reconnaissance décerné par mon école de formation ENSTIC de l’université d’Abomey-calavi, pour mes nombreuses distinctions qui honorent l’Université"
    },
    {
      event: "FESTIVAL INTERNATIONAL DE FILM ALLONS AU CINÉMA FIFAC",
      date: "04.2022",
      location: "Ouidah (Bénin)",
      award: "Mention spéciale du jury international pour le film documentaire GAN DO NU (le gong a résonné)"
    },
    {
      event: "FESTIVAL PANAFRICAIN DES FILMS D’ÉCOLES FIRST SHORT",
      date: "04.2022",
      location: "Yaoundé",
      award: "Stylo d’or du meilleur documentaire pour le film documentaire GAN DO NU (le gong a résonné)"
    },
    {
      event: "CONCOURS DE REPORTAGE TELE «DEMAIN L’AFRIQUE » BY CANAL+UNIVERSITY",
      date: "02.2022",
      location: "Lomé",
      award: "Lauréat et représentant du Bénin"
    },
    {
      event: "FESPACO",
      date: "10.2021",
      location: "Ouagadougou",
      award: "Sélection officielle du film « ELEGBARA, la butte sacrée » dans la catégorie « films des écoles »"
    },
    {
      event: "CINÉ LUNE",
      date: "12.2020",
      location: "Cotonou",
      award: "Certificat de reconnaissance décerné par l’association Cinéma pour l’émergence de la jeunesse CEJ, pour l’ensemble des œuvres de ma jeune carrière"
    },
    {
      event: "TOUKOUNTCHI FESTIVAL DE CINÉMA DU NIGER",
      date: "11.2019",
      location: "Niamey",
      award: [
        "Prix du meilleur film documentaire des écoles pour le film ELEGBARA, la butte sacrée",
        "Prix FESPACO du jeune talent"
      ]
    },
    {
      event: "FESTIVAL INTERNATIONAL DE COURTS MÉTRAGES DE LA POINTE-NOIRE AU CONGO, FICOMP 2019",
      date: "09.2019",
      location: "Pointe-Noire",
      award: "Prix du meilleur documentaire avec le film XWLAKO, TRÉSOR D’UN SOL"
    },
    {
      event: "FESTIVAL INTERNATIONAL DE FILM DOCUMENTAIRE ARABO-AFRICAIN DE ZAGORA AU MAROC",
      date: "12.2018",
      location: "Zagora (Maroc)",
      award: "Prix du meilleur scénario avec le film XWLAKO, TRESOR D’UN SOL"
    },
    {
      event: "FESTIVAL INTERNATIONAL DU CINÉMA NUMÉRIQUE DE COTONOU",
      date: "12.2018",
      location: "Cotonou",
      award: "Prix du meilleur montage avec le film documentaire ART’ISTE"
    },
    {
      event: "CINÉ 229 AWARDS",
      date: "12.2018",
      location: "Cotonou",
      award: "Prix du meilleur réalisateur de film documentaire de l’année avec le film documentaire ART’ISTE"
    },
    {
      event: "SÉLECTION NATIONALE FESTIVAL CLAP IVOIRE 2018",
      date: "08.2018",
      location: "Cotonou",
      award: "Prix spécial du jury avec le film XWLAKO, TRÉSOR D’UN SOL"
    },
    {
      event: "TOUKOUNTCHI FESTIVAL DE CINÉMA DU NIGER",
      date: "12.2017",
      location: "Niamey",
      award:"Prix du meilleur documentaire court métrage avec le film documentaire XWLAKO, TRÉSOR D’UN SOL"
    }
  ]
  



function parseStringTableToInt(table){
    return table.map((element)=>parseInt(element))
}

const data = [
    {
        date:"2015-2018",
    },
    {
        date:"2020 – 2021",
    },
    {
        date:"2022-2023",
    },
    {
        date:"2022-2022",
    },
    {
        date:"2023-2023",
    },
]


function comparePeriode(a,b){
    [startYearA, endYearA] = parseStringTableToInt(a.periode.split('-'));
    [startYearB, endYearB] = parseStringTableToInt(b.periode.split('-'));

    if(endYearA != endYearB){
        return endYearA - endYearB;
    }
    
    if(startYearA != startYearB ){
        return startYearA - startYearB;
    }
    
    return 0;
    
    

}

function compareDate(a,b){
    const dateA = a.date.split('.');
    const dateB = b.date.split('.');

    if (dateA[1] != dateB[1]){
        return dateA[1] - dateB[1];
    }

    if(dateA[0] && dateB[0]){
        dateA[0] - dateB[0]
    }

    return 0;
} 