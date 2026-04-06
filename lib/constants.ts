// ─── Navigation Links ──────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  {
    label: "FB Page",
    href: "https://www.facebook.com/ABORNCR",
    external: true,
  },
];

// ─── Digital Gateways (Portals) ──────────────────────────────
export interface Portal {
  name: string;
  url: string;
  description: string;
  category: "employer" | "worker" | "general";
}

export const DIGITAL_PORTALS: Portal[] = [
  {
    name: "Main Client Portal",
    url: "https://clients.ncr.dole.gov.ph",
    description: "Establishment registration (Rule 1020) and permit applications.",
    category: "employer",
  },
  {
    name: "ERAS Reporting System",
    url: "https://reports.dole.gov.ph",
    description: "Gateway for mandatory annual reporting (AMR, AEDR, 13th Month).",
    category: "employer",
  },
  {
    name: "e-SEnA Portal",
    url: "https://arms.dole.gov.ph",
    description: "Digital filing for Requests for Assistance (RFA) in labor disputes.",
    category: "worker",
  },
  {
    name: "AEP Online Appointment",
    url: "https://clients.ncr.dole.gov.ph/aep",
    description: "Required scheduling for AEP card release and verification.",
    category: "employer",
  },
  {
    name: "Apps Utility Portal",
    url: "https://apps.ncr.dole.gov.ph",
    description: "Visitor health checklists and specialized monitoring tools.",
    category: "general",
  },
];

// ─── Compliance Calendar ────────────────────────────────────
export const COMPLIANCE_DEADLINES = [
  {
    month: "January",
    day: "15",
    title: "13th Month Pay Report",
    description: "Mandatory compliance report for total year-end benefits paid.",
  },
  {
    month: "March",
    day: "31",
    title: "Annual Medical Report (AMR)",
    description: "Submission of occupational health and medical findings.",
  },
  {
    month: "Continuous",
    day: "Any",
    title: "AEDR & WAIR",
    description: "Work accident and illness exposure data reporting.",
  },
] as const;

// ─── Service Categories ────────────────────────────────────
export interface Service {
  title: string;
  description: string;
  link?: string;
}

