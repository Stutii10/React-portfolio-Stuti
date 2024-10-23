import image1 from "../assets/generated_img.jpg"
import image2 from "../assets/portfolioss.png"
import image3 from "../assets/spotify.png"





export const HERO_CONTENT = `
  Hello! I’m Stuti Goyal, a passionate software engineer currently pursuing 
  a Bachelor of Science in Computer Science at the University of South Florida. 
  As a junior, I have already embraced the challenges and opportunities of this 
  exciting journey, equipping myself with the skills and knowledge to make a 
  meaningful impact in the tech world.
`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer...`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "Student Assistant",
    company: "Engineering Student Services",
    description: [
      'I enhanced academic support services by developing a data-driven system that tracked the progress of over 1,000 students. By providing personalized guidance to 200+ students weekly and implementing an efficient communication framework, I achieved a 95% satisfaction rate while reducing response times by 40%, making academic resources more accessible and impactful for the student community.',
    ],
  },
  {
    year: "June 2024- Present",
    role: "Engineering Tutor",
    company: "Engineering Success Center",
    description: [
      'In this Role, I specialized in bringing complex technical concepts to life, guiding students through Computer Science fundamentals, Data Structures, Calculus, and Statistics. By developing targeted problem-solving strategies and strengthening mathematical foundations, I helped my students achieve a 10% average grade improvement. Working closely with 15+ engineering students, I created a supportive learning environment that transformed challenging technical concepts into practical understanding.',
    ],
  },
  {
    year: "July 2023- May 2024",
    role: "Peer Mentor for Calculus",
    company: "USF College of Engineering",
    description: [
      'As a Peer Mentor, I championed the academic success and personal growth of incoming freshmen, creating innovative strategies to help them navigate college life. Through structured weekly sessions, I provided comprehensive calculus support to 40+ students, resulting in a 5% grade improvement. My active participation in learning team development and detailed progress tracking helped establish a supportive environment where students could thrive both academically and personally.',
    ],
  },
];

export const LEADERSHIP = [
  {
    year: "May 2024 - Present",
    role: "Outreach Chair",
    company: "USF Engineering Council",
    description: "As Outreach Chair at USF's Engineering Council, I bridge connections between 40+ engineering organizations while driving student engagement to new heights. Through strategic outreach and thoughtful event planning, I've boosted email engagement by 15% and fostered partnerships with 10+ student groups. My proudest achievement is establishing our Industry Connect Sessions, where I've brought in representatives from 9+ companies, creating meaningful networking opportunities for fellow engineering students." ,
   
  },

  {
    year:"September 2024- Present" ,
    role: " Vice President Internal",
    company: "Society of Asian Scientists and Engineers",
    description: "As a student leader, I directed a dynamic team of 20+ officers while serving 1,600+ engineering students at USF. By streamlining our marketing, finance, and outreach operations through clear communication channels, I strengthened our organizational effectiveness. I take pride in fostering an inclusive environment that connects students from diverse backgrounds with opportunities, including building a valuable network of 15+ USF alumni who mentor and inspire our current members."
  },
  {
    year:"June 2023- Present" ,
    role: "Bulls LEAD Program",
    company: "USF College of Engineering",
    description: "Through monthly leadership workshops, I strengthened my people management skills and earned a distinguished leadership certification, applying these insights to create a more impactful program for engineering students. As a member of the Cohort-5, I later conducted 6 candidate interviews alongside the Program Director, helping shape future cohorts of engineering leaders.",
    
  },
  {
    year:"June 2024- September 2024" ,
    role: "Computer Science Chair",
    company: "Society of Asian Scientists and Engineers",
    description: "I championed student success by researching and mapping out 15+ hackathons and CS competitions for our members. Working closely with the Projects Director, I developed structured workshop plans and mentorship programs. I fostered collaboration between 5 project teams and 10+ SASE Alumni to create impactful hackathon prep sessions, ensuring our teams were well-equipped for competition success.",
    
  },

];

export const PROJECTS = [
  {
    title: "Aesthetic Fusion",
    image: image1,
    description:
      "A deep learning project that bridges the gap between classical art and modern imagery. Using TensorFlow and OpenCV, I developed a neural style transfer system that seamlessly blends artistic styles with any content image. The project demonstrates the intersection of computer vision and creative expression, allowing users to transform their photos into unique artworks inspired by any artistic style.",
    technologies: ["Tensorflow", "Jupyter NNotebook", "OpenCV"],
  },
  {
    title: "  Portfolio",
    image: image2,
    description:
      "This portfolio website marks my exciting dive into React development. What started as a simple showcase evolved into an invaluable learning experience, where I transformed my vision into reality while mastering React's component-based architecture. Every feature—from the smooth transitions to the responsive layouts—represents both a learning milestone and a practical implementation of React concepts.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },

  {
    title: "Spotify Education Podcast Finder",
    image: image3,
    description:
      "A data collection project that harnesses the power of Spotify's API to gather and analyze educational podcast metrics. This Python application streamlines the process of collecting, cleaning, and organizing podcast data, creating a comprehensive dataset for educational content analysis.",
    technologies: ["Spotify API", "JSON", "Python", "Panda"],
  },
 
];

