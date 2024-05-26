import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Justin To",
    designation: "CTO and Founder",
    image: "/images/team/team-01.png",
    githubLink: "https://github.com/JarrettTo",
    linkedinLink: "https://www.linkedin.com/in/justin-jarrett-to-4a5401202/",
    instagramLink: "https://www.instagram.com/jarrett_to/",
  },
  {
    id: 2,
    name: "Vincent Shi",
    designation: "CEO and Lead Specialist",
    image: "/images/team/team-02.png",
    githubLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Earl Pulido",
    designation: "Full Stack Engineer",
    image: "/images/team/team-03.png",
    githubLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Jose Carlos Regala",
    designation: "Full Stack Engineer",
    image: "/images/team/team-04.png",
    githubLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 5,
    name: "Juliana Guillermo",
    designation: "Full Stack Engineer",
    image: "/images/team/team-04.png",
    githubLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 6,
    name: "Jose Simbillo",
    designation: "Full Stack Engineer",
    image: "/images/team/team-04.png",
    githubLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="We're a team of multi-talented full stack developers and engineers with a passion for solving business problems through software and innovation."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
