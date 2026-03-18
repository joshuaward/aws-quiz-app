// Test 10 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// ── Q1  Domain 1  match (Select FIVE) ───────────────────────
  {
    id: 1, domain: 1, type: "match",
    text: "Select the correct ML term from the following list for each description. Each term should be selected one time.",
    items: [
      "When a model memorizes training data and fails to generalize to unseen examples.",
      "The process of selecting and transforming raw variables into inputs that improve model performance.",
      "A metric that balances precision and recall into a single score.",
      "Splitting data into training, validation, and test sets to fairly assess model performance.",
      "Adjusting model settings that are not learned from data, such as learning rate or tree depth."
    ],
    choices: ["Feature engineering", "Overfitting", "F1 score", "Data splitting", "Hyperparameter tuning"],
    correct: [1, 0, 2, 3, 4],
    explanation: `
      <b>Overfitting</b> — When a model memorizes training data and fails to generalize. It performs well on training data but poorly on new data.<br><br>
      <b>Feature engineering</b> — The process of selecting, transforming, and creating input variables to improve model performance. Good features lead to better models.<br><br>
      <b>F1 score</b> — The harmonic mean of precision and recall. It is useful for imbalanced datasets where accuracy alone is misleading.<br><br>
      <b>Data splitting</b> — Dividing a dataset into separate subsets (training, validation, test) to train, tune, and fairly evaluate a model on unseen data.<br><br>
      <b>Hyperparameter tuning</b> — Adjusting model configuration settings that are set before training (not learned from data), such as learning rate, number of layers, or tree depth.`
  },

  // ── Q2  Domain 1  single ─────────────────────────────────────
  {
    id: 2, domain: 1, type: "single",
    text: "A data scientist is building a model to predict the selling price of houses based on square footage, number of bedrooms, and location. The dataset contains thousands of labeled historical sales records.\n\nWhich type of ML problem does this describe?",
    options: [
      "Binary classification",
      "Clustering",
      "Regression",
      "Reinforcement learning"
    ],
    correct: [2],
    explanation: "Regression models predict a continuous numeric output — in this case, a house's selling price. The model learns a mapping from input features (square footage, bedrooms, location) to a continuous target variable (price). Binary classification predicts one of two categories. Clustering groups unlabeled data. Reinforcement learning trains agents through reward signals."
  },

  // ── Q3  Domain 1  multi (Select TWO) ────────────────────────
  {
    id: 3, domain: 1, type: "multi",
    text: "A company evaluates ML models for a medical diagnosis application. The application must minimize false negatives — cases where the model incorrectly predicts a patient does not have a disease.\n\nWhich TWO evaluation metrics directly measure the model's ability to correctly identify positive cases? (Select TWO.)",
    options: [
      "Recall (sensitivity)",
      "Specificity",
      "F1 score",
      "Mean squared error (MSE)",
      "Root mean squared error (RMSE)"
    ],
    correct: [0, 2],
    explanation: "Recall (also called sensitivity or true positive rate) measures the proportion of actual positive cases that the model correctly identifies. A high recall means fewer false negatives — critical for medical diagnosis. F1 score balances precision and recall, and therefore also reflects the model's ability to find positive cases. Specificity measures true negative rate. MSE and RMSE are regression metrics."
  },

  // ── Q4  Domain 2  single ─────────────────────────────────────
  {
    id: 4, domain: 2, type: "single",
    text: "Which characteristic best describes the term 'foundation model'?",
    options: [
      "A small, task-specific model trained from scratch for a single use case",
      "A rule-based system that uses if-then logic without any training data",
      "A large model pre-trained on broad datasets that can be adapted to a wide range of downstream tasks",
      "A model that only processes structured tabular data"
    ],
    correct: [2],
    explanation: "A foundation model is a large AI model trained on vast, diverse datasets using self-supervised learning. It serves as a general-purpose base that can be fine-tuned or prompted for a wide variety of downstream tasks — from text generation to summarization to question answering. Amazon Bedrock provides access to multiple foundation models. Task-specific models, rule-based systems, and tabular-only models do not fit this definition."
  },

  // ── Q5  Domain 2  match (Select THREE) ───────────────────────
  {
    id: 5, domain: 2, type: "match",
    text: "Select the correct Amazon Bedrock feature from the following list for each description. Each feature should be selected one time.",
    items: [
      "Connects a foundation model to proprietary documents so it can retrieve and cite relevant information at query time.",
      "Filters model inputs and outputs to block harmful content, denied topics, and personally identifiable information.",
      "Allows a foundation model to autonomously plan and execute multi-step tasks by invoking external APIs and tools."
    ],
    choices: ["Agents for Amazon Bedrock", "Amazon Bedrock Guardrails", "Amazon Bedrock Knowledge Bases"],
    correct: [2, 1, 0],
    explanation: `
      <b>Amazon Bedrock Knowledge Bases</b> — Connects a foundation model to a vector store of proprietary documents, enabling retrieval augmented generation (RAG). The model retrieves relevant document chunks at query time to ground its responses.<br><br>
      <b>Amazon Bedrock Guardrails</b> — Applies real-time safety and content policies to both model inputs and outputs. It can block harmful content, PII, denied topics, and hallucinated responses.<br><br>
      <b>Agents for Amazon Bedrock</b> — Enables an FM to autonomously orchestrate multi-step workflows by reasoning about tasks, selecting actions, and invoking external APIs or Lambda functions to complete complex requests.`
  },

  // ── Q6  Domain 2  single ─────────────────────────────────────
  {
    id: 6, domain: 2, type: "single",
    text: "A developer is invoking a foundation model through Amazon Bedrock. The developer sets the temperature parameter to 0.1.\n\nWhat is the expected effect on model output?",
    options: [
      "The model generates longer, more detailed responses",
      "The model produces more deterministic and consistent responses with less randomness",
      "The model ignores the system prompt",
      "The model increases the number of tokens in the response"
    ],
    correct: [1],
    explanation: "Temperature controls the randomness of token selection. A low temperature (close to 0) makes the probability distribution over the next token steeper, meaning the model almost always selects the highest-probability token. This produces more focused, deterministic, and consistent outputs. A high temperature increases diversity and creativity. Temperature does not affect response length, system prompt behavior, or token count limits."
  },

  // ── Q7  Domain 2  order (Select and order THREE) ─────────────
  {
    id: 7, domain: 2, type: "order",
    text: "An ML engineer wants to improve the accuracy of a foundation model's responses for a specific enterprise use case while keeping costs low.\n\nOrder the following improvement techniques from MOST cost-effective to LEAST cost-effective.",
    items: [
      "Prompt engineering",
      "Retrieval augmented generation (RAG)",
      "Fine-tuning on a labeled domain-specific dataset"
    ],
    correctOrder: [0, 1, 2],
    explanation: "Prompt engineering requires no infrastructure changes or data labeling — you craft better prompts to guide the model. It is the most cost-effective first step. RAG adds an embedding model and vector store to provide the model with relevant context at inference time. It has additional infrastructure costs but avoids expensive model retraining. Fine-tuning requires labeled data preparation and additional model training compute, making it the least cost-effective option, though it can produce the highest task-specific accuracy."
  },

  // ── Q8  Domain 2  multi (Select TWO) ────────────────────────
  {
    id: 8, domain: 2, type: "multi",
    text: "What are the primary limitations of large language models (LLMs) that organizations must account for when deploying them? (Select TWO.)",
    options: [
      "LLMs can generate confident but factually incorrect information (hallucination)",
      "LLMs cannot process text longer than 100 words",
      "LLMs have a training data cutoff and lack knowledge of events after that date",
      "LLMs are incapable of summarizing documents",
      "LLMs cannot be accessed via APIs"
    ],
    correct: [0, 2],
    explanation: "Hallucination is a core LLM limitation — models can generate plausible-sounding but factually incorrect responses, which creates risk in high-stakes applications. Knowledge cutoff is another limitation — LLMs are trained on static datasets with a specific end date, so they lack awareness of recent events, updates, or new information. Organizations use RAG with current data sources to mitigate the knowledge cutoff limitation."
  },

  // ── Q9  Domain 3  single (Case Study part 1) ─────────────────
  {
    id: 9, domain: 3, type: "single",
    caseStudy: "A retail company is building a generative AI assistant to help customers find products. The assistant must answer questions based solely on the company's current product catalog, which is updated weekly. The company wants to minimize hallucinations and avoid retraining the model each week. The company uses Amazon Bedrock.",
    caseLabel: "CASE STUDY — Questions 9–12",
    text: "Which solution will allow the assistant to answer questions using only the current product catalog with MINIMAL operational overhead?",
    options: [
      "Fine-tune a foundation model on the product catalog each week",
      "Implement Amazon Bedrock Knowledge Bases with the product catalog as the data source",
      "Increase the model temperature to improve accuracy",
      "Store the product catalog in Amazon Glacier and query it directly"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Knowledge Bases implements RAG — it ingests the product catalog, generates embeddings, and stores them in a managed vector store. At query time, relevant catalog entries are retrieved and injected into the prompt, grounding the model's answer in actual catalog content. The knowledge base can be re-synced weekly without any model retraining. Glacier is for archival storage and cannot perform semantic search."
  },

  // ── Q10 Domain 3  single (Case Study part 2) ─────────────────
  {
    id: 10, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) The company wants to prevent the assistant from responding to questions about competitor products or discussing political topics.\n\nWhich Amazon Bedrock feature will meet this requirement?",
    options: [
      "Amazon Bedrock Model Evaluation",
      "Amazon Bedrock Guardrails with denied topics configured",
      "Amazon SageMaker Clarify",
      "Increasing the max_tokens parameter"
    ],
    correct: [1],
    explanation: "Amazon Bedrock Guardrails allows teams to define denied topics — categories of content the model must not engage with. When a user query or model response touches a denied topic (competitor products, political topics), Guardrails intercepts and blocks or redirects the interaction. Model Evaluation assesses quality metrics. SageMaker Clarify detects bias. max_tokens controls response length."
  },

  // ── Q11 Domain 3  single (Case Study part 3) ─────────────────
  {
    id: 11, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) After launch, the company wants to measure how well the assistant's product recommendations match a set of expert-validated reference answers.\n\nWhich evaluation metric measures semantic similarity between generated answers and reference answers?",
    options: [
      "BLEU score",
      "BERTScore",
      "Mean squared error (MSE)",
      "Accuracy"
    ],
    correct: [1],
    explanation: "BERTScore measures semantic similarity between generated and reference text using contextual embeddings from a BERT model. Unlike BLEU, which measures exact n-gram overlap, BERTScore captures whether the meaning is similar even when different words are used — making it more appropriate for evaluating natural language responses against human reference answers. MSE is a regression metric. Accuracy is for classification."
  },

  // ── Q12 Domain 3  single (Case Study part 4) ─────────────────
  {
    id: 12, domain: 3, type: "single",
    caseStudy: null,
    text: "(Continued from Case Study) The company's security team requires that all Amazon Bedrock API calls made by the assistant be logged for auditing purposes, including which foundation model was invoked and the timestamp of each call.\n\nWhich AWS service automatically captures this information?",
    options: [
      "Amazon CloudWatch Metrics",
      "AWS CloudTrail",
      "Amazon Macie",
      "AWS Config"
    ],
    correct: [1],
    explanation: "AWS CloudTrail records all API calls made to AWS services, including Amazon Bedrock InvokeModel calls. CloudTrail logs capture who made the call, which model was invoked, the timestamp, and the source IP address. This provides the immutable API-level audit trail required for compliance review. CloudWatch Metrics captures operational metrics. Macie discovers PII in S3. AWS Config tracks resource configuration changes."
  },

  // ── Q13 Domain 1  single ─────────────────────────────────────
  {
    id: 13, domain: 1, type: "single",
    text: "A company trained an ML model using data from 2020 to 2022. The model is deployed in 2024, and its predictions have become significantly less accurate. The input data distribution has not changed, but the relationship between the inputs and the target variable has fundamentally shifted.\n\nWhich phenomenon describes this situation?",
    options: [
      "Data leakage",
      "Underfitting",
      "Concept drift",
      "Overfitting"
    ],
    correct: [2],
    explanation: "Concept drift occurs when the statistical relationship between input features and the target variable changes over time. Even though the input distribution appears stable, the model's learned patterns no longer reflect reality. This is different from data drift (where input distributions shift). Solutions include continuous monitoring with Amazon SageMaker Model Monitor and periodic retraining on fresh data."
  },

  // ── Q14 Domain 1  multi (Select TWO) ────────────────────────
  {
    id: 14, domain: 1, type: "multi",
    text: "A company is developing an ML pipeline on AWS using Amazon SageMaker. The company wants to automate the complete workflow from data processing through model training, evaluation, and deployment, with version tracking at each step.\n\nWhich TWO Amazon SageMaker features support this automated pipeline workflow? (Select TWO.)",
    options: [
      "Amazon SageMaker Pipelines",
      "Amazon SageMaker Ground Truth",
      "Amazon SageMaker Experiments",
      "Amazon SageMaker Data Wrangler",
      "Amazon SageMaker Canvas"
    ],
    correct: [0, 2],
    explanation: "Amazon SageMaker Pipelines provides CI/CD-style workflow orchestration for ML — defining, scheduling, and running multi-step pipelines with dependency tracking and reproducibility. Amazon SageMaker Experiments tracks and organizes multiple training runs, capturing hyperparameters, metrics, and artifacts for comparison and version control. Ground Truth creates labeled datasets. Data Wrangler prepares data visually. Canvas is a no-code ML tool for business analysts."
  },

  // ── Q15 Domain 3  single ─────────────────────────────────────
  {
    id: 15, domain: 3, type: "single",
    text: "A developer wants to build a prompt template for a customer service foundation model. The developer wants the model to demonstrate the desired response format by providing one example of a customer question and an ideal response within the prompt.\n\nWhich prompting technique does this describe?",
    options: [
      "Zero-shot prompting",
      "Chain-of-thought prompting",
      "One-shot prompting",
      "Negative prompting"
    ],
    correct: [2],
    explanation: "One-shot prompting (a specific case of few-shot prompting) includes exactly one example of an input and the desired output within the prompt. The model uses this demonstration to infer the expected format, tone, and structure for new inputs. Zero-shot prompting provides no examples. Chain-of-thought prompting guides step-by-step reasoning. Negative prompting specifies what the model should not do."
  },

  // ── Q16 Domain 3  single ─────────────────────────────────────
  {
    id: 16, domain: 3, type: "single",
    text: "A company hosts internal company documents on Amazon S3. The company wants employees to ask natural language questions and receive answers based on the document contents. The company wants a fully managed solution that does not require selecting or configuring model parameters, embeddings, or vector stores.\n\nWhich AWS service will meet these requirements?",
    options: [
      "Amazon Kendra",
      "Amazon Q Business",
      "Amazon Lex",
      "Amazon SageMaker with a custom RAG pipeline"
    ],
    correct: [1],
    explanation: "Amazon Q Business is a fully managed generative AI assistant that connects to company data sources including Amazon S3. It handles all underlying technical details — model selection, embeddings, chunking strategy, and vector store management — automatically. Employees interact through a natural language interface. Amazon Kendra is an intelligent search service but requires more configuration. Lex builds chatbots. SageMaker RAG requires significant custom development."
  },

  // ── Q17 Domain 2  single ─────────────────────────────────────
  {
    id: 17, domain: 2, type: "single",
    text: "A developer invokes an Amazon Bedrock embedding model with the text: 'Customer satisfaction has improved significantly this quarter.'\n\nWhat type of output does an embedding model produce?",
    options: [
      "A text summary of the input sentence",
      "A classification label indicating the sentiment of the sentence",
      "A dense numerical vector that captures the semantic meaning of the text",
      "A translated version of the sentence in a target language"
    ],
    correct: [2],
    explanation: "Embedding models convert text into dense numerical vectors (arrays of floating-point numbers). These vectors capture the semantic meaning of the text — words and phrases with similar meanings have vectors that are close together in the embedding space. Embeddings are the foundational component for semantic search and RAG pipelines. They do not produce summaries, classifications, or translations."
  },

  // ── Q18 Domain 4  match (Select FOUR) ───────────────────────
  {
    id: 18, domain: 4, type: "match",
    text: "Select the correct Amazon SageMaker Pipelines step from the following list for each task. Each step should be selected one time.",
    items: [
      "Train a neural network model on preprocessed image data.",
      "Compute SHAP values to explain individual model predictions.",
      "Run hyperparameter search jobs across multiple training configurations.",
      "Perform data cleaning, normalization, and feature extraction on raw data."
    ],
    choices: ["ClarifyCheck", "Processing", "Training", "Tuning"],
    correct: [2, 0, 3, 1],
    explanation: `
      <b>Training step</b> — Runs a model training job on processed data. This is where neural network weights are learned from the training dataset.<br><br>
      <b>ClarifyCheck step</b> — Uses Amazon SageMaker Clarify to compute bias reports and model explainability metrics, including SHAP values that show the contribution of each feature to a prediction.<br><br>
      <b>Tuning step</b> — Creates a hyperparameter tuning job that runs multiple training jobs with different hyperparameter combinations to find the optimal configuration.<br><br>
      <b>Processing step</b> — Runs a data processing script for tasks such as data cleaning, normalization, feature engineering, and train/test splitting before model training.`
  },

  // ── Q19 Domain 4  single ─────────────────────────────────────
  {
    id: 19, domain: 4, type: "single",
    text: "A company deploys an AI-powered hiring tool. An audit finds that the model recommends significantly fewer candidates from a certain age group, even though age is not included as a model input feature. Age correlates strongly with years of experience, which is an input feature.\n\nWhich responsible AI issue does this describe?",
    options: [
      "Model underfitting",
      "Proxy discrimination — a non-protected feature acts as a proxy for a protected attribute",
      "Data leakage from the test set",
      "High model variance"
    ],
    correct: [1],
    explanation: "Proxy discrimination occurs when a model uses a feature that is correlated with a protected attribute (such as age) to produce biased outcomes, even when the protected attribute is excluded from inputs. 'Years of experience' can function as a proxy for age, causing the model to indirectly discriminate against older candidates. Responsible AI requires testing for disparate impact across protected groups, not just checking whether the protected attribute is directly used."
  },

  // ── Q20 Domain 4  multi (Select TWO) ────────────────────────
  {
    id: 20, domain: 4, type: "multi",
    text: "A company wants to incorporate responsible AI practices when developing a customer-facing AI application. The company is subject to financial services regulations.\n\nWhich TWO practices align with responsible AI principles? (Select TWO.)",
    options: [
      "Document the model's intended use cases, known limitations, and evaluation results in a model card",
      "Deploy the model immediately after training to reduce time to market, without evaluation",
      "Test the model's outputs for potential data leakage of personally identifiable information (PII)",
      "Use the highest-complexity model available to maximize performance",
      "Grant all users unrestricted access to all model features"
    ],
    correct: [0, 2],
    explanation: "Model cards (A) promote transparency by documenting intended use, limitations, training data, evaluation results, and ethical considerations — supporting regulatory compliance and stakeholder trust. Testing for PII data leakage (C) addresses data privacy and security — a core responsible AI principle in financial services where customer data is highly sensitive. Skipping evaluation, maximizing complexity at all costs, and unrestricted access all violate responsible AI principles."
  },

  // ── Q21 Domain 3  single ─────────────────────────────────────
  {
    id: 21, domain: 3, type: "single",
    text: "A company wants to train a foundation model to better understand its proprietary industry terminology. The company has a large collection of unlabeled internal documents, research papers, and technical manuals.\n\nWhich model customization technique is MOST appropriate?",
    options: [
      "Instruction fine-tuning using labeled input-output pairs",
      "Continued pre-training using the unlabeled domain-specific documents",
      "Prompt engineering using few-shot examples in the prompt",
      "Adjusting the top-p inference parameter"
    ],
    correct: [1],
    explanation: "Continued pre-training extends an already-trained foundation model by running the pre-training objective (next-token prediction) on new domain-specific data. It is well-suited for unlabeled data and is effective at teaching the model domain-specific vocabulary, concepts, and writing styles. Instruction fine-tuning requires labeled input-output pairs. Prompt engineering doesn't update model weights. Top-p is an inference parameter that doesn't affect model knowledge."
  },

  // ── Q22 Domain 1  single ─────────────────────────────────────
  {
    id: 22, domain: 1, type: "single",
    text: "Which type of data format is represented by a table with rows and columns where each row is a record and each column is a named attribute with a defined data type — such as a database table or a CSV file?",
    options: [
      "Unstructured data",
      "Semi-structured data",
      "Structured data",
      "Raw data"
    ],
    correct: [2],
    explanation: "Structured data has a standardized, predefined schema with rows and columns where each attribute has a consistent data type across all records. Database tables, CSV files, and spreadsheets are classic examples of structured data. Unstructured data includes text, images, audio, and video with no predefined format. Semi-structured data (like JSON or XML) has some organizational properties but doesn't fit into a strict tabular model."
  },

  // ── Q23 Domain 3  single ─────────────────────────────────────
  {
    id: 23, domain: 3, type: "single",
    text: "A school builds an AI tutor application. The tutor must solve multi-step math word problems and explain each step of the reasoning to students.\n\nWhich prompting technique will MOST reliably improve the AI tutor's step-by-step explanation quality?",
    options: [
      "Negative prompting",
      "Zero-shot prompting",
      "Chain-of-thought prompting",
      "Increasing the top-k parameter"
    ],
    correct: [2],
    explanation: "Chain-of-thought (CoT) prompting instructs the model to break down its reasoning into explicit intermediate steps before arriving at a final answer. This is especially effective for arithmetic, logical, and multi-step reasoning tasks. By showing the problem-solving process step by step, the model produces more accurate answers and explanations that students can follow. Zero-shot provides no guidance. Negative prompting restricts topics. Top-k is an inference sampling parameter."
  },

  // ── Q24 Domain 5  single ─────────────────────────────────────
  {
    id: 24, domain: 5, type: "single",
    text: "A healthcare company processes protected health information (PHI) for ML model training on AWS. The company wants to automatically discover, classify, and monitor sensitive data stored in Amazon S3 to ensure compliance with HIPAA requirements.\n\nWhich AWS service will meet these requirements?",
    options: [
      "AWS CloudTrail",
      "Amazon Macie",
      "AWS Config",
      "Amazon Inspector"
    ],
    correct: [1],
    explanation: "Amazon Macie uses ML to automatically discover, classify, and protect sensitive data in Amazon S3 — including PHI, PII, and financial data. It generates findings that alert teams to sensitive data exposure risks and supports compliance with regulations such as HIPAA. CloudTrail is for API activity logging. AWS Config tracks resource configuration compliance. Amazon Inspector scans for application security vulnerabilities."
  },

  // ── Q25 Domain 5  single ─────────────────────────────────────
  {
    id: 25, domain: 5, type: "single",
    text: "A company's data science team needs access to Amazon SageMaker to train and deploy ML models. They also need read access to specific Amazon S3 buckets that contain training data. The security team wants to follow the principle of least privilege.\n\nWhich approach BEST meets these requirements?",
    options: [
      "Assign the AWS-managed AdministratorAccess policy to all data scientists",
      "Share the root AWS account credentials with the data science team",
      "Create an IAM role with policies granting only the specific SageMaker actions and S3 bucket access required",
      "Make the S3 training data buckets publicly readable to ensure easy access"
    ],
    correct: [2],
    explanation: "The principle of least privilege requires granting only the minimum permissions necessary to perform a job. An IAM role scoped to specific SageMaker actions (e.g., CreateTrainingJob, CreateEndpoint) and read access to only the required S3 buckets provides exactly what is needed without excess permissions. AdministratorAccess violates least privilege. Sharing root credentials is a critical security violation. Public S3 buckets expose sensitive training data."
  },

  // ── Q26 Domain 5  multi (Select TWO) ────────────────────────
  {
    id: 26, domain: 5, type: "multi",
    text: "A financial institution wants to ensure that all ML model invocations via Amazon Bedrock are auditable and that any non-compliant resource configurations in their AWS ML environment are tracked and reported.\n\nWhich TWO AWS services will meet these requirements? (Select TWO.)",
    options: [
      "AWS CloudTrail — to log all Bedrock API calls for audit purposes",
      "Amazon Polly — to convert compliance reports to speech",
      "AWS Config — to continuously track and evaluate ML resource configurations against compliance rules",
      "AWS Glue — to catalog training data schemas",
      "Amazon Rekognition — to analyze model output images"
    ],
    correct: [0, 2],
    explanation: "AWS CloudTrail records every AWS API call including Amazon Bedrock InvokeModel calls, capturing who invoked which model, at what time, and from what source — providing the immutable audit trail required for financial services compliance. AWS Config continuously monitors resource configurations (SageMaker endpoints, S3 buckets, IAM roles) against defined compliance rules and generates findings for non-compliant resources. Polly, Glue, and Rekognition do not address auditability or configuration compliance."
  },

  // ── Q27 Domain 4  single ─────────────────────────────────────
  {
    id: 27, domain: 4, type: "single",
    text: "A company develops a generative AI model for internal legal document drafting. During testing, the model occasionally outputs text that closely reproduces passages from copyrighted legal publications in its training data.\n\nWhich responsible AI risk does this represent?",
    options: [
      "Model underfitting",
      "Data drift",
      "Intellectual property infringement risk from memorized training data",
      "Insufficient context window size"
    ],
    correct: [2],
    explanation: "Generative AI models can memorize and reproduce verbatim passages from copyrighted material in their training data. When deployed, this creates intellectual property (IP) infringement risk — the model may output content that belongs to third parties. Responsible AI requires testing for verbatim reproduction, implementing output filtering (such as Amazon Bedrock Guardrails' grounding checks), and understanding the provenance of training data. This is a well-known GenAI legal risk distinct from model accuracy or performance issues."
  },

  // ── Q28 Domain 3  multi (Select TWO) ────────────────────────
  {
    id: 28, domain: 3, type: "multi",
    text: "A company has a product catalog stored in PDF documents in Amazon S3. The company wants to build a semantic search system that can retrieve products based on the meaning of a customer's natural language query — not just keyword matching.\n\nWhich TWO AWS services should be combined to build this semantic search solution? (Select TWO.)",
    options: [
      "Amazon Textract — to extract text from PDF documents",
      "Amazon Polly — to convert product descriptions to speech",
      "Amazon OpenSearch Service — to store and query vector embeddings for semantic similarity search",
      "Amazon Transcribe — to transcribe audio product descriptions",
      "Amazon Lex — to build a conversational interface"
    ],
    correct: [0, 2],
    explanation: "Amazon Textract extracts text from PDF documents — making the product catalog text available for processing. Amazon OpenSearch Service supports vector search (k-NN) — storing document embeddings and performing efficient nearest-neighbor semantic similarity search against a customer query embedding. Together they form the extract-embed-index-search pipeline for semantic search over PDF catalogs. Polly synthesizes speech. Transcribe handles audio. Lex builds chatbots."
  },

  // ── Q29 Domain 5  single ─────────────────────────────────────
  {
    id: 29, domain: 5, type: "single",
    text: "An ML engineer is deploying a SageMaker training job that will process sensitive customer data stored in Amazon S3. The security policy requires that all data transfer between the SageMaker training instance and Amazon S3 must stay within the AWS network and never traverse the public internet.\n\nWhich solution meets this requirement?",
    options: [
      "Enable Amazon S3 Transfer Acceleration on the bucket",
      "Use an S3 VPC gateway endpoint so traffic between the VPC and S3 stays within the AWS network",
      "Encrypt the data with AWS KMS before uploading",
      "Enable S3 versioning on the training data bucket"
    ],
    correct: [1],
    explanation: "An S3 VPC gateway endpoint creates a private connection from a VPC to Amazon S3 that routes traffic through the AWS internal network — it never touches the public internet. SageMaker training jobs launched within the VPC will use this endpoint to access S3 training data securely. S3 Transfer Acceleration improves upload speed over the internet, not private connectivity. KMS encryption protects data at rest. S3 versioning protects against accidental deletion."
  },

  // ── Q30 Domain 4  match (Select FIVE) ───────────────────────
  {
    id: 30, domain: 4, type: "match",
    text: "Select the correct responsible AI concept from the following list for each description. Each concept should be selected one time.",
    items: [
      "The ability of an AI system to provide understandable reasons for its decisions to affected users and stakeholders.",
      "Ensuring AI systems produce truthful, accurate, and factually grounded outputs.",
      "Designing AI systems to perform equitably across all demographic groups without systematic disadvantage.",
      "Ensuring AI systems behave safely and predictably even under adversarial inputs or unexpected edge cases.",
      "Limiting the collection and use of personal data to only what is strictly necessary for the stated purpose."
    ],
    choices: ["Data minimization", "Explainability", "Fairness", "Robustness", "Veracity"],
    correct: [1, 4, 2, 3, 0],
    explanation: `
      <b>Explainability</b> — The ability to provide clear, understandable reasons for AI decisions. This builds trust and is legally required in many regulated industries for decisions affecting individuals.<br><br>
      <b>Veracity</b> — AI systems should produce truthful and accurate outputs. Hallucination violates veracity. Grounding with validated data sources helps maintain veracity.<br><br>
      <b>Fairness</b> — AI systems must perform equitably across demographic groups. Systematic disadvantage to any group — through biased data or proxy discrimination — violates this principle.<br><br>
      <b>Robustness</b> — AI systems should maintain safe, reliable performance under adversarial inputs, distribution shifts, and edge cases without catastrophic failures.<br><br>
      <b>Data minimization</b> — A privacy-by-design principle requiring that only the minimum necessary personal data be collected, processed, and retained. Excess data collection increases privacy risk.`
  }

];

export default questions;
