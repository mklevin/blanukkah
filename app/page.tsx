import LiveIndicator from "@/app/components/live";
import VoteShareMenorah from "@/app/components/meters/menorah";
import NationalElectionMap from "@/app/components/races/national";
import NortheastRace from "@/app/components/races/northeast/northeast";
import MidwestRace from "@/app/components/races/midwest/midwest";
import SouthRace from "@/app/components/races/south/south";
import WestRace from "@/app/components/races/west/west";

export default function Home() {
  return (
    <>
      <div id="presidential">
        <LiveIndicator />
        <h1>Hanukkah List Presidential Election</h1>
        <div className="subtext">Polls close December 11th! Use the Meneedle<span className="trademark">®</span> to keep tabs on the vote, or use the map to dig into results by region.</div>

        <VoteShareMenorah />

        <div className="map">
          <NationalElectionMap />
        </div>
      </div>

      <div className="senatorials">
        <h2>Senate elections</h2>
        <div className="subtext">Use the election trackers below to keep tabs on the races that matter to you, or tap the arrows to see what our expert political pundits have to say.
        </div>
        <NortheastRace />
        <div className="subdivider" />
        <MidwestRace />
        <div className="subdivider" />
        <SouthRace />
        <div className="subdivider" />
        <WestRace />
      </div>
    </>
  );
}