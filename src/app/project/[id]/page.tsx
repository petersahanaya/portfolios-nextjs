import { DBProjects } from "@/db";
import { Metadata } from "next";
import Project from "./project";

type ProjectIdProps = {
  params: {
    id?: string;
  };
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const project = DBProjects.find((project) => project.id === params.id)!;

  return {
    title: project.title,
    keywords: project.techStack.join(" - "),
    description: project.description,
  };
}

const ProjectId = ({ params }: ProjectIdProps) => {
  const project = DBProjects.find((project) => project.id === params.id)!;

  return (
    <main className="w-screen h-screen bg-stone-900 pt-20 grid md:grid-cols-2 grid-cols-1 gap-6 xl:pb-10 pb-10">
      <Project project={project} />
    </main>
  );
};

export default ProjectId;
