import { Announcement, BusRoute, Department, EventItem, Recruiter, Testimonial, CampusFacility } from '../types';

export const COLLEGE_INFO = {
  name: "St. Thomas College of Engineering & Technology",
  shortName: "STM Kannur",
  motto: "Knowledge, Innovation, Excellence & Ethics",
  established: "2014",
  affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
  approval: "AICTE New Delhi & Govt. of Kerala",
  keamCode: "STM",
  address: "Sivapuram P.O, Mattannur, Kannur District, Kerala - 670702, India",
  locationLandmark: "Near Kannur International Airport (CNN), Mattannur",
  helplinePhone: "+91 490 2401700",
  admissionCell: "+91 94473 82700 / +91 94958 22100",
  email: "info@stthomaskannur.ac.in",
  admissionEmail: "admission@stthomaskannur.ac.in",
  principalName: "Dr. Shaju K. Albert",
  principalMessage: "Welcome to St. Thomas College of Engineering & Technology (STM Kannur). We foster an ecosystem of transformative engineering education, research mindset, entrepreneurial drive, and high ethical standards to prepare global technical leaders.",
  stats: {
    placementPercentage: "94%",
    highestPackage: "12.5 LPA",
    activeStudents: "1,400+",
    expertFaculty: "95+",
    campusAcres: "15+ Acres",
    advancedLabs: "42+ Labs",
    busRoutes: "14 Routes",
    studentClubs: "18+ Chapters",
  }
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'B.Tech Admissions 2026-27: Online Registration & Merit/Management Quota Application Portal Now Open',
    category: 'Admission',
    date: 'Sep 01, 2026',
    isNew: true,
    linkText: 'Apply Online',
  },
  {
    id: 'ann-2',
    title: 'KTU Notification: S2, S4 & S6 B.Tech End Semester Examination Schedule & Hall Ticket Download',
    category: 'KTU',
    date: 'Aug 28, 2026',
    isNew: true,
    linkText: 'View Circular',
  },
  {
    id: 'ann-3',
    title: 'Campus Recruitment Drive: TCS Ninja & Digital, Infosys HackWithInfy selection rounds on Sept 15',
    category: 'Placement',
    date: 'Aug 25, 2026',
    isNew: true,
    linkText: 'Placement Desk',
  },
  {
    id: 'ann-4',
    title: 'AURA 2026 National Level Technical Symposium & Hackathon - Registrations open for all KTU colleges',
    category: 'Event',
    date: 'Aug 20, 2026',
    isNew: false,
    linkText: 'Register Event',
  },
  {
    id: 'ann-5',
    title: 'IEDC & Kerala Startup Mission: Seed funding grants awarded to 4 STM Student Innovation Teams',
    category: 'General',
    date: 'Aug 14, 2026',
    isNew: false,
    linkText: 'Read More',
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'cse',
    code: 'CSE',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    intake: 120,
    established: 2014,
    description: 'Empowering software architects with cutting-edge computing paradigms, AI algorithms, cloud systems, and modern full-stack development methodologies.',
    iconName: 'Code',
    hod: {
      name: 'Dr. Praveen Kumar M.',
      qualification: 'Ph.D (NIT Calicut), M.Tech CSE',
      experience: '18+ Years in Teaching & Research',
      message: 'Our department focuses on hands-on software development, competitive programming, AI integration, and active industry internships to produce top-tier software engineers.'
    },
    vision: 'To be a premier center of excellence in computer science education, producing innovative software engineers capable of solving complex societal and industrial challenges.',
    mission: [
      'Provide rigorous theoretical foundation and practical training in modern computing technologies.',
      'Foster innovation, research, and open-source contributions through student-led hackathons.',
      'Strengthen industry collaborations for internships, sponsored projects, and global placements.'
    ],
    keyLabs: [
      'Advanced Computing & Cloud Architecture Lab',
      'Artificial Intelligence & Deep Learning Workstation Lab',
      'Full Stack Web & Mobile App Development Lab',
      'Network Security & Cyber Forensics Lab',
      'Database Systems & Big Data Analytics Lab'
    ],
    careerProspects: [
      'Full Stack Software Engineer',
      'Cloud Solutions Architect',
      'Data Engineer / ML Engineer',
      'Cybersecurity Analyst',
      'Product Manager / DevOps Lead'
    ],
    facultyCount: 22,
    featuredProjects: [
      {
        title: 'AgriSense: Autonomous Crop Disease Detection Drone',
        studentLead: 'Anandhu R. & Team (CSE Final Year)',
        year: '2026',
        desc: 'Deep learning-powered drone system for real-time pest detection across rubber and coconut plantations in Kannur.'
      },
      {
        title: 'MedChain: Decentralized Patient Health Records on Blockchain',
        studentLead: 'Nayana Suresh & Team (CSE 3rd Year)',
        year: '2025',
        desc: 'HIPAA-compliant blockchain system for seamless hospital interoperability across North Malabar health centers.'
      }
    ]
  },
  {
    id: 'aids',
    code: 'AD',
    name: 'Artificial Intelligence & Data Science',
    shortName: 'AI & DS',
    intake: 60,
    established: 2021,
    description: 'Pioneering future-proof education in Large Language Models, Neural Networks, Computer Vision, Business Intelligence, and Predictive Modeling.',
    iconName: 'Cpu',
    hod: {
      name: 'Dr. Anjana K. Nair',
      qualification: 'Ph.D (IIT Madras), M.Tech AI',
      experience: '14+ Years in Machine Learning Research',
      message: 'AI & Data Science is reshaping every sector. We nurture students with strong mathematical rigor, tensor pipelines, and ethical AI development practices.'
    },
    vision: 'To develop visionary AI engineers and data scientists who spearhead ethical intelligent systems and transformative data-driven innovations.',
    mission: [
      'Impart specialized training in deep neural architectures, NLP, and reinforcement learning.',
      'Establish state-of-the-art GPU computing clusters for real-world model deployment.',
      'Collaborate with health-tech, fintech, and autonomous vehicle industries on live research.'
    ],
    keyLabs: [
      'NVIDIA GPU Deep Learning Compute Cluster',
      'Natural Language Processing & LLM Fine-tuning Lab',
      'Computer Vision & Image Processing Lab',
      'Statistical Modeling & Data Visualization Studio',
      'Edge AI & Embedded Intelligence Lab'
    ],
    careerProspects: [
      'AI / Machine Learning Engineer',
      'Data Scientist & Analytics Consultant',
      'Computer Vision Specialist',
      'Prompt & LLM Systems Engineer',
      'Quantitative Analyst'
    ],
    facultyCount: 14,
    featuredProjects: [
      {
        title: 'Malayalam Dialect Speech Recognition & Translation Engine',
        studentLead: 'Vishnu Prasad & Team (AI&DS)',
        year: '2026',
        desc: 'Transformer-based acoustic model adapted for Northern Kerala dialects for government digital delivery.'
      }
    ]
  },
  {
    id: 'ece',
    code: 'ECE',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    intake: 60,
    established: 2014,
    description: 'Transforming signal processing, VLSI chip design, embedded IoT architectures, 5G/6G communication systems, and robotic hardware.',
    iconName: 'Radio',
    hod: {
      name: 'Prof. Mathew Joseph',
      qualification: 'M.Tech VLSI & Embedded Systems (NITK Surathkal)',
      experience: '16+ Years in Industry & Academia',
      message: 'From semiconductor chip tape-outs to next-gen wireless networks, our department is the nexus where hardware meets smart firmware.'
    },
    vision: 'To achieve global recognition in electronics and communication engineering by nurturing innovation in chip design and smart connected systems.',
    mission: [
      'Provide rigorous hands-on training in FPGA synthesis, DSP, and RF communications.',
      'Promote interdisciplinary research in biomedical devices, satellite telemetry, and IoT.',
      'Foster startup incubations in hardware prototyping.'
    ],
    keyLabs: [
      'VLSI Design & Cadence / Synopsys EDA Lab',
      'Advanced DSP & RF Microwave Communication Lab',
      'Embedded Systems & ARM / RISC-V Microcontrollers Lab',
      'IoT Sensor Networks & Robotics Hardware Studio',
      'Electronic Circuits & Simulation Lab'
    ],
    careerProspects: [
      'VLSI Physical Design Engineer',
      'Embedded Firmware Engineer',
      '5G / Telecom Systems Engineer',
      'Robotics & Automation Developer',
      'Hardware Validation Engineer'
    ],
    facultyCount: 16,
    featuredProjects: [
      {
        title: 'Smart LoRaWAN Emergency Beacon for Coastal Fishermen',
        studentLead: 'Gokul K. & Team (ECE)',
        year: '2026',
        desc: 'Long-range low-power disaster alert device communicating directly with Kannur Port coastal authorities.'
      }
    ]
  },
  {
    id: 'me',
    code: 'ME',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    intake: 60,
    established: 2014,
    description: 'Fusing classical thermal/fluid engineering with modern Electric Vehicles (EV), CNC precision machining, 3D printing, and Industry 4.0 automation.',
    iconName: 'Cog',
    hod: {
      name: 'Dr. Rajesh P. V.',
      qualification: 'Ph.D (NIT Calicut), M.Tech Thermal Engg',
      experience: '20+ Years in Mechanical Design & Research',
      message: 'Our mechanical engineers build physical solutions that move the world—combining advanced CAD/FEA simulations with cutting-edge EV propulsion.'
    },
    vision: 'To be a center of excellence in mechanical engineering, producing adaptable engineers skilled in sustainable energy, robotics, and advanced manufacturing.',
    mission: [
      'Deliver hands-on excellence in precision machine tools, metallurgy, and thermal sciences.',
      'Train students in ANSYS, SolidWorks, CATIA, and EV battery thermal modeling.',
      'Drive student participation in SAE BAJA, Formula Student, and national robotics contests.'
    ],
    keyLabs: [
      'CAD/CAM & FEA Simulation Workstation Lab',
      'CNC Machining & Precision Fabrication Center',
      'Thermal Engineering & IC Engines Research Lab',
      'Fluid Mechanics & Hydraulic Machinery Lab',
      'Additive Manufacturing & Rapid Prototyping (3D Printing) Lab',
      'Metallurgy & Materials Testing Lab'
    ],
    careerProspects: [
      'EV Powertrain & Battery Design Engineer',
      'Product Design & FEA Analyst',
      'Robotics & Automation Engineer',
      'Aerospace & Defense Systems Specialist',
      'HVAC & Plant Operations Manager'
    ],
    facultyCount: 18,
    featuredProjects: [
      {
        title: 'Solar-Assisted Hybrid Agricultural Harvester',
        studentLead: 'Sreerag M. & Team (ME)',
        year: '2026',
        desc: 'Lightweight autonomous paddy harvesting machine designed specifically for Kerala terraced hill terrain.'
      }
    ]
  },
  {
    id: 'ce',
    code: 'CE',
    name: 'Civil Engineering',
    shortName: 'CE',
    intake: 60,
    established: 2014,
    description: 'Engineering sustainable green buildings, smart transportation corridors, seismic-resilient structures, and environmental water conservation systems.',
    iconName: 'Building',
    hod: {
      name: 'Prof. Deepa Varghese',
      qualification: 'M.Tech Structural Engineering (CET)',
      experience: '15+ Years in Structural Consulting & Teaching',
      message: 'We train civil engineers who shape nation-building infrastructure with environmental sustainability and modern Building Information Modeling (BIM).'
    },
    vision: 'To build ethical, creative civil engineers dedicated to sustainable infrastructure and environmental stewardship.',
    mission: [
      'Equip students with deep structural, geotechnical, and environmental engineering expertise.',
      'Provide training in AutoCAD, STAAD.Pro, Revit BIM, and GIS spatial mapping.',
      'Undertake material testing and structural audit consultancy for local civic projects.'
    ],
    keyLabs: [
      'Strength of Materials & Structural Testing Lab',
      'Geotechnical Engineering & Soil Mechanics Lab',
      'Environmental Engineering & Water Quality Analysis Lab',
      'Advanced Surveying (Total Station & Drone LIDAR) Lab',
      'Computer Aided Structural Drafting & BIM Lab'
    ],
    careerProspects: [
      'Structural Analysis & Design Engineer',
      'BIM & Architectural Modeling Specialist',
      'Urban Infrastructure & Highway Planner',
      'Geotechnical Consultant',
      'Government Engineering Services (PWD / Irrigation / CPWD)'
    ],
    facultyCount: 15,
    featuredProjects: [
      {
        title: 'Geopolymer Concrete utilizing Laterite Quarry Waste from Kannur',
        studentLead: 'Devika P. & Team (CE)',
        year: '2026',
        desc: 'Zero-cement eco-friendly construction blocks with 35% higher compressive strength and 60% lower carbon footprint.'
      }
    ]
  },
  {
    id: 'eee',
    code: 'EEE',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    intake: 30,
    established: 2014,
    description: 'Leading the green energy revolution through smart microgrids, renewable solar/wind integration, power electronics converters, and industrial automation.',
    iconName: 'Zap',
    hod: {
      name: 'Dr. Suresh Kumar B.',
      qualification: 'Ph.D (CUSAT), M.Tech Power Systems',
      experience: '19+ Years in Power Engineering',
      message: 'Powering the clean energy transition. Our students master high-voltage systems, PLC/SCADA automation, and modern EV charging infrastructure.'
    },
    vision: 'To be a premier department nurturing innovative electrical engineers proficient in smart grid technologies and renewable power.',
    mission: [
      'Provide comprehensive knowledge in electrical machines, power electronics, and control systems.',
      'Establish hands-on mastery in MATLAB/Simulink, PSCAD, and PLC/SCADA programming.',
      'Promote energy audit and renewable energy solutions for society.'
    ],
    keyLabs: [
      'Electrical Machines & Drives Laboratory',
      'Power Electronics & Motor Control Lab',
      'Smart Grid & Renewable Energy Simulation Lab',
      'Industrial Automation, PLC & SCADA Lab',
      'Measurements & Electronic Instrumentation Lab'
    ],
    careerProspects: [
      'Smart Grid & Power Systems Engineer',
      'EV Charging & Battery Management Developer',
      'Industrial Automation & PLC Specialist',
      'Renewable Energy Project Manager',
      'Power Distribution & KSEB / PSU Engineer'
    ],
    facultyCount: 12,
    featuredProjects: [
      {
        title: 'Campus Microgrid Energy Management with Solar Battery Storage',
        studentLead: 'Abhinav C. & Team (EEE)',
        year: '2026',
        desc: 'Real-time AI-optimized power dispatch reducing campus grid dependency by 40% using rooftop solar arrays.'
      }
    ]
  }
];

