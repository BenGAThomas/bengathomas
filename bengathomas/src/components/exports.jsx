export const LINKS = [
    {id: "projects", name: "projects"},
    {id: "about", name: "about"},
    {id: "experience", name: "experience"},
    {id: "contact", name: "contact"}
  ];

import CharacterPointBuy from "../public/assets/CharacterPointBuy.webp";
import MLSAPI from "../public/assets/MLSAPI.png";
import iPrep from "../public/assets/iPrep.png";

export const SKILLS =
    "React, Node, Tailwind, Javascript, HTML/CSS, MYSQL, Angular, Postgres, MongoDB, AWS, Python,"
  

export const PROJECTS = [
    {
        id: 1,
        title: "Iprep",
        description: "A full stack meal prep website built using React, TailwindCSS, SEO, and Node.js",
        imgSource: iPrep,
        link: "https://github.com/BenGAThomas",
    },

    {
        id: 2,
        title: "D&D Point Buy Calculator",
        description: "A point buy calculator that uses useState",
        imgSource: CharacterPointBuy,
        link: "https://github.com/BenGAThomas/CharacterStats",
    },

    {
        id: 3,
        title: "MLS Search API",
        description: "An API website where you can find some information about MLS teams.",
        imgSource: MLSAPI,
        link: "https://github.com/BenGAThomas/Front-End-Project",
    },


];