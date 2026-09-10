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
  headline: 'Specializing in Enterprise AI Platforms, LLM Agents, Multi-Tenant Systems & Production AI Infrastructure',
  contact: {
    phone: '+91 6302508428',
    email: 'jdgaming7320@gmail.com',
    website: 'https://abduljaweed.in',
    github: 'https://github.com/Abdul-Jaweed',
    linkedin: 'https://www.linkedin.com/in/abdul-jaweed-datascientist/',
    location: 'Hyderabad, India',
  },
  summary:
    'AI Engineer with 3+ years of experience designing and building enterprise AI applications, AI platforms, and production-grade backend systems. Specialized in LLM-powered applications, AI agents, Retrieval-Augmented Generation (RAG), multi-tenant SaaS architecture, and AI memory systems using Python and FastAPI. Experienced in integrating large language models, building secure APIs, developing AI infrastructure, and implementing observability, authentication, and authorization for production environments. Passionate about building reliable, scalable, and maintainable AI systems that solve real-world business problems.',
  highlights: [
    '3+ Years Building Enterprise AI Applications & Production Backend Systems',
    'Creator of DataHek OSS — Universal Conversational Data Platform',
    'Author of MLFAST Python Machine Learning Library & PyPI Package',
    'Specialist in LangGraph Multi-Agent Systems, RAG & Model Context Protocol (MCP)',
    'Enterprise Security & Cloud: ZITADEL, Cerbos, Tyk Gateway, RLS, AWS & Bedrock',
  ],
};

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', category: 'programming', level: 'Expert', featured: true },
    ],
  },
  {
    id: 'ai-llm',
    title: 'AI & LLM Engineering',
    skills: [
      { name: 'LangGraph', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'LangChain', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'LangSmith', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'LiteLLM', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'LLM Gateway', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Model Context Protocol (MCP)', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Retrieval-Augmented Generation (RAG)', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'AI Agents', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'Multi-Agent Systems', category: 'ai-llm', level: 'Expert', featured: true },
      { name: 'LLM Integration', category: 'ai-llm', level: 'Expert' },
      { name: 'Context Engineering', category: 'ai-llm', level: 'Expert' },
      { name: 'Agent Evaluation', category: 'ai-llm', level: 'Advanced' },
      { name: 'PyRIT', category: 'ai-llm', level: 'Advanced' },
      { name: 'MLflow', category: 'ai-llm', level: 'Advanced' },
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
      { name: 'Background Tasks', category: 'backend', level: 'Advanced' },
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
      { name: 'Amazon Web Services (AWS)', category: 'aws', level: 'Expert', featured: true },
      { name: 'IAM', category: 'aws', level: 'Expert' },
      { name: 'S3', category: 'aws', level: 'Expert' },
      { name: 'EC2', category: 'aws', level: 'Advanced' },
      { name: 'ECR', category: 'aws', level: 'Advanced' },
      { name: 'AWS Bedrock', category: 'aws', level: 'Expert', featured: true },
      { name: 'SageMaker', category: 'aws', level: 'Advanced' },
      { name: 'Lambda', category: 'aws', level: 'Advanced' },
      { name: 'VPC', category: 'aws', level: 'Advanced' },
      { name: 'Subnets', category: 'aws', level: 'Advanced' },
      { name: 'NAT & Internet Gateway', category: 'aws', level: 'Advanced' },
      { name: 'Route Tables', category: 'aws', level: 'Advanced' },
      { name: 'Application Load Balancer (ALB)', category: 'aws', level: 'Advanced' },
      { name: 'WAF', category: 'aws', level: 'Advanced' },
      { name: 'VPC Peering & Transit Gateway', category: 'aws', level: 'Advanced' },
      { name: 'API Gateway', category: 'aws', level: 'Advanced' },
      { name: 'Cognito & Verified Permissions', category: 'aws', level: 'Advanced' },
      { name: 'CloudWatch', category: 'aws', level: 'Advanced' },
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
      'Redis',
      'PostgreSQL',
      'pgvector',
      'Qdrant',
      'OpenTelemetry',
      'LangGraph',
      'JWT Auth',
      'Row-Level Security',
    ],
    responsibilities: [
      'Built a production AI security assistant using Python, FastAPI, SSE, MCP, AWS Bedrock, and LiteLLM, delivering grounded and explainable responses over approved enterprise data.',
      'Implemented six-layer AI guardrails covering input classification, session-risk scoring, tool-output sanitization, prompt hardening, output validation, and entitlement checks.',
      'Engineered Redis-backed short-term conversational memory with server-side context assembly, token-budget controls and managing context size, latency, and inference cost.',
      'Added OpenTelemetry tracing for LLM calls, MCP tools, request flows, latency, and failures.',
      'Designed a Memory-as-a-Service platform using FastAPI, PostgreSQL with pgvector, Qdrant, and Redis to provide reusable short-term and long-term memory for AI agents.',
      'Implemented row-level security, API-key/JWT authentication, JSON Schema validation, similarity search, quota controls, retention workflows, and LangGraph-compatible checkpoints.',
      'Developed an enterprise RAG chatbot for a financial-services client, providing grounded answers over approved organizational knowledge.',
      'Built an enterprise asset-intelligence platform supporting AI-assisted asset discovery, analysis, and operational workflows through secure APIs and LLM-powered interactions.',
    ],
    keyAchievements: [
      'Production AI Security Assistant deployed with 6-layer guardrails over AWS Bedrock.',
      'Designed Memory-as-a-Service (MaaS) platform with sub-50ms vector similarity recall & RLS.',
      'Enterprise RAG Chatbot built and deployed for financial-services client.',
    ],
  },
  {
    id: 'capital-placement',
    company: 'Capital Placement',
    role: 'Junior AI Engineer',
    location: 'United Kingdom',
    period: '11/2023 – 10/2024',
    isCurrent: false,
    projectTitle: 'Candidate Recommendation AI & AI Interviewer',
    techStack: [
      'Python',
      'OpenAI',
      'Open-source LLMs',
      'Azure Functions',
      'REST APIs',
      'NLP',
    ],
    responsibilities: [
      'Built AI-powered candidate recommendation and screening workflows using OpenAI and open-source LLMs.',
      'Developed APIs and deployed AI services using Azure Functions.',
      'Preprocessed job descriptions and candidate data to improve matching quality.',
      'Built an AI interviewer that conducted automated 10-minute candidate interviews and generated screening insights.',
    ],
    keyAchievements: [
      'Built AI Interviewer conducting automated 10-minute candidate interviews with actionable screening insights.',
      'Deployed serverless AI recommendation APIs via Azure Functions.',
    ],
  },
  {
    id: 'margdarshan',
    company: 'Margdarshan',
    role: 'Data Scientist',
    location: 'India',
    period: '06/2023 – 11/2023',
    isCurrent: false,
    projectTitle: 'Generative Q&A Chatbot & Text Summarization',
    techStack: [
      'Python',
      'OpenAI API',
      'HuggingFace API',
      'BART (facebook/bart-large-cnn)',
      'CI/CD',
      'NLP',
    ],
    responsibilities: [
      'Developed a Generative Q&A Chatbot for Margdarshan.',
      'Utilized OpenAI API and HuggingFace API for implementation.',
      'Successfully implemented Text Summarization using the HuggingFace model (facebook/bart-large-cnn) with CI/CD integration for automation.',
      'Collaborated with a cross-functional team to gather requirements and ensure alignment with project goals.',
      'Conducted thorough testing and refinement of the Generative Q&A Chatbot and Text Summarization solutions, ensuring optimal performance and user experience.',
    ],
    keyAchievements: [
      'Integrated HuggingFace BART summarization into production CI/CD pipelines.',
      'Delivered reliable generative Q&A conversational solutions for student guidance.',
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
      'An open-source agentic platform that converts natural language questions into validated, read-only SQL queries against live databases. The system plans queries with an LLM, validates them deterministically, enforces guardrails, audits every action, and streams answers to users with live progress. Designed with a contract-based architecture to support future enterprise extension.',
    techStack: [
      'Python',
      'FastAPI',
      'MCP',
      'Agent Skills',
      'Multi-Agent System',
      'GitHub Actions',
      'Infisical',
      'Redis',
      'PostgreSQL',
      'ClickHouse',
      'Server-Sent Events (SSE)',
    ],
    isOpenSource: true,
    featured: true,
    contributions: [
      'Developed the end-to-end agent pipeline including schema discovery, LLM planning, deterministic plan validation, guardrails, audit logging, data masking, and streamed responses, including a retry mechanism that recovers from invalid LLM-generated plans.',
      'Built four database connectors for ClickHouse and PostgreSQL all verified against live databases, using a provider-agnostic logical query plan that compiles to multiple SQL dialects with per-dialect function validation.',
      'Implemented real-time streaming with Server-Sent Events including live pipeline progress indicators across connecting, planning, executing, and explaining stages.',
      'Implemented production persistence and security including PostgreSQL metadata stores with Fernet encryption at rest, Redis-backed runtime settings, and Infisical secret management with secret reference resolution.',
    ],
    architectureHighlights: [
      'Deterministic SQL Plan Validation with Automatic LLM Retry Recovery',
      '4 Live-Verified ClickHouse & PostgreSQL Dialect Connectors',
      'Real-Time SSE Streaming with Multi-Stage Progress Tracking',
      'Infisical Secret Management & Fernet Encryption at Rest',
    ],
  },
  {
    id: 'mlfast',
    title: 'MLFAST',
    subtitle: 'Python Machine Learning Library on Scikit-Learn',
    category: 'MLOps',
    status: 'Open Source Package',
    description:
      'A Python machine learning library built on top of scikit-learn that provides a simple API for regression and classification modeling with just 4 to 5 words of code.',
    techStack: [
      'Python',
      'Scikit-learn',
      'CI/CD',
      'GitHub Actions',
      'PyPI Package',
      'Pandas',
      'NumPy',
    ],
    isOpenSource: true,
    featured: true,
    contributions: [
      'Designed to help new data enthusiasts implement regression and classification models easily.',
      'Built on top of Scikit-learn and features a simple API for complex algorithms with just 4 to 5 words of code.',
      'Future plans to include text and image preprocessing capabilities for NLP and CV tasks.',
      'Includes seamless deployment with popular CI/CD tools such as GitHub Actions.',
    ],
    architectureHighlights: [
      'High-Level 4-to-5 Word Modeling API over Scikit-Learn',
      'Automated CI/CD Deployment with GitHub Actions',
      'Extensible Architecture for Planned NLP & CV Preprocessing',
    ],
  },
  {
    id: 'flipkart-laptop-price',
    title: 'Flipkart Laptop Price Predictor',
    subtitle: 'Web Scraping & Hardware Spec Price Analytics',
    category: 'Open Source',
    status: 'Completed Project',
    description:
      'End-to-end data science project scraping laptop specifications from Flipkart and training ensemble ML regression models.',
    techStack: ['Python', 'BeautifulSoup', 'Scikit-Learn', 'Random Forest', 'XGBoost', 'SVR'],
    isOpenSource: true,
    featured: false,
    contributions: [
      'Scraped raw hardware data from Flipkart website.',
      'Engineered spec features (processor tier, RAM frequency, SSD bus speed, display panel).',
      'Achieved 90% accuracy rate across laptop price predictions.',
    ],
  },
  {
    id: 'margdarshan-chatbot',
    title: 'Margdarshan Generative Q&A & Summarizer',
    subtitle: 'Educational AI Chatbot & BART Text Summarization',
    category: 'RAG & Agents',
    status: 'Completed Project',
    description:
      'Generative Q&A conversational engine and automated text summarizer using fine-tuned HuggingFace BART models.',
    techStack: ['Python', 'OpenAI API', 'HuggingFace API', 'BART', 'CI/CD'],
    isOpenSource: false,
    featured: false,
    contributions: [
      'Implemented Q&A chatbot using OpenAI API.',
      'Integrated HuggingFace `facebook/bart-large-cnn` model for document summarization.',
    ],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'ml-hackathon',
    title: 'Top 10% Ranker — Machine Learning Hackathon',
    organization: 'ML Hackathon & Assessment Test',
    date: '02/2023',
    location: 'Hyderabad, India',
    description:
      'Competed against over 7,000+ participants in an intensive ML hackathon and technical assessment test, ranking among the top 10 percent and earning selection as a Data Science Intern.',
    metric: 'Top 10% out of 7,000+ participants',
    badge: 'Hackathon Award',
  },
  {
    id: 'pypi-mlfast',
    title: 'Published PyPI Package (`mlfast`)',
    organization: 'Python Software Foundation / Open Source',
    date: '2024',
    location: 'Global',
    description:
      'Authored and published the `mlfast` Python library providing high-level MLOps SDK integration and scikit-learn model training in 4 words of code.',
    metric: 'Installable PyPI SDK',
    badge: 'Open Source Package',
  },
];

