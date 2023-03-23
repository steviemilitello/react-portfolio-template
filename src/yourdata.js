// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import cssBootstrapIcon from "./images/cssbootstrap.svg"
import nodeIcon from "./images/node.svg"
import pythonIcon from "./images/python.svg"
import reactIcon from "./images/react.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Stevie",
  headerTagline: [
    //Line 1 For Header
    "Software Engineer",
    // //Line 2 For Header
    // "products, brands,",
    // //Line 3 For Header
    // "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Based near Boston, MA. Bringing my photography and art skills to coding.",

  //Contact Email
  contactEmail: "steviemilitello@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    // {
    //   title: "Tavern Brawl", //Project Title - Add Your Project Title Here
    //   para:
    //     "A Fantasy Choose Your Own Adventure text-based game that allows a player to select different paths with win and lose conditions. Uses HTML, CSS and Javascript", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   // url: "steviemilitello.github.io/tavern-brawl/",
    //   // codeUrl: "https://github.com/steviemilitello/tavern-brawl"
    // },
    {
      title: "TTRPG Tracker", //Project Title - Add Your Project Title Here
      para:
        "A full CRUD App that allows a user to keep track of their tabletop RPG book collection. Uses MongoDB/Mongoose, Express, Liquid & Node.js. Styled with Bootstrap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/w8yyQQY.png",
      //Project URL - Add Your Project Url Here
      url: "https://ttrpgtracker.herokuapp.com/",
      codeUrl: "https://github.com/steviemilitello/ttrpg-tracker"
    },
    {
      title: "Ghostbustr", //Project Title - Add Your Project Title Here
      para:
        "A full CRUD app with an API and Client made with a team of 4 that allows a user to view haunted locales, create their own locales and add visits to the locales. Uses MongoDB/Mongoose, Express, React & Node.js. Styled with Bootstrap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/2Es1SQS.png",
      //Project URL - Add Your Project Url Here
      url: "https://go-ghostbustr-app.herokuapp.com/",
      codeUrl: "https://github.com/steviemilitello/ghostbustr-client"
    },
    {
      title: "Check My Fit", //Project Title - Add Your Project Title Here
      para:
        "A full CRUD app with an API and Client made with a team of 2 that allows a user to view outfits, create outfits, tag their outfits, view outfits by tags, vote on other user's outfits and comment on outfits. Uses MongoDB/Mongoose, Express, React & Node.js. Styled with Bootstrap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/uq9nPWj.png",
      //Project URL - Add Your Project Url Here
      url: "https://check-my-fit.herokuapp.com/",
      codeUrl: "https://github.com/steviemilitello/check-my-fit-client"
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Pivoting to Software Engineering after over 4 years of working in Non-Profits.",
  aboutParaTwo:
    "I am a creative with a background in Art, Photography and Film who is passionate about bringing good design, diversity and inclusivity to the Software Engineering world. I believe everyone should have access to websites & apps, and representation for all types of people in the tech world.",
  aboutParaThree:
    "I am passionate about all forms of art and entertainment, and am bringing my creativity and knowledge to Tech.",
  aboutImage:
    "https://i.imgur.com/ZcOAdSm.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML5",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: cssBootstrapIcon,
      para:
        "Bootstrap",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: nodeIcon,
      para:
        "Node.js, Express",
    },
    {
      img: "https://i.imgur.com/VTphEMz.png",
      para:
        "MongoDB, Mongoose",
    },
    {
      img: pythonIcon,
      para:
        "Python, Django",
    },
    {
      img: "https://i.imgur.com/SgjUoD3.png",
      para:
        "PostgreSQL, SQL",
    },
    {
      img: codeIcon,
      para:
        "Object Oriented Programming, MVC Pattern, Rest APIs",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's connect",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon,
      url: "https://github.com/steviemilitello" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevie-militello/",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
