/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jatin khandelwal",
  title: "Jatin here",
  subTitle: emoji(
    "A Full Stack developer with experience in building websites. You can often find me solving problems or maybe developing a new skill!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/13YnpHozlSTidBNU_tRI7hlzVFOPzq2-1/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jatin9410",
  linkedin: "https://www.linkedin.com/in/jatin-khandelwal-7848881b8",
  gmail: "khandelwaljatin2401@gmail.com",
  facebook: "https://www.facebook.com/jatin.khandelwal.967?mibextid=2JQ9oc",
  // leetcode: "https://www.facebook.com/jatin.khandelwal.967?mibextid=2JQ9oc",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER AND PROBLEM SOLVER, OPEN TO LEARNING NEW TECHNOLOGIES AND BUILDING PROJECTS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications (PWA) in normal and SPA Stacks"),
    emoji(
      "⚡ Trying my hands on new projects and collaborating with others to increase my knowledge horizons"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fa-brands fa-git"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "DBMS",
      fontAwesomeClassname: "fa-solid fa-database"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("./assets/images/ggsipu.png"),
      subHeader: "B.Tech - Computer Science and Engineering(CSE)",
      duration: "November 2020 - June 2024",
      desc: "CGPA: 9.22 (Currently)",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "65%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management System",
      progressPercentage: "85%"
    },
    {
      Stack: "Computer Networks",
      progressPercentage: "80%"
    },
    {
      Stack: "Operating System",
      progressPercentage: "90%"
    },
    {
      Stack: "Object Oriented Programming",
      progressPercentage: "85%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Jethi Tech Solutions",
      companylogo: require("./assets/images/jethiTech.jpeg"),
      date: "May 2023 – August 2023",
      desc: "Supported the development of 2 projects named Barbera( a online services platform) and ReeRoute( a transport logistics company)",
      descBullets: [
        "Designing Schema and accordingly developed API’s using Apollo Server and Sequelize as ORM.",
        // "Orchestrated seamless backend and frontend integration of website, resulting in a 40% reduction in page load time and a 25% increase in user engagement and conversion rates.",
        "Integrated Client to Server using Apollo GraphQL Client and ensured Authentication and Authorization using JWT tokens and Twilio.",
        "Designed UI pages and built UI components using ReactJs and Tailwind CSS."
      ],
    },
    
    {
      role: "Full Stack Developer",
      company: "Outshade",
      companylogo: require("./assets/images/outshade.jpg"),
      date: "Sept 2022 – December 2022",
      desc: "About: Worked on PowerGrid( ’Maharatna’ Public Sector Enterprise of Govt. of India) Website , a TelenganaGovernment project based on Nodejs, Reactjs, Javascript, Sequelize",
      descBullets: [
        "Contributed on 3 Modules consisting of Circulation of Technical Circular, Dailymonitoring and Budget management from Building their frontend, Backend as well as linking them via Axios",
        " Innovated and implemented reusable components, leveraging Figma as a design reference, to enhance development efficiency and user experience",
        " Pioneered the creation of cutting-edge REST APIs, optimizing data communication between frontend, backend, and database, ensuring seamless synchronization."
      ],
      
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/recyle.jpg"),
      projectName: "Recycle",
      projectDesc: "Orchestrated a Waste Management System, maximizing efficiency and minimizing environmental impact",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/jatin9410/wastemanage/"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "CampVerse",
      projectDesc: "A camping website where you can host your own campgrounds",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/jatin9410/CampVerse."
        }
      ]
    },
    {
      image: require("./assets/images/nftwarranty.png"),
      projectName: "NFT Warranty System",
      projectDesc: "A digital warranty system that uses NFTs",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/jatin9410/NFT_Warranty_backend"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Flipkart Grid 4.0 Semifinalist",
      subtitle:
        "Qualified for the Project round of Flipkart Grid 2022",
      image: require("./assets/images/Flipkart.jpeg"),
      imageAlt: "flipkart grid",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18B8ksLoTxPsKi-h6_SrWXgaCetmHnOeL/view?usp=drivesdk"
        },
      ]
    },
    {
      title: "Web Developer Bootcamp",
      subtitle:
        "Getting Started with Nodejs",
      image: require("./assets/images/Nodejs.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17X2N9kP6mbOv1V5cXZbwden2zlpvtdTX/view?usp=drivesdk"
        },
      ]
    },

    // {
    //   title: "Complete MySQL Course",
    //   subtitle: "Completed complete MySQL course from Udemy",
    //   image: require("./assets/images/MySQL.jpeg"),
    //   imageAlt: "MySQL",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.udemy.com/certificate/UC-00b1a07f-5430-4f29-9b4d-ab243888b3b8/"
    //     },
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write about things that I find fascinating!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://kitrakiar73.medium.com/rate-limiters-how-to-make-one-1a0010b6874d",
      title: "Rate Limiters-How to build one!",
      description:
        "Learn what rate limiters are? Principle behind their working, and how to build one!"
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9532701690",
  email_address: "khandelwaljatin2401@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "kartik_rai09", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
