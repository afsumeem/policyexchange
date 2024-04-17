"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (

      <div className=" mt-10">
      <Marquee speed="150">
        <div 
        // style={{ x }}
         className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
         </Marquee>
      </div>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
      ></div>
      <div className="absolute inset-0 z-10 grid place-items-end w-full">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
          <span className=" text-2xl">{card.name}</span> <br/>
          {card.designation}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    "id": 1,
    "name": "Dr. M. Masrur Reaz",
    "designation": "Chairman & CEO",
    "img": "/Team/ceo.jpg",
    "email": "masrur@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/masrurreaz",
        "twitter": "https://twitter.com/masrurreaz"
    },
    "details": {
        "bio": "Dr. M. Masrur Reaz is the Chairman & CEO of our organization, providing visionary leadership and strategic direction.",
        "experience": "Dr. Reaz has extensive experience in policy research and development, with a focus on socioeconomic issues.",
        "education": "Dr. Reaz holds a Ph.D. in Economics from a prestigious university.",
        "interests": [
            "Policy Research",
            "Economic Development",
            "Socioeconomic Issues"
        ]
    }
},
{
    "id": 8,
    "name": "Hasnat Alam",
    "designation": "Senior Manager & Economist",
    "img": "/Team/Hasnat.jpeg",
    "email": "hasnat@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/hasnatalam",
        "twitter": "https://twitter.com/hasnatalam"
    },
    "details": {
        "bio": "Hasnat Alam is a Senior Manager & Economist with a keen focus on economic analysis and strategic management.",
        "experience": "Mr. Alam brings a wealth of experience in economic research, analysis, and management to our organization.",
        "education": "Mr. Alam holds a Master's degree in Economics from a renowned institution.",
        "interests": [
            "Economic Analysis",
            "Strategic Management",
            "Research"
        ]
    }
},
{
    "id": 7,
    "name": "Ziaur Rahman",
    "designation": "Senior Policy Analyst",
    "img": "/Team/Ziaur.jpg",
    "email": "ziaur@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/rahminatithi",
        "twitter": "https://twitter.com/rahminatithi"
    },
    "details": {
        "bio": "Ziaur Rahman is a Senior Policy Analyst at Policy Exchange Bangladesh, assisting in research activities and data analysis.",
        "experience": "Rahmina has a background in social science research, with a focus on quantitative analysis.",
        "education": "Rahmina holds a Bachelor's degree in Economics from a reputed university.",
        "interests": [
            "Quantitative Analysis",
            "Policy Research",
            "Social Issues"
        ]
    }
},
{
    "id": 3,
    "name": "Pinaky Shanakar (Rahul)",
    "designation": "Senior Analyst",
    "img": "/Team/Pinaky.JPG",
    "email": "Pinaky@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/PinakyShanakar",
        "twitter": "https://twitter.com/PinakyShanakar"
    },
    "details": {
        "bio": "Pinaky Shanakar is the Senior Analyst at Policy Exchange Bangladesh, leading research initiatives and project management.",
        "experience": "Pinaky has a strong background in policy analysis and project coordination, with a focus on social and governance issues.",
        "education": "Pinaky holds a Master's degree in Public Policy from a leading institution.",
        "interests": [
            "Policy Analysis",
            "Project Management",
            "Governance Issues"
        ]
    }
},
{
    "id": 5,
    "name": "Rodoshee Tahsin",
    "designation": "Senior Associate and Project Coordinator",
    "img": "/Team/Rodoshee.jpeg",
    "email": "rodoshee@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/rafidtanmoy",
        "twitter": "https://twitter.com/rafidtanmoy"
    },
    "details": {
        "bio": "Rodoshee Tahsin serves as a Senior Associate and Project Coordinator at Policy Exchange Bangladesh, providing support in data collection and analysis.",
        "experience": "Rafid has a keen interest in policy research and data management, contributing to various research projects.",
        "education": "Rafid is pursuing a Bachelor's degree in Economics.",
        "interests": [
            "Data Analysis",
            "Policy Research",
            "Economic Development"
        ]
    }
},
{
    "id": 6,
    "name": "Sadia Sultana",
    "designation": "Analyst & Programme Coordinatior",
    "img": "/Team/Sadia.jpeg",
    "email": "sadia@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/lamiashams",
        "twitter": "https://twitter.com/lamiashams"
    },
    "details": {
        "bio": "Sadia Sultana is the Analyst for Stakeholder Outreach at Policy Exchange Bangladesh, facilitating engagement with key stakeholders.",
        "experience": "Lamia has experience in stakeholder management and communications, fostering relationships with diverse stakeholders.",
        "education": "Lamia holds a Bachelor's degree in Communications from a reputable university.",
        "interests": [
            "Stakeholder Engagement",
            "Communications",
            "Community Outreach"
        ]
    }
},
{
    "id": 2,
    "name": "Md. Hassib Hassan",
    "designation": "Analyst & Programme Coordinatior",
    "img": "/Team/hassib.jpg",
    "email": "hasnat@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/hasnatalam",
        "twitter": "https://twitter.com/hasnatalam"
    },
    "details": {
        "bio": "Md. Hassib Hassan serves as the Analyst & Programme Coordinatior at Policy Exchange Bangladesh, overseeing economic analysis and policy formulation.",
        "experience": "Hasnat has a wealth of experience in economic research and analysis, contributing valuable insights to inform policy decisions.",
        "education": "Hasnat holds a Master's degree in Economics from a renowned university.",
        "interests": [
            "Economic Analysis",
            "Policy Formulation",
            "Socioeconomic Development"
        ]
    }
},
{
    "id": 11,
    "name": "Zahrah Rahman",
    "designation": "Research Assistant",
    "img": "/Team/Zahrah.jpeg",
    "email": "zahrah@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/zahrahrahman",
        "twitter": "https://twitter.com/zahrahrahman"
    },
    "details": {
        "bio": "Zahrah Rahman is a diligent and detail-oriented Research Assistant, dedicated to supporting research endeavors with precision and enthusiasm.",
        "experience": "Ms. Rahman has actively participated in various research projects, contributing to data collection, analysis, and report preparation.",
        "education": "Ms. Rahman holds a Bachelor's degree in Economics, specializing in research methodologies.",
        "interests": [
            "Data Analysis",
            "Research Methodologies",
            "Report Preparation"
        ]
    }
},
{
    "id": 9,
    "name": "Naziba Nawrin",
    "designation": "Research Associate",
    "img": "/Team/Naziba.jpeg",
    "email": "naziba@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/nazibanawrin",
        "twitter": "https://twitter.com/nazibanawrin"
    },
    "details": {
        "bio": "Naziba Nawrin is a dedicated Research Associate, committed to conducting thorough research and analysis to support organizational goals.",
        "experience": "Ms. Nawrin has experience in conducting research projects, analyzing data, and providing insights to inform decision-making processes.",
        "education": "Ms. Nawrin holds a Bachelor's degree in Economics with a focus on research methodology.",
        "interests": [
            "Research Methodology",
            "Data Analysis",
            "Decision Support"
        ]
    }
},
{
    "id": 4,
    "name": "Rahmina Ahmed",
    "designation": "Programme Analyst",
    "img": "/Team/Rahmina.jpeg",
    "email": "naziba@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/nazibanawrin",
        "twitter": "https://twitter.com/nazibanawrin"
    },
    "details": {
        "bio": "Rahmina Ahmed is a Programme Analyst at Policy Exchange Bangladesh, conducting research on various policy issues.",
        "experience": "Naziba has a background in social science research, with a focus on qualitative research methodologies.",
        "education": "Naziba holds a Bachelor's degree in Sociology from a reputed university.",
        "interests": [
            "Policy Research",
            "Qualitative Analysis",
            "Social Issues"
        ]
    }
},
{
    "id": 10,
    "name": "Rafid Tanmoy",
    "designation": "Research Assistant",
    "img": "/Team/Rafid.jpeg",
    "email": "rafid@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/rafidtanmoy",
        "twitter": "https://twitter.com/rafidtanmoy"
    },
    "details": {
        "bio": "Rafid Tanmoy serves as a diligent Research Assistant, contributing to various research projects with enthusiasm and dedication.",
        "experience": "Mr. Tanmoy has gained valuable experience in conducting literature reviews, gathering data, and assisting in research analysis.",
        "education": "Mr. Tanmoy holds a Bachelor's degree in Economics with a focus on research methodologies.",
        "interests": [
            "Research Methodologies",
            "Data Collection",
            "Literature Review"
        ]
    }
},
{
    "id": 12,
    "name": "Ashraful Alam",
    "designation": "Administrative Assistant",
    "img": "/Team/Ashraful.jpg",
    "email": "ashraful@example.com",
    "social_links": {
        "linkedin": "https://www.linkedin.com/in/ashrafulalam",
        "twitter": "https://twitter.com/ashrafulalam"
    },
    "details": {
        "bio": "Ashraful Alam is a dedicated Administrative Assistant, known for his organizational skills and attention to detail in supporting administrative tasks.",
        "experience": "Mr. Alam has a proven track record of efficiently managing office operations, scheduling appointments, and providing administrative support.",
        "education": "Mr. Alam holds a Bachelor's degree in Business Administration with a focus on office management.",
        "interests": [
            "Office Management",
            "Organizational Skills",
            "Administrative Support"
        ]
    }
}
];