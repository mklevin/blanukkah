import Link from "next/link";

export type Candidate = {
    name: string,
    image: string,
    link?: string
}

export type CandidateProps = {
    candidates: Candidate[];
}

export default function Candidates({ candidates }: CandidateProps) {
    return (
      <div className="election-candidates">
        {candidates.map((candidate) => (
          <div className="candidate" key={candidate.name}>
            {candidate.link ? (
              <a href={candidate.link} className="candidate-link" target="_blank">
                <img
                  className="candidate-image"
                  src={candidate.image}
                  alt={candidate.name}
                />

                <div
                  className="candidate-name"
                  dangerouslySetInnerHTML={{ __html: candidate.name }}
                />
              </a>
            ) : (
              <>
                <img
                  className="candidate-image"
                  src={candidate.image}
                  alt={candidate.name}
                />

                <span
                  className="candidate-name"
                  dangerouslySetInnerHTML={{ __html: candidate.name }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    );
}