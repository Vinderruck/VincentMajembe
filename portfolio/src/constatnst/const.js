

import{
    html,
    Eye,
    css,
    git,
    js,
    React,
    sass,
    vin2, 
    three,
    digital,
    tailwind} from '../assets';

 

export const navLinks = [
    {
        id:"home",
        title:"Home",
    },
    {
        id:"about",
        title:"About",
    },
    {
        id:"projects",
        title:"Projects",
    },
    {
        id:"contact",
        title:"Contact"
    }
  ];
  
  //SKILL
  export const Skillicons =[
    {
       title:"React",
       icon:React,
    },
    {
        title:"Js",
        icon:js,
    },
    {
        title:"Html",
        icon:html
    },{
        title:"sass",
        icon:sass
    }
    ,{
        title:"github",
        icon:git
    }
    ,{
        title:"Tailwind",
        icon:tailwind
    },
    {
        title:"three-js",
        icon:three,
    },
    {
        title:"css"
,        icon:css,   },

  ]
  export const Projects =[
{
    title:"MV-Digital-Sacco",
    image:digital,
    github:"https://github.com/Vinderruck/Saccosystem",
    giticon:git,
    LiveEye:Eye,
    Live:"https://mv-digital-sacco.netlify.app/",
    Frontend:"Reactjs, Sass,Bootstrap,Html",
    Backend:"Nodejs",
    Description:"MV-Digital-Sacco is a innovative solution designed to modernize the management of local saving and credit cooperatives (Saccos). Our platform enables remote access to member records, auditing of loans and savings, loan tracking, and modernization of Sacco operations. Additionally, our platform offers a unique opportunity for Saccos to generate income through targeted advertisements."
}
  ]
  