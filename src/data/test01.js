// Test 1 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// ─────────────────────────────────────────────────
  // DOMAIN 1: Fundamentals of AI and ML (6 questions)
  // ─────────────────────────────────────────────────
  {
    id: 1, domain: 1,
    type: "single",
    text: "A data scientist wants to train a model to predict whether an email is spam or not. The training dataset contains emails that have already been labeled as spam or not spam. Which type of machine learning is being used?",
    options: [
      "Unsupervised learning",
      "Reinforcement learning",
      "Supervised learning",
      "Self-supervised learning"
    ],
    correct: [2],
    explanation: "Supervised learning uses labeled training data, where each input has a known output (label). Because the emails are pre-labeled as spam/not spam, this is a supervised classification task. Unsupervised learning finds patterns in unlabeled data; reinforcement learning uses rewards/penalties; self-supervised learning generates its own labels from raw data."
  },
  {
    id: 2, domain: 1,
    type: "single",
    text: "A company trains an ML model to predict house prices. The model performs extremely well on training data but performs poorly on new, unseen data. Which concept BEST describes this problem?",
    options: [
      "Underfitting",
      "Overfitting",
      "Class imbalance",
      "Data drift"
    ],
    correct: [1],
    explanation: "Overfitting occurs when a model learns the training data too well — including noise — and fails to generalize to unseen data. This is reflected by high training accuracy and low test accuracy. Underfitting is the opposite (model too simple). Class imbalance affects classification. Data drift is a production concern."
  },
  {
    id: 3, domain: 1,
    type: "multi",
    text: "A company is evaluating whether to use an ML solution. In which TWO situations would an ML solution likely NOT be the best approach? (Select TWO)",
    options: [
      "When a deterministic, rule-based algorithm can solve the problem reliably",
      "When the company wants to identify fraud patterns in millions of transactions",
      "When regulatory requirements mandate a fully explainable, auditable decision process with no tolerance for probabilistic outputs",
      "When the company needs real-time product recommendations for an e-commerce site",
      "When there is a large volume of labeled image data for a computer vision task"
    ],
    correct: [0, 2],
    explanation: "ML adds unnecessary complexity when deterministic rules work perfectly (A). Compliance-heavy environments requiring full auditability and zero probabilistic error are also poor fits for ML (C). Fraud detection (B), recommendation engines (D), and image classification with labeled data (E) are all strong ML use cases."
  },
  {
    id: 4, domain: 1,
    type: "single",
    text: "A machine learning pipeline includes stages for data collection, data pre-processing, model training, evaluation, and deployment. A team wants to automate model retraining when model performance degrades in production. Which AWS service is MOST suited for monitoring a deployed model and detecting data or concept drift?",
    options: [
      "Amazon SageMaker Feature Store",
      "Amazon SageMaker Model Monitor",
      "AWS Glue DataBrew",
      "Amazon SageMaker Data Wrangler"
    ],
    correct: [1],
    explanation: "Amazon SageMaker Model Monitor continuously monitors the quality of deployed ML models by detecting data drift, model quality drift, bias drift, and feature attribution drift. SageMaker Feature Store manages feature data. Glue DataBrew and Data Wrangler are used for data preparation stages, not production monitoring."
  },
  {
    id: 5, domain: 1,
    type: "single",
    text: "A business analyst wants to analyze customer sentiment from thousands of product reviews. They have no data science experience. Which AWS managed AI service provides a ready-to-use capability for this task WITHOUT requiring model training?",
    options: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Lex"
    ],
    correct: [2],
    explanation: "Amazon Comprehend is a natural language processing (NLP) service that provides pre-trained models for sentiment analysis, entity recognition, key phrase extraction, and more — no training required. SageMaker requires ML expertise. Rekognition is for image/video analysis. Lex is for building conversational interfaces (chatbots)."
  },
  {
    id: 6, domain: 1,
    type: "single",
    text: "A model evaluation report shows an F1 score of 0.92 and an AUC-ROC of 0.88. An F1 score combines which two metrics?",
    options: [
      "Accuracy and recall",
      "Precision and recall",
      "Sensitivity and specificity",
      "True positive rate and false positive rate"
    ],
    correct: [1],
    explanation: "The F1 score is the harmonic mean of precision and recall. It is particularly useful when class distributions are imbalanced. AUC-ROC measures the tradeoff between true positive rate and false positive rate across thresholds. Accuracy alone can be misleading with imbalanced datasets."
  },

  // ─────────────────────────────────────────────────
  // DOMAIN 2: Fundamentals of Generative AI (7 questions)
  // ─────────────────────────────────────────────────
  {
    id: 7, domain: 2,
    type: "single",
    text: "A generative AI application produces a confident but factually incorrect answer about a recent event. The model was not trained on this event. Which generative AI limitation BEST describes this behavior?",
    options: [
      "Bias",
      "Overfitting",
      "Hallucination",
      "Prompt injection"
    ],
    correct: [2],
    explanation: "Hallucination refers to when an LLM generates plausible-sounding but factually incorrect or fabricated information. This commonly occurs when the model is asked about topics outside its training data or knowledge cutoff. Bias refers to skewed outputs from skewed training data. Prompt injection is a security attack."
  },
  {
    id: 8, domain: 2,
    type: "single",
    text: "A large language model converts text into numerical representations that capture semantic meaning, enabling similarity searches across documents. What are these numerical representations called?",
    options: [
      "Tokens",
      "Parameters",
      "Embeddings",
      "Weights"
    ],
    correct: [2],
    explanation: "Embeddings are dense numerical vector representations of text (or other data) that capture semantic meaning. They allow AI systems to compare similarity between pieces of text. Tokens are the smallest units of text processed by an LLM. Parameters and weights are part of the model's internal learned values."
  },
  {
    id: 9, domain: 2,
    type: "single",
    text: "An enterprise is selecting a foundation model for a multilingual customer support chatbot that must respond in under 2 seconds and handle 15 languages. Which factor is the MOST critical initial selection criterion?",
    options: [
      "Model size measured in total parameter count",
      "Modality support and multi-lingual capability",
      "The AWS Region where the model is hosted",
      "Whether the model supports custom fine-tuning"
    ],
    correct: [1],
    explanation: "For a multilingual chatbot, the model's ability to understand and respond in multiple languages (modality and multi-lingual capability) is the most critical initial criterion. Latency (response time) is closely tied to model size and infrastructure, but without language support, those considerations are moot. Fine-tuning can be done later if needed."
  },
  {
    id: 10, domain: 2,
    type: "multi",
    text: "A startup wants to build and prototype a generative AI application on AWS. Which TWO AWS services are MOST directly suited for developing and experimenting with generative AI applications using foundation models? (Select TWO)",
    options: [
      "Amazon Bedrock",
      "AWS Glue",
      "Amazon SageMaker JumpStart",
      "Amazon Redshift",
      "AWS Lake Formation"
    ],
    correct: [0, 2],
    explanation: "Amazon Bedrock provides fully managed access to a wide range of foundation models via API, making it ideal for building GenAI apps without managing infrastructure. Amazon SageMaker JumpStart offers pre-trained models, solution templates, and one-click deployment for ML and GenAI. AWS Glue, Redshift, and Lake Formation are data services, not GenAI development platforms."
  },
  {
    id: 11, domain: 2,
    type: "single",
    text: "A company is evaluating the cost of using a foundation model in production. The model provider charges based on the number of tokens processed in requests and responses. The team notices that adding extensive context to every API call significantly increases costs. What pricing model is being described?",
    options: [
      "Provisioned throughput pricing",
      "Instance-based compute pricing",
      "Token-based pricing",
      "Reserved capacity pricing"
    ],
    correct: [2],
    explanation: "Token-based pricing charges based on the number of input and output tokens consumed per API call. Longer prompts and responses directly increase cost. Provisioned throughput is a separate model that reserves model capacity for consistent performance and is priced differently. Instance-based pricing applies to compute infrastructure."
  },
  {
    id: 12, domain: 2,
    type: "single",
    text: "A development team wants to give business users a no-code environment to prototype and experiment with generative AI applications using Amazon Bedrock foundation models. Which AWS offering BEST meets this need?",
    options: [
      "Amazon Q Developer",
      "PartyRock, an Amazon Bedrock Playground",
      "Amazon SageMaker Studio",
      "Amazon Lex"
    ],
    correct: [1],
    explanation: "PartyRock is a no-code, hands-on generative AI app-building playground powered by Amazon Bedrock. It lets users experiment with foundation models and build shareable AI-powered apps without writing code. Amazon Q Developer is an AI coding assistant. SageMaker Studio is an IDE for ML development. Lex is a conversational AI service."
  },
  {
    id: 13, domain: 2,
    type: "single",
    text: "A foundation model is described as 'multi-modal.' What does this mean?",
    options: [
      "The model can be deployed in multiple AWS Regions simultaneously",
      "The model can process and/or generate multiple types of data such as text, images, and audio",
      "The model uses multiple neural network architectures in an ensemble",
      "The model supports multiple programming language SDKs"
    ],
    correct: [1],
    explanation: "A multi-modal model can work with more than one type of data modality — for example, processing both text and images as input and/or generating outputs in different formats (text, image, audio). This enables use cases like image captioning, visual question answering, and text-to-image generation."
  },

  // ─────────────────────────────────────────────────
  // DOMAIN 3: Applications of Foundation Models (9 questions)
  // ─────────────────────────────────────────────────
  {
    id: 14, domain: 3,
    type: "single",
    text: "A company wants its foundation model to answer questions based on its internal knowledge base of proprietary documents. The documents are not part of the model's training data. Which approach allows the model to answer accurately WITHOUT retraining the model?",
    options: [
      "Continuous pre-training",
      "Retrieval Augmented Generation (RAG)",
      "Instruction fine-tuning",
      "Increasing the temperature parameter"
    ],
    correct: [1],
    explanation: "RAG augments a foundation model by retrieving relevant documents from an external knowledge base at inference time and including them in the prompt context. This allows the model to answer questions using up-to-date or proprietary information without the cost of retraining. Fine-tuning modifies model weights. Increasing temperature affects randomness, not knowledge."
  },
  {
    id: 15, domain: 3,
    type: "single",
    text: "A company is building a RAG application on Amazon Bedrock. They need to store and retrieve vector embeddings from their document knowledge base. Which AWS service is designed to store and query these vector embeddings?",
    options: [
      "Amazon S3 Glacier",
      "AWS Glue",
      "Amazon OpenSearch Service",
      "Amazon DynamoDB"
    ],
    correct: [2],
    explanation: "Amazon OpenSearch Service supports vector search capabilities and is a supported vector store for Amazon Bedrock Knowledge Bases. Other AWS services that support vector embeddings for RAG include Amazon Aurora (pgvector), Amazon RDS for PostgreSQL, Amazon Neptune, and Amazon DocumentDB. S3 Glacier is for archival. DynamoDB does not natively support vector search."
  },
  {
    id: 16, domain: 3,
    type: "single",
    text: "A developer is crafting a prompt for a foundation model. The prompt provides the task description followed by three example input-output pairs before asking the model to complete a new task. Which prompt engineering technique is this?",
    options: [
    "Negative prompting",
    "Zero-shot prompting",
    "Chain-of-thought prompting",
    "Few-shot prompting"
  ],
    correct: [3],
    explanation: "Few-shot prompting provides several (typically 2–5) examples of input-output pairs within the prompt to guide the model's behavior on a new task. Zero-shot provides no examples. Chain-of-thought asks the model to reason through steps. Negative prompting specifies what the model should NOT do or include."
  },
  {
    id: 17, domain: 3,
    type: "single",
    text: "A team wants a foundation model to complete a multi-step workflow: look up a customer account, check order history, and then draft a personalized email. This requires the model to call external APIs and tools autonomously across multiple steps. Which Amazon Bedrock feature enables this?",
    options: [
      "Amazon Bedrock Guardrails",
      "Amazon Bedrock Knowledge Bases",
      "Agents for Amazon Bedrock",
      "Amazon Bedrock Model Evaluation"
    ],
    correct: [2],
    explanation: "Agents for Amazon Bedrock allows foundation models to autonomously plan and execute multi-step tasks by calling external APIs, querying knowledge bases, and using tools — all without human intervention at each step. Guardrails enforce content safety policies. Knowledge Bases store vectorized documents for RAG. Model Evaluation assesses model performance."
  },
  {
    id: 18, domain: 3,
    type: "single",
    text: "An AI engineer sets the temperature parameter to 0.0 when invoking a foundation model. What effect does this have on the model's output?",
    options: [
    "The model will generate longer responses",
    "The model will refuse to answer sensitive questions",
    "The model output becomes more random and creative",
    "The model output becomes deterministic and focused on the highest-probability token"
  ],
    correct: [3],
    explanation: "Temperature controls the randomness of LLM outputs. A temperature of 0.0 makes the model deterministic — it always picks the most likely next token — producing consistent, focused responses. Higher temperatures (e.g., 0.9–1.2) increase randomness and creativity. Temperature does not affect response length or content filtering."
  },
  {
    id: 19, domain: 3,
    type: "single",
    text: "A security researcher discovers that carefully crafted user input caused a foundation model to ignore its original system instructions and behave in unintended ways. Which prompt engineering risk does this describe?",
    options: [
      "Prompt poisoning",
      "Prompt hijacking (jailbreaking)",
      "Hallucination",
      "Model inversion"
    ],
    correct: [1],
    explanation: "Prompt hijacking (also called jailbreaking) involves crafting input that overrides or circumvents the model's original instructions or safety guidelines, causing it to produce unintended outputs. Prompt poisoning involves corrupting training data. Hallucination is factual fabrication. Model inversion is a privacy attack to extract training data."
  },
  {
    id: 20, domain: 3,
    type: "multi",
    text: "A team is evaluating the performance of a fine-tuned foundation model for a text summarization task. Which TWO metrics are commonly used to evaluate the quality of generated summaries? (Select TWO)",
    options: [
      "ROUGE (Recall-Oriented Understudy for Gisting Evaluation)",
      "AUC-ROC",
      "BLEU (Bilingual Evaluation Understudy)",
      "F1 Score",
      "Mean Absolute Error (MAE)"
    ],
    correct: [0, 2],
    explanation: "ROUGE measures overlap between generated and reference summaries, focusing on recall. BLEU measures n-gram precision between generated and reference text and is widely used for translation/summarization tasks. AUC-ROC and F1 score are classification metrics. MAE is a regression metric. Neither AUC-ROC nor MAE are standard GenAI text quality metrics."
  },
  {
    id: 21, domain: 3,
    type: "single",
    text: "A company wants to customize a foundation model to follow specific formatting instructions and respond in their brand's tone and style across all use cases. The company does NOT have proprietary domain knowledge to incorporate — only instruction examples. Which customization approach is MOST appropriate?",
    options: [
      "Retrieval Augmented Generation (RAG)",
      "Instruction fine-tuning",
      "Increasing context window length",
      "Continuous pre-training"
    ],
    correct: [1],
    explanation: "Instruction fine-tuning trains the foundation model on examples of instruction-response pairs that demonstrate the desired behavior, tone, and format. It is ideal when the goal is to shape HOW the model responds (style, format, persona) rather than WHAT it knows. RAG adds knowledge at inference time. Continuous pre-training adds new domain knowledge at training time."
  },
  {
    id: 22, domain: 3,
    type: "single",
    text: "Which of the following BEST describes the purpose of Reinforcement Learning from Human Feedback (RLHF) in the fine-tuning of foundation models?",
    options: [
    "To generate synthetic labeled data for downstream supervised learning",
    "To increase the size of the training dataset automatically",
    "To align model outputs with human preferences by training on human preference rankings",
    "To reduce the computational cost of running inference on large models"
  ],
    correct: [2],
    explanation: "RLHF is a fine-tuning technique that uses human feedback (preference rankings between model outputs) as a reward signal to train a reward model, which then guides further fine-tuning via reinforcement learning. The goal is to align model behavior with human values and preferences. It does not reduce inference cost or automatically expand datasets."
  },

  // ─────────────────────────────────────────────────
  // DOMAIN 4: Guidelines for Responsible AI (4 questions)
  // ─────────────────────────────────────────────────
  {
    id: 23, domain: 4,
    type: "single",
    text: "A company deployed an ML model for loan applications. An audit finds that the model denies loans at a significantly higher rate for a specific demographic group, even when controlling for creditworthiness. Which responsible AI concern does this represent?",
    options: [
      "Model overfitting",
      "Algorithmic bias",
      "Data drift",
      "Prompt injection"
    ],
    correct: [1],
    explanation: "Algorithmic bias occurs when an AI/ML model produces systematically unfair outcomes for specific groups, often due to biased training data, biased features, or flawed model design. This is a critical responsible AI concern with legal, ethical, and reputational implications. Amazon SageMaker Clarify can detect bias in ML models."
  },
  {
    id: 24, domain: 4,
    type: "single",
    text: "A company uses a foundation model to generate product descriptions. They want to prevent the model from generating harmful, offensive, or off-brand content. Which Amazon Bedrock feature should they implement?",
    options: [
    "Amazon Bedrock Model Evaluation",
    "Amazon Bedrock Knowledge Bases",
    "Amazon Bedrock Guardrails",
    "Amazon SageMaker Model Monitor"
  ],
    correct: [2],
    explanation: "Amazon Bedrock Guardrails allows teams to configure policies that filter harmful content, block restricted topics, mask PII, and apply grounding checks — helping enforce responsible AI use. Knowledge Bases are for RAG. Model Monitor tracks production model performance. Model Evaluation assesses quality of outputs, not real-time filtering."
  },
  {
    id: 25, domain: 4,
    type: "single",
    text: "A compliance officer asks the AI team to explain why a model made a specific credit decision. The team reviews the model documentation and feature importance scores. Which principle of responsible AI is the compliance officer invoking?",
    options: [
      "Inclusivity",
      "Explainability and transparency",
      "Scalability",
      "Model robustness"
    ],
    correct: [1],
    explanation: "Explainability and transparency refer to the ability to understand and communicate how and why an AI model makes a decision. This is a key responsible AI principle, especially in regulated industries like finance and healthcare. Amazon SageMaker Clarify and SageMaker Model Cards help document and explain model decisions."
  },
  {
    id: 26, domain: 4,
    type: "multi",
    text: "A company is building a generative AI application and wants to ensure it follows responsible AI practices. Which TWO actions BEST support responsible AI development? (Select TWO)",
    options: [
      "Using diverse and representative datasets to reduce bias",
      "Maximizing model parameter count to improve all outcomes",
      "Documenting model capabilities, limitations, and intended use cases",
      "Deploying models without evaluation to accelerate time to market",
      "Using the largest available foundation model regardless of environmental cost"
    ],
    correct: [0, 2],
    explanation: "Responsible AI includes using diverse, representative datasets to minimize demographic bias (A) and clearly documenting model capabilities, limitations, and intended use with model cards (C). Maximizing parameter count doesn't guarantee responsibility and has environmental costs. Skipping evaluation introduces risk. Ignoring sustainability conflicts with responsible AI principles."
  },

  // ─────────────────────────────────────────────────
  // DOMAIN 5: Security, Compliance, and Governance for AI Solutions (4 questions)
  // ─────────────────────────────────────────────────
  {
    id: 27, domain: 5,
    type: "single",
    text: "An organization wants to ensure that only authorized users can invoke specific foundation models in Amazon Bedrock. Which AWS capability should they use to control access?",
    options: [
      "Amazon Macie",
      "AWS IAM roles and policies",
      "Amazon CloudFront",
      "AWS Trusted Advisor"
    ],
    correct: [1],
    explanation: "AWS IAM (Identity and Access Management) roles and policies are used to control who can access AWS resources and what actions they can perform — including invoking specific Amazon Bedrock models. Amazon Macie is for discovering and protecting sensitive data in S3. CloudFront is a CDN. Trusted Advisor provides best-practice recommendations."
  },
  {
    id: 28, domain: 5,
    type: "single",
    text: "A financial services company uses an AI model to process sensitive customer data. A security team wants a complete audit trail of all API calls made to their AI services, including who made the call, when, and from where. Which AWS service provides this capability?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Audit Manager"
    ],
    correct: [2],
    explanation: "AWS CloudTrail records all API calls across AWS services, capturing who made the call, the source IP, the time, and the request/response details. This provides the audit trail required for security analysis, compliance, and operational troubleshooting. CloudWatch monitors performance metrics. Config tracks resource configuration changes. Audit Manager helps with evidence collection for audits."
  },
  {
    id: 29, domain: 5,
    type: "single",
    text: "A company's AI governance policy requires that all training data used for ML models be tracked from its origin through every transformation. Which data governance concept does this describe?",
    options: [
      "Data retention",
      "Data lineage",
      "Data residency",
      "Data versioning"
    ],
    correct: [1],
    explanation: "Data lineage tracks the origin of data and all transformations it undergoes as it flows through pipelines. It is a critical governance practice for reproducibility, compliance, and debugging of AI/ML systems. Data retention is about how long data is kept. Data residency concerns where data is stored geographically. Data versioning tracks changes to dataset versions."
  },
  {
    id: 30, domain: 5,
    type: "single",
    text: "A company is evaluating its compliance posture for an AI workload on AWS. They want to ensure that their use of AWS AI services complies with ISO standards and that AWS maintains the necessary certifications. Which AWS service lets them access AWS compliance reports and certifications on demand?",
    options: [
      "AWS Config",
      "Amazon Inspector",
      "AWS Artifact",
      "Amazon Macie"
    ],
    correct: [2],
    explanation: "AWS Artifact is a self-service portal for on-demand access to AWS compliance reports, certifications, and agreements — including ISO certifications, SOC reports, and PCI DSS documentation. AWS Config tracks resource configuration and compliance rules. Amazon Inspector assesses application vulnerabilities. Amazon Macie discovers sensitive data."
  }
];

export default questions;
