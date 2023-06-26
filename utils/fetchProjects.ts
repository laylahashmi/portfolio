import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == "project"] | order(_createdAt desc) {
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async() => {
    const projects: Project[] = await sanityClient.fetch(query);

    return projects;
}
