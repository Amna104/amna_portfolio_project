

import { Project, Experience, Certification, Skill } from './types';

export const ABOUT_TEXT = "Aspiring Cybersecurity Engineer with hands-on experience in vulnerability assessment, threat analysis, and secure software practices. Skilled in Python automation, penetration testing basics, web application security, and cloud security deployments. Passionate about defending systems, analyzing threats, and implementing secure solutions.";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/amna-arshad1/",
  github: "https://github.com/Amna104",
  tryhackme: "https://tryhackme.com/p/amna.arshad",
  email: "amnaarshad019@gmail.com",
  resume: "https://drive.google.com/file/d/1AQ1lz0bFjtsufu2GvISBIu7vlGJeOBas/view?usp=sharing"
};

export const SKILLS: Skill[] = [
  // SECURITY & OPERATIONS
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python', level: 'Daily User', context: 'Automation & scripting' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux', level: 'Advanced', context: 'System hardening & admin' },
  { name: 'Kali Linux', icon: 'https://cdn.simpleicons.org/kalilinux', level: 'Advanced', context: 'Pen testing OS' },
  { name: 'Wireshark', icon: 'https://cdn.simpleicons.org/wireshark', level: 'Intermediate', context: 'Packet analysis' },
  { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash', level: 'Intermediate', context: 'Scripting' },
  { name: 'OWASP Top 10', icon: 'https://cdn.simpleicons.org/owasp', level: 'Advanced', context: 'Web Security' },
  { name: 'Burp Suite', icon: 'https://cdn.simpleicons.org/burpsuite', level: 'Intermediate', context: 'Web app security' },
  { name: 'Splunk', icon: 'https://cdn.simpleicons.org/splunk', level: 'Intermediate', context: 'Log analysis' },
  { name: 'TryHackMe', icon: 'https://cdn.simpleicons.org/tryhackme', level: 'Top 3%', context: 'Continuous learning' },
  { name: 'Hack The Box', icon: 'https://cdn.simpleicons.org/hackthebox', level: 'Active', context: 'CTF challenges' },
  { name: 'Metasploit', icon: 'https://cdn.simpleicons.org/metasploit', level: 'Basic', context: 'Exploitation framework' },
  
  // DEVELOPMENT
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb', level: 'Intermediate', context: 'NoSQL Database' },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/white', level: 'Intermediate', context: 'Backend framework' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react', level: 'Advanced', context: 'Frontend UI' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', level: 'Intermediate', context: 'Server-side JS' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', level: 'Advanced', context: 'Core language' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', level: 'Intermediate', context: 'Type safety' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white', level: 'Intermediate', context: 'React Framework' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss', level: 'Advanced', context: 'Styling' },

  // SECURITY TOOLS & TESTING
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', level: 'Advanced', context: 'API Testing' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git', level: 'Advanced', context: 'Version Control' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white', level: 'Advanced', context: 'Collaboration' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', level: 'Basic', context: 'Containerization' },
  { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql', level: 'Intermediate', context: 'Database queries' },
  { name: 'JWT', icon: 'https://cdn.simpleicons.org/jsonwebtokens', level: 'Advanced', context: 'Auth mechanisms' },

  // CLOUD & DATABASES
  { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure', level: 'Basic', context: 'Cloud Security' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase', level: 'Intermediate', context: 'Backend as a Service' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase', level: 'Basic', context: 'App platform' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', level: 'Intermediate', context: 'Relational DB' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql', level: 'Intermediate', context: 'Relational DB' },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "10Pearls",
    period: "Jun 2025 – Sep 2025",
    location: "Internship • Remote",
    description: [
      "Applied secure coding practices in React.js and Node.js applications, mitigating potential vulnerabilities.",
      "Developed and tested JWT-based authentication and access control mechanisms for secure APIs.",
      "Assisted in vulnerability detection during debugging and software testing processes."
    ],
    skills: ["React.js", "Node.js", "JWT Authentication", "Access Control", "Vulnerability Detection"],
    type: "work"
  },
  {
    role: "Cybersecurity Intern",
    company: "EARTech Information Technology",
    period: "Jul 2025 – Aug 2025",
    location: "Internship • Istanbul, Türkiye (Remote)",
    badge: "LinkedIn helped me get this job",
    description: [
      "Gained hands-on experience with Linux, virtual machines, and security labs (Hack The Box, TryHackMe).",
      "Developed scripts for phishing detection and conducted penetration testing basics.",
      "Strengthened skills in data security, problem-solving, and secure coding practices."
    ],
    skills: ["Linux", "Phishing Detection", "Penetration Testing", "Virtual Machines", "Data Security", "Secure Coding"],
    type: "work"
  },
  {
    role: "BS in Computer Science",
    company: "University of the Punjab",
    period: "2020 – 2024",
    location: "Lahore, Punjab, Pakistan",
    description: [
      "Relevant Coursework:",
      "Data Structures & Algorithms",
      "Computer Networks & Security",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering"
    ],
    skills: ["Computer Science", "Algorithms", "Networking"],
    type: "education"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Port Scanner – Python",
    category: "Cybersecurity",
    description: "Developed a Python‑based port scanner capable of scanning specified port ranges for any target IP/URL. Implemented socket connections to detect open ports and mapped them to service names from a common ports dictionary. Implemented validation for invalid hostnames and IP addresses with descriptive error messages.",
    tech: ["Python", "Sockets", "Networking"],
    highlights: "Custom Range Scan • Service Mapping",
    github: "https://github.com/Amna104/port-scanner",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Converso AI Learning System",
    category: "Development",
    description: "LMS SaaS app featuring user authentication, subscriptions, and payments using Next.js, Supabase, and Stripe — also integrates Vapi AI voice agent for seamless, interactive learning sessions.",
    tech: ["Next.js", "Supabase", "Stripe", "Vapi"],
    securityFeatures: "Secure authentication, API security, data protection",
    highlights: "AI Voice Tutors • Real-time Sessions",
    github: "https://github.com/Amna104",
    demo: "https://ai-lms-converso.vercel.app/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Support Ticket Agent",
    category: "Development",
    description: "A sophisticated AI-powered support ticket resolution system built with LangGraph that automatically classifies, processes, and responds to support tickets with intelligent escalation handling.",
    tech: ["LangGraph", "Python", "AI Agents", "LLMs"],
    highlights: "Intelligent Escalation • Auto-Classification",
    github: "https://github.com/Amna104/support-ticket-agent",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Daikibo Breach Investigation",
    category: "Cybersecurity",
    description: "Forensic investigation of a supply chain disruption at Daikibo Industrials. Analyzed web logs to identify an internal insider threat using automated scripts for unauthorized access.",
    tech: ["Log Analysis", "Incident Response", "Forensics"],
    highlights: "Insider Threat Detected • Pattern Recognition",
    github: "https://github.com/Amna104/daikibo-breach-investigation",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "TryHackMe Learning Journey",
    category: "Cybersecurity",
    description: "Comprehensive documentation of hands-on progress in cybersecurity through TryHackMe labs. Focused on Junior Security Analyst path, firewall configuration, and SIEM fundamentals.",
    tech: ["SOC Operations", "SIEM", "Firewalls", "Threat Hunting"],
    highlights: "Junior Analyst Path • Hands-on Labs",
    github: "https://github.com/Amna104/tryhackme-learning-journey",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wireshark Traffic Analysis",
    category: "Cybersecurity",
    description: "Network traffic analysis lab focusing on packet inspection and filtering. Analyzed ICMP ping requests, TCP handshakes, DNS queries, and applied capture filters to isolate specific traffic flows.",
    tech: ["Wireshark", "PCAP", "TCP/IP", "DNS"],
    highlights: "Packet Inspection • Protocol Analysis",
    github: "https://github.com/Amna104/Cybersecurity_Portfolio/tree/main/wireshark_labs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Cybersecurity Specialization",
    issuer: "Google",
    date: "Dec 2025",
    credentialId: "O9GHTNB0GJ64",
    url: "https://www.coursera.org/account/accomplishments/specialization/O9GHTNB0GJ64",
    description: "Professional specialization covering foundations, network security, Linux, Python automation, and incident response.",
    type: "professional"
  },
  {
    name: "AIG - Shields Up: Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "Oct 2025",
    credentialId: "yrCksFwyA7G6pWc8J",
    url: "https://www.theforage.com/completion-certificates/4nAmAbTbHbnGMNSyo/2ZFnEGEDKTQMtEv9C_4nAmAbTbHbnGMNSyo_DZGzroqzQcetCxCaN_1760444635152_completion_certificate.pdf",
    description: "Completed a cybersecurity threat analysis simulation for the Cyber Defense Unit. Researched vulnerabilities, drafted remediation emails, and utilized Python for ethical hacking scripts.",
    type: "internship"
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "Aug 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/2WV7GM2UMWZT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    description: "Foundational course on Artificial Intelligence concepts and applications.",
    type: "course"
  },
  {
    name: "Deloitte Australia - Cyber Job Simulation",
    issuer: "Forage",
    date: "Jun 2025",
    credentialId: "YzhCAqYnozgPsE9x8",
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_DZGzroqzQcetCxCaN_1749465083822_completion_certificate.pdf",
    description: "Completed a job simulation involving reading web activity logs. Supported a client in a cybersecurity breach and answered questions to identify suspicious user activity.",
    type: "internship"
  },
  {
    name: "Javascript (Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2025",
    url: "https://www.hackerrank.com/certificates/69a9225db4f6",
    description: "Validation of intermediate-level JavaScript programming skills.",
    type: "course"
  },
  {
    name: "Computer Networks",
    issuer: "Huawei",
    date: "Apr 2025",
    url: "https://drive.google.com/file/d/1NcJqZeu9zn2xTDvvCsDY17_op7PwSjoa/view?usp=sharing",
    description: "Comprehensive study of computer networking principles and architecture.",
    type: "course"
  },
  {
    name: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "Apr 2025",
    url: "https://www.credly.com/badges/1616e6fe-7dfc-4f70-b0bc-49e2fb52330e",
    description: "Fundamental concepts of cybersecurity, threat landscape, and protection.",
    type: "course"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Apr 2025",
    url: "https://www.credly.com/badges/cisco-intro-cyber",
    description: "Introduction to essential cybersecurity principles and practices.",
    type: "course"
  },
  {
    name: "AI 1 Million Prompters",
    issuer: "DUBAI FUTURE FOUNDATION",
    date: "Mar 2025",
    url: "https://drive.google.com/file/d/1oF345kqbHaLGq_EhRUtoMItl1Kpw6PbU/view?usp=sharing",
    description: "Prompt Design · Prompt Engineering · Generative AI",
    type: "course"
  },
  {
    name: "Advance Prompt Engineering",
    issuer: "upGrad",
    date: "Mar 2025",
    url: "https://drive.google.com/drive/u/0/folders/1xAPZoq3xlzsehSGHg0JQuF84dmSmhCtn",
    description: "Skills: Prompt Design · Prompt Engineering · Large Language Models (LLM) · Generative AI · AI Prompting",
    type: "course"
  },
  {
    name: "An Introduction to Programming Using Python",
    issuer: "University of Leeds",
    date: "Feb 2025",
    url: "https://www.futurelearn.com/certificates/lik6d2t",
    description: "Foundational Python programming concepts and application development.",
    type: "course"
  },
  {
    name: "Python Course",
    issuer: "GeeksforGeeks",
    date: "Feb 2025",
    url: "https://drive.google.com/file/d/1v54NDllUWK3sc0ipWBhEkTCBTZ7befNs/view?usp=sharing",
    description: "Comprehensive Python programming course.",
    type: "course"
  },
  {
    name: "MERN Stack Fundamentals",
    issuer: "Great Learning",
    date: "Nov 2024",
    url: "https://www.mygreatlearning.com/certificate/RZSXUUNE",
    description: "Core concepts of MongoDB, Express, React, and Node.js development.",
    type: "course"
  }
];

export const STATS = [
  { label: "Certifications", value: "15+" },
  { label: "THM Rooms", value: "30+" },
  { label: "Projects", value: "15+" },
  { label: "Uptime", value: "99.9%" }
];