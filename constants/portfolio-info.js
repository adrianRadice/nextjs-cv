import emoji from "react-easy-emoji";

export const seoData = {
  title: "Adrian Radice",
  description:
    "A passionate Full Stack Web / Mobile Developer and Blockchain Developer.",
  author: "Adrian Radice",
  image: "https://avatars.githubusercontent.com/u/31006922",
  url: "https://adrianradice.github.io/nextjs-cv",
  keywords: [
    "Radice",
    "Radice Adrian",
    "@adrianRadice",
    "adrianRadice",
    "Portfolio",
    "Radice Portfolio ",
    "Radice Adrian Portfolio",
  ],
};

export const greetings = {
  name: "Adrian Radice",
  title: "Hi all, I'm Adrian",
  description:
    "I'm passionate developer having an experience of web / mobile applications  with .NET, Go, React.js, React-Native, Next.js and serverless apps on Azure, AWS, Firebase and Blockchain development on Ethereum, Solidity, Web3.js.",
  resumeLink:
    "https://drive.google.com/file/d/17TxlB73xBF9qmOZkt5BmJ504b4O9Tl3O/view?usp=sharing",
};

export const socialLinks = {
  url: "https://adrianradice.github.io/nextjs-cv",
  linkedin: "https://www.linkedin.com/in/adrian-radice",
  github: "https://github.com/adrianRadice",
  instagram: "https://www.instagram.com/adrian.radice",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "PROACTIVE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive SPA & PWA in React.js or Angular"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji(
          "⚡ Building RESTful APIs in .NET, nodejs express or Go Gin"
        ),
        emoji("⚡ Building Mobile App using React-Native"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "NET",
          fontAwesomeClassname: "logos:c-sharp",
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "logos:go",
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "logos:rust",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience of working on multiple cloud platforms: AWS, Azure, Firebase"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions, Gitlab CI/CD, Azure Devops"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "Mesos",
          fontAwesomeClassname: "logos:mesos",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
      ],
    },
    {
      title: "Blockchain",
      lottieAnimationFile: "lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
        ),
        emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
        emoji(
          "⚡ Building Dapps with React.js, Rust & Solidity using Web3.js, Moralis & IPFS"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "logos:solidity",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassname: "logos:web3js",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassname: "logos:metamask-icon",
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache-icon",
        },
      ],
    },

    {
      title: "Managment project and team",
      lottieAnimationFile: "lottie/skills/development-team.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience in scrum and kanban"),
        emoji("⚡ Monitoring team and project with azure devops tools"),
        emoji("⚡ Mentoring team in scrum"),
      ],
      softwareSkills: [
        {
          skillName: "Azure Devops",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Scrum",
          fontAwesomeClassname: "logos:jira",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "UNLAM",
    subHeader: "Systems engineering",
    duration: "2014 - 2019",
    desc: "Participated in the CONAISI and publish 1 papers.",
    descBullets: [
      "I was University professor of Operative System",
      "Participated in the research of ETH layer 0 module orchestrator",
    ],
  },
  {
    schoolName: "Microsoft Azure az-204",
    subHeader: "Developing solotions for Microsoft Azure",
    duration: "2021",
    link: "https://learn.microsoft.com/es-mx/users/adrianradice-8376/transcript/d4m80cxmqoq5ql2",
    linkTitle: "Certification report",
  },
];

export const experience = [
  {
    role: "vaistech.io",
    company: "Vaistech",
    date: "Ago 2023 – present",
    desc: "Currently, I am part of a team focused on platform transformation in the InsurTech domain. My role encompasses Front-end development, Site Reliability Engineering (SRE) management, and DevOps practices implementation. Additionally, I research and enhance user experience through the integration of artificial intelligence into the business.",
    descBullets: ["Creation of embedded and SaaS solutions using Angular and .NET to expose the core of our product, thus revolutionizing insurance marketing.",
      "Development of the institutional and testing site using Astro alongside PReact.",
      "Establishment of the CI/CD pipeline using Azure DevOps.",
      "Guiding UX and UI decisions for the solutions.", "Leading the team in software development process with ISO 27001 certification mindset.",
      "Development in Go of an L7 to incorporate specific authentication and authorization requirements of IDPs.", 
      "Design and development of a service for classifying goods according to the NMC, optimizing the offered insurance and reducing time to market. I utilized Go for development, Gemini and Elasticsearch as pre-trainers for the specific recommendation model, and enhanced its exposure and response speed through a cache layer, complemented with Redis and MemGraph."],
  },
  {
    role: "sofrecom.com",
    company: "Sofrecom",
    date: "Ago 2023 – present",
    desc: "I work as fullstack developer on various mobile / web App. Besides I help the company adopt Azure Devops for your projects. Some projects",
    descBullets: [
      "YPF Extranet: ERP web. Techs: Frontend: Angular + bootstrap , Backend: .NET + ODATA + EF + SQL SERVER + SAP (Integration) and deploy on Azure",
      "Metrotel: ERP web full responsive. Techs: Frontend: Angular + bootstrap , Backend: PHP + Laravel + Eloquent + MariaDB + keycloack + Redis and deploy on AWS EKS",
      "Techint PSR: ERP web. Techs: Frontend: React + material UI , Backend: .NET  + Dapper + SQL SERVER + SAP (Integration) and deploy on Azure",
      "Vittal: Telemedecine app mobile. Techs: React-Native + rnuilib, Backend: .NET + Dapper + SQL SERVER and deploy onpremise solution",
    ],
  },
];
