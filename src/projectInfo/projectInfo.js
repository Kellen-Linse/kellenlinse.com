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
import midi from '../projectInfo/resources/midiControl.jpg';
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
        tech: '',
        link: 'https//:www.google.com',
        buttonMsg: '',
      }

*/

const projectInfo = [
  {
    title: 'IoT and Embedded Projects',
    desc: 'Internet of Things and Embedded Systems Projects',
    img: IoTImg,
    projects: [
      {
        title: 'LED Performance Flow Props',
        description:
          'These LED Performance props work because of an optical illusion known as "Persistance of Vision" that occurs when visual perception of an object does not cease for some time after the rays of light proceeding from it have ceased to enter the eye. This allows the LEDs to create a picture which seems to be suspended in the air after the prop moves on. These flow props come in a variety of sizes and types, they are modular in their design which allows them to interconnect with each other, and are App, IR, Bluetooth, and WiFi controlled, and can sync up via an offline mesh network. They are built with custom designed Lithium Ion Batteries, a carbon fiber body, 3D printed support and interior parts, and a custom designed microcontroller designed and built by myself.',
        tech: 'The microcontroller was designed by me in EasyEDA, PCBs manufactured first by by JLC PCB, then PCB Way, placed and soldered by me first, then PCB Way. All 3D printed pieces designed by myself as well. Code Related Tech: C++, Platformio, FastLED, Websockets, OTA Updates, and more.',
        img: sword,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'LightBase Wifi',
        description: 'These microcontrollers were developed to bring smart lighting to anything you can dream up, and designed to be as small as possible to fit into anything your heart desires. These chips are WiFi-enabled and will run off of either a USB or Lithium Ion batteries. They have a 5v, Ground and two GPIO pins, so they are not limited to use with LEDs. These chips are used in tandum with the LightBase WiFi App mentioned in the Web/Mobile App Development section, but can be updated via USB or Over the Air if needed to work with applications. There is a bluetooth variant in active development as well.',
        tech: 'Designed by me in EasyEDA, PCBs manufactured by JLC PCB, placed and soldered by me. Code Related Tech: C++, Platformio, FastLED, Websockets, OTA Updates, and more.',
        img: lightBase,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'Midi Based Controller for Interactive Art Installations',
        description: 'This controller allows users to interface with art installations via a button, fade sliders, or depth sensors which are mapped to Midi outputs. It communicates with the programs running the art installation via Midi communications protocol. At it\'s heart it is run off of Teensy 3.2.',
        tech: 'Body designed and printed by me, Code written by me using C++, Platformio, MiDi Library.',
        img: midi,
        link: '',
        buttonMsg: '',
      }
    ],
  },
  {
    title: 'Web / Mobile Development',
    desc: 'Full Stack and Mobile App Development Projects',
    img: webDevImg,
    projects: [
      {
        title: 'Knect.dev',
        description:
          'Knect.dev is a website that assists users in their search for a new job. Knect.dev allows users to effectively track and document the positions they have applied for. Storing the job details, company info, and any contacts they may have within the company, as well as their most up to date interactions and current status of any given application.',
        tech: 'Built with Javascript, React, Node.js, Express, Redux, Ionic, SASS, React-Vis, PostgreSQL, hosted on Heroku, and Netlify, managed with Git, Github, andGithub Projects.',
        img: knectDev,
        link: 'https://github.com/Knect-Dev',
        buttonMsg: 'Github',
      },
      {
        title: 'Event Egg',
        description:
          'EventEgg is an event management platform, it allows users to search and save upcoming events in their area and suggests events based on user location and preferences.',
        tech: 'Built with Javascript, React, Node.js, Express, CSS3, SASS, HTML5, MongoDB, Ticketmaster Discovery API, GitHub, Git.',
        img: eventEgg,
        link: 'https://github.com/event-egg',
        buttonMsg: 'Github',
      },
      {
        title: 'This Site!',
        description:
          "My personal portfolio site. You're lookin at it! Be sure to check out the mobile version as well!",
        tech: 'React, Material UI, and a whole host of great third party libraries. See more on my Github.',
        img: persSite,
        link: 'https://github.com/Kellen-Linse/kellenlinse.com',
        buttonMsg: 'Github',
      },
      {
        title: 'LightBase Wifi App',
        description:
          'Flutter based mobile application for controlling LED lighting via a websocket connection over WiFi. Works in conjunction with microcontrollers I designed and built utilizing ESP8266 SoCs. See more about those microcontrollers in the IoT/Embedded section. There is also a bluetooth variant in active development.',
        tech: 'Dart, Flutter, Multicast DNS, Websockets',
        img: lightBaseWifi,
        link: '',
        buttonMsg: '',
      }
    ],
  },

  {
    title: 'Visual Art',
    desc: 'Visual and Interactive Arts Projects',
    img: artImg,
    projects: [
      {
        title: 'APOG Music Festival',
        description: 'Interactive Art Installation for APOG Music Festival. This art installation had two different modes, both of which recognized the viewer(s) via an Azure Kinect depth camera, allowing them to modify or interact with the display in front of them.',
        tech: 'Azure Kinect Depth Camera, TouchDesigner, Synethesia, Resolume.',
        img: artInstall,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'APOG Music Festival',
        description:
          'Terrarium Stage, developed, designed, and built by myself and the other members of KAB, creative art collective.',
        tech: '',
        img: terra,
        link: '',
        buttonMsg: '',
      },
      {
        title: '5K Night at Kremwork Night Club',
        description: 'Interactive Art Installation for 5K, a monthly event at Kremwork night club. The iteration of this art installation pictured recognized the viewer(s) via an Azure Kinect depth camera, allowing them to interact with the projection in front of them, moving around the smaller 5K logos within the large 5K logo.',
        tech: 'Azure Kinect Depth Camera, TouchDesigner, Synethesia, Resolume.',
        img: fiveK,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'Bad Luck Club Music Event',
        description: 'Generative and audio reactive visuals for Bad Luck Club Music Event.',
        tech: 'Azure Kinect Depth Camera, Processing, Synethesia, Resolume.',
        img: vj,
        link: '',
        buttonMsg: '',
      },
      {
        title: 'Bad Luck Club Music Event',
        description: 'Generative and audio reactive visuals for Bad Luck Club Music Event.',
        tech: 'Tech: Azure Kinect Depth Camera, Processing, Synethesia, Resolume.',
        img: vj2,
        link: '',
        buttonMsg: '',
      },
    ],
  },
];

export default projectInfo;