export const RECRUITERS: Recruiter[] = [
  { name: 'Tata Consultancy Services (TCS)', category: 'IT Services', offersCount: 68, logoText: 'TCS', badgeColor: 'bg-blue-600' },
  { name: 'Infosys', category: 'IT Services', offersCount: 54, logoText: 'INFY', badgeColor: 'bg-sky-600' },
  { name: 'Wipro Technologies', category: 'IT Services', offersCount: 42, logoText: 'WIPRO', badgeColor: 'bg-purple-600' },
  { name: 'UST Global', category: 'Product / MNC', offersCount: 38, logoText: 'UST', badgeColor: 'bg-amber-600' },
  { name: 'Cognizant (CTS)', category: 'IT Services', offersCount: 35, logoText: 'CTS', badgeColor: 'bg-indigo-600' },
  { name: 'IBS Software', category: 'Product / MNC', offersCount: 24, logoText: 'IBS', badgeColor: 'bg-emerald-600' },
  { name: 'QBurst Technologies', category: 'Product / MNC', offersCount: 22, logoText: 'QBURST', badgeColor: 'bg-teal-600' },
  { name: 'Tata Elxsi', category: 'Core Engineering', offersCount: 18, logoText: 'ELXSI', badgeColor: 'bg-red-600' },
  { name: 'Quest Global', category: 'Core Engineering', offersCount: 16, logoText: 'QUEST', badgeColor: 'bg-orange-600' },
  { name: 'Speridian Technologies', category: 'IT Services', offersCount: 15, logoText: 'SPERIDIAN', badgeColor: 'bg-cyan-600' },
  { name: 'Federal Bank', category: 'FinTech / Banking', offersCount: 12, logoText: 'FEDBANK', badgeColor: 'bg-yellow-600' },
  { name: 'Experion Technologies', category: 'Product / MNC', offersCount: 11, logoText: 'EXPERION', badgeColor: 'bg-rose-600' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Anjali Ramesh',
    batch: '2021-2025',
    branch: 'Computer Science & Engineering',
    company: 'Tata Consultancy Services (Digital)',
    role: 'Systems Engineer',
    quote: 'The coding bootcamps and faculty mentorship at STM Kannur laid a rock-solid foundation for my career. The lab facilities and mock interview drills by the placement cell were exceptional.',
    avatarSeed: 'anjali'
  },
  {
    id: 't-2',
    name: 'Mohammed Shamil',
    batch: '2020-2024',
    branch: 'Electronics & Communication',
    company: 'Tata Elxsi',
    role: 'Embedded Software Engineer',
    quote: 'The VLSI and IoT laboratories at St. Thomas allowed me to work on physical hardware from my third semester. I landed my dream core engineering job during the campus drive.',
    avatarSeed: 'shamil'
  },
  {
    id: 't-3',
    name: 'Fathima Zahra',
    batch: '2020-2024',
    branch: 'Civil Engineering',
    company: 'L&T Construction',
    role: 'Graduate Structural Engineer',
    quote: 'The practical field surveying, Total Station sessions, and CAD workshops prepared me to immediately handle large-scale structural design challenges on day one at L&T.',
    avatarSeed: 'fathima'
  },
  {
    id: 't-4',
    name: 'Rahul K. V.',
    batch: '2019-2023',
    branch: 'Mechanical Engineering',
    company: 'Quest Global Aerospace',
    role: 'FEA Design Engineer',
    quote: 'STM Kannur gave me not just technical competence but leadership exposure through the IEDC student entrepreneurship cell. Proud to be an STM alumnus!',
    avatarSeed: 'rahul'
  }
];

