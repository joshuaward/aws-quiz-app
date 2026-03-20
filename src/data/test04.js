// Test 4 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [ // Domain 1 – 6 questions (Advanced scenario-based)
    {
        id: 1,
        domain: 1,
        type: "single",
        text: "<div class='scenario-box'>A retail company processes 10 million customer transactions daily. They want a model that predicts whether each transaction is fraudulent. The model must return a prediction within 200ms per transaction. The fraud rate is 0.1% of all transactions.</div>Which combination of ML approach and inferencing type is MOST appropriate?",
        options: ["Unsupervised clustering with batch inferencing run nightly", "Supervised binary classification with real-time (online) inferencing", "Reinforcement learning with batch inferencing", "Semi-supervised regression with batch inferencing"],
        correct: [1],
        explanation: "Fraud detection is a binary classification problem (fraud / not fraud) with labeled historical data — making supervised learning ideal. The 200ms latency requirement mandates real-time inferencing (not batch). Unsupervised clustering can't classify labeled fraud. Regression predicts continuous values. Reinforcement learning requires an interactive environment. Batch would be too slow."
    },
    {
        id: 2,
        domain: 1,
        type: "multi",
        text: "A data science team notices their model's performance metrics are excellent during training but a third-party audit reveals the model's training data contained historical hiring decisions that systematically favored certain demographic groups. Which TWO actions should the team take FIRST? (Select TWO)",
        options: ["Increase the model's training epochs to further optimize performance metrics", "Audit the training data for demographic representation and bias", "Apply bias detection using Amazon SageMaker Clarify before redeploying", "Delete the model and start from scratch with random weights", "Reduce the learning rate and retrain with the same biased data"],
        correct: [1, 2],
        explanation: "The first steps are to audit the training data for representation gaps and demographic bias (B), then use SageMaker Clarify (C) to quantify pre-training and post-training bias and understand which features drive disparate outcomes. Only after understanding the root cause should remediation (data rebalancing, re-labeling, retraining) begin. More training on biased data worsens bias."
    },
    {
        id: 3,
        domain: 1,
        type: "single",
        text: "<div class='scenario-box'>A company's ML model for product demand forecasting was trained on 2019–2022 data. After COVID-era disruptions, buying patterns changed permanently. The model's predictions are now significantly less accurate even though the underlying infrastructure is unchanged.</div>What is the MOST likely cause?",
        options: ["The model has an insufficient number of parameters", "The inference server has too little memory", "Concept drift — the statistical relationship between features and the target variable has permanently changed", "The model was deployed in the wrong AWS Region"],
        correct: [2],
        explanation: "Concept drift occurs when the underlying relationship between input features and the target variable changes over time. Post-COVID consumer behavior represents a fundamental structural shift — the patterns the model learned no longer hold. This differs from data drift (input distribution changes) because it's the relationship itself that changed. The solution is to retrain on post-shift data."
    },
    {
        id: 4,
        domain: 1,
        type: "single",
        text: "A machine learning engineer wants to automate the entire ML workflow — from data preprocessing and model training to evaluation and deployment — with dependency tracking between each step. Which AWS service is MOST appropriate?",
        options: ["AWS Glue DataBrew", "Amazon SageMaker Pipelines", "Amazon SageMaker Feature Store", "AWS Step Functions with EC2"],
        correct: [1],
        explanation: "Amazon SageMaker Pipelines provides a CI/CD-like workflow orchestration capability for ML. It allows teams to define, automate, and track multi-step ML pipelines (preprocessing → training → evaluation → deployment) with reproducibility, version control, and lineage tracking. It integrates natively with all SageMaker features."
    },
    {
        id: 5,
        domain: 1,
        type: "single",
        text: "<div class='scenario-box'>A neural network model trained on medical images achieves 96% accuracy on the training set and 71% accuracy on the test set. The training set has 500,000 images; the test set has 10,000 images.</div>What is the MOST likely explanation and recommended remediation?",
        options: ["The model is underfitting; increase model complexity", "The model is overfitting; apply regularization, dropout, or reduce model complexity", "The test set is too large; reduce it to 1,000 images", "The training set is too large; reduce it to 10,000 images"],
        correct: [1],
        explanation: "A 96% train accuracy vs 71% test accuracy gap is a classic sign of overfitting — the model memorized training data patterns including noise but failed to generalize. Remediation includes regularization (L1/L2), dropout layers, early stopping, data augmentation, or simplifying the model architecture. Neither dataset size reduction is a valid fix; the test set is appropriately sized."
    },
    {
        id: 6,
        domain: 1,
        type: "single",
        text: "An organization uses Amazon SageMaker to train ML models at scale. A data scientist wants to quickly explore and visualize a raw dataset of 500,000 customer records to identify data quality issues and statistical distributions BEFORE writing any transformation code. Which SageMaker tool is BEST for this?",
        options: ["SageMaker Model Monitor", "SageMaker Experiments", "SageMaker Data Wrangler", "SageMaker Feature Store"],
        correct: [2],
        explanation: "Amazon SageMaker Data Wrangler provides a visual, no-code interface for data exploration, quality analysis, and transformation. It generates automatic data insights, visualizes distributions, detects data quality issues, and allows transformation without writing code first — ideal for exploratory data analysis (EDA) at the start of an ML workflow."
    },
    // Domain 2 – 7 questions (Advanced)
    {
        id: 7,
        domain: 2,
        type: "single",
        text: "<div class='scenario-box'>A company's GenAI chatbot is generating responses with high variability — sometimes producing very creative answers, sometimes overly conservative ones. The product team wants responses to be consistent, professional, and slightly constrained in creativity while still being natural.</div>Which inference parameter adjustment is MOST appropriate?",
        options: ["Set temperature to 0.0 for fully deterministic output", "Set temperature to 1.5 for maximum creativity", "Set temperature to a moderate value between 0.3 and 0.7", "Increase max_tokens to allow longer responses"],
        correct: [2],
        explanation: "A moderate temperature (0.3–0.7) balances consistency and naturalness. 0.0 makes outputs robotic and repetitive. Values above 1.0 introduce excessive randomness for a professional chatbot. Max_tokens controls length, not style. The goal is tuning temperature to match the desired product personality — constrained but not mechanical."
    },
    {
        id: 8,
        domain: 2,
        type: "multi",
        text: "A company is building a generative AI application that will process sensitive customer data. They want to ensure that AWS is responsible for the security of the underlying model infrastructure, while the company remains responsible for certain aspects. Which TWO items are the CUSTOMER's responsibility under the AWS shared responsibility model for a managed GenAI service like Amazon Bedrock? (Select TWO)",
        options: ["Physical security of the AWS data centers", "Encrypting sensitive data before sending it to the Bedrock API", "Managing IAM permissions that control who can invoke Bedrock models", "Patching the underlying GPU hardware running the foundation models", "Maintaining the physical network infrastructure"],
        correct: [1, 2],
        explanation: "Under the shared responsibility model, AWS owns infrastructure security (data centers, hardware, networking). The customer is responsible for security IN the cloud: encrypting sensitive prompt data (B) before transmission, and managing IAM policies (C) that govern who can invoke models. Customers control their data and access — AWS controls the underlying managed service infrastructure."
    },
    {
        id: 9,
        domain: 2,
        type: "single",
        text: "A product team is debating between using RAG versus full fine-tuning to improve their foundation model's performance on proprietary data. The data changes frequently (monthly updates). Which factor MOST strongly favors RAG over fine-tuning?",
        options: [
            "RAG eliminates the need for any infrastructure management",
            "RAG produces higher-quality outputs than fine-tuning in all scenarios",
            "RAG allows the knowledge base to be updated without retraining the model, making it better for frequently changing data",
            "Fine-tuning is always more expensive than RAG"
        ],
        correct: [2],
        explanation: "RAG's key advantage over fine-tuning for frequently updating content is that the knowledge base (vector store) can be updated independently without retraining or redeploying the model. Fine-tuning bakes knowledge into model weights — meaning updates require expensive retraining cycles. For dynamic, frequently-changing proprietary data, RAG's updateability is its decisive advantage."
    },
    {
        id: 10,
        domain: 2,
        type: "single",
        text: "A developer is building a GenAI app on Amazon Bedrock. They want to use a model that can accept a diagram image AND a textual description as input, then generate a text-based analysis. Which model capability is required?",
        options: ["Text-to-image generation", "Multi-modal input processing (vision + text)", "Speech-to-text transcription", "Streaming text output"],
        correct: [1],
        explanation: "Processing both an image (diagram) and text as input requires a multi-modal model with vision capabilities. Multi-modal models can process and reason across multiple data types — here, visual content and natural language simultaneously. Text-to-image is the reverse direction. Speech-to-text and streaming output are unrelated to multi-modal input handling."
    },
    {
        id: 11,
        domain: 2,
        type: "single",
        text: "An ML team is evaluating environmental sustainability as part of their responsible AI model selection process. Which factor is MOST directly related to the carbon footprint of running a generative AI model in production?",
        options: [
            "The number of concurrent users accessing the model",
            "The number of AWS Regions the model is available in",
            "The model's parameter count and associated compute (energy) requirements for training and inference",
            "The programming language used to build the application"
        ],
        correct: [2],
        explanation: "A model's parameter count directly correlates with compute requirements (GPU hours, energy consumption) for both training and inference. Larger models require significantly more energy. Responsible AI frameworks encourage teams to consider environmental impact when selecting models — choosing the smallest model that meets performance requirements reduces carbon footprint. AWS Region count and user count are indirect factors."
    },
    {
        id: 12,
        domain: 2,
        type: "single",
        text: "<div class='scenario-box'>A startup receives a proposal from a vendor offering a proprietary closed-source foundation model with no documentation on training data or evaluation methodology. A competitor offers an open-source foundation model with full training data disclosure and published benchmarks.</div>From a responsible AI and governance perspective, what is the PRIMARY advantage of the open-source model?",
        options: ["Open-source models always perform better than closed-source models", "The open-source model provides greater transparency, allowing the team to audit training data, assess bias, and evaluate limitations", "Open-source models are always free to use", "Closed-source models cannot be deployed on AWS"],
        correct: [1],
        explanation: "Transparency is a core responsible AI principle. An open-source model with documented training data and benchmarks allows teams to audit for bias, understand limitations, verify claims, and ensure the model is appropriate for their use case. Closed-source models with no documentation create accountability gaps. Performance, cost, and platform availability are separate considerations."
    },
    {
        id: 13,
        domain: 2,
        type: "single",
        text: "A company uses Amazon Bedrock and wants to implement semantic search across 50,000 internal documents. The first step is converting all document text into vector representations. Which process generates these vector representations?",
        options: ["Tokenization", "Model fine-tuning", "Embedding generation using an embedding model", "Hyperparameter tuning"],
        correct: [2],
        explanation: "An embedding model converts text (documents, sentences, or paragraphs) into dense numerical vectors that capture semantic meaning. These vectors are then stored in a vector database for similarity search. Amazon Bedrock supports embedding models (e.g., Amazon Titan Embeddings) for this purpose. Tokenization splits text into tokens. Fine-tuning adapts model weights. Hyperparameter tuning optimizes training."
    },
    // Domain 3 – 9 questions (Advanced)
    {
        id: 14,
        domain: 3,
        type: "single",
        text: "<div class='scenario-box'>A company is comparing three approaches to adapt a foundation model: (1) In-context learning with 5 examples per query, (2) Fine-tuning on 10,000 examples, (3) RAG with a 100,000-document knowledge base. The use case is answering highly specific questions about proprietary technical manuals that update quarterly.</div>Which approach BEST balances accuracy, update flexibility, and cost?",
        options: ["In-context learning — cheapest and fastest to implement", "Fine-tuning — best accuracy for specialized vocabulary", "RAG — knowledge base can be updated quarterly without model retraining, at lower cost than repeated fine-tuning", "Continuous pre-training — most thorough knowledge injection"],
        correct: [2],
        explanation: "RAG is optimal here: it can incorporate quarterly manual updates by simply re-indexing the knowledge base without retraining. Fine-tuning would require expensive quarterly retraining cycles. In-context learning works for a few examples but doesn't scale to 100,000 documents. Continuous pre-training is the most expensive and time-consuming approach for knowledge updates."
    },
    {
        id: 15,
        domain: 3,
        type: "multi",
        text: "A team is implementing Agents for Amazon Bedrock. The agent must retrieve customer data from a CRM, calculate a discount using business logic, and send a confirmation email. Which TWO components must be configured to enable these external actions? (Select TWO)",
        options: ["Action groups that define the API operations the agent can invoke", "A higher temperature setting for the foundation model", "AWS Lambda functions that implement the business logic and API calls", "A larger context window for the foundation model", "A custom fine-tuning dataset for the agent's foundation model"],
        correct: [0, 2],
        explanation: "Action groups define WHAT the agent can do — specifying the available API operations and their parameters (often as an OpenAPI schema). AWS Lambda functions implement the actual logic behind those actions — querying the CRM, calculating discounts, sending emails. Together they form the agent's tool-use capability. Temperature, context window, and fine-tuning don't configure agent actions."
    },
    {
        id: 16,
        domain: 3,
        type: "single",
        text: "An ML engineer evaluates a text summarization model using ROUGE-L. The ROUGE-L score measures which specific aspect of output quality?",
        options: ["The semantic similarity between generated and reference summaries using embeddings", "The longest common subsequence (LCS) overlap between generated and reference text", "The perplexity of the generated text", "The number of factual errors in the generated summary"],
        correct: [1],
        explanation: "ROUGE-L specifically measures the longest common subsequence (LCS) between the generated output and the reference text. It captures fluency and word order better than ROUGE-N (n-gram overlap) by measuring the longest matching sequence of words that appear in the same order. It does not use embeddings (that's BERTScore) and cannot directly detect factual errors."
    },
    {
        id: 17,
        domain: 3,
        type: "single",
        text: "<div class='scenario-box'>A financial services company builds a GenAI assistant. During testing, they discover that users can craft prompts that cause the model to generate investment advice that bypasses the system prompt's disclaimer requirements and violates SEC guidelines.</div>Which defense-in-depth approach BEST mitigates this risk?",
        options: ["Increase the model's temperature to randomize outputs and reduce predictability", "Implement Amazon Bedrock Guardrails with denied topics for regulated financial advice, combined with output filtering", "Switch to a smaller model with fewer parameters", "Reduce the system prompt length to decrease attack surface"],
        correct: [1],
        explanation: "Defense-in-depth for prompt injection/jailbreaking includes: Bedrock Guardrails' denied topics list (blocking SEC-regulated advice categories), output filtering (detecting and blocking non-compliant generated content), and input filtering. This layered approach catches attacks that bypass the system prompt. Increasing temperature, switching models, and shortening the system prompt don't address the security vulnerability."
    },
    {
        id: 18,
        domain: 3,
        type: "single",
        text: "Which AWS service provides an enterprise-grade search capability powered by ML that can understand natural language queries and return relevant answers from unstructured documents — without requiring custom ML expertise?",
        options: ["Amazon OpenSearch Service", "Amazon Kendra", "Amazon Comprehend", "Amazon Lex"],
        correct: [1],
        explanation: "Amazon Kendra is an intelligent enterprise search service powered by ML that understands natural language queries and extracts precise answers from unstructured documents (PDFs, Word docs, FAQs, etc.). It differs from OpenSearch (keyword-based search infrastructure) by providing semantic understanding out of the box. Comprehend is for NLP analysis. Lex builds conversational interfaces."
    },
    {
        id: 19,
        domain: 3,
        type: "multi",
        text: "A team is selecting evaluation criteria for their fine-tuned foundation model before production deployment. The model is used for customer-facing product descriptions. Which TWO evaluation approaches are MOST appropriate for this use case? (Select TWO)",
        options: ["Human evaluation — having domain experts rate output quality, accuracy, and brand alignment", "Evaluating model training loss curves only", "Automated evaluation using BLEU/ROUGE against reference descriptions", "Measuring the model's GPU memory consumption", "Counting the number of parameters in the model"],
        correct: [0, 2],
        explanation: "Human evaluation (A) is the gold standard for assessing subjective output quality, brand alignment, and customer appropriateness — things automated metrics can't fully capture. Automated BLEU/ROUGE (C) provides scalable, objective measurement of textual quality against reference outputs. Training loss, GPU memory, and parameter count are training/infrastructure metrics, not output quality indicators."
    },
    {
        id: 20,
        domain: 3,
        type: "single",
        text: "A team configures a foundation model with Top-P (nucleus sampling) set to 0.9. What does this parameter do?",
        options: ["It limits the model to the top 9 most likely next tokens", "It tells the model to only consider tokens whose cumulative probability reaches 90%, balancing diversity and coherence", "It sets the response quality threshold to 90% confidence", "It limits the response to 90% of the maximum token length"],
        correct: [1],
        explanation: "Top-P (nucleus sampling) selects tokens from the smallest set whose cumulative probability mass reaches the specified threshold (here, 90%). This keeps outputs coherent by excluding very low-probability (often incoherent) tokens while allowing more diversity than temperature alone. Top-K limits by count; Top-P limits by cumulative probability. It has no relation to confidence scores or length."
    },
    {
        id: 21,
        domain: 3,
        type: "single",
        text: "<div class='scenario-box'>An e-commerce company uses a foundation model to generate product listings. Recently, a generated listing plagiarized content from a competitor's website that appeared in the model's training data. The legal team is concerned.</div>What responsible AI and governance measure should the company implement FIRST?",
        options: ["Delete all generated listings and stop using GenAI permanently", "Implement output filtering and grounding checks in Amazon Bedrock Guardrails to detect potential verbatim reproductions", "Increase the temperature parameter to ensure outputs are more creative", "Retrain the model to remove all competitor data from weights"],
        correct: [1],
        explanation: "Bedrock Guardrails' grounding and output filtering can detect and block responses that closely replicate source content, mitigating copyright/IP risk in production. This is a practical first step. Stopping GenAI use entirely is overly drastic. Higher temperature introduces randomness but doesn't guarantee original content. Retraining to remove specific data from model weights is technically complex and expensive."
    },
    {
        id: 22,
        domain: 3,
        type: "single",
        text: "A developer is building a RAG application using Amazon Bedrock Knowledge Bases. During testing, the model returns answers that are unrelated to the retrieved documents, as if it is ignoring the context entirely. Which guardrail type in Amazon Bedrock specifically addresses this 'ungrounded' response problem?",
        options: ["Denied topics filter", "PII masking", "Contextual grounding check", "Word filters"],
        correct: [2],
        explanation: "Amazon Bedrock Guardrails' contextual grounding check detects when a model's response is not supported by the retrieved context (documents) — essentially identifying hallucinated or ungrounded outputs in RAG applications. It compares the response against the grounding source and can block or flag responses that deviate. Denied topics, PII masking, and word filters address different concerns."
    },
    // Domain 4 – 4 questions (Advanced)
    {
        id: 23,
        domain: 4,
        type: "single",
        text: "<div class='scenario-box'>A government agency deploys an AI system for welfare benefit eligibility decisions. An independent audit finds that the model denies benefits at higher rates for applicants from rural areas. Rural applicants are not a legally protected class in this jurisdiction, but they disproportionately belong to protected ethnic groups.</div>Which responsible AI principle requires action even though rural classification is not legally protected?",
        options: ["Model scalability", "Proxy discrimination — disparate impact on legally protected groups through a correlated non-protected feature", "Model interpretability", "Training data volume sufficiency"],
        correct: [1],
        explanation: "Proxy discrimination occurs when a non-protected feature (rural location) acts as a proxy for a protected characteristic (ethnicity) and produces disparate impact. Responsible AI requires examining outcomes across all correlated groups, not just legally protected ones. This is a critical fairness concern that could still result in legal liability and violates ethical AI principles regardless of direct legal protection."
    },
    {
        id: 24,
        domain: 4,
        type: "multi",
        text: "A company deploys an AI hiring tool. To ensure responsible AI, they want both transparency and human oversight of AI-assisted decisions. Which TWO mechanisms support these goals? (Select TWO)",
        options: ["Amazon SageMaker Model Cards that document model intent, limitations, and evaluation metrics", "Removing all human review to streamline AI-only decisions", "Amazon Augmented AI (Amazon A2I) to route low-confidence predictions for human review", "Disabling model logging to protect applicant privacy", "Using the highest-complexity model available to maximize accuracy"],
        correct: [0, 2],
        explanation: "SageMaker Model Cards (A) provide transparency by documenting model purpose, training data, performance, and limitations — enabling stakeholders to understand what the model does and doesn't do. Amazon A2I (C) integrates human review workflows for uncertain or sensitive AI predictions — essential for human oversight in consequential decisions like hiring. Removing humans, disabling logging, and maximizing complexity don't support responsible AI."
    },
    {
        id: 25,
        domain: 4,
        type: "single",
        text: "Which tradeoff is MOST commonly observed between model interpretability and model performance in machine learning?",
        options: ["More interpretable models always perform better on all tasks", "Highly complex models (e.g., deep neural networks) often achieve higher performance but are less interpretable than simpler models (e.g., decision trees)", "Interpretability has no relationship with model performance", "Ensemble models are always the most interpretable"],
        correct: [1],
        explanation: "There is a well-known interpretability-performance tradeoff: simpler models (logistic regression, decision trees) are highly interpretable but often less powerful on complex tasks. Deep neural networks achieve state-of-the-art performance but are often 'black boxes.' This tradeoff is a central challenge in responsible AI, especially in regulated industries where explainability is required."
    },
    {
        id: 26,
        domain: 4,
        type: "single",
        text: "A healthcare AI team wants to implement human-centered design principles for their explainable AI system. Which practice BEST embodies this principle?",
        options: ["Optimizing the model's AUC-ROC score above all other metrics", "Designing explanation interfaces based on the cognitive needs and context of the actual end users (e.g., doctors, not engineers)", "Using the largest available model to maximize accuracy", "Removing all human oversight to reduce operational costs"],
        correct: [1],
        explanation: "Human-centered design for explainable AI means designing explanation outputs for the actual humans who must understand and act on them — considering their domain expertise, cognitive load, and decision context. A doctor needs different explanations than an ML engineer. Optimizing metrics, model size, and removing oversight are not human-centered design principles."
    },
    // Domain 5 – 4 questions (Advanced)
    {
        id: 27,
        domain: 5,
        type: "single",
        text: "<div class='scenario-box'>An AI platform team is implementing security for their Amazon SageMaker training environment. They need to ensure training jobs can access S3 data and CloudWatch logs, but cannot access the internet or other AWS services beyond what's explicitly needed.</div>Which combination achieves this with least privilege?",
        options: ["Attach AdministratorAccess IAM policy to the SageMaker execution role", "Create an IAM execution role with specific policies for only the required S3 buckets and CloudWatch, and deploy training jobs in a VPC with no internet gateway", "Use root account credentials for maximum access", "Enable public access on all S3 training buckets"],
        correct: [1],
        explanation: "The secure approach combines: (1) An IAM execution role with narrowly scoped policies granting access only to specific S3 buckets and CloudWatch — enforcing least privilege, and (2) VPC deployment with no internet gateway — preventing exfiltration of training data or model artifacts. AdministratorAccess violates least privilege. Root credentials are a security anti-pattern. Public S3 access exposes sensitive training data."
    },
    {
        id: 28,
        domain: 5,
        type: "single",
        text: "A company's AI governance framework requires quarterly compliance reviews of their ML workloads. They need to automatically assess their AWS resource configurations against compliance rules (e.g., ensuring all SageMaker endpoints are encrypted) and generate reports. Which AWS service BEST supports this continuous compliance monitoring?",
        options: ["Amazon Inspector", "AWS Audit Manager", "AWS Config with conformance packs", "Amazon Macie"],
        correct: [2],
        explanation: "AWS Config continuously tracks resource configurations and evaluates them against defined compliance rules. Conformance packs bundle multiple Config rules for specific compliance standards, enabling automated, continuous compliance monitoring and reporting across ML resources. Audit Manager collects evidence for audits but relies on Config for configuration assessment. Inspector focuses on vulnerability scanning. Macie covers data sensitivity."
    },
    {
        id: 29,
        domain: 5,
        type: "multi",
        text: "A company handles PII in their AI training pipeline on AWS. Which TWO security controls are MOST important for protecting this data throughout its lifecycle? (Select TWO)",
        options: ["Encrypting data at rest using AWS KMS and in transit using TLS", "Storing all PII in the same S3 bucket as public model artifacts", "Using Amazon Macie to discover and classify PII in S3 training data", "Granting all developers read/write access to all training data buckets", "Disabling CloudTrail to prevent performance overhead"],
        correct: [0, 2],
        explanation: "Encrypting PII at rest (AWS KMS) and in transit (TLS) (A) protects data from unauthorized access at every stage. Amazon Macie (C) automatically discovers and classifies PII in S3, enabling teams to know where sensitive data resides and trigger remediation. Mixing PII with public artifacts, over-provisioning access, and disabling audit logging all violate data security best practices."
    },
    {
        id: 30,
        domain: 5,
        type: "single",
        text: "A company's AI governance policy requires all foundation model invocations via Amazon Bedrock to be logged for compliance review. Which approach enables centralized logging of all Bedrock API calls including which model was invoked, by whom, and what time?",
        options: ["Enable Amazon Bedrock's automatic model training logs", "Configure AWS CloudTrail to log Amazon Bedrock API calls to a centralized S3 bucket", "Use Amazon CloudWatch metrics to track token counts", "Enable Amazon Macie on the S3 bucket storing model outputs"],
        correct: [1],
        explanation: "AWS CloudTrail captures all AWS API calls including Amazon Bedrock InvokeModel calls. Configuring CloudTrail to deliver logs to a centralized, monitored S3 bucket provides the immutable audit trail required for compliance review — showing who invoked which model, when, from what IP, with what parameters. CloudWatch metrics track usage/performance. Macie focuses on data sensitivity. Bedrock model training logs are different."
    }
];

export default questions;