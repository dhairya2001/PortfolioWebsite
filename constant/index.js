export const work = [
  {
    companyName: "SDSU",
    desingation: "TA Software Engineer",
    companyLogo: "sdsu_rf.jpeg",
    desc: [
    "Led a 6-person team to design and deploy a distributed AI chatbot on AWS, building Python backend services with Flask andFastAPI and exposing them through REST APIs to improve internal-portal information-retrieval accuracy by 20%.",
    "Designed Java-based automated grading services and wrote comprehensive JUnit and PyTest suites under test-driven-development workflow, cutting manual grading effort by 40% across 200+ students.",
    " Optimized PostgreSQL query performance by profiling slow queries and adding composite indexes on high-frequency filter columns, accelerating lookups roughly 12x (about 150 ms to 12 ms) by eliminating full-table scans.",
    "Containerized backend services with Docker and deployed on AWS, using CloudWatch for centralized logging and metrics to keep the chatbot and grading systems reliable in production.",
    "Mentored 200+ students on debugging, refactoring, Git workflows, and core software-engineering practices, improving overall code quality and project outcomes."
    ],
    duration: "Sept 2024 - Present",
    location: "San Diego,USA",
  },
  {
    companyName: "Wordcorn",
    desingation: "Software Engineer Intern",
    companyLogo: "wordcorn.jpeg",
    desc: [
      "Built end-to-end full-stack features — authentication, user progress tracking, and personalized learning workflows — with a React.js and TypeScript frontend backed by Python REST APIs.",
      "Developed scalable backend services in Python to power progress tracking and content-recommendation logic for the education platform.",
      "Launched the platform's first revenue stream by integrating Stripe end to end, implementing idempotent, webhook-driven payment flows in Node.js that required no manual reconciliation.",
      "Improved global performance by introducing edge caching and CDN optimization for media assets, cutting page-load times by 40% and origin infrastructure costs by 25%.",
      "Set up observability with AWS CloudWatch and Grafana dashboards to monitor API latency, system health, and error rates, reducing mean time to resolution by 40%."
    ],
    duration: "May 2025 - Aug. 2025",
    location: "San Jose,USA",
  },
  {
    companyName: "AFour Technologies",
    desingation: "Trainee Software Engineer",
    companyLogo: "afour_technologies_logo.png",
    desc: [
      "Designed and built Java Spring Boot microservices using an asynchronous, event-driven architecture with message queues, scaling ingestion throughput 4x by decoupling background processing from the request path.",
      "Built additional backend services in Python and JavaScript on AWS and reduced distributed-microservice API response latency by 20% through profiling and targeted optimization.",
      "Established CI/CD pipelines for the Spring Boot services with Jenkins and Docker, adding automated test gates to catch regressions before release and reduce manual deployment overhead.",
      "Instrumented services with distributed tracing and OpenTelemetry and centralized logs and metrics in CloudWatch and Grafana dashboards, speeding production root-cause isolation 3x.",
      "Hardened backend authentication and the PostgreSQL data layer with parameterized queries and stateless token verification, cutting unauthorized-access attempts by 95%.",
      "Redesigned multi-region state synchronization around eventual-consistency guarantees to cut cross-region message-delivery latency by 60%, working in an Agile, cross-functional team."
    ],
    duration: "Mar 2023 - Mar 2024",
    location: "Pune,India",
  },
  {
    companyName: "Digilytics Systems LLP",
    desingation: "FullStack Developer Intern",
    companyLogo: "digilytics.png",
    desc: [
      "Built a no-code website builder with a React frontend and REST APIs, enabling 500+ small businesses to launch webpages and lifting client sales by about 20%.",
      "Implemented Redis caching and optimized PostgreSQL storage schemas to reduce repeated database queries under peak load and keep response times low.",
      "Containerized the application and set up Docker-based CI/CD, accelerating release cycles 2x by removing error-prone manual deployment steps.",
      "Wrote Jest test suites and followed Git-based version control to maintain code quality across the team."
    ],
    duration: "Dec 2021 - May 2022",
    location: "Pune,India",
  },
];

export const education = [
  {
    name: "San Diego State University",
    duration: "Aug 2024 - May 2026",
    logo: "sdsu.png",
    caption: "Courses Taken",
    desc: [
      "Algorithms Analysis",
      "Machine Learning",
      "Database Theory & Implementation",
    ],
    location: "San Diego, California",
  },
  {
    name: "Savitribai Phule Pune University",
    duration: "Jun 2019 - May 2023",
    logo: "sppu.jpeg",
    caption: "Courses Taken",
    desc: [
      "Data Structures and Algorithms",
      "Software Engineering",
      "Data Science and Big Data Analytics",
      "Machine Learning",
      "Systems Programming and Operating Systems",
    ],
    location: "Pune,India",
  },
];

export const projects = [
  {
    name: "Rootlens AI",
    desc: "• Architected a scalable observability pipeline with FastAPI and Go microservices, streaming high-volume logs and traces through Kafka to detect anomalies and correlate cross-service failures. Containerized the services with Docker for reproducible local and cloud deployment, reducing MTTR in simulated incident scenarios.",
    tags: ["Observability", "GoLang"],
    link: "https://github.com/dhairya2001/RootLensAI",
  },
  {
    name: "BudgetWise",
    desc: "Built a full-stack expense-management application with a React and Redux frontend and a Node.js/Express backend, helping users track budgets and trim monthly spending by about 10%. Designed RESTful APIs and modeled data in MongoDB to support real-time updates, category breakdowns, and smooth data flow. Implemented a responsive React UI with client-side state management for a consistent experience across devices.",
    tags: ["ReactJS", "ExpressJS", "MongoDB"],
    link: "https://github.com/dhairya2001/EMS-Frontend"
  },
  {
    name: "Healthcare Information Exchange",
    desc: "Built Web3.js-based smart contracts to securely authorize patient data access, improving backend reliability. Developed a secure patient data exchange system using React Native for the frontend, and MetaMask for secure transactions, reducing data breaches by 15% and increasing user verification accuracy by 25% through secure SQL integration.",
    tags: ["Research Paper", "Smart Contract", "Blockchain"],
    link: "https://link.springer.com/chapter/10.1007/978-981-99-2322-9_8",
  },
  {
    name: "Sentiment Analysis on Twitter Data",
    desc: "A machine learning model using TensorFlow to classify tweets as positive, negative, or neutral, integrated with AWS for real-time sentiment analysis and social media monitoring.",
    tags: ["Python", "TensorFlow" , "AWS"],
    link: "https://github.com/dhairya2001/Sentiment-Analysis"
  }
];

export const dev = [
  {
    img: "web.png",
    title: "Software Engineer",
  },
  {
    img: "data.png",
    title: "Data Engineer",
  },
  {
    img: "app.png",
    title: "Application Developer",
  },
];

export const mobileView = "600px";
export const desktopWidth = "1000px";
