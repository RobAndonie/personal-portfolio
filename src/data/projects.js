import project1 from '../assets/fproject1.png';
import masSanto from '../assets/masSanto.png';
import personalCRM from '../assets/personalCRM.png';

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
    title: 'Más Santo: Spiritual and Personal Growth Web App (2024)',
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
    visit:
      'https://www.figma.com/proto/DZhLFSVZ4GSmZKXcQk8gbU/M%C3%A1s-Santo---Prototype?type=design&node-id=192-2159&t=r6kYkuWsgjUb7M0u-1&scaling=min-zoom&page-id=104%3A1020&starting-point-node-id=192%3A2159&mode=design',
    id: 1,
  },
  {
    title: 'Personal CRM Web App (2024)',
    description: [
      'Tailored the design and development of my Personal CRM Website, centering on creating a minimalist and intuitive interface that streamlines contact management.',
      'Leveraged user-centered design principles in Figma to construct and refine a high-fidelity prototype in Figma, followed by its implementation using the MERN stack.',
    ],
    image: personalCRM,
    tags: [
      'Interface & Interaction Design',
      'Wireframing',
      'Prototyping',
      'Figma',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
    ],
    source: '',
    id: 2,
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
    id: 3,
  },
];

export default projects;
