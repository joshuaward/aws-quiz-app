// Test 13 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// ── Q1  Domain 1  match (Select FIVE) ─────────────────────────
  {
    id: 1, domain: 1, type: "match",
    text: "Select the correct machine learning concept from the following list for each definition. Each concept should be selected one time.",
    items: [
      "The portion of data held back from training and used only for final, unbiased model evaluation.",
      "A technique where multiple weak models are trained sequentially, each correcting the errors of the previous.",
      "The process of transforming a continuous target variable into discrete bins for classification.",
      "A model's inability to capture complex patterns in data, resulting in poor training and test performance.",
      "Combining the predictions of multiple independent models to improve overall accuracy and reduce variance."
    ],
    choices: ["Bagging / ensemble averaging", "Boosting", "Discretization", "Test set", "Underfitting"],
    correct: [3, 1, 2, 4, 0],
    explanation: `
      <b>Test set</b> — The holdout partition used only for final evaluation. Never exposed during training or hyperparameter tuning to ensure unbiased performance measurement.<br><br>
      <b>Boosting</b> — An ensemble technique where models are trained sequentially. Each new model focuses on correcting the errors made by its predecessors. Examples: XGBoost, AdaBoost, Gradient Boosting.<br><br>
      <b>Discretization</b> — Converts continuous values into discrete bins or categories. For example, converting ages into groups (18–25, 26–35, etc.) for feature engineering.<br><br>
      <b>Underfitting</b> — When a model is too simple to capture the underlying data patterns, resulting in high bias and poor performance on both training and test data.<br><br>
      <b>Bagging / ensemble averaging</b> — Training multiple independent models on different data subsets and averaging their predictions. Random Forest is the classic bagging method. Reduces variance and overfitting.`
  },

  // ── Q2  Domain 1  single ────────────────────────────────────────
  {
    id: 2, domain: 1, type: "single",
    text: "A data science team is building a product recommendation model. They compute features such as 'average purchase value in the last 30 days' and 'number of times a product category was viewed this week'. These features must be available both during training and at inference time with low latency.\n\nWhich Amazon SageMaker service is specifically designed to store, share, and serve these ML features?",
    options: [
      "SageMaker Pipelines",
      "SageMaker Model Registry",
      "SageMaker Feature Store",
      "SageMaker Data Wrangler"
    ],
    correct: [2],
    explanation: "Amazon SageMaker Feature Store is a purpose-built repository for ML features. It provides an offline store (batch access for training) and an online store (low-latency, real-time access for inference). Features computed centrally in Feature Store are consistent between training and serving — preventing training-serving skew. Multiple teams and models can reuse the same features, reducing duplicate computation. SageMaker Pipelines orchestrates workflows. Model Registry manages model versions. Data Wrangler prepares data."
  },

  // ── Q3  Domain 2  single ────────────────────────────────────────
  {
    id: 3, domain: 2, type: "single",
    text: "A developer is building a system where a large language model must answer complex multi-step questions such as: 'A train travels at 80 km/h for 2.5 hours, then at 60 km/h for 1.5 hours. What is the average speed for the entire journey?'\n\nWhich prompting technique instructs the model to work through the calculation steps explicitly before giving the final answer?",
    options: [
      "Negative prompting",
      "Zero-shot prompting",
      "Chain-of-thought (CoT) prompting",
      "Top_P adjustment"
    ],
    correct: [2],
    explanation: "Chain-of-thought (CoT) prompting instructs the model to reason through a problem step-by-step — for example: 'Distance 1 = 80 × 2.5 = 200 km. Distance 2 = 60 × 1.5 = 90 km. Total distance = 290 km. Total time = 4 hours. Average speed = 290 / 4 = 72.5 km/h.' This significantly improves accuracy on arithmetic, logical, and multi-step reasoning tasks. Zero-shot provides no guidance. Negative prompting restricts output. Top_P is a sampling parameter."
  },

  // ── Q4  Domain 2  multi (Select TWO) ──────────────────────────
  {
    id: 4, domain: 2, type: "multi",
    text: "A company evaluates foundation models on Amazon Bedrock for a code generation assistant. Which TWO factors are MOST important when selecting a model for this specific use case? (Select TWO.)",
    options: [
      "The model's performance on code generation benchmarks (e.g., HumanEval) for the target programming languages",
      "The model's ability to generate photorealistic images",
      "Support for a sufficient context window to process large code files and multi-file codebases",
      "The model's audio speech synthesis capability",
      "Whether the model was trained before 2020"
    ],
    correct: [0, 2],
    explanation: "Code generation benchmark performance (A) directly measures how well the model generates correct, functional code in the target language — the primary quality indicator for a coding assistant. Context window size (C) is critical because code generation tasks often require understanding large files, multiple function definitions, or cross-file dependencies — a small context window forces truncation that breaks the model's understanding of the codebase. Image generation, audio synthesis, and training vintage are irrelevant to code generation quality."
  },

  // ── Q5  Domain 3  single (Case Study part 1) ───────────────────
  {
    id: 5, domain: 3, type: "single",
    caseStudy: "An insurance company is building a claims processing automation system. When a claim is submitted, the system must: (1) extract claim details from uploaded PDF forms, (2) look up the policyholder's coverage in the claims database, (3) apply business rules to determine if the claim is eligible, and (4) generate a decision letter. The company wants to automate this end-to-end using Amazon Bedrock and minimize operational overhead.",
    caseLabel: "CASE STUDY — Questions 5–8",
    text: "Which Amazon Bedrock component enables the system to autonomously execute all four steps of the claims workflow from a single trigger?",
    options: [
      "Amazon Bedrock Guardrails",
      "Amazon Bedrock Knowledge Bases",
      "Agents for Amazon Bedrock",
      "Amazon Bedrock Model Evaluation"
    ],
    correct: [2],
    explanation: "Agents for Amazon Bedrock can autonomously orchestrate complex multi-step workflows. The agent can reason about each step: calling an action group to extract PDF data (via a Lambda-backed API), querying the claims database (another action group), evaluating eligibility using business rules, and generating the decision letter with the foundation model. This end-to-end automation from a single trigger is precisely the agentic AI pattern. Guardrails enforce content policies. Knowledge Bases provide document retrieval. Model Evaluation benchmarks quality."
  },

  // ── Q6  Domain 3  single (Case Study part 2) ───────────────────
  {
    id: 6, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) For step 1, the company must extract structured data from claim PDF forms that include handwritten fields, checkboxes, and printed tables. Which AWS service should the Lambda function call to perform this extraction?",
    options: [
      "Amazon Comprehend",
      "Amazon Textract",
      "Amazon Rekognition",
      "Amazon Transcribe"
    ],
    correct: [1],
    explanation: "Amazon Textract is designed specifically to extract text and structured data — including handwritten content, checkboxes, form fields (key-value pairs), and tables — from scanned documents and PDFs. It goes beyond OCR to understand document structure. For insurance claim forms with mixed printed and handwritten content, Textract is the appropriate choice. Comprehend analyzes text semantics (sentiment, entities). Rekognition analyzes images for objects and faces. Transcribe converts speech to text."
  },

  // ── Q7  Domain 3  single (Case Study part 3) ───────────────────
  {
    id: 7, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) The legal team requires that the AI-generated decision letters do not include medical diagnoses, treatment details, or other protected health information (PHI) extracted from the claim documents.\n\nWhich Amazon Bedrock Guardrails capability should be configured?",
    options: [
      "Denied topics — to block medical and PHI topics from appearing in model outputs",
      "Contextual grounding check — to verify responses are grounded in source documents",
      "ROUGE score threshold — to limit summary length",
      "Model temperature — set to 0 for deterministic outputs"
    ],
    correct: [0],
    explanation: "Denied topics in Amazon Bedrock Guardrails block the model from including content about specified subject areas in its outputs. Configuring medical diagnoses, treatment information, and PHI as denied topics ensures the decision letters contain only eligibility determinations and coverage information — not sensitive health details. The contextual grounding check verifies factual accuracy against sources but doesn't restrict topic categories. ROUGE is an evaluation metric. Temperature controls randomness."
  },

  // ── Q8  Domain 3  single (Case Study part 4) ───────────────────
  {
    id: 8, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) The company's architecture review board requires documentation of the AI system's data flow, showing exactly how claim data moves from PDF ingestion through each processing step to the final decision letter — to support a GDPR data processing audit.\n\nWhich concept describes this end-to-end tracking of data through the AI pipeline?",
    options: [
      "Model versioning",
      "Data lineage",
      "Feature normalization",
      "Hyperparameter tuning"
    ],
    correct: [1],
    explanation: "Data lineage tracks the complete provenance and transformation history of data — where it originated, how it was transformed at each stage, and what systems produced each output. For GDPR compliance, data lineage documentation demonstrates that personal data is processed lawfully, that its flow is controlled, and that the company can respond to data subject access requests. AWS Glue Data Catalog and SageMaker ML Lineage Tracking support lineage documentation. This differs from model versioning (tracking model artifacts) or feature normalization (a preprocessing technique)."
  },

  // ── Q9  Domain 1  single ────────────────────────────────────────
  {
    id: 9, domain: 1, type: "single",
    text: "A retail company wants to automatically forecast daily sales volumes for 50,000 SKUs across 200 stores for the next 30 days. The historical sales data contains seasonal patterns, holiday effects, and promotional spikes.\n\nWhich Amazon SageMaker algorithm is purpose-built for this type of large-scale time-series forecasting?",
    options: [
      "XGBoost",
      "K-means clustering",
      "DeepAR Forecasting",
      "Principal Component Analysis (PCA)"
    ],
    correct: [2],
    explanation: "DeepAR is Amazon SageMaker's built-in deep learning algorithm specifically designed for probabilistic time-series forecasting at scale. It trains a single model across all time series simultaneously, learning shared patterns (seasonality, trends, promotions) from the entire dataset. This makes it highly effective for large-scale retail forecasting with many SKUs and stores. XGBoost is a general-purpose gradient boosting algorithm for tabular data. K-means is for unsupervised clustering. PCA is for dimensionality reduction."
  },

  // ── Q10  Domain 4  single ───────────────────────────────────────
  {
    id: 10, domain: 4, type: "single",
    text: "A company develops a generative AI application that creates content for social media. During internal testing, the model occasionally produces political commentary that the company has not authorized. The company wants to implement a systematic process to identify and document all potential harms before the application is released.\n\nWhich responsible AI practice addresses this requirement?",
    options: [
      "Increasing the model's parameter count to improve output quality",
      "Conducting an AI risk assessment and red-team testing to proactively identify failure modes and potential harms",
      "Deploying the application immediately to gather real user feedback",
      "Reducing the context window to limit response complexity"
    ],
    correct: [1],
    explanation: "AI risk assessment and red-team testing are responsible AI practices for proactively identifying potential harms, failure modes, and misuse scenarios before deployment. Red-teaming involves deliberately trying to elicit harmful, biased, or off-topic outputs to map the model's failure boundaries. Findings are documented and addressed (e.g., via Guardrails denied topics) before release. Deploying without testing exposes real users to unmitigated harms. Parameter count and context window are architectural properties unrelated to harm identification."
  },

  // ── Q11  Domain 2  single ───────────────────────────────────────
  {
    id: 11, domain: 2, type: "single",
    text: "An enterprise builds a generative AI application using Amazon Bedrock. The application sends a 10,000-token system prompt, a 5,000-token user document, and a 200-token user question to the model. The model generates a 500-token response.\n\nHow does Amazon Bedrock calculate the cost for this invocation?",
    options: [
      "Only the 500 output tokens are billed",
      "Only the 200-token user question is billed",
      "Input tokens (system prompt + document + question = 15,200) and output tokens (500) are both billed at their respective per-token rates",
      "A flat per-invocation fee is charged regardless of token volume"
    ],
    correct: [2],
    explanation: "Amazon Bedrock uses token-based pricing for most foundation models. Both input tokens (everything sent to the model: system prompt + context documents + user question = 15,200 tokens) and output tokens (the model's generated response = 500 tokens) contribute to billing, each at their respective rates. This is why optimizing prompt length directly reduces costs. Long system prompts and large context documents significantly increase the per-call cost even if the user question is short."
  },

  // ── Q12  Domain 5  match (Select FOUR) ─────────────────────────
  {
    id: 12, domain: 5, type: "match",
    text: "Select the correct security control from the following list for each requirement. Each control should be selected one time.",
    items: [
      "Prevent any Amazon SageMaker training job from sending data over the public internet.",
      "Ensure that all data stored in Amazon S3 training buckets is encrypted at rest using customer-managed keys.",
      "Automatically detect when a developer's IAM permissions have been used to access an unauthorized S3 bucket.",
      "Provide official documentation that AWS services meet SOC 2 Type II compliance requirements."
    ],
    choices: ["AWS Artifact", "AWS CloudTrail anomaly detection", "AWS KMS with S3 SSE-KMS", "VPC with no internet gateway + S3 gateway endpoint"],
    correct: [3, 2, 1, 0],
    explanation: `
      <b>VPC with no internet gateway + S3 gateway endpoint</b> — Launches training jobs in a VPC with no internet gateway (blocking public access) and an S3 gateway endpoint (providing private S3 access within the AWS network). Together they ensure training data never traverses the internet.<br><br>
      <b>AWS KMS with S3 SSE-KMS</b> — Server-side encryption with customer-managed KMS keys encrypts all S3 objects at rest. The customer controls key rotation, access policies, and usage auditing through KMS.<br><br>
      <b>AWS CloudTrail anomaly detection</b> — CloudTrail logs all API calls. CloudTrail Insights and Amazon Detective can identify unusual access patterns, including unexpected cross-bucket access by IAM identities.<br><br>
      <b>AWS Artifact</b> — The self-service compliance documentation portal. Provides on-demand downloads of official AWS audit reports including SOC 2 Type II, ISO certifications, and PCI DSS reports.`
  },

  // ── Q13  Domain 3  single ───────────────────────────────────────
  {
    id: 13, domain: 3, type: "single",
    text: "A developer is evaluating two approaches for a conversational AI customer service agent: (A) a foundation model with a large system prompt that includes all product FAQs, and (B) a foundation model connected to a Knowledge Base containing the same FAQs.\n\nWhat is the PRIMARY limitation of Approach A that Approach B solves?",
    options: [
      "Foundation models cannot process system prompts",
      "Approach A cannot generate text responses",
      "The system prompt approach is limited by the model's context window, does not scale to large knowledge repositories, and the FAQs cannot be easily updated without rewriting the system prompt",
      "Knowledge Bases produce lower quality responses than system prompts"
    ],
    correct: [2],
    explanation: "Embedding all FAQs in a system prompt has three critical limitations: (1) Context window limits — a large FAQ library may exceed the model's context limit, forcing truncation. (2) Scalability — system prompts cannot hold thousands of FAQs; Knowledge Bases index and retrieve only the most relevant content per query. (3) Maintainability — updating the system prompt requires a code change; Knowledge Bases can be re-synced with updated documents independently. RAG with Knowledge Bases is the scalable, maintainable pattern for large knowledge repositories."
  },

  // ── Q14  Domain 4  multi (Select TWO) ─────────────────────────
  {
    id: 14, domain: 4, type: "multi",
    text: "A company is reviewing the outputs of its AI content moderation system. The system flagged content as violating policy at a significantly higher rate for posts written in non-standard dialects compared to standard dialect posts with similar semantic content.\n\nWhich TWO responsible AI actions should the team take? (Select TWO.)",
    options: [
      "Analyze the training data distribution for dialect representation and measure bias metrics using SageMaker Clarify",
      "Increase the model's temperature to generate more varied moderation decisions",
      "Evaluate the system's false positive rate specifically for non-standard dialect content to quantify the disparate impact",
      "Deploy the system as-is since overall accuracy metrics are acceptable",
      "Reduce the context window to process shorter content samples"
    ],
    correct: [0, 2],
    explanation: "Training data analysis with Clarify (A) identifies whether certain dialect groups are underrepresented or mislabeled in the training data — the likely root cause of disparate performance. Subgroup false positive rate evaluation (C) quantifies exactly how much worse the system performs on non-standard dialect content — a critical measurement before any remediation. Deploying with known bias violates responsible AI principles. Temperature and context window adjustments don't address dialect bias."
  },

  // ── Q15  Domain 2  single ───────────────────────────────────────
  {
    id: 15, domain: 2, type: "single",
    text: "A developer uses Amazon Bedrock to build a customer support chatbot. In production, the team notices that when customers include their full name and account number in their message, the model's response sometimes repeats these details back in ways that could expose them in logs.\n\nWhich Amazon Bedrock Guardrails capability should be enabled to prevent PII exposure in model outputs?",
    options: [
      "Denied topics",
      "Contextual grounding check",
      "PII entity detection with output masking or redaction",
      "Temperature reduction"
    ],
    correct: [2],
    explanation: "Amazon Bedrock Guardrails' PII entity detection scans both inputs and outputs for personal information (names, account numbers, email addresses, phone numbers, SSNs, credit card numbers, etc.) and can either mask (replace with asterisks or a placeholder) or block that information before it appears in the response or logs. This directly prevents PII from being echoed back in model outputs. Denied topics block subject categories. Grounding checks verify factual accuracy. Temperature affects randomness."
  },

  // ── Q16  Domain 3  single ───────────────────────────────────────
  {
    id: 16, domain: 3, type: "single",
    text: "A company fine-tuned a foundation model on Amazon Bedrock to write in the company's brand voice. After deployment, they want to measure whether the fine-tuned model's outputs are more similar to human-written brand content than the base model's outputs.\n\nA linguistics team will review a sample of 100 outputs and rate them for brand alignment on a scale of 1–5.\n\nWhat type of evaluation is the linguistics team performing?",
    options: [
      "Automated evaluation using BLEU scores",
      "Human evaluation — subjective quality assessment by domain experts",
      "Bias detection using SageMaker Clarify",
      "Toxicity scoring using FMEval"
    ],
    correct: [1],
    explanation: "Human evaluation involves domain experts or trained evaluators assessing model outputs for subjective qualities — such as brand alignment, tone consistency, and writing style — that automated metrics cannot fully capture. For brand voice evaluation where the criteria are qualitative and proprietary, human evaluation is often the most meaningful approach. BLEU and ROUGE measure word overlap, not brand alignment. SageMaker Clarify detects bias. FMEval assesses toxicity. Human evaluation is the gold standard when automated metrics don't capture what matters."
  },

  // ── Q17  Domain 5  single ───────────────────────────────────────
  {
    id: 17, domain: 5, type: "single",
    text: "A company deploys multiple Amazon Bedrock-powered applications across different business units. The security team wants a centralized mechanism to enforce that only approved foundation models can be invoked, and that all invocations are attributed to specific application teams.\n\nWhich AWS capability provides this governance at the identity and authorization level?",
    options: [
      "Amazon Bedrock Guardrails content policies",
      "IAM permission policies with resource-level conditions scoping access to specific Bedrock model ARNs, combined with IAM tags for team attribution",
      "Amazon CloudWatch dashboards",
      "AWS Trusted Advisor recommendations"
    ],
    correct: [1],
    explanation: "IAM permission policies with resource-level conditions can restrict which specific Bedrock model ARNs each application team's role is permitted to invoke — for example, allowing Team A to invoke only Anthropic Claude, while Team B can only invoke Amazon Titan. IAM tags (resource tags and principal tags) enable attribution — CloudTrail logs capture which tagged role made which API call. Together they provide model access governance and team attribution. Guardrails enforce content policies, not access control. CloudWatch and Trusted Advisor don't govern model access."
  },

  // ── Q18  Domain 1  multi (Select TWO) ─────────────────────────
  {
    id: 18, domain: 1, type: "multi",
    text: "A company has a dataset of 10 million customer records for training a recommendation model. Half the records have missing values in the 'annual income' field. The data science team must decide how to handle these missing values before training.\n\nWhich TWO approaches are appropriate strategies for handling missing values in this scenario? (Select TWO.)",
    options: [
      "Impute missing values using the median annual income from the non-missing records",
      "Delete all 5 million records with missing values — reducing the dataset to 5 million complete records",
      "Create a separate binary feature flag indicating whether 'annual income' was missing for each record",
      "Replace all missing values with the string 'UNKNOWN' for all numeric fields",
      "Ignore the missing values — most ML algorithms handle them automatically without any preprocessing"
    ],
    correct: [0, 2],
    explanation: "Median imputation (A) replaces missing numeric values with the median of observed values — a robust choice for skewed distributions like income. It preserves all 10 million records. Creating a missingness indicator feature (C) preserves information about the pattern of missingness itself, which may be predictive (e.g., customers who didn't report income may behave differently). Deleting 5 million records wastes data and may introduce selection bias. Replacing numeric values with 'UNKNOWN' breaks the data type. Most ML algorithms do not handle missing values automatically — they require explicit handling."
  },

  // ── Q19  Domain 3  single ───────────────────────────────────────
  {
    id: 19, domain: 3, type: "single",
    text: "A software company uses Amazon Q Developer to assist developers in writing code. A developer asks Q Developer to explain a complex 200-line Python function that calculates option pricing using the Black-Scholes formula.\n\nWhich Amazon Q Developer capability is the developer using?",
    options: [
      "Q Developer is generating new code from scratch",
      "Q Developer is providing code explanation — analyzing existing code and describing what it does in natural language",
      "Q Developer is scanning the code for security vulnerabilities",
      "Q Developer is converting the Python code to Java"
    ],
    correct: [1],
    explanation: "Amazon Q Developer's code explanation feature analyzes existing code and generates natural language descriptions of what the code does, how it works, and why it is structured a way it is. This is especially valuable for understanding complex algorithms, legacy code, or unfamiliar codebases. Q Developer also supports code generation (writing new code), security scanning (identifying vulnerabilities), and code transformation (language conversion) — but this specific use case is code explanation."
  },

  // ── Q20  Domain 4  single ───────────────────────────────────────
  {
    id: 20, domain: 4, type: "single",
    text: "A news aggregation company uses a generative AI model to write news article summaries. The model occasionally presents opinion as fact and misattributes quotes to wrong sources.\n\nWhich responsible AI principle is most directly violated by this behavior, and which approach BEST mitigates it?",
    options: [
    "Robustness — mitigated by increasing model parameter count",
    "Fairness — mitigated by collecting more diverse training data",
    "Veracity — mitigated by implementing RAG with trusted news source APIs to ground summaries in verified source content",
    "Explainability — mitigated by publishing SHAP values for each summary"
  ],
    correct: [2],
    explanation: "Presenting opinion as fact and misattributing quotes violates veracity — the principle that AI systems should produce truthful, accurate outputs. The most direct mitigation is RAG with verified source APIs — grounding each summary in the specific retrieved article content and requiring the model to attribute claims to the source document. This constrains the model to verified content rather than relying on its parametric memory. Fairness addresses group equity. SHAP values explain predictions, not factual accuracy. Parameter count doesn't improve source accuracy."
  },

  // ── Q21  Domain 2  single ───────────────────────────────────────
  {
    id: 21, domain: 2, type: "single",
    text: "A developer is testing different system prompts for an Amazon Bedrock-powered customer service bot. They want to quickly compare how three different system prompt versions affect response quality for the same set of test questions — without writing code or setting up a formal evaluation pipeline.\n\nWhich Amazon Bedrock feature supports this interactive comparison?",
    options: [
      "Amazon Bedrock Model Evaluation with a custom dataset",
      "Amazon Bedrock Playgrounds — for interactive, side-by-side prompt testing",
      "Amazon SageMaker Clarify",
      "Amazon Bedrock Knowledge Bases"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Playgrounds (chat, text, and image playgrounds) provide an interactive console interface for testing prompts, comparing model responses, and experimenting with inference parameters — without writing any code. Developers can quickly iterate on system prompts and see the results. Model Evaluation runs systematic benchmarks at scale using datasets. SageMaker Clarify detects bias. Knowledge Bases manage RAG document retrieval. Playgrounds are designed for fast, interactive experimentation."
  },

  // ── Q22  Domain 5  single ───────────────────────────────────────
  {
    id: 22, domain: 5, type: "single",
    text: "A company's CISO requires that all access to Amazon Bedrock APIs from production applications must be authenticated using temporary security credentials — never using long-lived access keys.\n\nWhich AWS mechanism issues temporary security credentials with a configurable expiration time?",
    options: [
    "AWS Secrets Manager rotated API keys",
    "AWS IAM user access keys (permanent key pairs)",
    "AWS Security Token Service (STS) via IAM Roles — issues temporary credentials with a defined expiration",
    "Amazon Cognito user pool tokens"
  ],
    correct: [2],
    explanation: "AWS Security Token Service (STS) issues temporary security credentials (access key ID, secret access key, and session token) with a configurable expiration (15 minutes to 12 hours). Applications assume an IAM role to receive these temporary credentials, which automatically expire — eliminating the risk of long-lived key exposure. This is the AWS-recommended approach for production application authentication. IAM user access keys are permanent and violate the CISO's requirement. Cognito is for user authentication in web/mobile apps. Secrets Manager manages static secrets."
  },

  // ── Q23  Domain 3  multi (Select TWO) ─────────────────────────
  {
    id: 23, domain: 3, type: "multi",
    text: "A company is deploying a generative AI solution for legal document review. Lawyers require that all AI-suggested edits cite the specific clause in the legal framework that justifies each suggestion.\n\nWhich TWO capabilities enable the AI system to provide grounded, citable responses? (Select TWO.)",
    options: [
      "Amazon Bedrock Knowledge Bases storing the legal framework documents — enabling retrieval of specific clauses at query time",
      "Amazon Bedrock Guardrails' contextual grounding check — detecting and blocking responses not grounded in retrieved source content",
      "Increasing the model temperature to produce more confident responses",
      "Amazon SageMaker Data Wrangler for preprocessing legal documents",
      "Reducing the chunk size to minimum for faster retrieval"
    ],
    correct: [0, 1],
    explanation: "Amazon Bedrock Knowledge Bases (A) stores the legal framework documents as retrievable vector embeddings. When the AI makes a suggestion, it retrieves the specific clause that supports it and injects it into the context — enabling source attribution and citation. The contextual grounding check (B) validates that the model's suggestion is actually supported by the retrieved clause — blocking hallucinated legal justifications. Together they ensure every suggestion is both sourced and verified. Higher temperature increases hallucination risk. Data Wrangler is for ML data prep, not RAG document management."
  },

  // ── Q24  Domain 1  single ───────────────────────────────────────
  {
    id: 24, domain: 1, type: "single",
    text: "A data scientist uses Amazon SageMaker to train a neural network. The training job runs for 8 hours on GPU instances at significant cost. The next day, the data scientist wants to repeat the experiment with different hyperparameters.\n\nWhich SageMaker feature automates the process of running multiple training jobs with different hyperparameter combinations to find the optimal configuration?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Automatic Model Tuning (Hyperparameter Tuning Jobs)",
      "SageMaker Ground Truth",
      "SageMaker Clarify"
    ],
    correct: [1],
    explanation: "Amazon SageMaker Automatic Model Tuning (Hyperparameter Tuning Jobs) automates the search for the best hyperparameter combination. It supports strategies including random search, Bayesian optimization, and Hyperband — running multiple training jobs in parallel or sequentially, learning from each result to focus search on promising hyperparameter regions. This is far more efficient than manual grid search. Model Monitor tracks production drift. Ground Truth creates labeled data. Clarify detects bias and provides explainability."
  },

  // ── Q25  Domain 4  single ───────────────────────────────────────
  {
    id: 25, domain: 4, type: "single",
    text: "An AI governance team is assessing a generative AI application's compliance with responsible AI standards. They want to evaluate the model's outputs for potential toxicity, stereotyping, and factual inaccuracy across a representative dataset of 1,000 test prompts.\n\nWhich Amazon SageMaker feature provides a library specifically for evaluating foundation model quality and responsibility metrics at scale?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Pipelines",
      "SageMaker Clarify with the Foundation Model Evaluation (FMEval) library",
      "SageMaker Feature Store"
    ],
    correct: [2],
    explanation: "Amazon SageMaker Clarify includes the Foundation Model Evaluation (FMEval) library, which provides evaluation tools specifically for generative AI foundation models. FMEval supports measuring accuracy, toxicity, stereotype detection, factual knowledge, and semantic robustness at scale across test datasets. It can use built-in datasets or custom datasets provided by the evaluation team. Model Monitor tracks production data drift. Pipelines orchestrates ML workflows. Feature Store manages features."
  },

  // ── Q26  Domain 2  single ───────────────────────────────────────
  {
    id: 26, domain: 2, type: "single",
    text: "A developer wants to build a no-code generative AI application prototype to demonstrate to business stakeholders — without any programming or infrastructure setup. The prototype should allow stakeholders to test the application and share it with others.\n\nWhich AWS service enables this no-code GenAI prototyping?",
    options: [
      "Amazon SageMaker Studio",
      "AWS CloudFormation",
      "PartyRock, an Amazon Bedrock Playground",
      "Amazon EC2 with pre-installed model weights"
    ],
    correct: [2],
    explanation: "PartyRock is a no-code, browser-based playground built on Amazon Bedrock that lets anyone — including non-technical business users — build, test, and share generative AI application prototypes without any coding or infrastructure. Users can create multi-widget apps with text generation, image generation, and chatbot components. Apps can be published and shared via link. SageMaker Studio is for ML engineers. CloudFormation is infrastructure-as-code. EC2 requires significant technical setup."
  },

  // ── Q27  Domain 5  multi (Select TWO) ─────────────────────────
  {
    id: 27, domain: 5, type: "multi",
    text: "A company's data governance policy requires that customer PII used in AI model training must be protected throughout its lifecycle — from storage to processing. The training data is stored in Amazon S3 and processed by Amazon SageMaker training jobs.\n\nWhich TWO controls implement this data protection requirement? (Select TWO.)",
    options: [
      "Enable S3 server-side encryption with AWS KMS keys (SSE-KMS) for all training data at rest",
      "Make the training data S3 bucket publicly readable for simplicity",
      "Configure the SageMaker training job to run in a VPC with an S3 gateway endpoint — ensuring data in transit stays within the AWS network and is encrypted via TLS",
      "Store training data in S3 Standard-IA to reduce costs",
      "Disable S3 versioning to reduce storage overhead"
    ],
    correct: [0, 2],
    explanation: "SSE-KMS encryption (A) protects PII at rest in S3 using customer-managed KMS keys — providing encryption, key access control, and usage auditing. VPC deployment with S3 gateway endpoint (C) ensures all data in transit between SageMaker and S3 stays within the AWS network and is protected by TLS — preventing public internet exposure. Public S3 access exposes PII. Storage class selection and S3 versioning are operational decisions unrelated to PII protection."
  },

  // ── Q28  Domain 3  single ───────────────────────────────────────
  {
    id: 28, domain: 3, type: "single",
    text: "A company uses Amazon Bedrock to process customer support tickets. To classify urgency and route tickets, the model needs to output structured JSON in a specific schema (e.g., {\"urgency\": \"high\", \"category\": \"billing\", \"action\": \"escalate\"}).\n\nWhich prompt engineering technique MOST reliably produces structured JSON output from a foundation model?",
    options: [
      "Setting temperature to 1.5 for more creative output formatting",
      "Using a prompt template that explicitly specifies the JSON schema, provides an example of a correctly formatted JSON output, and instructs the model to respond only with JSON",
      "Increasing the max_tokens parameter to allow longer responses",
      "Using chain-of-thought prompting to improve reasoning about ticket categories"
    ],
    correct: [1],
    explanation: "To reliably produce structured JSON, the prompt must: (1) explicitly define the required schema and field names, (2) provide a few-shot example of a correctly formatted JSON response, and (3) instruct the model to respond only with valid JSON — no preamble or explanation. This combination eliminates ambiguity and gives the model clear format guidance. High temperature increases randomness and malformed JSON risk. max_tokens doesn't enforce format. Chain-of-thought produces verbose reasoning, not compact JSON."
  },

  // ── Q29  Domain 4  single ───────────────────────────────────────
  {
    id: 29, domain: 4, type: "single",
    text: "A company wants to apply the Generative AI Security Scoping Matrix to classify their AI use case. The company is not training models but is building custom applications on top of third-party foundation model APIs, configuring system prompts, and integrating RAG pipelines.\n\nWhich category in the Generative AI Security Scoping Matrix describes this company's role?",
    options: [
      "FM Provider — the company trains and provides foundation models to others",
      "End User — the company only uses pre-built GenAI applications without customization",
      "FM Developer / Application Builder — the company builds custom applications using foundation model APIs",
      "Infrastructure Provider — the company provides cloud infrastructure for others to run AI workloads"
    ],
    correct: [2],
    explanation: "The Generative AI Security Scoping Matrix classifies GenAI stakeholders based on their level of ownership and customization. An FM Developer / Application Builder accesses foundation model APIs, customizes behavior through system prompts, integrates RAG pipelines, and builds application logic — without training the underlying model. This role has specific security responsibilities including prompt injection protection, output filtering, access control, and data privacy. FM Providers train models. End Users only consume pre-built apps. Infrastructure Providers manage hardware/cloud."
  },

  // ── Q30  Domain 1  order (Select and order THREE) ──────────────
  {
    id: 30, domain: 1, type: "order",
    text: "A data science team is following the standard ML model development lifecycle. Order the following stages from FIRST to LAST in the correct sequence.",
    items: [
      "Model training — fit the algorithm to the prepared dataset",
      "Data collection and preparation — gather, clean, and preprocess raw data",
      "Model evaluation and deployment — assess performance and release to production"
    ],
    correctOrder: [1, 0, 2],
    explanation: "The ML lifecycle follows this sequence: <b>First — Data collection and preparation.</b> Raw data must be gathered, cleaned, preprocessed, and split into train/validation/test sets before any training can begin. Data quality directly determines model quality. <b>Second — Model training.</b> The algorithm is fitted on the prepared training data, learning patterns from examples. Hyperparameters are tuned using the validation set during this stage. <b>Third — Model evaluation and deployment.</b> The trained model is assessed on the held-out test set for unbiased performance measurement, then deployed to a serving environment for inference if performance meets requirements."
  }

];

export default questions;
