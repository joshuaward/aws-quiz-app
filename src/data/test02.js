// Test 2 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [ // Domain 1 – 6 questions (Foundational)
    {
        id: 1,
        domain: 1,
        type: "single",
        text: "Which of the following BEST describes the difference between Artificial Intelligence (AI) and Machine Learning (ML)?",
        options: ["AI and ML are the same thing, just different names for the same technology", "AI is a broad field that encompasses machines performing tasks that mimic human intelligence; ML is a subset of AI that learns from data", "ML is a broader field that includes AI as a subset", "AI requires large datasets while ML does not require any data"],
        correct: [1],
        explanation: "AI is the broad science of making machines intelligent. ML is a specific subset of AI where systems learn from data to improve at tasks without being explicitly programmed. Deep learning is a further subset of ML using neural networks."
    },
    {
        id: 2,
        domain: 1,
        type: "single",
        text: "A retail company wants to group its customers into segments based on purchasing behavior, without predefined categories. No labeled data is available. Which ML approach should they use?",
        options: ["Supervised learning using a classification algorithm", "Reinforcement learning with a reward function", "Unsupervised learning using a clustering algorithm", "Transfer learning from a pre-trained retail model"],
        correct: [2],
        explanation: "Unsupervised learning finds hidden patterns in data without labels. Clustering algorithms (like K-means) are the classic unsupervised approach for customer segmentation. Supervised learning requires labeled data. Reinforcement learning uses rewards/penalties. Transfer learning starts from a pre-trained model."
    },
    {
        id: 3,
        domain: 1,
        type: "single",
        text: "Which AWS service is specifically designed to help developers with no ML expertise add pre-built AI capabilities such as text-to-speech to their applications?",
        options: ["Amazon SageMaker", "Amazon Polly", "AWS Glue", "Amazon Kinesis"],
        correct: [1],
        explanation: "Amazon Polly is a managed AI service that converts text into lifelike speech using deep learning. It requires no ML expertise. SageMaker is a full ML platform for building and training custom models. Glue is a data integration service. Kinesis is for streaming data."
    },
    {
        id: 4,
        domain: 1,
        type: "single",
        text: "During the ML development lifecycle, a data scientist discovers that the raw dataset contains missing values, duplicate records, and inconsistent formatting. Which pipeline stage addresses these issues?",
        options: ["Model training", "Hyperparameter tuning", "Data pre-processing", "Model deployment"],
        correct: [2],
        explanation: "Data pre-processing (also called data cleaning or data preparation) involves handling missing values, removing duplicates, normalizing formats, encoding categorical variables, and making data suitable for model training. It is a critical early stage before any training occurs."
    },
    {
        id: 5,
        domain: 1,
        type: "multi",
        text: "A company is exploring AWS AI/ML services. Which TWO services provide pre-built NLP capabilities WITHOUT requiring custom model training? (Select TWO)",
        options: ["Amazon Transcribe", "Amazon SageMaker Autopilot", "Amazon Translate", "Amazon SageMaker Feature Store", "AWS Glue"],
        correct: [0, 2],
        explanation: "Amazon Transcribe converts speech to text (an NLP-adjacent capability) using pre-trained models. Amazon Translate provides real-time language translation — also a pre-built NLP service. SageMaker Autopilot automates ML model building but still requires training. Feature Store and Glue are data management tools, not AI inference services."
    },
    {
        id: 6,
        domain: 1,
        type: "single",
        text: "An autonomous drone uses trial-and-error interactions with its environment, receiving rewards for safe maneuvers and penalties for crashes, to learn how to navigate. Which ML paradigm does this describe?",
        options: ["Supervised learning", "Unsupervised learning", "Semi-supervised learning", "Reinforcement learning"],
        correct: [3],
        explanation: "Reinforcement learning (RL) is a paradigm where an agent learns by taking actions in an environment and receiving scalar reward or penalty signals. The drone learns an optimal policy by maximizing cumulative rewards over time. This is a hallmark RL use case."
    },
    // Domain 2 – 7 questions (Foundational)
    {
        id: 7,
        domain: 2,
        type: "single",
        text: "A generative AI model is described as a 'foundation model.' What makes a model a foundation model?",
        options: ["It is trained only on structured tabular data", "It is a small, task-specific model trained from scratch for each use case", "It is a large model pre-trained on broad datasets that can be adapted to a wide range of downstream tasks", "It is a rule-based system that requires no training data"],
        correct: [2],
        explanation: "A foundation model is a large AI model trained on vast amounts of broad data that serves as a versatile base (foundation) for many downstream tasks. Rather than training a new model for each task, foundation models can be fine-tuned or prompted for specific applications. Amazon Bedrock provides access to various foundation models."
    },
    {
        id: 8,
        domain: 2,
        type: "single",
        text: "Before text is processed by a large language model, it is broken into smaller units. What are these smallest units of text called?",
        options: [
            "Vectors",
            "Embeddings",
            "Weights",
            "Tokens"
        ],
        correct: [3],
        explanation: "Tokens are the smallest units of text that an LLM processes. A token can be a word, part of a word, or a punctuation character. Tokenization converts raw text into token IDs that the model uses. Embeddings are the numerical vector representations of tokens or sequences. Weights are learned model parameters."
    },
    {
        id: 9,
        domain: 2,
        type: "single",
        text: "A generative AI model produces different outputs every time the same prompt is submitted, even with identical inputs. Which model parameter controls this level of randomness?",
        options: ["Max tokens", "Top-P", "Temperature", "Context window"],
        correct: [2],
        explanation: "Temperature is the inference parameter that controls the randomness (or 'creativity') of model outputs. Higher temperature values increase randomness; lower values (closer to 0) make outputs more deterministic and focused. Max tokens controls output length. Top-P (nucleus sampling) is another sampling strategy. Context window is the maximum input size."
    },
    {
        id: 10,
        domain: 2,
        type: "single",
        text: "Which type of generative AI model is specifically designed to generate realistic images from text descriptions by progressively removing noise from a random image?",
        options: [
            "Decision tree ensemble",
            "Transformer-based LLM",
            "Recurrent Neural Network (RNN)",
            "Diffusion model"
        ],
        correct: [3],
        explanation: "Diffusion models generate images by learning to reverse a process of gradually adding noise to training images. Given a text prompt, they start with random noise and iteratively denoise toward a realistic image. This is how models like Stable Diffusion work. Transformer-based LLMs primarily handle text."
    },
    {
        id: 11,
        domain: 2,
        type: "single",
        text: "A company wants to allow employees to ask natural language questions about internal company data, HR policies, and project status — all from a single AI-powered assistant. Which AWS service is purpose-built for this enterprise Q&A use case?",
        options: ["Amazon Lex", "Amazon Q Business", "Amazon Polly", "Amazon Rekognition"],
        correct: [1],
        explanation: "Amazon Q Business is a fully managed, generative AI–powered assistant designed for enterprise use. It can securely connect to company data sources (documents, wikis, databases) and answer employee questions using natural language. Amazon Lex is for building custom chatbots. Polly is text-to-speech. Rekognition is for image/video analysis."
    },
    {
        id: 12,
        domain: 2,
        type: "multi",
        text: "Which TWO characteristics are commonly identified as LIMITATIONS or risks of generative AI systems? (Select TWO)",
        options: ["The ability to generate human-like text", "Nondeterminism — producing different outputs for the same input", "The ability to summarize long documents", "Hallucination — generating confident but factually incorrect content", "Lower infrastructure costs compared to rule-based systems"],
        correct: [1, 3],
        explanation: "Nondeterminism (B) means the same prompt can yield different answers, making outputs unpredictable. Hallucination (D) means models can generate plausible but incorrect information — a significant risk in high-stakes applications. The other options describe capabilities or cost claims that are not inherent limitations."
    },
    {
        id: 13,
        domain: 2,
        type: "single",
        text: "A developer is calculating the cost of running a generative AI workload on Amazon Bedrock. They notice that longer system prompts dramatically increase costs per API call. What is the primary reason?",
        options: ["Longer prompts require more AWS Regions to be activated", "Amazon Bedrock charges per API call regardless of content length", "Pricing is based on the number of tokens processed, and longer prompts contain more tokens", "Longer prompts trigger automatic model fine-tuning"],
        correct: [2],
        explanation: "Amazon Bedrock uses token-based pricing for most models. Both input tokens (your prompt + context) and output tokens (the model's response) contribute to the total cost. Longer system prompts have more tokens, directly increasing per-call costs. This is why prompt optimization matters for cost management."
    },
    // Domain 3 – 9 questions (Foundational/Intermediate)
    {
        id: 14,
        domain: 3,
        type: "single",
        text: "A customer service platform wants to automatically route support tickets to the correct department by analyzing the text content of each ticket. Which type of ML problem is this?",
        options: ["Regression", "Clustering", "Text classification", "Anomaly detection"],
        correct: [2],
        explanation: "Routing tickets to predefined departments based on text content is a text classification problem. The model learns to assign input text to one of several defined categories/classes. Regression predicts continuous values. Clustering groups unlabeled data. Anomaly detection identifies unusual patterns."
    },
    {
        id: 15,
        domain: 3,
        type: "single",
        text: "A team wants to build a chatbot that can reference a specific internal PDF document library to answer questions. They do not want to retrain a model. They plan to convert the PDFs to chunks, generate embeddings, and store them so the model can search them at query time. Which architecture does this describe?",
        options: ["Continuous pre-training", "Retrieval Augmented Generation (RAG)", "Instruction fine-tuning", "Zero-shot prompting"],
        correct: [1],
        explanation: "RAG combines a retrieval system (searching a vector store of embedded document chunks) with a generative model. At query time, relevant chunks are retrieved and injected into the prompt as context, allowing the model to answer grounded in the actual documents without retraining."
    },
    {
        id: 16,
        domain: 3,
        type: "single",
        text: "A prompt engineer writes: 'You are a professional financial analyst. Answer only questions about stock analysis. Do not provide personal investment advice.' Where do these instructions typically appear in a structured prompt?",
        options: ["As few-shot examples", "As a system prompt (system message)", "As the user's query", "As a negative output sample"],
        correct: [1],
        explanation: "A system prompt (or system message) sets the model's persona, scope, tone, and constraints before user interaction begins. It is a key prompt engineering construct for controlling model behavior. Few-shot examples demonstrate desired input-output pairs. The user query is the actual question. Negative outputs describe what NOT to generate."
    },
    {
        id: 17,
        domain: 3,
        type: "single",
        text: "A developer calls an Amazon Bedrock foundation model API and sets 'max_tokens' to 50. What does this parameter control?",
        options: ["The maximum number of API calls allowed per second", "The maximum number of tokens the model will generate in its response", "The size of the training dataset used by the model", "The minimum confidence threshold for the model's answer"],
        correct: [1],
        explanation: "The max_tokens parameter (also called max_new_tokens or max_output_tokens depending on the model) limits the number of tokens the model will generate in a single response. It does not affect the input, training data, or API rate limits. It is useful for controlling response length and cost."
    },
    {
        id: 18,
        domain: 3,
        type: "single",
        text: "A foundation model was trained on general internet data. A healthcare company wants it to answer questions using only their approved clinical guidelines. They want the model's answers to always cite the source document. Which approach BEST addresses this need?",
        options: ["Increase the model's temperature to improve creativity", "Deploy the model in a different AWS Region", "Implement RAG with their clinical guidelines as the knowledge base", "Delete the model's existing training weights and retrain from scratch"],
        correct: [2],
        explanation: "RAG allows the model to retrieve and cite specific documents from the clinical guidelines knowledge base at query time. The model's response can include direct references to the source documents. This approach is faster, cheaper, and more maintainable than retraining — and keeps answers grounded in approved content."
    },
    {
        id: 19,
        domain: 3,
        type: "multi",
        text: "A company is fine-tuning a foundation model for a specialized legal document summarization task. Which TWO elements are MOST important when preparing fine-tuning data? (Select TWO)",
        options: ["The data should be as large as possible regardless of quality", "The data should be representative of the actual legal documents the model will encounter", "The training examples should contain high-quality, accurately labeled input-output pairs", "The data should only include documents from a single law jurisdiction", "The data should be stored in Amazon S3 Glacier for lowest cost"],
        correct: [1, 2],
        explanation: "Fine-tuning data quality is critical. Representativeness (B) ensures the model generalizes to real-world inputs. High-quality labeled pairs (C) teach the model correct behavior. Quantity without quality degrades performance. Geographic restriction isn't necessary unless the use case requires it. Storage tier doesn't affect data quality."
    },
    {
        id: 20,
        domain: 3,
        type: "single",
        text: "Which of the following BEST describes 'chain-of-thought' prompting?",
        options: ["Providing multiple examples of input-output pairs in the prompt", "Asking the model to break down its reasoning step-by-step before giving a final answer", "Combining multiple models in a pipeline where each model processes the previous output", "Using negative examples to tell the model what NOT to do"],
        correct: [1],
        explanation: "Chain-of-thought (CoT) prompting encourages the model to reason through a problem step-by-step before giving the final answer. This often improves accuracy on complex reasoning tasks by making the model's reasoning process explicit. Few-shot provides examples. Chaining models is a pipeline/orchestration pattern. Negative examples are negative prompting."
    },
    {
        id: 21,
        domain: 3,
        type: "single",
        text: "A team evaluates a text generation model using the BLEU metric. The score comes out at 0.82. What does a higher BLEU score indicate?",
        options: ["The model has fewer parameters and is more efficient", "The generated text has higher n-gram overlap with human reference translations or summaries", "The model is less likely to hallucinate factual errors", "The model requires less compute to run inference"],
        correct: [1],
        explanation: "BLEU (Bilingual Evaluation Understudy) measures the n-gram precision overlap between the generated text and one or more human reference outputs. A higher BLEU score (closer to 1.0) indicates higher textual similarity to the reference. It is commonly used for translation and text generation tasks. It does not measure factual accuracy or efficiency."
    },
    {
        id: 22,
        domain: 3,
        type: "single",
        text: "A generative AI application needs to perform a complex task: search the web for product reviews, synthesize the results, then write a comparison report and save it to S3 — all triggered by a single user request. Which Amazon Bedrock capability enables this multi-step autonomous workflow?",
        options: ["Bedrock Guardrails", "Bedrock Knowledge Bases", "Agents for Amazon Bedrock", "Bedrock Model Evaluation"],
        correct: [2],
        explanation: "Agents for Amazon Bedrock can orchestrate multi-step tasks by reasoning about what actions to take, calling external tools and APIs, using knowledge bases, and managing the workflow across steps — all autonomously from a single natural language request. Guardrails add content safety. Knowledge Bases provide document retrieval. Model Evaluation assesses quality."
    },
    // Domain 4 – 4 questions (Foundational)
    {
        id: 23,
        domain: 4,
        type: "single",
        text: "A company trains an image recognition model. Later, they discover the model performs significantly worse on images from certain geographic regions because those regions were underrepresented in the training dataset. What is the root cause of this problem?",
        options: ["Model overfitting", "Lack of sufficient compute during training", "Unrepresentative (non-inclusive) training data leading to bias", "High model temperature settings"],
        correct: [2],
        explanation: "When training data lacks diversity and doesn't represent all relevant groups or scenarios, the model inherits those gaps as bias. A model trained predominantly on images from certain regions will underperform on underrepresented ones. Responsible AI requires inclusive, balanced, and diverse datasets to ensure equitable model performance."
    },
    {
        id: 24,
        domain: 4,
        type: "single",
        text: "Which AWS service helps detect potential bias in ML datasets and model predictions, and provides feature-level explanations for model decisions?",
        options: ["Amazon Rekognition", "AWS CloudTrail", "Amazon SageMaker Clarify", "Amazon Comprehend"],
        correct: [2],
        explanation: "Amazon SageMaker Clarify helps identify bias in ML training data and model predictions, and provides explainability reports showing which features most influenced predictions. It supports pre-training bias detection, post-training bias analysis, and feature attribution (SHAP values). CloudTrail is for API audit logging."
    },
    {
        id: 25,
        domain: 4,
        type: "single",
        text: "An AI development team creates a model card for their newly deployed credit risk model. What is the PRIMARY purpose of a model card?",
        options: ["To store the model's binary weights for versioning", "To provide a structured document describing the model's intended use, training data, performance metrics, limitations, and ethical considerations", "To encrypt the model against unauthorized access", "To automatically retrain the model when performance degrades"],
        correct: [1],
        explanation: "Model cards are standardized documents that communicate essential information about an ML model to stakeholders, including intended use cases, performance benchmarks, training data characteristics, limitations, and ethical considerations. They promote transparency and responsible AI. Amazon SageMaker Model Cards is the AWS tool for this."
    },
    {
        id: 26,
        domain: 4,
        type: "multi",
        text: "Which TWO practices are examples of responsible AI? (Select TWO)",
        options: [
            "Collecting personal data without user consent to improve model accuracy",
            "Deploying a model without any testing to speed time to market",
            "Conducting regular bias audits on deployed models",
            "Documenting known limitations and failure modes of an AI system",
            "Using the same model for all use cases to reduce development costs"
        ],
        correct: [2, 3],
        explanation: "Regular bias audits (B) ensure models continue to perform fairly across different groups over time. Documenting limitations (C) promotes transparency and helps users understand when not to rely on the system. Skipping testing, using one model for everything, and collecting data without consent all violate responsible AI principles."
    },
    // Domain 5 – 4 questions (Foundational)
    {
        id: 27,
        domain: 5,
        type: "single",
        text: "A machine learning engineer needs to grant an Amazon SageMaker training job permission to read from an S3 bucket and write model artifacts to another S3 bucket. What is the BEST way to grant these permissions?",
        options: ["Share the root AWS account credentials with the SageMaker job", "Attach an IAM role with the appropriate S3 permissions to the SageMaker training job", "Manually configure S3 bucket ACLs to allow all public access", "Use Amazon Macie to grant the permissions automatically"],
        correct: [1],
        explanation: "The AWS best practice is to use IAM roles with the least privilege principle. An IAM role is attached to the SageMaker training job and contains only the necessary permissions for the specific S3 buckets. Using root credentials is a security anti-pattern. Making buckets public is dangerous. Macie is for data sensitivity discovery, not permission management."
    },
    {
        id: 28,
        domain: 5,
        type: "single",
        text: "A company stores sensitive customer data used for AI model training in Amazon S3. They want to automatically discover and classify any personally identifiable information (PII) in those buckets. Which AWS service should they use?",
        options: [
            "Amazon Inspector",
            "AWS CloudTrail",
            "Amazon Macie",
            "AWS Config"
        ],
        correct: [2],
        explanation: "Amazon Macie uses ML to automatically discover, classify, and protect sensitive data — including PII — in Amazon S3. It alerts teams to potential data exposure. CloudTrail is for API activity logging. AWS Config tracks resource configuration changes. Amazon Inspector assesses application security vulnerabilities."
    },
    {
        id: 29,
        domain: 5,
        type: "single",
        text: "Under the AWS shared responsibility model, which of the following is the CUSTOMER's responsibility when deploying an AI/ML workload on AWS?",
        options: ["Physical security of the data centers", "Patching and maintaining the underlying hypervisor", "Managing access controls and encryption of data used for ML training", "Maintaining the availability of AWS global infrastructure"],
        correct: [2],
        explanation: "Under the shared responsibility model, AWS is responsible for security OF the cloud (infrastructure, physical security, hypervisors). The customer is responsible for security IN the cloud — including managing IAM access, encrypting sensitive training data, and configuring their resources securely. Customers always own data governance."
    },
    {
        id: 30,
        domain: 5,
        type: "single",
        text: "A company wants to ensure that its generative AI system never retains or logs the personal data submitted by users in prompts. Which privacy concept does this address?",
        options: ["Data redundancy", "Data residency", "Data minimization and privacy-by-design", "Data archival"],
        correct: [2],
        explanation: "Data minimization is a privacy principle that limits the collection and retention of personal data to what is strictly necessary. Privacy-by-design embeds privacy protections into system architecture from the start. Ensuring prompts containing PII are not logged or stored is a direct application of these principles. Data residency is about geographic storage location."
    }
];

export default questions;