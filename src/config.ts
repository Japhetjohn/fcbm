// =============================================================================
// FCMS ATBU - Fellowship of Christian Management Students Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "FCMS ATBU - Fellowship of Christian Management Students",
  description: "Fellowship of Christian Management Students at ATBU Gubi Campus, Bauchi. Join us for Bible study, prayer, and fellowship. Togetherness in Christ.",
  language: "en",
  keywords: "FCMS, ATBU, Christian Fellowship, Management Students, Bauchi, Gubi Campus, Bible Study, Prayer, Togetherness",
  ogImage: "/images/fcms-logo.png",
  canonical: "",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "FCMS",
  brandSubname: "ATBU Bauchi",
  tagline: "Togetherness in Christ",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "Programs", href: "#programs", icon: "BookOpen" },
    { name: "About", href: "#about", icon: "Users" },
    { name: "Events", href: "#events", icon: "Newspaper" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Join Us",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "FCMS",
  brandSubname: "Fellowship of Christian Management Students",
  yearText: "ATBU Bauchi",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Welcome to FCMS ATBU",
  mainTitle: "Growing Together\nIn Faith & Unity",
  ctaButtonText: "Join Our Fellowship",
  ctaTarget: "#programs",
  stats: [
    { value: 4, suffix: "+", label: "Departments" },
    { value: 2, suffix: "", label: "Weekly Meetings" },
    { value: 100, suffix: "+", label: "Members" },
    { value: 1, suffix: "", label: "Family in Christ" },
  ],
  decorativeText: "Togetherness",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config (adapted for Fellowship Programs)
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Our Fellowship",
  subtitle: "WEEKLY ACTIVITIES",
  mainTitle: "Programs & Activities",
  wines: [
    {
      id: "bible-study",
      name: "Bible Study",
      subtitle: "Wednesday Fellowship",
      year: "Weekly",
      image: "/images/bible-study.jpg",
      filter: "",
      glowColor: "bg-amber-500/20",
      description: "Join us every Wednesday at 1:00 PM for in-depth Bible study and spiritual growth. We explore God's Word together, learning how to apply biblical principles to our lives as management students.",
      tastingNotes: "Interactive discussions, prayer sessions, and worship",
      alcohol: "Old Remedial Block",
      temperature: "Gubi Campus",
      aging: "Every Wednesday",
    },
    {
      id: "prayer",
      name: "Prayer Meeting",
      subtitle: "Friday Night Prayers",
      year: "Weekly",
      image: "/images/prayer-session.jpg",
      filter: "brightness(1.1) sepia(0.2)",
      glowColor: "bg-blue-500/20",
      description: "Our Friday prayer meetings at 7:00 PM are powerful times of intercession, praise, and spiritual renewal. Come experience the presence of God as we pray together as a family.",
      tastingNotes: "Worship, intercession, and spiritual warfare",
      alcohol: "Chapel of Victory",
      temperature: "Auditorium",
      aging: "Every Friday 7PM",
    },
    {
      id: "fellowship",
      name: "Fellowship",
      subtitle: "Community & Togetherness",
      year: "Ongoing",
      image: "/images/fellowship-gathering.jpg",
      filter: "brightness(1.15) sepia(0.15) hue-rotate(-10deg)",
      glowColor: "bg-emerald-500/20",
      description: "Experience the joy of Christian community. Our fellowship extends beyond meetings - we support each other academically, spiritually, and personally. Togetherness is our motto.",
      tastingNotes: "Friendship, support, and shared growth",
      alcohol: "All Campuses",
      temperature: "Gubi & Yelwa",
      aging: "Always",
    },
    {
      id: "worship",
      name: "Worship",
      subtitle: "Praise & Adoration",
      year: "Weekly",
      image: "/images/worship-service.jpg",
      filter: "brightness(1.2) contrast(1.1)",
      glowColor: "bg-purple-500/20",
      description: "Lift your voice in praise and worship with fellow believers. Our worship sessions create an atmosphere where God's presence dwells, transforming hearts and renewing minds.",
      tastingNotes: "Contemporary and traditional worship styles",
      alcohol: "Chapel of Victory",
      temperature: "Main Auditorium",
      aging: "Every Friday",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "Scripture Study",
      description: "Deep dive into God's Word with structured Bible study sessions",
    },
    {
      icon: "Thermometer",
      title: "Community",
      description: "Build lasting friendships with fellow Christian students",
    },
    {
      icon: "Sparkles",
      title: "Spiritual Growth",
      description: "Grow in your faith through worship, prayer, and fellowship",
    },
  ],
  quote: {
    text: "FCMS for the Father, FCMS for the Son, FCMS for the Spirit - We are one in unity",
    attribution: "FCMS Anthem",
    prefix: "Our",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config (adapted for Campus Location)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Our Location",
  subtitle: "ATBU GUBI CAMPUS",
  mainTitle: "Home of FCMS",
  locationTag: "Gubi, Bauchi State, Nigeria",
  slides: [
    {
      image: "/images/campus-view.jpg",
      title: "ATBU Gubi Campus",
      subtitle: "Abubakar Tafawa Balewa University",
      area: "4",
      unit: "Departments United",
      description: "The Gubi Campus is home to the Faculty of Management Technology, where students from Information Technology, Accounting, Banking & Finance, and Business Management come together in fellowship.",
    },
    {
      image: "/images/fellowship-gathering.jpg",
      title: "Old Remedial Block",
      subtitle: "Wednesday Fellowship Venue",
      area: "1:00",
      unit: "PM Weekly",
      description: "Our main fellowship meetings hold every Wednesday at 1:00 PM at the Old Remedial Block. Come experience warm fellowship, inspiring teachings, and uplifting worship.",
    },
    {
      image: "/images/worship-service.jpg",
      title: "Chapel of Victory",
      subtitle: "Friday Prayer Meetings",
      area: "7:00",
      unit: "PM Weekly",
      description: "The Chapel of Victory Auditorium hosts our powerful Friday prayer meetings at 7:00 PM. Join us for an evening of worship, prayer, and spiritual encounter.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config (adapted for About Us)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Discover FCMS",
  subtitle: "ABOUT OUR FELLOWSHIP",
  mainTitle: "Our Story & Vision",
  introText: "The Fellowship of Christian Management Students (FCMS) is a vibrant community of believers from the Faculty of Management Technology at ATBU. We are united by our faith in Christ and our motto: Togetherness.",
  timeline: [
    { year: "Founded", event: "Established to unite Christian management students" },
    { year: "Growth", event: "Expanded to include all four departments" },
    { year: "Today", event: "A thriving fellowship of 100+ members" },
  ],
  tabs: [
    {
      id: "vision",
      name: "Our Vision",
      icon: "BookOpen",
      image: "/images/bible-study.jpg",
      content: {
        title: "Raising Godly Leaders",
        description: "To raise a generation of management professionals who are spiritually grounded, academically excellent, and morally upright, ready to impact the world for Christ.",
        highlight: "Excellence in Academics, Integrity in Character",
      },
    },
    {
      id: "mission",
      name: "Our Mission",
      icon: "Award",
      image: "/images/prayer-session.jpg",
      content: {
        title: "Building Together in Christ",
        description: "To create a supportive community where Christian management students can grow spiritually, excel academically, and develop leadership skills through fellowship, prayer, and Bible study.",
        highlight: "Togetherness, Unity, Love",
      },
    },
    {
      id: "departments",
      name: "Departments",
      icon: "History",
      image: "/images/fellowship-gathering.jpg",
      content: {
        title: "Four Departments, One Family",
        description: "FCMS brings together students from Information Technology, Accounting Technology, Banking & Finance Technology, and Business Management Technology - united in Christ.",
        highlight: "Information Tech | Accounting | Banking | Business",
      },
    },
  ],
  openingHours: "Wednesday 1:00 PM & Friday 7:00 PM",
  openingHoursLabel: "Meeting Times",
  ctaButtonText: "Learn More",
  yearBadge: "FCMS",
  yearBadgeLabel: "Togetherness",
  quote: {
    prefix: "Our Anthem",
    text: "Togetherness in fellowship, We shall advance in academics, We will rise in unity, integrity and love",
    attribution: "FCMS ATBU",
  },
  founderPhotoAlt: "FCMS Fellowship Gathering",
  founderPhoto: "/images/fellowship-gathering.jpg",
};

// -----------------------------------------------------------------------------
// News Config (adapted for Events & Testimonials)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "What's Happening",
  subtitle: "EVENTS & ACTIVITIES",
  mainTitle: "Upcoming Events",
  viewAllText: "View All Events",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/bible-study.jpg",
      title: "Weekly Bible Study",
      excerpt: "Join us every Wednesday for an enriching time in God's Word. All students welcome!",
      date: "Every Wednesday",
      category: "Fellowship",
    },
    {
      id: 2,
      image: "/images/prayer-session.jpg",
      title: "Friday Night Prayers",
      excerpt: "Experience powerful prayer and worship every Friday evening at the Chapel of Victory.",
      date: "Every Friday",
      category: "Prayer",
    },
    {
      id: 3,
      image: "/images/fellowship-gathering.jpg",
      title: "Departmental Fellowship",
      excerpt: "Special fellowship meetings organized by each department throughout the semester.",
      date: "Monthly",
      category: "Community",
    },
    {
      id: 4,
      image: "/images/worship-service.jpg",
      title: "Special Worship Night",
      excerpt: "Join us for an evening of praise, worship, and spiritual renewal with guest ministers.",
      date: "Coming Soon",
      category: "Worship",
    },
  ],
  testimonialsScriptText: "Testimonials",
  testimonialsSubtitle: "WHAT MEMBERS SAY",
  testimonialsMainTitle: "Stories of Impact",
  testimonials: [
    {
      name: "John Ibrahim",
      role: "Business Management",
      text: "FCMS has been a home away from home. The fellowship helped me grow spiritually and academically. The togetherness here is real!",
      rating: 5,
    },
    {
      name: "Sarah Musa",
      role: "Accounting Technology",
      text: "Being part of FCMS transformed my university experience. I've made lifelong friends and grown deeper in my faith.",
      rating: 5,
    },
    {
      name: "David Emmanuel",
      role: "Banking & Finance",
      text: "The prayer meetings and Bible studies have strengthened my walk with God. FCMS is truly a blessing to every member.",
      rating: 5,
    },
  ],
  storyScriptText: "Our Journey",
  storySubtitle: "THE FCMS STORY",
  storyTitle: "A Legacy of Togetherness",
  storyParagraphs: [
    "FCMS was founded with a vision to unite Christian students across all departments in the Faculty of Management Technology. What started as a small gathering has grown into a vibrant fellowship of over 100 members.",
    "Our fellowship has witnessed countless testimonies of academic excellence, spiritual growth, and personal transformation. We believe that together, we can achieve more and make a lasting impact on our campus and beyond.",
  ],
  storyTimeline: [
    { value: "4", label: "Departments" },
    { value: "2", label: "Weekly Meetings" },
    { value: "100+", label: "Members" },
  ],
  storyQuote: {
    prefix: "Together",
    text: "FCMS, together we shall stand",
    attribution: "FCMS Anthem",
  },
  storyImage: "/images/hero-banner.jpg",
  storyImageCaption: "FCMS Fellowship Gathering",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get In Touch",
  subtitle: "CONTACT US",
  mainTitle: "Join Our Fellowship",
  introText: "We'd love to hear from you! Whether you're a new student looking to join or you have questions about our fellowship, reach out to us.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Location",
      value: "ATBU Gubi Campus, Bauchi",
      subtext: "Faculty of Management Technology",
    },
    {
      icon: "Clock",
      label: "Meeting Times",
      value: "Wednesdays 1:00 PM",
      subtext: "Fridays 7:00 PM",
    },
    {
      icon: "MapPin",
      label: "Venues",
      value: "Old Remedial Block",
      subtext: "Chapel of Victory Auditorium",
    },
    {
      icon: "Mail",
      label: "Facebook",
      value: "FCMS ATBU",
      subtext: "Follow us on social media",
    },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "your.email@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+234 ...",
    visitDateLabel: "When would you like to visit?",
    visitorsLabel: "Department",
    visitorsOptions: ["Information Technology", "Accounting Technology", "Banking & Finance", "Business Management", "Other"],
    messageLabel: "Message",
    messagePlaceholder: "Tell us about yourself or ask any questions...",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
  privacyNotice: "Your information is safe with us. We respect your privacy.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "FCMS",
  tagline: "Fellowship of Christian Management Students",
  description: "Uniting Christian students in the Faculty of Management Technology at ATBU Gubi Campus. Togetherness is our motto, Christ is our foundation.",
  socialLinks: [
    { icon: "Facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61585542124978" },
  ],
  linkGroups: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "Programs", href: "#programs" },
        { name: "About Us", href: "#about" },
        { name: "Events", href: "#events" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Departments",
      links: [
        { name: "Information Technology", href: "#" },
        { name: "Accounting Technology", href: "#" },
        { name: "Banking & Finance", href: "#" },
        { name: "Business Management", href: "#" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "ATBU Gubi Campus, Bauchi" },
    { icon: "Clock", text: "Wed 1:00 PM | Fri 7:00 PM" },
  ],
  newsletterLabel: "Stay Updated",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Something went wrong. Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  copyrightText: "© 2026 FCMS ATBU. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Use"],
  icpText: "Fellowship of Christian Management Students - ATBU Bauchi",
  backToTopText: "Back to Top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
