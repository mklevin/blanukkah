export type Candidate = {
    name: string,
    image: string,
    description: string
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
            {candidate.description !== "" 
              ? <p dangerouslySetInnerHTML={{__html: candidate.description}} /> 
              : ""
            }
          </div>
        ))}
      </div>
    );
}