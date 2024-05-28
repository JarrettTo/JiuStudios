import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Justin To",
    designation: "CTO and Founder",
    image: "/images/team/team-02.jpg",
    githubLink: "https://github.com/JarrettTo",
    linkedinLink: "https://www.linkedin.com/in/justin-jarrett-to-4a5401202/",
    instagramLink: "https://www.instagram.com/jarrett_to/",
  },
  {
    id: 2,
    name: "Vincent Shi",
    designation: "CEO and Lead Specialist",
    image: "/images/team/team-fill.jpg",
    githubLink: "/#",
    linkedinLink: "/#",
    instagramLink: "https://www.instagram.com/cent.shi/",
  },
  {
    id: 3,
    name: "Lawrence Lopez",
    designation: "Chief Marketing Officer",
    image: "/images/team/team-03.jpg",
    githubLink: "",
    linkedinLink: "https://www.linkedin.com/in/lawrence-lopez-4b316a240/",
    instagramLink: "https://www.instagram.com/lawrizz_lopez/",
  },
  {
    id: 4,
    name: "Earl Pulido",
    designation: "Full Stack Engineer",
    image: "/images/team/team-01.jpg",
    githubLink: "https://github.com/sleep-deepfried",
    linkedinLink: "https://www.linkedin.com/in/sleep-deepfried/",
    instagramLink: "https://www.instagram.com/eljon.py/",
  },
  {
    id: 5,
    name: "Jose Carlos Regala",
    designation: "Full Stack Engineer",
    image: "/images/team/team-04.jpg",
    githubLink: "https://github.com/josecarlosregala",
    linkedinLink: "https://www.linkedin.com/in/jose-carlos-regala/",
    instagramLink: "https://www.instagram.com/crlsre/",
  },
  {
    id: 6,
    name: "Jose Simbillo",
    designation: "Full Stack Engineer",
    image: "/images/team/team-06.jpg",
    githubLink: "https://github.com/GithubSim13",
    linkedinLink: "https://www.linkedin.com/in/jose-simbillo-78686a290",
    instagramLink: "https://www.instagram.com/jsimbillo/",
  },
  {
    id: 7,
    name: "Juliana Guillermo",
    designation: "Full Stack Engineer",
    image: "/images/team/team-05.png",
    githubLink: "https://github.com/jguillermo0426",
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
