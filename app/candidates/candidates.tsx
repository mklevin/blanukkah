export type Candidate = {
    name: string,
    image: string
}

export type CandidateProps = {
    candidates: Candidate[];
}

export default function Candidates({candidates}: CandidateProps) {
    return (
      <div className="election-candidates">
        {candidates.map((candidate) => (
          <div className="candidate" key={candidate.name}>
            <img
              className="candidate-image"
              src={candidate.image}
              alt={candidate.name}
            />

            <span className="candidate-name" dangerouslySetInnerHTML={{ __html: candidate.name }}/>
          </div>
        ))}
      </div>
    );
}