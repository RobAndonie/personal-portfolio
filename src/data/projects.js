import project1 from '../assets/fproject1.png';
import masSanto from '../assets/masSanto.png';

const projects = [
  {
    title: 'Health Tracking Web Application',
    description: [
      'Front End Developer & UX Designer.',
      'Made fetches to the backend to get data and display it on the front end.',
      'Designed the UI/UX of the application using Figma.',
      'Used React, Redux Toolkit, and CSS to build the application.',
    ],
    image: project1,
    tags: ['React', 'CSS', 'Redux Toolkit', 'Figma'],
    source: '',
    visit: '',
    id: 0,
  },
  {
    title: 'Personality Quiz App',
    description: [
      'Used UIKit to build the app.',
      'Used MVC design pattern.',
      "Built an app that tailors a specific answer based on the user's inputs.",
    ],
    image: project1,
    tags: ['Swift', 'Xcode', 'UIKit'],
    source: '',
    visit: '',
    id: 1,
  },
  {
    title: 'Más Santo: Spiritual and Personal Growth Website',
    description: [
      'Conducted user research, deploying a survey and empathy mapping.',
      'Crafted comprehensive user personas, user stories, and journey maps, among other empathy-driven strategies.',
      'Engineered an engaging user interface by designing wireframes and a high-fidelity prototype in Figma, followed by iterative usability testing.',
    ],
    image: masSanto,
    tags: [
      'User Research',
      'Interface & Interaction Design',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Figma',
    ],
    source: '',
    visit: '',
    id: 2,
  },
];

export default projects;
