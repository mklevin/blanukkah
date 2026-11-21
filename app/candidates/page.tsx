"use client";

import type { Candidate } from "./candidates";
import Candidates from "./candidates";

const presidential: Candidate[] = [
  {
    name: "Scottish sweater",
    image: "https://oconnellsclothing.com/media/catalog/product/cache/8814f70c5bc0b565f99c4556e8177d36/rdi/rdi/oconnells-chunky-scottish-shetland-wool-sweater-shetland-charcoal-browngrey-m34807-shetland_2.jpg",
  },
  {
    name: "English sweater",
    image: "https://www.themerchantfox.co.uk/cdn/shop/files/FoxMill-241.jpg?v=1792760895&width=800",
  },
];

const northeast: Candidate[] = [
  {
    name: "Shen Tao<br/>The Poet Empress",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1784287264i/247943060.jpg",
  },
  {
    name: "Chloe Benjamin<br/>Under Story",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768979997i/245120325.jpg",
  },
];

const midwest: Candidate[] = [
  {
    name: "Collapsible cup",
    image: "https://stojo.earth/cdn/shop/files/24oz-Cup-Opaque-Carbon_2048x2048.png?v=1764129817",
  },
  {
    name: "Compression socks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Z4slVJW4He3XGRQdg5495WHtgarNSakukxmyC02B68V8LyAhyDFZ9Uc&s=10",
  },
];

const south: Candidate[] = [
  {
    name: "Adrian Tchaikovsky<br/>Children of Ruin",
    image: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e3/Children_of_Ruin_%282019%29_cover_art.jpg/250px-Children_of_Ruin_%282019%29_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
  },
  {
    name: "Claire North<br/>Slow Gods",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1740714031i/223296158.jpg",
  },
];

const west: Candidate[] = [
  {
    name: "The Legend of Zelda:<br/>Ocarina of Time",
    image: "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2026/09/the-legend-of-zelda-ocarina-of-time-remake-tag-page-cover-art-1.jpg?q=50&fit=contain&w=480&dpr=1.5",
  },
  {
    name: "Donkey Kong Bananza",
    image: "https://upload.wikimedia.org/wikipedia/en/0/01/Donkey_Kong_Bananza_updated_box_art.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  },
];

export default function Page() {

  return (
    <div className="candidates">
      <h1>The Candidates</h1>

      <h2>Presidential</h2>
      <div className="subtext">The entire country votes for a single President of the Hanukkah List, honoring a tradition going all the way back to George Washington's rabbi.</div>
      <Candidates candidates={presidential} />

      <h2>Senatorial</h2>
      <div className="subtext">Each major geographic region in the country elects their own Hanukakh List senator, honoring a tradition going all the way back to this Hanukkah list.</div>

      <h3>Blue York (Northeast)</h3>
      <Candidates candidates={northeast} />

      <div className="subdivider" />

      <h3>Blichigas (Midwest)</h3>
      <Candidates candidates={midwest} />

      <div className="subdivider" />

      <h3>Blexassippi (South)</h3>
      <Candidates candidates={south} />

      <div className="subdivider" />

      <h3>Blacific (West)</h3>
      <Candidates candidates={west} />
    </div>
  );
}