export const certificationsData: CourseCertification[] = [
  {
    id: 'ml-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
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
    degree: 'B.Com (Computer & Applications)',
    institution: 'Government Degree College Khairatabad',
    location: 'Hyderabad, India',
    period: '06/2019 – 07/2022',
    cgpa: '7.82 / 10',
    highlights: [
      'Specialized in Computer Applications, Database Management Systems, and Object-Oriented Software.',
      'Graduated with Cumulative CGPA of 7.82/10.',
    ],
  },
];

export const blogArticlesData: BlogArticle[] = [
  {
    id: 'memoryloom-maas',
    title: 'Designing Memory-as-a-Service (MaaS) for LLM Agents with pgvector & Qdrant',
    excerpt:
      'Why AI agents should never own their memory stores. A architectural deep dive into RLS multi-tenancy, dot-product vector search, and LangGraph checkpoint savers.',
    category: 'AI Infrastructure',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['AI Agents', 'pgvector', 'Qdrant', 'FastAPI', 'LangGraph'],
    content: `
# Designing Memory-as-a-Service (MaaS) for LLM Agents

When building production-grade LLM agents, one of the most common pitfalls is forcing agent application code to manage its own memory state, vector databases, and ranking algorithms. 

## The Architectural Challenge
In multi-tenant enterprise applications:
1. **Security**: An agent operating for Tenant A must never access memory embeddings belonging to Tenant B.
2. **Persistence**: Agent execution loops need atomic short-term checkpoint persistence alongside LTM (Long-Term Memory) similarity search.
3. **Decoupling**: Swapping vector backends or ranking models should not require modifying the agent code.

## Solution: MemoryLoom MaaS
In MemoryLoom, we decoupled memory into an external service exposed over FastAPI:
- **Row-Level Security (RLS)**: Database connections execute \`SET LOCAL app.project_id\` on every transaction, making data leaks physically impossible at the PostgreSQL engine level.
- **Dual Vector Engine**: Normalizing L2 vectors at ingestion enables seamless dual querying across \`pgvector\` and \`Qdrant\`.
- **LangGraph Integration**: By implementing a custom \`MemoryLoomSaver\`, agents checkpoint state automatically on every turn.
    `,
  },
  {
    id: 'datahek-sql-agents',
    title: 'Building Enterprise Multi-Agent SQL Workflows with LangGraph & ClickHouse',
    excerpt:
      'How to turn natural language into validated, secure ClickHouse SQL queries using a supervisor-driven multi-agent DAG with human-in-the-loop approval.',
    category: 'Multi-Agent Systems',
    date: '2024-12-10',
    readTime: '10 min read',
    tags: ['ClickHouse', 'LangGraph', 'SQLGlot', 'MCP', 'LiteLLM'],
    content: `
# Building Enterprise Multi-Agent SQL Workflows

Executing LLM-generated SQL queries on production OLAP databases like ClickHouse requires extreme security precautions. A single hallucinated \`DROP TABLE\` or uncontrolled full scan can bring down analytical operations.

## Multi-Agent Supervisor Architecture
Our DataHek platform uses a supervisor agent controlling 4 specialized sub-agents:
1. **Planner Agent**: Parses schema discovered via MCP server and builds a query strategy.
2. **SQL Generator**: Generates targeted ClickHouse SQL dialect using SQLGlot AST validation.
3. **Validator & Security Agent**: Checks for DDL/DML mutation attempts, PII leaks, and query complexity bounds.
4. **Human Approval Interrupt**: For queries flagged with high CPU cost or broad impact, execution pauses for explicit user confirmation before running.
    `,
  },
];

