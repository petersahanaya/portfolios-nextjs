export const DB = [
  {
    id: "1",
    url: "/project/1",
    subtitle: "p3das.com",
    imageSrc: "/images/p3das.png",
  },
  {
    id: "2",
    url: "/project/2",
    subtitle: "petershny.com",
    imageSrc: "/images/personal.png",
  },
  {
    id: "3",
    url: "/project/3",
    subtitle: "p3social.com",
    imageSrc: "/images/social.png",
  },
  {
    id: "4",
    url: "/project/4",
    subtitle: "p3commerce.com",
    imageSrc: "/images/shoes.png",
  },
];

export const DBProjects = [
  {
    id: "1",
    title: "Fully Functional Commerce App",
    imagesSrc: [
      "/projects/p3das/p3das-phone.png",
      "/projects/p3das/p3das-tab.png",
      "/projects/p3das/p3das-pc.png",
    ],
    description:
      "The Adidas website clone is a basic web application built using Next.js, OAuth for user authentication, PostgreSQL for data storage, and Prisma ORM for data management. It allows users to browse products, view details, add items to the cart, and make secure purchases. The goal is to create a simplified version of the Adidas website with essential features and a user-friendly interface.",
    features: [
      "User authentication using OAuth for secure login and registration.",
      "Browse and search for Adidas products.",
      "Add products to the shopping cart and proceed to checkout.",
      "User profile management.",
      "Wishlist functionality to save favorite products.",
      "Integration with payment gateways for seamless transactions.",
    ],
    techStack: ["Next Js", "Node Js", "Prisma ORM", "PostgreSQL"],
    url: "https://p3das.vercel.app",
  },
  {
    id: "2",
    title: "Fully Professional Personal Web",
    imagesSrc: [
      "/projects/personal/personal-phone.png",
      "/projects/personal/personal-tab.png",
      "/projects/personal/personal-pc.png",
    ],
    description:
      "my personal portfolio website built with Three.js and SvelteKit offers a visually stunning and interactive showcase of my skills and projects. It leverages Three.js for 3D graphics and animations, creating an immersive experience for visitors. With SvelteKit as the frontend framework, the website delivers fast performance and a user-friendly interface.",
    features: [
      "Dynamic 3D graphics using Three.js",
      "Smooth user interface and navigation using Sveltekit",
      "Responsive design for optimal viewing on any device",
    ],
    techStack: ["Sveltekit Js", "Typescript", "Three Js"],
    url: "https://petershny.vercel.app",
  },
  {
    id: "3",
    title: "Fully Functional Social Media App",
    imagesSrc: [
      "/projects/social/social-phone.png",
      "/projects/social/social-tab.png",
      "/projects/social/social-pc.png",
    ],
    description: `Built with Next.js, our app provides fast experiences. SWR handles data fetching, keeping you updated. Using MongoDB, we store user profiles, posts, and comments. Create a profile, connect with friends, and explore shared interests. Share posts, photos, and videos. Engage through comments and reactions. Follow favorites and receive notifications for new posts. Navigate easily through your feed, profile, and settings.`,
    features: [
      "Create a profile",
      "connect with friends",
      "make posts",
      "photos Comment and like",
    ],
    techStack: ["Next Js", "Typescript", "Node Js", "Mongo DB"],
    url: "https://p3social.vercel.app",
  },
  {
    id: "4",
    title: "Fully Functional Shoes App",
    imagesSrc: [
      "/projects/shoe/shoes-phone.png",
      "/projects/shoe/shoes-tab.png",
      "/projects/shoe/shoes-pc.png",
    ],
    description: `e-commerce shoes app! With Next.js, tRPC, Prisma, React Query, and Stripe, shopping online is a breeze. Our app is fast and responsive, providing a smooth browsing and purchasing experience. We use tRPC for efficient communication between the frontend and backend, ensuring seamless data fetching. Prisma handles data storage and management, ensuring reliable and secure transactions. React Query enhances data caching and synchronization, delivering real-time updates for an improved user experience. With Stripe integration, you can securely purchase products using your credit card. Browse, search, and view detailed product information. Add items to your cart and enjoy a seamless checkout process.`,
    features: [
      "Browse and search products",
      "Add products to cart and checkout using Stripe",
      "User authentication using oAuth",
      "Admin dashboard for managing products and orders",
    ],
    techStack: ["Next Js", "TRPC", "Typescript", "Prisma ORM", "Node Js"],
    url: "https://p3commerce.vercel.app",
  },
];

type UnArray<T> = T extends Array<infer J> ? J : never;

export type Project = UnArray<typeof DB>;
