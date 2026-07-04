const BOOKS = [
  {
    id: 'long-road-west',
    title: 'The Long Road West',
    subtitle: 'A Family’s Journey Through the California Gold Rush',
    series: 'Gold Rush Family Adventure',
    category: 'Historical Fiction',
    status: 'In development',
    price: 'Coming soon',
    ageRange: 'Ages 10+',
    cover: '',
    buyLink: '#contact',
    sampleLink: '#ask',
    description:
      'A realistic wagon-train adventure about family courage, abandoned camps, dangerous gold fever, and the long road toward California.',
    themes: ['family', 'bravery', 'California Gold Rush', 'wagon train', 'historical adventure'],
    questions: [
      'Who are the main characters?',
      'Is this based on the Gold Rush?',
      'What age is this book for?',
      'Is this good for family reading?'
    ]
  },
  {
    id: 'through-the-fire',
    title: 'Through the Fire',
    subtitle: 'A Study in the Book of Job',
    series: 'Bible Study Resources',
    category: 'Bible Study',
    status: 'Drafting',
    price: 'Coming soon',
    ageRange: 'Teens and adults',
    cover: '',
    buyLink: '#contact',
    sampleLink: '#ask',
    description:
      'A practical KJV-based study through Job focused on faith, suffering, endurance, and trusting God through hardship.',
    themes: ['KJV Bible', 'Job', 'suffering', 'faith', 'men’s study', 'teacher edition', 'student edition'],
    questions: [
      'Is this KJV only?',
      'Can this be used in a men’s group?',
      'Will there be a teacher edition?',
      'What does the study cover?'
    ]
  },
  {
    id: 'butterfly-story',
    title: 'Harry the Butterfly',
    subtitle: 'A colorful picture book about not giving up',
    series: 'Children’s Picture Books',
    category: 'Children’s Book',
    status: 'In development',
    price: 'Coming soon',
    ageRange: 'Ages 3–8',
    cover: '',
    buyLink: '#contact',
    sampleLink: '#ask',
    description:
      'A bright children’s story about a small butterfly with a green body and purple-pink wings who learns curiosity, courage, and perseverance.',
    themes: ['butterfly', 'don’t give up', 'curiosity', 'kindness', 'picture book'],
    questions: [
      'What is the message of the book?',
      'What ages is it for?',
      'Is it a picture book?',
      'Who is Harry?'
    ]
  },
  {
    id: 'cube-chronicles',
    title: 'The Cube Chronicles',
    subtitle: 'A time-travel adventure series for young readers',
    series: 'The Cube Chronicles',
    category: 'Adventure Series',
    status: 'Series planning',
    price: 'Coming soon',
    ageRange: 'Middle grade / young adult',
    cover: '',
    buyLink: '#contact',
    sampleLink: '#ask',
    description:
      'A family adventure series following Daniel, Elizabeth, Simeon, Beckah, and Ellie through ancient civilizations, mystery, danger, and discovery.',
    themes: ['time travel', 'ancient Egypt', 'Indus Valley', 'Shang Dynasty', 'family adventure'],
    questions: [
      'What is the reading order?',
      'Who is in the family?',
      'Which civilizations are included?',
      'Is it for middle grade readers?'
    ]
  },
  {
    id: 'upland-beginners',
    title: 'Upland Beginner Guide',
    subtitle: 'A simple starter guide for new Upland players',
    series: 'Practical Guides',
    category: 'Guide',
    status: 'Planned',
    price: 'Coming soon',
    ageRange: 'General readers',
    cover: '',
    buyLink: '#contact',
    sampleLink: '#ask',
    description:
      'A beginner-friendly guide designed to help new players understand Upland basics, avoid confusion, and make smarter early decisions.',
    themes: ['Upland', 'beginner guide', 'gaming', 'strategy', 'digital property'],
    questions: [
      'Is this for beginners?',
      'Does it explain strategy?',
      'Is this an ebook?',
      'Where can I buy it?'
    ]
  }
];

const STORE_FAQ = [
  {
    triggers: ['buy', 'purchase', 'order', 'where can i get', 'checkout'],
    answer:
      'Each book card has a buy button. Right now several books are marked coming soon, so those buttons point to contact. When a title is ready, replace the buyLink value in books.js with an Amazon KDP, Stripe, PayPal, Gumroad, Etsy, or Shopify link.'
  },
  {
    triggers: ['first', 'reading order', 'start'],
    answer:
      'For fiction, start with The Long Road West if you want historical family adventure. For faith-based study, start with Through the Fire. For younger children, start with Harry the Butterfly.'
  },
  {
    triggers: ['kids', 'children', 'age', 'family'],
    answer:
      'Harry the Butterfly is the best fit for younger children. The Long Road West and The Cube Chronicles are better for older children, family reading, and middle-grade readers.'
  },
  {
    triggers: ['bible', 'kjv', 'job', 'study', 'church'],
    answer:
      'Through the Fire is the Bible study title. It is planned as a KJV-based Job study with material that can work for personal study, men’s groups, churches, and teacher/student formats.'
  }
];
