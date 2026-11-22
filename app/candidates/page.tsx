"use client";

import type { Candidate } from "./candidates";
import Candidates from "./candidates";

const presidential: Candidate[] = [
  {
    name: "Scottish sweater",
    image: "https://oconnellsclothing.com/media/catalog/product/cache/8814f70c5bc0b565f99c4556e8177d36/rdi/rdi/oconnells-chunky-scottish-shetland-wool-sweater-shetland-charcoal-browngrey-m34807-shetland_2.jpg"
  },
  {
    name: "English sweater",
    image: "https://www.themerchantfox.co.uk/cdn/shop/files/FoxMill-241.jpg?v=1792760895&width=800"
  },
];

const northeast: Candidate[] = [
  {
    name: "Shen Tao<br/>The Poet Empress",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1784287264i/247943060.jpg",
    link: "https://www.goodreads.com/book/show/231127166-the-poet-empress"
  },
  {
    name: "Chloe Benjamin<br/>Under Story",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768979997i/245120325.jpg",
    link: "https://www.goodreads.com/book/show/245120325-under-story"
  },
];

const midwest: Candidate[] = [
  {
    name: "Collapsible cup",
    image: "https://stojo.earth/cdn/shop/files/24oz-Cup-Opaque-Carbon_2048x2048.png?v=1764129817",
    link: "https://stojo.earth/collections/hydration/products/cup-copy?variant=42128789569625"
  },
  {
    name: "Compression socks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Z4slVJW4He3XGRQdg5495WHtgarNSakukxmyC02B68V8LyAhyDFZ9Uc&s=10",
    link: "https://www.rei.com/product/209825/sockwell-elevation-firm-compression-socks-mens?irclickid=3pYQPOTY6xyZUkDxaDWnHQCkUkry8nXV3xFvQI0&irgwc=1&afsrc=1"
  },
];

const south: Candidate[] = [
  {
    name: "Adrian Tchaikovsky<br/>Children of Ruin",
    image: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e3/Children_of_Ruin_%282019%29_cover_art.jpg/250px-Children_of_Ruin_%282019%29_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    link: "https://www.goodreads.com/book/show/53094786-children-of-ruin"
  },
  {
    name: "Claire North<br/>Slow Gods",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1740714031i/223296158.jpg",
    link: "https://www.goodreads.com/en/book/show/223296158-slow-gods"
  },
];

const west: Candidate[] = [
  {
    name: "The Legend of Zelda:<br/>Ocarina of Time",
    image: "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2026/09/the-legend-of-zelda-ocarina-of-time-remake-tag-page-cover-art-1.jpg?q=50&fit=contain&w=480&dpr=1.5",
    link: "https://www.bestbuy.com/product/the-legend-of-zelda-ocarina-of-time-nintendo-switch-2/J7GSL5C746/sku/6691853"
  },
  {
    name: "Donkey Kong Bananza",
    image: "https://upload.wikimedia.org/wikipedia/en/0/01/Donkey_Kong_Bananza_updated_box_art.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    link: "https://www.bestbuy.com/product/donkey-kong-bananza-nintendo-switch-2/J7GSL5JFFJ"
  },
];

export default function Page() {

  return (
    <div className="candidates">
      <h1>The Candidates</h1>

      <h2>Presidential election</h2>
      <div className="subtext">The entire country votes for a single President of the Hanukkah List, honoring a tradition going all the way back to George Washington's rabbi.</div>
      <Candidates candidates={presidential} />
      <div className="blurb">
        <p>
          This year's presidential race is a clash of titans. <b>Scottish sweater</b> is likely a familiar name to many voters, having been on the Hanukkah political scene for years. It's well-known for its understated, soft-spoken communication style, but do voters crave more?
        </p>
        <p>
          Meanwhile, <b>English sweater</b> may be the new kid on the block, but it's wasted no time in solidifying support with the ever-important cozy demographic. Is the Hanukkah List ready for a populist candidate, or is it simply too bold?
        </p>
      </div>

      <div className="divider" />

      <h2>Senate elections</h2>
      <div className="subtext">Each major geographic region in the country elects their own Hanukakh List senator, honoring a tradition going all the way back to this Hanukkah list.</div>

      <h3>Blue York (Northeast)</h3>
      <Candidates candidates={northeast} />
      <div className="blurb">
        <p>
          The Blue York region has a proud history of electing literary senators dating back to Senator <a href="https://en.wikipedia.org/wiki/Daniel_Webster\" target="_blank">Daniel</a> <a href="https://www.merriam-webster.com/" target="_blank">Merriam-Webster</a>.
          This is <b>The Poet Empress</b>'s first Hanukkah List congressional race, and while its dark epic fantasy premise has broad appeal with young voters, pundits question if it has the experience necessary to deliver on voter expectations. <b>Under Story</b> comes from a successful literary dynasty and hopes to win on the backs of the college-educated vote, but will voters turn out for yet another sci-fi love story?
        </p>
      </div>

      <div className="subdivider" />

      <h3>Blichigas (Midwest)</h3>
      <Candidates candidates={midwest} />
      <div className="blurb">
        <p>In Blichigas, the name of the game is practicality. <b>Collapsible cup</b> is running on a pragmatic environmental platform focused on eliminating single-use coffee shop cups, while <b>compression socks</b> have endorsements from both the region's medical establishment and the ALPA (Air Line Pilots Association). Which will win: nature, or nurture?</p>
      </div>

      <div className="subdivider" />

      <h3>Blexassippi (South)</h3>
      <Candidates candidates={south} />
      <div className="blurb">
        <p>Blexassippi's nominees may both be shooting for the stars, but they couldn't be more different. <b>Children of Ruin</b> inherits the incrementalist evolutionary sci-fi trappings (and sentient spiders) of its predecessor, while <b>Slow Gods</b> takes a longer view, promising good things to those who wait. The question is: how patient are voters feeling?</p>
      </div>

      <div className="subdivider" />

      <h3>Blacific (West)</h3>
      <Candidates candidates={west} />
      <div className="blurb">
        <p>The only digital contenders up for election this year, both of the Blacific's candidates promise a generational experience. The key question for voters, however, is <i>which</i> generation: <b>The Legend of Zelda: Ocarina of Time</b> wants to return us to the 90s, while <b>Donkey Kong: Bananza</b> stays firmly grounded in the present. Are voters feeling nostalgic for a simpler time, or is the future now?</p>
      </div>
    </div>
  );
}