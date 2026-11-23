import { Author } from "@/app/lib/types/author";

const BASE_PATH = process.env.PAGES_BASE_PATH ?? "";

export function publicPath(path: string) {
  return `${BASE_PATH}${path}`;
}

export const Brie: Author = {
  name: "Brie Wright",
  jobTitle: "Part-Time Gamer",
  image: publicPath("/images/authors/brie.jpg"),
  credit: "Charlotte Wright"
}

export const Circe: Author = {
  name: "Circe the Witchy Girl",
  jobTitle: "Chief Food Officer",
  image: publicPath("/images/authors/circe.jpg"),
  credit: "Aimee Goldstein"
}

export const Colby: Author = {
  name: "Colby Wright",
  jobTitle: "Chief Gravity Tester",
  image: publicPath("/images/authors/colby.jpg"),
  credit: "Charlotte Wright"
}

export const Daisy: Author = {
  name: "Little Miss Daisy",
  jobTitle: "Senior Wormy Analyst",
  image: publicPath("/images/authors/daisy.jpg"),
  credit: "Emma Posega Rappleye"
}

export const Fabio: Author = {
  name: "Mr. Fabio Fabfabs",
  jobTitle: "Peacemaker",
  image: publicPath("/images/authors/fabio.jpg"),
  credit: "Emily Crossette"
}

export const KitKat: Author = {
  name: "KitKat",
  jobTitle: "Pretty Privilege Exemplar",
  image: publicPath("/images/authors/kitkat.jpg"),
  credit: "Andrew Truong"
}

export const Molly: Author = {
  name: "Molly",
  jobTitle: "Instigator",
  image: publicPath("/images/authors/molly.jpg"),
  credit: "Emily Crossette"
}

export const Nera: Author = {
  name: "Nera",
  jobTitle: "Director of Pets Enforcement",
  image: publicPath("/images/authors/nera.jpg"),
  credit: "Brian Wingo"
}

export const Pasta: Author = {
  name: "Pasta",
  jobTitle: "Perpetually Baffled Glutton",
  image: publicPath("/images/authors/pasta.jpg"),
  credit: "Snow"
}

export const Zoidberg: Author = {
  name: "Zoidberg Cooper",
  jobTitle: "MLB Umpire",
  image: publicPath("/images/authors/zoidberg.jpg"),
  credit: "Emily Cooper"
}

export const Zoro: Author = {
  name: "Zoro",
  jobTitle: "The Embodiment of Greed",
  image: publicPath("/images/authors/zoro.jpg"),
  credit: "Tiana and Giancarlo"
}

export const AllAuthors = 
  [Brie, Circe, Colby, Daisy, Fabio, KitKat, Molly, Nera, Pasta, Zoidberg, Zoro]
  .sort((a, b) => a.name.localeCompare(b.name));