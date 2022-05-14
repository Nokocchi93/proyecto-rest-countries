import { Country } from '../app/country';

// https://restcountries.com/v3.1/all?fields=name,capital,currencies,borders,population

export const COUNTRIES: Country[] = [
  {
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
    currencies: { UYU: { name: 'Uruguayan peso', symbol: '$' } },
    capital: ['Montevideo'],
    borders: ['ARG', 'BRA'],
    population: 3473727,
  },
  {
    name: {
      common: 'Paraguay',
      official: 'Republic of Paraguay',
      nativeName: {
        grn: { official: 'Tetã Paraguái', common: 'Paraguái' },
        spa: { official: 'República de Paraguay', common: 'Paraguay' },
      },
    },
    currencies: { PYG: { name: 'Paraguayan guaraní', symbol: '₲' } },
    capital: ['Asunción'],
    borders: ['ARG', 'BOL', 'BRA'],
    population: 7132530,
  },
  {
    name: {
      common: 'Gambia',
      official: 'Republic of the Gambia',
      nativeName: {
        eng: { official: 'Republic of the Gambia', common: 'Gambia' },
      },
    },
    currencies: { GMD: { name: 'dalasi', symbol: 'D' } },
    capital: ['Banjul'],
    borders: ['SEN'],
    population: 2416664,
  },
  {
    name: {
      common: 'Djibouti',
      official: 'Republic of Djibouti',
      nativeName: {
        ara: { official: 'جمهورية جيبوتي', common: 'جيبوتي‎' },
        fra: { official: 'République de Djibouti', common: 'Djibouti' },
      },
    },
    currencies: { DJF: { name: 'Djiboutian franc', symbol: 'Fr' } },
    capital: ['Djibouti'],
    borders: ['ERI', 'ETH', 'SOM'],
    population: 988002,
  },
  {
    name: {
      common: 'Martinique',
      official: 'Martinique',
      nativeName: {
        fra: { official: 'Martinique', common: 'Martinique' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Fort-de-France'],
    borders: [],
    population: 378243,
  },
  {
    name: {
      common: 'Guam',
      official: 'Guam',
      nativeName: {
        cha: { official: 'Guåhån', common: 'Guåhån' },
        eng: { official: 'Guam', common: 'Guam' },
        spa: { official: 'Guam', common: 'Guam' },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Hagåtña'],
    borders: [],
    population: 168783,
  },
  {
    name: {
      common: 'Georgia',
      official: 'Georgia',
      nativeName: {
        kat: { official: 'საქართველო', common: 'საქართველო' },
      },
    },
    currencies: { GEL: { name: 'lari', symbol: '₾' } },
    capital: ['Tbilisi'],
    borders: ['ARM', 'AZE', 'RUS', 'TUR'],
    population: 3714000,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Washington, D.C.'],
    borders: ['CAN', 'MEX'],
    population: 329484123,
  },
  {
    name: {
      common: 'Belize',
      official: 'Belize',
      nativeName: {
        bjz: { official: 'Belize', common: 'Belize' },
        eng: { official: 'Belize', common: 'Belize' },
        spa: { official: 'Belice', common: 'Belice' },
      },
    },
    currencies: { BZD: { name: 'Belize dollar', symbol: '$' } },
    capital: ['Belmopan'],
    borders: ['GTM', 'MEX'],
    population: 397621,
  },
  {
    name: {
      common: 'Mauritius',
      official: 'Republic of Mauritius',
      nativeName: {
        eng: { official: 'Republic of Mauritius', common: 'Mauritius' },
        fra: { official: 'République de Maurice', common: 'Maurice' },
        mfe: { official: 'Republik Moris', common: 'Moris' },
      },
    },
    currencies: { MUR: { name: 'Mauritian rupee', symbol: '₨' } },
    capital: ['Port Louis'],
    borders: [],
    population: 1265740,
  },
  {
    name: {
      common: 'Lebanon',
      official: 'Lebanese Republic',
      nativeName: {
        ara: { official: 'الجمهورية اللبنانية', common: 'لبنان' },
        fra: { official: 'République libanaise', common: 'Liban' },
      },
    },
    currencies: { LBP: { name: 'Lebanese pound', symbol: 'ل.ل' } },
    capital: ['Beirut'],
    borders: ['ISR', 'SYR'],
    population: 6825442,
  },
  {
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
    currencies: { SAR: { name: 'Saudi riyal', symbol: 'ر.س' } },
    capital: ['Riyadh'],
    borders: ['IRQ', 'JOR', 'KWT', 'OMN', 'QAT', 'ARE', 'YEM'],
    population: 34813867,
  },
  {
    name: {
      common: 'Ecuador',
      official: 'Republic of Ecuador',
      nativeName: {
        spa: { official: 'República del Ecuador', common: 'Ecuador' },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Quito'],
    borders: ['COL', 'PER'],
    population: 17643060,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Majuro'],
    borders: [],
    population: 59194,
  },
  {
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
    currencies: { BRL: { name: 'Brazilian real', symbol: 'R$' } },
    capital: ['Brasília'],
    borders: [
      'ARG',
      'BOL',
      'COL',
      'GUF',
      'GUY',
      'PRY',
      'PER',
      'SUR',
      'URY',
      'VEN',
    ],
    population: 212559409,
  },
  {
    name: {
      common: 'Uganda',
      official: 'Republic of Uganda',
      nativeName: {
        eng: { official: 'Republic of Uganda', common: 'Uganda' },
        swa: { official: 'Republic of Uganda', common: 'Uganda' },
      },
    },
    currencies: { UGX: { name: 'Ugandan shilling', symbol: 'Sh' } },
    capital: ['Kampala'],
    borders: ['COD', 'KEN', 'RWA', 'SSD', 'TZA'],
    population: 45741000,
  },
  {
    name: {
      common: 'Qatar',
      official: 'State of Qatar',
      nativeName: { ara: { official: 'دولة قطر', common: 'قطر' } },
    },
    currencies: { QAR: { name: 'Qatari riyal', symbol: 'ر.ق' } },
    capital: ['Doha'],
    borders: ['SAU'],
    population: 2881060,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Dili'],
    borders: ['IDN'],
    population: 1318442,
  },
  {
    name: {
      common: 'Mongolia',
      official: 'Mongolia',
      nativeName: {
        mon: { official: 'Монгол улс', common: 'Монгол улс' },
      },
    },
    currencies: { MNT: { name: 'Mongolian tögrög', symbol: '₮' } },
    capital: ['Ulan Bator'],
    borders: ['CHN', 'RUS'],
    population: 3278292,
  },
  {
    name: {
      common: 'Chile',
      official: 'Republic of Chile',
      nativeName: {
        spa: { official: 'República de Chile', common: 'Chile' },
      },
    },
    currencies: { CLP: { name: 'Chilean peso', symbol: '$' } },
    capital: ['Santiago'],
    borders: ['ARG', 'BOL', 'PER'],
    population: 19116209,
  },
  {
    name: {
      common: 'Liberia',
      official: 'Republic of Liberia',
      nativeName: {
        eng: { official: 'Republic of Liberia', common: 'Liberia' },
      },
    },
    currencies: { LRD: { name: 'Liberian dollar', symbol: '$' } },
    capital: ['Monrovia'],
    borders: ['GIN', 'CIV', 'SLE'],
    population: 5057677,
  },
  {
    name: {
      common: 'Nauru',
      official: 'Republic of Nauru',
      nativeName: {
        eng: { official: 'Republic of Nauru', common: 'Nauru' },
        nau: { official: 'Republic of Nauru', common: 'Nauru' },
      },
    },
    currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
    capital: ['Yaren'],
    borders: [],
    population: 10834,
  },
  {
    name: {
      common: 'Réunion',
      official: 'Réunion Island',
      nativeName: {
        fra: { official: 'Ile de la Réunion', common: 'La Réunion' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Saint-Denis'],
    borders: [],
    population: 840974,
  },
  {
    name: {
      common: 'Montserrat',
      official: 'Montserrat',
      nativeName: {
        eng: { official: 'Montserrat', common: 'Montserrat' },
      },
    },
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ['Plymouth'],
    borders: [],
    population: 4922,
  },
  {
    name: {
      common: 'Taiwan',
      official: 'Republic of China (Taiwan)',
      nativeName: { zho: { official: '中華民國', common: '台灣' } },
    },
    currencies: { TWD: { name: 'New Taiwan dollar', symbol: '$' } },
    capital: ['Taipei'],
    borders: [],
    population: 23503349,
  },
  {
    name: {
      common: 'Antarctica',
      official: 'Antarctica',
      nativeName: {},
    },
    currencies: {},
    capital: [],
    borders: [],
    population: 1000,
  },
  {
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
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Saint-Pierre'],
    borders: [],
    population: 6069,
  },
  {
    name: {
      common: 'Argentina',
      official: 'Argentine Republic',
      nativeName: {
        grn: { official: 'Argentine Republic', common: 'Argentina' },
        spa: { official: 'República Argentina', common: 'Argentina' },
      },
    },
    currencies: { ARS: { name: 'Argentine peso', symbol: '$' } },
    capital: ['Buenos Aires'],
    borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
    population: 45376763,
  },
  {
    name: {
      common: 'Togo',
      official: 'Togolese Republic',
      nativeName: {
        fra: { official: 'République togolaise', common: 'Togo' },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Lomé'],
    borders: ['BEN', 'BFA', 'GHA'],
    population: 8278737,
  },
  {
    name: {
      common: 'Austria',
      official: 'Republic of Austria',
      nativeName: {
        bar: { official: 'Republik Österreich', common: 'Österreich' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Vienna'],
    borders: ['CZE', 'DEU', 'HUN', 'ITA', 'LIE', 'SVK', 'SVN', 'CHE'],
    population: 8917205,
  },
  {
    name: {
      common: 'Grenada',
      official: 'Grenada',
      nativeName: { eng: { official: 'Grenada', common: 'Grenada' } },
    },
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ["St. George's"],
    borders: [],
    population: 112519,
  },
  {
    name: {
      common: 'Faroe Islands',
      official: 'Faroe Islands',
      nativeName: {
        dan: { official: 'Færøerne', common: 'Færøerne' },
        fao: { official: 'Føroyar', common: 'Føroyar' },
      },
    },
    currencies: {
      DKK: { name: 'Danish krone', symbol: 'kr' },
      FOK: { name: 'Faroese króna', symbol: 'kr' },
    },
    capital: ['Tórshavn'],
    borders: [],
    population: 48865,
  },
  {
    name: {
      common: 'Morocco',
      official: 'Kingdom of Morocco',
      nativeName: {
        ara: { official: 'المملكة المغربية', common: 'المغرب' },
        ber: { official: 'ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ', common: 'ⵍⵎⴰⵖⵔⵉⴱ' },
      },
    },
    currencies: { MAD: { name: 'Moroccan dirham', symbol: 'د.م.' } },
    capital: ['Rabat'],
    borders: ['DZA', 'ESH', 'ESP'],
    population: 36910558,
  },
  {
    name: {
      common: 'Anguilla',
      official: 'Anguilla',
      nativeName: { eng: { official: 'Anguilla', common: 'Anguilla' } },
    },
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ['The Valley'],
    borders: [],
    population: 13452,
  },
  {
    name: {
      common: 'Palau',
      official: 'Republic of Palau',
      nativeName: {
        eng: { official: 'Republic of Palau', common: 'Palau' },
        pau: { official: 'Beluu er a Belau', common: 'Belau' },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Ngerulmud'],
    borders: [],
    population: 18092,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Saipan'],
    borders: [],
    population: 57557,
  },
  {
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
    currencies: { MRU: { name: 'Mauritanian ouguiya', symbol: 'UM' } },
    capital: ['Nouakchott'],
    borders: ['DZA', 'MLI', 'SEN', 'ESH'],
    population: 4649660,
  },
  {
    name: {
      common: 'Ukraine',
      official: 'Ukraine',
      nativeName: { ukr: { official: 'Україна', common: 'Україна' } },
    },
    currencies: { UAH: { name: 'Ukrainian hryvnia', symbol: '₴' } },
    capital: ['Kyiv'],
    borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK'],
    population: 44134693,
  },
  {
    name: {
      common: 'China',
      official: "People's Republic of China",
      nativeName: {
        zho: { official: '中华人民共和国', common: '中国' },
      },
    },
    currencies: { CNY: { name: 'Chinese yuan', symbol: '¥' } },
    capital: ['Beijing'],
    borders: [
      'AFG',
      'BTN',
      'MMR',
      'HKG',
      'IND',
      'KAZ',
      'NPL',
      'PRK',
      'KGZ',
      'LAO',
      'MAC',
      'MNG',
      'PAK',
      'RUS',
      'TJK',
      'VNM',
    ],
    population: 1402112000,
  },
  {
    name: {
      common: 'Lesotho',
      official: 'Kingdom of Lesotho',
      nativeName: {
        eng: { official: 'Kingdom of Lesotho', common: 'Lesotho' },
        sot: { official: 'Kingdom of Lesotho', common: 'Lesotho' },
      },
    },
    currencies: {
      LSL: { name: 'Lesotho loti', symbol: 'L' },
      ZAR: { name: 'South African rand', symbol: 'R' },
    },
    capital: ['Maseru'],
    borders: ['ZAF'],
    population: 2142252,
  },
  {
    name: {
      common: 'Cyprus',
      official: 'Republic of Cyprus',
      nativeName: {
        ell: { official: 'Δημοκρατία της Κύπρος', common: 'Κύπρος' },
        tur: { official: 'Kıbrıs Cumhuriyeti', common: 'Kıbrıs' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Nicosia'],
    borders: [],
    population: 1207361,
  },
  {
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
    currencies: { CDF: { name: 'Congolese franc', symbol: 'FC' } },
    capital: ['Kinshasa'],
    borders: ['AGO', 'BDI', 'CAF', 'COG', 'RWA', 'SSD', 'TZA', 'UGA', 'ZMB'],
    population: 89561404,
  },
  {
    name: {
      common: 'Russia',
      official: 'Russian Federation',
      nativeName: {
        rus: { official: 'Российская Федерация', common: 'Россия' },
      },
    },
    currencies: { RUB: { name: 'Russian ruble', symbol: '₽' } },
    capital: ['Moscow'],
    borders: [
      'AZE',
      'BLR',
      'CHN',
      'EST',
      'FIN',
      'GEO',
      'KAZ',
      'PRK',
      'LVA',
      'LTU',
      'MNG',
      'NOR',
      'POL',
      'UKR',
    ],
    population: 144104080,
  },
  {
    name: {
      common: 'Bangladesh',
      official: "People's Republic of Bangladesh",
      nativeName: {
        ben: { official: 'বাংলাদেশ গণপ্রজাতন্ত্রী', common: 'বাংলাদেশ' },
      },
    },
    currencies: { BDT: { name: 'Bangladeshi taka', symbol: '৳' } },
    capital: ['Dhaka'],
    borders: ['MMR', 'IND'],
    population: 164689383,
  },
  {
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
    currencies: { ZAR: { name: 'South African rand', symbol: 'R' } },
    capital: ['Pretoria', 'Bloemfontein', 'Cape Town'],
    borders: ['BWA', 'LSO', 'MOZ', 'NAM', 'SWZ', 'ZWE'],
    population: 59308690,
  },
  {
    name: {
      common: 'Curaçao',
      official: 'Country of Curaçao',
      nativeName: {
        eng: { official: 'Country of Curaçao', common: 'Curaçao' },
        nld: { official: 'Land Curaçao', common: 'Curaçao' },
        pap: { official: 'Pais Kòrsou', common: 'Pais Kòrsou' },
      },
    },
    currencies: {
      ANG: { name: 'Netherlands Antillean guilder', symbol: 'ƒ' },
    },
    capital: ['Willemstad'],
    borders: [],
    population: 155014,
  },
  {
    name: {
      common: 'Guatemala',
      official: 'Republic of Guatemala',
      nativeName: {
        spa: { official: 'República de Guatemala', common: 'Guatemala' },
      },
    },
    currencies: { GTQ: { name: 'Guatemalan quetzal', symbol: 'Q' } },
    capital: ['Guatemala City'],
    borders: ['BLZ', 'SLV', 'HND', 'MEX'],
    population: 16858333,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['San Juan'],
    borders: [],
    population: 3194034,
  },
  {
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
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ["Saint John's"],
    borders: [],
    population: 97928,
  },
  {
    name: {
      common: 'Israel',
      official: 'State of Israel',
      nativeName: {
        ara: { official: 'دولة إسرائيل', common: 'إسرائيل' },
        heb: { official: 'מדינת ישראל', common: 'ישראל' },
      },
    },
    currencies: { ILS: { name: 'Israeli new shekel', symbol: '₪' } },
    capital: ['Jerusalem'],
    borders: ['EGY', 'JOR', 'LBN', 'PSE', 'SYR'],
    population: 9216900,
  },
  {
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
    currencies: { GYD: { name: 'Guyanese dollar', symbol: '$' } },
    capital: ['Georgetown'],
    borders: ['BRA', 'SUR', 'VEN'],
    population: 786559,
  },
  {
    name: {
      common: 'Cayman Islands',
      official: 'Cayman Islands',
      nativeName: {
        eng: { official: 'Cayman Islands', common: 'Cayman Islands' },
      },
    },
    currencies: { KYD: { name: 'Cayman Islands dollar', symbol: '$' } },
    capital: ['George Town'],
    borders: [],
    population: 65720,
  },
  {
    name: {
      common: 'Croatia',
      official: 'Republic of Croatia',
      nativeName: {
        hrv: { official: 'Republika Hrvatska', common: 'Hrvatska' },
      },
    },
    currencies: { HRK: { name: 'Croatian kuna', symbol: 'kn' } },
    capital: ['Zagreb'],
    borders: ['BIH', 'HUN', 'MNE', 'SRB', 'SVN'],
    population: 4047200,
  },
  {
    name: {
      common: 'Iceland',
      official: 'Iceland',
      nativeName: { isl: { official: 'Ísland', common: 'Ísland' } },
    },
    currencies: { ISK: { name: 'Icelandic króna', symbol: 'kr' } },
    capital: ['Reykjavik'],
    borders: [],
    population: 366425,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Kralendijk'],
    borders: [],
    population: 25987,
  },
  {
    name: {
      common: 'Sint Maarten',
      official: 'Sint Maarten',
      nativeName: {
        eng: { official: 'Sint Maarten', common: 'Sint Maarten' },
        fra: { official: 'Saint-Martin', common: 'Saint-Martin' },
        nld: { official: 'Sint Maarten', common: 'Sint Maarten' },
      },
    },
    currencies: {
      ANG: { name: 'Netherlands Antillean guilder', symbol: 'ƒ' },
    },
    capital: ['Philipsburg'],
    borders: ['MAF'],
    population: 40812,
  },
  {
    name: {
      common: 'Namibia',
      official: 'Republic of Namibia',
      nativeName: {
        afr: { official: 'Republiek van Namibië', common: 'Namibië' },
        deu: { official: 'Republik Namibia', common: 'Namibia' },
        eng: { official: 'Republic of Namibia', common: 'Namibia' },
        her: { official: 'Republic of Namibia', common: 'Namibia' },
        hgm: { official: 'Republic of Namibia', common: 'Namibia' },
        kwn: { official: 'Republic of Namibia', common: 'Namibia' },
        loz: { official: 'Republic of Namibia', common: 'Namibia' },
        ndo: { official: 'Republic of Namibia', common: 'Namibia' },
        tsn: { official: 'Lefatshe la Namibia', common: 'Namibia' },
      },
    },
    currencies: {
      NAD: { name: 'Namibian dollar', symbol: '$' },
      ZAR: { name: 'South African rand', symbol: 'R' },
    },
    capital: ['Windhoek'],
    borders: ['AGO', 'BWA', 'ZAF', 'ZMB'],
    population: 2540916,
  },
  {
    name: {
      common: 'Dominica',
      official: 'Commonwealth of Dominica',
      nativeName: {
        eng: { official: 'Commonwealth of Dominica', common: 'Dominica' },
      },
    },
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ['Roseau'],
    borders: [],
    population: 71991,
  },
  {
    name: {
      common: 'Gibraltar',
      official: 'Gibraltar',
      nativeName: {
        eng: { official: 'Gibraltar', common: 'Gibraltar' },
      },
    },
    currencies: { GIP: { name: 'Gibraltar pound', symbol: '£' } },
    capital: ['Gibraltar'],
    borders: ['ESP'],
    population: 33691,
  },
  {
    name: {
      common: 'Senegal',
      official: 'Republic of Senegal',
      nativeName: {
        fra: { official: 'République du Sénégal', common: 'Sénégal' },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Dakar'],
    borders: ['GMB', 'GIN', 'GNB', 'MLI', 'MRT'],
    population: 16743930,
  },
  {
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
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ['Basseterre'],
    borders: [],
    population: 53192,
  },
  {
    name: {
      common: 'Oman',
      official: 'Sultanate of Oman',
      nativeName: { ara: { official: 'سلطنة عمان', common: 'عمان' } },
    },
    currencies: { OMR: { name: 'Omani rial', symbol: 'ر.ع.' } },
    capital: ['Muscat'],
    borders: ['SAU', 'ARE', 'YEM'],
    population: 5106622,
  },
  {
    name: {
      common: 'Kuwait',
      official: 'State of Kuwait',
      nativeName: { ara: { official: 'دولة الكويت', common: 'الكويت' } },
    },
    currencies: { KWD: { name: 'Kuwaiti dinar', symbol: 'د.ك' } },
    capital: ['Kuwait City'],
    borders: ['IRQ', 'SAU'],
    population: 4270563,
  },
  {
    name: {
      common: 'Åland Islands',
      official: 'Åland Islands',
      nativeName: {
        swe: { official: 'Landskapet Åland', common: 'Åland' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Mariehamn'],
    borders: [],
    population: 29458,
  },
  {
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
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Charlotte Amalie'],
    borders: [],
    population: 106290,
  },
  {
    name: {
      common: 'Bouvet Island',
      official: 'Bouvet Island',
      nativeName: {
        nor: { official: 'Bouvetøya', common: 'Bouvetøya' },
      },
    },
    currencies: {},
    capital: [],
    borders: [],
    population: 0,
  },
  {
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
    currencies: { GBP: { name: 'British pound', symbol: '£' } },
    capital: ['London'],
    borders: ['IRL'],
    population: 67215293,
  },
  {
    name: {
      common: 'Honduras',
      official: 'Republic of Honduras',
      nativeName: {
        spa: { official: 'República de Honduras', common: 'Honduras' },
      },
    },
    currencies: { HNL: { name: 'Honduran lempira', symbol: 'L' } },
    capital: ['Tegucigalpa'],
    borders: ['GTM', 'SLV', 'NIC'],
    population: 9904608,
  },
  {
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
    currencies: { SHP: { name: 'Saint Helena pound', symbol: '£' } },
    capital: ['King Edward Point'],
    borders: [],
    population: 30,
  },
  {
    name: {
      common: 'Cambodia',
      official: 'Kingdom of Cambodia',
      nativeName: {
        khm: { official: 'ព្រះរាជាណាចក្រកម្ពុជា', common: 'Kâmpŭchéa' },
      },
    },
    currencies: {
      KHR: { name: 'Cambodian riel', symbol: '៛' },
      USD: { name: 'United States dollar', symbol: '$' },
    },
    capital: ['Phnom Penh'],
    borders: ['LAO', 'THA', 'VNM'],
    population: 16718971,
  },
  {
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
    currencies: { MKD: { name: 'denar', symbol: 'den' } },
    capital: ['Skopje'],
    borders: ['ALB', 'BGR', 'GRC', 'UNK', 'SRB'],
    population: 2077132,
  },
  {
    name: {
      common: 'Iran',
      official: 'Islamic Republic of Iran',
      nativeName: {
        fas: { official: 'جمهوری اسلامی ایران', common: 'ایران' },
      },
    },
    currencies: { IRR: { name: 'Iranian rial', symbol: '﷼' } },
    capital: ['Tehran'],
    borders: ['AFG', 'ARM', 'AZE', 'IRQ', 'PAK', 'TUR', 'TKM'],
    population: 83992953,
  },
  {
    name: {
      common: 'Panama',
      official: 'Republic of Panama',
      nativeName: {
        spa: { official: 'República de Panamá', common: 'Panamá' },
      },
    },
    currencies: {
      PAB: { name: 'Panamanian balboa', symbol: 'B/.' },
      USD: { name: 'United States dollar', symbol: '$' },
    },
    capital: ['Panama City'],
    borders: ['COL', 'CRI'],
    population: 4314768,
  },
  {
    name: {
      common: 'Cook Islands',
      official: 'Cook Islands',
      nativeName: {
        eng: { official: 'Cook Islands', common: 'Cook Islands' },
        rar: { official: "Kūki 'Āirani", common: "Kūki 'Āirani" },
      },
    },
    currencies: {
      CKD: { name: 'Cook Islands dollar', symbol: '$' },
      NZD: { name: 'New Zealand dollar', symbol: '$' },
    },
    capital: ['Avarua'],
    borders: [],
    population: 18100,
  },
  {
    name: {
      common: 'Andorra',
      official: 'Principality of Andorra',
      nativeName: {
        cat: { official: "Principat d'Andorra", common: 'Andorra' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Andorra la Vella'],
    borders: ['FRA', 'ESP'],
    population: 77265,
  },
  {
    name: {
      common: 'Burundi',
      official: 'Republic of Burundi',
      nativeName: {
        fra: { official: 'République du Burundi', common: 'Burundi' },
        run: { official: "Republika y'Uburundi ", common: 'Uburundi' },
      },
    },
    currencies: { BIF: { name: 'Burundian franc', symbol: 'Fr' } },
    capital: ['Gitega'],
    borders: ['COD', 'RWA', 'TZA'],
    population: 11890781,
  },
  {
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
    currencies: {
      TTD: { name: 'Trinidad and Tobago dollar', symbol: '$' },
    },
    capital: ['Port of Spain'],
    borders: [],
    population: 1399491,
  },
  {
    name: {
      common: 'Comoros',
      official: 'Union of the Comoros',
      nativeName: {
        ara: { official: 'الاتحاد القمري', common: 'القمر‎' },
        fra: { official: 'Union des Comores', common: 'Comores' },
        zdj: { official: 'Udzima wa Komori', common: 'Komori' },
      },
    },
    currencies: { KMF: { name: 'Comorian franc', symbol: 'Fr' } },
    capital: ['Moroni'],
    borders: [],
    population: 869595,
  },
  {
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
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Port-aux-Français'],
    borders: [],
    population: 400,
  },
  {
    name: {
      common: 'Kosovo',
      official: 'Republic of Kosovo',
      nativeName: {
        sqi: { official: 'Republika e Kosovës', common: 'Kosova' },
        srp: { official: 'Република Косово', common: 'Косово' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Pristina'],
    borders: ['ALB', 'MKD', 'MNE', 'SRB'],
    population: 1775378,
  },
  {
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
    currencies: { NGN: { name: 'Nigerian naira', symbol: '₦' } },
    capital: ['Abuja'],
    borders: ['BEN', 'CMR', 'TCD', 'NER'],
    population: 206139587,
  },
  {
    name: {
      common: 'Poland',
      official: 'Republic of Poland',
      nativeName: {
        pol: { official: 'Rzeczpospolita Polska', common: 'Polska' },
      },
    },
    currencies: { PLN: { name: 'Polish złoty', symbol: 'zł' } },
    capital: ['Warsaw'],
    borders: ['BLR', 'CZE', 'DEU', 'LTU', 'RUS', 'SVK', 'UKR'],
    population: 37950802,
  },
  {
    name: {
      common: 'Niue',
      official: 'Niue',
      nativeName: {
        eng: { official: 'Niue', common: 'Niue' },
        niu: { official: 'Niuē', common: 'Niuē' },
      },
    },
    currencies: { NZD: { name: 'New Zealand dollar', symbol: '$' } },
    capital: ['Alofi'],
    borders: [],
    population: 1470,
  },
  {
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
    currencies: { XPF: { name: 'CFP franc', symbol: '₣' } },
    capital: ['Nouméa'],
    borders: [],
    population: 271960,
  },
  {
    name: {
      common: 'Ethiopia',
      official: 'Federal Democratic Republic of Ethiopia',
      nativeName: {
        amh: { official: 'የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ', common: 'ኢትዮጵያ' },
      },
    },
    currencies: { ETB: { name: 'Ethiopian birr', symbol: 'Br' } },
    capital: ['Addis Ababa'],
    borders: ['DJI', 'ERI', 'KEN', 'SOM', 'SSD', 'SDN'],
    population: 114963583,
  },
  {
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
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Berlin'],
    borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
    population: 83240525,
  },
  {
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
    currencies: { AZN: { name: 'Azerbaijani manat', symbol: '₼' } },
    capital: ['Baku'],
    borders: ['ARM', 'GEO', 'IRN', 'RUS', 'TUR'],
    population: 10110116,
  },
  {
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
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Amsterdam'],
    borders: ['BEL', 'DEU'],
    population: 16655799,
  },
  {
    name: {
      common: 'France',
      official: 'French Republic',
      nativeName: {
        fra: { official: 'République française', common: 'France' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Paris'],
    borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
    population: 67391582,
  },
  {
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
    currencies: { NPR: { name: 'Nepalese rupee', symbol: '₨' } },
    capital: ['Kathmandu'],
    borders: ['CHN', 'IND'],
    population: 29136808,
  },
  {
    name: {
      common: 'Barbados',
      official: 'Barbados',
      nativeName: { eng: { official: 'Barbados', common: 'Barbados' } },
    },
    currencies: { BBD: { name: 'Barbadian dollar', symbol: '$' } },
    capital: ['Bridgetown'],
    borders: [],
    population: 287371,
  },
  {
    name: {
      common: 'Jersey',
      official: 'Bailiwick of Jersey',
      nativeName: {
        eng: { official: 'Bailiwick of Jersey', common: 'Jersey' },
        fra: { official: 'Bailliage de Jersey', common: 'Jersey' },
        nrf: { official: 'Bailliage dé Jèrri', common: 'Jèrri' },
      },
    },
    currencies: {
      GBP: { name: 'British pound', symbol: '£' },
      JEP: { name: 'Jersey pound', symbol: '£' },
    },
    capital: ['Saint Helier'],
    borders: [],
    population: 100800,
  },
  {
    name: {
      common: 'India',
      official: 'Republic of India',
      nativeName: {
        eng: { official: 'Republic of India', common: 'India' },
        hin: { official: 'भारत गणराज्य', common: 'भारत' },
        tam: { official: 'இந்தியக் குடியரசு', common: 'இந்தியா' },
      },
    },
    currencies: { INR: { name: 'Indian rupee', symbol: '₹' } },
    capital: ['New Delhi'],
    borders: ['BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK'],
    population: 1380004385,
  },
  {
    name: {
      common: 'Kyrgyzstan',
      official: 'Kyrgyz Republic',
      nativeName: {
        kir: { official: 'Кыргыз Республикасы', common: 'Кыргызстан' },
        rus: { official: 'Кыргызская Республика', common: 'Киргизия' },
      },
    },
    currencies: { KGS: { name: 'Kyrgyzstani som', symbol: 'с' } },
    capital: ['Bishkek'],
    borders: ['CHN', 'KAZ', 'TJK', 'UZB'],
    population: 6591600,
  },
  {
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
    currencies: { SSP: { name: 'South Sudanese pound', symbol: '£' } },
    capital: ['Juba'],
    borders: ['CAF', 'COD', 'ETH', 'KEN', 'SDN', 'UGA'],
    population: 11193729,
  },
  {
    name: {
      common: 'Iraq',
      official: 'Republic of Iraq',
      nativeName: {
        ara: { official: 'جمهورية العراق', common: 'العراق' },
        arc: { official: 'ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ', common: 'ܩܘܼܛܢܵܐ' },
        ckb: { official: 'کۆماری عێراق', common: 'کۆماری' },
      },
    },
    currencies: { IQD: { name: 'Iraqi dinar', symbol: 'ع.د' } },
    capital: ['Baghdad'],
    borders: ['IRN', 'JOR', 'KWT', 'SAU', 'SYR', 'TUR'],
    population: 40222503,
  },
  {
    name: {
      common: 'Italy',
      official: 'Italian Republic',
      nativeName: {
        ita: { official: 'Repubblica italiana', common: 'Italia' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Rome'],
    borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
    population: 59554023,
  },
  {
    name: {
      common: 'Cuba',
      official: 'Republic of Cuba',
      nativeName: {
        spa: { official: 'República de Cuba', common: 'Cuba' },
      },
    },
    currencies: {
      CUC: { name: 'Cuban convertible peso', symbol: '$' },
      CUP: { name: 'Cuban peso', symbol: '$' },
    },
    capital: ['Havana'],
    borders: [],
    population: 11326616,
  },
  {
    name: {
      common: 'Bhutan',
      official: 'Kingdom of Bhutan',
      nativeName: {
        dzo: { official: 'འབྲུག་རྒྱལ་ཁབ་', common: 'འབྲུག་ཡུལ་' },
      },
    },
    currencies: {
      BTN: { name: 'Bhutanese ngultrum', symbol: 'Nu.' },
      INR: { name: 'Indian rupee', symbol: '₹' },
    },
    capital: ['Thimphu'],
    borders: ['CHN', 'IND'],
    population: 771612,
  },
  {
    name: {
      common: 'Bahamas',
      official: 'Commonwealth of the Bahamas',
      nativeName: {
        eng: {
          official: 'Commonwealth of the Bahamas',
          common: 'Bahamas',
        },
      },
    },
    currencies: {
      BSD: { name: 'Bahamian dollar', symbol: '$' },
      USD: { name: 'United States dollar', symbol: '$' },
    },
    capital: ['Nassau'],
    borders: [],
    population: 393248,
  },
  {
    name: {
      common: 'Norway',
      official: 'Kingdom of Norway',
      nativeName: {
        nno: { official: 'Kongeriket Noreg', common: 'Noreg' },
        nob: { official: 'Kongeriket Norge', common: 'Norge' },
        smi: { official: 'Norgga gonagasriika', common: 'Norgga' },
      },
    },
    currencies: { NOK: { name: 'Norwegian krone', symbol: 'kr' } },
    capital: ['Oslo'],
    borders: ['FIN', 'SWE', 'RUS'],
    population: 5379475,
  },
  {
    name: {
      common: 'Lithuania',
      official: 'Republic of Lithuania',
      nativeName: {
        lit: { official: 'Lietuvos Respublikos', common: 'Lietuva' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Vilnius'],
    borders: ['BLR', 'LVA', 'POL', 'RUS'],
    population: 2794700,
  },
  {
    name: {
      common: 'Kenya',
      official: 'Republic of Kenya',
      nativeName: {
        eng: { official: 'Republic of Kenya', common: 'Kenya' },
        swa: { official: 'Republic of Kenya', common: 'Kenya' },
      },
    },
    currencies: { KES: { name: 'Kenyan shilling', symbol: 'Sh' } },
    capital: ['Nairobi'],
    borders: ['ETH', 'SOM', 'SSD', 'TZA', 'UGA'],
    population: 53771300,
  },
  {
    name: {
      common: 'Pitcairn Islands',
      official: 'Pitcairn Group of Islands',
      nativeName: {
        eng: {
          official: 'Pitcairn Group of Islands',
          common: 'Pitcairn Islands',
        },
      },
    },
    currencies: { NZD: { name: 'New Zealand dollar', symbol: '$' } },
    capital: ['Adamstown'],
    borders: [],
    population: 56,
  },
  {
    name: {
      common: 'Sweden',
      official: 'Kingdom of Sweden',
      nativeName: {
        swe: { official: 'Konungariket Sverige', common: 'Sverige' },
      },
    },
    currencies: { SEK: { name: 'Swedish krona', symbol: 'kr' } },
    capital: ['Stockholm'],
    borders: ['FIN', 'NOR'],
    population: 10353442,
  },
  {
    name: {
      common: 'Guadeloupe',
      official: 'Guadeloupe',
      nativeName: {
        fra: { official: 'Guadeloupe', common: 'Guadeloupe' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Basse-Terre'],
    borders: [],
    population: 400132,
  },
  {
    name: {
      common: 'Gabon',
      official: 'Gabonese Republic',
      nativeName: {
        fra: { official: 'République gabonaise', common: 'Gabon' },
      },
    },
    currencies: {
      XAF: { name: 'Central African CFA franc', symbol: 'Fr' },
    },
    capital: ['Libreville'],
    borders: ['CMR', 'COG', 'GNQ'],
    population: 2225728,
  },
  {
    name: {
      common: 'Macau',
      official:
        "Macao Special Administrative Region of the People's Republic of China",
      nativeName: {
        por: {
          official:
            'Região Administrativa Especial de Macau da República Popular da China',
          common: 'Macau',
        },
        zho: { official: '中华人民共和国澳门特别行政区', common: '澳门' },
      },
    },
    currencies: { MOP: { name: 'Macanese pataca', symbol: 'P' } },
    capital: [],
    borders: ['CHN'],
    population: 649342,
  },
  {
    name: {
      common: 'Guernsey',
      official: 'Bailiwick of Guernsey',
      nativeName: {
        eng: { official: 'Bailiwick of Guernsey', common: 'Guernsey' },
        fra: { official: 'Bailliage de Guernesey', common: 'Guernesey' },
        nfr: { official: 'Dgèrnésiais', common: 'Dgèrnésiais' },
      },
    },
    currencies: {
      GBP: { name: 'British pound', symbol: '£' },
      GGP: { name: 'Guernsey pound', symbol: '£' },
    },
    capital: ['St. Peter Port'],
    borders: [],
    population: 62999,
  },
  {
    name: {
      common: 'Rwanda',
      official: 'Republic of Rwanda',
      nativeName: {
        eng: { official: 'Republic of Rwanda', common: 'Rwanda' },
        fra: { official: 'République rwandaise', common: 'Rwanda' },
        kin: { official: "Repubulika y'u Rwanda", common: 'Rwanda' },
      },
    },
    currencies: { RWF: { name: 'Rwandan franc', symbol: 'Fr' } },
    capital: ['Kigali'],
    borders: ['BDI', 'COD', 'TZA', 'UGA'],
    population: 12952209,
  },
  {
    name: {
      common: 'Syria',
      official: 'Syrian Arab Republic',
      nativeName: {
        ara: { official: 'الجمهورية العربية السورية', common: 'سوريا' },
      },
    },
    currencies: { SYP: { name: 'Syrian pound', symbol: '£' } },
    capital: ['Damascus'],
    borders: ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR'],
    population: 17500657,
  },
  {
    name: {
      common: 'Canada',
      official: 'Canada',
      nativeName: {
        eng: { official: 'Canada', common: 'Canada' },
        fra: { official: 'Canada', common: 'Canada' },
      },
    },
    currencies: { CAD: { name: 'Canadian dollar', symbol: '$' } },
    capital: ['Ottawa'],
    borders: ['USA'],
    population: 38005238,
  },
  {
    name: {
      common: 'Algeria',
      official: "People's Democratic Republic of Algeria",
      nativeName: {
        ara: {
          official: 'الجمهورية الديمقراطية الشعبية الجزائرية',
          common: 'الجزائر',
        },
      },
    },
    currencies: { DZD: { name: 'Algerian dinar', symbol: 'د.ج' } },
    capital: ['Algiers'],
    borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
    population: 44700000,
  },
  {
    name: {
      common: 'British Indian Ocean Territory',
      official: 'British Indian Ocean Territory',
      nativeName: {
        eng: {
          official: 'British Indian Ocean Territory',
          common: 'British Indian Ocean Territory',
        },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Diego Garcia'],
    borders: [],
    population: 3000,
  },
  {
    name: {
      common: 'Western Sahara',
      official: 'Sahrawi Arab Democratic Republic',
      nativeName: {
        ber: {
          official: 'Sahrawi Arab Democratic Republic',
          common: 'Western Sahara',
        },
        mey: {
          official: 'الجمهورية العربية الصحراوية الديمقراطية',
          common: 'الصحراء الغربية',
        },
        spa: {
          official: 'República Árabe Saharaui Democrática',
          common: 'Sahara Occidental',
        },
      },
    },
    currencies: {
      DZD: { name: 'Algerian dinar', symbol: 'دج' },
      MAD: { name: 'Moroccan dirham', symbol: 'DH' },
      MRU: { name: 'Mauritanian ouguiya', symbol: 'UM' },
    },
    capital: ['El Aaiún'],
    borders: ['DZA', 'MRT', 'MAR'],
    population: 510713,
  },
  {
    name: {
      common: 'Isle of Man',
      official: 'Isle of Man',
      nativeName: {
        eng: { official: 'Isle of Man', common: 'Isle of Man' },
        glv: { official: 'Ellan Vannin or Mannin', common: 'Mannin' },
      },
    },
    currencies: {
      GBP: { name: 'British pound', symbol: '£' },
      IMP: { name: 'Manx pound', symbol: '£' },
    },
    capital: ['Douglas'],
    borders: [],
    population: 85032,
  },
  {
    name: {
      common: 'Botswana',
      official: 'Republic of Botswana',
      nativeName: {
        eng: { official: 'Republic of Botswana', common: 'Botswana' },
        tsn: { official: 'Lefatshe la Botswana', common: 'Botswana' },
      },
    },
    currencies: { BWP: { name: 'Botswana pula', symbol: 'P' } },
    capital: ['Gaborone'],
    borders: ['NAM', 'ZAF', 'ZMB', 'ZWE'],
    population: 2351625,
  },
  {
    name: {
      common: 'Kazakhstan',
      official: 'Republic of Kazakhstan',
      nativeName: {
        kaz: { official: 'Қазақстан Республикасы', common: 'Қазақстан' },
        rus: { official: 'Республика Казахстан', common: 'Казахстан' },
      },
    },
    currencies: { KZT: { name: 'Kazakhstani tenge', symbol: '₸' } },
    capital: ['Nur-Sultan'],
    borders: ['CHN', 'KGZ', 'RUS', 'TKM', 'UZB'],
    population: 18754440,
  },
  {
    name: {
      common: 'Venezuela',
      official: 'Bolivarian Republic of Venezuela',
      nativeName: {
        spa: {
          official: 'República Bolivariana de Venezuela',
          common: 'Venezuela',
        },
      },
    },
    currencies: {
      VES: { name: 'Venezuelan bolívar soberano', symbol: 'Bs.S.' },
    },
    capital: ['Caracas'],
    borders: ['BRA', 'COL', 'GUY'],
    population: 28435943,
  },
  {
    name: {
      common: 'French Polynesia',
      official: 'French Polynesia',
      nativeName: {
        fra: {
          official: 'Polynésie française',
          common: 'Polynésie française',
        },
      },
    },
    currencies: { XPF: { name: 'CFP franc', symbol: '₣' } },
    capital: ['Papeetē'],
    borders: [],
    population: 280904,
  },
  {
    name: {
      common: 'Sudan',
      official: 'Republic of the Sudan',
      nativeName: {
        ara: { official: 'جمهورية السودان', common: 'السودان' },
        eng: { official: 'Republic of the Sudan', common: 'Sudan' },
      },
    },
    currencies: { SDG: { name: 'Sudanese pound', symbol: '' } },
    capital: ['Khartoum'],
    borders: ['CAF', 'TCD', 'EGY', 'ERI', 'ETH', 'LBY', 'SSD'],
    population: 43849269,
  },
  {
    name: {
      common: 'Wallis and Futuna',
      official: 'Territory of the Wallis and Futuna Islands',
      nativeName: {
        fra: {
          official: 'Territoire des îles Wallis et Futuna',
          common: 'Wallis et Futuna',
        },
      },
    },
    currencies: { XPF: { name: 'CFP franc', symbol: '₣' } },
    capital: ['Mata-Utu'],
    borders: [],
    population: 11750,
  },
  {
    name: {
      common: 'Slovakia',
      official: 'Slovak Republic',
      nativeName: {
        slk: { official: 'Slovenská republika', common: 'Slovensko' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Bratislava'],
    borders: ['AUT', 'CZE', 'HUN', 'POL', 'UKR'],
    population: 5458827,
  },
  {
    name: {
      common: 'Saint Barthélemy',
      official: 'Collectivity of Saint Barthélemy',
      nativeName: {
        fra: {
          official: 'Collectivité de Saint-Barthélemy',
          common: 'Saint-Barthélemy',
        },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Gustavia'],
    borders: [],
    population: 4255,
  },
  {
    name: {
      common: 'Christmas Island',
      official: 'Territory of Christmas Island',
      nativeName: {
        eng: {
          official: 'Territory of Christmas Island',
          common: 'Christmas Island',
        },
      },
    },
    currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
    capital: ['Flying Fish Cove'],
    borders: [],
    population: 2072,
  },
  {
    name: {
      common: 'Solomon Islands',
      official: 'Solomon Islands',
      nativeName: {
        eng: { official: 'Solomon Islands', common: 'Solomon Islands' },
      },
    },
    currencies: {
      SBD: { name: 'Solomon Islands dollar', symbol: '$' },
    },
    capital: ['Honiara'],
    borders: [],
    population: 686878,
  },
  {
    name: {
      common: 'Latvia',
      official: 'Republic of Latvia',
      nativeName: {
        lav: { official: 'Latvijas Republikas', common: 'Latvija' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Riga'],
    borders: ['BLR', 'EST', 'LTU', 'RUS'],
    population: 1901548,
  },
  {
    name: {
      common: 'British Virgin Islands',
      official: 'Virgin Islands',
      nativeName: {
        eng: {
          official: 'Virgin Islands',
          common: 'British Virgin Islands',
        },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Road Town'],
    borders: [],
    population: 30237,
  },
  {
    name: {
      common: 'Jamaica',
      official: 'Jamaica',
      nativeName: {
        eng: { official: 'Jamaica', common: 'Jamaica' },
        jam: { official: 'Jamaica', common: 'Jamaica' },
      },
    },
    currencies: { JMD: { name: 'Jamaican dollar', symbol: '$' } },
    capital: ['Kingston'],
    borders: [],
    population: 2961161,
  },
  {
    name: {
      common: 'Afghanistan',
      official: 'Islamic Republic of Afghanistan',
      nativeName: {
        prs: { official: 'جمهوری اسلامی افغانستان', common: 'افغانستان' },
        pus: {
          official: 'د افغانستان اسلامي جمهوریت',
          common: 'افغانستان',
        },
        tuk: {
          official: 'Owganystan Yslam Respublikasy',
          common: 'Owganystan',
        },
      },
    },
    currencies: { AFN: { name: 'Afghan afghani', symbol: '؋' } },
    capital: ['Kabul'],
    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
    population: 40218234,
  },
  {
    name: {
      common: 'Serbia',
      official: 'Republic of Serbia',
      nativeName: {
        srp: { official: 'Република Србија', common: 'Србија' },
      },
    },
    currencies: { RSD: { name: 'Serbian dinar', symbol: 'дин.' } },
    capital: ['Belgrade'],
    borders: ['BIH', 'BGR', 'HRV', 'HUN', 'UNK', 'MKD', 'MNE', 'ROU'],
    population: 6908224,
  },
  {
    name: {
      common: 'Tajikistan',
      official: 'Republic of Tajikistan',
      nativeName: {
        rus: {
          official: 'Республика Таджикистан',
          common: 'Таджикистан',
        },
        tgk: { official: 'Ҷумҳурии Тоҷикистон', common: 'Тоҷикистон' },
      },
    },
    currencies: { TJS: { name: 'Tajikistani somoni', symbol: 'ЅМ' } },
    capital: ['Dushanbe'],
    borders: ['AFG', 'CHN', 'KGZ', 'UZB'],
    population: 9537642,
  },
  {
    name: {
      common: 'Tonga',
      official: 'Kingdom of Tonga',
      nativeName: {
        eng: { official: 'Kingdom of Tonga', common: 'Tonga' },
        ton: { official: 'Kingdom of Tonga', common: 'Tonga' },
      },
    },
    currencies: { TOP: { name: 'Tongan paʻanga', symbol: 'T$' } },
    capital: ["Nuku'alofa"],
    borders: [],
    population: 105697,
  },
  {
    name: {
      common: 'Kiribati',
      official: 'Independent and Sovereign Republic of Kiribati',
      nativeName: {
        eng: {
          official: 'Independent and Sovereign Republic of Kiribati',
          common: 'Kiribati',
        },
        gil: { official: 'Ribaberiki Kiribati', common: 'Kiribati' },
      },
    },
    currencies: {
      AUD: { name: 'Australian dollar', symbol: '$' },
      KID: { name: 'Kiribati dollar', symbol: '$' },
    },
    capital: ['South Tarawa'],
    borders: [],
    population: 119446,
  },
  {
    name: {
      common: 'Eritrea',
      official: 'State of Eritrea',
      nativeName: {
        ara: { official: 'دولة إرتريا', common: 'إرتريا‎' },
        eng: { official: 'State of Eritrea', common: 'Eritrea' },
        tir: { official: 'ሃገረ ኤርትራ', common: 'ኤርትራ' },
      },
    },
    currencies: { ERN: { name: 'Eritrean nakfa', symbol: 'Nfk' } },
    capital: ['Asmara'],
    borders: ['DJI', 'ETH', 'SDN'],
    population: 5352000,
  },
  {
    name: {
      common: 'Mali',
      official: 'Republic of Mali',
      nativeName: {
        fra: { official: 'République du Mali', common: 'Mali' },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Bamako'],
    borders: ['DZA', 'BFA', 'GIN', 'CIV', 'MRT', 'NER', 'SEN'],
    population: 20250834,
  },
  {
    name: {
      common: 'Haiti',
      official: 'Republic of Haiti',
      nativeName: {
        fra: { official: "République d'Haïti", common: 'Haïti' },
        hat: { official: 'Repiblik Ayiti', common: 'Ayiti' },
      },
    },
    currencies: { HTG: { name: 'Haitian gourde', symbol: 'G' } },
    capital: ['Port-au-Prince'],
    borders: ['DOM'],
    population: 11402533,
  },
  {
    name: {
      common: 'Vanuatu',
      official: 'Republic of Vanuatu',
      nativeName: {
        bis: { official: 'Ripablik blong Vanuatu', common: 'Vanuatu' },
        eng: { official: 'Republic of Vanuatu', common: 'Vanuatu' },
        fra: { official: 'République de Vanuatu', common: 'Vanuatu' },
      },
    },
    currencies: { VUV: { name: 'Vanuatu vatu', symbol: 'Vt' } },
    capital: ['Port Vila'],
    borders: [],
    population: 307150,
  },
  {
    name: {
      common: 'Bosnia and Herzegovina',
      official: 'Bosnia and Herzegovina',
      nativeName: {
        bos: {
          official: 'Bosna i Hercegovina',
          common: 'Bosna i Hercegovina',
        },
        hrv: {
          official: 'Bosna i Hercegovina',
          common: 'Bosna i Hercegovina',
        },
        srp: {
          official: 'Боснa и Херцеговина',
          common: 'Боснa и Херцеговина',
        },
      },
    },
    currencies: {
      BAM: { name: 'Bosnia and Herzegovina convertible mark', symbol: '' },
    },
    capital: ['Sarajevo'],
    borders: ['HRV', 'MNE', 'SRB'],
    population: 3280815,
  },
  {
    name: {
      common: 'Vatican City',
      official: 'Vatican City State',
      nativeName: {
        ita: {
          official: 'Stato della Città del Vaticano',
          common: 'Vaticano',
        },
        lat: { official: 'Status Civitatis Vaticanæ', common: 'Vaticanæ' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Vatican City'],
    borders: ['ITA'],
    population: 451,
  },
  {
    name: {
      common: 'Benin',
      official: 'Republic of Benin',
      nativeName: {
        fra: { official: 'République du Bénin', common: 'Bénin' },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Porto-Novo'],
    borders: ['BFA', 'NER', 'NGA', 'TGO'],
    population: 12123198,
  },
  {
    name: {
      common: 'Svalbard and Jan Mayen',
      official: 'Svalbard og Jan Mayen',
      nativeName: {
        nor: {
          official: 'Svalbard og Jan Mayen',
          common: 'Svalbard og Jan Mayen',
        },
      },
    },
    currencies: { NOK: { name: 'krone', symbol: 'kr' } },
    capital: ['Longyearbyen'],
    borders: [],
    population: 2562,
  },
  {
    name: {
      common: 'Samoa',
      official: 'Independent State of Samoa',
      nativeName: {
        eng: { official: 'Independent State of Samoa', common: 'Samoa' },
        smo: {
          official: 'Malo Saʻoloto Tutoʻatasi o Sāmoa',
          common: 'Sāmoa',
        },
      },
    },
    currencies: { WST: { name: 'Samoan tālā', symbol: 'T' } },
    capital: ['Apia'],
    borders: [],
    population: 198410,
  },
  {
    name: {
      common: 'Bolivia',
      official: 'Plurinational State of Bolivia',
      nativeName: {
        aym: { official: 'Wuliwya Suyu', common: 'Wuliwya' },
        grn: { official: 'Tetã Volívia', common: 'Volívia' },
        que: { official: 'Buliwya Mamallaqta', common: 'Buliwya' },
        spa: {
          official: 'Estado Plurinacional de Bolivia',
          common: 'Bolivia',
        },
      },
    },
    currencies: { BOB: { name: 'Bolivian boliviano', symbol: 'Bs.' } },
    capital: ['Sucre'],
    borders: ['ARG', 'BRA', 'CHL', 'PRY', 'PER'],
    population: 11673029,
  },
  {
    name: {
      common: 'Madagascar',
      official: 'Republic of Madagascar',
      nativeName: {
        fra: {
          official: 'République de Madagascar',
          common: 'Madagascar',
        },
        mlg: {
          official: "Repoblikan'i Madagasikara",
          common: 'Madagasikara',
        },
      },
    },
    currencies: { MGA: { name: 'Malagasy ariary', symbol: 'Ar' } },
    capital: ['Antananarivo'],
    borders: [],
    population: 27691019,
  },
  {
    name: {
      common: 'São Tomé and Príncipe',
      official: 'Democratic Republic of São Tomé and Príncipe',
      nativeName: {
        por: {
          official: 'República Democrática do São Tomé e Príncipe',
          common: 'São Tomé e Príncipe',
        },
      },
    },
    currencies: {
      STN: { name: 'São Tomé and Príncipe dobra', symbol: 'Db' },
    },
    capital: ['São Tomé'],
    borders: [],
    population: 219161,
  },
  {
    name: {
      common: 'Bahrain',
      official: 'Kingdom of Bahrain',
      nativeName: {
        ara: { official: 'مملكة البحرين', common: '‏البحرين' },
      },
    },
    currencies: { BHD: { name: 'Bahraini dinar', symbol: '.د.ب' } },
    capital: ['Manama'],
    borders: [],
    population: 1701583,
  },
  {
    name: {
      common: 'Greece',
      official: 'Hellenic Republic',
      nativeName: {
        ell: { official: 'Ελληνική Δημοκρατία', common: 'Ελλάδα' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Athens'],
    borders: ['ALB', 'BGR', 'TUR', 'MKD'],
    population: 10715549,
  },
  {
    name: {
      common: 'Peru',
      official: 'Republic of Peru',
      nativeName: {
        aym: { official: 'Piruw Suyu', common: 'Piruw' },
        que: { official: 'Piruw Ripuwlika', common: 'Piruw' },
        spa: { official: 'República del Perú', common: 'Perú' },
      },
    },
    currencies: { PEN: { name: 'Peruvian sol', symbol: 'S/ ' } },
    capital: ['Lima'],
    borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
    population: 32971846,
  },
  {
    name: {
      common: 'Suriname',
      official: 'Republic of Suriname',
      nativeName: {
        nld: { official: 'Republiek Suriname', common: 'Suriname' },
      },
    },
    currencies: { SRD: { name: 'Surinamese dollar', symbol: '$' } },
    capital: ['Paramaribo'],
    borders: ['BRA', 'GUF', 'GUY'],
    population: 586634,
  },
  {
    name: {
      common: 'American Samoa',
      official: 'American Samoa',
      nativeName: {
        eng: { official: 'American Samoa', common: 'American Samoa' },
        smo: { official: 'Sāmoa Amelika', common: 'Sāmoa Amelika' },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Pago Pago'],
    borders: [],
    population: 55197,
  },
  {
    name: {
      common: 'Niger',
      official: 'Republic of Niger',
      nativeName: {
        fra: { official: 'République du Niger', common: 'Niger' },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Niamey'],
    borders: ['DZA', 'BEN', 'BFA', 'TCD', 'LBY', 'MLI', 'NGA'],
    population: 24206636,
  },
  {
    name: {
      common: 'Thailand',
      official: 'Kingdom of Thailand',
      nativeName: {
        tha: { official: 'ราชอาณาจักรไทย', common: 'ประเทศไทย' },
      },
    },
    currencies: { THB: { name: 'Thai baht', symbol: '฿' } },
    capital: ['Bangkok'],
    borders: ['MMR', 'KHM', 'LAO', 'MYS'],
    population: 69799978,
  },
  {
    name: {
      common: 'Tuvalu',
      official: 'Tuvalu',
      nativeName: {
        eng: { official: 'Tuvalu', common: 'Tuvalu' },
        tvl: { official: 'Tuvalu', common: 'Tuvalu' },
      },
    },
    currencies: {
      AUD: { name: 'Australian dollar', symbol: '$' },
      TVD: { name: 'Tuvaluan dollar', symbol: '$' },
    },
    capital: ['Funafuti'],
    borders: [],
    population: 11792,
  },
  {
    name: {
      common: 'North Korea',
      official: "Democratic People's Republic of Korea",
      nativeName: {
        kor: { official: '조선민주주의인민공화국', common: '조선' },
      },
    },
    currencies: { KPW: { name: 'North Korean won', symbol: '₩' } },
    capital: ['Pyongyang'],
    borders: ['CHN', 'KOR', 'RUS'],
    population: 25778815,
  },
  {
    name: {
      common: 'Ivory Coast',
      official: "Republic of Côte d'Ivoire",
      nativeName: {
        fra: {
          official: "République de Côte d'Ivoire",
          common: "Côte d'Ivoire",
        },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Yamoussoukro'],
    borders: ['BFA', 'GHA', 'GIN', 'LBR', 'MLI'],
    population: 26378275,
  },
  {
    name: {
      common: 'Yemen',
      official: 'Republic of Yemen',
      nativeName: {
        ara: { official: 'الجمهورية اليمنية', common: 'اليَمَن' },
      },
    },
    currencies: { YER: { name: 'Yemeni rial', symbol: '﷼' } },
    capital: ["Sana'a"],
    borders: ['OMN', 'SAU'],
    population: 29825968,
  },
  {
    name: {
      common: 'New Zealand',
      official: 'New Zealand',
      nativeName: {
        eng: { official: 'New Zealand', common: 'New Zealand' },
        mri: { official: 'Aotearoa', common: 'Aotearoa' },
        nzs: { official: 'New Zealand', common: 'New Zealand' },
      },
    },
    currencies: { NZD: { name: 'New Zealand dollar', symbol: '$' } },
    capital: ['Wellington'],
    borders: [],
    population: 5084300,
  },
  {
    name: {
      common: 'Armenia',
      official: 'Republic of Armenia',
      nativeName: {
        hye: { official: 'Հայաստանի Հանրապետություն', common: 'Հայաստան' },
      },
    },
    currencies: { AMD: { name: 'Armenian dram', symbol: '֏' } },
    capital: ['Yerevan'],
    borders: ['AZE', 'GEO', 'IRN', 'TUR'],
    population: 2963234,
  },
  {
    name: {
      common: 'Pakistan',
      official: 'Islamic Republic of Pakistan',
      nativeName: {
        eng: {
          official: 'Islamic Republic of Pakistan',
          common: 'Pakistan',
        },
        urd: { official: 'اسلامی جمہوریۂ پاكستان', common: 'پاكستان' },
      },
    },
    currencies: { PKR: { name: 'Pakistani rupee', symbol: '₨' } },
    capital: ['Islamabad'],
    borders: ['AFG', 'CHN', 'IND', 'IRN'],
    population: 220892331,
  },
  {
    name: {
      common: 'Tokelau',
      official: 'Tokelau',
      nativeName: {
        eng: { official: 'Tokelau', common: 'Tokelau' },
        smo: { official: 'Tokelau', common: 'Tokelau' },
        tkl: { official: 'Tokelau', common: 'Tokelau' },
      },
    },
    currencies: { NZD: { name: 'New Zealand dollar', symbol: '$' } },
    capital: ['Fakaofo'],
    borders: [],
    population: 1411,
  },
  {
    name: {
      common: 'Malawi',
      official: 'Republic of Malawi',
      nativeName: {
        eng: { official: 'Republic of Malawi', common: 'Malawi' },
        nya: {
          official: 'Chalo cha Malawi, Dziko la Malaŵi',
          common: 'Malaŵi',
        },
      },
    },
    currencies: { MWK: { name: 'Malawian kwacha', symbol: 'MK' } },
    capital: ['Lilongwe'],
    borders: ['MOZ', 'TZA', 'ZMB'],
    population: 19129955,
  },
  {
    name: {
      common: 'Ireland',
      official: 'Republic of Ireland',
      nativeName: {
        eng: { official: 'Republic of Ireland', common: 'Ireland' },
        gle: { official: 'Poblacht na hÉireann', common: 'Éire' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Dublin'],
    borders: ['GBR'],
    population: 4994724,
  },
  {
    name: {
      common: 'Philippines',
      official: 'Republic of the Philippines',
      nativeName: {
        eng: {
          official: 'Republic of the Philippines',
          common: 'Philippines',
        },
        fil: {
          official: 'Republic of the Philippines',
          common: 'Pilipinas',
        },
      },
    },
    currencies: { PHP: { name: 'Philippine peso', symbol: '₱' } },
    capital: ['Manila'],
    borders: [],
    population: 109581085,
  },
  {
    name: {
      common: 'Czechia',
      official: 'Czech Republic',
      nativeName: {
        ces: { official: 'Česká republika', common: 'Česko' },
        slk: { official: 'Česká republika', common: 'Česko' },
      },
    },
    currencies: { CZK: { name: 'Czech koruna', symbol: 'Kč' } },
    capital: ['Prague'],
    borders: ['AUT', 'DEU', 'POL', 'SVK'],
    population: 10698896,
  },
  {
    name: {
      common: 'Myanmar',
      official: 'Republic of the Union of Myanmar',
      nativeName: {
        mya: {
          official: 'ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်',
          common: 'မြန်မာ',
        },
      },
    },
    currencies: { MMK: { name: 'Burmese kyat', symbol: 'Ks' } },
    capital: ['Naypyidaw'],
    borders: ['BGD', 'CHN', 'IND', 'LAO', 'THA'],
    population: 54409794,
  },
  {
    name: {
      common: 'Cocos (Keeling) Islands',
      official: 'Territory of the Cocos (Keeling) Islands',
      nativeName: {
        eng: {
          official: 'Territory of the Cocos (Keeling) Islands',
          common: 'Cocos (Keeling) Islands',
        },
      },
    },
    currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
    capital: ['West Island'],
    borders: [],
    population: 544,
  },
  {
    name: {
      common: 'Romania',
      official: 'Romania',
      nativeName: { ron: { official: 'România', common: 'România' } },
    },
    currencies: { RON: { name: 'Romanian leu', symbol: 'lei' } },
    capital: ['Bucharest'],
    borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR'],
    population: 19286123,
  },
  {
    name: {
      common: 'Dominican Republic',
      official: 'Dominican Republic',
      nativeName: {
        spa: {
          official: 'República Dominicana',
          common: 'República Dominicana',
        },
      },
    },
    currencies: { DOP: { name: 'Dominican peso', symbol: '$' } },
    capital: ['Santo Domingo'],
    borders: ['HTI'],
    population: 10847904,
  },
  {
    name: {
      common: 'Equatorial Guinea',
      official: 'Republic of Equatorial Guinea',
      nativeName: {
        fra: {
          official: 'République de la Guinée Équatoriale',
          common: 'Guinée équatoriale',
        },
        por: {
          official: 'República da Guiné Equatorial',
          common: 'Guiné Equatorial',
        },
        spa: {
          official: 'República de Guinea Ecuatorial',
          common: 'Guinea Ecuatorial',
        },
      },
    },
    currencies: {
      XAF: { name: 'Central African CFA franc', symbol: 'Fr' },
    },
    capital: ['Malabo'],
    borders: ['CMR', 'GAB'],
    population: 1402985,
  },
  {
    name: {
      common: 'Ghana',
      official: 'Republic of Ghana',
      nativeName: {
        eng: { official: 'Republic of Ghana', common: 'Ghana' },
      },
    },
    currencies: { GHS: { name: 'Ghanaian cedi', symbol: '₵' } },
    capital: ['Accra'],
    borders: ['BFA', 'CIV', 'TGO'],
    population: 31072945,
  },
  {
    name: {
      common: 'Malta',
      official: 'Republic of Malta',
      nativeName: {
        eng: { official: 'Republic of Malta', common: 'Malta' },
        mlt: { official: "Repubblika ta ' Malta", common: 'Malta' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Valletta'],
    borders: [],
    population: 525285,
  },
  {
    name: {
      common: 'Turkey',
      official: 'Republic of Turkey',
      nativeName: {
        tur: { official: 'Türkiye Cumhuriyeti', common: 'Türkiye' },
      },
    },
    currencies: { TRY: { name: 'Turkish lira', symbol: '₺' } },
    capital: ['Ankara'],
    borders: ['ARM', 'AZE', 'BGR', 'GEO', 'GRC', 'IRN', 'IRQ', 'SYR'],
    population: 84339067,
  },
  {
    name: {
      common: 'Egypt',
      official: 'Arab Republic of Egypt',
      nativeName: {
        ara: { official: 'جمهورية مصر العربية', common: 'مصر' },
      },
    },
    currencies: { EGP: { name: 'Egyptian pound', symbol: '£' } },
    capital: ['Cairo'],
    borders: ['ISR', 'LBY', 'PSE', 'SDN'],
    population: 102334403,
  },
  {
    name: {
      common: 'Mozambique',
      official: 'Republic of Mozambique',
      nativeName: {
        por: { official: 'República de Moçambique', common: 'Moçambique' },
      },
    },
    currencies: { MZN: { name: 'Mozambican metical', symbol: 'MT' } },
    capital: ['Maputo'],
    borders: ['MWI', 'ZAF', 'SWZ', 'TZA', 'ZMB', 'ZWE'],
    population: 31255435,
  },
  {
    name: {
      common: 'Mayotte',
      official: 'Department of Mayotte',
      nativeName: {
        fra: { official: 'Département de Mayotte', common: 'Mayotte' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Mamoudzou'],
    borders: [],
    population: 226915,
  },
  {
    name: {
      common: 'Belgium',
      official: 'Kingdom of Belgium',
      nativeName: {
        deu: { official: 'Königreich Belgien', common: 'Belgien' },
        fra: { official: 'Royaume de Belgique', common: 'Belgique' },
        nld: { official: 'Koninkrijk België', common: 'België' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Brussels'],
    borders: ['FRA', 'DEU', 'LUX', 'NLD'],
    population: 11555997,
  },
  {
    name: {
      common: 'Slovenia',
      official: 'Republic of Slovenia',
      nativeName: {
        slv: { official: 'Republika Slovenija', common: 'Slovenija' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Ljubljana'],
    borders: ['AUT', 'HRV', 'ITA', 'HUN'],
    population: 2100126,
  },
  {
    name: {
      common: 'Hungary',
      official: 'Hungary',
      nativeName: {
        hun: { official: 'Magyarország', common: 'Magyarország' },
      },
    },
    currencies: { HUF: { name: 'Hungarian forint', symbol: 'Ft' } },
    capital: ['Budapest'],
    borders: ['AUT', 'HRV', 'ROU', 'SRB', 'SVK', 'SVN', 'UKR'],
    population: 9749763,
  },
  {
    name: {
      common: 'United Arab Emirates',
      official: 'United Arab Emirates',
      nativeName: {
        ara: {
          official: 'الإمارات العربية المتحدة',
          common: 'دولة الإمارات العربية المتحدة',
        },
      },
    },
    currencies: {
      AED: { name: 'United Arab Emirates dirham', symbol: 'د.إ' },
    },
    capital: ['Abu Dhabi'],
    borders: ['OMN', 'SAU'],
    population: 9890400,
  },
  {
    name: {
      common: 'Albania',
      official: 'Republic of Albania',
      nativeName: {
        sqi: { official: 'Republika e Shqipërisë', common: 'Shqipëria' },
      },
    },
    currencies: { ALL: { name: 'Albanian lek', symbol: 'L' } },
    capital: ['Tirana'],
    borders: ['MNE', 'GRC', 'MKD', 'UNK'],
    population: 2837743,
  },
  {
    name: {
      common: 'Heard Island and McDonald Islands',
      official: 'Heard Island and McDonald Islands',
      nativeName: {
        eng: {
          official: 'Heard Island and McDonald Islands',
          common: 'Heard Island and McDonald Islands',
        },
      },
    },
    currencies: {},
    capital: [],
    borders: [],
    population: 0,
  },
  {
    name: {
      common: 'Fiji',
      official: 'Republic of Fiji',
      nativeName: {
        eng: { official: 'Republic of Fiji', common: 'Fiji' },
        fij: { official: 'Matanitu Tugalala o Viti', common: 'Viti' },
        hif: { official: 'रिपब्लिक ऑफ फीजी', common: 'फिजी' },
      },
    },
    currencies: { FJD: { name: 'Fijian dollar', symbol: '$' } },
    capital: ['Suva'],
    borders: [],
    population: 896444,
  },
  {
    name: {
      common: 'San Marino',
      official: 'Republic of San Marino',
      nativeName: {
        ita: {
          official: 'Repubblica di San Marino',
          common: 'San Marino',
        },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['City of San Marino'],
    borders: ['ITA'],
    population: 33938,
  },
  {
    name: {
      common: 'Moldova',
      official: 'Republic of Moldova',
      nativeName: {
        ron: { official: 'Republica Moldova', common: 'Moldova' },
      },
    },
    currencies: { MDL: { name: 'Moldovan leu', symbol: 'L' } },
    capital: ['Chișinău'],
    borders: ['ROU', 'UKR'],
    population: 2617820,
  },
  {
    name: {
      common: 'Estonia',
      official: 'Republic of Estonia',
      nativeName: {
        est: { official: 'Eesti Vabariik', common: 'Eesti' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Tallinn'],
    borders: ['LVA', 'RUS'],
    population: 1331057,
  },
  {
    name: {
      common: 'Saint Vincent and the Grenadines',
      official: 'Saint Vincent and the Grenadines',
      nativeName: {
        eng: {
          official: 'Saint Vincent and the Grenadines',
          common: 'Saint Vincent and the Grenadines',
        },
      },
    },
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ['Kingstown'],
    borders: [],
    population: 110947,
  },
  {
    name: {
      common: 'United States Minor Outlying Islands',
      official: 'United States Minor Outlying Islands',
      nativeName: {
        eng: {
          official: 'United States Minor Outlying Islands',
          common: 'United States Minor Outlying Islands',
        },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Washington DC'],
    borders: [],
    population: 300,
  },
  {
    name: {
      common: 'Belarus',
      official: 'Republic of Belarus',
      nativeName: {
        bel: { official: 'Рэспубліка Беларусь', common: 'Белару́сь' },
        rus: { official: 'Республика Беларусь', common: 'Беларусь' },
      },
    },
    currencies: { BYN: { name: 'Belarusian ruble', symbol: 'Br' } },
    capital: ['Minsk'],
    borders: ['LVA', 'LTU', 'POL', 'RUS', 'UKR'],
    population: 9398861,
  },
  {
    name: {
      common: 'Sri Lanka',
      official: 'Democratic Socialist Republic of Sri Lanka',
      nativeName: {
        sin: {
          official: 'ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය',
          common: 'ශ්‍රී ලංකාව',
        },
        tam: {
          official: 'இலங்கை சனநாயக சோசலிசக் குடியரசு',
          common: 'இலங்கை',
        },
      },
    },
    currencies: { LKR: { name: 'Sri Lankan rupee', symbol: 'Rs  රු' } },
    capital: ['Sri Jayawardenepura Kotte'],
    borders: ['IND'],
    population: 21919000,
  },
  {
    name: {
      common: 'El Salvador',
      official: 'Republic of El Salvador',
      nativeName: {
        spa: {
          official: 'República de El Salvador',
          common: 'El Salvador',
        },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['San Salvador'],
    borders: ['GTM', 'HND'],
    population: 6486201,
  },
  {
    name: {
      common: 'Australia',
      official: 'Commonwealth of Australia',
      nativeName: {
        eng: {
          official: 'Commonwealth of Australia',
          common: 'Australia',
        },
      },
    },
    currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
    capital: ['Canberra'],
    borders: [],
    population: 25687041,
  },
  {
    name: {
      common: 'Bermuda',
      official: 'Bermuda',
      nativeName: { eng: { official: 'Bermuda', common: 'Bermuda' } },
    },
    currencies: { BMD: { name: 'Bermudian dollar', symbol: '$' } },
    capital: ['Hamilton'],
    borders: [],
    population: 63903,
  },
  {
    name: {
      common: 'Nicaragua',
      official: 'Republic of Nicaragua',
      nativeName: {
        spa: { official: 'República de Nicaragua', common: 'Nicaragua' },
      },
    },
    currencies: { NIO: { name: 'Nicaraguan córdoba', symbol: 'C$' } },
    capital: ['Managua'],
    borders: ['CRI', 'HND'],
    population: 6624554,
  },
  {
    name: {
      common: 'Somalia',
      official: 'Federal Republic of Somalia',
      nativeName: {
        ara: { official: 'جمهورية الصومال‎‎', common: 'الصومال‎‎' },
        som: {
          official: 'Jamhuuriyadda Federaalka Soomaaliya',
          common: 'Soomaaliya',
        },
      },
    },
    currencies: { SOS: { name: 'Somali shilling', symbol: 'Sh' } },
    capital: ['Mogadishu'],
    borders: ['DJI', 'ETH', 'KEN'],
    population: 15893219,
  },
  {
    name: {
      common: 'Turks and Caicos Islands',
      official: 'Turks and Caicos Islands',
      nativeName: {
        eng: {
          official: 'Turks and Caicos Islands',
          common: 'Turks and Caicos Islands',
        },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Cockburn Town'],
    borders: [],
    population: 38718,
  },
  {
    name: {
      common: 'Micronesia',
      official: 'Federated States of Micronesia',
      nativeName: {
        eng: {
          official: 'Federated States of Micronesia',
          common: 'Micronesia',
        },
      },
    },
    currencies: { USD: { name: 'United States dollar', symbol: '$' } },
    capital: ['Palikir'],
    borders: [],
    population: 115021,
  },
  {
    name: {
      common: 'Palestine',
      official: 'State of Palestine',
      nativeName: { ara: { official: 'دولة فلسطين', common: 'فلسطين' } },
    },
    currencies: {
      EGP: { name: 'Egyptian pound', symbol: 'E£' },
      ILS: { name: 'Israeli new shekel', symbol: '₪' },
      JOD: { name: 'Jordanian dinar', symbol: 'JD' },
    },
    capital: ['Ramallah'],
    borders: ['ISR', 'EGY', 'JOR'],
    population: 4803269,
  },
  {
    name: {
      common: 'Turkmenistan',
      official: 'Turkmenistan',
      nativeName: {
        rus: { official: 'Туркменистан', common: 'Туркмения' },
        tuk: { official: 'Türkmenistan', common: 'Türkmenistan' },
      },
    },
    currencies: { TMT: { name: 'Turkmenistan manat', symbol: 'm' } },
    capital: ['Ashgabat'],
    borders: ['AFG', 'IRN', 'KAZ', 'UZB'],
    population: 6031187,
  },
  {
    name: {
      common: 'Burkina Faso',
      official: 'Burkina Faso',
      nativeName: {
        fra: { official: 'République du Burkina', common: 'Burkina Faso' },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Ouagadougou'],
    borders: ['BEN', 'CIV', 'GHA', 'MLI', 'NER', 'TGO'],
    population: 20903278,
  },
  {
    name: {
      common: 'Costa Rica',
      official: 'Republic of Costa Rica',
      nativeName: {
        spa: { official: 'República de Costa Rica', common: 'Costa Rica' },
      },
    },
    currencies: { CRC: { name: 'Costa Rican colón', symbol: '₡' } },
    capital: ['San José'],
    borders: ['NIC', 'PAN'],
    population: 5094114,
  },
  {
    name: {
      common: 'Vietnam',
      official: 'Socialist Republic of Vietnam',
      nativeName: {
        vie: {
          official: 'Cộng hòa xã hội chủ nghĩa Việt Nam',
          common: 'Việt Nam',
        },
      },
    },
    currencies: { VND: { name: 'Vietnamese đồng', symbol: '₫' } },
    capital: ['Hanoi'],
    borders: ['KHM', 'CHN', 'LAO'],
    population: 97338583,
  },
  {
    name: {
      common: 'Cameroon',
      official: 'Republic of Cameroon',
      nativeName: {
        eng: { official: 'Republic of Cameroon', common: 'Cameroon' },
        fra: { official: 'République du Cameroun', common: 'Cameroun' },
      },
    },
    currencies: {
      XAF: { name: 'Central African CFA franc', symbol: 'Fr' },
    },
    capital: ['Yaoundé'],
    borders: ['CAF', 'TCD', 'COG', 'GNQ', 'GAB', 'NGA'],
    population: 26545864,
  },
  {
    name: {
      common: 'French Guiana',
      official: 'Guiana',
      nativeName: {
        fra: { official: 'Guyane', common: 'Guyane française' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Cayenne'],
    borders: ['BRA', 'SUR'],
    population: 254541,
  },
  {
    name: {
      common: 'Eswatini',
      official: 'Kingdom of Eswatini',
      nativeName: {
        eng: { official: 'Kingdom of Eswatini', common: 'Eswatini' },
        ssw: { official: 'Umbuso weSwatini', common: 'eSwatini' },
      },
    },
    currencies: {
      SZL: { name: 'Swazi lilangeni', symbol: 'L' },
      ZAR: { name: 'South African rand', symbol: 'R' },
    },
    capital: ['Mbabane'],
    borders: ['MOZ', 'ZAF'],
    population: 1160164,
  },
  {
    name: {
      common: 'Zambia',
      official: 'Republic of Zambia',
      nativeName: {
        eng: { official: 'Republic of Zambia', common: 'Zambia' },
      },
    },
    currencies: { ZMW: { name: 'Zambian kwacha', symbol: 'ZK' } },
    capital: ['Lusaka'],
    borders: ['AGO', 'BWA', 'COD', 'MWI', 'MOZ', 'NAM', 'TZA', 'ZWE'],
    population: 18383956,
  },
  {
    name: {
      common: 'Liechtenstein',
      official: 'Principality of Liechtenstein',
      nativeName: {
        deu: {
          official: 'Fürstentum Liechtenstein',
          common: 'Liechtenstein',
        },
      },
    },
    currencies: { CHF: { name: 'Swiss franc', symbol: 'Fr' } },
    capital: ['Vaduz'],
    borders: ['AUT', 'CHE'],
    population: 38137,
  },
  {
    name: {
      common: 'Montenegro',
      official: 'Montenegro',
      nativeName: {
        cnr: { official: 'Црна Гора', common: 'Црна Гора' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Podgorica'],
    borders: ['ALB', 'BIH', 'HRV', 'UNK', 'SRB'],
    population: 621718,
  },
  {
    name: {
      common: 'Saint Lucia',
      official: 'Saint Lucia',
      nativeName: {
        eng: { official: 'Saint Lucia', common: 'Saint Lucia' },
      },
    },
    currencies: {
      XCD: { name: 'Eastern Caribbean dollar', symbol: '$' },
    },
    capital: ['Castries'],
    borders: [],
    population: 183629,
  },
  {
    name: {
      common: 'Uzbekistan',
      official: 'Republic of Uzbekistan',
      nativeName: {
        rus: { official: 'Республика Узбекистан', common: 'Узбекистан' },
        uzb: {
          official: "O'zbekiston Respublikasi",
          common: 'O‘zbekiston',
        },
      },
    },
    currencies: { UZS: { name: 'Uzbekistani soʻm', symbol: "so'm" } },
    capital: ['Tashkent'],
    borders: ['AFG', 'KAZ', 'KGZ', 'TJK', 'TKM'],
    population: 34232050,
  },
  {
    name: {
      common: 'Chad',
      official: 'Republic of Chad',
      nativeName: {
        ara: { official: 'جمهورية تشاد', common: 'تشاد‎' },
        fra: { official: 'République du Tchad', common: 'Tchad' },
      },
    },
    currencies: {
      XAF: { name: 'Central African CFA franc', symbol: 'Fr' },
    },
    capital: ["N'Djamena"],
    borders: ['CMR', 'CAF', 'LBY', 'NER', 'NGA', 'SDN'],
    population: 16425859,
  },
  {
    name: {
      common: 'Aruba',
      official: 'Aruba',
      nativeName: {
        nld: { official: 'Aruba', common: 'Aruba' },
        pap: { official: 'Aruba', common: 'Aruba' },
      },
    },
    currencies: { AWG: { name: 'Aruban florin', symbol: 'ƒ' } },
    capital: ['Oranjestad'],
    borders: [],
    population: 106766,
  },
  {
    name: {
      common: 'Denmark',
      official: 'Kingdom of Denmark',
      nativeName: {
        dan: { official: 'Kongeriget Danmark', common: 'Danmark' },
      },
    },
    currencies: { DKK: { name: 'Danish krone', symbol: 'kr' } },
    capital: ['Copenhagen'],
    borders: ['DEU'],
    population: 5831404,
  },
  {
    name: {
      common: 'Japan',
      official: 'Japan',
      nativeName: { jpn: { official: '日本', common: '日本' } },
    },
    currencies: { JPY: { name: 'Japanese yen', symbol: '¥' } },
    capital: ['Tokyo'],
    borders: [],
    population: 125836021,
  },
  {
    name: {
      common: 'Cape Verde',
      official: 'Republic of Cabo Verde',
      nativeName: {
        por: { official: 'República de Cabo Verde', common: 'Cabo Verde' },
      },
    },
    currencies: { CVE: { name: 'Cape Verdean escudo', symbol: 'Esc' } },
    capital: ['Praia'],
    borders: [],
    population: 555988,
  },
  {
    name: {
      common: 'Switzerland',
      official: 'Swiss Confederation',
      nativeName: {
        fra: { official: 'Confédération suisse', common: 'Suisse' },
        gsw: {
          official: 'Schweizerische Eidgenossenschaft',
          common: 'Schweiz',
        },
        ita: { official: 'Confederazione Svizzera', common: 'Svizzera' },
        roh: { official: 'Confederaziun svizra', common: 'Svizra' },
      },
    },
    currencies: { CHF: { name: 'Swiss franc', symbol: 'Fr.' } },
    capital: ['Bern'],
    borders: ['AUT', 'FRA', 'ITA', 'LIE', 'DEU'],
    population: 8654622,
  },
  {
    name: {
      common: 'Hong Kong',
      official:
        "Hong Kong Special Administrative Region of the People's Republic of China",
      nativeName: {
        eng: {
          official:
            "Hong Kong Special Administrative Region of the People's Republic of China",
          common: 'Hong Kong',
        },
        zho: { official: '中华人民共和国香港特别行政区', common: '香港' },
      },
    },
    currencies: { HKD: { name: 'Hong Kong dollar', symbol: '$' } },
    capital: ['City of Victoria'],
    borders: ['CHN'],
    population: 7500700,
  },
  {
    name: {
      common: 'Bulgaria',
      official: 'Republic of Bulgaria',
      nativeName: {
        bul: { official: 'Република България', common: 'България' },
      },
    },
    currencies: { BGN: { name: 'Bulgarian lev', symbol: 'лв' } },
    capital: ['Sofia'],
    borders: ['GRC', 'MKD', 'ROU', 'SRB', 'TUR'],
    population: 6927288,
  },
  {
    name: {
      common: 'Jordan',
      official: 'Hashemite Kingdom of Jordan',
      nativeName: {
        ara: { official: 'المملكة الأردنية الهاشمية', common: 'الأردن' },
      },
    },
    currencies: { JOD: { name: 'Jordanian dinar', symbol: 'د.ا' } },
    capital: ['Amman'],
    borders: ['IRQ', 'ISR', 'PSE', 'SAU', 'SYR'],
    population: 10203140,
  },
  {
    name: {
      common: 'Republic of the Congo',
      official: 'Republic of the Congo',
      nativeName: {
        fra: {
          official: 'République du Congo',
          common: 'République du Congo',
        },
        kon: {
          official: 'Repubilika ya Kongo',
          common: 'Repubilika ya Kongo',
        },
        lin: {
          official: 'Republíki ya Kongó',
          common: 'Republíki ya Kongó',
        },
      },
    },
    currencies: {
      XAF: { name: 'Central African CFA franc', symbol: 'Fr' },
    },
    capital: ['Brazzaville'],
    borders: ['AGO', 'CMR', 'CAF', 'COD', 'GAB'],
    population: 89561404,
  },
  {
    name: {
      common: 'Laos',
      official: "Lao People's Democratic Republic",
      nativeName: {
        lao: {
          official: 'ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ',
          common: 'ສປປລາວ',
        },
      },
    },
    currencies: { LAK: { name: 'Lao kip', symbol: '₭' } },
    capital: ['Vientiane'],
    borders: ['MMR', 'KHM', 'CHN', 'THA', 'VNM'],
    population: 7275556,
  },
  {
    name: {
      common: 'Norfolk Island',
      official: 'Territory of Norfolk Island',
      nativeName: {
        eng: {
          official: 'Territory of Norfolk Island',
          common: 'Norfolk Island',
        },
        pih: {
          official: "Teratri of Norf'k Ailen",
          common: "Norf'k Ailen",
        },
      },
    },
    currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
    capital: ['Kingston'],
    borders: [],
    population: 2302,
  },
  {
    name: {
      common: 'South Korea',
      official: 'Republic of Korea',
      nativeName: { kor: { official: '대한민국', common: '한국' } },
    },
    currencies: { KRW: { name: 'South Korean won', symbol: '₩' } },
    capital: ['Seoul'],
    borders: ['PRK'],
    population: 51780579,
  },
  {
    name: {
      common: 'Tunisia',
      official: 'Tunisian Republic',
      nativeName: {
        ara: { official: 'الجمهورية التونسية', common: 'تونس' },
      },
    },
    currencies: { TND: { name: 'Tunisian dinar', symbol: 'د.ت' } },
    capital: ['Tunis'],
    borders: ['DZA', 'LBY'],
    population: 11818618,
  },
  {
    name: {
      common: 'Finland',
      official: 'Republic of Finland',
      nativeName: {
        fin: { official: 'Suomen tasavalta', common: 'Suomi' },
        swe: { official: 'Republiken Finland', common: 'Finland' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Helsinki'],
    borders: ['NOR', 'SWE', 'RUS'],
    population: 5530719,
  },
  {
    name: {
      common: 'Zimbabwe',
      official: 'Republic of Zimbabwe',
      nativeName: {
        bwg: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        eng: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        kck: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        khi: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        ndc: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        nde: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        nya: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        sna: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        sot: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        toi: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        tsn: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        tso: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        ven: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        xho: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
        zib: { official: 'Republic of Zimbabwe', common: 'Zimbabwe' },
      },
    },
    currencies: { ZWL: { name: 'Zimbabwean dollar', symbol: '$' } },
    capital: ['Harare'],
    borders: ['BWA', 'MOZ', 'ZAF', 'ZMB'],
    population: 14862927,
  },
  {
    name: {
      common: 'Maldives',
      official: 'Republic of the Maldives',
      nativeName: {
        div: {
          official: 'ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ',
          common: 'ދިވެހިރާއްޖޭގެ',
        },
      },
    },
    currencies: { MVR: { name: 'Maldivian rufiyaa', symbol: '.ރ' } },
    capital: ['Malé'],
    borders: [],
    population: 540542,
  },
  {
    name: {
      common: 'Singapore',
      official: 'Republic of Singapore',
      nativeName: {
        zho: { official: '新加坡共和国', common: '新加坡' },
        eng: { official: 'Republic of Singapore', common: 'Singapore' },
        msa: { official: 'Republik Singapura', common: 'Singapura' },
        tam: { official: 'சிங்கப்பூர் குடியரசு', common: 'சிங்கப்பூர்' },
      },
    },
    currencies: { SGD: { name: 'Singapore dollar', symbol: '$' } },
    capital: ['Singapore'],
    borders: [],
    population: 5685807,
  },
  {
    name: {
      common: 'Monaco',
      official: 'Principality of Monaco',
      nativeName: {
        fra: { official: 'Principauté de Monaco', common: 'Monaco' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Monaco'],
    borders: ['FRA'],
    population: 39244,
  },
  {
    name: {
      common: 'Angola',
      official: 'Republic of Angola',
      nativeName: {
        por: { official: 'República de Angola', common: 'Angola' },
      },
    },
    currencies: { AOA: { name: 'Angolan kwanza', symbol: 'Kz' } },
    capital: ['Luanda'],
    borders: ['COG', 'COD', 'ZMB', 'NAM'],
    population: 32866268,
  },
  {
    name: {
      common: 'Malaysia',
      official: 'Malaysia',
      nativeName: {
        eng: { official: 'Malaysia', common: 'Malaysia' },
        msa: { official: 'مليسيا', common: 'مليسيا' },
      },
    },
    currencies: { MYR: { name: 'Malaysian ringgit', symbol: 'RM' } },
    capital: ['Kuala Lumpur'],
    borders: ['BRN', 'IDN', 'THA'],
    population: 32365998,
  },
  {
    name: {
      common: 'Luxembourg',
      official: 'Grand Duchy of Luxembourg',
      nativeName: {
        deu: { official: 'Großherzogtum Luxemburg', common: 'Luxemburg' },
        fra: {
          official: 'Grand-Duché de Luxembourg',
          common: 'Luxembourg',
        },
        ltz: {
          official: 'Groussherzogtum Lëtzebuerg',
          common: 'Lëtzebuerg',
        },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Luxembourg'],
    borders: ['BEL', 'FRA', 'DEU'],
    population: 632275,
  },
  {
    name: {
      common: 'Guinea',
      official: 'Republic of Guinea',
      nativeName: {
        fra: { official: 'République de Guinée', common: 'Guinée' },
      },
    },
    currencies: { GNF: { name: 'Guinean franc', symbol: 'Fr' } },
    capital: ['Conakry'],
    borders: ['CIV', 'GNB', 'LBR', 'MLI', 'SEN', 'SLE'],
    population: 13132792,
  },
  {
    name: {
      common: 'Libya',
      official: 'State of Libya',
      nativeName: {
        ara: { official: 'الدولة ليبيا', common: '‏ليبيا' },
      },
    },
    currencies: { LYD: { name: 'Libyan dinar', symbol: 'ل.د' } },
    capital: ['Tripoli'],
    borders: ['DZA', 'TCD', 'EGY', 'NER', 'SDN', 'TUN'],
    population: 6871287,
  },
  {
    name: {
      common: 'Spain',
      official: 'Kingdom of Spain',
      nativeName: {
        spa: { official: 'Reino de España', common: 'España' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Madrid'],
    borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
    population: 47351567,
  },
  {
    name: {
      common: 'Indonesia',
      official: 'Republic of Indonesia',
      nativeName: {
        ind: { official: 'Republik Indonesia', common: 'Indonesia' },
      },
    },
    currencies: { IDR: { name: 'Indonesian rupiah', symbol: 'Rp' } },
    capital: ['Jakarta'],
    borders: ['TLS', 'MYS', 'PNG'],
    population: 273523621,
  },
  {
    name: {
      common: 'Seychelles',
      official: 'Republic of Seychelles',
      nativeName: {
        crs: { official: 'Repiblik Sesel', common: 'Sesel' },
        eng: { official: 'Republic of Seychelles', common: 'Seychelles' },
        fra: {
          official: 'République des Seychelles',
          common: 'Seychelles',
        },
      },
    },
    currencies: { SCR: { name: 'Seychellois rupee', symbol: '₨' } },
    capital: ['Victoria'],
    borders: [],
    population: 98462,
  },
  {
    name: {
      common: 'Brunei',
      official: 'Nation of Brunei, Abode of Peace',
      nativeName: {
        msa: {
          official: 'Nation of Brunei, Abode Damai',
          common: 'Negara Brunei Darussalam',
        },
      },
    },
    currencies: {
      BND: { name: 'Brunei dollar', symbol: '$' },
      SGD: { name: 'Singapore dollar', symbol: '$' },
    },
    capital: ['Bandar Seri Begawan'],
    borders: ['MYS'],
    population: 437483,
  },
  {
    name: {
      common: 'Mexico',
      official: 'United Mexican States',
      nativeName: {
        spa: { official: 'Estados Unidos Mexicanos', common: 'México' },
      },
    },
    currencies: { MXN: { name: 'Mexican peso', symbol: '$' } },
    capital: ['Mexico City'],
    borders: ['BLZ', 'GTM', 'USA'],
    population: 128932753,
  },
  {
    name: {
      common: 'Saint Helena, Ascension and Tristan da Cunha',
      official: 'Saint Helena, Ascension and Tristan da Cunha',
      nativeName: {
        eng: {
          official: 'Saint Helena, Ascension and Tristan da Cunha',
          common: 'Saint Helena, Ascension and Tristan da Cunha',
        },
      },
    },
    currencies: {
      GBP: { name: 'Pound sterling', symbol: '£' },
      SHP: { name: 'Saint Helena pound', symbol: '£' },
    },
    capital: ['Jamestown'],
    borders: [],
    population: 53192,
  },
  {
    name: {
      common: 'Sierra Leone',
      official: 'Republic of Sierra Leone',
      nativeName: {
        eng: {
          official: 'Republic of Sierra Leone',
          common: 'Sierra Leone',
        },
      },
    },
    currencies: { SLL: { name: 'Sierra Leonean leone', symbol: 'Le' } },
    capital: ['Freetown'],
    borders: ['GIN', 'LBR'],
    population: 7976985,
  },
  {
    name: {
      common: 'Central African Republic',
      official: 'Central African Republic',
      nativeName: {
        fra: {
          official: 'République centrafricaine',
          common: 'République centrafricaine',
        },
        sag: { official: 'Ködörösêse tî Bêafrîka', common: 'Bêafrîka' },
      },
    },
    currencies: {
      XAF: { name: 'Central African CFA franc', symbol: 'Fr' },
    },
    capital: ['Bangui'],
    borders: ['CMR', 'TCD', 'COD', 'COG', 'SSD', 'SDN'],
    population: 4829764,
  },
  {
    name: {
      common: 'Greenland',
      official: 'Greenland',
      nativeName: {
        kal: { official: 'Kalaallit Nunaat', common: 'Kalaallit Nunaat' },
      },
    },
    currencies: { DKK: { name: 'krone', symbol: 'kr.' } },
    capital: ['Nuuk'],
    borders: [],
    population: 56367,
  },
  {
    name: {
      common: 'Colombia',
      official: 'Republic of Colombia',
      nativeName: {
        spa: { official: 'República de Colombia', common: 'Colombia' },
      },
    },
    currencies: { COP: { name: 'Colombian peso', symbol: '$' } },
    capital: ['Bogotá'],
    borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
    population: 50882884,
  },
  {
    name: {
      common: 'Papua New Guinea',
      official: 'Independent State of Papua New Guinea',
      nativeName: {
        eng: {
          official: 'Independent State of Papua New Guinea',
          common: 'Papua New Guinea',
        },
        hmo: {
          official: 'Independen Stet bilong Papua Niugini',
          common: 'Papua Niu Gini',
        },
        tpi: {
          official: 'Independen Stet bilong Papua Niugini',
          common: 'Papua Niugini',
        },
      },
    },
    currencies: {
      PGK: { name: 'Papua New Guinean kina', symbol: 'K' },
    },
    capital: ['Port Moresby'],
    borders: ['IDN'],
    population: 8947027,
  },
  {
    name: {
      common: 'Falkland Islands',
      official: 'Falkland Islands',
      nativeName: {
        eng: { official: 'Falkland Islands', common: 'Falkland Islands' },
      },
    },
    currencies: {
      FKP: { name: 'Falkland Islands pound', symbol: '£' },
    },
    capital: ['Stanley'],
    borders: [],
    population: 2563,
  },
  {
    name: {
      common: 'Portugal',
      official: 'Portuguese Republic',
      nativeName: {
        por: { official: 'República português', common: 'Portugal' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Lisbon'],
    borders: ['ESP'],
    population: 10305564,
  },
  {
    name: {
      common: 'Guinea-Bissau',
      official: 'Republic of Guinea-Bissau',
      nativeName: {
        por: {
          official: 'República da Guiné-Bissau',
          common: 'Guiné-Bissau',
        },
        pov: {
          official: 'República da Guiné-Bissau',
          common: 'Guiné-Bissau',
        },
      },
    },
    currencies: {
      XOF: { name: 'West African CFA franc', symbol: 'Fr' },
    },
    capital: ['Bissau'],
    borders: ['GIN', 'SEN'],
    population: 1967998,
  },
  {
    name: {
      common: 'Saint Martin',
      official: 'Saint Martin',
      nativeName: {
        fra: { official: 'Saint-Martin', common: 'Saint-Martin' },
      },
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    capital: ['Marigot'],
    borders: ['SXM'],
    population: 38659,
  },
  {
    name: {
      common: 'Tanzania',
      official: 'United Republic of Tanzania',
      nativeName: {
        eng: {
          official: 'United Republic of Tanzania',
          common: 'Tanzania',
        },
        swa: {
          official: 'Jamhuri ya Muungano wa Tanzania',
          common: 'Tanzania',
        },
      },
    },
    currencies: { TZS: { name: 'Tanzanian shilling', symbol: 'Sh' } },
    capital: ['Dodoma'],
    borders: ['BDI', 'COD', 'KEN', 'MWI', 'MOZ', 'RWA', 'UGA', 'ZMB'],
    population: 59734213,
  },
];
