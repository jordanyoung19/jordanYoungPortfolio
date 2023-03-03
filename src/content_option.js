import bonfirePic from './assets/images/bonfire.JPG'
import coachellaGuys from './assets/images/coachellaGuys.jpg'
import dyePic from './assets/images/dye.jpg'
import peninsulaLauren from './assets/images/peninsulaLauren.JPG'
import pumpRoof from './assets/images/pumpRoof.jpg'
import soundersGame from './assets/images/soundersGame.JPG'
import berlin from './assets/images/berlin.JPG'
import thiryEighthGrad from './assets/images/38thGrad.jpg'
import crssd from './assets/images/crssd.jpg'
import diggleJTree from './assets/images/diggleJTree.JPG'
import dodgersStadium from './assets/images/dodgersStadium.jpg'
import tahoeSunrise from './assets/images/tahoeSunrise.JPG'
import soloGrad from './assets/images/soloGrad.JPG'



const logotext = "JORDAN";
const meta = {
    title: "Jordan Young",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Hi, I'm Jordan. I'm:",
    animated: {
        first: "a Software Engineer",
        second: "a Soccer Player",
        third: "a Musician",
        fourth: "just havin fun."
    },
    description: "Here's a little portal to my life. Hope you enjoy and feel free to connect",
    your_img_url: soloGrad,
};

const dataabout = {
    title: "A Bit About Myself",
    aboutme: "I recently graduated from the University of California, Irvine, with a Bachelor's degree in Computer Science. Upon graduation I began full time at Amazon working as a Software Engineer after interning the Summer before.",
};
const worktimeline = [{
        jobtitle: "Software Engineer",
        where: "Amazon",
        date: "2022",
    },
    {
        jobtitle: "Software Engineer Intern",
        where: "Amazon",
        date: "2021",
    },
    {
        jobtitle: "Full Stack Engineer",
        where: "Commit the Change, UCI",
        date: "2020",
    },
    {
        jobtitle: "Research Software Engineer",
        where: "Beckman Laser Institute",
        date: "2019",
    }
];

const skills = [{
        name: "Java",
        value: 100,
    },
    {
        name: "Python",
        value: 100,
    },
    {
        name: "TypeScript",
        value: 100,
    },
    {
        name: "SQL",
        value: 100,
    },
    {
        name: "AWS (EC2, S3, ECS, Lambda, APIGateway, CloudWatch)",
        value: 90,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 75,
    },
];

const services = [{
        title: "Jazz Hands",
        description: "Built web application that displays Spotify information retrieved from Spotify API using user entered queries. \
        Used handtrack.js AI library to improve accessibility, allowing users to navigate the site with motions and gestures",
        link: "https://github.com/jordanyoung19/jazzHands"
    },
    {
        title: "Fabflix",
        description: "Designed and developed front and back end of fully functional movie database website. \
        Used XML parsing to upload large amounts of data quickly and mySQL to store and retrieve the data. \
        Deployed site to live production using Tomcat server on AWS ECS instance built with Maven.",
        link: "https://github.com/jordanyoung19/Fabflix"
    },
    {
        title: "This Website!",
        description: "Feel Free to take a look at the source code linked for this site.",
        link: "https://github.com/jordanyoung19/jordanYoungPortfolio"
    },
];

const dataportfolio = [{
        img: bonfirePic,
        desctiption: "Friends in Newport",
        link: "#",
    },
    {
        img: coachellaGuys,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: dyePic,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: pumpRoof,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: peninsulaLauren,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: soundersGame,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: berlin,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: crssd,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: thiryEighthGrad,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: dodgersStadium,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: diggleJTree,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: tahoeSunrise,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jordanby19@gmail.com",
    YOUR_FONE: "415.518.0073",
    description: "Send me an email or shoot me a call, I'd love to hear from you! *contact forum is a work in progress*",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/jordanyoung19",
    linkedin: "https://www.linkedin.com/in/jordanbyoung19/",
    instagram: "https://www.instagram.com/jordan_young19/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};