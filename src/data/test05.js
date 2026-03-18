// Test 5 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// Domain 1 – 6 questions (AWS services focus)
  {id:1,domain:1,type:"single",
   text:"A developer needs to add real-time object detection to a mobile application to identify products on store shelves from a camera feed. They have no computer vision expertise. Which AWS service provides this capability with a pre-trained model?",
   options:["Amazon Comprehend","Amazon Rekognition","Amazon Textract","Amazon Transcribe"],
   correct:[1],
   explanation:"Amazon Rekognition provides pre-trained computer vision models for object detection, facial analysis, image labeling, and video analysis — no ML expertise needed. Comprehend is for NLP/text analysis. Textract extracts text and data from documents. Transcribe converts speech to text. Rekognition's object and scene detection is the right fit for product identification in images."
  },
  {id:2,domain:1,type:"single",
   text:"A company wants to automatically extract structured data — such as form fields, tables, and key-value pairs — from scanned PDF documents and images of forms. Which AWS service is purpose-built for this?",
   options:["Amazon Comprehend","Amazon Lex","Amazon Textract","Amazon Transcribe"],
   correct:[2],
   explanation:"Amazon Textract uses ML to automatically extract text AND structured data (tables, forms, key-value pairs) from scanned documents and images. Unlike basic OCR, Textract understands document structure. Comprehend analyzes text semantics. Lex is for chatbot conversations. Transcribe converts speech to text."
  },
  {id:3,domain:1,type:"multi",
   text:"A company wants to build a voice-activated customer service system that can understand spoken customer questions and respond in natural language. Which TWO AWS services would be used together to enable speech understanding and conversational response? (Select TWO)",
   options:["Amazon Transcribe (speech-to-text)","Amazon Rekognition","Amazon Lex (conversational AI)","Amazon Textract","Amazon SageMaker Feature Store"],
   correct:[0,2],
   explanation:"Amazon Transcribe converts customer speech to text. Amazon Lex then processes the text to understand intent and manage the conversation flow — using NLU to determine what the customer wants and respond appropriately. Rekognition is for images/video. Textract extracts document data. Feature Store manages ML features. Transcribe + Lex is the standard voice-to-conversational-AI pipeline on AWS."
  },
  {id:4,domain:1,type:"single",
   text:"A data scientist uses Amazon SageMaker and wants to reuse precomputed features (such as customer purchase history embeddings) across multiple ML models and teams, ensuring all models use consistent, up-to-date feature values. Which SageMaker service enables this?",
   options:["SageMaker Model Monitor","SageMaker Feature Store","SageMaker Experiments","SageMaker Debugger"],
   correct:[1],
   explanation:"Amazon SageMaker Feature Store is a purpose-built repository for storing, sharing, and managing ML features. It provides both online (low-latency, real-time) and offline (batch training) feature stores, enabling teams to reuse consistent, versioned features across models — reducing duplication and ensuring training/serving consistency. Model Monitor tracks drift. Experiments tracks training runs."
  },
  {id:5,domain:1,type:"single",
   text:"A business intelligence team wants to add natural language querying to their Amazon QuickSight dashboards, allowing executives to ask questions like 'What were sales last quarter by region?' and get automated visual answers. Which QuickSight feature enables this?",
   options:["QuickSight SPICE","Amazon Q in QuickSight","QuickSight Paginated Reports","QuickSight Embedded Analytics"],
   correct:[1],
   explanation:"Amazon Q in QuickSight is a generative BI capability that allows users to ask natural language questions and automatically get relevant visualizations, summaries, and insights. It uses generative AI to interpret business questions and generate appropriate charts and narratives. SPICE is an in-memory query engine. Paginated Reports are for formatted documents. Embedded Analytics is for embedding dashboards."
  },
  {id:6,domain:1,type:"single",
   text:"A company uses Amazon Fraud Detector to identify suspicious transactions. Which type of ML problem does Amazon Fraud Detector solve?",
   options:["Regression — predicting exact fraud dollar amounts","Anomaly/fraud detection using supervised and unsupervised classification","Image segmentation","Time-series demand forecasting"],
   correct:[1],
   explanation:"Amazon Fraud Detector is a managed service that uses ML to identify potentially fraudulent activity. It combines supervised learning (from labeled fraud/non-fraud historical examples) and unsupervised anomaly detection to classify transactions as fraudulent or legitimate. It is purpose-built for fraud/abuse detection use cases like online payments, account takeovers, and fake reviews."
  },
  // Domain 2 – 7 questions (AWS services + GenAI concepts)
  {id:7,domain:2,type:"single",
   text:"An enterprise developer wants to use a foundation model from Anthropic's Claude family via Amazon Bedrock. They need to invoke the model through a simple API call without managing any ML infrastructure. What does Amazon Bedrock provide to make this possible?",
   options:["A dedicated GPU cluster the developer must configure","A fully managed API that abstracts all underlying infrastructure for foundation model inference","A self-hosted Docker container the developer must maintain","A training cluster for fine-tuning Claude models from scratch"],
   correct:[1],
   explanation:"Amazon Bedrock provides a fully managed, serverless API for invoking foundation models from multiple providers (including Anthropic, Meta, Mistral, Amazon). Developers make API calls without managing infrastructure, GPU allocation, or model serving. It handles scaling, availability, and security automatically — lowering the barrier to entry for GenAI application development."
  },
  {id:8,domain:2,type:"single",
   text:"A developer team is using Amazon Bedrock to build a GenAI coding assistant. They want to test different foundation models (Claude, Llama, Mistral) for the same prompt to compare output quality before selecting one for production. What Amazon Bedrock capability supports this model comparison workflow?",
   options:["Bedrock Guardrails","Bedrock Playgrounds (model comparison)","Bedrock Knowledge Bases","Amazon SageMaker Pipelines"],
   correct:[1],
   explanation:"Amazon Bedrock's console includes Playgrounds where developers can test and compare different foundation models side-by-side using the same prompt. This enables quick evaluation of model quality, latency, and cost before committing to a model for production. Guardrails enforce content policies. Knowledge Bases add RAG capability. SageMaker Pipelines orchestrates ML workflows."
  },
  {id:9,domain:2,type:"single",
   text:"What is the PRIMARY business advantage of using Amazon Bedrock's managed foundation models over self-hosting an open-source foundation model on Amazon EC2?",
   options:["Amazon Bedrock models always produce better outputs than self-hosted models","Amazon Bedrock eliminates the need to manage infrastructure, patching, and scaling — reducing operational overhead and accelerating time to market","Self-hosted models are always more expensive than Amazon Bedrock","Amazon Bedrock only supports Amazon-developed models"],
   correct:[1],
   explanation:"The key business advantage of managed services like Bedrock is eliminating the undifferentiated heavy lifting of infrastructure management — provisioning, scaling, patching, and maintaining GPU clusters. This lets teams focus on building applications rather than managing infrastructure, significantly reducing operational cost and time to market. Bedrock supports models from multiple providers including Anthropic, Meta, and Mistral."
  },
  {id:10,domain:2,type:"multi",
   text:"A startup is evaluating AWS generative AI services for different use cases. Match the services to their appropriate use cases. Which TWO pairings are CORRECT? (Select TWO)",
   options:["Amazon Q Developer — AI-powered coding assistant for software developers","Amazon Bedrock — purpose-built for structured relational database queries only","Amazon Q Business — generative AI assistant for enterprise employees using company data","Amazon Polly — foundation model hosting for custom AI application development","PartyRock — enterprise security compliance management"],
   correct:[0,2],
   explanation:"Amazon Q Developer (A) is an AI-powered coding assistant that helps developers write, debug, and explain code across IDEs and the CLI. Amazon Q Business (C) is a managed generative AI assistant for enterprise use — answering questions using company documents and data sources. Bedrock is not limited to SQL. Polly is text-to-speech. PartyRock is a no-code GenAI playground, not a compliance tool."
  },
  {id:11,domain:2,type:"single",
   text:"A media company wants to automatically generate captions, transcriptions, and summaries of their video library in 12 languages. Which AWS service combination BEST addresses this workflow?",
   options:["Amazon Rekognition + Amazon Polly","Amazon Transcribe + Amazon Translate + Amazon Bedrock","Amazon Textract + Amazon Comprehend","Amazon Lex + Amazon Kendra"],
   correct:[1],
   explanation:"Amazon Transcribe converts video audio to text (captioning/transcription). Amazon Translate converts transcriptions across 12 languages. Amazon Bedrock can then generate summaries of the transcribed text using a foundation model. This pipeline covers all three needs: transcription → translation → summarization. Rekognition/Polly handles images/speech synthesis. Textract is for document extraction."
  },
  {id:12,domain:2,type:"single",
   text:"A development team is exploring foundation model options on Amazon Bedrock. They need a model that can generate photorealistic images from text descriptions for their design tool. Which category of model should they look for?",
   options:["Large language model (LLM) with code generation","Text-to-image generative model (e.g., Stability AI Stable Diffusion on Bedrock)","Speech synthesis model","Time-series forecasting model"],
   correct:[1],
   explanation:"Text-to-image models like Stability AI's Stable Diffusion (available through Amazon Bedrock) generate photorealistic images from natural language text prompts. These are diffusion-based models distinct from LLMs. Amazon Bedrock hosts both LLMs (for text tasks) and image generation models. Speech synthesis (Polly) and forecasting models serve entirely different use cases."
  },
  {id:13,domain:2,type:"single",
   text:"A company wants to improve the ROI of their generative AI customer service deployment. The business team asks: 'How do we measure the business value of this system?' Which metric is MOST appropriate for measuring GenAI business impact in customer service?",
   options:["Number of tokens consumed per month","First contact resolution rate and average handling time reduction","GPU utilization percentage","Model parameter count"],
   correct:[1],
   explanation:"Business value metrics for a GenAI customer service system should tie to business outcomes: first contact resolution rate (how often queries are resolved without escalation) and average handling time reduction directly measure efficiency and customer experience improvement. Token consumption and GPU utilization are cost/infrastructure metrics. Parameter count is a model characteristic, not a business KPI."
  },
  // Domain 3 – 9 questions (services + application design)
  {id:14,domain:3,type:"single",
   text:"A company builds a RAG application using Amazon Bedrock Knowledge Bases. When a user asks a question, what is the CORRECT sequence of events in the RAG pipeline?",
   options:["Generate response → Retrieve documents → Embed query → Return to user","Embed query → Retrieve relevant documents from vector store → Augment prompt with documents → Generate response","Fine-tune model → Deploy model → Retrieve documents → Generate response","Retrieve documents → Fine-tune model → Generate response → Return to user"],
   correct:[1],
   explanation:"The RAG pipeline sequence is: (1) Embed the user query into a vector, (2) Search the vector store for semantically similar document chunks, (3) Inject retrieved chunks into the prompt as context (augmentation), (4) Generate a grounded response using the augmented prompt. This is managed automatically by Amazon Bedrock Knowledge Bases."
  },
  {id:15,domain:3,type:"single",
   text:"A company uses Amazon Bedrock and wants to prevent their customer-facing AI from discussing competitor products, providing medical diagnoses, or generating any content referencing internal pricing. Which Bedrock feature specifically blocks these topic categories?",
   options:["Knowledge Bases","Denied Topics in Amazon Bedrock Guardrails","Model fine-tuning","Provisioned throughput"],
   correct:[1],
   explanation:"Amazon Bedrock Guardrails' 'Denied Topics' feature allows teams to define specific topic categories (competitor discussion, medical advice, pricing information) that the model should never engage with. When a user query or model response touches these topics, Guardrails blocks or redirects the interaction. This is configured at the application level, not in the model weights."
  },
  {id:16,domain:3,type:"multi",
   text:"An ML engineer is preparing data to fine-tune a foundation model on Amazon Bedrock. Which TWO data preparation best practices are MOST important for fine-tuning success? (Select TWO)",
   options:["Ensuring training examples are formatted as instruction-response pairs that demonstrate the desired model behavior","Including as much random internet data as possible","Curating high-quality, representative examples relevant to the target task","Using the largest possible dataset regardless of data quality","Storing training data in Amazon Glacier for cost savings"],
   correct:[0,2],
   explanation:"Instruction-response pairs (A) are the standard format for fine-tuning — they show the model exactly what good inputs and outputs look like. Curated, task-relevant, high-quality examples (C) are far more valuable than large quantities of irrelevant data. For fine-tuning, data quality and relevance dramatically outweigh quantity. Glacier is for archival — training data needs to be in S3 Standard for access."
  },
  {id:17,domain:3,type:"single",
   text:"A company needs to identify the optimal foundation model for their use case but wants to run standardized benchmark tests using their own proprietary test dataset. Which Amazon Bedrock capability supports this custom evaluation workflow?",
   options:["Bedrock Model Cards","Bedrock Guardrails","Bedrock Model Evaluation with custom datasets","Bedrock Knowledge Bases"],
   correct:[2],
   explanation:"Amazon Bedrock Model Evaluation supports both automated evaluation using built-in metrics (ROUGE, BERTScore, etc.) and custom human-based evaluation workflows. Critically, it allows teams to upload their own proprietary test datasets to benchmark models on domain-specific tasks — enabling fair, relevant model comparison before production selection."
  },
  {id:18,domain:3,type:"single",
   text:"A solution architect is designing a GenAI system where a foundation model must automatically decide to query a product database, check live inventory, or escalate to a human agent based on customer intent. This multi-step decision-making and action execution is best described as which architectural pattern?",
   options:["Fine-tuning pipeline","Agentic AI with tool use","Basic prompt engineering","Batch inference workflow"],
   correct:[1],
   explanation:"Agentic AI refers to AI systems where a foundation model acts as an autonomous agent: it reasons about the user's intent, decides which tools or actions to invoke (database query, inventory check, human escalation), executes them, and produces a response — all without predetermined fixed logic. Agents for Amazon Bedrock implements this pattern with configurable action groups and reasoning loops."
  },
  {id:19,domain:3,type:"single",
   text:"A developer runs an Amazon Bedrock inference call with 'system' instructions, a 3,000-token document, and a 200-word user question. The model generates a 400-token response. How does Amazon Bedrock calculate the cost for this call?",
   options:["Only the 400-token output is billed","Only the user's 200-word question is billed","Both input tokens (system prompt + document + question) and output tokens (response) are billed","A flat per-call fee is charged regardless of token count"],
   correct:[2],
   explanation:"Amazon Bedrock token-based pricing charges for both input tokens (everything sent to the model: system prompt + context documents + user question) and output tokens (the generated response). Total cost = (input token count × input price per token) + (output token count × output price per token). This is why large context documents significantly increase per-call costs."
  },
  {id:20,domain:3,type:"multi",
   text:"A team is implementing security guardrails for a public-facing Amazon Bedrock chatbot. Which TWO Guardrail capabilities help prevent personal data exposure? (Select TWO)",
   options:["PII entity detection and masking/redaction","Increasing the model temperature","Word filters blocking profanity","Grounding check for factual accuracy","Lowering max_tokens to reduce response length"],
   correct:[0,2],
   explanation:"PII detection and masking (A) automatically identifies personal information (names, SSNs, emails, phone numbers) in both inputs and outputs and masks or blocks them — preventing inadvertent data exposure. Word filters (C) block sensitive or profane terms. Together these protect against PII leakage and inappropriate language. Temperature, token limits, and grounding checks serve different purposes."
  },
  {id:21,domain:3,type:"single",
   text:"Which AWS service enables developers to build, test, and deploy conversational interfaces (chatbots and voice assistants) using natural language understanding without ML expertise?",
   options:["Amazon Polly","Amazon Lex","Amazon Transcribe","Amazon Comprehend"],
   correct:[1],
   explanation:"Amazon Lex is a fully managed service for building conversational interfaces using NLU (Natural Language Understanding) and ASR (Automatic Speech Recognition). It powers Alexa and enables developers to build chatbots and voice assistants for websites, mobile apps, and contact centers. Polly synthesizes speech from text. Transcribe converts speech to text. Comprehend analyzes text semantics."
  },
  {id:22,domain:3,type:"single",
   text:"A team is customizing an Amazon Bedrock foundation model. They have labeled examples of 200 customer service conversations showing desired response format and tone — but don't have domain-specific knowledge gaps to fill. They want the model to reliably match their brand voice. Which approach is MOST efficient?",
   options:["Full pre-training from scratch on company data","Instruction fine-tuning on the 200 conversation examples to teach response style","Continuous pre-training on all company documentation","Increasing the inference temperature"],
   correct:[1],
   explanation:"Instruction fine-tuning with 200 labeled conversation examples is the most efficient approach for teaching style, tone, and format — the model learns HOW to respond from demonstrated examples. Full pre-training from scratch is prohibitively expensive and unnecessary. Continuous pre-training injects domain knowledge, not style. Temperature doesn't teach brand voice — it adds randomness."
  },
  // Domain 4 – 4 questions
  {id:23,domain:4,type:"single",
   text:"A content moderation AI system incorrectly removes a political opinion post that violated no community guidelines. The affected user cannot understand why their post was removed, and the company cannot provide a clear explanation. Which responsible AI failures does this represent?",
   options:["Only a technical bug in the content filter","Lack of transparency and explainability combined with potential fairness issue — the system cannot justify its decision","The system is performing exactly as designed","A data storage compliance issue"],
   correct:[1],
   explanation:"This scenario illustrates multiple responsible AI failures: lack of transparency (the system can't explain why it flagged the content), lack of explainability (the decision can't be justified), and a potential fairness issue (political opinions may be disproportionately flagged). Responsible AI requires systems that can explain their decisions, especially when those decisions affect users' rights or expression."
  },
  {id:24,domain:4,type:"single",
   text:"Amazon SageMaker Clarify is used pre-training and post-training. What is the purpose of PRE-TRAINING bias detection specifically?",
   options:["To retrain the model with balanced weights","To identify bias in the training data BEFORE model training begins, allowing teams to remediate data issues proactively","To detect model drift in production","To optimize hyperparameters for fairness"],
   correct:[1],
   explanation:"Pre-training bias detection with SageMaker Clarify analyzes the training dataset for statistical imbalances, demographic skews, and representation gaps before any model training occurs. Catching bias in data early is far cheaper than remediating a biased model post-training. Clarify computes metrics like class imbalance, label imbalance, and group representation statistics."
  },
  {id:25,domain:4,type:"multi",
   text:"A team is creating a model card using Amazon SageMaker Model Cards for a deployed credit scoring model. Which TWO sections are considered ESSENTIAL content for a complete model card? (Select TWO)",
   options:["Intended use cases and out-of-scope uses","The model's AWS billing account number","Evaluation results including performance metrics across demographic groups","The personal contact details of the ML engineers","The model's exact training infrastructure costs"],
   correct:[0,2],
   explanation:"Intended use cases and out-of-scope uses (A) prevent misuse by clearly defining when and where the model should (and shouldn't) be applied. Evaluation results across demographic groups (C) document fairness and performance characteristics — critical for responsible deployment of high-stakes models like credit scoring. Billing details and personal contacts are not standard model card content."
  },
  {id:26,domain:4,type:"single",
   text:"A generative AI application generates a response that the user claims is defamatory about a real person. The AI team investigates and finds the false information came from biased training data. Which responsible AI principle was violated in the training process?",
   options:["Scalability","Veracity — the model was trained on and reproduces factually incorrect information","Model complexity","Inference latency"],
   correct:[1],
   explanation:"Veracity is the responsible AI principle that AI systems should produce truthful, accurate, and factually grounded outputs. When training data contains false or defamatory information about real individuals, the model learns and can reproduce those falsehoods. Ensuring training data quality, accuracy, and fairness is a core responsible AI practice. This also creates significant legal liability."
  },
  // Domain 5 – 4 questions
  {id:27,domain:5,type:"single",
   text:"A company's security policy states that all API keys and credentials used by AI workloads must be rotated automatically and must never be hardcoded in application code. Which AWS service manages this requirement?",
   options:["AWS IAM","AWS Secrets Manager","Amazon Macie","AWS CloudTrail"],
   correct:[1],
   explanation:"AWS Secrets Manager is purpose-built for storing, rotating, and managing secrets — including API keys, credentials, and database passwords. It supports automatic secret rotation and integrates with Lambda for rotation logic. Applications retrieve secrets via API calls, eliminating hardcoded credentials. IAM manages permissions/roles. Macie discovers data. CloudTrail logs API activity."
  },
  {id:28,domain:5,type:"single",
   text:"An organization wants to implement the Generative AI Security Scoping Matrix referenced in the AWS exam guide. What is the PRIMARY purpose of this framework?",
   options:["To determine the pricing tier for Amazon Bedrock models","To help organizations systematically assess security and governance responsibilities based on how they are using GenAI — as a consumer, developer, or provider","To measure model accuracy and performance benchmarks","To automate the deployment of foundation models"],
   correct:[1],
   explanation:"The Generative AI Security Scoping Matrix is a governance framework that helps organizations understand their security responsibilities based on their role in the GenAI stack: pure consumer (using third-party GenAI apps), developer (building on top of foundation model APIs), or provider (training and serving models). Different roles carry different security and compliance responsibilities."
  },
  {id:29,domain:5,type:"multi",
   text:"A company is implementing data governance for their AI training pipeline. Which TWO AWS services help enforce and monitor data governance policies? (Select TWO)",
   options:["AWS Lake Formation — manages fine-grained data access permissions for data lakes","Amazon SageMaker JumpStart — provides pre-trained models","AWS Glue Data Catalog — provides a centralized metadata repository for tracking data assets","Amazon Polly — converts text to speech","Amazon Lex — builds chatbot interfaces"],
   correct:[0,2],
   explanation:"AWS Lake Formation (A) provides centralized, fine-grained access control for data lake assets — enforcing who can access which datasets with column-level and row-level permissions. AWS Glue Data Catalog (C) serves as a central metadata repository cataloging data sources, schemas, and lineage — essential for governance visibility. SageMaker JumpStart, Polly, and Lex are not data governance tools."
  },
  {id:30,domain:5,type:"single",
   text:"A company is deploying a machine learning model that processes customer financial data. Their compliance team requires that all data in transit to the model endpoint AND all data at rest in S3 be encrypted. Which AWS services provide these protections natively?",
   options:["Amazon CloudFront for encryption and Amazon Inspector for data at rest","TLS/HTTPS for in-transit encryption and AWS KMS for S3 server-side encryption at rest","AWS Config for in-transit and AWS CloudTrail for at rest","Amazon Macie for in-transit and AWS Glue for at rest"],
   correct:[1],
   explanation:"AWS provides TLS (Transport Layer Security / HTTPS) for encrypting data in transit to all AWS service endpoints including SageMaker. AWS KMS (Key Management Service) manages encryption keys for S3 Server-Side Encryption (SSE-KMS), encrypting data at rest. Together these satisfy both compliance requirements. CloudFront/Inspector, Config/CloudTrail, and Macie/Glue don't directly provide these encryption capabilities."
  }
];

export default questions;
