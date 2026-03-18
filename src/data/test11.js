// Test 11 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// ── Q1  Domain 1  match (Select FIVE) ─────────────────────────
  {
    id: 1, domain: 1, type: "match",
    text: "Select the correct AWS AI/ML service from the following list for each description. Each service should be selected one time.",
    items: [
      "A managed service that converts spoken audio into written text transcripts.",
      "A managed service that analyzes text to detect sentiment, entities, and key phrases.",
      "A managed service that extracts text, tables, and form fields from scanned documents and images.",
      "A managed service that provides personalized product or content recommendations.",
      "A managed service that detects objects, scenes, and inappropriate content in images and videos."
    ],
    choices: ["Amazon Comprehend", "Amazon Personalize", "Amazon Rekognition", "Amazon Textract", "Amazon Transcribe"],
    correct: [4, 0, 3, 1, 2],
    explanation: `
      <b>Amazon Transcribe</b> — Automatic speech recognition (ASR) service that converts audio to text. Used for transcription, captions, and voice-enabled applications.<br><br>
      <b>Amazon Comprehend</b> — Natural language processing (NLP) service that analyzes text for sentiment, entities, key phrases, language, and topics.<br><br>
      <b>Amazon Textract</b> — Goes beyond simple OCR to extract structured data (tables, forms, key-value pairs) from scanned documents and images — no ML expertise required.<br><br>
      <b>Amazon Personalize</b> — Fully managed service for building real-time personalization and recommendation systems using the same technology as Amazon.com.<br><br>
      <b>Amazon Rekognition</b> — Computer vision service for image and video analysis including object detection, face analysis, content moderation, and custom label detection.`
  },

  // ── Q2  Domain 1  single ────────────────────────────────────────
  {
    id: 2, domain: 1, type: "single",
    text: "A company trains a binary classification model to detect fraudulent transactions. The dataset contains 98% legitimate transactions and 2% fraudulent ones. The trained model achieves 98.1% accuracy on the test set.\n\nWhy is accuracy an insufficient metric in this scenario?",
    options: [
      "Accuracy cannot be computed for binary classification problems",
      "A model that predicts every transaction as legitimate would also achieve 98% accuracy, revealing that high accuracy can mask complete failure to detect the minority class",
      "The model should achieve 100% accuracy before deployment",
      "Accuracy is only valid when classes are evenly distributed in the test set"
    ],
    correct: [1],
    explanation: "With a 98% majority class, a naive model that always predicts 'legitimate' achieves 98% accuracy while identifying zero fraud cases. This class imbalance makes accuracy a deceptive metric. For fraud detection, recall (catching actual fraud) and precision (minimizing false alarms) are critical. F1 score, AUC-ROC, and precision-recall curves provide much more useful information about model performance on imbalanced datasets."
  },

  // ── Q3  Domain 1  multi (Select TWO) ──────────────────────────
  {
    id: 3, domain: 1, type: "multi",
    text: "A data scientist notices that a model achieves 99% accuracy on training data but only 72% accuracy on the validation set. The training dataset contains 500,000 records.\n\nWhich TWO techniques will MOST directly address this problem? (Select TWO.)",
    options: [
      "Apply regularization such as L1, L2, or dropout to reduce model complexity",
      "Increase the number of training epochs to further minimize training loss",
      "Add more diverse, representative training data to improve generalization",
      "Switch from a validation set to a training set for evaluation",
      "Increase the model's learning rate to speed up convergence"
    ],
    correct: [0, 2],
    explanation: "The large gap between training accuracy (99%) and validation accuracy (72%) is a clear sign of overfitting — the model memorized training patterns including noise. Regularization (L1/L2 penalties, dropout) constrains the model's complexity, preventing it from fitting noise. Adding more diverse training data gives the model more patterns to learn from, improving generalization. More training epochs and a higher learning rate would worsen overfitting. Evaluating on training data defeats the purpose of evaluation."
  },

  // ── Q4  Domain 2  single ────────────────────────────────────────
  {
    id: 4, domain: 2, type: "single",
    text: "A developer is building a generative AI customer service bot using Amazon Bedrock. During testing, the bot reveals its internal system prompt instructions when users ask it to 'repeat everything before this message.'\n\nWhich type of security vulnerability does this represent?",
    options: [
      "SQL injection",
      "Prompt leaking — a form of prompt injection that extracts hidden system instructions",
      "Cross-site scripting (XSS)",
      "Denial of service attack"
    ],
    correct: [1],
    explanation: "Prompt leaking is a prompt injection attack where a user crafts input to trick the model into revealing its hidden system prompt or instructions. System prompts often contain proprietary business logic, persona definitions, or security constraints. Mitigations include Amazon Bedrock Guardrails, system prompt hardening with explicit 'never reveal instructions' directives, and output filtering. This is distinct from SQL injection (database attacks), XSS (browser script injection), and DoS attacks."
  },

  // ── Q5  Domain 2  order (Select and order THREE) ───────────────
  {
    id: 5, domain: 2, type: "order",
    text: "A company wants to adapt a pre-trained foundation model to understand its proprietary industry terminology and respond accurately to domain-specific questions.\n\nOrder the following customization approaches from the stage that should be attempted FIRST to the stage attempted LAST.",
    items: [
      "Prompt engineering with few-shot domain examples",
      "Retrieval augmented generation (RAG) with a domain knowledge base",
      "Fine-tuning on labeled domain-specific input-output pairs"
    ],
    correctOrder: [0, 1, 2],
    explanation: "AWS recommends a progression from least to most operationally intensive. <b>Prompt engineering</b> should always be tried first — it requires no infrastructure or data preparation, and few-shot examples can guide domain-specific responses immediately. <b>RAG</b> is the next step — it supplements the model with a retrievable knowledge base of domain documents, providing grounded context without modifying model weights. <b>Fine-tuning</b> is the final resort when prompt engineering and RAG are insufficient — it modifies model weights using labeled examples, delivering the highest domain adaptation but at the highest cost and complexity."
  },

  // ── Q6  Domain 2  single ────────────────────────────────────────
  {
    id: 6, domain: 2, type: "single",
    text: "A company uses Amazon Bedrock to power a customer-facing chatbot. The model has a knowledge cutoff of early 2024 and the company's product catalog is updated monthly.\n\nWhich solution ensures the chatbot always answers based on the current product catalog with MINIMAL model retraining?",
    options: [
      "Fine-tune the foundation model monthly with the updated catalog",
      "Increase the model's temperature to improve response variety",
      "Implement Amazon Bedrock Knowledge Bases with the product catalog, re-syncing the knowledge base monthly",
      "Extend the model's context window to store the entire catalog in memory"
    ],
    correct: [2],
    explanation: "Amazon Bedrock Knowledge Bases implements RAG — it ingests documents, creates embeddings, and stores them in a managed vector store. Re-syncing the knowledge base when the catalog updates (monthly) refreshes the retrieval index without any model retraining. The model dynamically retrieves current catalog entries at query time. Monthly fine-tuning is expensive and operationally heavy. Temperature controls randomness, not knowledge currency. Context windows have hard size limits and can't store an entire catalog."
  },

  // ── Q7  Domain 3  single (Case Study part 1) ───────────────────
  {
    id: 7, domain: 3, type: "single",
    caseStudy: "A financial services company is building an AI assistant to help relationship managers answer complex questions about investment products. The assistant must only reference approved internal research reports stored in Amazon S3. Answers must cite the specific report and page that supports each claim. The company uses Amazon Bedrock and wants to minimize hallucinations.",
    caseLabel: "CASE STUDY — Questions 7–10",
    text: "Which solution architecture will BEST meet the requirements for grounded, citable answers?",
    options: [
      "Fine-tune a foundation model on the research reports to embed their content into model weights",
      "Use Amazon Bedrock Knowledge Bases with the research reports as the data source, enabling the model to retrieve and cite specific document chunks",
      "Use a high temperature setting to encourage the model to generate more detailed responses",
      "Prompt engineer the model to memorize all report content within the system prompt"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Knowledge Bases implements RAG, which retrieves specific chunks from source documents and injects them into the model's context at query time. Critically, it can return source attribution — which document and section was retrieved — enabling the model to cite specific reports and pages. Fine-tuning embeds knowledge into weights but cannot provide citations. High temperature increases randomness and hallucination risk. A system prompt cannot hold an entire research library."
  },

  // ── Q8  Domain 3  single (Case Study part 2) ───────────────────
  {
    id: 8, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) The compliance team wants to prevent the AI assistant from providing specific investment advice or making buy/sell recommendations, even if asked directly by a relationship manager.\n\nWhich configuration will enforce this restriction at the application layer?",
    options: [
      "Reduce the max_tokens parameter to limit response length",
      "Configure denied topics in Amazon Bedrock Guardrails to block investment advice and buy/sell recommendations",
      "Set the temperature to 0 to make responses more conservative",
      "Remove the knowledge base and revert to a zero-shot model"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Guardrails' denied topics feature allows you to define specific subject categories that the model must not engage with, regardless of how the question is phrased. Configuring 'investment advice' and 'buy/sell recommendations' as denied topics intercepts matching queries and responses, returning a compliant refusal message instead. Temperature controls randomness, not topic restrictions. max_tokens limits length. Removing the knowledge base removes grounding but doesn't enforce topic restrictions."
  },

  // ── Q9  Domain 3  single (Case Study part 3) ───────────────────
  {
    id: 9, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) The engineering team wants to compare two foundation models — Claude and Mistral — to determine which produces more accurate, relevant responses for the investment research use case. They have a set of 200 expert-validated question-answer pairs.\n\nWhich Amazon Bedrock feature supports this systematic model comparison?",
    options: [
      "Amazon Bedrock Playgrounds for side-by-side manual testing",
      "Amazon Bedrock Model Evaluation with the expert-validated dataset as a custom evaluation set",
      "Amazon SageMaker Clarify for bias detection between the two models",
      "AWS Cost Explorer to compare model pricing"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Model Evaluation allows teams to run automated evaluations using custom datasets — in this case, the 200 expert-validated Q&A pairs. It computes metrics such as ROUGE, BERTScore, and accuracy against the reference answers for each model, enabling an objective, data-driven comparison at scale. Bedrock Playgrounds supports quick manual testing but not systematic evaluation at scale. SageMaker Clarify focuses on bias detection. Cost Explorer compares pricing, not quality."
  },

  // ── Q10  Domain 3  single (Case Study part 4) ──────────────────
  {
    id: 10, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) After deployment, the company wants to ensure that model responses are not reproducing verbatim passages from the proprietary research reports, which could create IP and confidentiality concerns.\n\nWhich Amazon Bedrock Guardrails capability detects when model outputs are not properly grounded or are too closely echoing source material?",
    options: [
      "Word filters",
      "PII masking",
      "Contextual grounding check",
      "Sensitive information filters"
    ],
    correct: [2],
    explanation: "The contextual grounding check in Amazon Bedrock Guardrails evaluates model responses against the retrieved source content — detecting both hallucinated responses (not supported by sources) and responses that too closely reproduce source material verbatim. It helps enforce that the model synthesizes and paraphrases rather than reproducing confidential content directly. Word filters block specific terms. PII masking redacts personal information. Sensitive information filters handle data categories like SSNs."
  },

  // ── Q11  Domain 1  single ───────────────────────────────────────
  {
    id: 11, domain: 1, type: "single",
    text: "A team is building a machine learning pipeline and wants to track which version of the training data, code, and hyperparameters produced each model artifact, so they can reproduce any experiment exactly.\n\nWhich concept does this describe?",
    options: [
      "Model deployment",
      "Data augmentation",
      "ML experiment reproducibility and lineage tracking",
      "Transfer learning"
    ],
    correct: [2],
    explanation: "Experiment reproducibility requires tracking the complete provenance of a model artifact: which dataset version was used, which preprocessing code ran, which hyperparameter configuration was applied, and which training job produced the artifact. Amazon SageMaker Experiments and SageMaker Pipelines provide native lineage tracking. Without this, teams cannot diagnose performance changes, reproduce results, or satisfy audit requirements. This is a core MLOps practice."
  },

  // ── Q12  Domain 4  match (Select FOUR) ─────────────────────────
  {
    id: 12, domain: 4, type: "match",
    text: "Select the correct responsible AI principle from the following list for each scenario. Each principle should be selected one time.",
    items: [
      "A bank's AI loan system cannot explain why an applicant was denied, leaving the applicant with no recourse.",
      "An AI hiring tool rejects candidates from certain ZIP codes at higher rates due to historical hiring patterns in the training data.",
      "A medical AI system produces confident diagnoses that are factually incorrect because its training data contained labeling errors.",
      "A facial recognition system performs 95% accurately on lighter-skinned faces but only 68% accurately on darker-skinned faces."
    ],
    choices: ["Explainability", "Fairness", "Robustness", "Veracity"],
    correct: [0, 1, 3, 2],
    explanation: `
      <b>Explainability</b> — The loan system cannot explain its decisions, violating the principle that AI systems must be able to provide understandable reasons for their outputs. This is legally required in many lending regulations.<br><br>
      <b>Fairness</b> — The hiring tool produces disparate outcomes based on ZIP code — a proxy for protected characteristics. Responsible AI requires equitable performance across demographic groups.<br><br>
      <b>Veracity</b> — The medical AI generates confident but factually incorrect diagnoses due to corrupted training labels. Veracity requires AI outputs to be truthful and grounded in accurate information.<br><br>
      <b>Robustness</b> — The facial recognition system performs inconsistently across demographic groups, meaning it fails under real-world demographic variation. A robust system maintains reliable performance across diverse inputs.`
  },

  // ── Q13  Domain 2  multi (Select TWO) ─────────────────────────
  {
    id: 13, domain: 2, type: "multi",
    text: "A developer is selecting a foundation model from Amazon Bedrock for a document summarization task. The documents are legal contracts that can be 50–80 pages long.\n\nWhich TWO model selection criteria are MOST critical for this specific task? (Select TWO.)",
    options: [
      "A large enough context window to process full 50–80 page contracts without truncation",
      "Support for text-to-image generation",
      "Strong text summarization benchmark performance on legal or long-document tasks",
      "The model's ability to generate audio narration",
      "Support for real-time video analysis"
    ],
    correct: [0, 2],
    explanation: "A 50–80 page legal contract may contain 30,000–60,000 tokens. Selecting a model with a sufficient context window (A) is a hard requirement — truncation would cause critical contract clauses to be omitted from the summary. Strong summarization benchmark performance on long or legal documents (C) ensures the model can produce accurate, coherent summaries of complex material. Text-to-image, audio narration, and video analysis are irrelevant for text-only document summarization."
  },

  // ── Q14  Domain 3  single ───────────────────────────────────────
  {
    id: 14, domain: 3, type: "single",
    text: "A developer wants to build an Agents for Amazon Bedrock workflow where the agent checks customer order status. The agent must call the company's existing Order Management API when a customer asks about their order.\n\nWhich component of Agents for Amazon Bedrock defines the available API operations the agent can invoke?",
    options: [
      "Knowledge Base",
      "Action group",
      "System prompt",
      "Guardrail policy"
    ],
    correct: [1],
    explanation: "Action groups in Agents for Amazon Bedrock define the external capabilities (API operations) that an agent can invoke to take actions. Each action group typically references an OpenAPI schema describing the API endpoints and parameters, and an AWS Lambda function that implements the actual business logic. The agent reasons about which action group to call based on user intent. Knowledge Bases provide document retrieval. System prompts define persona. Guardrails enforce content policies."
  },

  // ── Q15  Domain 1  single ───────────────────────────────────────
  {
    id: 15, domain: 1, type: "single",
    text: "A data scientist uses Amazon SageMaker to train multiple model versions with different hyperparameter configurations. After training, the data scientist needs to compare training metrics, visualize loss curves, and select the best-performing configuration.\n\nWhich SageMaker feature provides a centralized view for comparing these training runs?",
    options: [
      "SageMaker Model Monitor",
      "SageMaker Data Wrangler",
      "SageMaker Experiments",
      "SageMaker Feature Store"
    ],
    correct: [2],
    explanation: "Amazon SageMaker Experiments organizes and tracks multiple training runs, capturing hyperparameters, metrics (loss, accuracy, AUC), artifacts, and parameters for each run. It provides a unified comparison view so data scientists can identify the best-performing configuration. Model Monitor tracks production data and model quality drift. Data Wrangler is for data preparation. Feature Store manages reusable ML features across teams."
  },

  // ── Q16  Domain 5  match (Select FOUR) ─────────────────────────
  {
    id: 16, domain: 5, type: "match",
    text: "Select the correct AWS security service from the following list for each description. Each service should be selected one time.",
    items: [
      "Records all API calls made to AWS services — including Amazon Bedrock InvokeModel calls — providing an immutable audit trail.",
      "Automatically discovers and classifies personally identifiable information (PII) stored in Amazon S3 buckets.",
      "Continuously evaluates AWS resource configurations against defined compliance rules and reports non-compliant resources.",
      "Centrally manages permissions controlling which users, roles, and services can access AWS resources."
    ],
    choices: ["AWS CloudTrail", "AWS Config", "AWS Identity and Access Management (IAM)", "Amazon Macie"],
    correct: [0, 3, 1, 2],
    explanation: `
      <b>AWS CloudTrail</b> — Captures all AWS API calls with timestamps, source identity, and parameters. Essential for auditing AI workload invocations, model deployments, and configuration changes.<br><br>
      <b>Amazon Macie</b> — Uses ML to automatically discover, classify, and alert on sensitive data (PII, financial data, PHI) in S3. Critical for data governance in AI training pipelines.<br><br>
      <b>AWS Config</b> — Continuously tracks resource configurations and evaluates them against defined rules. Identifies non-compliant resources (e.g., unencrypted SageMaker endpoints) and supports automated remediation.<br><br>
      <b>AWS Identity and Access Management (IAM)</b> — The foundational AWS service for authentication and authorization. Controls who can do what across all AWS services including SageMaker and Bedrock.`
  },

  // ── Q17  Domain 3  single ───────────────────────────────────────
  {
    id: 17, domain: 3, type: "single",
    text: "A prompt engineer is designing a system for a technical support chatbot. The engineer wants the model to always structure responses with three sections: 'Problem Identified', 'Root Cause', and 'Resolution Steps'.\n\nWhich prompt engineering technique MOST efficiently enforces this consistent output structure?",
    options: [
      "Chain-of-thought prompting",
      "Zero-shot prompting without any format instructions",
      "A prompt template that specifies the required output format and includes a demonstration example",
      "Increasing the top_p parameter to 0.99"
    ],
    correct: [2],
    explanation: "A prompt template with explicit format instructions and a demonstration example (few-shot) is the most reliable way to enforce consistent output structure. The template specifies the three required sections, and the example shows the model exactly how a properly formatted response looks. Chain-of-thought guides reasoning steps, not output structure. Zero-shot without instructions produces inconsistent structure. top_p controls sampling diversity, not response format."
  },

  // ── Q18  Domain 4  single ───────────────────────────────────────
  {
    id: 18, domain: 4, type: "single",
    text: "An AI team trains a model for clinical risk prediction. After deployment, a physician notices the model consistently underestimates risk for a specific patient subgroup. An investigation finds this subgroup was severely underrepresented in the training dataset.\n\nWhich type of bias caused this performance disparity?",
    options: [
      "Confirmation bias",
      "Automation bias",
      "Representation bias from insufficient training data for the affected subgroup",
      "Anchoring bias"
    ],
    correct: [2],
    explanation: "Representation bias occurs when certain groups or subgroups are underrepresented in training data, causing the model to learn inadequate patterns for those groups and underperform on them in production. The remedy is targeted data collection for the underrepresented subgroup, rebalancing the training dataset, and re-evaluating performance specifically on that subgroup. SageMaker Clarify can detect representation imbalances before training. Confirmation, automation, and anchoring biases are cognitive biases in human decision-making, not statistical ML training data biases."
  },

  // ── Q19  Domain 2  single ───────────────────────────────────────
  {
    id: 19, domain: 2, type: "single",
    text: "A developer invokes an Amazon Bedrock foundation model and receives responses that include the customer's full name and phone number that were present in the input prompt. The company's privacy policy prohibits customer PII from appearing in model outputs.\n\nWhich Amazon Bedrock Guardrails capability should the developer configure?",
    options: [
      "Denied topics filter",
      "Word filters",
      "PII entity detection and redaction for model outputs",
      "Contextual grounding check"
    ],
    correct: [2],
    explanation: "Amazon Bedrock Guardrails' PII detection and redaction feature automatically identifies personal information (names, phone numbers, email addresses, SSNs, credit card numbers) in both model inputs and outputs, then masks or blocks that information before it is returned to the user. Configuring output PII redaction directly addresses the privacy policy violation. Denied topics block subject areas. Word filters block specific terms. Grounding checks assess factual accuracy against source documents."
  },

  // ── Q20  Domain 5  single ───────────────────────────────────────
  {
    id: 20, domain: 5, type: "single",
    text: "A machine learning team needs to share Amazon SageMaker training data stored in Amazon S3 across multiple AWS accounts within the same organization. They want to ensure data access is governed with fine-grained, column-level permissions and a centralized access policy.\n\nWhich AWS service provides this centralized data governance capability for data lakes?",
    options: [
      "AWS Identity and Access Management (IAM) with bucket policies",
      "AWS Lake Formation",
      "Amazon Macie",
      "AWS Glue DataBrew"
    ],
    correct: [1],
    explanation: "AWS Lake Formation provides centralized data lake governance with fine-grained access control down to the column and row level across Amazon S3 and AWS Glue Data Catalog. It enables cross-account data sharing with consistent permission policies enforced across all consumers. IAM bucket policies provide coarse-grained S3 access but not column-level control across accounts at scale. Macie discovers sensitive data but doesn't govern access. DataBrew is a data preparation tool."
  },

  // ── Q21  Domain 3  multi (Select TWO) ─────────────────────────
  {
    id: 21, domain: 3, type: "multi",
    text: "A company is evaluating whether to use RAG or fine-tuning to improve a foundation model's performance on their internal customer support use case. Customer support policies update frequently.\n\nWhich TWO factors MOST strongly favor RAG over fine-tuning for this scenario? (Select TWO.)",
    options: [
      "The support policies change frequently — RAG knowledge bases can be updated without retraining the model",
      "Fine-tuning always produces more accurate responses than RAG",
      "RAG allows the model to cite specific source documents, providing traceability for support decisions",
      "Fine-tuning is always faster to implement than RAG",
      "RAG permanently modifies the foundation model's weights to learn new policies"
    ],
    correct: [0, 2],
    explanation: "Frequent policy updates (A) strongly favor RAG because the knowledge base can be re-indexed with new policies without any model retraining — making it far easier and cheaper to maintain currency. Source citation capability (C) is a major RAG advantage for customer support — representatives can verify and share the exact policy document that grounded an answer. Fine-tuning can outperform RAG for style/tone but not for dynamic knowledge. RAG does not modify model weights — that is a characteristic of fine-tuning."
  },

  // ── Q22  Domain 1  single ───────────────────────────────────────
  {
    id: 22, domain: 1, type: "single",
    text: "Which AWS service provides a low-code, visual interface for data scientists to import, explore, clean, and transform datasets for ML model training — without requiring them to write PySpark or Pandas scripts?",
    options: [
      "Amazon SageMaker Pipelines",
      "Amazon SageMaker Feature Store",
      "Amazon SageMaker Data Wrangler",
      "AWS Glue Studio"
    ],
    correct: [2],
    explanation: "Amazon SageMaker Data Wrangler provides a visual, low-code interface for the complete data preparation workflow: importing from S3, Redshift, or Athena; exploring data quality; visualizing distributions; applying 300+ built-in transformations; and exporting to SageMaker Pipelines for automation. It generates PySpark or Pandas code automatically. SageMaker Pipelines orchestrates ML workflows. Feature Store manages ML features. AWS Glue Studio is for ETL data engineering workflows, not ML-specific data preparation."
  },

  // ── Q23  Domain 4  multi (Select TWO) ─────────────────────────
  {
    id: 23, domain: 4, type: "multi",
    text: "A company wants to deploy a generative AI system for automated customer email responses in financial services. The compliance team requires human oversight for high-stakes or ambiguous cases before responses are sent.\n\nWhich TWO AWS services support implementing a human-in-the-loop review workflow? (Select TWO.)",
    options: [
      "Amazon Augmented AI (Amazon A2I) — routes low-confidence or flagged AI outputs to human reviewers",
      "AWS CloudTrail — logs all API calls for audit purposes",
      "Amazon SageMaker Ground Truth — collects human annotations and creates labeled datasets",
      "Amazon Macie — discovers PII in S3",
      "AWS Config — tracks resource configuration compliance"
    ],
    correct: [0, 2],
    explanation: "Amazon A2I (A) provides a built-in human review workflow — AI outputs below a confidence threshold or flagged by business rules are automatically routed to human reviewers who verify or modify the response before it is sent. Amazon SageMaker Ground Truth (C) enables human labeling workflows where human reviewers annotate and validate data — useful for building the labeled datasets needed to train or evaluate models. CloudTrail, Macie, and Config serve audit, data discovery, and compliance monitoring purposes — not human-in-the-loop review."
  },

  // ── Q24  Domain 5  single ───────────────────────────────────────
  {
    id: 24, domain: 5, type: "single",
    text: "A company's security policy requires that Amazon SageMaker training jobs cannot access the internet. The training jobs need to pull training data from Amazon S3 and push model artifacts back to S3, but all traffic must remain within the AWS network.\n\nWhich TWO-PART solution meets this requirement?",
    options: [
      "Launch SageMaker training jobs in a VPC with no internet gateway, and configure an S3 VPC gateway endpoint for private S3 access",
      "Enable S3 Transfer Acceleration on the training data bucket",
      "Use AWS Direct Connect to route SageMaker traffic through the corporate data center",
      "Configure SageMaker to use public S3 endpoints with TLS encryption"
    ],
    correct: [0],
    explanation: "The correct solution is to (1) launch SageMaker training jobs within a VPC configured with no internet gateway — this prevents any outbound internet access, and (2) attach an S3 VPC gateway endpoint to the VPC — this creates a private route from the VPC to S3 that stays entirely within the AWS network. Together, training jobs can securely read from and write to S3 without any public internet exposure. Transfer Acceleration improves speed over the internet. Direct Connect routes to on-premises data centers. Public S3 endpoints traverse the internet."
  },

  // ── Q25  Domain 2  single ───────────────────────────────────────
  {
    id: 25, domain: 2, type: "single",
    text: "What is the PRIMARY business reason a company would choose Amazon Bedrock's provisioned throughput pricing over on-demand pricing for a production generative AI workload?",
    options: [
      "Provisioned throughput is always cheaper than on-demand regardless of usage volume",
      "Provisioned throughput provides dedicated model capacity with guaranteed throughput and consistent low latency — critical for high-volume, predictable production workloads",
      "Provisioned throughput allows the company to use models not available on on-demand",
      "Provisioned throughput eliminates the need for a system prompt"
    ],
    correct: [1],
    explanation: "Provisioned throughput reserves dedicated model capacity (Model Units) at a fixed cost. For high-volume, consistent production workloads, it provides guaranteed throughput (no throttling), consistent low latency, and predictable monthly costs. On-demand is more economical for variable, unpredictable, or low-volume traffic because you pay only per token used. The business decision hinges on traffic predictability and latency requirements — not absolute cost, as provisioned throughput is only cost-effective when capacity is well-utilized."
  },

  // ── Q26  Domain 3  single ───────────────────────────────────────
  {
    id: 26, domain: 3, type: "single",
    text: "A generative AI text summarization model is evaluated using the ROUGE-N metric. The ROUGE-2 score for a generated summary is 0.58 compared to a human reference summary.\n\nWhat does a ROUGE-2 score of 0.58 specifically measure?",
    options: [
      "The semantic similarity between the generated and reference summaries using BERT embeddings",
      "The proportion of 2-word sequences (bigrams) in the generated summary that also appear in the reference summary",
      "The percentage of sentences that are factually accurate",
      "The average response latency in seconds"
    ],
    correct: [1],
    explanation: "ROUGE-N measures n-gram overlap between the generated and reference text. Specifically, ROUGE-2 calculates the proportion of bigrams (consecutive 2-word sequences) in the generated summary that also appear in the reference summary. A score of 0.58 means 58% of the generated summary's bigrams match the reference — indicating reasonable but imperfect overlap. ROUGE does not measure semantic meaning (that's BERTScore), factual accuracy, or latency."
  },

  // ── Q27  Domain 4  single ───────────────────────────────────────
  {
    id: 27, domain: 4, type: "single",
    text: "A company publishes a detailed model card for its AI-powered credit scoring system. The model card documents the training data sources, performance metrics across demographic groups, known limitations, and intended use cases.\n\nWhich responsible AI principle does publishing this model card MOST directly support?",
    options: [
      "Scalability",
      "Cost optimization",
      "Transparency — enabling stakeholders to understand how the model works, its limitations, and appropriate use cases",
      "Inference latency reduction"
    ],
    correct: [2],
    explanation: "Model cards are a primary mechanism for transparency in AI systems. By documenting training data, performance across demographic groups, limitations, and intended use cases, the company enables regulators, auditors, customers, and internal teams to understand the model's behavior and appropriateness for given scenarios. This transparency supports accountability, responsible deployment decisions, and regulatory compliance — particularly important for high-stakes financial AI. Scalability, cost, and latency are engineering concerns unrelated to model cards."
  },

  // ── Q28  Domain 1  single ───────────────────────────────────────
  {
    id: 28, domain: 1, type: "single",
    text: "An AI specialist is designing a self-driving vehicle system. The vehicle must learn to navigate complex traffic scenarios by receiving reward signals for safe driving behaviors and penalty signals for traffic violations or dangerous maneuvers.\n\nWhich machine learning paradigm describes this training approach?",
    options: [
      "Supervised learning with labeled driving footage",
      "Unsupervised clustering of driving scenarios",
      "Reinforcement learning with an agent, environment, and reward function",
      "Semi-supervised learning with partially labeled sensor data"
    ],
    correct: [2],
    explanation: "Reinforcement learning (RL) is defined by an agent (the vehicle) taking actions in an environment (traffic), receiving reward signals (safe driving) or penalties (violations), and learning a policy that maximizes cumulative reward over time. This trial-and-error learning through environmental interaction is exactly the RL paradigm. Supervised learning requires labeled input-output pairs. Unsupervised clustering finds patterns in unlabeled data. Semi-supervised learning uses a mix of labeled and unlabeled data."
  },

  // ── Q29  Domain 5  multi (Select TWO) ─────────────────────────
  {
    id: 29, domain: 5, type: "multi",
    text: "A company is implementing a security review of its Amazon Bedrock-based AI application. The security team identifies that developers' IAM roles have overly broad access to Bedrock models and S3 training data.\n\nWhich TWO IAM best practices should the security team implement to remediate this? (Select TWO.)",
    options: [
      "Apply the principle of least privilege — scope IAM policies to only the specific Bedrock model ARNs and S3 bucket paths each developer needs",
      "Create one shared IAM role for all developers to simplify management",
      "Use IAM conditions to restrict Bedrock API access to approved VPC endpoints or IP ranges",
      "Grant AdministratorAccess to all developers for maximum flexibility",
      "Disable AWS CloudTrail to reduce the risk of audit log exposure"
    ],
    correct: [0, 2],
    explanation: "Least privilege scoping (A) restricts each developer's IAM policy to only the specific Bedrock model ARNs, S3 bucket paths, and actions they actually need — minimizing the blast radius of a compromised credential. IAM conditions (C) add an additional enforcement layer — for example, restricting Bedrock API calls to only originate from approved VPC endpoints or IP address ranges, preventing unauthorized access from outside the corporate environment. Shared roles, broad policies, and disabling CloudTrail all violate security best practices."
  },

  // ── Q30  Domain 3  match (Select FIVE) ─────────────────────────
  {
    id: 30, domain: 3, type: "match",
    text: "Select the correct foundation model customization technique from the following list for each description. Each technique should be selected one time.",
    items: [
      "Providing labeled input-output examples within the prompt at inference time, without modifying model weights.",
      "Extending an already pre-trained model with additional training on a large unlabeled domain-specific corpus to improve its understanding of specialized vocabulary.",
      "Training the model on curated labeled examples of desired responses to teach it a specific task format, tone, or behavior.",
      "At inference time, retrieving relevant document chunks from an external knowledge base and injecting them into the prompt as context.",
      "Instructing the model to reason through a problem step-by-step before providing a final answer."
    ],
    choices: ["Chain-of-thought prompting", "Continued pre-training", "Instruction fine-tuning", "RAG (Retrieval Augmented Generation)", "Few-shot prompting"],
    correct: [4, 1, 2, 3, 0],
    explanation: `
      <b>Few-shot prompting</b> — Includes labeled input-output examples directly in the prompt. No weight updates — the model infers the pattern from demonstrations at inference time.<br><br>
      <b>Continued pre-training</b> — Resumes the pre-training objective on a large unlabeled domain corpus. Teaches the model new vocabulary and domain concepts by updating its base weights.<br><br>
      <b>Instruction fine-tuning</b> — Uses curated labeled instruction-response pairs to adapt the model's behavior, format, or tone for a specific task. Updates model weights through supervised training.<br><br>
      <b>RAG (Retrieval Augmented Generation)</b> — At inference time, retrieves relevant external document chunks and injects them as context into the prompt. Does not modify model weights.<br><br>
      <b>Chain-of-thought prompting</b> — A prompt engineering technique that instructs the model to show its reasoning steps before a final answer. Particularly effective for arithmetic, logic, and multi-step reasoning tasks.`
  }

];

export default questions;
