const pkg = require('../../package.json');

module.exports = {
  appVersion: pkg.version,
  assetPath: '/public',
  pageTitle: 'PxlPro Jobs',
  heroMessage: 'Search 1,570 jobs.',
  heroSubheading:
    'Hundreds of new career opportunities each day. Find your perfect job.',
  navItems: [
    {
      label: 'Home',
      href: '#',
      id: 'home',
      ariaLabel: 'Navigate to home page',
    },
    {
      label: 'Find a job',
      href: '#find-a-job',
      id: 'find-a-job',
      ariaLabel: 'Navigate to job listings',
    },
    {
      label: 'Careers advice',
      href: '#careers',
      id: 'careers',
      ariaLabel: 'Navigate to our careers advice page',
    },
    {
      label: 'Job alerts',
      href: '#job-alerts',
      id: 'job-alerts',
      ariaLabel: 'Sign up to receive job alerts',
    },
    {
      label: 'Your jobs',
      href: '#your-jobs',
      id: 'your-jobs',
      ariaLabel: 'Navigate to your saved jobs',
    },
    {
      label: 'Advertise a job',
      href: '#advertise-a-job',
      id: 'advertise',
      ariaLabel: 'Advertise a job',
    },
  ],
  sectorItems: [
    { label: 'Accountancy & Finance', vacancies: 41 },
    { label: 'Architecture, Building & Planning', vacancies: 71 },
    { label: 'Art & Design', vacancies: 59 },
    { label: 'Building & Construction', vacancies: 49 },
    { label: 'Business Management', vacancies: 247 },
    { label: 'Catering & Hospitality', vacancies: 14 },
    { label: 'Computers & IT', vacancies: 55 },
    { label: 'Education', vacancies: 193 },
    { label: 'Engineering', vacancies: 47 },
    { label: 'Media & Journalism', vacancies: 123 },
    { label: 'Retail & Wholesale', vacancies: 100 },
    { label: 'Sales', vacancies: 29 },
    { label: 'Sciences', vacancies: 79 },
    { label: 'Sports & Fitness', vacancies: 72 },
  ],
  featuredJobs: [
    {
      position: 'Business Systems Analyst',
      location: 'New York City',
      compensation: '$30,000-$40,000',
      image: 'public/images/_jobs/microsoft.png',
      company: 'microsoft',
    },
    {
      position: 'Paralegal Positions',
      location: 'Newton MA',
      compensation: 'Competitive salary',
      image: 'public/images/_jobs/amex.png',
      company: 'amex',
    },
    {
      position: 'Operations Director',
      location: 'Cape Canaveral, FL',
      compensation: 'Up to $100,000',
      image: 'public/images/_jobs/nasa.png',
      company: 'nasa',
    },
  ],
  ctas: [
    {
      icon: 'public/images/_ctas/icon_email.svg',
      alt: 'email icon',
      title: 'Get instant job alerts',
      subheading:
        'Personalised job recommendations sent straight to your email.',
    },
    {
      icon: 'public/images/_ctas/icon_profile.svg',
      alt: 'profile icon',
      title: 'Create an account for free',
      subheading:
        'Shortlist jobs, manage your job alerts and receive special offers.',
    },
    {
      icon: 'public/images/_ctas/icon_upload.svg',
      alt: 'upload icon',
      title: 'Upload your resume',
      subheading:
        'Upload your resume so our employers can match your details to the best jobs.',
    },
  ],
  employers: [
    {
      image: "public/images/_employers/citi.png",
      alt: "Citi",
    },
    {
      image: "public/images/_employers/agstar.png",
      alt: "Agstar",
    },
    {
      image: "public/images/_employers/ford.png",
      alt: "Ford",
    },
    {
      image: "public/images/_employers/ioxus.png",
      alt: "Ioxus",
    },
    {
      image: "public/images/_employers/nike.png",
      alt: "Nike",
    },
    {
      image: "public/images/_employers/oracle.png",
      alt: "Oracle",
    },
  ],
};