export const architectureNodesData: SystemNode[] = [
  {
    id: 'user-client',
    name: 'Client App / Agent SDK',
    type: 'agent',
    description: 'Streamlit UI, Python SDK (`mlfast`), or MCP Client sending user prompts and queries.',
    status: 'active',
  },
  {
    id: 'tyk-gateway',
    name: 'Tyk API Gateway',
    type: 'gateway',
    description: 'Centralized API routing, JWT validation, rate limiting, and SSE streaming proxy.',
    status: 'active',
  },
  {
    id: 'zitadel-cerbos',
    name: 'ZITADEL & Cerbos Policy',
    type: 'auth',
    description: 'OIDC/OAuth2 authentication and fine-grained Policy-as-Code authorization rules.',
    status: 'active',
  },
  {
    id: 'litellm-proxy',
    name: 'LiteLLM AI Gateway',
    type: 'gateway',
    description: 'Unified model routing across OpenAI, Claude, LLaMA, and local models with prompt injection filtering.',
    status: 'active',
  },
  {
    id: 'langgraph-supervisor',
    name: 'LangGraph Multi-Agent Supervisor',
    type: 'agent',
    description: 'Stateful agent DAG coordinating Planning, SQL Generation, Security Validation, and Human Approval interrupts.',
    status: 'active',
  },
  {
    id: 'clickhouse-pg',
    name: 'ClickHouse OLAP & PostgreSQL 16 (pgvector)',
    type: 'database',
    description: 'ClickHouse for analytical query execution and PostgreSQL 16 with RLS for multi-tenant state and vectors.',
    status: 'active',
  },
  {
    id: 'langfuse-otel',
    name: 'Langfuse & OpenTelemetry',
    type: 'observability',
    description: 'Real-time distributed tracing, prompt versioning, cost tracking, and telemetry export to GCS.',
    status: 'active',
  },
];

