import { AllAuthors } from "@/app/components/data/authors";

export default function Page() {
  return (
    <div className="credits">
      <h1>Credits</h1>

      <div className="subtext">
        This level of shenaniganry would have been completely impossible
        to pull off alone. A huge shoutout to everyone who helped!:
      </div>
      <ul>
        <li><b>QA testing:</b> Channing Kimble-Brown, Charlotte Wright, Tiana Schippa</li>
        <li><b>Web design inspiration:</b> The New York Times</li>
        <li><b>Sticker design:</b> To be revealed...</li>
        <li><b>Policital commentary:</b> All of the furry friends below!</li>
      </ul>

      <div className="credits-author-grid">
        {AllAuthors.map((author) => (
          <div key={author.name} className="credits-author">
            <img
              src={author.image}
              alt={author.name}
              className="credits-author-image"
            />

            <div className="credits-author-info">
              <p className="credits-author-name">{author.name}</p>
              <p className="credits-author-title">{author.jobTitle}</p>

              {author.credit && (
                <p className="credits-author-credit">
                  {author.credit}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}