export const SERVICE_CATEGORIES = [
  {
    id: "requests",
    label: "Requests",
    services: [
      {
        title: "e-SEnA | Online Request for Assistance",
        description:
          "Speedy, impartial, and accessible settlement of labor issues through conciliation-mediation. File your Request for Assistance (RFA) digitally.",
        link: "https://arms.dole.gov.ph",
      },
      {
        title: "Certificate of Involuntary Separation for SSS",
        description:
          "Request certification needed for SSS unemployment benefits application.",
        link: "https://clients.ncr.dole.gov.ph/isc",
      },
      {
        title: "Certificate of No Pending Case",
        description:
          "Apply for a DOLE Clearance certifying no pending labor case.",
        link: "https://clients.ncr.dole.gov.ph/cnpc",
      },
      {
        title: "DOLE Safety Seal Certificate",
        description:
          "Obtain a Safety Seal certifying compliance with minimum health and safety protocols.",
        link: "https://reports.dole.gov.ph",
      },
      {
        title: "Request for Technical Safety Inspection",
        description:
          "Request a safety inspection of your establishment by DOLE technical officers.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc-mRb-N_XGV-VhktmWSzDo5tzHmweRve5jdT0tPgEYwniQOA/viewform?pli=1",
      },
    ] as Service[],
  },
  {
    id: "permits",
    label: "Permit & Registration",
    services: [
      {
        title: "Alien Employment Permit (AEP)",
        description:
          "Apply for AEP for foreign nationals seeking employment in the Philippines.",
      },
      {
        title: "Request for Certificate of Exemption and Exclusion",
        description:
          "Request exemption from the AEP requirement for qualified foreign nationals.",
      },
      {
        title: "PEA Application",
        description:
          "Submit Private Employment Agency license application.",
      },
      {
        title: "Accreditation of Agents and Employer's Authorized Representatives for Filing of AEP Applications",
        description:
          "Apply for accreditation as an authorized AEP processing agent.",
      },
      {
        title: "Establishment Registration for Alien Employment Permit (AEP)",
        description:
          "Register your establishment under Occupational Safety and Health Standards.",
      },

      {
        title: "Establishment Registration Under Rule 1020",
        description:
          "Every employer as defined in Rule 1020 of OSH Standards shall register his business with the Regional Labor Office or authorized representative having jurisdiction thereof to form part of a databank of all covered establishments.",
      },
       {
        title: "Job Fair Permit",
        description:
          "The authority issued by the DOLE Regional Office through its Field Office, which has jurisdiction over the Job Fair venue, allowing the Job Fair sponsor/organizer to conduct Job Fair.",
      },
      {
        title: "Job Fair Clearance",
        description:
          "The authority to conduct Job Fair granted to entities exempted form securing Job Fair Permit. This includes Job Fairs conducted by National Goverment Agencies, Public Employment Service Offices, and Higher Educational Institutions.",
      },
      
      

      {
        title: "Registration of Job/Service Contractor, Sub-Contractor (D.O. 174-17)",
        description:
          "All persons or entities acting as contractors are mandated to register under D.O. 174 with the Regional Office of the Department of Labor and Employment (DOLE) where it principally operates.",
      },
      {
        title: "Working Child Permit",
        description:
          "The employer, parent or guardian shall first secure Working Child Permit (WCP) from the DOLE before engaging the services of any child below 15 years of age allowed under Republic Act No. 9231 (An Act Providing for the Elimination of the Worst Forms of Child Labor and Affording Stronger Protection for the Working Child, Amending for This Purpose Republic Act No. 7610, as Amended, Otherwise Known as the “Special Protection of Children from Child Abuse, Exploitation and Discrimination Act”).",
      },
    ] as Service[],
  },
  {
    id: "reports",
    label: "Reports",
    services: [
      {
        title: "13th Month Pay Report",
        description:
          "13th Month Pay Compliance Report Every covered employers are required to submit a Report on Compliance with PD 851 (13th Month Pay Law) not later than January 15 of the following year through reports.dole.gov.ph. The report on compliance should include the name of establishment, address, principal product or business, total employment, number of workers benefited, amount granted per employee, total amount of benefits granted; and name, position and telephone number of person providing the information.",
      },
      {
        title: "Annual Medical Report",
        description:
          "Pursuant to OSH Standards and Department Order No. 198-18 Implementing Rules and Regulations (IRR) of Republic Act No. 11058 “An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”, employers, contractors or subcontractors, if any, shall submit to DOLE all safety and health reports and notifications such as but not limited the Annual Medical Report (AMR), OSH Committee Report, Employer’s Work Accident/Injury Report (WAIR), and Annual Work Accident/Injury Exposure Data Report (AEDR).",
      },
      {
        title: "Annual Work Accident/Illness Exposure Data Report (AEDR)",
        description:
          "OSH Law or the Republic Act 11058 “An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”, requires companies to submit to the Regional Labor Office or duly authorized representative the Annual Exposure Data Report (AEDR) which provides the annual exposure data of a company and its injury summary that includes the frequency and severity rate of the injuries during the hours of exposure.",
      },
      {
        title: "Company OSH Program",
        description:
          "The employer shall submit a copy of the Company OSH Program to the DOLE Regional, Provincial, Fieldor Satellite Office having jurisdiction over the workplace. The employer shall ensure that the core elements of OSH program are integrated in the company OSH program such as management commitment and employee involvement, workplace risk assessment, hazard prevention and control, safety and health training and education, and OSH program evaluation. A duly signed company commitment to comply OSH requirements together with the company OSH program using the prescribed template shall be considered approved upon submission EXCEPT for Construction Safety and Health Program which shall need approval by DOLE prior to construction",
      },
      {
        title: "Establishment Termination Report (RKS Form 5)",
        description:
          "File reports on establishment closures or workforce reductions.",
      },
       {
        title: "Minutes of the Meeting of Safety and Health",
        description:
          "Pursuant to OSH Standards and Department Order No. 198-18 Implementing Rules and Regulations (IRR) of Republic Act No. 11058 “An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”, employers, contractors or subcontractors, if any, shall submit to DOLE all safety and health reports, notifications and organizational plans and minutes relative to the implementation of OSH Program.",
      },
      {
        title: "Report of Safety Organization",
        description:
          "Pursuant to OSH Standards and Department Order No. 198-18 Implementing Rules and Regulations (IRR) of Republic Act No. 11058 “An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”, employers, contractors or subcontractors, if any, shall submit to DOLE all safety and health reports, notifications and organizational plans and minutes relative to the implementation of OSH Program.",
      },
      {
        title: "Work Accident/Illness Report (WAIR)",
        description:
          "OSH Law or the Republic Act 11058 “An Act Strengthening Compliance with Occupational Safety and Health Standards and Providing Penalties for Violations Thereof”, requires companies to submit to the Regional Labor Office or duly authorized representative the Work Accident/Illness Report (WAIR) which provides all work-related accidents and occupational illness.",
      },
      {
        title: "Contractor/Sub-Contractor's Semi-Annual Report",
        description:
          "Pursuant to Section 22 of Department Order No. 174, Series of 2017, the contractor shall submit Semi-Annual Report to the appropriate DOLE Regional office where it principally operates.",
      },
    ] as Service[],
  },
] as const;