export const architectureFlowStepsData: SystemFlowStep[] = [
  {
    stepNumber: 1,
    nodeId: 'user-client',
    action: 'Natural Language Input',
    payloadSample: 'Show total revenue and active AI agents per workspace for Q1 2025',
  },
  {
    stepNumber: 2,
    nodeId: 'tyk-gateway',
    action: 'JWT Validation & Rate Limit Check',
    payloadSample: 'Header: Bearer eyJhbGci... RateLimit: 60req/min OK',
  },
  {
    stepNumber: 3,
    nodeId: 'zitadel-cerbos',
    action: 'Evaluate Policy-as-Code',
    payloadSample: 'Cerbos Check: Role "DataAnalyst" can execute READ queries on Workspace "WS-99"',
  },
  {
    stepNumber: 4,
    nodeId: 'litellm-proxy',
    action: 'Model Selection & Prompt Injection Screening',
    payloadSample: 'Screening passed. Routing request to gpt-4o / vLLM local endpoint',
  },
  {
    stepNumber: 5,
    nodeId: 'langgraph-supervisor',
    action: 'Multi-Agent SQL Generation & Human Interrupt',
    payloadSample: 'SQL generated via SQLGlot: SELECT workspace_id, COUNT(agent_id), SUM(revenue)...',
  },
  {
    stepNumber: 6,
    nodeId: 'clickhouse-pg',
    action: 'Execute Sandboxed Query & Fetch Results',
    payloadSample: 'Query executed in 14ms. Returned 12 records with isolated RLS filter.',
  },
  {
    stepNumber: 7,
    nodeId: 'langfuse-otel',
    action: 'Record Trace, Token Usage, and Latency Metrics',
    payloadSample: 'Trace ID: tr-88192 | Prompt Tokens: 340 | Completion Tokens: 88 | Latency: 210ms',
  },
];
