// All portfolio content lives here. Edit this file to update the site.
// Content is taken only from the candidate's resume and LinkedIn profile.

export const profile = {
  name: "Jerlin G George",
  title: "Network Engineer and Security Developer",
  tagline:
    "I keep production networks running, and I build Python tools that detect suspicious traffic and logins.",
  summary:
    "L2 Network Engineer with experience in production network monitoring, troubleshooting and incident management, now completing an MCA and building machine-learning based security tools.",
  location: "Kerala, India",
  email: "jerryoutlook07@gmail.com",
  phone: "+91 89219 78496",
  linkedin: "https://www.linkedin.com/in/jerlin-ggeorge-bb1885201",
  website: "https://jerry-byte-ai.github.io/",
  resume: "", // Optional: put a PDF in /public and set e.g. "/resume.pdf" to show a download button.
};

export const about = [
  "I worked as an L2 Network Engineer at Extranet Supports from June 2024 to early 2026, supporting 24/7 network monitoring for enterprise infrastructure. Day to day that meant handling escalations from the L1 team, working through routing, switching, DNS, DHCP and VPN faults, and writing root cause analysis for major incidents.",
  "Alongside that I am completing a Master of Computer Applications at Amrita Vishwa Vidyapeetham. My projects combine both sides of my background: a network intrusion detection system built on live packet capture, and a login-activity analyser that flags suspicious sign-ins.",
  "I am looking for network operations, NOC, network security or SOC-adjacent roles where hands-on troubleshooting and some development skill are both useful.",
];

export const projects = [
  {
    name: "Network Intrusion Detection System",
    kind: "Minor project, February 2026",
    problem:
      "Abnormal or malicious traffic is hard to spot by reading raw packets, and analysts need classified alerts they can act on.",
    solution:
      "A Python and Flask application that captures packets in real time, extracts traffic features, and flags suspicious behaviour using both rules and a machine-learning classifier.",
    contribution: [
      "Packet processing and feature extraction with Python and Scapy",
      "Rule-based and Random Forest detection workflows",
      "Traffic classification, severity analysis and automated alert generation",
      "Monitoring dashboard for traffic statistics, alerts and detection results",
      "Functional testing and debugging of the packet-processing and detection pipeline",
    ],
    tech: ["Python", "Flask", "Scapy", "Scikit-learn", "Random Forest", "Pandas", "REST APIs"],
    featured: true,
  },
  {
    name: "Login Time Based Detection of Suspicious Logins",
    kind: "Major project, July 2026",
    problem:
      "Account compromise often shows up first as sign-ins at unusual times, which are easy to miss in raw authentication logs.",
    solution:
      "A web application that analyses authentication events and predicts which login activity looks suspicious.",
    contribution: [
      "Backend processing, feature extraction and ML prediction workflow",
      "REST APIs and database operations using Flask, SQL and SQLite",
      "Web dashboard for authentication activity and security events",
      "Testing, debugging and validation across the application, database and prediction workflows",
    ],
    tech: ["Python", "Flask", "SQLite", "SQL", "Pandas", "Random Forest", "JavaScript", "REST APIs"],
    featured: true,
  },
  {
    name: "Smart Card using QR Code (Android)",
    kind: "Academic project, 2019 to 2020",
    problem:
      "Educational institutes handle attendance, payments and library tasks separately.",
    solution:
      "An Android app that manages these through a smart card, using QR codes and a fingerprint scanner.",
    contribution: [
      "Built the Android app for educational institutes",
      "Integrated QR code and fingerprint scanning for attendance, payments and library tasks",
    ],
    tech: ["Android", "QR Code", "Fingerprint Scanner"],
    featured: false,
  },
];

export const experience = [
  {
    role: "L2 Network Engineer",
    company: "Extranet Supports Pvt Ltd",
    place: "Ernakulam, Kerala",
    period: "Jun 2024 to Feb 2026",
    note: "Dates follow the resume; LinkedIn lists March 2026 as the end date.",
    points: [
      "Supported enterprise network infrastructure including routers, switches and firewalls, with 24/7 monitoring for high availability.",
      "Provided Level 2 support for incidents escalated from the L1 team, and wrote root cause analysis for major incidents.",
      "Configured and troubleshot VLANs, IP addressing, DHCP, DNS and routing protocols.",
      "Applied network security measures including firewall rules and access control policies.",
      "Supported VPN configuration, remote access and server connectivity.",
      "Monitored with Zabbix, Observium, Uptime Kuma and Wireshark; ran health checks after each fix to confirm stability.",
      "Kept network topology documentation and incident records, so recurring issues were easier to diagnose.",
    ],
    primary: true,
  },
  {
    role: "Software Tester (training)",
    company: "Luminar Technolab",
    place: "Kochi, Kerala",
    period: "Dec 2022 to Jun 2023",
    points: ["Completed a software testing programme covering functional testing and debugging."],
  },
  {
    role: "Associate, CS Internet",
    company: "Sutherland",
    place: "Ernakulam, Kerala",
    period: "Oct 2022 to Dec 2022",
    points: ["Handled real-time customer support over chat, including escalations and account issues, using CRM tools."],
  },
  {
    role: "Operations Executive",
    company: "LuLu Forex Pvt Ltd",
    place: "Ernakulam, Kerala",
    period: "Dec 2021 to Jun 2022",
    points: ["Ran daily foreign exchange operations with regulatory compliance, including currency transactions and remittances."],
  },
];

export const skills = [
  { group: "Networking", items: ["TCP/IP", "Routing and Switching", "VLANs", "DNS", "DHCP", "VPN", "LAN/WAN", "Firewall rules", "Access control"] },
  { group: "Monitoring and Diagnostics", items: ["Zabbix", "Observium", "Uptime Kuma", "Wireshark", "Incident management", "Root cause analysis"] },
  { group: "Security", items: ["Intrusion detection", "Network security", "Log analysis", "Cyber SOC analysis"] },
  { group: "Programming", items: ["Python", "JavaScript", "SQL", "Flask", "REST APIs", "HTML", "CSS"] },
  { group: "Data and ML", items: ["Pandas", "Scikit-learn", "Random Forest", "Scapy", "SQLite"] },
  { group: "Cloud and Practice", items: ["Google Cloud", "Software testing", "Debugging", "Technical documentation"] },
];

export const education = [
  { title: "Master of Computer Applications (MCA)", org: "Amrita Vishwa Vidyapeetham", period: "Oct 2024 to Oct 2026" },
  { title: "Bachelor of Computer Applications (BCA)", org: "University of Kerala (College of Applied Science, IHRD)", period: "2017 to 2020" },
  { title: "Higher Secondary, Computer Science", org: "Bishop Hodges Higher Secondary School", period: "2015 to 2017" },
];

export const certifications = [
  { title: "Certified IT Infrastructure and Cyber SOC Analyst", org: "Red Team Hacker Academy, Cochin", period: "Sep 2021" },
  { title: "DCNE: Dataflow Certified Network Engineer", org: "" },
  { title: "Networking and Security in Google Cloud", org: "Google Cloud" },
  { title: "Google Cloud Computing Foundations: Infrastructure in Google Cloud", org: "Google Cloud" },
  { title: "Data, ML, and AI in Google Cloud", org: "Google Cloud" },
  { title: "Software Testing", org: "Luminar Technolab, Cochin" },
];

export const trainings = ["C, C++ and Java programming (IIT Bombay, online)", "Advanced C++ training"];
