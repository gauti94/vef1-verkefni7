/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "BCDFGHJKLMNPQRSTVWXZÞbcdfghjklmnpqrstvwxzþ".split("");

/** Íslenskir samhljóðar */
const VOWELS = "AEIOUYÁÉÝÚÍÓÖÆaeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let longest = "";
    for (const word of split) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  return null;
}
console.assert(
  longest("Halló þetta er laaaaaangt") === "laaaaaangt",
  "longest: skilar lengsta orðinu í strengnum"
);
console.assert(
  longest("") === "",
  "longest: ef strengur er tómur þá skila tómum streng"
);
console.assert(longest(false) === null, "longest: ef ekki strengur skila null");

function shortest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let shortest = split[0];
    for (const word of split) {
      if (word.length < shortest.length) {
        shortest = word;
      }
    }
    return shortest;
  }
  return null;
}
console.assert(
  shortest("Halló þetta er laaaaaangt") === "er",
  "shortest: skilar stysta orðinu í strengnum"
);
console.assert(
  shortest("") === "",
  "reverse: ef strengur er tómur þá skila tómum streng"
);
console.assert(
  shortest(false) === null,
  "longest: ef ekki strengur skila null"
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  } else {
    return null;
  }
}
console.assert(reverse("hæ") === "æh", "reverse: snýr við einföldum streng");
console.assert(reverse(false) === null, "reverse: ef ekki strengur skila null");

function palindrome(str) {
  if (str === "") {
    return false;
  }
  if (isString(str)) {
    const normalized = str.toLowerCase();
    const split = normalized.split("");
    const reversed = split.reverse().join("");
    return normalized === reversed;
  } else {
    return false;
  }
}
console.assert(
  palindrome("civic") === true,
  "palindrome: er setningin palindrome?"
);
console.assert(
  palindrome("") === false,
  "palindrome: tómur strengur er ekki samhverfur"
);
console.assert(palindrome(5) === false, "palindrome: 5 er ekki strengur");

function vowels(str) {
  let vowelCount = 0;
  if (isString(str)) {
    for (const char of str) {
      if (VOWELS.includes(char)) {
        vowelCount++;
      }
    }
    return vowelCount;
  } else {
    return 0;
  }
}
console.assert(
  vowels("halló") === 2,
  "vowels: skilar fjölda sérhljóða í setningu"
);
console.assert(
  vowels("lengri setning") === 4,
  "vowels: skilar fjölda sérhljóða í setningu"
);
console.assert(vowels("") === 0, "vowels: ef tómur strengur þá skila 0");
console.assert(vowels("hhh") === 0, "vowels: ef engir sérhljóðar þá skila 0");

function consonants(str) {
  let consonantCount = 0;
  if (isString(str)) {
    for (const char of str) {
      if (CONSONANTS.includes(char)) {
        consonantCount++;
      }
    }
    return consonantCount;
  } else {
    return 0;
  }
}
console.assert(
  consonants("halló") === 3,
  "consonants: skilar fjölda samhljóða í setningu"
);
console.assert(
  consonants("lengri setning") === 9,
  "consonants: skilar fjölda samhljóða í setningu"
);
console.assert(
  consonants("") === 0,
  "consonants: ef tómur strengur þá skila 0"
);
console.assert(
  consonants("aaa") === 0,
  "consonants: ef engir samhljóðar þá skila 0"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(`Sláðu inn streng og vefsíðan mun skila:
    Strengnum snúið við, lengsta orðinu, styðsta orðinu, hvort strengurinn sé samhverfur og fjölda samhljóða og sérhljóða í strengnum`);
  let startRun = true;
  do {
    const string = prompt("Vinsamlegast sláðu inn streng");
    if (string === null) {
      startRun = false;
    }
    else if (isString(string)) {
      alert(`Snúið við: ${reverse(string)}
        Lengsta orðið: ${longest(string)}
        Stysta orðið: ${shortest(string)}
        Er samhverft: ${palindrome(string)}
        Fjöldi sérhljóða: ${vowels(string)}
        Fjöldi samhljóða: ${consonants(string)}`);

        const continueInput = prompt('Viltu halda áfram? y/n').toLowerCase();
        if (continueInput != 'y') {
          startRun = false;
        }
    } else {
      startRun = false;
    }
  } while (startRun);
}
