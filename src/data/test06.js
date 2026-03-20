// Test 6 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [ // Domain 1 – 6 questions (Exam-style)
    {
        id: 1,
        domain: 1,
        type: "single",
        text: "<div class='scenario-box'>A company trains a model to predict customer churn. The model outputs a probability score between 0 and 1. The team evaluates the model using a metric that measures the model's ability to distinguish between churners and non-churners across all possible classification thresholds.</div>Which metric are they using?",
        options: ["Root Mean Squared Error (RMSE)", "Area Under the ROC Curve (AUC-ROC)", "ROUGE-L score", "Mean Absolute Percentage Error (MAPE)"],
        correct: [1],
        explanation: "AUC-ROC (Area Under the Receiver Operating Characteristic Curve) measures a binary classifier's ability to discriminate between positive and negative classes across all decision thresholds. A value of 1.0 means perfect discrimination; 0.5 means no better than random. It is the standard metric for binary classification problems like churn prediction when evaluating across thresholds. RMSE and MAPE are regression metrics. ROUGE-L is for text generation."
    },
    {
        id: 2,
        domain: 1,
        type: "single",
        text: "A machine learning team discovers that several input features in their training dataset are strongly correlated with the target label but are only available at training time — not at inference time in production. If this data leaks into the feature set, what problem will occur?",
        options: ["Model underfitting", "Data leakage — causing overly optimistic evaluation metrics that won't hold in production", "Regularization failure", "Insufficient training data volume"],
        correct: [1],
        explanation: "Data leakage occurs when information unavailable at inference time is included in training features. The model learns to rely on this 'future' information, producing inflated training and evaluation metrics. In production, without this information, the model performs much worse. Detecting and removing leaky features is a critical step in the ML lifecycle."
    },
    {
        id: 3,
        domain: 1,
        type: "multi",
        text: "A company wants to automate their ML training pipeline on AWS so that every time new training data is added to S3, a pipeline automatically runs preprocessing, training, evaluation, and registers the model if it meets a quality threshold. Which TWO AWS services are BEST suited to build this automated pipeline? (Select TWO)",
        options: ["Amazon SageMaker Pipelines", "Amazon EC2 with manual scripts", "Amazon EventBridge (to trigger pipeline runs on S3 events)", "AWS Glue DataBrew", "Amazon Polly"],
        correct: [0, 2],
        explanation: "Amazon SageMaker Pipelines defines and orchestrates the multi-step ML workflow (preprocessing → training → evaluation → model registration). Amazon EventBridge (formerly CloudWatch Events) can trigger the pipeline automatically based on S3 events — creating the automated trigger when new data arrives. Together they implement a fully automated MLOps pipeline. Manual EC2, DataBrew, and Polly don't provide this orchestration."
    },
    {
        id: 4,
        domain: 1,
        type: "single",
        text: "A team evaluates an ML model for predicting loan defaults. The model achieves 94% accuracy on the test set. However, the positive class (default) represents only 5% of the dataset. Why might accuracy be insufficient as the sole evaluation metric here?",
        options: ["Accuracy is only valid for regression tasks, not classification", "A model that predicts 'no default' for every single instance would also achieve 95% accuracy — accuracy masks the model's failure on the minority positive class", "The model needs to be retrained with more data to be reliable", "Test set accuracy should always be discarded"],
        correct: [1],
        explanation: "With 95% of samples being 'no default', a naive model predicting no default for everything achieves 95% accuracy while being completely useless for identifying actual defaults. This is the class imbalance problem. Better metrics include precision, recall, F1, and AUC-ROC — which measure performance specifically on the minority (positive) class. High accuracy in imbalanced datasets is misleading."
    },
    {
        id: 5,
        domain: 1,
        type: "single",
        text: "Which of the following is a key characteristic that differentiates deep learning from traditional machine learning?",
        options: [
            "Deep learning always outperforms traditional ML on tabular data",
            "Deep learning requires less data than traditional ML",
            "Deep learning automatically learns hierarchical feature representations from raw data using multi-layer neural networks, often eliminating manual feature engineering",
            "Deep learning only works on text data"
        ],
        correct: [2],
        explanation: "Deep learning's defining characteristic is automatic hierarchical feature learning through multi-layer neural networks. For tasks like image recognition, the network learns edges → shapes → objects automatically from raw pixels — eliminating the need for manual feature engineering. Traditional ML typically requires domain experts to hand-engineer features from raw data. Deep learning generally excels on unstructured data (images, text, audio)."
    },
    {
        id: 6,
        domain: 1,
        type: "single",
        text: "A company wants to add AI-powered intelligent search to their internal knowledge management system. Employees need to ask natural language questions and get precise answers extracted from thousands of internal documents. Which AWS service is MOST appropriate?",
        options: ["Amazon Lex", "Amazon Kendra", "Amazon Transcribe", "Amazon SageMaker Autopilot"],
        correct: [1],
        explanation: "Amazon Kendra is an intelligent enterprise search service that uses ML to understand natural language queries and return precise answers directly extracted from documents. It handles unstructured document indexing, NLU-based query processing, and answer extraction — exactly the use case described. Lex builds chatbots/voice interfaces. Transcribe converts speech to text. SageMaker Autopilot automates ML model training."
    },
    // Domain 2 – 7 questions (Exam-style)
    {
        id: 7,
        domain: 2,
        type: "single",
        text: "<div class='scenario-box'>A company evaluates two approaches for a Q&A system over frequently-changing company policies. Option A: Fine-tune a foundation model quarterly. Option B: RAG with policies stored in a vector database, updated weekly. The policies change frequently and accuracy against the latest policy version is critical.</div>Which approach is MOST appropriate and why?",
        options: [
            "Option A — RAG cannot handle structured policy documents",
            "Option A — fine-tuning always provides higher accuracy",
            "Option B — RAG allows the knowledge base to be updated weekly without retraining, ensuring the model always references current policies",
            "Either approach is equally effective for this use case"
        ],
        correct: [2],
        explanation: "For frequently-changing content where currency is critical, RAG is superior. The knowledge base can be updated weekly (re-indexing new policies) without any model retraining. Fine-tuning would require expensive quarterly retraining cycles and would still be outdated within the quarter. RAG also provides citation capability — critical for compliance use cases where employees need to verify policy sources."
    },
    {
        id: 8,
        domain: 2,
        type: "single",
        text: "An engineer sets the 'system prompt' for an Amazon Bedrock foundation model to: 'You are a concise technical writer. Respond only in bullet points. Never discuss competitor products.' A user then asks: 'Tell me about your competitors.' The model refuses and responds only in bullets. Which prompt engineering component is responsible for this behavior?",
        options: ["The user's query itself", "The system prompt defining model persona, format, and topic constraints", "The temperature parameter", "The max_tokens limit"],
        correct: [1],
        explanation: "The system prompt establishes the model's persona (concise technical writer), response format (bullet points), and behavioral constraints (no competitor discussion). These instructions take precedence over user queries. The system prompt is evaluated before the user message and defines the overarching rules of the interaction. Temperature controls randomness; max_tokens controls length — neither governs topic constraints."
    },
    {
        id: 9,
        domain: 2,
        type: "multi",
        text: "A team is designing a generative AI application strategy. They want to understand the tradeoffs between different customization approaches. Which TWO statements about model customization tradeoffs are CORRECT? (Select TWO)",
        options: ["Fine-tuning requires more upfront investment in labeled data and compute than in-context learning (few-shot prompting)", "RAG is always more accurate than fine-tuning regardless of use case", "In-context learning (few-shot) is the most flexible approach since examples can be changed per request without retraining", "Continuous pre-training is cheaper than fine-tuning because it uses less data"],
        correct: [0, 2],
        explanation: "Fine-tuning (A) requires labeled training data, compute costs for training, and deployment — higher upfront investment than adding examples to a prompt. In-context learning/few-shot (C) is highly flexible because examples are provided at inference time in the prompt — no retraining needed, and examples can be swapped per request. RAG and fine-tuning each excel in different scenarios. Continuous pre-training is typically MORE expensive than fine-tuning."
    },
    {
        id: 10,
        domain: 2,
        type: "single",
        text: "A company uses Amazon Bedrock to run an LLM. The model occasionally generates responses that include customer names and phone numbers that appear in the input prompt. Which Bedrock Guardrails capability addresses this specific risk?",
        options: ["Denied topics filter", "Contextual grounding check", "PII detection and redaction", "Word filters"],
        correct: [2],
        explanation: "PII (Personally Identifiable Information) detection and redaction in Amazon Bedrock Guardrails automatically identifies and masks/removes personal data — including names, phone numbers, email addresses, SSNs — from both model inputs and outputs. This prevents the model from echoing or leaking PII in responses. Denied topics block subject areas. Grounding checks assess factual accuracy. Word filters block specific terms."
    },
    {
        id: 11,
        domain: 2,
        type: "single",
        text: "A transformer-based LLM is described as having a 'knowledge cutoff date.' What does this mean?",
        options: ["The model stops processing text inputs after a certain date", "The model's training data has a specific end date; the model has no knowledge of events or information published after that date", "The model's software license expires on that date", "The model can only be used for a limited time after deployment"],
        correct: [1],
        explanation: "A knowledge cutoff date is the date after which no training data was included. The model has no awareness of events, publications, or developments that occurred after this date. This is a fundamental LLM limitation — especially relevant for current events, recent research, and evolving standards. RAG with up-to-date knowledge bases is a common solution for knowledge cutoff limitations."
    },
    {
        id: 12,
        domain: 2,
        type: "single",
        text: "What is the PRIMARY difference between Amazon Q Business and Amazon Q Developer?",
        options: [
            "They are identical products with different names",
            "Amazon Q Business is only for data analysis; Amazon Q Developer is only for writing documentation",
            "Amazon Q Business is a generative AI assistant for enterprise employees to query company data; Amazon Q Developer is an AI coding assistant for software developers",
            "Amazon Q Developer is more expensive than Amazon Q Business"
        ],
        correct: [2],
        explanation: "Amazon Q Business connects to enterprise data sources (documents, wikis, ticketing systems) and answers employee business questions using that proprietary data. Amazon Q Developer is an AI pair programmer that assists developers with code generation, explanation, debugging, and security scanning in IDEs and the CLI. They serve distinct personas: business users vs. software developers."
    },
    {
        id: 13,
        domain: 2,
        type: "single",
        text: "<div class='scenario-box'>A team is deploying a foundation model on Amazon Bedrock for a high-traffic production workload. They expect consistent, high-volume traffic around the clock and need guaranteed throughput with predictable latency SLAs. Cost predictability is also important.</div>Which Amazon Bedrock pricing model should they choose?",
        options: ["On-demand token-based pricing", "Provisioned throughput with a committed unit purchase", "Spot instance pricing", "Pay-per-request with auto-scaling"],
        correct: [1],
        explanation: "Provisioned throughput reserves a defined model capacity (measured in Model Units) for dedicated use. It provides guaranteed throughput, consistent low latency, and predictable pricing — ideal for high-volume, consistent production workloads. On-demand is better for variable/unpredictable traffic. Spot instances are not a Bedrock pricing model. Auto-scaling on-demand can still have latency variability at scale."
    },
    // Domain 3 – 9 questions (Exam simulation)
    {
        id: 14,
        domain: 3,
        type: "single",
        text: "<div class='scenario-box'>A company's RAG-based legal research assistant is returning answers that are technically supported by retrieved documents, but the retrieved documents are 3 years old and may reflect outdated case law. The model doesn't indicate when source documents were written.</div>What is the MOST appropriate engineering improvement?",
        options: [
            "Reduce the number of retrieved chunks to decrease context length",
            "Increase the model's temperature to generate more varied responses",
            "Implement metadata filtering in the knowledge base to restrict retrieval to documents from the last 12 months, and include document dates in the prompt context",
            "Add more documents to the knowledge base without filtering"
        ],
        correct: [2],
        explanation: "Metadata filtering in the knowledge base restricts which documents are retrieved based on attributes like publication date. Including document dates in the prompt context enables the model to surface recency information to users. This directly addresses the stale source problem. Adding unfiltered documents worsens it. Temperature and chunk count changes don't address content currency."
    },
    {
        id: 15,
        domain: 3,
        type: "multi",
        text: "An ML team is selecting a pre-trained foundation model from Amazon Bedrock for a document summarization task. The documents can be up to 40 pages long. Which TWO model selection criteria are MOST critical for this use case? (Select TWO)",
        options: ["Sufficient context window to process full 40-page documents without truncation", "Whether the model supports real-time image generation", "Strong text summarization performance based on benchmark results", "Support for video processing", "The model's 3D rendering capabilities"],
        correct: [0, 2],
        explanation: "A 40-page document may contain 20,000–60,000+ tokens. Selecting a model with a sufficient context window (A) to accommodate the full document without truncation is essential — truncation would cause information loss. Strong text summarization benchmark performance (C) ensures quality outputs for the primary task. Image generation, video, and 3D rendering are irrelevant for text summarization."
    },
    {
        id: 16,
        domain: 3,
        type: "single",
        text: "A developer wants to use Amazon Bedrock Agents to build an AI assistant that answers questions about a company's internal policies. The policies are stored in a SharePoint site. What is the correct architectural approach?",
        options: ["Hardcode all policy content directly in the agent's system prompt", "Connect a Bedrock Knowledge Base ingesting policy documents to the agent via an action group", "Only use fine-tuning to teach the agent all policy content", "Use Amazon Lex to build a keyword search over the policies"],
        correct: [1],
        explanation: "The correct architecture connects a Bedrock Knowledge Base (which ingests and indexes the policy documents as vector embeddings) to the Bedrock Agent. The agent automatically queries the knowledge base for relevant policy chunks when answering questions. This enables accurate, cited, up-to-date answers. Hardcoding in prompts doesn't scale. Fine-tuning can't keep up with policy changes. Lex is for conversation management, not semantic search."
    },
    {
        id: 17,
        domain: 3,
        type: "single",
        text: "A team creates a foundation model prompt: 'Translate the following English text to French. English: {input_text} French:'. The {input_text} placeholder is filled dynamically at runtime for each request. What prompt engineering technique is this?",
        options: ["Chain-of-thought prompting", "Negative prompting", "Prompt templating", "Zero-shot prompting"],
        correct: [2],
        explanation: "Prompt templating involves creating reusable prompt structures with dynamic placeholders (like {input_text}) that are filled at runtime. This ensures consistent prompt structure and reduces errors from manual prompt construction for each request. It is a prompt engineering best practice for production systems that handle many similar requests. Chain-of-thought guides step-by-step reasoning. Negative prompting specifies exclusions."
    },
    {
        id: 18,
        domain: 3,
        type: "single",
        text: "A developer invokes an Amazon Bedrock model for customer sentiment analysis. The model is returning inconsistent results for the same input — sometimes classifying 'The product was decent' as positive, sometimes neutral. The developer wants highly consistent, reproducible results. What should they change?",
        options: ["Increase max_tokens to get longer responses", "Switch to a different AWS Region", "Set temperature to 0 or a very low value (0.0–0.1)", "Increase the number of retrieved documents in the RAG pipeline"],
        correct: [2],
        explanation: "Temperature controls output randomness. Setting temperature to 0 makes the model deterministic — always choosing the highest-probability token — producing consistent, reproducible results for the same input. For analytical tasks like sentiment classification where consistency is critical, low temperature (0.0–0.1) is the standard approach. Max_tokens, region, and RAG document count don't affect consistency."
    },
    {
        id: 19,
        domain: 3,
        type: "multi",
        text: "A company is building an agentic AI workflow using Amazon Bedrock Agents that must: retrieve customer data, check order history, and send notifications. Which TWO statements about Agents for Amazon Bedrock are CORRECT? (Select TWO)",
        options: ["Agents can autonomously break down a complex task into steps and decide which tools to call", "Agents require a human to manually specify which API to call for every step", "Agents can use knowledge bases for RAG alongside action groups for API calls in the same workflow", "Agents can only call one external API total per conversation"],
        correct: [0, 2],
        explanation: "Bedrock Agents autonomously plan and execute multi-step tasks — reasoning about what to do at each step without manual intervention (A). A single agent can simultaneously use knowledge bases (for document retrieval/RAG) AND action groups (for API calls) in the same workflow (C). Agents don't require manual API specification per step and can call multiple APIs across a conversation."
    },
    {
        id: 20,
        domain: 3,
        type: "single",
        text: "Which approach to foundation model customization is MOST computationally expensive and time-consuming, but provides the deepest level of knowledge injection?",
        options: ["Few-shot prompting (in-context learning)", "Retrieval Augmented Generation (RAG)", "Instruction fine-tuning", "Continued pre-training on domain-specific data"],
        correct: [3],
        explanation: "Continued (continuous) pre-training involves running the pre-training objective (next-token prediction) on new domain-specific data, updating the model's base weights with deep domain knowledge. It is the most expensive option — requiring significant GPU compute, large datasets, and long training runs. It is appropriate for highly specialized domains (medical, legal, scientific) where the model needs to fundamentally understand domain vocabulary and concepts."
    },
    {
        id: 21,
        domain: 3,
        type: "single",
        text: "A team evaluates a machine translation model. A human evaluator rates the translations as generally accurate but sometimes awkward. The BLEU score is 0.65. How should this result be interpreted?",
        options: ["A BLEU score of 0.65 means 65% of translations are incorrect", "BLEU of 0.65 indicates moderate n-gram overlap with reference translations; combined with the human feedback suggesting accuracy with style issues, this indicates acceptable but improvable quality", "BLEU of 0.65 is the maximum possible score", "BLEU scores below 0.70 always indicate model failure"],
        correct: [1],
        explanation: "BLEU scores range from 0 to 1. 0.65 indicates moderate n-gram overlap with reference translations. In translation, scores of 0.6–0.7 are generally considered acceptable to good. The human feedback (accurate but sometimes awkward phrasing) aligns with a moderate BLEU score — the content is correct but the exact wording varies from references. Combined human+automated evaluation gives the most complete quality picture."
    },
    {
        id: 22,
        domain: 3,
        type: "single",
        text: "A developer is building a multi-turn conversational AI using Amazon Bedrock. They notice that after 15+ turns, the model starts 'forgetting' early parts of the conversation. What is the technical reason for this?",
        options: ["Amazon Bedrock has a bug in its conversation history management", "The model's context window has a finite size; once the accumulated conversation tokens exceed this limit, older turns are truncated", "The model's weights are being modified with each conversation turn", "The temperature parameter increases automatically over long conversations"],
        correct: [1],
        explanation: "Foundation models have a fixed context window (maximum token capacity). In multi-turn conversations, the full conversation history is included in each API call. Once the accumulated tokens exceed the context limit, older messages are truncated (dropped), causing the model to 'forget' early conversation context. Solutions include conversation summarization, selective context retention, or choosing models with larger context windows."
    },
    // Domain 4 – 4 questions (Exam simulation)
    {
        id: 23,
        domain: 4,
        type: "single",
        text: "<div class='scenario-box'>A national bank deploys an AI model for mortgage approval. An independent audit reveals that applicants from ZIP codes with high minority populations are denied at significantly higher rates, even when controlling for credit scores and income. The model developers argue that ZIP code is a neutral financial variable.</div>What responsible AI problem does this illustrate?",
        options: ["Model underfitting on minority applicants", "Proxy bias — ZIP code correlates with protected characteristics, making it a discriminatory proxy variable", "The model is performing correctly since ZIP code reflects real credit risk", "Data augmentation failure"],
        correct: [1],
        explanation: "ZIP code acts as a proxy for race/ethnicity due to historical segregation patterns. Using ZIP code in lending decisions introduces proxy bias that produces disparate impact on protected groups — even though the feature appears neutral. This is a well-known pattern in algorithmic fairness (redlining). Responsible AI requires examining feature-outcome correlations by protected group, not just individual feature neutrality."
    },
    {
        id: 24,
        domain: 4,
        type: "multi",
        text: "A healthcare company is deploying an AI diagnostic support tool. They want to implement responsible AI from the ground up. Which TWO practices should be prioritized BEFORE deployment? (Select TWO)",
        options: ["Evaluating model performance across patient demographic subgroups to detect disparate accuracy", "Maximizing model complexity to achieve the highest possible accuracy metric", "Documenting the model's intended use, limitations, training data characteristics, and out-of-scope applications in a model card", "Deploying to all users immediately to gather production feedback", "Removing all human oversight to reduce operational costs"],
        correct: [0, 2],
        explanation: "Subgroup performance evaluation (A) ensures the model performs equitably across patient demographics — critical in healthcare where disparities can cause direct harm. Model cards (C) document what the model does, what it doesn't do, its training data, known limitations, and intended use — enabling informed deployment decisions and regulatory review. Maximizing complexity at the expense of fairness, rushing deployment, and removing human oversight all violate responsible AI principles."
    },
    {
        id: 25,
        domain: 4,
        type: "single",
        text: "An AI governance team reviews a deployed recommendation model. They find it works well in aggregate but performs significantly worse for users over 65. The training data had far fewer examples from older users. What is the root cause and recommended action?",
        options: ["The model needs more computing power to handle older users", "The training dataset lacks sufficient representation of older users, causing systematic underperformance (representation bias); the fix is to collect more representative data and retrain", "The users over 65 should use a different product", "The model temperature needs to be adjusted for this user segment"],
        correct: [1],
        explanation: "Representation bias occurs when certain groups are underrepresented in training data, causing the model to perform worse for those groups. The model effectively hasn't seen enough examples from users over 65 to learn their patterns. The correct fix is to collect more representative data from the underrepresented group, potentially with targeted data collection, then retrain and re-evaluate performance across all demographic segments."
    },
    {
        id: 26,
        domain: 4,
        type: "single",
        text: "Amazon Augmented AI (Amazon A2I) is integrated into an AI workflow. What is the primary purpose of Amazon A2I in this context?",
        options: ["To automatically retrain ML models when performance degrades", "To provide human review workflows for ML predictions — routing low-confidence or sensitive predictions to human reviewers", "To encrypt ML model artifacts at rest", "To optimize hyperparameters for foundation models"],
        correct: [1],
        explanation: "Amazon Augmented AI (A2I) enables human-in-the-loop review for ML predictions. Organizations can configure it to route predictions below a confidence threshold, or specific content types, to human reviewers who verify or correct the prediction. This is essential for responsible AI in high-stakes applications (medical, legal, financial) where fully automated decisions are inappropriate. It integrates with Rekognition, Textract, and custom models."
    },
    // Domain 5 – 4 questions (Exam simulation)
    {
        id: 27,
        domain: 5,
        type: "single",
        text: "<div class='scenario-box'>A financial institution uses AWS for AI workloads processing sensitive customer data. An external auditor requests evidence that the company's AWS environment meets SOC 2 Type II compliance standards. The team needs to provide official AWS compliance documentation.</div>Which AWS service provides this documentation on demand?",
        options: ["AWS Trusted Advisor", "Amazon Inspector", "AWS Artifact", "AWS Config"],
        correct: [2],
        explanation: "AWS Artifact is the single, self-service portal for downloading official AWS compliance documentation — including SOC 1/2/3 reports, ISO certifications, PCI DSS compliance, HIPAA eligibility, and more. Auditors commonly require these documents as evidence that the cloud provider meets compliance standards. Trusted Advisor provides operational recommendations. Inspector scans for vulnerabilities. Config tracks resource configurations."
    },
    {
        id: 28,
        domain: 5,
        type: "multi",
        text: "A company's AI security team identifies that their Amazon SageMaker training jobs have overly broad IAM permissions. Which TWO IAM best practices should they implement to remediate this? (Select TWO)",
        options: ["Apply the principle of least privilege — grant only the specific permissions each SageMaker job actually needs", "Assign the AdministratorAccess policy to all SageMaker execution roles for simplicity", "Use IAM conditions to restrict access to specific S3 buckets, KMS keys, and resources by ARN", "Share one IAM role across all ML projects to reduce management overhead", "Disable IAM entirely and use S3 public access for simplicity"],
        correct: [0, 2],
        explanation: "Least privilege (A) means granting only the minimum permissions required — for example, read access to specific S3 training buckets, not all S3. IAM conditions (C) add granular restrictions based on resource ARNs, IP addresses, VPC endpoints, and time — dramatically reducing the blast radius of a compromised role. Broad policies, shared roles across projects, and public S3 access all violate security best practices."
    },
    {
        id: 29,
        domain: 5,
        type: "single",
        text: "A company implements a 'data residency' policy for their AI training data. What does this policy govern?",
        options: ["How long training data must be retained before deletion", "The AWS Region(s) where training data is allowed to be stored and processed", "Who within the company can access training data", "How training data must be encrypted"],
        correct: [1],
        explanation: "Data residency (also called data sovereignty) policies specify which geographic regions (countries/jurisdictions) data is permitted to be stored and processed in. This is driven by regulations like GDPR (EU), local data protection laws, and industry compliance requirements. AWS Regions allow companies to control where their data resides. Retention is data lifecycle management. Access control is IAM. Encryption is separate."
    },
    {
        id: 30,
        domain: 5,
        type: "single",
        text: "An organization wants to ensure continuous compliance of their ML infrastructure — specifically that all Amazon SageMaker endpoints are configured with encryption enabled, and that any non-compliant resource triggers an automated remediation. Which AWS service enables this automated compliance enforcement?",
        options: ["Amazon Macie", "AWS CloudTrail", "AWS Config with Config Rules and automated remediation", "Amazon Inspector"],
        correct: [2],
        explanation: "AWS Config continuously evaluates resource configurations against defined Config Rules (e.g., 'SageMaker endpoints must have encryption enabled'). When a resource is found non-compliant, Config can trigger automated remediation actions via AWS Systems Manager Automation or Lambda. This enables continuous, proactive compliance enforcement rather than periodic point-in-time audits. Macie is for PII detection. CloudTrail is for API logging. Inspector is for vulnerability scanning."
    }
];

export default questions;