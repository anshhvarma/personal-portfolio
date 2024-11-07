import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderGit2 } from "lucide-react";

export const DATA = {
  name: "Ansh Varma",
  initials: "Av",
  url: "",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Programmer turned Entrepreneur. I love building things and helping people.",
  summary:
    "As an Enthusiastic second-year student, I am eager to learn and grow by mastering subjects and seeking diverse experiences. I value collaboration and feedback, aiming to make a meaningful impact through my pursuit of knowledge.",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderGit2, label: "Projects" },
  ],
  contact: {
    email: "anshvarma83691@gmail.com",
    tel: "+919372179120",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github/anshhvarma",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkdedin/anshhvarma",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "/",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "anshvarma83691@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Technical Vidya",
      href: "https://edu.ingenia-ltce.tech",
      badges: [],
      location: "on-site",
      title: "Where Innvotion meets Innovators",
      logoUrl: "/techv.png",
      start: "",
      end: "Present",
      description:
        "I founded the Technical Vidya Club to provide students with hands-on technical internships focused on creating and maintaining the university's student portal. This initiative helps develop practical skills while improving the digital infrastructure of the university.",
    },
  ],
  education: [
    {
      school: "Lokmanya Tilak College of Engineering",
      href: "https://ltce.in",
      degree: "Btech in Computer Engineering",
      logoUrl: "",
      start: "2023",
      end: "2024",
    },
    {
      school: "St. Mary's Multipurpose Junior College",
      href: "/",
      degree: "HSC",
      logoUrl: "",
      start: "2021",
      end: "2023",
    },
    {
      school: "St. Xavier's High School",
      href: "/",
      degree: "HSC",
      logoUrl: "",
      start: "2010",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Ingenia-Student's Portal",
      href: "https://edu.ingenia-ltce.tech",
      dates: "",
      active: true,
      description:
        "The Technical Vidya Club focuses on creating and maintaining the university's student portal, providing real-world experience in web development and system management while enhancing the university's digital infrastructure",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Node JS",
        "Mongo DB",
      ],
      links: [
        {
          type: "Website",
          href: "https://edu.ingenia-ltce.tech",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ingenia.png",
      video:"",
    },
    {
      title: "SwapIT - An Easy Swap ",
      href: "https://swap-it-pied.vercel.app",
      dates: "",
      active: true,
      description:
        "This website lets students from different colleges exchange academic materials like books, notes, and stationery. It helps save money and reduce waste by reusing resources. Students can easily list or request items and connect with others to swap materials.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Node JS",
        "Mongo DB",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://swap-it-pied.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/swapit.png",
      video:"",
    },
  ],
  hackathons: [

    // {
    //   title: "",
    //   dates: "",
    //   location: "",
    //   description:
    //     "",
    //   image:
    //     "",
    //   mlh: "",
    //   links: [
    //     {
    //       title: "",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "",
    //     },
    //   ],
    // },

    {
      title: "Coming Soon",
      dates: "",
      location: "",
      description:
        "",
      image:
        "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/",
        },
      ],
    },
  ],
} as const;
