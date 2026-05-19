export const portfolioData = {
  personal: {
    name: "Sandeep Kumar",
    image: "/src/images/sandeep.jpeg",
    title: "ServiceNow Developer",
    location: "Hyderabad, Telangana",
    phone: "8978541097",
    email: "pindisandeep28@gmail.com",
    milestone: "https://www.credly.com/users/sandeep-kumar-snow/badges#credly",
    linkedin: " https://www.linkedin.com/in/sandeeppindi/",
    github: "https://github.com/Sandeepkumar-p",
    // blog: "https://medium.com/@pindisandeep28",
    blog: "https://dev.to/sandeepkumar"
  },
  summary: "ServiceNow Developer with 4+ years of experience in ITSM implementation, ITAM, HAM and SAM operations, ServiceNow Discovery, and ITIL-aligned platform customization. Specialized in Service Catalog engineering, Flow Designer automation with strong client-side and server-side scripting expertise. Proven ability in hardware and software asset lifecycle management, stockroom operations, and CMDB enrichment through Discovery and Import Sets. Reduced software licensing costs by 18% through effective reclamation of unused licenses.",
  
  experience: [
    {
      id: 1,
      company: "ServiceNow",
      logo: "https://servicenownextexperience.github.io/img/servicenow-logo.png",
      position: "ServiceNow Developer",
      location: "Hyderabad, Telangana",
      duration: "April 2024 – Present",
      achievements: [
        "Developed and managed Update Sets, Data Sources, and Transform Maps to ensure accurate data migration and version control across environments, improving release efficiency by 15%.",
        "Drove cost optimization by applying reconciliation, reclamation, and remediation practices in Software Asset Management (SAM), identifying underutilized licenses and reducing unnecessary software spend.",
        "Managing and optimizing the lifecycle of hardware and software assets to ensure compliance and cost efficiency.",
        "Collaborated with stakeholders and customers through the Service Portal to clarify requirements, resolve queries, and deliver customizations.",
        "Performed license reconciliation by comparing software installations with entitlements, identifying over-licensing and under-licensing scenarios to maintain audit readiness.",
        "Implemented reclamation strategies to identify and remove unused or underutilized licenses, improving license utilization and reducing software spend.",
        "Utilized ServiceNow SAM modules for software normalization, discovery mapping, and entitlement management to improve data accuracy and reporting.",
        "Reduced software licensing costs by reclaiming unused licenses identified through 90-day inactivity analysis.",
        "Maintained and updated hardware lifecycle data including General Availability, End of Sale, End of Support, and End of Life.",
        "Creating UI Policies and Data Policies to control form behavior dynamically showing, hiding, or making fields mandatory based on conditions.",
        "Handling customer requests related to software and hardware assets while prioritizing tasks based on SLA commitments and urgency."
      ]
    },
    {
      id: 2,
      company: "DemandNXT",
      logo: "https://media.licdn.com/dms/image/C560BAQFpsNHAL3tJ4w/company-logo_200_200/0/1631369919127?e=2147483647&v=beta&t=b7h8B9eKj7P_kJ5L8M2N3O4P5Q6R7S8T9U0V1W2X3",
      position: "System Engineer",
      location: "Bengaluru, Karnataka",
      duration: "Sep 2022 – Dec 2023",
      achievements: [
        "Administered ServiceNow platform including user management, role assignment, and group configuration ensuring secure and efficient access control.",
        "Configured and customized ITIL modules (Incident, Problem, Change, Service Catalog) to streamline service management processes.",
        "Managed Update Sets for controlled migration of configurations across environments, ensuring version control and deployment accuracy.",
        "Designed and implemented Import Sets and Transform Maps for data integration, ensuring data consistency and eliminating duplicates.",
        "Developed and maintained Service Catalog items, Record Producers, and workflows to automate request fulfillment."
      ]
    },
    {
      id: 3,
      company: "ICICI Bank",
      logo: "https://www.icicibank.com/content/dam/ibsite/images/common/icici-bank-logo.svg",
      position: "Support Analyst",
      location: "Hyderabad, Telangana",
      duration: "Sep 2021 – Sep 2022",
      achievements: [
        "Worked on hardware asset-related tickets in ServiceNow, assisting with assignment, status updates, and location tracking of IT assets across branches.",
        "Provided backend support for the ServiceNow HAM module, including stockroom updates, asset transfers, and coordination with support teams for issue resolution.",
        "Assisted in generating basic asset reports and ensuring data accuracy for audits and compliance purposes within the ICICI Bank IT environment.",
        "Documented and maintained asset movement logs (IMAC Install, Move, Add, Change) for accurate lifecycle visibility."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Data Standardization & HAM Implementation",
      subtitle: "Data Normalization, Asset Lifecycle Management",
      date: "December 2024",
      description: "Configured and managed product models, model categories, manufacturers, and lifecycle definitions to standardize asset classification. Implemented normalization rules and mapping logic to eliminate duplicate and inconsistent asset records. Managed end-to-end asset lifecycle from procurement to disposal, ensuring accurate CMDB updates.",
      highlights: [
        "Improved CMDB data accuracy",
        "Reduced duplicate records significantly"
      ]
    },
    {
      id: 2,
      title: "Data Import and Transformation",
      subtitle: "Import Sets, Transform map, Update sets",
      date: "October 2024",
      description: "Designed and implemented a custom Import Set process in ServiceNow to ingest and transform external incident data (CSV format) using Data Sources, staging tables, and Transform Maps. Configured field mapping using Auto Map Matching and Mapping Assist to ensure accurate data alignment between source and target tables.",
      highlights: [
        "Applied coalesce logic on key fields",
        "Prevented duplicate incident creation",
        "Maintained data integrity during repeated imports"
      ]
    }
  ],

  skills: {
    servicenow: [
      "IITL", "ITSM", "ITAM", "HAM", "SAM", "Incident Management", "Request Management",
      "Service Catalog", "Flow Designer", "Update sets", "UI Policies", "Data Policies", "SLA",
      "Record Producer", "Order Guide", "Gilde APIs", "Import sets", "Client scripts",
      "Business rules", "Scheduled Jobs", "Agile Environment", "Knowledge Management",
      "Asset Life-cycle", "Hardware Models", "Locations", "Configuration Items",
      "Software Normalization", "Discovery Mapping", "License Reclamation", "Remediation",
      "Software License Reconciliation"
    ],
    technical: [
      "JavaScript", "HTML", "CSS", "Bootstrap", "GitHub", "VS Code"
    ],
    productivity: [
      "Excel (Pivot Tables, VLOOKUP, Macros, VBA)", "PowerPoint"
    ],
    soft: [
      "Positive attitude", "Problem Solving", "Time Management", "Teamwork"
    ]
  },

  education: [
    {
      id: 1,
      school: "Vardhman college of Engineering",
      degree: "B.Tech in Mechanical Engineering",
      location: "Hyderabad, Telangana",
      duration: "Aug 2015 – Jun 2019"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Certified System Administrator (CSA)",
      icon: "👨‍💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Certified Application Developer (CAD)",
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Certified Implementation Specialist - HAM",
      icon: "🖥️",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Certified Implementation Specialist - ITSM",
      icon: "🔧",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "IT Support Fundamentals - Coursera",
      icon: "📚",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Micro Certifications - Integration Hub, Flow Designer, Agentic AI",
      icon: "🤖",
      color: "from-pink-500 to-rose-500"
    }
  ]
};
