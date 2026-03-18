// Test 3 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [// Domain 1 – 6 questions (Intermediate)
  {id:1,domain:1,type:"single",
   text:"A data science team is comparing the performance of several classification models. One model has high precision but low recall. What does this mean in practice?",
   options:["The model correctly identifies most positive cases but also flags many false positives","The model rarely makes false positive predictions but misses many true positive cases","The model performs equally well on all classes","The model is overfitting the training data"],
   correct:[1],
   explanation:"High precision means that when the model predicts a positive class, it is usually correct (few false positives). Low recall means the model misses many actual positives (many false negatives). This tradeoff is common — a spam filter with high precision rarely marks legitimate mail as spam, but may miss some spam. The F1 score balances both."
  },
  {id:2,domain:1,type:"single",
   text:"A team is building a time-series forecasting model to predict electricity demand 24 hours in advance. The model will be trained once per week on the latest data. Which type of inferencing best describes generating forecasts for a full 24-hour window using the latest trained model every morning?",
   options:["Real-time inferencing","Online learning","Batch inferencing","Federated learning"],
   correct:[2],
   explanation:"Batch inferencing runs predictions on a large dataset in a single job at a scheduled time — here, generating the next 24-hour forecast each morning using the previously trained model. Real-time inferencing handles individual requests with low latency. Online learning continuously updates the model with each new data point. Federated learning trains across distributed devices."
  },
  {id:3,domain:1,type:"multi",
   text:"An ML team wants to track experiments, store model artifacts, and deploy models with automatic scaling. Which TWO Amazon SageMaker features BEST support these needs? (Select TWO)",
   options:["Amazon SageMaker Experiments","Amazon SageMaker Feature Store","Amazon SageMaker Endpoints","Amazon SageMaker Data Wrangler","AWS Glue DataBrew"],
   correct:[0,2],
   explanation:"SageMaker Experiments tracks and compares ML training runs, hyperparameters, metrics, and artifacts across experiments. SageMaker Endpoints deploys trained models as scalable, managed APIs for real-time inferencing. Feature Store manages reusable ML features. Data Wrangler and Glue DataBrew are data preparation tools, not experiment tracking or deployment services."
  },
  {id:4,domain:1,type:"single",
   text:"A model trained to detect manufacturing defects was achieving 99% accuracy. However, a closer review shows the dataset has 99% non-defective images and 1% defective images, and the model simply predicts 'no defect' for everything. Which issue does this illustrate?",
   options:["Data leakage","Class imbalance making accuracy a misleading metric","Model overfitting","Insufficient hyperparameter tuning"],
   correct:[1],
   explanation:"Class imbalance causes accuracy to be a misleading metric. A model that always predicts the majority class gets high accuracy while being completely useless for detecting the minority class (defects). Better metrics for imbalanced problems include precision, recall, F1 score, and AUC-ROC, which account for performance on the minority class."
  },
  {id:5,domain:1,type:"single",
   text:"A company uses Amazon SageMaker to train ML models. They want to understand which input features most influence the model's predictions. Which SageMaker capability provides feature-level explainability?",
   options:["SageMaker Debugger","SageMaker Clarify","SageMaker Model Monitor","SageMaker Pipelines"],
   correct:[1],
   explanation:"Amazon SageMaker Clarify provides explainability by computing SHAP (SHapley Additive exPlanations) values, which show the contribution of each feature to a model's predictions. Debugger helps identify training issues. Model Monitor tracks production data and model quality drift. Pipelines automates ML workflows."
  },
  {id:6,domain:1,type:"single",
   text:"What is the primary purpose of the 'holdout' or 'test' dataset in the ML development lifecycle?",
   options:["To train the model's parameters","To tune hyperparameters during training","To provide an unbiased evaluation of the final trained model on unseen data","To store the raw data before pre-processing"],
   correct:[2],
   explanation:"The test (holdout) dataset is data the model has never seen during training or hyperparameter tuning. Its purpose is to provide an unbiased estimate of the model's generalization performance on real-world data. Using the test set for tuning would contaminate the evaluation and give an overly optimistic performance estimate."
  },
  // Domain 2 – 7 questions (Intermediate)
  {id:7,domain:2,type:"single",
   text:"A company is comparing two approaches for deploying a foundation model: on-demand pricing vs. provisioned throughput on Amazon Bedrock. When would provisioned throughput be MORE cost-effective than on-demand?",
   options:["When the application sends only occasional, unpredictable bursts of traffic","When the workload requires consistent, high-volume usage that fully utilizes reserved capacity","When the company needs to try multiple different foundation models","When the application is in prototype phase and requirements are unclear"],
   correct:[1],
   explanation:"Provisioned throughput reserves model capacity at a fixed cost and is most cost-effective for high, consistent workloads where the reserved capacity is well-utilized. On-demand is better for variable/unpredictable traffic because you pay only per token. For prototyping or low/variable usage, on-demand is typically more economical."
  },
  {id:8,domain:2,type:"single",
   text:"A developer builds a generative AI app that processes customer contracts. The contracts are long — sometimes 80,000 tokens. The selected model supports a 100,000-token context window. What does the 'context window' determine?",
   options:["The maximum number of concurrent users the model can support","The total amount of text (input + output) the model can process in a single interaction","The number of AWS Regions the model is available in","The model's maximum training dataset size"],
   correct:[1],
   explanation:"The context window defines the maximum amount of text (measured in tokens) that the model can process in a single call — including both input (prompt + documents) and output (response). A 100,000-token context window can handle large documents like contracts in a single pass. It has no relation to users, regions, or training data size."
  },
  {id:9,domain:2,type:"single",
   text:"Which stage of the foundation model lifecycle involves exposing the model to a massive, general-purpose dataset for the first time to build broad language or domain knowledge?",
   options:["Fine-tuning","Evaluation","Pre-training","Deployment"],
   correct:[2],
   explanation:"Pre-training is the first phase where the foundation model learns general knowledge from enormous datasets (text, images, code, etc.) using self-supervised or unsupervised learning objectives. Fine-tuning adapts the pre-trained model for specific tasks. Evaluation measures performance. Deployment makes the model available for inference."
  },
  {id:10,domain:2,type:"multi",
   text:"A generative AI solution is generating outputs that occasionally contain biased, harmful, or off-topic content. Which TWO approaches can mitigate this at the application layer WITHOUT retraining the model? (Select TWO)",
   options:["Implementing Amazon Bedrock Guardrails to filter outputs","Reducing the model's context window","Adding system prompt instructions that define content boundaries and persona","Increasing the model's temperature parameter","Switching to batch inferencing"],
   correct:[0,2],
   explanation:"Bedrock Guardrails (A) applies real-time content filters for harmful content, PII, denied topics, and hallucination grounding. System prompt instructions (C) define the model's persona and constraints without retraining. Reducing context window limits capability without fixing bias. Higher temperature increases randomness/risk. Batch inference changes timing, not content safety."
  },
  {id:11,domain:2,type:"single",
   text:"A machine learning team is evaluating generative AI models for a customer-facing medical information chatbot. One key requirement is that the model must never refuse to answer a question purely because it is medical in nature, but must always indicate when to see a doctor. Which model selection factor is MOST relevant here?",
   options:["Token-based pricing per API call","Model modality and multi-lingual support","Model compliance, safety defaults, and the ability to customize content policies","The geographic region where the model is hosted"],
   correct:[2],
   explanation:"For a medical chatbot, the model's safety configuration and compliance characteristics are critical. You need a model whose safety defaults can be appropriately tuned — not blocking all medical queries, but still encouraging professional consultation. Compliance with healthcare data handling is also relevant. Pricing and geography are secondary to safety design."
  },
  {id:12,domain:2,type:"single",
   text:"What is the primary distinction between a 'fine-tuned' model and a model used with 'in-context learning' (few-shot prompting)?",
   options:["Fine-tuning requires more tokens at inference time than in-context learning","Fine-tuning modifies the model's weights through additional training; in-context learning provides examples in the prompt without changing weights","In-context learning produces better results than fine-tuning in all scenarios","Fine-tuning can only be applied to models with fewer than 1 billion parameters"],
   correct:[1],
   explanation:"Fine-tuning updates the model's actual weights through additional training on a task-specific dataset — permanently changing the model's behavior. In-context learning (few-shot) includes examples in the prompt to guide the model at inference time without any weight updates. Fine-tuning is generally better for highly specialized tasks but is more expensive; in-context learning is more flexible and cheaper."
  },
  {id:13,domain:2,type:"single",
   text:"A team builds a generative AI application using Amazon Bedrock. They want non-technical business users to build and test their own AI-powered app prototypes without writing code. Which AWS tool is purpose-built for this?",
   options:["Amazon SageMaker Studio","AWS CloudFormation","PartyRock, an Amazon Bedrock Playground","AWS Lambda"],
   correct:[2],
   explanation:"PartyRock is a no-code playground for building and sharing AI-powered apps using Amazon Bedrock foundation models. It enables business users to prototype GenAI apps through a visual interface without any coding. SageMaker Studio is for ML engineers. CloudFormation is infrastructure-as-code. Lambda is for serverless function development."
  },
  // Domain 3 – 9 questions (Intermediate)
  {id:14,domain:3,type:"single",
   text:"A company has been using a general-purpose foundation model for customer support. They notice the model doesn't understand their proprietary product terminology and frequently gives incorrect answers about their specific products. What is the MOST targeted solution?",
   options:["Switch to a smaller model to reduce hallucination","Implement domain-specific fine-tuning using product documentation and support transcripts","Increase the temperature to 1.0 for more varied responses","Add more RAM to the inference server"],
   correct:[1],
   explanation:"Domain-specific fine-tuning trains the model on proprietary content (product docs, support logs) so it learns the company's terminology and can answer accurately. This adapts the model's weights to the specific domain. RAG is an alternative but fine-tuning is more thorough for vocabulary and implicit knowledge. Increasing temperature adds randomness. Infrastructure changes don't affect domain knowledge."
  },
  {id:15,domain:3,type:"single",
   text:"A developer is designing a RAG pipeline on AWS. After generating embeddings from documents, where should these embeddings be stored to enable efficient semantic similarity search?",
   options:["Amazon S3 as JSON files","Amazon DynamoDB","A vector database such as Amazon OpenSearch Service with k-NN enabled","Amazon RDS MySQL"],
   correct:[2],
   explanation:"Vector databases are optimized for storing high-dimensional embeddings and performing efficient nearest-neighbor (semantic similarity) searches. Amazon OpenSearch Service with k-NN (k-nearest neighbor) capability is a supported vector store for Amazon Bedrock Knowledge Bases. S3 stores files but cannot perform vector similarity search. DynamoDB and MySQL lack native vector search capabilities."
  },
  {id:16,domain:3,type:"multi",
   text:"Which TWO of the following are valid techniques for improving the quality of foundation model outputs without modifying the model's weights? (Select TWO)",
   options:["Few-shot prompting with representative examples","Full model retraining on a new dataset","Prompt templates that structure inputs consistently","Increasing the number of model parameters","Deploying the model on larger GPU instances"],
   correct:[0,2],
   explanation:"Few-shot prompting (A) improves output quality by demonstrating desired behavior within the prompt. Prompt templates (C) standardize inputs, ensuring consistent context and reducing ambiguity. Both are prompt engineering techniques that improve outputs without modifying weights. Retraining and adding parameters change the model. Larger instances don't improve output quality."
  },
  {id:17,domain:3,type:"single",
   text:"A security company evaluates a foundation model's vulnerability to adversarial prompting. A tester crafts an input that causes the model to reveal its internal system prompt instructions. Which attack does this describe?",
   options:["Prompt poisoning","Data exfiltration","Prompt leaking","Model inversion"],
   correct:[2],
   explanation:"Prompt leaking is a type of prompt injection attack where a user crafts inputs to trick the model into revealing its hidden system prompt or instructions. This is a security risk because system prompts may contain proprietary instructions, personas, or business logic. Prompt poisoning corrupts training data. Model inversion extracts training data through outputs."
  },
  {id:18,domain:3,type:"single",
   text:"A financial services firm wants to evaluate how well their fine-tuned Amazon Bedrock model performs compared to the base model on their specific financial summarization task. Which Amazon Bedrock feature enables systematic model comparison and evaluation?",
   options:["Amazon Bedrock Guardrails","Agents for Amazon Bedrock","Amazon Bedrock Model Evaluation","Amazon Bedrock Knowledge Bases"],
   correct:[2],
   explanation:"Amazon Bedrock Model Evaluation allows teams to run automated or human-based evaluations to compare model performance across tasks. It supports built-in evaluation metrics and custom evaluation criteria, making it ideal for comparing a fine-tuned model against a baseline on task-specific benchmarks."
  },
  {id:19,domain:3,type:"single",
   text:"An e-commerce company wants to build a product recommendation feature that analyzes user behavior patterns. They need a managed AWS ML service that is purpose-built for personalization and recommendations — without building a custom model. Which service should they use?",
   options:["Amazon Kendra","Amazon Personalize","Amazon Comprehend","Amazon Lex"],
   correct:[1],
   explanation:"Amazon Personalize is a fully managed ML service designed specifically to build real-time personalization and recommendation systems. It uses the same technology as Amazon.com's recommendation engine and handles data ingestion, model training, and serving. Kendra is for intelligent search. Comprehend is for NLP. Lex builds conversational interfaces."
  },
  {id:20,domain:3,type:"single",
   text:"A company wants their foundation model to automatically search a product database and check inventory levels when answering customer questions — without human intervention for each step. Which component enables the model to connect with and execute these external actions?",
   options:["A knowledge base","A guardrail policy","An action group in Agents for Amazon Bedrock","A fine-tuning job"],
   correct:[2],
   explanation:"Action groups in Agents for Amazon Bedrock define the external APIs and Lambda functions that an agent can call autonomously to take actions — such as querying a database or checking inventory. The agent reasons about which actions to invoke based on user intent. Knowledge bases provide document retrieval. Guardrails enforce content policies. Fine-tuning adapts model weights."
  },
  {id:21,domain:3,type:"multi",
   text:"A team is selecting a pre-trained foundation model from Amazon Bedrock for a multilingual document translation and summarization workflow. Which TWO criteria are MOST important for this specific use case? (Select TWO)",
   options:["Multi-lingual language support","Whether the model supports image generation","Maximum input/output token length to handle long documents","The model's architecture (transformer vs. diffusion)","Whether the model was trained before 2022"],
   correct:[0,2],
   explanation:"Multi-lingual support (A) is essential for a translation workflow that must handle multiple languages. Maximum input/output length (C) is critical for processing long documents without truncation. Image generation capability is irrelevant for text-only tasks. Architecture details and training dates are generally abstracted away in Bedrock's managed service; what matters is task fit."
  },
  {id:22,domain:3,type:"single",
   text:"What is the key difference between 'pre-training' and 'continuous pre-training' of a foundation model?",
   options:["Pre-training uses labeled data; continuous pre-training uses unlabeled data","Pre-training builds the initial model from scratch on broad data; continuous pre-training extends training on new domain-specific data to update the model's knowledge","Continuous pre-training is cheaper than pre-training","Pre-training always uses supervised learning; continuous pre-training uses reinforcement learning"],
   correct:[1],
   explanation:"Pre-training creates the foundation model from scratch using massive general datasets. Continuous pre-training extends an already pre-trained model with additional domain-specific data, allowing it to acquire new knowledge (e.g., medical terminology, legal language) without starting over. This is more cost-effective than full pre-training and more thorough than fine-tuning for knowledge injection."
  },
  // Domain 4 – 4 questions (Intermediate)
  {id:23,domain:4,type:"single",
   text:"A company deploys an AI loan approval system. Six months later, the model's approval rates for a demographic group have shifted significantly, even though the business rules haven't changed. What phenomenon likely explains this?",
   options:["Prompt injection attack","Data drift causing model performance to degrade in a biased way","The model was overfitting at deployment","The context window was exceeded"],
   correct:[1],
   explanation:"Data drift occurs when the statistical properties of input data change over time, causing a model trained on historical data to perform differently or unfairly on current data. In lending, this can cause model behavior to shift in ways that create disparate impact on demographic groups. Responsible AI requires continuous monitoring with tools like SageMaker Model Monitor and Clarify."
  },
  {id:24,domain:4,type:"single",
   text:"A generative AI team uses the BERTScore metric to evaluate their model's text outputs against reference answers. What does BERTScore measure compared to BLEU?",
   options:["BERTScore measures inference speed; BLEU measures accuracy","BERTScore uses contextual semantic embeddings to assess meaning similarity; BLEU uses exact n-gram overlap","BERTScore only works for image generation; BLEU works for text","They are identical metrics with different names"],
   correct:[1],
   explanation:"BLEU measures exact n-gram overlap between generated and reference text — penalizing different wording even if meaning is the same. BERTScore uses pre-trained BERT embeddings to compute semantic similarity between generated and reference text, capturing meaning even when different words are used. BERTScore generally correlates better with human judgment for nuanced language tasks."
  },
  {id:25,domain:4,type:"multi",
   text:"A legal firm is concerned about the risks of deploying generative AI for client-facing services. Which TWO risks are specific to generative AI (compared to traditional ML) in a legal context? (Select TWO)",
   options:["Model underfitting on training data","Generating confidently wrong legal citations that do not exist (hallucination)","Potential intellectual property infringement in generated legal text","Slow inference compared to rule-based systems","Requiring too much labeled training data"],
   correct:[1,2],
   explanation:"Hallucination (B) is a generative AI–specific risk where the model fabricates legal citations, case law, or statutes that sound authoritative but are invented — a serious malpractice risk. IP infringement (C) is a generative AI risk where outputs may reproduce copyrighted legal texts or templates. Underfitting, labeled data requirements, and inference speed are general ML concerns, not specific to GenAI risks."
  },
  {id:26,domain:4,type:"single",
   text:"Which principle of responsible AI refers to the ability of a system to perform consistently and safely even when faced with adversarial inputs, noisy data, or unexpected edge cases?",
   options:["Fairness","Robustness","Transparency","Inclusivity"],
   correct:[1],
   explanation:"Robustness in AI refers to a model's ability to maintain reliable, safe performance under distribution shift, adversarial attacks, noisy inputs, or unusual scenarios. A robust model doesn't catastrophically fail or behave unsafely when inputs deviate from the training distribution. Fairness concerns equitable treatment across groups. Transparency concerns explainability. Inclusivity concerns diverse representation."
  },
  // Domain 5 – 4 questions (Intermediate)
  {id:27,domain:5,type:"single",
   text:"A security architect is designing an Amazon Bedrock–based application. They want to ensure that all API traffic between the application servers and Amazon Bedrock stays within the AWS network and never traverses the public internet. Which AWS feature enables this?",
   options:["Amazon CloudFront distribution","AWS PrivateLink (VPC endpoint for Amazon Bedrock)","Amazon Route 53 private hosted zone","AWS Shield Advanced"],
   correct:[1],
   explanation:"AWS PrivateLink enables private connectivity between a VPC and AWS services (including Amazon Bedrock) through VPC endpoints. Traffic stays within the AWS network and never traverses the public internet, improving security for sensitive AI workloads. CloudFront is a CDN for public content. Route 53 handles DNS. Shield Advanced provides DDoS protection."
  },
  {id:28,domain:5,type:"single",
   text:"A company's governance policy requires that all changes to AI model configurations, training data sources, and inference endpoints be recorded and auditable. Which combination of AWS services BEST meets this requirement?",
   options:["AWS Glue and Amazon Kinesis","AWS CloudTrail and AWS Config","Amazon Macie and Amazon Inspector","Amazon CloudWatch and AWS Lambda"],
   correct:[1],
   explanation:"AWS CloudTrail records all API calls (who changed what, when, from where) across AWS services including SageMaker and Bedrock. AWS Config continuously tracks resource configuration changes and compliance against defined rules. Together, they provide the comprehensive audit trail required for AI governance and regulatory compliance."
  },
  {id:29,domain:5,type:"single",
   text:"An AI system processes protected health information (PHI) for a healthcare client in the US. The client requires data to remain within US AWS Regions and requires evidence that AWS services meet HIPAA compliance standards. Which AWS tool provides the official compliance documentation?",
   options:["AWS Trusted Advisor","AWS Audit Manager","AWS Artifact","Amazon Macie"],
   correct:[2],
   explanation:"AWS Artifact is a self-service portal providing on-demand access to AWS compliance reports and certifications — including HIPAA eligibility documentation, ISO certifications, SOC reports, and BAAs (Business Associate Agreements). Trusted Advisor offers operational best-practice checks. Audit Manager helps collect evidence. Macie discovers sensitive data in S3."
  },
  {id:30,domain:5,type:"multi",
   text:"A company is implementing a data governance strategy for their ML training data. Which TWO practices are MOST important for maintaining data integrity and compliance? (Select TWO)",
   options:["Storing all data in a single unpartitioned S3 bucket","Implementing data access controls using IAM policies and S3 bucket policies","Retaining all data indefinitely to ensure nothing is lost","Maintaining data lineage to track the origin and transformations of training data","Granting all ML engineers full administrative access to all data"],
   correct:[1,3],
   explanation:"IAM policies and S3 bucket policies (B) enforce least-privilege access, ensuring only authorized users/services can access sensitive training data. Data lineage (D) tracks data origin and transformations — critical for reproducibility, debugging, and regulatory compliance. Unpartitioned buckets, indefinite retention without policy, and over-broad access all violate data governance best practices."
  }
];

export default questions;
