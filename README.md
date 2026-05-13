# Wordle Klon

> Gjett ordet. Du har seks forsøk. Lykke til.

Et nettleserbasert ordgjetningsspill laget med ren JavaScript, HTML og CSS — inspirert av den originale Wordle av Josh Wardle. Laget som skoleprosjekt i IT for å vise frem JavaScript-ferdigheter.

---

## Slik spiller du

1. Gjett det skjulte 5-bokstavsordet på 6 forsøk
2. Etter hvert gjett får flisene nye farger som gir deg hint:
   - 🟩 **Grønn** — riktig bokstav, riktig plass
   - 🟨 **Gul** — riktig bokstav, feil plass
   - ⬛ **Grå** — bokstaven er ikke i ordet
3. Nytt ord tilgjengelig hver dag

---

## Funksjoner

- 6 forsøk på å gjette et 5-bokstavsord
- Fargekoding av gjettene dine i sanntid
- Tastatur på skjermen som oppdaterer seg underveis
- Melding når du vinner eller taper
- Fungerer på både PC og mobil

---

## Teknologier brukt

| Teknologi | Hva det brukes til |
|---|---|
| HTML | Struktur og spillbrett |
| CSS | Design, animasjoner og responsivt layout |
| JavaScript | Spillogikk, DOM-manipulasjon og tilstandsstyring |

---

## Hva prosjektet demonstrerer

- **DOM-manipulasjon** — oppdaterer fliser og tastatur dynamisk basert på input
- **Event handling** — lytter på både fysisk tastatur og klikk på skjermtastaturet
- **Tilstandsstyring** — holder styr på gjett, bokstaver og vinn/tap-tilstand
- **CSS-animasjoner** — flisene flipper og rister ved feil gjett
- **Array- og strengmetoder** — brukes til å sjekke bokstavposisjoner

---

## Kjør prosjektet

Ingen installasjon nødvendig — bare åpne filen i nettleseren:

```
1. Last ned eller klon prosjektet
2. Åpne index.html i en hvilken som helst moderne nettleser
3. Begynn å gjette!
```

---

## Filstruktur

```
wordle-klon/
├── index.html      # Hoved-HTML-fil
├── style.css       # Design og animasjoner
└── script.js       # Spillogikk
```

---
