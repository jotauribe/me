export default {
  identity: {
    firstName: "Jhonatan",
    lastName: "Uribe",
    title: "Software Developer"
  },
  contact: {
    phone: "XXX XXX XXXX",
    location: "Medellin",
    email: "yosoyuribe@gmail.com"
  },
  about:
    "Passionate Software developer. Experience in Backend and Frontend development. Node, React and Angular have been my most used tools. Sometimes i play with JVM languages though (The place i come from). I really enjoy challenges.",
  networks: [
    {
      name: "linkedin",
      color: "#357AB6",
      profileUrl: "https://www.linkedin.com/in/jhonatan-uribe-515171125/"
    },
    {
      name: "github",
      color: "#171515",
      profileUrl: "https://github.com/jotauribe"
    },
    {
      name: "twitter",
      color: "#5DA9DD",
      profileUrl: "https://twitter.com/JotaHuertas"
    }
  ],
  experience: [
    {
      company: "Globant",
      position: "NodeJs Developer",
      logo: { url: "/globant.jpg", height: "24px", color: "#c3d500" },
      period: "OCT/2018 - PRESENT",
      abstract:
        "Worked as part of a multi-disciplinary team, in charge of the development and maintainance of a microservice based backend with a series of React applications as frontend.",
      techStack: ["reactjs", "javascript", "nodejs"]
    },
    {
      company: "Accenture",
      position: "Fullstack Developer",
      logo: { url: "/accenture.png", height: "36px", color: "#7400C1" },
      period: "AUG/2018 - OCT/2018",
      abstract:
        "Worked as a Fullstack Java/Angular developer for the digital sales channel of one of the company's clients.",
      techStack: ["angular", "java"]
    },
    {
      company: "Condorlabs",
      position: "Fullstack Developer",
      logo: { url: "condorlabs.svg", height: "18px", color: "#fdcd08" },
      period: "JAN/2018 - AUG/2018",
      abstract:
        "Worked as part of the team in charge of the development of the gateway API and the website of one of the main products of the company, using Express and ReactJS.",
      techStack: ["nodejs", "javascript", "reactjs"]
    }
  ],
  skillSets: [
    {
      skillCategory: "Basic Skills",
      color: "rgba(9, 149, 255, 0.5)",
      bgColor: "rgba(9, 149, 255, 0.25)",
      skills: [
        { name: "Software Design", level: 85 },
        { name: "Unit Testing", level: 75 }
      ]
    },
    {
      skillCategory: "Programming Languages",
      color: "rgba(255, 209, 75, 0.9)",
      bgColor: "rgba(255, 209, 75, 0.25)",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Java", level: 60 }
      ]
    },
    {
      skillCategory: "Frameworks & Libraries",
      color: "rgba(255, 48, 91, 0.5)",
      bgColor: "rgba(255, 48, 91, 0.25)",
      skills: [
        { name: "NodeJS", level: 85 },
        { name: "React", level: 80 },
        { name: "Angular", level: 80 }
      ]
    },
    {
      skillCategory: "Soft Skills",
      skills: [
        { name: "Self Learning", level: 97 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 80 },
        { name: "Adaptability", level: 85 }
      ]
    }
  ],
  languages: [
    {
      lang: "ES",
      name: "Spanish",
      level: 5,
      native: true,
      details: {
        color: "rgba(255, 209, 75, 0.9)",
        bgColor: "rgba(255, 209, 75, 0.25)",
        skills: [
          { name: "Reading", level: 100 },
          { name: "Writing", level: 100 },
          { name: "Speaking", level: 100 },
          { name: "Listening", level: 100 }
        ]
      }
    },
    {
      lang: "EN",
      name: "English",
      level: 3,
      native: false,
      details: {
        color: "rgba(255, 48, 91, 0.5)",
        bgColor: "rgba(255, 48, 91, 0.25)",
        skills: [
          { name: "Reading", level: 95 },
          { name: "Writing", level: 80 },
          { name: "Speaking", level: 70 },
          { name: "Listening", level: 70 }
        ]
      }
    }
  ],
  education: [
    { institution: "Universidad de Cartagena", career: "Software Engineering" }
  ]
};
