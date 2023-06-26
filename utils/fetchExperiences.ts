import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
    *[_type == "experience"] | order(_createdAt desc) {
      ...,
      technologies[]->
    }
`;

export const fetchExperiences = async() => {
    const experiences: Experience[] = await sanityClient.fetch(query);

    return experiences;
}
