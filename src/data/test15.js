// Test 15 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// ── Q1  Domain 1  match (Select FIVE) ─────────────────────────
  {
    id: 1, domain: 1, type: "match",
    text: "Select the correct Amazon SageMaker feature from the following list for each description. Each feature should be selected one time.",
    items: [
      "Provides a visual, low-code interface for data exploration, cleaning, and transformation without writing scripts.",
      "Continuously monitors deployed models for data drift, model quality degradation, and feature attribution drift.",
      "Organizes and tracks multiple training experiments — capturing hyperparameters, metrics, and artifacts for comparison.",
      "Stores, manages, and serves ML features for both training (offline) and real-time inference (online).",
      "Manages ML model versions, approval status, and metadata in a centralized catalog."
    ],
    choices: ["SageMaker Data Wrangler", "SageMaker Experiments", "SageMaker Feature Store", "SageMaker Model Monitor", "SageMaker Model Registry"],
    correct: [0, 3, 1, 2, 4],
    explanation: `
      <b>SageMaker Data Wrangler</b> — Visual, low-code data preparation with 300+ built-in transforms, data quality analysis, and automatic code generation for SageMaker Pipelines.<br><br>
      <b>SageMaker Model Monitor</b> — Continuously monitors deployed endpoints for data drift, model quality degradation (accuracy, precision, recall), and bias drift — with configurable alerting.<br><br>
      <b>SageMaker Experiments</b> — Tracks training runs with hyperparameters, metrics, and artifacts. Enables visual comparison across runs to identify the best-performing configuration.<br><br>
      <b>SageMaker Feature Store</b> — Centralized ML feature repository with online store (millisecond latency for inference) and offline store (batch access for training).<br><br>
      <b>SageMaker Model Registry</b> — Manages model versions, lineage, and approval workflows. Models from Canvas, Autopilot, or custom training can be registered and accessed by Studio users.`
  },

  // ── Q2  Domain 3  single ────────────────────────────────────────
  {
    id: 2, domain: 3, type: "single",
    text: "A company built a RAG application using Amazon Bedrock Knowledge Bases. During quality testing, the team notices the model frequently returns answers from documents published in 2018, even when more recent documents on the same topic exist in the knowledge base.\n\nWhich knowledge base configuration resolves this issue by prioritizing current documents?",
    options: [
      "Increase the model temperature to reduce preference for older documents",
      "Configure metadata filtering to exclude documents older than a specified date, or add document recency as a ranking signal",
      "Decrease the chunk overlap percentage during ingestion",
      "Switch from Amazon OpenSearch Service to Amazon DynamoDB as the vector store"
    ],
    correct: [1],
    explanation: "Metadata filtering in Amazon Bedrock Knowledge Bases allows retrieval to be filtered or re-ranked based on document metadata attributes — such as publication date. By filtering out documents older than a specified date, or incorporating recency as a retrieval scoring factor, the system preferentially returns current information. Temperature affects response randomness, not retrieval ranking. Chunk overlap affects context continuity. DynamoDB is not a vector search engine and cannot perform semantic similarity search."
  },

  // ── Q3  Domain 2  single ────────────────────────────────────────
  {
    id: 3, domain: 2, type: "single",
    text: "A healthcare company is evaluating foundation model customization approaches. They have 50,000 labeled clinical note examples (input: clinical note, output: ICD-10 code) and want the model to learn this specific code assignment task deeply.\n\nWhich customization approach is MOST appropriate for this labeled, task-specific dataset?",
    options: [
      "Continued pre-training using the labeled examples as unlabeled text",
      "Instruction fine-tuning — training the model on the labeled input-output pairs to teach the specific coding task",
      "Prompt engineering with five-shot examples in the system prompt",
      "Increasing the Top_P parameter to 0.99"
    ],
    correct: [1],
    explanation: "Instruction fine-tuning uses labeled input-output pairs to teach the model a specific task behavior by updating its weights. With 50,000 labeled clinical note → ICD-10 code examples, instruction fine-tuning will deeply adapt the model to this precise coding task, learning the mapping from clinical language to standardized codes. Continued pre-training uses unlabeled text for domain knowledge — not task-specific behavior. Few-shot prompting with five examples won't match the depth of 50,000 training examples. Top_P is an inference parameter."
  },

  // ── Q4  Domain 5  single ────────────────────────────────────────
  {
    id: 4, domain: 5, type: "single",
    text: "A company runs ML workloads using Amazon SageMaker. A security review identifies that multiple SageMaker training jobs share the same IAM execution role, which has broad permissions. Some jobs need S3 access; others need DynamoDB access; none need both.\n\nWhat security improvement should the company implement?",
    options: [
      "Add more permissions to the shared role to reduce the number of access denied errors",
      "Create separate least-privilege IAM execution roles for each job type, granting only the specific permissions each job requires",
      "Remove all IAM roles and use root account credentials to simplify management",
      "Make all required S3 buckets publicly accessible to avoid IAM complexity"
    ],
    correct: [1],
    explanation: "The principle of least privilege requires that each workload has only the permissions it needs — no more. Creating separate IAM execution roles for S3-only jobs and DynamoDB-only jobs eliminates unnecessary cross-service permissions. If a training job's credentials are compromised, the blast radius is limited to only the resources that specific role can access. Broad shared roles, root credentials, and public S3 buckets all dramatically increase security risk."
  },

  // ── Q5  Domain 1  single (Case Study part 1) ───────────────────
  {
    id: 5, domain: 1, type: "single",
    caseStudy: "A financial institution is building an end-to-end ML platform on AWS using Amazon SageMaker. The platform must: (1) prepare and explore raw transaction data, (2) track all training experiments for audit purposes, (3) automatically detect bias in the trained model, (4) register approved models for production, and (5) continuously monitor deployed models for data drift. The institution wants to use the purpose-built SageMaker feature for each stage.",
    caseLabel: "CASE STUDY — Questions 5–8",
    text: "For stage 1 — exploring and preparing the raw transaction data with minimal scripting — which SageMaker feature should the team use?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Data Wrangler",
      "SageMaker Ground Truth",
      "SageMaker Clarify"
    ],
    correct: [1],
    explanation: "Amazon SageMaker Data Wrangler provides a visual, low-code interface for data exploration (distributions, quality metrics, correlations) and transformation (300+ built-in transforms, custom code). It allows data scientists to explore and prepare the raw transaction data without writing extensive PySpark or Pandas scripts. The prepared dataset and transformation recipe can be exported directly to SageMaker Pipelines for automation. Model Monitor tracks deployed models. Ground Truth labels data. Clarify detects bias."
  },

  // ── Q6  Domain 1  single (Case Study part 2) ───────────────────
  {
    id: 6, domain: 1, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) For stage 2 — tracking all training experiments including hyperparameters, metrics, and model artifacts for regulatory audit — which SageMaker feature should the team use?",
    options: [
      "SageMaker Feature Store",
      "SageMaker Experiments",
      "SageMaker Model Registry",
      "SageMaker Pipelines"
    ],
    correct: [1],
    explanation: "Amazon SageMaker Experiments tracks and organizes individual training runs — capturing hyperparameters, training metrics (loss curves, accuracy), input data references, and output model artifacts for each experiment. This provides the complete training audit trail required by the financial institution's auditors. Experiments can be compared side-by-side to identify the best configuration. Feature Store manages reusable features. Model Registry manages model versions after training. Pipelines orchestrates workflows."
  },

  // ── Q7  Domain 1  single (Case Study part 3) ───────────────────
  {
    id: 7, domain: 1, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) For stage 3 — automatically detecting bias in the trained transaction risk model and generating explainability reports showing which features most influenced predictions — which SageMaker feature should the team use?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Data Wrangler",
      "SageMaker Clarify",
      "SageMaker Ground Truth"
    ],
    correct: [2],
    explanation: "Amazon SageMaker Clarify detects bias in both training data and model predictions, and provides explainability through SHAP (SHapley Additive exPlanations) values — showing which input features most influenced each prediction. For a financial risk model, this is essential for regulatory compliance and fair lending laws. Clarify produces reports that can be attached to model cards. Model Monitor detects production drift. Data Wrangler prepares data. Ground Truth creates labeled datasets."
  },

  // ── Q8  Domain 1  single (Case Study part 4) ───────────────────
  {
    id: 8, domain: 1, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) For stage 5 — continuously monitoring the deployed transaction risk model in production for data drift and automated alerts when the input distribution shifts — which SageMaker feature should the team use?",
    options: [
      "SageMaker Experiments",
      "SageMaker Model Registry",
      "SageMaker Clarify",
      "SageMaker Model Monitor"
    ],
    correct: [3],
    explanation: "Amazon SageMaker Model Monitor continuously evaluates inference endpoint inputs and outputs against a baseline computed from training data. It detects data drift (input distribution shifts), model quality degradation (accuracy drift), and feature attribution drift. When violations exceed configured thresholds, Model Monitor generates CloudWatch alerts — triggering retraining workflows or human review. Experiments tracks training runs. Model Registry manages versions. Clarify is for bias and explainability analysis."
  },

  // ── Q9  Domain 3  multi (Select TWO) ──────────────────────────
  {
    id: 9, domain: 3, type: "multi",
    text: "A company uses Amazon Bedrock to generate automated email marketing campaigns. The marketing team complains that generated emails sometimes contain off-topic content and occasionally reproduce competitor branding phrases that appear in the training data.\n\nWhich TWO Amazon Bedrock configurations directly address these two issues? (Select TWO.)",
    options: [
      "Configure denied topics in Amazon Bedrock Guardrails to block off-topic subject areas from model outputs",
      "Increase the model temperature to 1.5 for more creative email content",
      "Configure word filters in Amazon Bedrock Guardrails to detect and block competitor brand names and slogans",
      "Decrease the max_tokens to limit email length",
      "Switch to batch inferencing for all email generation"
    ],
    correct: [0, 2],
    explanation: "Denied topics (A) in Amazon Bedrock Guardrails block entire subject categories from appearing in model outputs — directly addressing the off-topic content problem. Word filters (C) allow teams to specify exact words, phrases, and patterns (competitor brand names, slogans) that must be blocked from inputs and outputs — directly addressing the competitor branding issue. Higher temperature increases randomness and makes both problems worse. max_tokens controls length. Batch inferencing changes timing, not content quality."
  },

  // ── Q10  Domain 4  single ───────────────────────────────────────
  {
    id: 10, domain: 4, type: "single",
    text: "A team trains a sentiment analysis model using customer reviews. After deployment, a fairness audit reveals that reviews written in non-native English (with grammatical variations) are classified with 18% lower accuracy than native-speaker reviews.\n\nWhich responsible AI step should have been taken DURING the development phase to prevent this disparity?",
    options: [
      "Train the model with a higher learning rate to improve overall accuracy",
      "Evaluate model performance on linguistically diverse test subsets during development, and ensure training data includes sufficient non-native writing samples",
      "Deploy the model only to markets where customers write in native English",
      "Increase the model temperature to handle language variation"
    ],
    correct: [1],
    explanation: "Responsible AI requires proactive subgroup evaluation during development — not just aggregate accuracy. Testing on linguistically diverse subsets (native vs. non-native English) during development would have surfaced the 18% gap before deployment. The root cause is likely representation bias in training data — insufficient non-native writing examples. The fix is to collect more non-native English training samples and re-evaluate performance across linguistic groups. Deployment restriction violates fairness. Temperature and learning rate don't address linguistic representation."
  },

  // ── Q11  Domain 2  multi (Select TWO) ─────────────────────────
  {
    id: 11, domain: 2, type: "multi",
    text: "Which TWO inference parameters directly influence the DIVERSITY and CREATIVITY of a foundation model's text generation outputs? (Select TWO.)",
    options: [
      "Temperature — controls randomness of token selection; higher values produce more varied outputs",
      "Max tokens — controls the maximum length of the generated response",
      "Top_P — controls the size of the token selection pool via cumulative probability threshold",
      "System prompt — defines the model's persona and behavioral constraints",
      "Context window — defines the maximum input size the model can process"
    ],
    correct: [0, 2],
    explanation: "Temperature (A) and Top_P (C) are the two core sampling parameters that control output diversity. Temperature scales the probability distribution over next tokens — higher values flatten the distribution, making unlikely tokens more probable and outputs more varied. Top_P (nucleus sampling) restricts generation to tokens whose cumulative probability reaches the threshold — lower values produce more focused, repetitive outputs; higher values allow more diversity. Max tokens, system prompts, and context window do not affect the diversity of generated token choices."
  },

  // ── Q12  Domain 5  multi (Select TWO) ─────────────────────────
  {
    id: 12, domain: 5, type: "multi",
    text: "A company operates a multi-tenant AI platform on AWS where different customers' Amazon Bedrock workloads must be completely isolated from each other. Customer A's prompts must never be accessible to Customer B's application.\n\nWhich TWO AWS controls enforce this tenant isolation? (Select TWO.)",
    options: [
      "Deploy each customer's application in a separate AWS account or VPC with distinct IAM roles that scope Bedrock access to their own resources",
      "Use a single shared IAM role for all customers with S3 bucket policies to differentiate access",
      "Encrypt all customer prompt data with customer-specific AWS KMS keys — ensuring each customer's data can only be decrypted by their own key",
      "Enable S3 Intelligent-Tiering for all customer prompt logs",
      "Use Amazon CloudFront caching to separate customer responses"
    ],
    correct: [0, 2],
    explanation: "Account/VPC-level isolation with distinct IAM roles (A) provides the strongest identity-level tenant isolation — Customer B's IAM role cannot access Customer A's Bedrock invocations, logs, or data because they exist in separate IAM boundaries. Customer-specific KMS encryption (C) ensures that even if data is stored in shared infrastructure, each customer's prompt data is encrypted with their own key — making cross-tenant data access cryptographically impossible without the key. Shared IAM roles, Intelligent-Tiering, and CloudFront caching don't provide tenant isolation."
  },

  // ── Q13  Domain 3  single ───────────────────────────────────────
  {
    id: 13, domain: 3, type: "single",
    text: "An Amazon Bedrock Agent is configured to help users book conference rooms. During a booking request, the agent calls the room availability API (action group), checks meeting room policies (knowledge base), and then generates a booking confirmation. The booking fails because the Lambda function for the action group returns an error.\n\nWhich component is responsible for handling this error and deciding whether to retry or inform the user?",
    options: [
      "Amazon Bedrock Guardrails",
      "The foundation model's temperature setting",
      "The agent's reasoning loop — the agent interprets the error response and decides the next action (retry, alternative, or inform user)",
      "Amazon SageMaker Model Monitor"
    ],
    correct: [2],
    explanation: "Agents for Amazon Bedrock include a reasoning loop (based on the ReAct pattern — Reasoning + Acting) where the foundation model reasons about what to do at each step, including how to handle errors. When a Lambda action group returns an error, the agent's reasoning loop interprets it, decides whether to retry, try an alternative action, or inform the user — without requiring pre-programmed error handling logic. This autonomous error handling is a key feature of agentic AI. Guardrails handle content policies. Temperature affects randomness. Model Monitor tracks deployed model quality."
  },

  // ── Q14  Domain 4  single ───────────────────────────────────────
  {
    id: 14, domain: 4, type: "single",
    text: "A company is evaluating the environmental impact of their AI workloads. The AI governance team wants to minimize the carbon footprint of their Amazon Bedrock-based application while maintaining acceptable output quality.\n\nWhich approach MOST directly reduces the environmental impact of inference workloads?",
    options: [
      "Always use the largest available foundation model to maximize output quality",
      "Select the smallest foundation model that meets the application's quality requirements — minimizing compute and energy consumption per inference",
      "Run all inference jobs as batch workloads regardless of latency requirements",
      "Increase the context window to process more requests per call"
    ],
    correct: [1],
    explanation: "Model size (parameter count) is the primary driver of compute and energy consumption per inference call. Selecting the smallest model that meets quality requirements directly minimizes energy use and carbon footprint. Model right-sizing is the environmental sustainability best practice — using a 7B parameter model for simple classification instead of a 70B parameter model for the same task dramatically reduces energy consumption. Larger models, regardless of efficiency techniques, consume more energy per inference. Batch workloads improve throughput efficiency but don't change per-inference energy consumption."
  },

  // ── Q15  Domain 3  order (Select and order THREE) ──────────────
  {
    id: 15, domain: 3, type: "order",
    text: "A team is evaluating a fine-tuned Amazon Bedrock foundation model before production deployment. Order the evaluation stages from FIRST to LAST in a rigorous model evaluation process.",
    items: [
      "Human evaluation — domain experts assess sample outputs for quality, accuracy, and task suitability",
      "Automated metric evaluation — run the model against a test dataset and compute BLEU, ROUGE, BERTScore",
      "A/B testing in production — deploy the fine-tuned model to a small percentage of live traffic and compare business metrics"
    ],
    correctOrder: [1, 0, 2],
    explanation: "<b>First — Automated metric evaluation.</b> Run the model against the full test dataset to compute objective, scalable quality metrics (BLEU, ROUGE, BERTScore, accuracy). This provides broad coverage quickly and identifies obvious quality issues before investing human time.<br><br><b>Second — Human evaluation.</b> Domain experts review a representative sample of model outputs for nuanced quality dimensions — accuracy, tone, task suitability, and safety — that automated metrics may miss. This validates the model meets real-world quality standards before live deployment.<br><br><b>Third — A/B testing in production.</b> After passing offline evaluation, deploy the fine-tuned model to a small traffic slice and compare against the baseline using live business metrics (conversion, user satisfaction, error rates). This validates real-world performance before full rollout."
  },

  // ── Q16  Domain 1  single ───────────────────────────────────────
  {
    id: 16, domain: 1, type: "single",
    text: "A company uses Amazon SageMaker Automatic Model Tuning. They run a hyperparameter tuning job testing combinations of learning rate, batch size, and regularization strength for a neural network. The tuning job strategy is set to Bayesian optimization.\n\nWhat is the PRIMARY advantage of Bayesian optimization over a simple grid search for hyperparameter tuning?",
    options: [
      "Bayesian optimization always trains faster than grid search",
      "Bayesian optimization builds a probabilistic model of how hyperparameters affect performance and focuses search on promising regions — requiring fewer total training jobs than exhaustive grid search",
      "Bayesian optimization requires no training data",
      "Bayesian optimization eliminates the need for a validation set"
    ],
    correct: [1],
    explanation: "Bayesian optimization treats hyperparameter tuning as a sequential decision problem. It builds a surrogate model (typically a Gaussian Process) of the objective function (e.g., validation accuracy) and uses an acquisition function to select the next hyperparameter configuration most likely to improve performance. This focuses search resources on promising regions of the hyperparameter space, finding good configurations with far fewer training jobs than exhaustive grid search — saving significant compute cost for expensive deep learning training. It still requires training data and validation sets."
  },

  // ── Q17  Domain 2  single ───────────────────────────────────────
  {
    id: 17, domain: 2, type: "single",
    text: "A developer uses Amazon Bedrock and wants to understand what the model 'knows' about a specific topic before deploying it. They invoke the model without any context or examples and ask a domain-specific question.\n\nWhat prompting technique is the developer using?",
    options: [
      "Few-shot prompting",
      "Chain-of-thought prompting",
      "Zero-shot prompting — testing the model's native capabilities without examples or context",
      "Retrieval augmented generation"
    ],
    correct: [2],
    explanation: "Zero-shot prompting queries the model using only the question — without examples, context documents, or step-by-step guidance. This tests the model's native parametric knowledge and reasoning ability on the topic. Zero-shot results reveal what the model already knows from pre-training. For specialized domains, zero-shot performance often reveals gaps that motivate few-shot prompting, RAG, or fine-tuning. Few-shot provides examples. Chain-of-thought guides reasoning. RAG injects retrieved documents."
  },

  // ── Q18  Domain 4  match (Select FOUR) ─────────────────────────
  {
    id: 18, domain: 4, type: "match",
    text: "A company is implementing responsible AI governance. Select the correct lifecycle stage from the following list for each governance activity. Each stage should be selected one time.",
    items: [
      "Analyze training data for representation gaps and class imbalances before training begins.",
      "Evaluate model predictions on demographic subgroups using held-out test data after training is complete.",
      "Continuously monitor deployed model predictions for emerging bias or performance drift over time.",
      "Document the model's intended use, limitations, performance metrics, and ethical considerations."
    ],
    choices: ["Model card documentation", "Post-training evaluation", "Pre-training data analysis", "Production monitoring"],
    correct: [2, 1, 3, 0],
    explanation: `
      <b>Pre-training data analysis</b> — Analyzing training data for representation gaps, label imbalances, and demographic coverage before any training occurs. SageMaker Clarify pre-training bias detection is used here.<br><br>
      <b>Post-training evaluation</b> — After training, evaluating model predictions on held-out test data — specifically measuring performance disparities across demographic subgroups using Clarify's post-training bias metrics.<br><br>
      <b>Production monitoring</b> — Continuously monitoring live predictions for emerging bias patterns, distribution shift, and model quality degradation. SageMaker Model Monitor and Clarify's bias drift monitoring are used here.<br><br>
      <b>Model card documentation</b> — Creating a structured document that captures all model information — intended use, data sources, training details, evaluation results, limitations, and ethical considerations — for transparency and accountability.`
  },

  // ── Q19  Domain 3  single ───────────────────────────────────────
  {
    id: 19, domain: 3, type: "single",
    text: "A company is building an AI assistant that will process customer queries at 10,000 requests per minute. Each request uses the same foundation model. The team wants to ensure the requests are processed efficiently and wants to know if Amazon Bedrock can handle this scale.\n\nWhich Amazon Bedrock feature should the team configure to guarantee this throughput without throttling?",
    options: [
      "On-demand pricing with auto-scaling enabled",
      "Provisioned throughput — purchasing sufficient Model Units to reserve dedicated capacity for 10,000 requests per minute",
      "Amazon Bedrock Guardrails with rate limiting",
      "Reducing the max_tokens to increase throughput"
    ],
    correct: [1],
    explanation: "Provisioned throughput allows teams to purchase dedicated Model Units (MUs) that reserve a specific inference throughput capacity exclusively for their application. With sufficient Model Units provisioned for the 10,000 requests/minute workload, the application will not be throttled by shared on-demand capacity limits. MU allocation should be sized based on tokens-per-second requirements. On-demand auto-scaling cannot guarantee a throughput SLA. Guardrails don't affect throughput. max_tokens reduction improves per-call efficiency but doesn't eliminate throttling under load."
  },

  // ── Q20  Domain 5  single ───────────────────────────────────────
  {
    id: 20, domain: 5, type: "single",
    text: "A data engineering team manages sensitive ML training data in Amazon S3. They want to implement automatic object expiration — deleting training data older than 90 days — to comply with a data minimization policy and reduce storage costs.\n\nWhich S3 feature automates this data lifecycle management?",
    options: [
      "S3 Block Public Access",
      "S3 Versioning",
      "S3 Lifecycle policies — configured to automatically expire (delete) objects after a specified number of days",
      "S3 Object Lock"
    ],
    correct: [2],
    explanation: "S3 Lifecycle policies allow teams to define rules that automatically transition objects to lower-cost storage tiers or permanently expire (delete) them after a specified number of days. Configuring a lifecycle rule to expire objects after 90 days automates the data minimization policy without manual intervention. S3 Block Public Access restricts public access. S3 Versioning preserves object history. S3 Object Lock prevents deletion for a specified period — the opposite of what's required here."
  },

  // ── Q21  Domain 2  single ───────────────────────────────────────
  {
    id: 21, domain: 2, type: "single",
    text: "A company uses Amazon Q Business to answer employee questions about company policies. An employee asks a question about the organization's remote work policy. The system returns an answer, but a manager flags that the answer reflects the old policy — the policy document was updated last week.\n\nWhat is the MOST LIKELY cause of this stale answer?",
    options: [
      "The foundation model's knowledge cutoff has changed",
      "The Amazon Q Business connector has not re-synced the updated policy document into the search index since the update",
      "The employee asked the question using incorrect grammar",
      "The system temperature was set too high, causing hallucination"
    ],
    correct: [1],
    explanation: "Amazon Q Business retrieves answers from indexed documents in its configured data sources. When a source document is updated, the connector must re-sync (re-index) to reflect the changes. If the policy was updated last week but the connector hasn't re-crawled the document, the index still contains the old policy text, and Q Business returns outdated answers. The solution is to configure more frequent connector sync schedules or trigger a manual sync after policy updates. This is a retrieval index freshness issue, not an LLM knowledge cutoff issue."
  },

  // ── Q22  Domain 1  single ───────────────────────────────────────
  {
    id: 22, domain: 1, type: "single",
    text: "A company wants to build a next-best-action recommendation system for retail banking customers. The system receives real-time customer interaction events (login, balance check, transaction) as a streaming data feed and must produce a recommendation within 100ms.\n\nWhich Amazon SageMaker deployment option is required to meet this latency requirement?",
    options: [
      "SageMaker Batch Transform — running daily batch prediction jobs",
      "SageMaker Asynchronous Inference Endpoints — for requests processed over minutes",
      "SageMaker Real-Time Inference Endpoints — serving individual predictions with sub-100ms latency",
      "SageMaker Serverless Inference — with cold start times up to several seconds"
    ],
    correct: [2],
    explanation: "SageMaker Real-Time Inference Endpoints are specifically designed for applications that require low-latency, synchronous predictions. With properly scaled instances, real-time endpoints can serve predictions in milliseconds — well within the 100ms requirement for the real-time banking recommendation use case. Batch Transform runs predictions on entire datasets over minutes to hours. Asynchronous Inference queues requests for later processing. Serverless Inference can have cold start delays of several seconds, violating the 100ms SLA."
  },

  // ── Q23  Domain 4  single ───────────────────────────────────────
  {
    id: 23, domain: 4, type: "single",
    text: "A team building a generative AI system for medical diagnosis receives guidance from the AI ethics board: 'The system should assist physicians but never replace their clinical judgment. The physician must review and approve all AI-generated diagnoses before they are communicated to patients.'\n\nWhich responsible AI design principle is the ethics board enforcing?",
    options: [
      "Cost optimization",
      "Inference latency minimization",
      "Human oversight — keeping humans in the decision loop for high-stakes, consequential AI decisions",
      "Model compression"
    ],
    correct: [2],
    explanation: "Human oversight (human-in-the-loop) is a foundational responsible AI principle requiring that humans retain decision authority for high-stakes outcomes — especially in safety-critical domains like medicine. The ethics board is enforcing the principle that AI systems should augment rather than replace human judgment for consequential decisions. This is implemented technically through systems like Amazon A2I or workflow gates that require physician approval before AI output reaches patients. Cost, latency, and compression are engineering considerations irrelevant to this governance requirement."
  },

  // ── Q24  Domain 3  multi (Select TWO) ─────────────────────────
  {
    id: 24, domain: 3, type: "multi",
    text: "A developer is evaluating a foundation model from Amazon Bedrock for a customer-facing application. The company requires the model to be available in AWS GovCloud (US) for data residency compliance and to have been pre-screened for toxic content generation.\n\nWhich TWO factors should the developer verify during model selection? (Select TWO.)",
    options: [
      "Model availability in AWS GovCloud (US) — not all Bedrock models are available in every AWS Region",
      "The model's ability to generate 3D rendering output",
      "Whether the model provider publishes safety evaluations and toxicity test results for the model",
      "The model's physical server location in the provider's data center",
      "Whether the model supports MP3 audio file generation"
    ],
    correct: [0, 2],
    explanation: "Regional availability (A) is a hard requirement — data residency compliance mandates that the model inference occurs within GovCloud (US), and not all Bedrock foundation models are deployed in all Regions. Teams must verify the specific model is available in the required Region. Safety evaluation documentation (C) — including toxicity benchmarks and red-team testing results — helps teams assess whether the model meets content safety requirements before deployment. The physical server location is managed by AWS. 3D rendering and audio generation are irrelevant to the stated requirements."
  },

  // ── Q25  Domain 5  multi (Select TWO) ─────────────────────────
  {
    id: 25, domain: 5, type: "multi",
    text: "A company is building a zero-trust security architecture for their AI workloads on AWS. They want every request to Amazon Bedrock — regardless of network source — to be authenticated and authorized, with no implicit trust based on network location.\n\nWhich TWO security controls implement zero-trust principles for Amazon Bedrock access? (Select TWO.)",
    options: [
      "Require all Bedrock API calls to authenticate using AWS STS temporary credentials (via IAM Role assumption) — never using long-lived access keys",
      "Allow all traffic from the corporate VPN without additional authentication",
      "Enforce VPC endpoint policies that restrict Bedrock API access to only approved IAM principals, regardless of network source",
      "Grant all applications within the corporate network full Bedrock access without IAM restrictions",
      "Use S3 Block Public Access as the primary access control for Bedrock"
    ],
    correct: [0, 2],
    explanation: "STS temporary credentials (A) implement zero-trust at the identity layer — every API call must present a valid, short-lived credential that expires automatically, eliminating persistent credentials that can be compromised. VPC endpoint policies (C) implement zero-trust at the network layer — restricting Bedrock access to specific, named IAM principals even when requests originate from within the VPC, rather than granting implicit trust to any traffic from the internal network. VPN-based trust and network-level full access violate zero-trust. S3 Block Public Access is unrelated to Bedrock access control."
  },

  // ── Q26  Domain 2  match (Select THREE) ────────────────────────
  {
    id: 26, domain: 2, type: "match",
    text: "Select the correct Amazon Bedrock model customization technique from the following list for each description. Each technique should be selected one time.",
    items: [
      "Continues training an existing foundation model on large amounts of unlabeled domain-specific text to deepen its understanding of specialized terminology and concepts.",
      "Trains the model on curated labeled instruction-response pairs to teach it a specific task behavior, format, or tone.",
      "At inference time, retrieves relevant document chunks from an external knowledge base and injects them into the prompt — without any changes to model weights."
    ],
    choices: ["Continued pre-training", "Instruction fine-tuning", "Retrieval augmented generation (RAG)"],
    correct: [0, 1, 2],
    explanation: `
      <b>Continued pre-training</b> — Resumes pre-training on domain-specific unlabeled data (medical texts, legal documents, technical manuals) to teach the model domain vocabulary and concepts. Updates model weights. Suitable for large unlabeled domain corpora.<br><br>
      <b>Instruction fine-tuning</b> — Trains on labeled instruction-response examples to teach specific task behavior. Produces the deepest behavioral adaptation for well-defined tasks but requires quality labeled data and compute for training.<br><br>
      <b>Retrieval augmented generation (RAG)</b> — A runtime technique that retrieves relevant external content and injects it as prompt context. Does not modify model weights. Best for frequently changing knowledge and when source attribution is required.`
  },

  // ── Q27  Domain 1  single ───────────────────────────────────────
  {
    id: 27, domain: 1, type: "single",
    text: "A company's ML model for customer churn prediction was performing well. After a major product redesign, the churn model's recall drops by 30 percentage points. The input data distribution hasn't changed, but the reasons customers churn have fundamentally shifted.\n\nWhich monitoring alert would have detected this issue EARLIEST in a SageMaker Model Monitor deployment?",
    options: [
      "Data quality alert — detecting missing values in input features",
      "Model quality alert — detecting degradation in recall compared to a ground truth baseline",
      "Infrastructure alert — detecting high CPU utilization on the inference endpoint",
      "S3 storage alert — detecting excessive model artifact storage usage"
    ],
    correct: [1],
    explanation: "SageMaker Model Monitor's model quality monitoring mode compares actual predictions against ground truth labels (when available with a delay) and tracks metrics like recall, precision, and F1 score over time. A model quality alert configured with a recall threshold would detect the 30-point drop as soon as sufficient labeled ground truth becomes available — the earliest indicator that model behavior has degraded. Data quality alerts detect input distribution changes. Infrastructure alerts detect compute issues. Storage alerts are unrelated to model accuracy."
  },

  // ── Q28  Domain 3  single ───────────────────────────────────────
  {
    id: 28, domain: 3, type: "single",
    text: "A developer builds an Amazon Bedrock-powered assistant that must answer questions based solely on company policy documents. During testing, the assistant correctly identifies when a document contains an answer, but also generates confident answers for questions where no supporting document was retrieved.\n\nWhich prompt engineering instruction BEST mitigates this behavior?",
    options: [
      "Increase the temperature to produce more varied answers",
      "Add an explicit instruction in the system prompt: 'If the retrieved context does not contain information sufficient to answer the question, respond only with: I do not have enough information to answer this question'",
      "Reduce the chunk size in the knowledge base ingestion pipeline",
      "Remove the system prompt entirely to allow the model full flexibility"
    ],
    correct: [1],
    explanation: "Explicitly instructing the model to respond with a defined refusal message when retrieved context is insufficient directly addresses confident hallucination in RAG systems. This system prompt instruction trains the model's in-context behavior to prefer 'I don't know' over confabulating an answer — a critical safety guardrail for document-grounded assistants. This works in conjunction with Bedrock Guardrails' grounding check. Higher temperature worsens hallucination. Chunk size affects retrieval granularity. Removing the system prompt removes safety constraints."
  },

  // ── Q29  Domain 4  multi (Select TWO) ─────────────────────────
  {
    id: 29, domain: 4, type: "multi",
    text: "A company is designing responsible AI principles into a new generative AI product. The product team asks: 'What does it mean for our AI system to be truly transparent?'\n\nWhich TWO practices BEST demonstrate transparency for a deployed AI system? (Select TWO.)",
    options: [
      "Publish a model card documenting the model's training data sources, evaluation results, intended uses, and known limitations",
      "Keep all model details proprietary and undisclosed to protect competitive advantage",
      "Provide users with clear disclosure that they are interacting with an AI system — not a human",
      "Maximize model complexity to improve accuracy at the expense of explainability",
      "Disable audit logging to simplify operations"
    ],
    correct: [0, 2],
    explanation: "Model cards (A) are the primary documentation mechanism for AI transparency — informing stakeholders (users, regulators, partners) about how the model was built, what it is capable of, where it fails, and how it should and should not be used. AI disclosure (C) — clearly telling users they are interacting with an AI — is a fundamental transparency requirement in many regulations (EU AI Act, FTC guidelines) and a basic user trust principle. Opacity, complexity at the expense of explainability, and disabling logs are anti-transparency practices."
  },

  // ── Q30  Domain 5  single ───────────────────────────────────────
  {
    id: 30, domain: 5, type: "single",
    text: "A company's security team performs a quarterly review of IAM permissions for their ML platform. They discover that several IAM roles have accumulated permissions over time that are no longer needed — a pattern called 'permission creep.'\n\nWhich AWS tool helps identify and remediate over-permissioned IAM roles by analyzing actual service usage and suggesting permission reductions?",
    options: [
      "AWS Artifact",
      "Amazon Inspector",
      "AWS IAM Access Analyzer and IAM Access Advisor — which show last-accessed service data to identify unused permissions",
      "Amazon Macie"
    ],
    correct: [2],
    explanation: "AWS IAM Access Analyzer identifies resource policies that grant external or unintended access. IAM Access Advisor shows the last time each service permission was used by an IAM role — helping teams identify permissions that haven't been exercised recently. Security teams use this data to remove unused permissions and right-size roles to the principle of least privilege. AWS Artifact provides compliance documentation. Inspector scans for vulnerabilities. Macie discovers sensitive data in S3. None of these analyze IAM permission usage patterns."
  }

];

export default questions;
