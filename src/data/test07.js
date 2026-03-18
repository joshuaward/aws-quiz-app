// Test 7 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [{id:1,domain:1,type:"single",
   text:"Which of the following BEST defines 'labeled data' in the context of supervised machine learning?",
   options:["Raw data that has been compressed and stored in Amazon S3","Data where each example is paired with the correct answer or target output the model should predict","Data that has been normalized and scaled for numerical stability","Data stored in a relational database with primary keys"],
   correct:[1],
   explanation:"Labeled data consists of input examples paired with their known correct outputs (labels/targets). For example, images labeled as 'cat' or 'dog', or emails labeled 'spam' or 'not spam'. Supervised learning algorithms use these input-output pairs to learn the mapping function. Without labels, you need unsupervised or self-supervised techniques."
  },
  {id:2,domain:1,type:"single",
   text:"A music streaming platform wants to automatically tag uploaded songs with genres — like 'jazz', 'rock', or 'classical' — based on audio features. The genre labels are predefined. Which ML task type is this?",
   options:["Regression","Multi-class classification","Anomaly detection","Dimensionality reduction"],
   correct:[1],
   explanation:"Assigning each song to one of several predefined genre categories is a multi-class classification task. There are more than two categories (jazz, rock, classical, etc.) but the output is still a discrete class label. Binary classification has exactly two classes. Regression predicts continuous values. Anomaly detection finds outliers. Dimensionality reduction reduces feature count."
  },
  {id:3,domain:1,type:"single",
   text:"Which AWS service allows developers to deploy and serve a trained ML model as a scalable REST API endpoint for real-time inference without managing servers?",
   options:["Amazon S3","Amazon SageMaker Endpoints","AWS Glue","Amazon Kinesis Data Streams"],
   correct:[1],
   explanation:"Amazon SageMaker Endpoints deploys trained ML models as fully managed, auto-scaling REST API endpoints for real-time inference. Developers invoke the endpoint with input data and receive predictions without managing any servers or infrastructure. S3 is object storage. Glue is for ETL/data integration. Kinesis is for streaming data ingestion."
  },
  {id:4,domain:1,type:"single",
   text:"What does it mean when an ML model is described as 'generalizing well'?",
   options:["The model runs faster on larger datasets","The model performs well on new, unseen data — not just the data it was trained on","The model has more parameters than the baseline","The model was trained on general-purpose internet data"],
   correct:[1],
   explanation:"Generalization refers to a model's ability to perform well on new, previously unseen data — not just memorizing the training set. A model that generalizes well has learned the underlying patterns rather than noise. Good generalization is the primary goal of ML training. Poor generalization is called overfitting (memorizing training data) or underfitting (not learning enough)."
  },
  {id:5,domain:1,type:"multi",
   text:"Which TWO statements accurately describe the difference between supervised and unsupervised learning? (Select TWO)",
   options:["Supervised learning requires labeled training data; unsupervised learning does not require labels","Unsupervised learning is always faster than supervised learning","Supervised learning trains a model to map inputs to known outputs; unsupervised learning finds hidden patterns without predefined targets","Supervised learning cannot be used for classification tasks","Unsupervised learning requires more labeled data than supervised learning"],
   correct:[0,2],
   explanation:"Supervised learning (A) uses labeled data — input-output pairs — to train a model to predict known targets. Unsupervised learning (C) finds structure in unlabeled data without predefined outputs. These are the two most fundamental distinctions. Speed comparisons aren't generalizable. Supervised learning is widely used for classification. Unsupervised needs no labels at all."
  },
  {id:6,domain:1,type:"single",
   text:"A company wants to predict the exact dollar amount a customer will spend next month based on their historical purchase history. Which type of ML task is this?",
   options:["Binary classification","Multi-class classification","Regression","Clustering"],
   correct:[2],
   explanation:"Predicting a continuous numerical value (exact spend amount) is a regression task. Classification predicts discrete categories. Regression predicts quantities — prices, temperatures, sales figures, durations. Binary classification would only predict two categories (e.g., will spend / won't spend). Clustering groups unlabeled data without predicting a specific value."
  },
  {id:7,domain:2,type:"single",
   text:"A generative AI model trained in 2023 is asked about a major scientific discovery announced in early 2025. The model confidently provides an answer that is completely fabricated. Which TWO limitations does this illustrate?",
   options:["Knowledge cutoff — the model has no training data beyond its cutoff date","The model is deliberately lying to the user","Hallucination — the model generated plausible but false content rather than admitting ignorance","The model needs more computing resources","The model was trained incorrectly"],
   correct:[0,2],
   explanation:"This scenario illustrates two key GenAI limitations: (1) knowledge cutoff — the model genuinely has no data about events after its training cutoff, so it cannot know about 2025 discoveries; (2) hallucination — instead of saying 'I don't know,' the model fabricated a plausible-sounding but false answer. Both are fundamental LLM limitations requiring mitigation strategies like RAG for current information."
  },
  {id:8,domain:2,type:"single",
   text:"What is the role of an 'embedding model' in a Retrieval Augmented Generation (RAG) system?",
   options:["To generate the final text response for the user","To convert text chunks into dense numerical vector representations that capture semantic meaning","To chunk documents into smaller pieces for storage","To route user queries to the correct knowledge base"],
   correct:[1],
   explanation:"An embedding model converts text (documents, sentences, queries) into dense numerical vectors where semantically similar texts produce similar vectors. In RAG, all knowledge base documents are converted to embeddings and stored in a vector database. When a query arrives, it's also embedded, and the system finds document chunks with similar vectors (semantic search). Amazon Bedrock offers Amazon Titan Text Embeddings for this purpose."
  },
  {id:9,domain:2,type:"single",
   text:"Which Amazon Bedrock feature allows developers to quickly experiment with different foundation model prompts in an interactive, visual environment without writing any application code?",
   options:["Amazon Bedrock Knowledge Bases","Amazon Bedrock Playgrounds","Amazon Bedrock Guardrails","Amazon Bedrock Agents"],
   correct:[1],
   explanation:"Amazon Bedrock Playgrounds provide an interactive browser-based interface for testing prompts with different foundation models, adjusting inference parameters (temperature, max_tokens, etc.), and comparing outputs — all without writing code. This is ideal for prompt iteration, model comparison, and rapid prototyping before building a full application."
  },
  {id:10,domain:2,type:"single",
   text:"A developer notices that their LLM occasionally generates the phrase 'As of my last knowledge update...' when answering questions about recent events. What limitation is the model signaling?",
   options:["The model's inference is running too slowly","The model is indicating its knowledge cutoff — it may not have information about events after a certain date","The model lacks sufficient context window capacity","The model needs to be fine-tuned on more recent data immediately"],
   correct:[1],
   explanation:"When an LLM says 'As of my last knowledge update' it is correctly acknowledging its knowledge cutoff — the point after which its training data ends. This is responsible model behavior, warning the user that information may be outdated. The solution for time-sensitive applications is RAG with an up-to-date knowledge base or using web search tool integration."
  },
  {id:11,domain:2,type:"multi",
   text:"An organization is selecting a foundation model on Amazon Bedrock for a customer-facing chatbot. Which TWO factors should they evaluate FIRST? (Select TWO)",
   options:["The model's task performance and quality on representative test prompts","The number of AWS data centers the model is replicated to","The model's context window size relative to the expected conversation length","Whether the model was created before or after 2020","The physical server hardware the model runs on"],
   correct:[0,2],
   explanation:"Task performance (A) — how well the model handles your actual use case — is the primary quality gate. Context window size (C) determines whether the model can handle your expected conversation history, documents, or prompt size without truncation. Region replication and hardware are abstracted by Bedrock's managed service. Model creation year matters less than its benchmark performance on your specific task."
  },
  {id:12,domain:2,type:"single",
   text:"What does it mean when a generative AI model is described as 'nondeterministic'?",
   options:["The model always produces the same output for a given input","The model's outputs vary even for identical inputs due to probabilistic sampling during generation","The model cannot be deployed in production","The model was trained on random data"],
   correct:[1],
   explanation:"Nondeterminism in generative AI means the same input prompt can produce different outputs on different runs, because the model samples probabilistically from a distribution of likely next tokens. Temperature and Top-P parameters control this randomness. For applications requiring reproducibility (e.g., data extraction), low temperature (approaching 0) can reduce but not always eliminate nondeterminism."
  },
  {id:13,domain:2,type:"single",
   text:"Which of the following is the MOST accurate description of 'prompt engineering'?",
   options:["Training a new foundation model from scratch using custom datasets","Designing, iterating, and optimizing the text inputs (prompts) provided to a foundation model to elicit the best possible outputs for a given task","Modifying the model's neural network architecture","Adjusting GPU memory allocation for model inference"],
   correct:[1],
   explanation:"Prompt engineering is the practice of crafting and refining text prompts to guide foundation model behavior toward desired outputs. It includes techniques like few-shot examples, chain-of-thought instructions, system prompts, and structured formatting. Prompt engineering is a software skill that can dramatically improve output quality without any model retraining. It is not about model architecture or infrastructure."
  },
  {id:14,domain:3,type:"single",
   text:"A company builds a customer support chatbot using Amazon Lex. A user says 'I want to cancel my subscription.' The chatbot correctly identifies this as a cancellation request and routes it to the cancellation workflow. What NLU concept enabled the chatbot to understand the user's goal?",
   options:["Named entity recognition","Intent recognition","Sentiment analysis","Text summarization"],
   correct:[1],
   explanation:"Intent recognition (or intent classification) is the NLU capability that identifies what the user wants to accomplish from their natural language input. Amazon Lex uses trained intents to map user utterances to specific actions. 'I want to cancel my subscription' is mapped to a CancelSubscription intent. Named entity recognition identifies specific things mentioned (e.g., product names). Sentiment analysis identifies emotional tone."
  },
  {id:15,domain:3,type:"single",
   text:"What is the PRIMARY benefit of using Amazon Bedrock Knowledge Bases compared to manually implementing a RAG pipeline from scratch?",
   options:["Amazon Bedrock Knowledge Bases always produce better answers than custom RAG pipelines","Amazon Bedrock Knowledge Bases fully manages document ingestion, chunking, embedding, vector storage, and retrieval — reducing development effort and operational overhead","Amazon Bedrock Knowledge Bases work only with Amazon-proprietary document formats","Amazon Bedrock Knowledge Bases eliminate the need for any foundation model"],
   correct:[1],
   explanation:"Amazon Bedrock Knowledge Bases is a fully managed RAG service that handles the entire pipeline: ingesting documents from S3, chunking them, generating embeddings using a selected embedding model, storing them in a managed vector store, and performing semantic retrieval at query time. This eliminates weeks of custom RAG development and ongoing infrastructure management. It supports common document formats (PDF, Word, HTML, etc.)."
  },
  {id:16,domain:3,type:"multi",
   text:"A startup is building a GenAI app and debating whether to use Amazon Bedrock or train their own model on EC2 GPU instances. Which TWO advantages does Amazon Bedrock offer over self-training and self-hosting? (Select TWO)",
   options:["No need to manage training infrastructure, GPU provisioning, or model serving","Amazon Bedrock models always outperform self-trained models","Access to multiple state-of-the-art foundation models from providers like Anthropic, Meta, and Mistral without training costs","Bedrock automatically writes application code for the developer","Bedrock eliminates all API call costs"],
   correct:[0,2],
   explanation:"Amazon Bedrock eliminates infrastructure management (A) — no GPU provisioning, model training, or inference server management required. It provides access to multiple leading foundation models from various providers (C) that would cost millions of dollars to train independently. Performance depends on use case, not automatically on which approach. Bedrock doesn't write application code. API calls are billed per token."
  },
  {id:17,domain:3,type:"single",
   text:"A developer wants their Amazon Bedrock model to always respond in JSON format. They add 'Respond only in valid JSON. Never include any text outside the JSON structure.' to their prompt. Where should this instruction be placed for maximum effectiveness?",
   options:["In the user's chat message only","In the system prompt so it applies to every model response","In the AWS Console settings","In the IAM policy for the Bedrock role"],
   correct:[1],
   explanation:"System prompt instructions apply globally to all model responses in a session or application. Placing formatting constraints in the system prompt ensures they are always in effect, regardless of what the user asks. User message instructions only apply to that specific turn. AWS Console settings and IAM policies don't control model output format."
  },
  {id:18,domain:3,type:"single",
   text:"A team is evaluating whether to use an LLM or a traditional keyword-search system for their internal help desk. Which scenario BEST justifies choosing an LLM-based approach?",
   options:["Users type exact document titles to find files","The help desk receives the same 10 questions repeatedly with known answers","Users ask complex, varied natural language questions that require synthesizing information from multiple sources","The company needs to index only structured database records"],
   correct:[2],
   explanation:"LLMs excel at understanding complex, varied natural language queries and synthesizing answers from multiple information sources — far beyond keyword matching. If users ask diverse, nuanced questions that require reasoning across documents, an LLM-based approach (ideally with RAG) provides dramatically better quality than keyword search. For simple exact lookups or repeated known questions, traditional systems may suffice."
  },
  {id:19,domain:3,type:"single",
   text:"What is 'zero-shot prompting' in the context of foundation models?",
   options:["Prompting a model that has zero parameters","Asking the model to complete a task without providing any examples of the desired input-output format","Sending an empty prompt to test model defaults","Prompting the model exactly zero times during fine-tuning"],
   correct:[1],
   explanation:"Zero-shot prompting means asking the model to perform a task purely through instruction, without providing any demonstration examples. For example: 'Classify this customer review as positive or negative: [review text]'. The model uses its pre-trained knowledge to complete the task. Zero-shot is the simplest prompting approach; few-shot provides examples (shots); chain-of-thought adds reasoning steps."
  },
  {id:20,domain:3,type:"multi",
   text:"Which TWO types of outputs can Amazon Bedrock foundation models generate, depending on the model selected? (Select TWO)",
   options:["Text responses (summaries, answers, code, translations)","Real-time video editing","Images (from text-to-image models like Stability AI)","Streaming music compositions","3D CAD model files"],
   correct:[0,2],
   explanation:"Amazon Bedrock hosts both large language models (producing text outputs like summaries, answers, translations, and code) and image generation models such as Stability AI's Stable Diffusion (producing images from text prompts). Video editing, music streaming, and 3D CAD generation are not currently primary Bedrock output modalities. Bedrock's core modalities are text generation and image generation."
  },
  {id:21,domain:3,type:"single",
   text:"A company wants to give their foundation model access to real-time stock prices when answering financial questions. The model itself doesn't have real-time data. Which architectural pattern enables this?",
   options:["Continuous pre-training the model with live stock data","Using Agents for Amazon Bedrock with an action group that calls a live stock price API","Increasing the model's context window","Switching to a model with a more recent training cutoff"],
   correct:[1],
   explanation:"Agents for Amazon Bedrock can call external APIs (via action groups and Lambda functions) at inference time to retrieve real-time data. The agent reasons about when to call the stock API, retrieves current prices, and incorporates them into its response. Pre-training is too slow for real-time data. Context window size doesn't provide external data. A newer training cutoff still wouldn't include real-time prices."
  },
  {id:22,domain:3,type:"single",
   text:"What does 'model grounding' refer to in the context of RAG applications?",
   options:["Running the model on dedicated GPU hardware","Ensuring model responses are anchored to specific, verifiable source documents rather than relying solely on the model's parametric memory","Decreasing the temperature to reduce response randomness","Connecting the model to the internet for live search"],
   correct:[1],
   explanation:"Grounding refers to anchoring model outputs to specific, authoritative source documents retrieved from a knowledge base. A grounded response cites and stays consistent with the retrieved content, reducing hallucination. In RAG, grounding is achieved by injecting retrieved documents into the prompt context. Amazon Bedrock Guardrails includes a contextual grounding check to verify response fidelity to source documents."
  },
  {id:23,domain:4,type:"single",
   text:"A responsible AI review board evaluates an AI model before deployment. One criteria is 'transparency.' What does AI transparency mean?",
   options:["The model must be open-source","Stakeholders should be able to understand what the AI system does, how it makes decisions, and what its limitations are","The model must process all requests within 100ms","The AI system must operate without any human oversight"],
   correct:[1],
   explanation:"Transparency in AI means that stakeholders — including users, operators, and affected individuals — can understand what an AI system does, what data it uses, how it makes decisions, and what its limitations are. Transparency enables informed trust and accountability. It doesn't require open-source code, but does require documentation, explainability, and honest communication about capabilities and limitations."
  },
  {id:24,domain:4,type:"single",
   text:"An AI team uses RLHF (Reinforcement Learning from Human Feedback) to improve their language model. What is the primary purpose of RLHF in this context?",
   options:["To reduce the model's computational requirements","To align the model's outputs with human preferences and values by training a reward model based on human ratings","To automatically label training data without human involvement","To distribute training across multiple AWS Regions"],
   correct:[1],
   explanation:"RLHF (Reinforcement Learning from Human Feedback) is a technique used to align AI model behavior with human preferences and values. Human raters compare model outputs and indicate which are better; a reward model is trained on these preferences; the main model is then fine-tuned using reinforcement learning to maximize the learned reward signal. This is a key technique for making models helpful, harmless, and honest."
  },
  {id:25,domain:4,type:"multi",
   text:"A company discovers their AI-powered hiring tool rejects candidates with non-Western names at higher rates. Which TWO immediate actions align with responsible AI principles? (Select TWO)",
   options:["Immediately take the system offline or disable its use in hiring decisions until bias is investigated","Ignore the finding because the tool improved overall hiring speed","Conduct a thorough bias audit to quantify disparate impact across name-origin groups","Increase the model's training data volume without changing anything else","Publicly deny the bias finding to protect brand reputation"],
   correct:[0,2],
   explanation:"Taking the system offline (A) prevents ongoing harm while the issue is investigated — a responsible immediate action. A thorough bias audit (C) quantifies the disparity, identifies root causes (data bias, feature selection, labeling bias), and informs remediation. Ignoring findings, adding data without targeted fixes, and denying findings all violate responsible AI principles and potentially create legal liability."
  },
  {id:26,domain:4,type:"single",
   text:"What is the difference between 'explainability' and 'interpretability' in AI systems?",
   options:["They are identical concepts with no meaningful distinction","Interpretability refers to understanding the internal mechanics of a model; explainability refers to communicating model behavior in human-understandable terms to non-technical stakeholders","Explainability only applies to image models; interpretability only applies to text models","Interpretability is a legal term; explainability is a technical term"],
   correct:[1],
   explanation:"While often used interchangeably, interpretability typically refers to the technical understanding of how a model works internally (e.g., which neurons activate, what features are used). Explainability is the ability to communicate model decisions in terms that non-technical stakeholders (patients, customers, regulators) can understand and act on. Both are core responsible AI requirements, especially in regulated industries."
  },
  {id:27,domain:5,type:"single",
   text:"A company trains ML models using sensitive healthcare data stored in Amazon S3. They want to ensure the data cannot be accessed by unauthorized IAM principals even if they have broad S3 permissions. Which S3 feature provides object-level access control?",
   options:["S3 Versioning","S3 Object Lock","S3 Bucket Policies and IAM Resource-Based Policies","Amazon S3 Transfer Acceleration"],
   correct:[2],
   explanation:"S3 Bucket Policies (resource-based policies) combined with IAM identity-based policies provide fine-grained, layered access control — specifying exactly which principals can access which objects. For healthcare data, policies should follow least privilege: only the specific SageMaker training job role can access the training bucket. S3 Versioning tracks object versions. Object Lock prevents deletion. Transfer Acceleration speeds uploads."
  },
  {id:28,domain:5,type:"single",
   text:"What does 'encryption at rest' mean in the context of ML training data stored in Amazon S3?",
   options:["The data is encrypted only during the upload process","Data stored on disk in S3 is encrypted so that unauthorized physical access to storage media cannot reveal the data","The data is compressed to save storage space","The data is replicated to multiple AWS Regions automatically"],
   correct:[1],
   explanation:"Encryption at rest means data stored on physical storage media (disks, SSDs) is encrypted using cryptographic keys. Even if someone were to obtain the physical storage, the data would be unreadable without the encryption key. AWS offers S3 Server-Side Encryption (SSE-S3, SSE-KMS, SSE-C) for this purpose. This is distinct from encryption in transit (TLS/HTTPS) which protects data moving over networks."
  },
  {id:29,domain:5,type:"single",
   text:"A machine learning team needs to ensure their Amazon Bedrock application complies with their company's data handling policies, which require all data to stay within a specific AWS Region. Which AWS capability ensures regional data residency for Bedrock workloads?",
   options:["Enable cross-region replication on all S3 buckets","Select and use a single Bedrock-supported AWS Region and configure the application to invoke Bedrock endpoints only within that Region","Use Amazon CloudFront to cache responses globally","Enable AWS Transfer Family for data movement"],
   correct:[1],
   explanation:"Amazon Bedrock is available in specific AWS Regions. To enforce data residency, configure the application to invoke only the Bedrock API endpoint in the approved Region, and store all input/output data within S3 buckets in that same Region. AWS regional architecture ensures data doesn't leave the specified geography. Cross-region replication would violate residency requirements."
  },
  {id:30,domain:5,type:"multi",
   text:"A company wants to implement a comprehensive audit capability for their AWS AI workloads. Which TWO AWS services provide the MOST relevant audit and logging capabilities? (Select TWO)",
   options:["AWS CloudTrail — logs all AWS API calls including who called which Bedrock/SageMaker API, when, and from where","Amazon Polly — converts audit logs to speech","Amazon CloudWatch Logs — captures application-level logs from AI workloads and Lambda functions","Amazon Textract — extracts text from audit PDF reports","AWS Glue — transforms audit data for analytics"],
   correct:[0,2],
   explanation:"AWS CloudTrail (A) provides the API-level audit trail — every AWS API call (InvokeModel, CreateTrainingJob, etc.) is logged with identity, timestamp, and source. Amazon CloudWatch Logs (C) captures application logs from Lambda functions, containers, and other compute — including prompt/response logging if implemented. Together they provide infrastructure + application audit coverage. Polly, Textract, and Glue are not audit tools."
  }
];

export default questions;
