export type DAILY_APPLICATIONS_Type = {
  app: number;
  name: string;
  img: string;
  useCase: string[];
}[];

export type DAILY_APPLICATION_Type = {
  app: number;
  name: string;
  img: string;
  useCase: string[];
};

export const DAILY_APPLICATIONS: DAILY_APPLICATIONS_Type = [
  {
    app: 1,
    name: 'HTML',
    img: '/images/html.png',
    useCase: ['Developing structure of web content'],
  },
  {
    app: 2,
    name: 'CSS',
    img: '/images/css.png',
    useCase: ['Style rules for HTML'],
  },
  {
    app: 3,
    name: 'JavaScript',
    img: '/images/javascript.png',
    useCase: ['Making Wireframes', 'Designing Website + Images'],
  },
  {
    app: 4,
    name: 'TypeScript',
    img: '/images/typescript.png',
    useCase: [],
  },
  {
    app: 5,
    name: 'Sass',
    img: '/images/sass.png',
    useCase: ['Making Animated Contents'],
  },
  {
    app: 6,
    name: 'Tailwind',
    img: '/svg/tailwind.svg',
    useCase: ['Designing Book'],
  },
  {
    app: 7,
    name: 'React',
    img: '/svg/react.svg',
    useCase: ['Engaging with Developers', 'Staff Member'],
  },
  {
    app: 10,
    name: 'CapCut',
    img: 'https://freelogopng.com/images/all_img/1664284918capcut-icon-png.png',
    useCase: ['Making Simple Videos'],
  },
  {
    app: 11,
    name: 'YouTube',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
    useCase: ['Walking Series', 'Tutorials & Speechs'],
  },
  {
    app: 12,
    name: 'GitHub',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    useCase: ['Collabration', 'Storing my Codes'],
  },
  {
    app: 2,
    name: 'VS Code',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
    useCase: ['Writing Codes'],
  },
  {
    app: 8,
    name: 'Postman',
    img: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
    useCase: ['Testing API Calls'],
  },
];
