const DATABASE =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMAN1fSyTrTGdvlu2FV7PAeZU4dsE_xckWneRRymGuIivcopgczXsKMq2eiCh1uGlPSORso8rjCrWp/pub?output=csv";


export default async function fetchDatabase(){
    const [, ...data] = await fetch(DATABASE)
    .then((res) => res.text())
    .then((text) => text.split("\n"));
    return data
} 