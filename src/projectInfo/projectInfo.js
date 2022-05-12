

// Import images
import webDevImg from '../images/birb.jpg';
import IoTImg from '../images/circuit_board_cropped.jpg';
import artImg from '../images/artImg.JPG';

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
        title: 'This is a test title!',
        description: 'This description? Yep! You guessed it! A test!',
        img: webDevImg,
        link: 'https://www.google.com'
      }
    ]
  },
  {
    title: 'IoT',
    desc: 'Internet of Things and Embedded Systems Projects',
    img: IoTImg,
    projects: [
      {
        title: 'This is a IoT test title!',
        description: 'This description? Yep! You guessed it! An IoT test!',
        img: IoTImg,
        link: 'https://www.google.com'
      }
    ]
  },
  {
    title: 'Visual Art',
    desc: 'Visual and Interactive Arts Projects',
    img: artImg,
    projects: [
      {
        title: 'This is a visual test title!',
        description: 'This description? Yep! You guessed it! A visual test!',
        img: artImg,
        link: 'https://www.google.com'
      }
    ]
  },
];

export default projectInfo;