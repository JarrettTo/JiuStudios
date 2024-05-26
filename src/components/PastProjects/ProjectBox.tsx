import React from "react";
import { Projects } from "@/types/projects";
import styles from './projects.module.css';
import Image from "next/image";

const ProjectBox = ({ project }: { project: Projects }) => {

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/2 lg:pb-[10px] lg:pt-[20px]">
      <div
        className="flex flex-col mb-10 overflow-hidden rounded-xl bg-white px-10 py-8 h-full shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 sm:w-full lg:px-10 lg:py-6 lg:w-full xl:p-14 xl:w-full"
        data-wow-delay=".1s"
      >
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {project.project_title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {project.brief_description}
        </p>
        <Image
          src={project.image}
          alt="image"
          width={1288}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <p className="mb-2 mt-5 block text-lg font-semibold text-primary">
          Tech Used:
        </p>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {project.tech_used}
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;