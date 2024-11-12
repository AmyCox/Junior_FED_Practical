const pkg = require('../../package.json');

module.exports = {
  appVersion: pkg.version,
  assetPath: '/public',
  pageTitle: 'PxlPro Jobs',
  heroMessage: 'Search 1,570 jobs.',
  navItems: [
    {
      label: "Home",
      href: "#",
      id: "home",
      ariaLabel: "Navigate to home page"
    },
    {
      label: "Find a job",
      href: "#find-a-job",
      id: "find-a-job",
      ariaLabel: "Navigate to job listings"
    },
    {
      label: "Careers advice",
      href: "#careers",
      id: "careers",
      ariaLabel: "Navigate to our careers advice page"
    },
    {
      label: "Job alerts",
      href: "#job-alerts",
      id: "job-alerts",
      ariaLabel: "Sign up to receive job alerts"
    },
    {
      label: "Your jobs",
      href: "#your-jobs",
      id: "your-jobs",
      ariaLabel: "Navigate to your saved jobs"
    },
    {
      label: "Advertise a job",
      href: "#advertise-a-job",
      id: "advertise",
      ariaLabel: "Advertise a job"
    },
  ],
  ctas: [
    {
      icon: 'job-alerts',
      title: 'Get instant job alerts',
      subtitle: 'Personalised job recommendations sent straight to your email.'
    },
    {
      icon: 'create-account',
      title: 'Create an account for free',
      subtitle:
        'Shortlist jobs, manage your job alerts and receive special offers.'
    },
    {
      icon: 'upload-resume',
      title: 'Upload your resume',
      subtitle:
        'Upload your resume so our employers can match your details to the best jobs.'
    }
  ]
};
