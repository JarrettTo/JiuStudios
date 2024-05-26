import SectionTitle from "../Common/SectionTitle";
import ProjectBox from "./ProjectBox";
import projectsData from "./projectsData";

const PastProjects = () => {
  return (
    <section 
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Projects"
            title="Our Past Projects"
            paragraph=""
            center
          />

        <div className="pb-2 pt-4 lg:pb-[30px] lg:pt-[60px]" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
          {projectsData.map((project, i) => (
            <ProjectBox key={i} project={project} />
          ))}
        </div>
        </div>       
      </div>
    </section>
  );
};

export default PastProjects;