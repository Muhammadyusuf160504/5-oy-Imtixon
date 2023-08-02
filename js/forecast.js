const KEY = "263d22d8";

const getKinoName = async (kino) => {
  const base = "https://www.omdbapi.com/";
  const query = `?s=${kino}&apikey=${KEY}`;

  const req = await fetch(base + query);
  const data = await req.json();

  return data;
};

// BITTA KINO HAQIDA KO'PROQ MA'LUMOT

const getKinoName2 = async (kino1) => {
  const base = "https://www.omdbapi.com/";
  const query = `?i=${kino1}&apikey=${KEY}`;

  const req = await fetch(base + query);
  const data = await req.json();

  return data;
};

// getKino("avengers").then((data) => console.log(data));
