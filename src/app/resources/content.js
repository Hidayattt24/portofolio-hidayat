import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hidayat Nur",
  lastName: "Hakim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web development and UI/UX design",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Hidayattt24",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hidayat-nur-hakim/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "hidayatnurhakim2412@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web development and UI/UX design</>,
  subline: (
    <>
      I'm Hidayat, an informatics student at Syiah Kuala University with a
      strong passion for crafting intuitive user experiences. I specialize in
      web development and UI/UX design. After hours, I love building personal
      projects and exploring the latest in design and front-end technologies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a design-driven web development enthusiast based in Banda Aceh,
        currently pursuing my 6th semester in Informatics at Syiah Kuala
        University. My passion lies in building modern, user-centric digital
        experiences through clean code and thoughtful design. With a strong
        interest in the intersection of technology and visual design, I aim to
        transform complex ideas into intuitive and engaging interfaces. I enjoy
        working on projects that challenge both my technical and creative
        abilities, and I am always eager to learn and grow in the dynamic field
        of UI/UX design and web development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Coding Camp powered by DBS Foundation",
        timeframe: "Feb 2025 - Present",
        role: "Front-End and Back-End Developer Cohort Mahasiswa",
        achievements: [
          <>
            Currently participating in intensive full-stack development training
            focused on modern web technologies.
          </>,
          <>
            Building real-world applications while mastering tools like GitHub,
            HTML/CSS, JavaScript, and web frameworks.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/dbscodingcamp.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himpunan Mahasiswa Informatika Universitas Syiah Kuala",
        timeframe: "Feb 2025 - Present",
        role: "Head of Student Welfare Management Department",
        achievements: [
          <>
            Leading and managing a team of 14 active staff members across two
            key divisions: Student Aspirations and Women Empowerment.
          </>,
          <>
            Spearheaded impactful programs while fostering a collaborative and
            growth-oriented work culture.
          </>,
          <>
            Ensured smooth execution of departmental initiatives and encouraged
            staff development through meaningful experiences.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/hmif25.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himpunan Mahasiswa Informatika Universitas Syiah Kuala",
        timeframe: "Feb 2024 - Feb 2025",
        role: "Staff of Student Welfare Management Department",
        achievements: [
          <>
            Supported and participated in the implementation of various student
            welfare programs.
          </>,
          <>
            Helped maintain a conducive and harmonious work environment within
            the department.
          </>,
          <>
            Collaborated closely with peers to enhance the student experience
            through meaningful initiatives.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/hmif24.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Syiah Kuala University",
        description: (
          <>
            Currently pursuing a Bachelor's degree in Informatics (6th
            semester).
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Designing user-friendly interfaces and experiences using tools like
            Figma
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React JS",
        description: <>Building website with this framework</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 10,
          },
        ],
      },
      {
        title: "Jupyter Notebook",
        description: <>Data analysis , visualization Machine Learning</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Python",
        description: <>Data Science & Machine Learning</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
