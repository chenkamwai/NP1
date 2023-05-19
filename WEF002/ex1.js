/*
[]human-readable format 
[]The attribute should be capitalized.
[]For array, you can print the content of [10,15] to comma-separated string like "10,15"
*/

const data = [
  {
    name: "Hong Kong",
    topLevelDomain: [".hk"],
    alpha2Code: "HK",
    alpha3Code: "HKG",
    callingCodes: ["852"],
    capital: "City of Victoria",
    altSpellings: ["HK", "香港"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 7324300,
    latlng: [22.25, 114.16666666],
    demonym: "Chinese",
    area: 1104.0,
    gini: 53.3,
    timezones: ["UTC+08:00"],
    borders: ["CHN"],
    nativeName: "香港",
    numericCode: "344",
    currencies: [
      {
        code: "HKD",
        name: "Hong Kong dollar",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "en",
        iso639_2: "eng",
        name: "English",
        nativeName: "English",
      },
      {
        iso639_1: "zh",
        iso639_2: "zho",
        name: "Chinese",
        nativeName: "中文 (Zhōngwén)",
      },
    ],
    translations: {
      de: "Hong Kong",
      es: "Hong Kong",
      fr: "Hong Kong",
      ja: "香港",
      it: "Hong Kong",
      br: "Hong Kong",
      pt: "Hong Kong",
      nl: "Hongkong",
      hr: "Hong Kong",
      fa: "هنگ‌کنگ",
    },
    flag: "https://flagcdn.com/hk.svg",
    regionalBlocs: [],
    cioc: "HKG",
  },
];

const capitalize = (word) => {
  //   console.log("word[0]", word[0]);
  return word[0].toUpperCase() + word.substring(1);
  // function 串錯字 大階C
  //   return word[0].toUppercase() + word.substring(1);
};

const hk = data[0];

for (let key in hk) {
  //   console.log("key", key);
  if (hk[key] instanceof Object) {
    //object and array
    console.log(`${capitalize(key)}: TBC`);
    if (Array.isArray(hk[key])) {
      //Array
      console.log(`${capitalize(key)}`);
    } else {
      //object
      for (let subKey in hk[key]) {
        const subObject = hk[key];
        // console.log (`${key}_${subKey}:${hk[key[subKey]]}`)
        console.log(`${capitalize(key)}_${subKey}: ${subObject[subKey]}`);
      }
    }
  } else {
    console.log(`${capitalize(key)}: ${hk[key]}`);
  }
}

// const str = "Hello";
// console.log(typeof str.substring(2));
// console.log(str);
// console.log(typeof str.slice(2));
// const newStr = str.slice(2);
// console.log(newStr);
// console.log(str);
