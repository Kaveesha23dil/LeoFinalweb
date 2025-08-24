export const featuredArticle = {
  id: 1,
  title: "Leo Club of SLTC Organizes Largest Community Service Drive in Club History",
  subtitle: "Over 200 volunteers participate in comprehensive community outreach program",
  author: "Maria Garcia",
  date: "2024-08-15",
  readTime: "5 min read",
  category: "Community Service",
  image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
  excerpt: "The Leo Club of SLTC made headlines this month with their largest community service initiative, bringing together students, faculty, and local community members for a day of impactful service.",
  content: `
    The Leo Club of SLTC made headlines this month with their largest community service initiative, bringing together students, faculty, and local community members for a day of impactful service that reached over 500 beneficiaries across multiple locations.
    
    The comprehensive drive included food distribution, educational workshops, environmental cleanup activities, and health awareness programs. "This represents everything our Leo Club stands for - leadership, experience, and opportunity to serve," said John Doe, current president of Leo Club SLTC.
    
    The event was organized across five different locations simultaneously, showcasing the club's growing capacity and commitment to community service. Volunteers worked from dawn till dusk, ensuring maximum impact across all initiatives.
  `
};

export const articles = [
  {
    id: 2,
    title: "Digital Literacy Program Reaches 100 Seniors",
    author: "Alex Chen",
    date: "2024-08-10",
    readTime: "3 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    excerpt: "Our ongoing digital literacy initiative has successfully trained 100 senior citizens in basic computer and internet skills.",
    content: "Celebrating a major milestone in our digital literacy program..."
  },
  {
    id: 3,
    title: "Leo Leadership Workshop: Empowering Tomorrow's Leaders",
    author: "Emma Rodriguez",
    date: "2024-08-08",
    readTime: "4 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop",
    excerpt: "30 young leaders participated in our intensive leadership development workshop, gaining valuable skills and insights.",
    content: "The Leo Club's leadership workshop series continues to make an impact..."
  },
  {
    id: 4,
    title: "Environmental Conservation: 1000 Trees Planted",
    author: "David Kim",
    date: "2024-08-05",
    readTime: "3 min read",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    excerpt: "In partnership with local environmental groups, Leo Club members planted 1000 trees across three different locations.",
    content: "Our environmental conservation efforts reached a new milestone..."
  },
  {
    id: 5,
    title: "Blood Donation Drive Saves Lives",
    author: "Sophie Anderson",
    date: "2024-08-01",
    readTime: "2 min read",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=400&h=300&fit=crop",
    excerpt: "Our quarterly blood donation drive collected 150 units of blood, potentially saving up to 450 lives.",
    content: "The Leo Club's blood donation initiative continues to make a life-saving impact..."
  },
  {
    id: 6,
    title: "Scholarship Fund Supports 25 Students",
    author: "Ryan Martinez",
    date: "2024-07-28",
    readTime: "4 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
    excerpt: "The Leo Club scholarship fund has awarded financial assistance to 25 deserving students from underprivileged backgrounds.",
    content: "Education remains at the heart of our mission..."
  },
  {
    id: 7,
    title: "Mental Health Awareness Week",
    author: "Lisa Thompson",
    date: "2024-07-25",
    readTime: "3 min read",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    excerpt: "Leo Club organized a week-long mental health awareness campaign reaching over 1000 students and community members.",
    content: "Mental health awareness is crucial for our community's wellbeing..."
  },
  {
    id: 8,
    title: "Inter-Club Leo Conference: Building Stronger Networks",
    author: "Kevin Lee",
    date: "2024-07-20",
    readTime: "5 min read",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
    excerpt: "Representatives from 15 Leo clubs gathered for knowledge sharing and collaborative project planning.",
    content: "The annual inter-club conference strengthened bonds between Leo clubs..."
  }
];

export const categories = [
  { name: "All", count: articles.length + 1 },
  { name: "Community Service", count: 1 },
  { name: "Education", count: 2 },
  { name: "Leadership", count: 1 },
  { name: "Environment", count: 1 },
  { name: "Healthcare", count: 2 },
  { name: "Networking", count: 1 }
];

export const getArticleById = (id) => {
  if (parseInt(id) === featuredArticle.id) {
    return featuredArticle;
  }
  return articles.find(article => article.id === parseInt(id));
};

export const getArticlesByCategory = (category) => {
  const allArticles = [featuredArticle, ...articles];
  if (category === "All") {
    return allArticles;
  }
  return allArticles.filter(article => article.category === category);
};