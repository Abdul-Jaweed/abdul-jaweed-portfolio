import {
  Profile,
  SkillCategory,
  Experience,
  Project,
  Achievement,
  CourseCertification,
  Education,
  BlogArticle,
  SystemNode,
  SystemFlowStep,
} from '../types';

export const profileData: Profile = {
  name: 'Abdul Jaweed',
  title: 'AI Engineer',
  headline: 'Specializing in Enterprise AI Platforms, Knowledge Graph Engineering, GraphRAG, Multi-Agent Systems & MLOps Infrastructure',
  contact: {
    phone: '+91 6302508428',
    email: 'jdgaming7320@gmail.com',
    website: 'https://abduljaweed.in',
    github: 'https://github.com/Abdul-Jaweed',
    linkedin: 'https://www.linkedin.com/in/abdul-jaweed-datascientist/',
    location: 'Hyderabad, India',
  },
  summary:
    'AI Engineer with 3+ years of experience designing and building enterprise AI applications, knowledge graph systems, and production-grade AI platforms. Experienced in Knowledge Graph Engineering, ontology and taxonomy modeling, graph topology, entity-relationship modeling, data granularity, and graph-based knowledge representation using Neo4j, Cypher, Graph Data Science (GDS), and APOC. Specialized in GraphRAG, graph-based memory systems, LLM-powered applications, AI agents, and Retrieval-Augmented Generation (RAG) using Python, FastAPI, LangGraph, and modern AI frameworks. Skilled in integrating structured and unstructured data with LLMs, developing secure and scalable APIs, and building multi-tenant AI systems with authentication, authorization, observability, and production-grade backend infrastructure. Passionate about engineering reliable, scalable, and maintainable AI solutions that transform complex data into actionable intelligence.',
  highlights: [
    '3+ Years Building Enterprise AI Applications, Knowledge Graph Systems & Production Platforms',
    'Specialist in Knowledge Graph Engineering: Neo4j, Cypher, GDS, APOC, Ontology & Taxonomy Modeling',
    'Expert in GraphRAG, LangGraph Multi-Agent Architectures, Model Context Protocol (MCP) & SSE Streaming',
    'Creator of DataHek OSS (Universal Conversational Data Platform) & MLFast-OSS (Unified MLOps Platform)',
    'Author of Published MLFAST Python Machine Learning Library on PyPI',
    'Enterprise Security & Cloud: 6-Layer AI Guardrails, ZITADEL, Cerbos, Tyk Gateway, RLS, AWS & Bedrock',
  ],
};

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', category: 'programming', level: 'Expert', featured: true },
      { name: 'SQL', category: 'programming', level: 'Expert', featured: true },
      { name: 'Pandas', category: 'programming', level: 'Expert', featured: true },
      { name: 'NumPy', category: 'programming', level: 'Expert', featured: true },
      { name: 'Data Preprocessing', category: 'programming', level: 'Expert' },
      { name: 'Text Cleaning', category: 'programming', level: 'Expert' },
    ],
  },
  {
    id: 'ml-nlp',
    title: 'Machine Learning & NLP',
    skills: [
      { name: 'scikit-learn', category: 'ml-nlp', level: 'Expert', featured: true },
      { name: 'Classification', category: 'ml-nlp', level: 'Expert' },
      { name: 'Regression', category: 'ml-nlp', level: 'Expert' },
      { name: 'Feature Engineering', category: 'ml-nlp', level: 'Expert' },
      { name: 'Model Evaluation', category: 'ml-nlp', level: 'Expert' },
      { name: 'NLP', category: 'ml-nlp', level: 'Expert', featured: true },
      { name: 'Transformer Models', category: 'ml-nlp', level: 'Advanced', featured: true },
      { name: 'Text Summarization', category: 'ml-nlp', level: 'Advanced' },
    ],
  },
  {
    id: 'ai-llm',
    title: 'GenAI & LLM Engineering',
    skills: [
      { name: 'LLM Integration', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Prompt Engineering', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Semantic Search', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Hybrid Search', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Retrieval & Reranking', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Vector Search', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Context Engineering', category: 'ai-llm', level: 'Expert' },
      { name: 'Embeddings', category: 'ai-llm', level: 'Expert' },
      { name: 'RAG', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'GraphRAG', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Semantic Retrieval', category: 'ai-llm', level: 'Expert' },
      { name: 'Conversational AI', category: 'ai-llm', level: 'Expert' },
      { name: 'Agent Evaluation', category: 'ai-llm', level: 'Advanced' },
    ],
  },
  {
    id: 'orchestration',
    title: 'Agents & Orchestration',
    skills: [
      { name: 'LangGraph', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'LangChain', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'Agentic Architecture', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'Multi-Agent Systems', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'Tool / Function Calling', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'Model Context Protocol (MCP)', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'SSE Streaming', category: 'orchestration', level: 'Expert', featured: true },
      { name: 'Workflow Orchestration', category: 'orchestration', level: 'Expert' },
    ],
  },
  {
    id: 'knowledge-graphs',
    title: 'Knowledge Graphs & Semantic Engineering',
    skills: [
      { name: 'Knowledge Graphs', category: 'knowledge-graphs', level: 'Expert', featured: true },
      { name: 'Neo4j', category: 'knowledge-graphs', level: 'Expert', featured: true },
      { name: 'Cypher / OpenCypher', category: 'knowledge-graphs', level: 'Expert', featured: true },
      { name: 'Graph Data Modeling', category: 'knowledge-graphs', level: 'Expert', featured: true },
      { name: 'Taxonomy', category: 'knowledge-graphs', level: 'Expert' },
      { name: 'Ontology', category: 'knowledge-graphs', level: 'Expert' },
      { name: 'Semantic Modeling', category: 'knowledge-graphs', level: 'Expert' },
      { name: 'Semantic Enrichment', category: 'knowledge-graphs', level: 'Expert' },
      { name: 'Graph Data Science (GDS)', category: 'knowledge-graphs', level: 'Advanced' },
      { name: 'APOC Procedures', category: 'knowledge-graphs', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API Engineering',
    skills: [
      { name: 'FastAPI', category: 'backend', level: 'Expert', featured: true },
      { name: 'REST APIs', category: 'backend', level: 'Expert', featured: true },
      { name: 'Server-Sent Events (SSE)', category: 'backend', level: 'Expert', featured: true },
      { name: 'Pydantic', category: 'backend', level: 'Expert', featured: true },
      { name: 'SQLAlchemy', category: 'backend', level: 'Expert' },
      { name: 'Alembic', category: 'backend', level: 'Advanced' },
      { name: 'Celery', category: 'backend', level: 'Advanced' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data Engineering',
    skills: [
      { name: 'PostgreSQL', category: 'databases', level: 'Expert', featured: true },
      { name: 'Redis', category: 'databases', level: 'Expert', featured: true },
      { name: 'MongoDB', category: 'databases', level: 'Advanced', featured: true },
      { name: 'pgvector', category: 'databases', level: 'Expert', featured: true },
      { name: 'Qdrant', category: 'databases', level: 'Expert', featured: true },
      { name: 'S3', category: 'databases', level: 'Advanced' },
      { name: 'Pandas', category: 'databases', level: 'Advanced' },
      { name: 'NumPy', category: 'databases', level: 'Advanced' },
    ],
  },
  {
    id: 'security',
    title: 'Identity, Security & API Management',
    skills: [
      { name: 'ZITADEL', category: 'security', level: 'Expert', featured: true },
      { name: 'Cerbos', category: 'security', level: 'Expert', featured: true },
      { name: 'Tyk API Gateway', category: 'security', level: 'Expert', featured: true },
      { name: 'OAuth 2.0', category: 'security', level: 'Expert', featured: true },
      { name: 'OpenID Connect (OIDC)', category: 'security', level: 'Expert' },
      { name: 'JWT Authentication', category: 'security', level: 'Expert' },
      { name: 'Role-Based Access Control (RBAC)', category: 'security', level: 'Expert' },
      { name: 'Policy-as-Code', category: 'security', level: 'Expert' },
      { name: 'Row-Level Security (RLS)', category: 'security', level: 'Expert' },
      { name: 'API Security', category: 'security', level: 'Expert' },
    ],
  },
  {
    id: 'observability',
    title: 'Observability & Monitoring',
    skills: [
      { name: 'OpenTelemetry', category: 'observability', level: 'Expert', featured: true },
      { name: 'Langfuse', category: 'observability', level: 'Expert', featured: true },
      { name: 'Vector', category: 'observability', level: 'Advanced' },
      { name: 'Structured Logging', category: 'observability', level: 'Expert' },
      { name: 'Metrics and Traces', category: 'observability', level: 'Expert' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & MLOps',
    skills: [
      { name: 'Docker', category: 'devops', level: 'Expert', featured: true },
      { name: 'Docker Compose', category: 'devops', level: 'Expert', featured: true },
      { name: 'Git', category: 'devops', level: 'Expert', featured: true },
      { name: 'GitHub Actions', category: 'devops', level: 'Expert', featured: true },
      { name: 'Railway Cloud', category: 'devops', level: 'Expert' },
      { name: 'Experiment Tracking', category: 'devops', level: 'Advanced' },
      { name: 'Model Deployment', category: 'devops', level: 'Advanced' },
    ],
  },
  {
    id: 'aws',
    title: 'AWS Cloud & Infrastructure',
    skills: [
      { name: 'IAM', category: 'aws', level: 'Expert' },
      { name: 'S3', category: 'aws', level: 'Expert' },
      { name: 'EC2', category: 'aws', level: 'Advanced' },
      { name: 'ECR', category: 'aws', level: 'Advanced' },
      { name: 'AWS Bedrock', category: 'aws', level: 'Expert', featured: true },
      { name: 'Lambda', category: 'aws', level: 'Advanced' },
      { name: 'VPC', category: 'aws', level: 'Advanced' },
      { name: 'Subnets', category: 'aws', level: 'Advanced' },
      { name: 'NAT Gateway & Internet Gateway', category: 'aws', level: 'Advanced' },
      { name: 'Route Tables', category: 'aws', level: 'Advanced' },
      { name: 'Application Load Balancer (ALB)', category: 'aws', level: 'Advanced' },
      { name: 'WAF', category: 'aws', level: 'Advanced' },
      { name: 'VPC Peering & Transit Gateway', category: 'aws', level: 'Advanced' },
      { name: 'API Gateway', category: 'aws', level: 'Advanced' },
    ],
  },
  {
    id: 'finetuning',
    title: 'LLM-Finetuning',
    skills: [
      { name: 'LoRA', category: 'finetuning', level: 'Advanced', featured: true },
      { name: 'QLoRA', category: 'finetuning', level: 'Advanced', featured: true },
      { name: 'Distillation', category: 'finetuning', level: 'Advanced' },
      { name: 'RLHF', category: 'finetuning', level: 'Advanced' },
      { name: 'DPO', category: 'finetuning', level: 'Advanced' },
    ],
  },
  {
    id: 'ai-coding',
    title: 'AI Coding & Agentic Development',
    skills: [
      { name: 'Cursor', category: 'ai-coding', level: 'Expert', featured: true },
      { name: 'Claude Code', category: 'ai-coding', level: 'Expert', featured: true },
      { name: 'Codex', category: 'ai-coding', level: 'Advanced' },
      { name: 'OpenCode', category: 'ai-coding', level: 'Advanced' },
      { name: 'Antigravity', category: 'ai-coding', level: 'Advanced' },
      { name: 'Hermes Agent', category: 'ai-coding', level: 'Advanced' },
    ],
  },
];

export const experiencesData: Experience[] = [
  {
    id: 'human-managed',
    company: 'Human Managed',
    role: 'AI Engineer',
    location: 'Singapore',
    period: '11/2024 – 09/2026',
    isCurrent: false,
    techStack: [
      'Python',
      'FastAPI',
      'SSE',
      'MCP',
      'AWS Bedrock',
      'LiteLLM',
      'LangGraph',
      'Neo4j',
      'Cypher',
      'GraphRAG',
      'PostgreSQL',
      'pgvector',
      'Qdrant',
      'Redis',
      'Azure OpenAI',
      'OpenTelemetry',
      'Row-Level Security (RLS)',
    ],
    responsibilities: [
      'Built a production AI security assistant using Python, FastAPI, SSE, MCP, AWS Bedrock, and LiteLLM for grounded, explainable enterprise responses.',
      'Designed agentic AI architectures and multi-agent workflows using LangGraph, tool orchestration, conversational memory, and context management.',
      'Integrated Model Context Protocol (MCP) servers with agentic AI workflows to enable standardized tool integration and contextual access to enterprise capabilities.',
      'Integrated Azure OpenAI models and Azure AI Services into LLM-powered applications for model inference, prompt orchestration, and enterprise AI workflows.',
      'Implemented six-layer AI guardrails covering input classification, risk scoring, tool sanitization, prompt hardening, output validation, and entitlement checks.',
      'Engineered Redis-backed conversational memory with server-side context assembly and token-budget controls for optimized latency and inference costs.',
      'Designed a Memory-as-a-Service platform using FastAPI, PostgreSQL/pgvector, Qdrant, and Redis for reusable short- and long-term agent memory.',
      'Developed agentic AI and multi-agent workflows using LangGraph, tool integration, and checkpointing to support orchestrated AI tasks.',
      'Built pluggable Knowledge Graph Memory using Neo4j, Cypher/OpenCypher, and APOC, with graph data modeling, taxonomy, ontology, entity resolution, and GraphRAG.',
      'Optimized Neo4j graph database workloads using Cypher query optimization, indexing, traversal optimization, and APOC procedures.',
      'Implemented enterprise security and reliability using RLS, JWT/API keys, JSON Schema validation, quotas, retention workflows, and LangGraph checkpointing.',
      'Delivered enterprise RAG and asset-intelligence platforms enabling grounded knowledge access, asset discovery, and graph-based relationship analysis.',
      'Supported AI deployment and production operations through containerized services, API integrations, monitoring, and observability.',
      'Supported Azure-based and AWS-based AI deployment by integrating model endpoints with backend APIs, configuration management, authentication, and production application workflows.',
    ],
    keyAchievements: [
      'Production AI Security Assistant deployed with 6-layer guardrails over AWS Bedrock & LiteLLM.',
      'Engineered Knowledge Graph Memory & GraphRAG with Neo4j, Cypher, and APOC for deep relationship analysis.',
      'Designed Memory-as-a-Service (MaaS) platform with PostgreSQL/pgvector, Qdrant, Redis & RLS.',
      'Delivered enterprise RAG & asset-intelligence platforms supporting grounded discovery workflows.',
    ],
  },
  {
    id: 'capital-placement',
    company: 'Capital Placement',
    role: 'Junior AI Engineer',
    location: 'United Kingdom',
    period: '11/2023 – 10/2024',
    isCurrent: false,
    projectTitle: 'Candidate Recommendation AI & Automated Interviewer',
    techStack: [
      'Python',
      'OpenAI APIs',
      'Llama 3',
      'Mistral',
      'Phi-3',
      'Gemma',
      'Azure Functions',
      'LangChain',
      'LlamaIndex',
      'MCP',
      'REST APIs',
      'NLP',
    ],
    responsibilities: [
      'Built AI-powered candidate recommendation and screening workflows using OpenAI APIs and open-source LLMs, including Llama 3, Mistral, Phi-3, and Gemma, incorporating prompt engineering and structured outputs.',
      'Developed data preprocessing and text-cleaning pipelines for job descriptions and candidate profiles to support AI-driven candidate matching.',
      'Developed backend APIs and integrated LLM capabilities into HR technology workflows, including tool/function calling and AI application integrations.',
      'Implemented agentic AI and multi-agent workflow patterns for candidate screening and interview automation, where applicable.',
      'Deployed AI services using Azure Functions, supporting cloud-based AI application delivery and deployment workflows.',
      'Built an AI-powered interviewer that conducted automated 10-minute candidate interviews and supported candidate screening without human intervention.',
      'Automated candidate shortlisting and interview-based screening workflows to improve recruitment efficiency.',
      'Explored MCP integration and AI orchestration frameworks, including LangChain and LlamaIndex, to support extensible LLM application architectures, where implemented.',
    ],
    keyAchievements: [
      'Built an AI-powered interviewer conducting automated 10-minute candidate interviews with actionable screening insights.',
      'Automated candidate shortlisting & screening workflows, significantly improving recruitment efficiency.',
      'Deployed serverless AI recommendation APIs with Azure Functions, Llama 3, Mistral, and OpenAI.',
    ],
  },
  {
    id: 'margdarshan',
    company: 'Margdarshan',
    role: 'Data Scientist',
    location: 'India',
    period: '06/2023 – 11/2023',
    isCurrent: false,
    projectTitle: 'Generative AI Q&A Chatbot & BART Text Summarization',
    techStack: [
      'Python',
      'OpenAI API',
      'Hugging Face APIs',
      'BART (facebook/bart-large-cnn)',
      'CI/CD Pipelines',
      'LangChain',
      'MCP',
      'NLP',
    ],
    responsibilities: [
      'Built a Generative AI Q&A chatbot using OpenAI and Hugging Face APIs, enabling natural-language question answering and conversational AI capabilities.',
      'Implemented an NLP text-summarization pipeline using Hugging Face’s facebook/bart-large-cnn transformer model and integrated CI/CD automation for repeatable delivery.',
      'Evaluated and refined Q&A and summarization workflows through testing to improve response quality, reliability, and user experience.',
      'Explored agentic AI workflows, multi-agent orchestration, and MCP integration to support extensible AI application architectures.',
      'Supported AI application deployment and CI/CD workflows, focusing on reliable delivery and maintainable backend integrations.',
      'Collaborated with cross-functional stakeholders to translate business requirements into AI-powered solutions aligned with project objectives.',
    ],
    keyAchievements: [
      'Integrated Hugging Face BART transformer model into production CI/CD pipelines for automated text summarization.',
      'Built conversational Generative AI Q&A chatbot with high response accuracy and low latency.',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'datahek-oss',
    title: 'DataHek OSS',
    subtitle: 'Universal Conversational Data Platform',
    category: 'AI Infra',
    status: 'Active Development',
    description:
      'DataHek-OSS is an open-source agentic platform that converts natural-language questions into validated, read-only SQL queries against live databases. It combines LLM-based planning with deterministic validation, guardrails, auditing, data masking, and real-time streaming.',
    techStack: [
      'Python',
      'FastAPI',
      'MCP',
      'Agent Skills',
      'Multi-Agent Systems',
      'Neo4j',
      'Knowledge Graphs',
      'PostgreSQL',
      'Redis',
      'Infisical',
      'ClickHouse',
      'Server-Sent Events (SSE)',
    ],
    isOpenSource: true,
    featured: true,
    githubUrl: 'https://github.com/Abdul-Jaweed',
    contributions: [
      'Built the end-to-end agent pipeline covering schema discovery, LLM planning, deterministic validation, guardrails, auditing, masking, streaming, and retry recovery.',
      'Built a Neo4j schema knowledge graph using taxonomy, ontology, topology, and granularity to enrich agent context and improve SQL reasoning.',
      'Developed provider-agnostic Logical Query Plans (LQP) with ClickHouse and PostgreSQL connectors and dialect-specific validation.',
      'Implemented real-time SSE streaming with live pipeline progress across connection, planning, execution, and explanation stages.',
      'Implemented SSE streaming, PostgreSQL persistence, Redis configuration, and Infisical secret management.',
    ],
    architectureHighlights: [
      'Deterministic SQL Plan Validation with Automatic LLM Retry Recovery',
      'Neo4j Schema Knowledge Graph with Taxonomy, Ontology & Granularity',
      'Provider-Agnostic Logical Query Plans (LQP) for ClickHouse & PostgreSQL',
      'Real-Time SSE Streaming Across Connection, Planning, Execution & Explanation',
      'PostgreSQL Persistence, Redis Config, and Infisical Secret Management',
    ],
  },
  {
    id: 'mlfast-oss',
    title: 'MLFast-OSS',
    subtitle: 'Unified MLOps Platform (OpenSource Soon)',
    category: 'MLOps',
    status: 'OpenSource Soon',
    description:
      'Designed and built an end-to-end, multi-tenant MLOps platform that unifies the machine learning lifecycle—from dataset management and model training to evaluation, deployment, monitoring, and automated retraining—through a consistent API, Python SDK, CLI, and web interface.',
    techStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'RustFS / S3',
      'Celery',
      'Next.js',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Playwright',
    ],
    isOpenSource: true,
    featured: true,
    githubUrl: 'https://github.com/Abdul-Jaweed',
    contributions: [
      'End-to-End ML Lifecycle: Architected versioned dataset management with checksums, experiment tracking, model training and hyperparameter optimization, evaluation quality gates, model registry with approval workflows, versioned pipeline DAGs, model serving, drift monitoring, and policy-driven automated retraining.',
      'Unified Platform Architecture: Developed a typed Python SDK, CLI, and Next.js control plane around a shared resource model, enabling consistent ML workflows across programmatic, command-line, and web interfaces.',
      'CI/CD & Automated Quality Gates: Implemented GitHub Actions pipelines for linting, type checking, automated testing, API contract validation, generated TypeScript types, infrastructure validation, Kubernetes integration tests, software bill of materials (SBOM), dependency security scanning, and frontend bundle budgets.',
      'Testing & Reliability: Established 1,729 automated tests across the backend and SDK, 14 Playwright end-to-end specifications, and 41 database schema migrations with automated migration-safety checks.',
      'Security & Governance: Implemented multi-tenant authentication and authorization using API keys, JWT, RBAC, quotas, versioned policy management with simulation, tamper-evident audit trails, and production configuration checks to prevent insecure deployments.',
      'Deployment & Operations: Packaged the platform using Docker Compose with PostgreSQL, Redis, S3-compatible RustFS, and Celery workers; added Kubernetes manifests, Terraform infrastructure definitions, and disaster-recovery tooling with tested backup and restore procedures.',
    ],
    architectureHighlights: [
      '1,729 Automated Tests, 14 Playwright E2E Specs & 41 Safe Migrations',
      'Unified Control Plane across Typed Python SDK, CLI, and Next.js Web UI',
      'Full-Lifecycle DAGs: Versioned Datasets, Training, Quality Gates & Drift Retraining',
      'Multi-Tenant Governance with API Keys, JWT, RBAC, Quotas & Audit Trails',
      'Infrastructure as Code with Docker Compose, Kubernetes, and Terraform',
    ],
  },
  {
    id: 'mlfast',
    title: 'MLFAST',
    subtitle: 'Python Machine Learning Library on PyPI',
    category: 'Open Source',
    status: 'Published PyPI Package',
    description:
      'Developed and published an open-source Python ML library on PyPI, simplifying regression and classification workflows through a high-level API with just 4 to 5 words of code.',
    techStack: [
      'Python',
      'Scikit-learn',
      'GitHub Actions',
      'CircleCI',
      'PyPI Package',
      'Pandas',
      'NumPy',
    ],
    isOpenSource: true,
    featured: true,
    githubUrl: 'https://github.com/Abdul-Jaweed',
    contributions: [
      'Developed and published an open-source Python ML library on PyPI, simplifying regression and classification workflows through a high-level API.',
      'Integrated multiple machine learning algorithms, including linear regression, decision trees, random forests, SVM, and gradient boosting.',
      'Implemented configurable feature scaling using StandardScaler and RobustScaler.',
      'Added categorical feature handling through one-hot encoding.',
      'Enabled hyperparameter optimization to support model configuration and experimentation.',
      'Designed reusable interfaces to reduce boilerplate code and simplify model development.',
    ],
    architectureHighlights: [
      'High-Level 4-to-5 Word Modeling API over Scikit-Learn',
      'Configurable Feature Scaling (StandardScaler, RobustScaler) & One-Hot Encoding',
      'Automated Multi-Stage CI/CD Deployment with GitHub Actions and CircleCI',
      'Seamless Hyperparameter Optimization for Regression and Classification',
    ],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'ml-hackathon',
    title: 'Machine Learning Hackathon — Top 10% Ranker',
    organization: 'ML Hackathon & Assessment Test',
    date: '02/2023',
    location: 'Hyderabad, India',
    description:
      'Achieved selection as a data science intern after successfully competing against over 7000+ participants in an ML hackathon and assessment test, ranking among the top 10 percent.',
    metric: 'Top 10% out of 7,000+ competitors',
    badge: 'Hackathon Award',
  },
  {
    id: 'pypi-mlfast',
    title: 'Creator & Maintainer of Published PyPI Package (mlfast)',
    organization: 'Python Software Foundation / PyPI',
    date: '2024',
    location: 'Global',
    description:
      'Developed, packaged, and published the open-source MLFAST library on PyPI, providing high-level abstraction layers that simplify model training pipelines down to 4-5 words of code.',
    metric: 'Published Open-Source Library',
    badge: 'PyPI Package',
  },
];

export const certificationsData: CourseCertification[] = [
  {
    id: 'ml-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'Deeplearning.ai',
    platform: 'Coursera',
    period: '07/2022 – 10/2022',
  },
  {
    id: 'mlops-specialization',
    title: 'MLOps Specialization',
    issuer: 'Duke University',
    platform: 'Coursera',
    period: '06/2023 – 08/2023',
  },
];

export const educationData: Education[] = [
  {
    id: 'bcom',
    degree: 'Bachelor of Commerce in Computer Applications',
    institution: 'Government Degree College Khairatabad',
    location: 'Hyderabad, India',
    period: '06/2019 – 07/2022',
    cgpa: '7.82 / 10',
    highlights: [
      'Specialized in Computer Applications, Database Systems, and Software Fundamentals.',
      'Graduated with Cumulative CGPA of 7.82 / 10.',
    ],
  },
];

export const blogArticlesData: BlogArticle[] = [
  {
    id: 'neo4j-graphrag-memory',
    title: 'Knowledge Graph Engineering & GraphRAG: Enhancing LLM Reasoning with Neo4j & Cypher',
    excerpt:
      'How to build pluggable Knowledge Graph Memory using Neo4j, Cypher, and APOC. A deep dive into ontology, taxonomy modeling, entity resolution, and topological graph traversal for enterprise RAG.',
    category: 'Knowledge Graphs & GraphRAG',
    date: '2025-02-20',
    readTime: '9 min read',
    tags: ['Neo4j', 'Cypher', 'GraphRAG', 'Knowledge Graphs', 'APOC'],
    content: `
# Knowledge Graph Engineering & GraphRAG: Enhancing LLM Reasoning with Neo4j

Standard vector-based RAG retrieves disjoint chunks based on semantic similarity. But enterprise intelligence requires understanding complex relationships, topologies, and hierarchies.

## Why Knowledge Graphs for LLM Reasoning
1. **Entity-Relationship Modeling**: Modeling entities as nodes and relationships as typed edges enables deterministic multi-hop reasoning.
2. **Taxonomy & Ontology**: Structuring domain concepts hierarchically allows agents to disambiguate terms across different levels of data granularity.
3. **GraphRAG in Production**: Combining Cypher query optimization, index lookups, and APOC graph traversal procedures provides grounded context that eliminates hallucinations.

## Architecture at Scale
- **Schema Discovery & Mapping**: Dynamically mapping relational schemas into Neo4j graph nodes.
- **Pluggable Memory**: Integrating graph memory directly into LangGraph agent loops for persistent contextual grounding.
    `,
  },
  {
    id: 'mlfast-oss-architecture',
    title: 'Architecting MLFast-OSS: An End-to-End Multi-Tenant MLOps Platform',
    excerpt:
      'Designing an MLOps platform unifying dataset versioning, training DAGs, model registries, drift monitoring, and policy-driven automated retraining with 1,729 automated tests.',
    category: 'MLOps Architecture',
    date: '2025-01-18',
    readTime: '11 min read',
    tags: ['MLOps', 'FastAPI', 'Celery', 'Docker', 'Kubernetes', 'Terraform'],
    content: `
# Architecting MLFast-OSS: Unified MLOps Platform

Machine learning teams frequently suffer from fragmentation: datasets live in S3, training happens in notebooks, and models are served ad-hoc without drift monitoring.

## Core Pillars of MLFast-OSS
1. **Unified Resource Model**: Shared state across a typed Python SDK, command-line interface, and Next.js web control plane.
2. **Quality Gates & Governance**: Automated GitHub Actions pipelines verifying 1,729 tests, 14 Playwright E2E specs, and 41 database schema migrations with automated safety checks.
3. **Multi-Tenant Security**: API key and JWT authentication, RBAC, quota policies with real-time simulation, and tamper-evident audit trails.
    `,
  },
  {
    id: 'datahek-sql-agents',
    title: 'Building Enterprise Multi-Agent SQL Workflows with LangGraph, MCP & Neo4j',
    excerpt:
      'How to convert natural language into validated, read-only SQL queries against ClickHouse and PostgreSQL using deterministic validation and Neo4j schema graphs.',
    category: 'Multi-Agent Systems',
    date: '2024-12-10',
    readTime: '10 min read',
    tags: ['ClickHouse', 'LangGraph', 'Neo4j', 'MCP', 'FastAPI'],
    content: `
# Building Enterprise Multi-Agent SQL Workflows

Executing LLM-generated SQL queries on production databases requires rigorous security:
1. **Neo4j Schema Graph**: Enriches agent context with topological entity connections before query planning.
2. **Logical Query Plans (LQP)**: Provider-agnostic AST query representation compiling down to ClickHouse or PostgreSQL.
3. **Deterministic Guardrails & Auditing**: Blocking mutations, enforcing read-only permissions, and streaming real-time progress via SSE.
    `,
  },
];

export const architectureNodesData: SystemNode[] = [
  {
    id: 'user-client',
    name: 'Client App / Agent SDK',
    type: 'agent',
    description: 'Web UI, typed Python SDK (`mlfast`), or MCP Client sending natural language queries or model jobs.',
    status: 'active',
  },
  {
    id: 'tyk-gateway',
    name: 'Tyk API Gateway',
    type: 'gateway',
    description: 'Centralized API gateway routing, JWT validation, rate limiting, and Server-Sent Events (SSE) streaming proxy.',
    status: 'active',
  },
  {
    id: 'zitadel-cerbos',
    name: 'ZITADEL & Cerbos Policy-as-Code',
    type: 'auth',
    description: 'OIDC/OAuth 2.0 authentication and fine-grained Role-Based Access Control (RBAC) authorization rules.',
    status: 'active',
  },
  {
    id: 'litellm-proxy',
    name: 'LiteLLM Gateway & AWS Bedrock',
    type: 'gateway',
    description: 'Unified model routing across AWS Bedrock, Azure OpenAI, and open-source models with prompt injection screening.',
    status: 'active',
  },
  {
    id: 'langgraph-supervisor',
    name: 'LangGraph Multi-Agent Orchestration',
    type: 'agent',
    description: 'Agentic state graph coordinating Schema Discovery, LLM Planning, Deterministic Validation, and Retry Recovery.',
    status: 'active',
  },
  {
    id: 'neo4j-graph',
    name: 'Neo4j Schema Knowledge Graph & GraphRAG',
    type: 'database',
    description: 'Graph data modeling with Cypher, APOC, taxonomy, and ontology for topological context enrichment and entity resolution.',
    status: 'active',
  },
  {
    id: 'database-engine',
    name: 'PostgreSQL 16 (pgvector) & ClickHouse OLAP',
    type: 'database',
    description: 'PostgreSQL with Row-Level Security (RLS) for multi-tenant state and vectors; ClickHouse for lightning-fast OLAP queries.',
    status: 'active',
  },
  {
    id: 'langfuse-otel',
    name: 'Langfuse & OpenTelemetry Tracing',
    type: 'observability',
    description: 'Real-time distributed tracing, prompt versioning, token budget tracking, and latency telemetry.',
    status: 'active',
  },
];

export const architectureFlowStepsData: SystemFlowStep[] = [
  {
    stepNumber: 1,
    nodeId: 'user-client',
    action: 'Natural Language Input',
    payloadSample: 'Show quarterly active AI security sessions and anomalous latency spikes across enterprise tenants',
  },
  {
    stepNumber: 2,
    nodeId: 'tyk-gateway',
    action: 'JWT Validation & SSE Stream Init',
    payloadSample: 'Header: Bearer eyJhbGci... RateLimit: 60req/min OK. SSE stream initialized.',
  },
  {
    stepNumber: 3,
    nodeId: 'zitadel-cerbos',
    action: 'Evaluate Policy-as-Code & RLS Entitlements',
    payloadSample: 'Cerbos Check: Role "SecurityEngineer" authorized on Workspace "WS-Enterprise-01" with RLS tenant filter.',
  },
  {
    stepNumber: 4,
    nodeId: 'neo4j-graph',
    action: 'Neo4j Knowledge Graph Schema Enrichment',
    payloadSample: 'Cypher MATCH (t:Tenant)-[:OWNS]->(a:Asset) traversal. Enriched ontology and relationship context fetched in 8ms.',
  },
  {
    stepNumber: 5,
    nodeId: 'litellm-proxy',
    action: 'Model Selection & Guardrail Filtering',
    payloadSample: '6-layer guardrails passed: zero prompt injection detected. Dispatched to AWS Bedrock Anthropic Claude model.',
  },
  {
    stepNumber: 6,
    nodeId: 'langgraph-supervisor',
    action: 'LangGraph Multi-Agent Planning & Deterministic Validation',
    payloadSample: 'Generated provider-agnostic Logical Query Plan (LQP). Dialect validation verified read-only syntax; 0 mutation leaks.',
  },
  {
    stepNumber: 7,
    nodeId: 'database-engine',
    action: 'Execute Sandboxed Query (ClickHouse / PostgreSQL)',
    payloadSample: 'Query executed in 11ms on ClickHouse cluster. 18 rows returned with isolated tenant data masking.',
  },
  {
    stepNumber: 8,
    nodeId: 'langfuse-otel',
    action: 'Record Distributed Trace & Stream Explanation',
    payloadSample: 'Trace ID: tr-99214 | Prompt Tokens: 412 | Completion: 96 | Latency: 168ms | SSE stream completed.',
  },
];
