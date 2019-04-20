export default {
  identity: {
    firstName: "Jhonatan",
    lastName: "Uribe",
    title: "Software Developer"
  },
  about:
    "Passionate Software developer. Experience in Backend and Frontend development. Node, React and Angular have been my most used tools. Sometimes i play with JVM languages though (The place i come from). I really enjoy challenges.",
  networks: [
    {
      name: "linkedin",
      profileUrl: "https://www.linkedin.com/in/jhonatan-uribe-515171125/"
    },
    { name: "github", profileUrl: "https://github.com/jotauribe" },
    { name: "twitter", profileUrl: "https://twitter.com/JotaHuertas" }
  ],
  experience: [
    {
      company: "Globant",
      position: "NodeJs Developer",
      logo: { url: "/globant.jpg", height: "24px", color: "#c3d500" },
      period: "OCT / 2018 - PRESENT",
      abstract:
        "Worked as part of a multi-disciplinary team, in charge of the development and maintainance of a microservice based backend with a series of React applications as frontend. As part of my job i had to participate in the backend development as well in the frontend development.",
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
      period: "JAN / 2018 - AUG / 2018",
      abstract:
        "Worked as part of the team in charge of the development of the gateway API and the website of one of the main products of the company, using Express and ReactJS.",
      techStack: ["nodejs", "javascript", "reactjs"]
    }
  ]
};