export const BUS_ROUTES: BusRoute[] = [
  {
    routeNo: 'Route 1',
    name: 'Kannur City Express',
    startingPoint: 'Kannur Old Bus Stand',
    departureTime: '07:45 AM',
    arrivalCampus: '08:45 AM',
    driverName: 'Mr. Vijayan K.',
    contactNumber: '+91 98471 22345',
    stops: [
      { stopName: 'Kannur Old Bus Stand', time: '07:45 AM' },
      { stopName: 'Caltex Junction', time: '07:50 AM' },
      { stopName: 'Thazhe Chovva', time: '07:58 AM' },
      { stopName: 'Chala 12th Mile', time: '08:08 AM' },
      { stopName: 'Mambaram', time: '08:20 AM' },
      { stopName: 'Anjarakandy Junction', time: '08:28 AM' },
      { stopName: 'Mattannur Town', time: '08:38 AM' },
      { stopName: 'STM Campus, Sivapuram', time: '08:45 AM' }
    ]
  },
  {
    routeNo: 'Route 2',
    name: 'Thalassery - Koothuparamba Route',
    startingPoint: 'Thalassery New Bus Stand',
    departureTime: '07:40 AM',
    arrivalCampus: '08:45 AM',
    driverName: 'Mr. Sasi Kumar',
    contactNumber: '+91 94462 88710',
    stops: [
      { stopName: 'Thalassery New Bus Stand', time: '07:40 AM' },
      { stopName: 'Chonadam', time: '07:48 AM' },
      { stopName: 'Eranholi Bridge', time: '07:54 AM' },
      { stopName: 'Kadirur', time: '08:02 AM' },
      { stopName: 'Koothuparamba Bus Stand', time: '08:15 AM' },
      { stopName: 'Nirmalagiri College Stop', time: '08:22 AM' },
      { stopName: 'Uliyil', time: '08:35 AM' },
      { stopName: 'STM Campus, Sivapuram', time: '08:45 AM' }
    ]
  },
  {
    routeNo: 'Route 3',
    name: 'Iritty - Mattannur Route',
    startingPoint: 'Iritty Old Bus Stand',
    departureTime: '08:05 AM',
    arrivalCampus: '08:45 AM',
    driverName: 'Mr. Biju Thomas',
    contactNumber: '+91 97455 10982',
    stops: [
      { stopName: 'Iritty Old Bus Stand', time: '08:05 AM' },
      { stopName: 'Ulikkal Junction', time: '08:12 AM' },
      { stopName: 'Punnad', time: '08:20 AM' },
      { stopName: 'Keezhur', time: '08:26 AM' },
      { stopName: 'Mattannur Bus Stand', time: '08:35 AM' },
      { stopName: 'Sivapuram Gate', time: '08:42 AM' },
      { stopName: 'STM Campus, Sivapuram', time: '08:45 AM' }
    ]
  },
  {
    routeNo: 'Route 4',
    name: 'Payyanur - Taliparamba Route',
    startingPoint: 'Payyanur Bus Stand',
    departureTime: '07:15 AM',
    arrivalCampus: '08:45 AM',
    driverName: 'Mr. Rajeevan P.',
    contactNumber: '+91 94951 33420',
    stops: [
      { stopName: 'Payyanur Bus Stand', time: '07:15 AM' },
      { stopName: 'Pilathara', time: '07:25 AM' },
      { stopName: 'Pariyaram Medical College', time: '07:35 AM' },
      { stopName: 'Taliparamba Highway Junction', time: '07:50 AM' },
      { stopName: 'Mayyil', time: '08:15 AM' },
      { stopName: 'Irikkur Bridge', time: '08:28 AM' },
      { stopName: 'STM Campus, Sivapuram', time: '08:45 AM' }
    ]
  }
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'fac-1',
    title: 'Central Digital Library & E-Learning Centre',
    subtitle: 'Over 25,000+ volumes, IEEE/ScienceDirect digital access, and 200+ seating capacity',
    description: 'Fully automated library using KOHA software, equipped with DELNET, NPTEL video archives, high-speed digital research terminals, and quiet study carrels.',
    highlights: ['25,000+ Engineering Books', 'DELNET & IEEE Xplore Journals', 'NPTEL & SWAYAM Video Stations', 'Book Bank Scheme for Meritorious Students'],
    icon: 'BookOpen',
    category: 'Academic'
  },
  {
    id: 'fac-2',
    title: 'High Performance Computing & FabLab',
    subtitle: 'NVIDIA GPU clusters, 3D printers, IoT workstations, and gigabit fiber backbone',
    description: 'Dedicated innovation arena for students to build prototypes, train machine learning models, develop robotics hardware, and build hardware-software projects.',
    highlights: ['Gigabit Wi-Fi across campus', 'NVIDIA GPU AI Stations', 'Stereolithography 3D Printers', 'Oscilloscopes & PCB fabrication tools'],
    icon: 'Cpu',
    category: 'Innovation'
  },
  {
    id: 'fac-3',
    title: 'Separate Men & Women Hostels',
    subtitle: 'Safe, comfortable on-campus living with hygienic Kerala & North Indian dining',
    description: 'Spacious well-ventilated rooms, 24/7 security with CCTV surveillance, solar water heaters, study halls, high-speed Wi-Fi, and resident faculty wardens.',
    highlights: ['24/7 Security & Resident Wardens', 'Hygienic Multi-cuisine Mess', 'Wi-Fi & Indoor Recreation Rooms', 'Gymnasium & Medical Room'],
    icon: 'Home',
    category: 'Student Life'
  },
  {
    id: 'fac-4',
    title: 'Sports Complex & Multi-purpose Arena',
    subtitle: 'Outdoor football pitch, cricket nets, basketball court, volleyball, and indoor badminton',
    description: 'Promoting physical wellness and team spirit with professional coaches, annual inter-collegiate tournaments, and state-level athletic facilities.',
    highlights: ['Full-size Football Ground', 'Standard Basketball Court', 'Indoor Badminton Courts', 'Table Tennis & Chess Arena'],
    icon: 'Trophy',
    category: 'Sports'
  },
  {
    id: 'fac-5',
    title: 'IEDC & Startup Incubation Centre',
    subtitle: 'Recognized by Kerala Startup Mission (KSUM) to empower student founders',
    description: 'Pre-incubation workspace, seed funding grants up to ₹2 Lakhs, patent filing assistance, and mentorship from Silicon Valley and Infopark startup founders.',
    highlights: ['Seed grants via KSUM', 'Patent & IPR Filing Cell', 'Alumni Founder Mentorship', 'Annual Hackathon & Pitch Fest'],
    icon: 'Lightbulb',
    category: 'Innovation'
  },
  {
    id: 'fac-6',
    title: 'College Bus Fleet (14 Routes)',
    subtitle: 'Comprehensive transit covering entire Kannur, Thalassery, Payyanur, and Iritty regions',
    description: 'Modern, GPS-tracked college buses ensuring punctual, safe, and comfortable daily commute for day-scholar students and faculty members.',
    highlights: ['GPS Real-Time Tracking', 'Covers All Major Towns in Kannur', 'Experienced Certified Drivers', 'Subsidized Student Pass Scheme'],
    icon: 'Bus',
    category: 'Student Life'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'AURA 2026: National Level Technical Symposium & Coding Hackathon',
    date: 'Sep 24-25, 2026',
    time: '09:00 AM - 05:00 PM',
    venue: 'STM Main Auditorium & Computing Labs',
    category: 'Technical',
    description: '24-hour hackathon, robotics obstacle race, paper presentation, and gaming arena with cash prizes worth ₹1,50,000.',
    registrationOpen: true
  },
  {
    id: 'evt-2',
    title: 'Industry 4.0 & AI Masterclass by NVIDIA Certified Deep Learning Institute',
    date: 'Oct 05, 2026',
    time: '10:00 AM - 04:00 PM',
    venue: 'Seminar Hall 1',
    category: 'Workshop',
    description: 'Hands-on practical training on deploying Vision Transformers and LLM agents on embedded Jetson devices.',
    registrationOpen: true
  },
  {
    id: 'evt-3',
    title: 'Tharunyam 2026: Annual Inter-Departmental Cultural Arts Festival',
    date: 'Oct 16-17, 2026',
    time: '09:30 AM - 07:00 PM',
    venue: 'Open Air Amphitheatre',
    category: 'Cultural',
    description: 'Two days of high-energy music, classical and western dance battles, drama, literary contests, and DJ night.',
    registrationOpen: false
  },
  {
    id: 'evt-4',
    title: 'Annual Placement Training Bootcamp: Soft Skills, Aptitude & Mock Interviews',
    date: 'Nov 02-06, 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Placement Cell Conference Hall',
    category: 'Seminar',
    description: 'Intensive corporate readiness boot camp conducted by senior HR leaders from Fortune 500 tech companies.',
    registrationOpen: true
  }
];