// ─── About Content ─────────────────────────────────────────
export const ABOUT_CONTENT = {
  vision:
    "Every Filipino worker attains full, decent, and productive employment.",
  mission:
    "To promote gainful employment opportunities, develop human resources, protect workers and promote their welfare, and maintain industrial peace.",
  qualityPolicy:
    "DOLE-NCR commits to provide high standards of public service by ensuring effective implementation of labor and employment programs and services. We are committed to the continual improvement of our Quality Management System (QMS) to achieve customer satisfaction.",
} as const;

// ─── Contact & Field Offices ───────────────────────────────
export const CONTACT_INFO = {
  email: "ncr@dole.gov.ph",
  phone: "(02) 8400-6242",
  website: "ncr.dole.gov.ph",
  address:
    "DOLE-NCR Building 967 Maligaya, Malate, Manila, 1004 Metro Manila",
} as const;

export const FIELD_OFFICES = [
  {
    name: "CAMANAVA Field Office",
    shortName: "CFO",
    coverage: "Caloocan, Malabon, Navotas, Valenzuela",
    address: "5/F, Araneta Square Center, Monumento Circle, Caloocan City, Metro Manila",
    email: "ncr_camanava@dole.gov.ph",
    phone: "(02) 8282-1842; (02) 8283-5044",
  },
  {
    name: "Manila Field Office",
    shortName: "MFO",
    coverage: "City of Manila",
    address: "4/F, DY International Building, 1650 Gen. Malvar cor. San Marcelino Street, Malate, Manila",
    email: "ncr_manila@dole.gov.ph",
    phone: "(02) 8244-1532, (02) 8244-1318",
  },
  {
    name: "Makati-Pasay Field Office",
    shortName: "MPFO",
    coverage: "Makati, Pasay, Taguig, Parañaque, Las Piñas, Muntinlupa",
    address: "2/F, ECC Building, Sen. Gil J. Puyat Avenue Extension, Makati City, Metro Manila",
    email: "ncr_makatipasay@dole.gov.ph",
    phone: "0928-354-4238",
  },
  {
    name: "Muntaparlas Field Office",
    shortName: "MTPLFO",
    coverage: "Muntinlupa, Taguig, Parañaque, Las Piñas",
    address: "3/F, Valenzuela Building, Alabang-Zapote Road, Pamplona 3, Las Piñas City, Metro Manila",
    email: "ncr_muntaparlas@dole.gov.ph",
    phone: "0975-846-2395",
  },
  {
    name: "Papamamarisan Field Office",
    shortName: "PFO",
    coverage: "Pasig, Pateros, Marikina, Mandaluyong, San Juan",
    address: "4/F, Rudgen II Building, #17 Shaw Boulevard, Barangay San Antonio, Pasig City, Metro Manila",
    email: "ncr_papamamarisan@dole.gov.ph",
    phone: "(02) 8477-3630",
  },
  {
    name: "Quezon City Field Office",
    shortName: "QCFO",
    coverage: "Quezon City",
    address: "4/F, Arcadia Building, Quezon Avenue, Quezon City, Metro Manila",
    email: "ncr_quezoncity@dole.gov.ph",
    phone: "0956-96-20982",
  },
] as const;

export const CAREERS_CONTENT = {
  title: "CAREERS AT DOLE-NCR",
  description: "Decent and productive employment for every Filipino worker. This is the vision by which the DOLE continues to live by. Every day, we seek the promotion of gainful employment opportunities, advancement of workers' welfare, and maintaining of industrial peace.\n\nAt DOLE, we attend to the needs of employees and employers alike, promoting harmonious, equitable, and stable employment relations that assure equal protection for the rights of all concerned parties. We optimize the development and utilization of the country's human resources. We are forerunners in international forums that push for just and human working conditions.\n\nLike you, we are people-centered, values-driven, professional, responsive, and passionate about our work.",
  invitation: "Whether you are a new graduate or a professional who wants to work for the government, DOLE welcomes you. We believe that your talents and skills will help us continue to move closer to our vision.\n\nInterested applicants who would like to join our team may now submit online their job applications through DOLE-NCR Job Application Portal (e-JAP) by clicking the link below. Before doing so, make sure to check out first our job vacancies posted on our official website or through our Facebook Page for details and further instructions.",
  warning: "ALL APPLICATIONS MUST BE SUBMITTED THROUGH THIS PORTAL; OTHERWISE, IT WILL NOT BE ACTED UPON",
  ejapLink: "https://clients.ncr.dole.gov.ph/ejap"
} as const;
