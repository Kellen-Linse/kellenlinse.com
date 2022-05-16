// Import images
import webDevImg from '../images/birb.jpg';
import IoTImg from '../images/circuit_board_cropped.jpg';
import artImg from '../images/artImg.JPG';
import eventEgg from '../projectInfo/resources/EventEgg.JPG';
import persSite from '../projectInfo/resources/PersSite.JPG';
import knectDev from '../projectInfo/resources/knectDev.JPG';
import lightBaseWifi from '../projectInfo/resources/lightBaseWiFi.JPG';
import sword from '../projectInfo/resources/Sword.png';
import lightBase from '../projectInfo/resources/LB.JPG';
import artInstall from '../projectInfo/resources/art_install/Art_Install.jpg';
import fiveK from '../projectInfo/resources/art_install/5K.JPG';
import terra from '../projectInfo/resources/art_install/Terra.jpg';
import vj from '../projectInfo/resources/art_install/vj.JPG';
import vj2 from '../projectInfo/resources/art_install/vj2.JPG';

/* project object structure

      {
        title: 'This is a test title!',
        description: 'This description? Yep! You guessed it! A test!',
        img: webDevImg,
        link: 'https//:www.google.com'
      }

*/

const projectInfo = [
  {
    title: 'Web and Mobile Development',
    desc: 'Full Stack and Mobile App Development Projects',
    img: webDevImg,
    projects: [
      {
        title: 'Knect.dev',
        description:
          'Allows users to effectively track and document the jobs they have applied for as well as their most up to date interactions.',
        tech: 'Built with Javascript, React, Node.js, Express, Redux, Ionic, Sass, React-Vis,PostgreSQL, hosted on Heroku, and Netlify, managed with Git, Github, andGithub Projects.',
        img: knectDev,
        link: 'https://github.com/Knect-Dev',
        buttonMsg: 'Github',
      },
      {
        title: 'Event Egg',
        description:
          'Allows users to search and save upcoming events in their area and suggests events based on user location and preferences.',
        tech: 'Built with Javascript, React, Node.js, Express, CSS3, Sass, HTML5, MongoDB,Ticketmaster Discovery API, GitHub, Git.',
        img: eventEgg,
        link: 'https://github.com/event-egg',
        buttonMsg: 'Github',
      },
      {
        title: 'This Site!',
        description: "My personal portfolio site. You're lookin at it!",
        tech: 'React, Material UI',
        img: persSite,
        link: 'https://github.com/Kellen-Linse/kellenlinse.com',
        buttonMsg: 'Github',
      },
      {
        title: 'LightBase Wifi App',
        description: 'App for WiFi controlled LED lighting.',
        tech: 'Dart, Flutter, Multicast DNS, Websockets',
        img: lightBaseWifi,
        link: '',
        buttonMsg: '',
      },
    ],
  },
  {
    title: 'IoT and Embedded Projects',
    desc: 'Internet of Things and Embedded Systems Projects',
    img: IoTImg,
    projects: [
      {
        title: 'LED Performance Flow Props',
        description:
          'App, IR, Bluetooth, and WiFi controlled LED performance flow props.',
        tech: '',
        img: sword,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'LightBase Wifi',
        description: '',
        tech: '',
        img: lightBase,
        link: '',
        buttonMsg: '',
      },
    ],
  },
  {
    title: 'Visual Art',
    desc: 'Visual and Interactive Arts Projects',
    img: artImg,
    projects: [
      {
        title: 'APOG Music Festival',
        description: 'Interactive Art Installation',
        tech: 'Azure Kinect Depth Camera, TouchDesigner, Synethesia, Resolume.',
        img: artInstall,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'APOG Music Festival',
        description:
          'Terrarium Stage, developed by myself and the other members of KAB, creative art collective.',
        tech: '',
        img: terra,
        link: '',
        buttonMsg: '',
      },
      {
        title: '5K Night at Kremwork Night Club',
        description: '',
        tech: 'Azure Kinect Depth Camera, TouchDesigner, Synethesia, Resolume.',
        img: fiveK,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'Bad Luck Club Music Event',
        description: '',
        tech: 'Azure Kinect Depth Camera, Processing, Synethesia, Resolume.',
        img: vj,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'Bad Luck Club Music Event',
        description: '',
        tech: 'Tech: Azure Kinect Depth Camera, Processing, Synethesia, Resolume.',
        img: vj2,
        link: '',
        buttonMsg: '',
      },
    ],
  },
];

export default projectInfo;
