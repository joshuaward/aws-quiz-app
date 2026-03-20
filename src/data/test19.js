// Test 19 – Targeted Remediation Test
// Built from wrong-answer analysis of uploaded practice test results
// Heavy emphasis on YOUR weak areas:
//   D1 (6 wrong): ML types, pipeline stages, supervised learning, model training goals
//   D2 (3 wrong): Fine-tuning vs continued pre-training, labeled vs unlabeled
//   D3 (3 wrong): ROUGE vs BERTScore, RAG vector stores, auto vs human eval
//   D4 (3 wrong): Interpretability, Model Cards, Amazon A2I
//   D5 (3 wrong): AWS Audit Manager, CloudWatch for Bedrock, prompt injection defense
// Domain weights adjusted: D1 boosted to 10q, D2-D5 at ~5q each

const questions = [

// ═══════════════════════════════════════════════════════
// DOMAIN 1 — 10 QUESTIONS (you missed 6/82 in this domain)
// Focus: ML types, pipeline stages, supervised learning, model training
// ═══════════════════════════════════════════════════════

// ── D1 Q1 ── (targets Q79/Q81: supervised ML problem types)
{
  id: 1, domain: 1, type: "single",
  text: "A logistics company wants to build an ML model to estimate the number of delivery trucks needed each day based on historical order volume, day of week, and regional weather data.\n\nWhich ML technique and output type correctly describes this problem?",
  options: [
    "Classification — predicting one of several discrete categories (Small Fleet / Medium Fleet / Large Fleet)",
    "Regression — predicting a continuous numeric output (number of trucks) based on input features",
    "Clustering — grouping historical delivery days into segments without a predefined target",
    "Reinforcement learning — an agent learns to allocate trucks by receiving rewards for on-time deliveries"
  ],
  correct: [1],
  explanation: "Regression is the correct technique when the target variable is a continuous number — in this case, the count of trucks needed each day. The model learns a mapping from input features (order volume, day, weather) to a numeric output. Classification predicts discrete categories. Clustering is unsupervised with no target variable. Reinforcement learning requires an interactive agent-environment loop. Recognizing that 'predict a quantity/number' = regression is a foundational exam skill."
},

// ── D1 Q2 ── (targets Q80: goal of model training)
{
  id: 2, domain: 1, type: "single",
  text: "During ML model training, the optimization algorithm iterates over the training dataset many times and updates internal model values after each batch.\n\nWhat are these internal model values that the training process updates, and what is the training algorithm trying to achieve by updating them?",
  options: [
    "Hyperparameters — the training algorithm tunes the learning rate and batch size to maximize training throughput",
    "Parameters (weights and biases) — the training algorithm minimizes the loss function, finding values that make the model's predictions as close as possible to the true labels",
    "Features — the training algorithm selects the most predictive input columns to reduce dimensionality",
    "Evaluation metrics — the training algorithm directly maximizes accuracy on the validation set"
  ],
  correct: [1],
  explanation: "Model parameters (weights and biases in neural networks; coefficients in linear models) are the internal values learned during training. The optimizer (e.g., gradient descent) updates them to minimize the loss function — a measure of the difference between the model's predictions and the actual target values. Hyperparameters (learning rate, batch size, number of layers) are set before training, not learned. Features are inputs to the model. Validation accuracy is a metric measured after each epoch, not what the optimizer directly targets."
},

// ── D1 Q3 ── (targets Q81: regression for house prices)
{
  id: 3, domain: 1, type: "match",
  text: "Select the correct supervised ML problem type for each scenario. Each problem type should be selected one time.",
  items: [
    "A bank wants to predict the exact dollar amount a customer will spend next month based on income and transaction history.",
    "A hospital wants to predict whether a patient will be readmitted within 30 days: Yes or No.",
    "An e-commerce site wants to classify each product review into one of five sentiment tiers: Very Negative, Negative, Neutral, Positive, Very Positive.",
    "A streaming service wants to rank 50 movie recommendations from most to least relevant for a specific user."
  ],
  choices: ["Binary classification", "Multi-class classification", "Ranking / learning-to-rank", "Regression"],
  correct: [3, 0, 1, 2],
  explanation: "<b>Regression</b> — Predicts a continuous numeric value (dollar amount). Any 'how much' or 'how many' prediction is regression.<br><br><b>Binary classification</b> — Predicts one of exactly two outcomes (Yes/No, True/False, 0/1). Readmission prediction is binary.<br><br><b>Multi-class classification</b> — Predicts one of more than two mutually exclusive categories. Five sentiment tiers is multi-class.<br><br><b>Ranking</b> — Orders items by predicted relevance for a given query or user. Used in search and recommendation systems where relative order matters more than absolute scores."
},

// ── D1 Q4 ── (targets Q79: supervised learning types)
{
  id: 4, domain: 1, type: "multi",
  text: "Which THREE of the following scenarios are examples of supervised machine learning? (Select THREE.)",
  options: [
    "Training a spam filter using 10,000 emails already labeled 'spam' or 'not spam'",
    "Grouping customers into behavior clusters without any predefined categories or labels",
    "Training an image classifier using 50,000 photos each labeled with the object they contain",
    "A robot learning to walk by receiving a positive reward when it stays upright and a negative reward when it falls",
    "Predicting a home's sale price based on historical sales records that include the final sale price alongside property attributes"
  ],
  correct: [0, 2, 4],
  explanation: "Supervised learning requires labeled training data — input examples paired with known correct output values. (A) Spam filter: inputs are emails, labels are spam/not-spam — supervised classification. (C) Image classifier: inputs are images, labels are object names — supervised classification. (E) Price prediction: inputs are property attributes, label is the sale price — supervised regression. (B) Customer clustering has no labels — this is unsupervised learning. (D) Robot walking uses rewards/penalties, not labeled examples — this is reinforcement learning."
},

// ── D1 Q5 ── (targets Q51/Q77: ML pipeline stage order)
{
  id: 5, domain: 1, type: "order",
  text: "A data science team has collected raw customer data and wants to build a text classification model. Order the following ML lifecycle stages from FIRST to LAST.",
  items: [
    "Deploy the trained model to a production endpoint for real-time inference",
    "Perform feature engineering — select, clean, and transform raw data attributes into model-ready inputs",
    "Evaluate model performance on a held-out test set using precision, recall, and F1 score",
    "Train the model on the prepared dataset and tune hyperparameters to optimize validation performance"
  ],
  correctOrder: [1, 3, 2, 0],
  explanation: "The standard ML lifecycle order: (1) <b>Feature engineering</b> — must complete before training. Raw data must be cleaned, encoded, and transformed into numeric features the algorithm can process. (2) <b>Model training + hyperparameter tuning</b> — the model learns from prepared training data; hyperparameter tuning runs during this stage to find optimal settings. (3) <b>Model evaluation</b> — after training, test set performance is assessed to confirm the model is ready for production. (4) <b>Deployment</b> — only after evaluation confirms readiness does the model go to a production endpoint. Feature engineering before training is the key ordering fact the exam tests."
},

// ── D1 Q6 ── (targets Q77: what happens before training)
{
  id: 6, domain: 1, type: "single",
  text: "A data scientist has finished collecting a raw dataset for a customer churn prediction model. The dataset contains missing values, categorical text columns, and date fields.\n\nWhich step of the ML pipeline must be completed BEFORE model training can begin?",
  options: [
    "Model evaluation — establish baseline accuracy metrics before training starts",
    "Hyperparameter tuning — configure the learning rate and batch size before the first training run",
    "Feature engineering — handle missing values, encode categorical variables, and transform date fields into numeric features the model can learn from",
    "Model deployment — stand up the serving infrastructure before training so it is ready immediately after training completes"
  ],
  correct: [2],
  explanation: "Feature engineering (which includes data cleaning, encoding, and transformation) must complete before model training because ML algorithms require numeric, well-formed input data. Missing values cause errors during training; categorical strings cannot be processed directly; raw dates need to be converted to usable numeric representations (day of week, days since event). Model evaluation and deployment occur after training. Hyperparameters are configured before training but 'tuning' as an iterative process happens during training — the data must already be prepared."
},

// ── D1 Q7 ── (targets Q9: computer vision + ML technique recognition)
{
  id: 7, domain: 1, type: "single",
  text: "A manufacturing company wants to automatically detect scratches and dents on car body panels as they move along an assembly line. A camera captures images of each panel and the system must flag defective panels in real time.\n\nWhich ML technique is being applied?",
  options: [
    "Natural language processing (NLP) — analyzing manufacturing log descriptions to identify defect patterns",
    "Computer vision — applying image analysis algorithms to detect visual defects in panel images",
    "Time-series forecasting — predicting future defect rates based on historical production data",
    "Anomaly detection using tabular sensor data — identifying when vibration and temperature readings deviate from normal ranges"
  ],
  correct: [1],
  explanation: "Computer vision is the ML discipline that enables systems to interpret and analyze visual data from images or video. Detecting physical defects (scratches, dents) from camera images is a classic computer vision task — specifically image classification or object detection applied to quality control. NLP processes text, not images. Time-series forecasting predicts future values from historical sequences. Sensor-based anomaly detection uses tabular numeric data, not images. When the input data is images or video and the goal is to 'see' something — that's computer vision."
},

// ── D1 Q8 ── (targets Q51: hyperparameter tuning + evaluation placement)
{
  id: 8, domain: 1, type: "multi",
  text: "Which TWO activities occur DURING or AFTER model training — not before it? (Select TWO.)",
  options: [
    "Hyperparameter tuning — adjusting settings like learning rate and number of layers to produce better model versions",
    "Data collection — gathering raw records from source systems",
    "Model evaluation — measuring precision, recall, AUC-ROC, and other performance metrics on a test set",
    "Feature selection — identifying which input columns have the highest predictive value",
    "Data labeling — assigning ground-truth class labels to training examples"
  ],
  correct: [0, 2],
  explanation: "Hyperparameter tuning (A) happens during training — each tuning iteration runs a training job with different settings and compares validation results. Amazon SageMaker Automatic Model Tuning automates this. Model evaluation (C) occurs after training — the final trained model is assessed on a held-out test set to measure real-world generalization. Data collection (B), feature selection (D), and data labeling (E) all occur before training begins. The pipeline order: collect → label → feature engineering/selection → train (with tuning) → evaluate → deploy."
},

// ── D1 Q9 ── (targets Q80: what model training optimizes)
{
  id: 9, domain: 1, type: "single",
  text: "An ML engineer is monitoring a neural network training run. After each epoch, the training loss decreases but then plateaus after 15 epochs.\n\nWhat does 'training loss' measure, and what does its decrease during training indicate?",
  options: [
    "Training loss measures how many training examples the model has seen; a decrease indicates more data has been processed",
    "Training loss measures the difference between the model's predictions and the true labels on the training set; a decrease indicates the model parameters are converging toward values that better fit the training data",
    "Training loss measures the model's performance on the validation set; a plateau indicates the model has reached maximum possible accuracy",
    "Training loss measures the computational cost of each forward pass; a decrease indicates the hardware is processing batches more efficiently"
  ],
  correct: [1],
  explanation: "Loss (also called the cost or objective function) quantifies the error between the model's predictions and the ground-truth labels on the training data. Common loss functions include mean squared error (for regression) and cross-entropy (for classification). During training, the optimizer uses gradients of the loss to update model parameters in the direction that reduces the loss. A plateau means the optimizer has stopped finding improvements — the model may have converged, or the learning rate may need adjustment. Loss has nothing to do with data volume, validation performance directly, or hardware speed."
},

// ── D1 Q10 ── (targets Q9: ML technique identification from problem description)
{
  id: 10, domain: 1, type: "match",
  text: "Select the correct AI/ML technique from the following list for each application. Each technique should be selected one time.",
  items: [
    "A pathology lab uses an algorithm to examine biopsy slide images and identify cancerous cell formations.",
    "A voice assistant converts a user's spoken question into text before passing it to a language model.",
    "A recommendation engine groups users into segments based on viewing behavior without any predefined category labels.",
    "A trading algorithm learns which buy/sell decisions maximize portfolio returns by testing strategies in a simulated market."
  ],
  choices: ["Clustering (unsupervised learning)", "Computer vision", "Reinforcement learning", "Speech recognition (ASR)"],
  correct: [1, 3, 0, 2],
  explanation: "<b>Computer vision</b> — Analyzing images (biopsy slides) to detect patterns (cancerous cells) is computer vision. Medical imaging is one of the most important computer vision applications.<br><br><b>Speech recognition (ASR)</b> — Converting spoken audio to text is Automatic Speech Recognition. Amazon Transcribe is AWS's managed ASR service.<br><br><b>Clustering</b> — Grouping users based on behavior without predefined labels is unsupervised learning (clustering). K-means is the classic algorithm.<br><br><b>Reinforcement learning</b> — An agent learning an optimal policy through trial-and-error in a simulated environment with rewards/penalties is reinforcement learning."
},

// ═══════════════════════════════════════════════════════
// DOMAIN 2 — 5 QUESTIONS (you missed: continued pre-training, fine-tuning facts)
// ═══════════════════════════════════════════════════════

// ── D2 Q11 ── (targets Q17: continued pre-training = unlabeled data)
{
  id: 11, domain: 2, type: "single",
  text: "A pharmaceutical company has accumulated 200,000 pages of proprietary research reports, clinical study summaries, and regulatory filings — all in plain text with no annotations or labels. The company wants to customize an Amazon Bedrock foundation model to understand their specialized molecular biology and regulatory terminology.\n\nWhich customization technique is appropriate, and why?",
  options: [
    "Prompt engineering with few-shot examples — because including sample research text in the prompt is equivalent to training on the full corpus",
    "Instruction fine-tuning — because it teaches the model new terminology by training on labeled question-answer pairs from the research reports",
    "Continued pre-training — because it uses unlabeled text data to extend the model's pre-training, giving it domain-specific vocabulary and knowledge without requiring labeled examples",
    "RLHF — because human researchers can rate the model's responses to create a reward signal from the research reports"
  ],
  correct: [2],
  explanation: "Continued pre-training is the correct technique when you have large amounts of unlabeled domain text. It continues the model's original self-supervised pre-training objective (predicting the next token) on your proprietary corpus — teaching the model domain vocabulary, writing style, and implicit factual knowledge. No labels are required. Instruction fine-tuning requires labeled input-output pairs (e.g., 'Q: What is this compound? A: ...'). RLHF requires human preference ratings on model output pairs — an expensive process for 200,000 pages. Few-shot prompting is limited to what fits in the context window — it cannot inject knowledge from a 200,000-page corpus."
},

// ── D2 Q12 ── (targets Q57: fine-tuning creates a new model + small data)
{
  id: 12, domain: 2, type: "multi",
  text: "A developer fine-tunes a foundation model on Amazon Bedrock using 1,200 labeled customer support examples.\n\nWhich TWO statements accurately describe what happens during and after Amazon Bedrock fine-tuning? (Select TWO.)",
  options: [
    "Fine-tuning updates the weights of the original base foundation model in place — the base model is permanently modified",
    "Fine-tuning creates a new custom model — the original base foundation model remains unchanged and the fine-tuned version is a separate model artifact",
    "Fine-tuning requires a dataset comparable in size to the original pre-training corpus — typically billions of tokens",
    "Fine-tuning can be effective with a relatively small labeled dataset compared to the original pre-training data — hundreds to thousands of examples can meaningfully improve task-specific performance",
    "Fine-tuning is only available for text-to-text models — image generation models cannot be fine-tuned on Bedrock"
  ],
  correct: [1, 3],
  explanation: "Amazon Bedrock fine-tuning creates a new custom model artifact — the base foundation model is not modified. You can continue using the original base model while separately deploying the fine-tuned version. This is why the exam says fine-tuning 'results in the creation of a new custom model.' Additionally, fine-tuning is efficient — unlike pre-training which requires billions of tokens, fine-tuning can adapt a model meaningfully with hundreds to thousands of labeled examples because the model already has strong general capabilities from pre-training; fine-tuning redirects those capabilities toward a specific task."
},

// ── D2 Q13 ── (targets Q40: fine-tuning vs continued pre-training choice)
{
  id: 13, domain: 2, type: "single",
  text: "For each scenario, a company must choose between fine-tuning and continued pre-training on Amazon Bedrock.\n\nA legal tech company has 3,000 labeled pairs of legal contract sections and their correct classification labels (Liability Clause, Indemnification Clause, Termination Clause, etc.). They want the model to classify new contract sections accurately.\n\nWhich technique is correct, and what makes the other technique wrong for this case?",
  options: [
    "Neither technique — prompt engineering with chain-of-thought is always sufficient for classification tasks",
    "Continued pre-training — because the model needs to learn legal domain knowledge before it can classify clauses",
    "Fine-tuning — because the company has labeled input-output pairs (section text → clause type) that directly teach the model the classification task; continued pre-training would learn legal vocabulary from unlabeled text but would not teach the model to map inputs to specific classification labels",
    "Either technique works equally well — the choice is purely based on cost preference"
  ],
  correct: [2],
  explanation: "The key differentiator is data type. Labeled input-output pairs → fine-tuning. Unlabeled text corpus → continued pre-training. The legal company has 3,000 labeled classification examples — this is exactly the data format for instruction fine-tuning. The model will learn to map 'contract section text' → 'clause type label.' Continued pre-training would make the model more fluent in legal language but wouldn't teach it the specific classification labels — it has no labeled signal to learn from. The exam consistently tests this exact distinction: labeled data = fine-tuning; unlabeled data = continued pre-training."
},

// ── D2 Q14 ── (targets Q17/Q40: distinguish pre-training vs fine-tuning vs prompting)
{
  id: 14, domain: 2, type: "match",
  text: "Select the correct foundation model customization approach from the following list for each scenario. Each approach should be selected one time.",
  items: [
    "A company has thousands of unlabeled internal chat logs and wants the model to adopt their company's communication style and terminology.",
    "A company has 500 labeled pairs of customer questions and ideal agent responses and wants consistent answer format and tone.",
    "A company wants to improve response quality for three specific product types by including two examples of ideal responses per product type directly in the API call.",
    "A company wants to use human raters to compare model response pairs and train the model to produce outputs that humans consistently prefer."
  ],
  choices: ["Continued pre-training", "Few-shot prompting", "Instruction fine-tuning", "RLHF"],
  correct: [0, 2, 1, 3],
  explanation: "<b>Continued pre-training</b> — Unlabeled text corpus → domain adaptation. The model learns writing style and terminology through next-token prediction on the unlabeled logs.<br><br><b>Instruction fine-tuning</b> — Labeled input-output pairs (500 Q&A pairs) → task-specific behavior. Updates model weights to consistently produce the desired format and tone.<br><br><b>Few-shot prompting</b> — Including 2 examples per product type in the API call context. No training — works within the existing model's context window. Best for small numbers of examples.<br><br><b>RLHF</b> — Human preference ratings on response pairs → reward model → policy optimization. Used when the quality criterion requires human judgment that cannot be captured by labeled output pairs."
},

// ── D2 Q15 ── (targets Q17: identifying the right customization from scenario clues)
{
  id: 15, domain: 2, type: "single",
  text: "A cybersecurity company wants to adapt an Amazon Bedrock foundation model to understand CVE identifiers, MITRE ATT&CK framework terminology, and threat actor naming conventions used in their industry. They have a large archive of cybersecurity bulletins, threat intelligence reports, and vulnerability advisories — none of which have been annotated.\n\nWhich customization approach and data requirement correctly describes this scenario?",
  options: [
    "Instruction fine-tuning using the bulletins as labeled training data — the advisory titles serve as input labels",
    "Continued pre-training using the unlabeled cybersecurity corpus — this teaches the model domain vocabulary and implicit knowledge without requiring any annotations",
    "RAG using the bulletins indexed in a knowledge base — this embeds the bulletins so the model can retrieve and cite them at query time",
    "Prompt engineering by including the full CVE database in the system prompt — this gives the model access to all terminology"
  ],
  correct: [1],
  explanation: "Continued pre-training is correct: the company has unlabeled domain text (bulletins, reports, advisories) and wants the model to acquire domain knowledge and vocabulary. This exactly matches continued pre-training's purpose — extending pre-training on unlabeled domain corpora. The model learns CVE identifiers, MITRE terminology, and naming conventions through the self-supervised next-token prediction objective. Fine-tuning requires labeled input-output pairs — advisory titles are not classification labels. RAG is a query-time retrieval technique, not a model customization technique — the model's weights don't change. A system prompt cannot hold an entire CVE database."
},

// ═══════════════════════════════════════════════════════
// DOMAIN 3 — 5 QUESTIONS (you missed: ROUGE vs BERTScore, vector stores for RAG, auto vs human eval)
// ═══════════════════════════════════════════════════════

// ── D3 Q16 ── (targets Q43: ROUGE for summarization)
{
  id: 16, domain: 3, type: "single",
  text: "A news organization uses an AI model to automatically generate article summaries. The quality team wants to measure how well the generated summaries capture the key content of the original articles, compared to human-written reference summaries.\n\nWhich evaluation metric is specifically designed for this text summarization quality assessment?",
  options: [
    "AUC-ROC — which measures the model's ability to distinguish between good and bad summaries",
    "BLEU score — which measures n-gram precision of generated text against reference text and is the standard metric for summarization",
    "ROUGE — which measures recall-oriented overlap between generated summaries and reference summaries, making it the standard metric for summarization quality",
    "Perplexity — which measures how confidently the language model generates each token in the summary"
  ],
  correct: [2],
  explanation: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is the standard metric for text summarization. It measures n-gram overlap between generated and reference summaries with a focus on recall — whether the generated summary covers the key content from the reference. ROUGE-1, ROUGE-2, and ROUGE-L are the most common variants. BLEU is the standard metric for machine translation (precision-focused), not summarization. Perplexity measures language model fluency, not summary content quality. AUC-ROC is a classification metric."
},

// ── D3 Q17 ── (targets Q43/Q14: ROUGE vs BERTScore — when to use each)
{
  id: 17, domain: 3, type: "single",
  text: "An AI evaluation team compares two metrics for assessing a medical document summarization model:\n\n• Metric A scores the model at 0.38 (penalizes because generated summaries use medical synonyms instead of the exact reference wording)\n• Metric B scores the model at 0.84 (recognizes that 'myocardial infarction' and 'heart attack' have the same meaning)\n\nWhich metrics are A and B, and which is more appropriate for medical summarization?",
  options: [
    "A = BERTScore, B = ROUGE; BERTScore is more appropriate because it penalizes paraphrasing",
    "A = ROUGE, B = BERTScore; BERTScore is more appropriate for medical summarization because it measures semantic similarity using contextual embeddings, recognizing clinically equivalent terms even when exact wording differs",
    "A = BLEU, B = ROUGE; ROUGE is more appropriate because it measures recall",
    "A = Perplexity, B = F1 score; F1 is more appropriate because it balances precision and recall"
  ],
  correct: [1],
  explanation: "ROUGE measures n-gram overlap — it penalizes summaries that use synonyms or paraphrases even when they are semantically equivalent. In medical domains where 'myocardial infarction' = 'heart attack' and 'hypertension' = 'high blood pressure,' ROUGE underestimates quality. BERTScore uses contextual embeddings from BERT models to measure semantic similarity — it recognizes that clinically equivalent terms are similar even when the exact tokens differ. BERTScore's 0.84 better reflects the actual quality of the summaries. For domains with specialized synonymy (medical, legal, technical), BERTScore is generally more appropriate than ROUGE."
},

// ── D3 Q18 ── (targets Q37: vector stores for RAG)
{
  id: 18, domain: 3, type: "multi",
  text: "A company is building a RAG application on AWS. The application must store vector embeddings of product documentation and perform fast semantic similarity searches when users ask questions.\n\nWhich TWO AWS services provide vector storage and k-nearest neighbor (k-NN) similarity search capabilities suitable for RAG applications? (Select TWO.)",
  options: [
    "Amazon OpenSearch Service — which supports vector search with k-NN indexing for semantic similarity queries",
    "Amazon RDS for MySQL — which stores embeddings as BLOB columns and performs similarity search via full table scan",
    "Amazon Neptune — which is a graph database that also supports vector search capabilities for RAG applications",
    "Amazon Redshift — which is a data warehouse optimized for analytical SQL queries, not vector similarity search",
    "Amazon DynamoDB — which provides key-value and document storage but does not natively support vector k-NN search"
  ],
  correct: [0, 2],
  explanation: "Amazon OpenSearch Service supports vector search through its k-NN plugin — you index embedding vectors and query them with cosine or Euclidean similarity to find the most semantically relevant documents. This is one of the most common vector store choices for RAG on AWS. Amazon Neptune is a managed graph database that also supports vector search, making it suitable for RAG applications that need both relationship traversal and semantic similarity. RDS MySQL can store vectors as blobs but has no native k-NN indexing — full table scans are not practical for production RAG. Redshift is an OLAP data warehouse. DynamoDB has no native vector search capability."
},

// ── D3 Q19 ── (targets Q14: automatic vs human-in-the-loop evaluation)
{
  id: 19, domain: 3, type: "match",
  text: "Select the correct Amazon Bedrock model evaluation type for each use case. Each evaluation type may be selected more than once.",
  items: [
    "Measuring the toxicity score of model responses on a built-in safety benchmark dataset.",
    "Assessing whether generated legal clauses are factually accurate and legally sound — requiring expert judgment.",
    "Calculating ROUGE scores comparing model-generated summaries to reference summaries on a company dataset.",
    "Rating the creativity and originality of marketing copy generated by the model — a subjective quality judgment."
  ],
  choices: ["Automatic model evaluation", "Human-in-the-loop model evaluation"],
  correct: [0, 1, 0, 1],
  explanation: "<b>Automatic evaluation</b> — Uses predefined quantitative metrics without human involvement. Toxicity scoring (A) uses algorithmic classifiers. ROUGE calculation (C) is a mathematical computation against reference text. These are objective measures that can run at scale without human judgment.<br><br><b>Human-in-the-loop evaluation</b> — Requires human judgment for subjective or nuanced quality dimensions. Legal accuracy (B) requires domain expert review — algorithms cannot reliably assess legal soundness. Creative quality (D) is inherently subjective — human raters are needed to assess originality and impact. The rule: objective/quantitative → automatic; subjective/nuanced/expert-required → human-in-the-loop."
},

// ── D3 Q20 ── (targets Q37: recognizing RAG-compatible AWS vector stores)
{
  id: 20, domain: 3, type: "single",
  text: "A developer is building an Amazon Bedrock Knowledge Base and must choose an underlying vector store. The application requires low-latency semantic search over 10 million document embeddings.\n\nWhich of the following is a valid vector store option that Amazon Bedrock Knowledge Bases supports natively?",
  options: [
    "Amazon Aurora PostgreSQL with the pgvector extension — which adds vector similarity search to a managed relational database",
    "Amazon Glacier — which provides long-term archival storage for embedding vectors",
    "Amazon Kinesis Data Streams — which buffers embedding vectors for real-time streaming retrieval",
    "AWS Glue — which catalogs embedding metadata for batch retrieval jobs"
  ],
  correct: [0],
  explanation: "Amazon Bedrock Knowledge Bases supports several vector store backends, including Amazon Aurora PostgreSQL with the pgvector extension. pgvector adds vector similarity search (cosine, L2, inner product) to PostgreSQL — enabling semantic search over millions of embeddings with SQL-level control. Other supported stores include Amazon OpenSearch Service, Amazon Neptune, Amazon DocumentDB, and Amazon MemoryDB. Amazon Glacier is archive storage with no query capability. Kinesis Data Streams is for real-time data streaming, not storage. AWS Glue is a data catalog and ETL service, not a vector database."
},

// ═══════════════════════════════════════════════════════
// DOMAIN 4 — 5 QUESTIONS (you missed: interpretability, Model Cards, A2I)
// ═══════════════════════════════════════════════════════

// ── D4 Q21 ── (targets Q7: linear regression = highest interpretability)
{
  id: 21, domain: 4, type: "single",
  text: "A credit union's compliance department requires that all ML models used in loan decisions must be auditable — loan officers must be able to explain exactly why a specific applicant was approved or denied by examining the model's structure.\n\nWhich model type provides the HIGHEST level of interpretability for this requirement?",
  options: [
    "A deep neural network with 50 layers — because more parameters capture more complex patterns, leading to better decision explanations",
    "A gradient boosting ensemble of 500 trees — because ensemble methods combine many weak learners into a strong, interpretable model",
    "A linear regression or logistic regression model — because the model's coefficients directly and transparently show the weight and direction of each input feature's contribution to the prediction",
    "A transformer-based foundation model — because attention weights indicate which input tokens were most important to the decision"
  ],
  correct: [2],
  explanation: "Linear/logistic regression models are the most interpretable because each coefficient is directly readable: 'for every additional year of credit history, the approval score increases by 0.3 points.' Every feature's contribution is explicit, additive, and stable. A compliance officer can literally read the model. Deep neural networks have millions of parameters with complex non-linear interactions — no human can read them. Gradient boosting ensembles of 500 trees are complex — techniques like SHAP are needed to explain them. Attention weights in transformers provide some signal but are not a direct causal explanation of decisions."
},

// ── D4 Q22 ── (targets Q7: interpretability vs explainability distinction)
{
  id: 22, domain: 4, type: "single",
  text: "An ML team is discussing two different transparency approaches for their deployed fraud detection model:\n\nApproach A: The team uses the model's coefficients and feature weights, which are directly readable from the model structure, to explain any prediction.\n\nApproach B: The team uses SHAP values computed after the fact to approximate how much each feature contributed to a specific prediction, because the model structure itself is too complex to read directly.\n\nWhich responsible AI concepts do Approach A and Approach B respectively represent?",
  options: [
    "Approach A = Explainability; Approach B = Interpretability",
    "Approach A = Interpretability (the model is inherently understandable by design); Approach B = Explainability (post-hoc techniques used to explain a black-box model's decisions)",
    "Both approaches represent explainability — they both produce explanations for model decisions",
    "Approach A = Transparency; Approach B = Fairness"
  ],
  correct: [1],
  explanation: "Interpretability is an inherent property of the model architecture — some models (linear regression, decision trees) can be directly read and understood by humans without additional tools. Explainability refers to post-hoc techniques applied to complex, non-interpretable models (neural networks, ensembles) to approximate why a prediction was made — SHAP, LIME, and partial dependence plots are explainability tools. Approach A describes a model whose internal structure is directly understandable = interpretability. Approach B describes using SHAP to approximate explanations for a complex model = explainability. SageMaker Clarify provides explainability via SHAP."
},

// ── D4 Q23 ── (targets Q69: SageMaker Model Cards for risk rating)
{
  id: 23, domain: 4, type: "single",
  text: "A financial institution's AI governance committee requires that every ML model in production must have a documented risk tier (Low / Medium / High / Critical), a record of its intended use, and a summary of its evaluation metrics — all accessible in a single location within Amazon SageMaker.\n\nWhich SageMaker feature is purpose-built to capture and maintain this model governance information?",
  options: [
    "SageMaker Model Monitor — which continuously tracks production model quality metrics and stores them in CloudWatch",
    "SageMaker Experiments — which records training run parameters, metrics, and artifacts for comparison across runs",
    "SageMaker Model Cards — which provide a structured template for documenting model intended use, risk ratings, training details, evaluation results, and responsible AI information in a single location",
    "SageMaker Feature Store — which maintains a central catalog of feature values used across model training and serving"
  ],
  correct: [2],
  explanation: "Amazon SageMaker Model Cards are specifically designed for model governance documentation. They include built-in fields for: intended use cases, out-of-scope uses, risk ratings (which is what the exam question about 'risk rating for each LLM' is testing), model description, training data details, evaluation results, and ethical considerations. Model cards can be versioned, exported, and shared with auditors. Model Monitor tracks production data quality. Experiments tracks training run metadata. Feature Store manages feature values. Only Model Cards provides the risk rating field as a built-in metric."
},

// ── D4 Q24 ── (targets Q78: Amazon A2I for human review)
{
  id: 24, domain: 4, type: "single",
  text: "A healthcare insurance company uses ML to review prior authorization requests. For cases where the model's confidence score is below 85%, or where the claim involves experimental treatments, the company requires a licensed medical reviewer to examine the claim before a decision is made.\n\nWhich AWS service provides a managed workflow to route these low-confidence and high-sensitivity cases to qualified human reviewers?",
  options: [
    "Amazon SageMaker Ground Truth — which manages human labeling workflows to create training datasets for ML models",
    "Amazon Augmented AI (Amazon A2I) — which provides built-in human review workflows that can be triggered when model confidence falls below a threshold, routing predictions to human reviewers before finalization",
    "Amazon SageMaker Clarify — which detects bias in model predictions and flags cases for re-evaluation",
    "AWS Step Functions — which orchestrates multi-step workflows and could route cases manually if programmed to do so"
  ],
  correct: [1],
  explanation: "Amazon Augmented AI (A2I) is the purpose-built service for human-in-the-loop review of ML predictions. It integrates directly with SageMaker endpoints and other ML services to: trigger human review when a model's confidence score falls below a configurable threshold, route predictions to a human workforce (Amazon Mechanical Turk, private workforce, or AWS Marketplace vendors), collect reviewer decisions, and return the human-validated result. This exactly matches the described use case. SageMaker Ground Truth is for creating labeled training data, not reviewing production predictions. Clarify detects bias but doesn't route decisions to humans. Step Functions would require custom coding of the entire workflow."
},

// ── D4 Q25 ── (targets Q7/Q78: interpretability + human oversight together)
{
  id: 25, domain: 4, type: "multi",
  text: "A company wants to deploy a responsible AI system for employee performance evaluations. The system must (1) be explainable to employees who receive low ratings, and (2) have human HR managers validate any rating below a certain threshold before it is communicated.\n\nWhich TWO AWS features directly address these requirements? (Select TWO.)",
  options: [
    "Amazon SageMaker Clarify with SHAP values — providing feature attribution explanations that show which factors most influenced each employee's rating",
    "Amazon Bedrock Guardrails — blocking harmful content in the rating system's output",
    "Amazon Augmented AI (A2I) — routing low ratings to HR manager review workflows before they are communicated to employees",
    "Amazon SageMaker Model Monitor — detecting data drift in employee performance features over time",
    "AWS CloudTrail — logging all API calls to the evaluation model for audit purposes"
  ],
  correct: [0, 2],
  explanation: "SageMaker Clarify with SHAP (A) addresses requirement 1 — explainability. SHAP values show which input features (attendance record, project completion rate, peer feedback scores) most influenced the rating and in which direction. An employee can be shown exactly what drove their evaluation. Amazon A2I (C) addresses requirement 2 — human oversight. A2I workflows automatically route predictions below a confidence or score threshold to HR manager review before the result is finalized and communicated. Guardrails filters content. Model Monitor tracks production drift. CloudTrail logs API activity — none of these address explainability or human-in-the-loop review."
},

// ═══════════════════════════════════════════════════════
// DOMAIN 5 — 5 QUESTIONS (you missed: Audit Manager, CloudWatch for Bedrock, prompt injection defense)
// ═══════════════════════════════════════════════════════

// ── D5 Q26 ── (targets Q5: AWS Audit Manager for compliance)
{
  id: 26, domain: 5, type: "single",
  text: "A company has built a generative AI application using Amazon Bedrock. The company's Chief Compliance Officer requires a continuous audit process that automatically maps AWS resource configurations and usage to regulatory requirements, tracks model usage evidence, and generates audit-ready reports for regulators.\n\nWhich AWS service is purpose-built for this automated compliance evidence collection and audit reporting?",
  options: [
    "AWS Config — which tracks resource configuration changes and evaluates compliance against defined rules",
    "AWS Audit Manager — which continuously collects evidence, maps it to compliance frameworks (including a pre-built framework for Amazon Bedrock generative AI applications), and generates audit-ready reports",
    "AWS CloudTrail — which logs all API calls and can serve as compliance evidence when reviewed manually",
    "Amazon Inspector — which scans for software vulnerabilities and unintended network exposure in compute resources"
  ],
  correct: [1],
  explanation: "AWS Audit Manager is specifically designed for automated compliance auditing. It provides: pre-built frameworks mapped to industry standards and regulations (including a dedicated Amazon Bedrock Generative AI framework), continuous automated evidence collection from AWS services, evidence organization into audit-ready reports, and tracking of compliance posture over time. The Bedrock framework specifically addresses generative AI compliance requirements — model usage tracking, sensitive data handling, and AWS best practices. AWS Config evaluates resource configurations but doesn't produce audit reports. CloudTrail logs API activity but requires manual analysis. Inspector focuses on security vulnerabilities."
},

// ── D5 Q27 ── (targets Q5: Audit Manager vs Config vs CloudTrail distinction)
{
  id: 27, domain: 5, type: "match",
  text: "Select the correct AWS service from the following list for each compliance and governance requirement. Each service should be selected one time.",
  items: [
    "A company wants to continuously monitor Amazon SageMaker endpoint configurations and automatically flag any endpoint that lacks encryption.",
    "A company wants to download official AWS compliance certifications and SOC 2 Type II reports to share with their enterprise clients during vendor assessments.",
    "A company wants to automate the collection of compliance evidence for their Amazon Bedrock application and generate reports for regulatory audits.",
    "A company wants to detect and classify personally identifiable information (PII) stored in Amazon S3 training data buckets to enforce data governance policies."
  ],
  choices: ["Amazon Macie", "AWS Artifact", "AWS Audit Manager", "AWS Config"],
  correct: [3, 1, 2, 0],
  explanation: "<b>AWS Config</b> — Continuously evaluates resource configurations against compliance rules. Detects encryption gaps on SageMaker endpoints and generates non-compliance findings for remediation.<br><br><b>AWS Artifact</b> — Self-service portal for downloading AWS's own security and compliance reports (SOC, ISO, PCI DSS, HIPAA BAA). Used when sharing AWS's compliance posture with clients or auditors.<br><br><b>AWS Audit Manager</b> — Automates evidence collection and maps it to compliance frameworks. Generates audit-ready reports for your applications built on AWS, including Bedrock GenAI applications.<br><br><b>Amazon Macie</b> — Uses ML to discover, classify, and protect sensitive data (PII, PHI, financial data) in S3 buckets. The go-to service for S3 data sensitivity and governance."
},

// ── D5 Q28 ── (targets Q29: CloudWatch for Bedrock token metrics)
{
  id: 28, domain: 5, type: "single",
  text: "A company's ML operations team wants to build an operational dashboard that displays: total input tokens processed per hour, output tokens generated per hour, latency percentiles (p50, p95, p99), and error rates — all for their Amazon Bedrock application over the past 7 days.\n\nWhich AWS service natively collects these Bedrock operational metrics and supports building this type of dashboard?",
  options: [
    "AWS CloudTrail — which logs Bedrock API call events including token counts per request that can be queried for dashboards",
    "Amazon CloudWatch — which natively collects Bedrock invocation metrics (InputTokenCount, OutputTokenCount, InvocationLatency, InvocationClientErrors) and provides a dashboard builder for visualizing them over time",
    "Amazon QuickSight — which must be used for any ML operational dashboard because it provides advanced BI visualization",
    "Amazon Bedrock model invocation logging — which captures prompt/response content that must be manually parsed to extract token counts for dashboard display"
  ],
  correct: [1],
  explanation: "Amazon CloudWatch is the native operational monitoring service for all AWS resources including Amazon Bedrock. Bedrock automatically emits metrics to CloudWatch including: InputTokenCount, OutputTokenCount, InvocationLatency, InvocationServerErrors, InvocationClientErrors, and Invocations. CloudWatch Dashboards allow these metrics to be visualized as graphs, time series, and statistics (p50/p95/p99 latency) without any custom code. CloudTrail logs API call events for audit but is not designed for real-time operational metric dashboards. QuickSight is a BI tool for business analytics, not the native AWS operational monitoring service. Invocation logging captures content for compliance, not operational metrics."
},

// ── D5 Q29 ── (targets Q66: prompt injection defense — salted sequence tags)
{
  id: 29, domain: 5, type: "single",
  text: "A security engineer is hardening a customer-facing LLM application against prompt injection attacks. The application uses an XML-structured system prompt with tags like <instructions> and <context>. The engineer is concerned that an attacker could inject XML tags in their user input to override the system instructions.\n\nWhich defense technique specifically addresses tag-spoofing prompt injection by making instruction tags unique and session-specific so they cannot be replicated by an attacker?",
  options: [
    "Rate limiting API calls per user session — reducing the window for attackers to iterate on injection payloads",
    "Using Amazon Bedrock Guardrails denied topics to block any user message containing XML syntax",
    "Using salted sequence tags — appending a session-specific random value to each XML tag (e.g., <instructions_a7f2k3>) so attackers cannot spoof the exact tag string used in the system prompt",
    "Setting temperature to 0 — making the model deterministic so injected instructions produce predictable outputs that are easier to filter"
  ],
  correct: [2],
  explanation: "Salted sequence tags defend against XML tag-spoofing injection by generating a session-unique identifier appended to each XML tag at runtime. If the system prompt uses <instructions_a7f2k3>, an attacker sending <instructions> in their user message cannot override the real instructions because the tag names don't match. The model only treats content wrapped in the exact session-specific tag as authoritative instructions. This prevents the classic 'ignore previous instructions' attack that targets known tag names. Rate limiting slows attackers but doesn't prevent successful injections. Guardrails blocking all XML would break legitimate use. Temperature=0 doesn't prevent injections — it just makes them more predictable."
},

// ── D5 Q30 ── (targets Q66/Q29: monitoring + security together)
{
  id: 30, domain: 5, type: "multi",
  text: "A company deploys a public-facing Amazon Bedrock application. The security team wants to: (1) detect when the model is being used unusually — such as sudden spikes in token usage that could indicate abuse, and (2) maintain an audit trail proving which users sent which prompts and received which responses for legal compliance.\n\nWhich TWO AWS capabilities address these distinct requirements? (Select TWO.)",
  options: [
    "Amazon CloudWatch alarms on Bedrock InputTokenCount and InvocationCount metrics — alerting the team when usage spikes beyond expected thresholds indicate potential abuse",
    "AWS Shield Advanced — protecting against DDoS attacks targeting the Bedrock API endpoints",
    "Amazon Bedrock model invocation logging to Amazon S3 — capturing the complete prompt and response content for every API call, providing the content-level audit trail",
    "AWS WAF rules on the application load balancer — filtering malicious HTTP requests before they reach the Bedrock API",
    "Amazon SageMaker Model Monitor — detecting data drift in the model's input feature distributions"
  ],
  correct: [0, 2],
  explanation: "CloudWatch alarms (A) address requirement 1 — anomaly detection on usage metrics. Setting alarms on InputTokenCount and InvocationCount metrics with thresholds or anomaly detection bands alerts the security team when usage patterns deviate from baseline (potential abuse, scraping, or DDoS attempts). Bedrock invocation logging (C) addresses requirement 2 — content-level audit trail. Every prompt and response is logged to S3 with metadata including timestamps and model IDs, enabling legal review of specific interactions. Shield protects against network-layer DDoS but not LLM abuse. WAF filters HTTP attacks but not LLM-specific patterns. SageMaker Model Monitor tracks ML model drift, not Bedrock application usage."
}

];

export default questions;
