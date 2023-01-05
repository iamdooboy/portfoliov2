export const projects = {
  budgetTracker: {
    title: 'Budget Tracker',
    images: [
      '/projects/budget-tracker/1.png',
      '/projects/budget-tracker/2.png',
      '/projects/budget-tracker/3.png',
      '/projects/budget-tracker/4.png',
      '/projects/budget-tracker/5.png',
      '/projects/budget-tracker/6.png',
      '/projects/budget-tracker/7.png',
      '/projects/budget-tracker/8.png'
    ],
    description:
      'A fullstack application with user authentication, full CRUD functionalities, filtering, and routing. This app let’s user create simple lists of budgets, expenses, and incomes and view their spending summary.',
    stack: ['MongoDB', 'Express', 'React', 'NodeJS', 'Material UI', 'Vercel'],
    host: 'https://expense-app-client-seven.vercel.app/',
    git: 'https://github.com/iamdooboy/expense-app-client',
    shortDescription:
      'A budget tracking web app to help you maintain a healthy cash flow and stay on top of your finances. Track your spending and income in a simple and intuitive user interface.',
    thumbnail: '/projects/budget-tracker/thumbnail.jpg',
    imageAlt: 'Budget Tracker',
    id: 'budgettracker'
  },
  motionGallery: {
    title: 'Motion Gallery',
    images: [
      '/projects/motion-gallery/1.png',
      '/projects/motion-gallery/2.png',
      '/projects/motion-gallery/3.png',
      '/projects/motion-gallery/4.png'
    ],
    description:
      'An experimental layout transition where a stack of images animates to a gallery view, showing some more content. Recreated using Framer Motion instead of GSAP',
    stack: ['NextJS', 'CSS', 'Framer Motion', 'Vercel'],
    host: 'https://motion-gallery.vercel.app/',
    git: 'https://github.com/iamdooboy/motion-gallery',
    shortDescription:
      "A small frontend project of various photos of Japan's top 10 most popular cities. This project was created to help me understand Framer motion and React Context",
    thumbnail: '/projects/motion-gallery/thumbnail.jpg',
    imageAlt: 'Motion Gallery',
    id: 'motionGallery'
  },
  pokemonReview: {
    title: 'Pokemon Reviews',
    images: [
      '/projects/pokemon-reviews/1.png',
      '/projects/pokemon-reviews/2.png',
      '/projects/pokemon-reviews/3.png',
      '/projects/pokemon-reviews/4.png',
      '/projects/pokemon-reviews/5.png',
      '/projects/pokemon-reviews/6.png',
      '/projects/pokemon-reviews/7.png',
      '/projects/pokemon-reviews/8.png'
    ],
    description:
      'A fullstack application that allow users to register/login with a magic link, search for and review various pokemon, favorite each pokemon and each others’ reviews. Think of Yelp but for Pokemon',
    stack: [
      'NextJS',
      'Prisma',
      'Chakra UI',
      'Vercel',
      'Supabase',
      'SWR',
      'NextAuth',
      'Expresss'
    ],
    host: 'https://pokemon-reviews.vercel.app/',
    git: 'https://github.com/iamdooboy/pokemon-reviews',
    shortDescription:
      'A place to leave reviews on your favorite/least favorite pokemon and read other peoples review',
    thumbnail: '/projects/pokemon-reviews/thumbnail.png',
    imageAlt: 'Pokemon-Reviews',
    id: 'pokemonReviews'
  }
}
