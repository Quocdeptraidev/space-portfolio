import { FaYoutube, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const FRONTEND_MOBILE_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  // { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  // { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "React Native", image: "reactnative.png", width: 80, height: 80 },
  { skill_name: "Android Java", image: "android.png", width: 80, height: 80 },
];

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MySql", image: "mysql.png", width: 80, height: 80 },
  { skill_name: "Java", image: "java.png", width: 80, height: 80 },
  { skill_name: "Spring Boot", image: "springboot.png", width: 80, height: 80 },
];

export const MICROSERVICE_SKILL = [
  { skill_name: "Docker", image: "docker.png", width: 80, height: 80 },
  { skill_name: "RabbitMQ", image: "rabbitmq.png", width: 80, height: 80 },
  { skill_name: "Redis", image: "redis.png", width: 80, height: 80 },
  { skill_name: "Microservices", image: "microservice.png", width: 80, height: 80 },
  { skill_name: "Api Gateway", image: "microservice.png", width: 80, height: 80 },
  { skill_name: "Eureka", image:"microservice.png", width: 80, height: 80 },
];

export const API_CLOUD_SKILL = [
  { skill_name: "RESTful API", image: "restapi.png", width: 80, height: 80 },
  { skill_name: "AWS", image: "aws.png", width: 80, height: 80 },
];

export const TOOLS_SKILL = [
  { skill_name: "Git", image: "git.png", width: 80, height: 80 },
  { skill_name: "Postman", image: "postman.png", width: 80, height: 80 },
  { skill_name: "Figma", image: "figma.png", width: 80, height: 80 },
];


export const SOCIALS = [
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/Quocdeptraidev",

  },

  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/nvquoc03/",
  },
] as const;



export const PROJECTS: { title: string; description: string; image: string; demoLink: string; githubLink: string; tags: string[]}[] = [
  {
    title: "E-commerce Web App (Robotics Store)",
    description:
      "An e-commerce platform with online payments and shipping APIs.",
    image: "/projects/teamwork.jpg",
    demoLink: "https://roboticsecommerce.wisdombrain.org/",
    githubLink: "#", // Private repository
    tags: ["Spring Boot", "ReactJS", "VNPay", "REST API"]
  },
  {
    title: "AntMotor.vn",
    description:
      "A motorcycle e-commerce website delivered in collaboration with the client.",
    image: "/projects/teamwork.jpg",
    demoLink: "https://antmotor.vn/",
    githubLink: "#", // Private repository
    tags: ["Spring Boot", "ReactJS", "MySql"]
  },
  {
    title: "App Trạm Điện Xanh",
    description:
      "Ứng dụng cho sạc điện và tìm kiếm trạm sạc...",
    image: "/projects/teamwork.jpg",
    demoLink: "https://www.tramdienxanh.com/",
    githubLink: "#", // Private repository
    tags: ["Spring Boot","React", "TypeScript", "React Native", "Tailwind CSS", "Android Java"]
  },
  {
    title: "Đồ Án Chuyên Ngành: Hệ Thống MOS",
    description:
      "Trang quản lý điểm thi và danh sách sinh viên.",
    image: "/projects/teamwork.jpg",
    demoLink: "#",
    githubLink: "#", // Private repository
    tags: ["Spring Boot", "Thymeleaf", "MySql", "Java"]
  },
];

export const PERSONAL_PROJECTS: { title: string; description: string; image: string; demoLink: string; githubLink: string; tags: string[]}[] = [
  {
    title: "Advanced VPC Network Architecture with Transit Gateway Workshop",
    description:
      "Workshop này hướng dẫn thiết kế và triển khai kiến trúc mạng multi-VPC tiên tiến sử dụng AWS Transit Gateway theo mô hình hub-and-spoke.",
    image: "/projects/teamwork.jpg",
    demoLink: "https://quocdeptraidev.github.io/",
    githubLink: "https://github.com/Quocdeptraidev/quocdeptraidev.github.io/tree/source", // Private repository
    tags: ["AWS VPC", "EC2", "Security Groups", "Transit Gateway"]
  },
  {
    title: "Todo List",
    description:
      "Một API RESTful đơn giản để quản lý danh sách công việc (Todo List), được xây dựng bằng Node.js, Express.js và MySQL.",
    image: "/projects/teamwork.jpg",
    demoLink: "#",
    githubLink: "https://github.com/Quocdeptraidev/todo-list-api/tree/main", // Private repository
    tags: ["Node.js", "Express.js", "MySQL", "Redis", "RabbitMQ ", "RESTful API","Jest"]
  },
  {
    title: "Portfolio Web",
    description:
      "A modern landing page showcasing my portfolio..",
    image: "/projects/teamwork.jpg",
    demoLink: "https://nguyenvietquocportfolio.vercel.app/",
    githubLink: "https://github.com/Quocdeptraidev/space-portfolio/tree/main?tab=readme-ov-file", // Private repository
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"]
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