export const FAQ_LIST = [
  {
    q: "How can I apply for B.Tech admission at St. Thomas College of Engineering (STM)?",
    a: "Admissions to 50% Government Merit seats are conducted through the KEAM Centralized Allotment Process (CAP) using college code 'STM'. For Management and NRI quota direct seats, candidates can apply online directly through our website or visit our Admission Cell at the Mattannur campus."
  },
  {
    q: "What are the eligibility criteria for B.Tech admissions?",
    a: "Candidates must have passed 10+2 (Higher Secondary) with a minimum of 45% marks in Physics, Mathematics, and Chemistry/Computer Science/Biology put together (40% for reserved categories). Candidates must also qualify in the KEAM entrance examination."
  },
  {
    q: "Are scholarships available for meritorious students?",
    a: "Yes! STM Kannur offers substantial merit scholarships: 100% tuition fee waiver for top KEAM rank holders (Rank < 10,000), 50% tuition waiver for +2 PCM scores > 90%, plus government scholarships for SC/ST/OEC/EWS categories."
  },
  {
    q: "What are the hostel and transportation facilities?",
    a: "The college operates separate, secure hostels for boys and girls with resident wardens, Wi-Fi, and nutritious food. For day scholars, a dedicated fleet of 14 GPS-enabled buses covers all key hubs including Kannur, Thalassery, Mattannur, Iritty, Koothuparamba, and Payyanur."
  },
  {
    q: "How is the placement training conducted at STM Kannur?",
    a: "Our Career Guidance & Placement Unit (CGPU) initiates training from the first year onwards with Aptitude sharpening, Data Structures, Full-stack coding boot camps, English communication mastery, and mock technical/HR interviews with top MNC recruiters."
  }
];
