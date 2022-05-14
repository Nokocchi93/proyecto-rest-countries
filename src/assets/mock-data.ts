import { Country } from '../app/country';

// https://restcountries.com/v3.1/all?fields=name,capital,currencies,borders,population

export const COUNTRIES: Country[] = [
  {
    flags: {
      png: 'https://flagcdn.com/w320/uy.png',
      svg: 'https://flagcdn.com/uy.svg',
    },
    name: {
      common: 'Uruguay',
      official: 'Oriental Republic of Uruguay',
      nativeName: {
        spa: {
          official: 'República Oriental del Uruguay',
          common: 'Uruguay',
        },
      },
    },
    capital: ['Montevideo'],
    region: 'Americas',
    subregion: 'South America',
    population: 3473727,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/py.png',
      svg: 'https://flagcdn.com/py.svg',
    },
    name: {
      common: 'Paraguay',
      official: 'Republic of Paraguay',
      nativeName: {
        grn: {
          official: 'Tetã Paraguái',
          common: 'Paraguái',
        },
        spa: {
          official: 'República de Paraguay',
          common: 'Paraguay',
        },
      },
    },
    capital: ['Asunción'],
    region: 'Americas',
    subregion: 'South America',
    population: 7132530,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gm.png',
      svg: 'https://flagcdn.com/gm.svg',
    },
    name: {
      common: 'Gambia',
      official: 'Republic of the Gambia',
      nativeName: {
        eng: {
          official: 'Republic of the Gambia',
          common: 'Gambia',
        },
      },
    },
    capital: ['Banjul'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 2416664,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/dj.png',
      svg: 'https://flagcdn.com/dj.svg',
    },
    name: {
      common: 'Djibouti',
      official: 'Republic of Djibouti',
      nativeName: {
        ara: {
          official: 'جمهورية جيبوتي',
          common: 'جيبوتي‎',
        },
        fra: {
          official: 'République de Djibouti',
          common: 'Djibouti',
        },
      },
    },
    capital: ['Djibouti'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 988002,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mq.png',
      svg: 'https://flagcdn.com/mq.svg',
    },
    name: {
      common: 'Martinique',
      official: 'Martinique',
      nativeName: {
        fra: {
          official: 'Martinique',
          common: 'Martinique',
        },
      },
    },
    capital: ['Fort-de-France'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 378243,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gu.png',
      svg: 'https://flagcdn.com/gu.svg',
    },
    name: {
      common: 'Guam',
      official: 'Guam',
      nativeName: {
        cha: {
          official: 'Guåhån',
          common: 'Guåhån',
        },
        eng: {
          official: 'Guam',
          common: 'Guam',
        },
        spa: {
          official: 'Guam',
          common: 'Guam',
        },
      },
    },
    capital: ['Hagåtña'],
    region: 'Oceania',
    subregion: 'Micronesia',
    population: 168783,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ge.png',
      svg: 'https://flagcdn.com/ge.svg',
    },
    name: {
      common: 'Georgia',
      official: 'Georgia',
      nativeName: {
        kat: {
          official: 'საქართველო',
          common: 'საქართველო',
        },
      },
    },
    capital: ['Tbilisi'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 3714000,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/us.png',
      svg: 'https://flagcdn.com/us.svg',
    },
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: {
          official: 'United States of America',
          common: 'United States',
        },
      },
    },
    capital: ['Washington, D.C.'],
    region: 'Americas',
    subregion: 'North America',
    population: 329484123,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bz.png',
      svg: 'https://flagcdn.com/bz.svg',
    },
    name: {
      common: 'Belize',
      official: 'Belize',
      nativeName: {
        bjz: {
          official: 'Belize',
          common: 'Belize',
        },
        eng: {
          official: 'Belize',
          common: 'Belize',
        },
        spa: {
          official: 'Belice',
          common: 'Belice',
        },
      },
    },
    capital: ['Belmopan'],
    region: 'Americas',
    subregion: 'Central America',
    population: 397621,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mu.png',
      svg: 'https://flagcdn.com/mu.svg',
    },
    name: {
      common: 'Mauritius',
      official: 'Republic of Mauritius',
      nativeName: {
        eng: {
          official: 'Republic of Mauritius',
          common: 'Mauritius',
        },
        fra: {
          official: 'République de Maurice',
          common: 'Maurice',
        },
        mfe: {
          official: 'Republik Moris',
          common: 'Moris',
        },
      },
    },
    capital: ['Port Louis'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 1265740,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/lb.png',
      svg: 'https://flagcdn.com/lb.svg',
    },
    name: {
      common: 'Lebanon',
      official: 'Lebanese Republic',
      nativeName: {
        ara: {
          official: 'الجمهورية اللبنانية',
          common: 'لبنان',
        },
        fra: {
          official: 'République libanaise',
          common: 'Liban',
        },
      },
    },
    capital: ['Beirut'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 6825442,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/sa.png',
      svg: 'https://flagcdn.com/sa.svg',
    },
    name: {
      common: 'Saudi Arabia',
      official: 'Kingdom of Saudi Arabia',
      nativeName: {
        ara: {
          official: 'المملكة العربية السعودية',
          common: 'العربية السعودية',
        },
      },
    },
    capital: ['Riyadh'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 34813867,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ec.png',
      svg: 'https://flagcdn.com/ec.svg',
    },
    name: {
      common: 'Ecuador',
      official: 'Republic of Ecuador',
      nativeName: {
        spa: {
          official: 'República del Ecuador',
          common: 'Ecuador',
        },
      },
    },
    capital: ['Quito'],
    region: 'Americas',
    subregion: 'South America',
    population: 17643060,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mh.png',
      svg: 'https://flagcdn.com/mh.svg',
    },
    name: {
      common: 'Marshall Islands',
      official: 'Republic of the Marshall Islands',
      nativeName: {
        eng: {
          official: 'Republic of the Marshall Islands',
          common: 'Marshall Islands',
        },
        mah: {
          official: 'Republic of the Marshall Islands',
          common: 'M̧ajeļ',
        },
      },
    },
    capital: ['Majuro'],
    region: 'Oceania',
    subregion: 'Micronesia',
    population: 59194,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/br.png',
      svg: 'https://flagcdn.com/br.svg',
    },
    name: {
      common: 'Brazil',
      official: 'Federative Republic of Brazil',
      nativeName: {
        por: {
          official: 'República Federativa do Brasil',
          common: 'Brasil',
        },
      },
    },
    capital: ['Brasília'],
    region: 'Americas',
    subregion: 'South America',
    population: 212559409,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ug.png',
      svg: 'https://flagcdn.com/ug.svg',
    },
    name: {
      common: 'Uganda',
      official: 'Republic of Uganda',
      nativeName: {
        eng: {
          official: 'Republic of Uganda',
          common: 'Uganda',
        },
        swa: {
          official: 'Republic of Uganda',
          common: 'Uganda',
        },
      },
    },
    capital: ['Kampala'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 45741000,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/qa.png',
      svg: 'https://flagcdn.com/qa.svg',
    },
    name: {
      common: 'Qatar',
      official: 'State of Qatar',
      nativeName: {
        ara: {
          official: 'دولة قطر',
          common: 'قطر',
        },
      },
    },
    capital: ['Doha'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 2881060,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tl.png',
      svg: 'https://flagcdn.com/tl.svg',
    },
    name: {
      common: 'Timor-Leste',
      official: 'Democratic Republic of Timor-Leste',
      nativeName: {
        por: {
          official: 'República Democrática de Timor-Leste',
          common: 'Timor-Leste',
        },
        tet: {
          official: 'Repúblika Demokrátika Timór-Leste',
          common: 'Timór-Leste',
        },
      },
    },
    capital: ['Dili'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    population: 1318442,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mn.png',
      svg: 'https://flagcdn.com/mn.svg',
    },
    name: {
      common: 'Mongolia',
      official: 'Mongolia',
      nativeName: {
        mon: {
          official: 'Монгол улс',
          common: 'Монгол улс',
        },
      },
    },
    capital: ['Ulan Bator'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    population: 3278292,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cl.png',
      svg: 'https://flagcdn.com/cl.svg',
    },
    name: {
      common: 'Chile',
      official: 'Republic of Chile',
      nativeName: {
        spa: {
          official: 'República de Chile',
          common: 'Chile',
        },
      },
    },
    capital: ['Santiago'],
    region: 'Americas',
    subregion: 'South America',
    population: 19116209,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/lr.png',
      svg: 'https://flagcdn.com/lr.svg',
    },
    name: {
      common: 'Liberia',
      official: 'Republic of Liberia',
      nativeName: {
        eng: {
          official: 'Republic of Liberia',
          common: 'Liberia',
        },
      },
    },
    capital: ['Monrovia'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 5057677,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/nr.png',
      svg: 'https://flagcdn.com/nr.svg',
    },
    name: {
      common: 'Nauru',
      official: 'Republic of Nauru',
      nativeName: {
        eng: {
          official: 'Republic of Nauru',
          common: 'Nauru',
        },
        nau: {
          official: 'Republic of Nauru',
          common: 'Nauru',
        },
      },
    },
    capital: ['Yaren'],
    region: 'Oceania',
    subregion: 'Micronesia',
    population: 10834,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/re.png',
      svg: 'https://flagcdn.com/re.svg',
    },
    name: {
      common: 'Réunion',
      official: 'Réunion Island',
      nativeName: {
        fra: {
          official: 'Ile de la Réunion',
          common: 'La Réunion',
        },
      },
    },
    capital: ['Saint-Denis'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 840974,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ms.png',
      svg: 'https://flagcdn.com/ms.svg',
    },
    name: {
      common: 'Montserrat',
      official: 'Montserrat',
      nativeName: {
        eng: {
          official: 'Montserrat',
          common: 'Montserrat',
        },
      },
    },
    capital: ['Plymouth'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 4922,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tw.png',
      svg: 'https://flagcdn.com/tw.svg',
    },
    name: {
      common: 'Taiwan',
      official: 'Republic of China (Taiwan)',
      nativeName: {
        zho: {
          official: '中華民國',
          common: '台灣',
        },
      },
    },
    capital: ['Taipei'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    population: 23503349,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/aq.png',
      svg: 'https://flagcdn.com/aq.svg',
    },
    name: {
      common: 'Antarctica',
      official: 'Antarctica',
      nativeName: {},
    },
    capital: [],
    region: 'Antarctic',
    subregion: '',
    population: 1000,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/pm.png',
      svg: 'https://flagcdn.com/pm.svg',
    },
    name: {
      common: 'Saint Pierre and Miquelon',
      official: 'Saint Pierre and Miquelon',
      nativeName: {
        fra: {
          official: 'Collectivité territoriale de Saint-Pierre-et-Miquelon',
          common: 'Saint-Pierre-et-Miquelon',
        },
      },
    },
    capital: ['Saint-Pierre'],
    region: 'Americas',
    subregion: 'North America',
    population: 6069,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ar.png',
      svg: 'https://flagcdn.com/ar.svg',
    },
    name: {
      common: 'Argentina',
      official: 'Argentine Republic',
      nativeName: {
        grn: {
          official: 'Argentine Republic',
          common: 'Argentina',
        },
        spa: {
          official: 'República Argentina',
          common: 'Argentina',
        },
      },
    },
    capital: ['Buenos Aires'],
    region: 'Americas',
    subregion: 'South America',
    population: 45376763,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tg.png',
      svg: 'https://flagcdn.com/tg.svg',
    },
    name: {
      common: 'Togo',
      official: 'Togolese Republic',
      nativeName: {
        fra: {
          official: 'République togolaise',
          common: 'Togo',
        },
      },
    },
    capital: ['Lomé'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 8278737,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/at.png',
      svg: 'https://flagcdn.com/at.svg',
    },
    name: {
      common: 'Austria',
      official: 'Republic of Austria',
      nativeName: {
        bar: {
          official: 'Republik Österreich',
          common: 'Österreich',
        },
      },
    },
    capital: ['Vienna'],
    region: 'Europe',
    subregion: 'Central Europe',
    population: 8917205,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gd.png',
      svg: 'https://flagcdn.com/gd.svg',
    },
    name: {
      common: 'Grenada',
      official: 'Grenada',
      nativeName: {
        eng: {
          official: 'Grenada',
          common: 'Grenada',
        },
      },
    },
    capital: ["St. George's"],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 112519,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/fo.png',
      svg: 'https://flagcdn.com/fo.svg',
    },
    name: {
      common: 'Faroe Islands',
      official: 'Faroe Islands',
      nativeName: {
        dan: {
          official: 'Færøerne',
          common: 'Færøerne',
        },
        fao: {
          official: 'Føroyar',
          common: 'Føroyar',
        },
      },
    },
    capital: ['Tórshavn'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 48865,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ma.png',
      svg: 'https://flagcdn.com/ma.svg',
    },
    name: {
      common: 'Morocco',
      official: 'Kingdom of Morocco',
      nativeName: {
        ara: {
          official: 'المملكة المغربية',
          common: 'المغرب',
        },
        ber: {
          official: 'ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ',
          common: 'ⵍⵎⴰⵖⵔⵉⴱ',
        },
      },
    },
    capital: ['Rabat'],
    region: 'Africa',
    subregion: 'Northern Africa',
    population: 36910558,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ai.png',
      svg: 'https://flagcdn.com/ai.svg',
    },
    name: {
      common: 'Anguilla',
      official: 'Anguilla',
      nativeName: {
        eng: {
          official: 'Anguilla',
          common: 'Anguilla',
        },
      },
    },
    capital: ['The Valley'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 13452,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/pw.png',
      svg: 'https://flagcdn.com/pw.svg',
    },
    name: {
      common: 'Palau',
      official: 'Republic of Palau',
      nativeName: {
        eng: {
          official: 'Republic of Palau',
          common: 'Palau',
        },
        pau: {
          official: 'Beluu er a Belau',
          common: 'Belau',
        },
      },
    },
    capital: ['Ngerulmud'],
    region: 'Oceania',
    subregion: 'Micronesia',
    population: 18092,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mp.png',
      svg: 'https://flagcdn.com/mp.svg',
    },
    name: {
      common: 'Northern Mariana Islands',
      official: 'Commonwealth of the Northern Mariana Islands',
      nativeName: {
        cal: {
          official: 'Commonwealth of the Northern Mariana Islands',
          common: 'Northern Mariana Islands',
        },
        cha: {
          official: 'Sankattan Siha Na Islas Mariånas',
          common: 'Na Islas Mariånas',
        },
        eng: {
          official: 'Commonwealth of the Northern Mariana Islands',
          common: 'Northern Mariana Islands',
        },
      },
    },
    capital: ['Saipan'],
    region: 'Oceania',
    subregion: 'Micronesia',
    population: 57557,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mr.png',
      svg: 'https://flagcdn.com/mr.svg',
    },
    name: {
      common: 'Mauritania',
      official: 'Islamic Republic of Mauritania',
      nativeName: {
        ara: {
          official: 'الجمهورية الإسلامية الموريتانية',
          common: 'موريتانيا',
        },
      },
    },
    capital: ['Nouakchott'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 4649660,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ua.png',
      svg: 'https://flagcdn.com/ua.svg',
    },
    name: {
      common: 'Ukraine',
      official: 'Ukraine',
      nativeName: {
        ukr: {
          official: 'Україна',
          common: 'Україна',
        },
      },
    },
    capital: ['Kyiv'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    population: 44134693,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cn.png',
      svg: 'https://flagcdn.com/cn.svg',
    },
    name: {
      common: 'China',
      official: "People's Republic of China",
      nativeName: {
        zho: {
          official: '中华人民共和国',
          common: '中国',
        },
      },
    },
    capital: ['Beijing'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    population: 1402112000,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ls.png',
      svg: 'https://flagcdn.com/ls.svg',
    },
    name: {
      common: 'Lesotho',
      official: 'Kingdom of Lesotho',
      nativeName: {
        eng: {
          official: 'Kingdom of Lesotho',
          common: 'Lesotho',
        },
        sot: {
          official: 'Kingdom of Lesotho',
          common: 'Lesotho',
        },
      },
    },
    capital: ['Maseru'],
    region: 'Africa',
    subregion: 'Southern Africa',
    population: 2142252,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cy.png',
      svg: 'https://flagcdn.com/cy.svg',
    },
    name: {
      common: 'Cyprus',
      official: 'Republic of Cyprus',
      nativeName: {
        ell: {
          official: 'Δημοκρατία της Κύπρος',
          common: 'Κύπρος',
        },
        tur: {
          official: 'Kıbrıs Cumhuriyeti',
          common: 'Kıbrıs',
        },
      },
    },
    capital: ['Nicosia'],
    region: 'Europe',
    subregion: 'Southern Europe',
    population: 1207361,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cd.png',
      svg: 'https://flagcdn.com/cd.svg',
    },
    name: {
      common: 'DR Congo',
      official: 'Democratic Republic of the Congo',
      nativeName: {
        fra: {
          official: 'République démocratique du Congo',
          common: 'RD Congo',
        },
        kon: {
          official: 'Repubilika ya Kongo Demokratiki',
          common: 'Repubilika ya Kongo Demokratiki',
        },
        lin: {
          official: 'Republiki ya Kongó Demokratiki',
          common: 'Republiki ya Kongó Demokratiki',
        },
        lua: {
          official: 'Ditunga dia Kongu wa Mungalaata',
          common: 'Ditunga dia Kongu wa Mungalaata',
        },
        swa: {
          official: 'Jamhuri ya Kidemokrasia ya Kongo',
          common: 'Jamhuri ya Kidemokrasia ya Kongo',
        },
      },
    },
    capital: ['Kinshasa'],
    region: 'Africa',
    subregion: 'Middle Africa',
    population: 89561404,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ru.png',
      svg: 'https://flagcdn.com/ru.svg',
    },
    name: {
      common: 'Russia',
      official: 'Russian Federation',
      nativeName: {
        rus: {
          official: 'Российская Федерация',
          common: 'Россия',
        },
      },
    },
    capital: ['Moscow'],
    region: 'Europe',
    subregion: 'Eastern Europe',
    population: 144104080,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bd.png',
      svg: 'https://flagcdn.com/bd.svg',
    },
    name: {
      common: 'Bangladesh',
      official: "People's Republic of Bangladesh",
      nativeName: {
        ben: {
          official: 'বাংলাদেশ গণপ্রজাতন্ত্রী',
          common: 'বাংলাদেশ',
        },
      },
    },
    capital: ['Dhaka'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 164689383,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/za.png',
      svg: 'https://flagcdn.com/za.svg',
    },
    name: {
      common: 'South Africa',
      official: 'Republic of South Africa',
      nativeName: {
        afr: {
          official: 'Republiek van Suid-Afrika',
          common: 'South Africa',
        },
        eng: {
          official: 'Republic of South Africa',
          common: 'South Africa',
        },
        nbl: {
          official: 'IRiphabliki yeSewula Afrika',
          common: 'Sewula Afrika',
        },
        nso: {
          official: 'Rephaboliki ya Afrika-Borwa ',
          common: 'Afrika-Borwa',
        },
        sot: {
          official: 'Rephaboliki ya Afrika Borwa',
          common: 'Afrika Borwa',
        },
        ssw: {
          official: 'IRiphabhulikhi yeNingizimu Afrika',
          common: 'Ningizimu Afrika',
        },
        tsn: {
          official: 'Rephaboliki ya Aforika Borwa',
          common: 'Aforika Borwa',
        },
        tso: {
          official: 'Riphabliki ra Afrika Dzonga',
          common: 'Afrika Dzonga',
        },
        ven: {
          official: 'Riphabuḽiki ya Afurika Tshipembe',
          common: 'Afurika Tshipembe',
        },
        xho: {
          official: 'IRiphabliki yaseMzantsi Afrika',
          common: 'Mzantsi Afrika',
        },
        zul: {
          official: 'IRiphabliki yaseNingizimu Afrika',
          common: 'Ningizimu Afrika',
        },
      },
    },
    capital: ['Pretoria', 'Bloemfontein', 'Cape Town'],
    region: 'Africa',
    subregion: 'Southern Africa',
    population: 59308690,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/cw.png',
      svg: 'https://flagcdn.com/cw.svg',
    },
    name: {
      common: 'Curaçao',
      official: 'Country of Curaçao',
      nativeName: {
        eng: {
          official: 'Country of Curaçao',
          common: 'Curaçao',
        },
        nld: {
          official: 'Land Curaçao',
          common: 'Curaçao',
        },
        pap: {
          official: 'Pais Kòrsou',
          common: 'Pais Kòrsou',
        },
      },
    },
    capital: ['Willemstad'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 155014,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gt.png',
      svg: 'https://flagcdn.com/gt.svg',
    },
    name: {
      common: 'Guatemala',
      official: 'Republic of Guatemala',
      nativeName: {
        spa: {
          official: 'República de Guatemala',
          common: 'Guatemala',
        },
      },
    },
    capital: ['Guatemala City'],
    region: 'Americas',
    subregion: 'Central America',
    population: 16858333,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/pr.png',
      svg: 'https://flagcdn.com/pr.svg',
    },
    name: {
      common: 'Puerto Rico',
      official: 'Commonwealth of Puerto Rico',
      nativeName: {
        eng: {
          official: 'Commonwealth of Puerto Rico',
          common: 'Puerto Rico',
        },
        spa: {
          official: 'Estado Libre Asociado de Puerto Rico',
          common: 'Puerto Rico',
        },
      },
    },
    capital: ['San Juan'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 3194034,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ag.png',
      svg: 'https://flagcdn.com/ag.svg',
    },
    name: {
      common: 'Antigua and Barbuda',
      official: 'Antigua and Barbuda',
      nativeName: {
        eng: {
          official: 'Antigua and Barbuda',
          common: 'Antigua and Barbuda',
        },
      },
    },
    capital: ["Saint John's"],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 97928,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/il.png',
      svg: 'https://flagcdn.com/il.svg',
    },
    name: {
      common: 'Israel',
      official: 'State of Israel',
      nativeName: {
        ara: {
          official: 'دولة إسرائيل',
          common: 'إسرائيل',
        },
        heb: {
          official: 'מדינת ישראל',
          common: 'ישראל',
        },
      },
    },
    capital: ['Jerusalem'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 9216900,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gy.png',
      svg: 'https://flagcdn.com/gy.svg',
    },
    name: {
      common: 'Guyana',
      official: 'Co-operative Republic of Guyana',
      nativeName: {
        eng: {
          official: 'Co-operative Republic of Guyana',
          common: 'Guyana',
        },
      },
    },
    capital: ['Georgetown'],
    region: 'Americas',
    subregion: 'South America',
    population: 786559,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ky.png',
      svg: 'https://flagcdn.com/ky.svg',
    },
    name: {
      common: 'Cayman Islands',
      official: 'Cayman Islands',
      nativeName: {
        eng: {
          official: 'Cayman Islands',
          common: 'Cayman Islands',
        },
      },
    },
    capital: ['George Town'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 65720,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/hr.png',
      svg: 'https://flagcdn.com/hr.svg',
    },
    name: {
      common: 'Croatia',
      official: 'Republic of Croatia',
      nativeName: {
        hrv: {
          official: 'Republika Hrvatska',
          common: 'Hrvatska',
        },
      },
    },
    capital: ['Zagreb'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    population: 4047200,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/is.png',
      svg: 'https://flagcdn.com/is.svg',
    },
    name: {
      common: 'Iceland',
      official: 'Iceland',
      nativeName: {
        isl: {
          official: 'Ísland',
          common: 'Ísland',
        },
      },
    },
    capital: ['Reykjavik'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 366425,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bq.png',
      svg: 'https://flagcdn.com/bq.svg',
    },
    name: {
      common: 'Caribbean Netherlands',
      official: 'Bonaire, Sint Eustatius and Saba',
      nativeName: {
        nld: {
          official: 'Bonaire, Sint Eustatius en Saba',
          common: 'Caribisch Nederland',
        },
        pap: {
          official: 'Boneiru, Sint Eustatius y Saba',
          common: 'Boneiru, Sint Eustatius y Saba',
        },
      },
    },
    capital: ['Kralendijk'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 25987,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/sx.png',
      svg: 'https://flagcdn.com/sx.svg',
    },
    name: {
      common: 'Sint Maarten',
      official: 'Sint Maarten',
      nativeName: {
        eng: {
          official: 'Sint Maarten',
          common: 'Sint Maarten',
        },
        fra: {
          official: 'Saint-Martin',
          common: 'Saint-Martin',
        },
        nld: {
          official: 'Sint Maarten',
          common: 'Sint Maarten',
        },
      },
    },
    capital: ['Philipsburg'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 40812,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/na.png',
      svg: 'https://flagcdn.com/na.svg',
    },
    name: {
      common: 'Namibia',
      official: 'Republic of Namibia',
      nativeName: {
        afr: {
          official: 'Republiek van Namibië',
          common: 'Namibië',
        },
        deu: {
          official: 'Republik Namibia',
          common: 'Namibia',
        },
        eng: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        her: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        hgm: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        kwn: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        loz: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        ndo: {
          official: 'Republic of Namibia',
          common: 'Namibia',
        },
        tsn: {
          official: 'Lefatshe la Namibia',
          common: 'Namibia',
        },
      },
    },
    capital: ['Windhoek'],
    region: 'Africa',
    subregion: 'Southern Africa',
    population: 2540916,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/dm.png',
      svg: 'https://flagcdn.com/dm.svg',
    },
    name: {
      common: 'Dominica',
      official: 'Commonwealth of Dominica',
      nativeName: {
        eng: {
          official: 'Commonwealth of Dominica',
          common: 'Dominica',
        },
      },
    },
    capital: ['Roseau'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 71991,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gi.png',
      svg: 'https://flagcdn.com/gi.svg',
    },
    name: {
      common: 'Gibraltar',
      official: 'Gibraltar',
      nativeName: {
        eng: {
          official: 'Gibraltar',
          common: 'Gibraltar',
        },
      },
    },
    capital: ['Gibraltar'],
    region: 'Europe',
    subregion: 'Southern Europe',
    population: 33691,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/sn.png',
      svg: 'https://flagcdn.com/sn.svg',
    },
    name: {
      common: 'Senegal',
      official: 'Republic of Senegal',
      nativeName: {
        fra: {
          official: 'République du Sénégal',
          common: 'Sénégal',
        },
      },
    },
    capital: ['Dakar'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 16743930,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/kn.png',
      svg: 'https://flagcdn.com/kn.svg',
    },
    name: {
      common: 'Saint Kitts and Nevis',
      official: 'Federation of Saint Christopher and Nevis',
      nativeName: {
        eng: {
          official: 'Federation of Saint Christopher and Nevis',
          common: 'Saint Kitts and Nevis',
        },
      },
    },
    capital: ['Basseterre'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 53192,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/om.png',
      svg: 'https://flagcdn.com/om.svg',
    },
    name: {
      common: 'Oman',
      official: 'Sultanate of Oman',
      nativeName: {
        ara: {
          official: 'سلطنة عمان',
          common: 'عمان',
        },
      },
    },
    capital: ['Muscat'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 5106622,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/kw.png',
      svg: 'https://flagcdn.com/kw.svg',
    },
    name: {
      common: 'Kuwait',
      official: 'State of Kuwait',
      nativeName: {
        ara: {
          official: 'دولة الكويت',
          common: 'الكويت',
        },
      },
    },
    capital: ['Kuwait City'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 4270563,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ax.png',
      svg: 'https://flagcdn.com/ax.svg',
    },
    name: {
      common: 'Åland Islands',
      official: 'Åland Islands',
      nativeName: {
        swe: {
          official: 'Landskapet Åland',
          common: 'Åland',
        },
      },
    },
    capital: ['Mariehamn'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 29458,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/vi.png',
      svg: 'https://flagcdn.com/vi.svg',
    },
    name: {
      common: 'United States Virgin Islands',
      official: 'Virgin Islands of the United States',
      nativeName: {
        eng: {
          official: 'Virgin Islands of the United States',
          common: 'United States Virgin Islands',
        },
      },
    },
    capital: ['Charlotte Amalie'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 106290,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bv.png',
      svg: 'https://flagcdn.com/bv.svg',
    },
    name: {
      common: 'Bouvet Island',
      official: 'Bouvet Island',
      nativeName: {
        nor: {
          official: 'Bouvetøya',
          common: 'Bouvetøya',
        },
      },
    },
    capital: [],
    region: 'Antarctic',
    subregion: '',
    population: 0,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gb.png',
      svg: 'https://flagcdn.com/gb.svg',
    },
    name: {
      common: 'United Kingdom',
      official: 'United Kingdom of Great Britain and Northern Ireland',
      nativeName: {
        eng: {
          official: 'United Kingdom of Great Britain and Northern Ireland',
          common: 'United Kingdom',
        },
      },
    },
    capital: ['London'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 67215293,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/hn.png',
      svg: 'https://flagcdn.com/hn.svg',
    },
    name: {
      common: 'Honduras',
      official: 'Republic of Honduras',
      nativeName: {
        spa: {
          official: 'República de Honduras',
          common: 'Honduras',
        },
      },
    },
    capital: ['Tegucigalpa'],
    region: 'Americas',
    subregion: 'Central America',
    population: 9904608,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/gs.png',
      svg: 'https://flagcdn.com/gs.svg',
    },
    name: {
      common: 'South Georgia',
      official: 'South Georgia and the South Sandwich Islands',
      nativeName: {
        eng: {
          official: 'South Georgia and the South Sandwich Islands',
          common: 'South Georgia',
        },
      },
    },
    capital: ['King Edward Point'],
    region: 'Antarctic',
    subregion: '',
    population: 30,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/kh.png',
      svg: 'https://flagcdn.com/kh.svg',
    },
    name: {
      common: 'Cambodia',
      official: 'Kingdom of Cambodia',
      nativeName: {
        khm: {
          official: 'ព្រះរាជាណាចក្រកម្ពុជា',
          common: 'Kâmpŭchéa',
        },
      },
    },
    capital: ['Phnom Penh'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    population: 16718971,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/mk.png',
      svg: 'https://flagcdn.com/mk.svg',
    },
    name: {
      common: 'North Macedonia',
      official: 'Republic of North Macedonia',
      nativeName: {
        mkd: {
          official: 'Република Северна Македонија',
          common: 'Македонија',
        },
      },
    },
    capital: ['Skopje'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    population: 2077132,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ir.png',
      svg: 'https://flagcdn.com/ir.svg',
    },
    name: {
      common: 'Iran',
      official: 'Islamic Republic of Iran',
      nativeName: {
        fas: {
          official: 'جمهوری اسلامی ایران',
          common: 'ایران',
        },
      },
    },
    capital: ['Tehran'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 83992953,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/pa.png',
      svg: 'https://flagcdn.com/pa.svg',
    },
    name: {
      common: 'Panama',
      official: 'Republic of Panama',
      nativeName: {
        spa: {
          official: 'República de Panamá',
          common: 'Panamá',
        },
      },
    },
    capital: ['Panama City'],
    region: 'Americas',
    subregion: 'Central America',
    population: 4314768,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ck.png',
      svg: 'https://flagcdn.com/ck.svg',
    },
    name: {
      common: 'Cook Islands',
      official: 'Cook Islands',
      nativeName: {
        eng: {
          official: 'Cook Islands',
          common: 'Cook Islands',
        },
        rar: {
          official: "Kūki 'Āirani",
          common: "Kūki 'Āirani",
        },
      },
    },
    capital: ['Avarua'],
    region: 'Oceania',
    subregion: 'Polynesia',
    population: 18100,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ad.png',
      svg: 'https://flagcdn.com/ad.svg',
    },
    name: {
      common: 'Andorra',
      official: 'Principality of Andorra',
      nativeName: {
        cat: {
          official: "Principat d'Andorra",
          common: 'Andorra',
        },
      },
    },
    capital: ['Andorra la Vella'],
    region: 'Europe',
    subregion: 'Southern Europe',
    population: 77265,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bi.png',
      svg: 'https://flagcdn.com/bi.svg',
    },
    name: {
      common: 'Burundi',
      official: 'Republic of Burundi',
      nativeName: {
        fra: {
          official: 'République du Burundi',
          common: 'Burundi',
        },
        run: {
          official: "Republika y'Uburundi ",
          common: 'Uburundi',
        },
      },
    },
    capital: ['Gitega'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 11890781,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tt.png',
      svg: 'https://flagcdn.com/tt.svg',
    },
    name: {
      common: 'Trinidad and Tobago',
      official: 'Republic of Trinidad and Tobago',
      nativeName: {
        eng: {
          official: 'Republic of Trinidad and Tobago',
          common: 'Trinidad and Tobago',
        },
      },
    },
    capital: ['Port of Spain'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 1399491,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/km.png',
      svg: 'https://flagcdn.com/km.svg',
    },
    name: {
      common: 'Comoros',
      official: 'Union of the Comoros',
      nativeName: {
        ara: {
          official: 'الاتحاد القمري',
          common: 'القمر‎',
        },
        fra: {
          official: 'Union des Comores',
          common: 'Comores',
        },
        zdj: {
          official: 'Udzima wa Komori',
          common: 'Komori',
        },
      },
    },
    capital: ['Moroni'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 869595,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/tf.png',
      svg: 'https://flagcdn.com/tf.svg',
    },
    name: {
      common: 'French Southern and Antarctic Lands',
      official: 'Territory of the French Southern and Antarctic Lands',
      nativeName: {
        fra: {
          official:
            'Territoire des Terres australes et antarctiques françaises',
          common: 'Terres australes et antarctiques françaises',
        },
      },
    },
    capital: ['Port-aux-Français'],
    region: 'Antarctic',
    subregion: '',
    population: 400,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/xk.png',
      svg: 'https://flagcdn.com/xk.svg',
    },
    name: {
      common: 'Kosovo',
      official: 'Republic of Kosovo',
      nativeName: {
        sqi: {
          official: 'Republika e Kosovës',
          common: 'Kosova',
        },
        srp: {
          official: 'Република Косово',
          common: 'Косово',
        },
      },
    },
    capital: ['Pristina'],
    region: 'Europe',
    subregion: 'Southeast Europe',
    population: 1775378,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ng.png',
      svg: 'https://flagcdn.com/ng.svg',
    },
    name: {
      common: 'Nigeria',
      official: 'Federal Republic of Nigeria',
      nativeName: {
        eng: {
          official: 'Federal Republic of Nigeria',
          common: 'Nigeria',
        },
      },
    },
    capital: ['Abuja'],
    region: 'Africa',
    subregion: 'Western Africa',
    population: 206139587,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/pl.png',
      svg: 'https://flagcdn.com/pl.svg',
    },
    name: {
      common: 'Poland',
      official: 'Republic of Poland',
      nativeName: {
        pol: {
          official: 'Rzeczpospolita Polska',
          common: 'Polska',
        },
      },
    },
    capital: ['Warsaw'],
    region: 'Europe',
    subregion: 'Central Europe',
    population: 37950802,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/nu.png',
      svg: 'https://flagcdn.com/nu.svg',
    },
    name: {
      common: 'Niue',
      official: 'Niue',
      nativeName: {
        eng: {
          official: 'Niue',
          common: 'Niue',
        },
        niu: {
          official: 'Niuē',
          common: 'Niuē',
        },
      },
    },
    capital: ['Alofi'],
    region: 'Oceania',
    subregion: 'Polynesia',
    population: 1470,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/nc.png',
      svg: 'https://flagcdn.com/nc.svg',
    },
    name: {
      common: 'New Caledonia',
      official: 'New Caledonia',
      nativeName: {
        fra: {
          official: 'Nouvelle-Calédonie',
          common: 'Nouvelle-Calédonie',
        },
      },
    },
    capital: ['Nouméa'],
    region: 'Oceania',
    subregion: 'Melanesia',
    population: 271960,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/et.png',
      svg: 'https://flagcdn.com/et.svg',
    },
    name: {
      common: 'Ethiopia',
      official: 'Federal Democratic Republic of Ethiopia',
      nativeName: {
        amh: {
          official: 'የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ',
          common: 'ኢትዮጵያ',
        },
      },
    },
    capital: ['Addis Ababa'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 114963583,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/de.png',
      svg: 'https://flagcdn.com/de.svg',
    },
    name: {
      common: 'Germany',
      official: 'Federal Republic of Germany',
      nativeName: {
        deu: {
          official: 'Bundesrepublik Deutschland',
          common: 'Deutschland',
        },
      },
    },
    capital: ['Berlin'],
    region: 'Europe',
    subregion: 'Western Europe',
    population: 83240525,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/az.png',
      svg: 'https://flagcdn.com/az.svg',
    },
    name: {
      common: 'Azerbaijan',
      official: 'Republic of Azerbaijan',
      nativeName: {
        aze: {
          official: 'Azərbaycan Respublikası',
          common: 'Azərbaycan',
        },
        rus: {
          official: 'Азербайджанская Республика',
          common: 'Азербайджан',
        },
      },
    },
    capital: ['Baku'],
    region: 'Asia',
    subregion: 'Western Asia',
    population: 10110116,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/nl.png',
      svg: 'https://flagcdn.com/nl.svg',
    },
    name: {
      common: 'Netherlands',
      official: 'Kingdom of the Netherlands',
      nativeName: {
        nld: {
          official: 'Koninkrijk der Nederlanden',
          common: 'Nederland',
        },
      },
    },
    capital: ['Amsterdam'],
    region: 'Europe',
    subregion: 'Western Europe',
    population: 16655799,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/fr.png',
      svg: 'https://flagcdn.com/fr.svg',
    },
    name: {
      common: 'France',
      official: 'French Republic',
      nativeName: {
        fra: {
          official: 'République française',
          common: 'France',
        },
      },
    },
    capital: ['Paris'],
    region: 'Europe',
    subregion: 'Western Europe',
    population: 67391582,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/np.png',
      svg: 'https://flagcdn.com/np.svg',
    },
    name: {
      common: 'Nepal',
      official: 'Federal Democratic Republic of Nepal',
      nativeName: {
        nep: {
          official: 'नेपाल संघीय लोकतान्त्रिक गणतन्त्र',
          common: 'नेपाल',
        },
      },
    },
    capital: ['Kathmandu'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 29136808,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/bb.png',
      svg: 'https://flagcdn.com/bb.svg',
    },
    name: {
      common: 'Barbados',
      official: 'Barbados',
      nativeName: {
        eng: {
          official: 'Barbados',
          common: 'Barbados',
        },
      },
    },
    capital: ['Bridgetown'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 287371,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/je.png',
      svg: 'https://flagcdn.com/je.svg',
    },
    name: {
      common: 'Jersey',
      official: 'Bailiwick of Jersey',
      nativeName: {
        eng: {
          official: 'Bailiwick of Jersey',
          common: 'Jersey',
        },
        fra: {
          official: 'Bailliage de Jersey',
          common: 'Jersey',
        },
        nrf: {
          official: 'Bailliage dé Jèrri',
          common: 'Jèrri',
        },
      },
    },
    capital: ['Saint Helier'],
    region: 'Europe',
    subregion: 'Northern Europe',
    population: 100800,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/in.png',
      svg: 'https://flagcdn.com/in.svg',
    },
    name: {
      common: 'India',
      official: 'Republic of India',
      nativeName: {
        eng: {
          official: 'Republic of India',
          common: 'India',
        },
        hin: {
          official: 'भारत गणराज्य',
          common: 'भारत',
        },
        tam: {
          official: 'இந்தியக் குடியரசு',
          common: 'இந்தியா',
        },
      },
    },
    capital: ['New Delhi'],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 1380004385,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/kg.png',
      svg: 'https://flagcdn.com/kg.svg',
    },
    name: {
      common: 'Kyrgyzstan',
      official: 'Kyrgyz Republic',
      nativeName: {
        kir: {
          official: 'Кыргыз Республикасы',
          common: 'Кыргызстан',
        },
        rus: {
          official: 'Кыргызская Республика',
          common: 'Киргизия',
        },
      },
    },
    capital: ['Bishkek'],
    region: 'Asia',
    subregion: 'Central Asia',
    population: 6591600,
  },
  {
    flags: {
      png: 'https://flagcdn.com/w320/ss.png',
      svg: 'https://flagcdn.com/ss.svg',
    },
    name: {
      common: 'South Sudan',
      official: 'Republic of South Sudan',
      nativeName: {
        eng: {
          official: 'Republic of South Sudan',
          common: 'South Sudan',
        },
      },
    },
    capital: ['Juba'],
    region: 'Africa',
    subregion: 'Middle Africa',
    population: 11193729,
  },
];
