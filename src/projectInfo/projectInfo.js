

// Import images
import webDevImg from '../images/birb.jpg';
import IoTImg from '../images/circuit_board_cropped.jpg';
import artImg from '../images/artImg.JPG';
import eventEgg from '../projectInfo/resources/EventEgg.JPG'
import persSite from '../projectInfo/resources/PersSite.JPG'
import knectDev from '../projectInfo/resources/knectDev.JPG'
import LightBaseWifi from '../projectInfo/resources/LightBaseWifi.jpg'

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
        description: 'Allows users to effectively track and document the jobs they have applied for as well as their most up to date interactions.',
        tech: 'Built with Javascript, React, Node.js, Express, Redux, Ionic, Sass, React-Vis,PostgreSQL, hosted on Heroku, and Netlify, managed with Git, Github, andGithub Projects.',
        img: knectDev,
        link: 'https://github.com/Knect-Dev'
      },
      {
        title: 'Event Egg',
        description: 'Allows users to search and save upcoming events in their area and suggests events based on user location and preferences.',
        tech: 'Built with Javascript, React, Node.js, Express, CSS3, Sass, HTML5, MongoDB,Ticketmaster Discovery API, GitHub, Git.',
        img: eventEgg,
        link: 'https://github.com/event-egg'
      }, 
      {
        title: 'This Site!',
        description: 'My personal portfolio site. You\'re lookin at it!',
        tech: 'React, Material UI',
        img: persSite,
        link: 'https://github.com/Kellen-Linse/kellenlinse.com'
      },
      {
        title: 'LightBase Wifi App',
        description: 'App for WiFi controlled LED lighting.',
        tech: 'Dart, Flutter, Multicast DNS',
        img: LightBaseWifi,
        link: ''
      },
    ]
  },
  {
    title: 'IoT',
    desc: 'Internet of Things and Embedded Systems Projects',
    img: IoTImg,
    projects: [
      {
        title: 'Dot Dot Flow Props',
        description: 'App, IR, Bluetooth, WiFi controlled LED performance and flow props.',
        tech: '',
        img: '',
        link: ''
      },
      {
        title: 'LightBase Wifi',
        description: '',
        tech: '',
        img: '',
        link: ''
      },
    ]
  },
  {
    title: 'Visual Art',
    desc: 'Visual and Interactive Arts Projects',
    img: artImg,
    projects: [
      {
        title: 'APOG Music Festival',
        description: '',
        tech: '',
        img: '',
        link: ''
      }
    ]
  },
];

export default projectInfo;