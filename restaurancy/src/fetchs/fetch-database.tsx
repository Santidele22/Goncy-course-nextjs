const databaseUrl = process.env.DATABASE_URL;


export default async function fetchDatabase() {
  if (!databaseUrl) {
    new Error("DATABASE_URL no está definida");
    return [];
  }
  const [, ...data] = await fetch(databaseUrl)
    .then((res) => res.text())
    .then((text) => text.split("\n"));
  return data
} 