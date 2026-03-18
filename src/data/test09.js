// Test 9 – Questions Data
// 30 questions per test, domain-weighted for AIF-C01

const questions = [{
        id: 1,
        domain: 1,
        type: "single",
        text: "<div class='scenario-box'>An ML team trains a model to predict hospital readmissions. They evaluate on a held-out test set and achieve excellent results. Six months later, the model's predictions degrade significantly. Investigation reveals patient demographics and treatment protocols at the hospital have changed substantially.</div>Which monitoring strategy would have detected this EARLIEST?",
        options: ["Manually reviewing model weights monthly", "Implementing Amazon SageMaker Model Monitor to track input data distribution statistics and trigger alerts when feature distributions drift beyond baseline thresholds", "Redeploying the model to a new AWS Region", "Increasing the model's parameter count during training"],
        correct: [1],
        explanation: "Amazon SageMaker Model Monitor continuously monitors input feature distributions against a baseline captured at deployment. When demographic or treatment protocol features shift (data drift), it detects the distribution change and triggers alerts before prediction quality visibly degrades. This proactive monitoring catches distribution shift early — far earlier than observing degraded outcomes. Parameter count and regions don't address runtime monitoring."
    },
    {
        id: 2,
        domain: 1,
        type: "multi",
        text: "A company wants to implement MLOps best practices for their SageMaker-based ML platform. Which TWO capabilities are MOST central to a mature MLOps workflow? (Select TWO)",
        options: ["Automated CI/CD pipelines that retrain, evaluate, and deploy models when new data arrives or performance degrades", "Manually copying model artifacts between S3 buckets when needed", "Model versioning and lineage tracking to reproduce any model and trace its training data and code", "Using the same model indefinitely without any monitoring", "Sharing model weights publicly for community review"],
        correct: [0, 2],
        explanation: "Automated pipelines (A) are the core of MLOps — automating the retrain-evaluate-deploy cycle reduces manual errors and ensures models stay current. Model versioning and lineage (C) enables reproducibility, auditability, and the ability to roll back to a known-good model version. These are foundational MLOps capabilities supported by Amazon SageMaker Pipelines, Model Registry, and Experiments."
    },
    {
        id: 3,
        domain: 1,
        type: "single",
        text: "A data scientist runs hyperparameter tuning to find the optimal learning rate and batch size for a deep learning model. They run 50 experiments and select the hyperparameter combination with the best validation performance. What is the risk if they then evaluate this selected model on the validation set to report final performance?",
        options: ["There is no risk — validation performance is always an unbiased estimate", "The validation set has been 'used up' for hyperparameter selection, making it a biased estimator of true generalization; a held-out test set should be used for final reporting", "Running too many experiments will corrupt the training data", "The learning rate becomes fixed after hyperparameter tuning"],
        correct: [1],
        explanation: "When a validation set is used to select hyperparameters (or any model choice), it is no longer an unbiased estimator of generalization — the process implicitly 'overfits' to the validation set by selecting the configuration that performed best on it. The correct practice is a three-way split: training (model training), validation (hyperparameter selection), and a completely held-out test set (final unbiased evaluation reported to stakeholders)."
    },
    {
        id: 4,
        domain: 1,
        type: "single",
        text: "Which technique involves training a large teacher model and using its output probabilities (soft labels) to train a smaller, more efficient student model that approximates the teacher's performance?",
        options: ["Data augmentation", "Knowledge distillation", "Transfer learning", "Ensemble learning"],
        correct: [1],
        explanation: "Knowledge distillation trains a compact 'student' model to mimic a larger 'teacher' model by learning from the teacher's soft probability outputs (which contain richer information than hard labels). The student model becomes much smaller and faster while retaining most of the teacher's performance. This is a key technique for model compression and edge deployment. Transfer learning reuses pretrained weights. Ensemble combines multiple models."
    },
    {
        id: 5,
        domain: 1,
        type: "single",
        text: "An ML engineer wants to serve different versions of a model simultaneously — sending 90% of traffic to the current production model and 10% to a new candidate model to compare real-world performance before full rollout. Which deployment strategy is this?",
        options: ["Blue/green deployment — all traffic switches instantly", "Canary deployment / A/B testing — gradual traffic splitting between versions", "Rolling update — all instances updated sequentially", "Shadow deployment — both models run but only one response is used"],
        correct: [1],
        explanation: "Canary deployment (also used for A/B testing) gradually routes a small percentage of live traffic to the new model version while the majority continues to the stable version. This allows real-world performance comparison with minimal risk — if the canary performs worse or causes errors, traffic is quickly redirected back. Amazon SageMaker Endpoints support production variants with configurable traffic weights for this pattern."
    },
    {
        id: 6,
        domain: 1,
        type: "single",
        text: "<div class='scenario-box'>A team uses Amazon SageMaker to train 200 experiments exploring different neural network architectures, learning rates, and regularization strategies. The best model achieves 94.2% test accuracy with a specific hyperparameter combination. Six months later, they need to reproduce exactly this model.</div>Which SageMaker capability makes this possible?",
        options: ["SageMaker Model Monitor", "SageMaker Experiments with lineage tracking — recording all hyperparameters, code versions, datasets, and metrics for each run", "Manually remembering the hyperparameter values", "SageMaker Data Wrangler"],
        correct: [1],
        explanation: "Amazon SageMaker Experiments automatically captures all experiment details: hyperparameters, code versions, input datasets (with S3 URIs and versions), metrics, and output artifacts. ML Lineage tracking records the complete provenance chain. This makes any experiment fully reproducible months or years later. Relying on memory is not reliable. Model Monitor tracks production drift. Data Wrangler is for data preparation."
    },
    {
        id: 7,
        domain: 2,
        type: "single",
        text: "A company evaluates foundation models for a high-stakes medical imaging report generation task. They require a model with documented safety testing, clear content filtering defaults, and formal published evaluation methodology. Which model selection criterion does this represent?",
        options: ["Model throughput and latency performance", "Model safety profile and documented evaluation methodology — a responsible AI selection criterion", "Total model parameter count", "Training infrastructure cost"],
        correct: [1],
        explanation: "For high-stakes medical applications, the safety profile is a primary selection criterion: published safety evaluations, red-teaming results, content filtering defaults, and known failure modes. Responsible AI model selection requires understanding how the model behaves at its boundaries — especially for safety-critical applications where harmful outputs have direct consequences. Throughput, parameters, and training costs are secondary to safety suitability."
    },
    {
        id: 8,
        domain: 2,
        type: "multi",
        text: "An enterprise is deploying Amazon Bedrock at scale across 15 business units. The CTO wants centralized governance over which models each team can access and what content policies apply. Which TWO Bedrock governance mechanisms support this? (Select TWO)",
        options: ["Using IAM policies to control which Bedrock model IDs each team's role can invoke", "Deploying a separate AWS account for each business unit with no central control", "Applying Bedrock Guardrails centrally with consistent content policies across all applications", "Allowing all users unrestricted access and relying on the model to self-govern", "Using Amazon S3 lifecycle policies to govern model access"],
        correct: [0, 2],
        explanation: "IAM policies (A) can restrict InvokeModel permissions to specific Bedrock model ARNs — allowing governance over which teams can access which models. Centralized Guardrails (C) ensure consistent content policies (denied topics, PII handling, profanity filters) across all business unit applications — enabling enterprise-wide policy enforcement. Separate accounts without central control defeats governance. Self-governance and S3 lifecycle policies don't control model access."
    },
    {
        id: 9,
        domain: 2,
        type: "single",
        text: "A startup is building a GenAI product and their engineering team debates whether to train their own LLM vs. using Amazon Bedrock. The CTO notes that training a competitive LLM from scratch requires hundreds of millions of dollars and specialized ML research expertise. Which business principle does using Bedrock represent?",
        options: ["Technical debt accumulation", "Avoiding undifferentiated heavy lifting — focusing engineering resources on product differentiation rather than infrastructure", "Vendor lock-in that will limit future flexibility", "Reduced product quality due to reliance on third-party models"],
        correct: [1],
        explanation: "'Avoiding undifferentiated heavy lifting' is a core cloud adoption principle: outsource the expensive, complex infrastructure work (LLM training, GPU management, model serving infrastructure) to AWS/Bedrock, and focus engineering effort on the unique aspects that differentiate your product. Training an LLM from scratch provides no competitive advantage for most startups — the differentiation is in the application, not the foundation model."
    },
    {
        id: 10,
        domain: 2,
        type: "single",
        text: "A team runs an Amazon Bedrock inference call and receives a response where the model appeared to stop mid-sentence without completing its thought. The team did not specify a stop sequence. What is the MOST likely cause?",
        options: ["The model detected prompt injection and auto-terminated", "The max_tokens parameter was set too low, causing the response to be cut off before completion", "The AWS Region was experiencing an outage", "The temperature was too high, causing incoherent output"],
        correct: [1],
        explanation: "When a model response is cut off mid-sentence without a stop sequence, the most common cause is the max_tokens parameter being set too low — the model ran out of its allocated token budget before finishing the response. The fix is to increase max_tokens to give the model enough budget to complete its response. Stop sequences cause graceful termination at a logical point. Temperature affects quality/randomness, not truncation."
    },
    {
        id: 11,
        domain: 2,
        type: "single",
        text: "Which Amazon Bedrock feature allows enterprise customers to use their own AWS KMS key to encrypt model invocation logs, custom fine-tuning data, and model artifacts?",
        options: ["Bedrock Guardrails PII detection", "Customer-managed encryption keys (CMK) via AWS KMS integration in Amazon Bedrock", "Bedrock Model Evaluation output encryption", "Bedrock Playgrounds session encryption"],
        correct: [1],
        explanation: "Amazon Bedrock supports customer-managed encryption keys (CMK) through AWS KMS integration. This allows enterprises to control their own encryption keys for model invocation logs, fine-tuning datasets, and output artifacts — meeting compliance requirements where default AWS-managed encryption is insufficient. Organizations in regulated industries (healthcare, finance, government) often require CMK for data sovereignty and key lifecycle control."
    },
    {
        id: 12,
        domain: 2,
        type: "single",
        text: "<div class='scenario-box'>An AI team is choosing between three customization approaches for a customer service bot: (A) Add 20 representative conversation examples to the system prompt, (B) Fine-tune on 5,000 customer service conversations, (C) Implement RAG with a 10,000-article knowledge base of product documentation.</div>The MAIN requirement is that the bot accurately answers product-specific questions, and the product catalog updates weekly. Which approach is BEST?",
        options: ["Option A — most cost efficient for product knowledge", "Option B — fine-tuning provides the deepest product knowledge", "Option C — RAG with weekly knowledge base updates keeps product answers current without retraining", "All three approaches are equivalent for this use case"],
        correct: [2],
        explanation: "RAG (C) is optimal: the product documentation knowledge base is updated weekly to stay current, and the model retrieves and cites accurate product information at query time. Fine-tuning (B) would require weekly retraining cycles to stay current — impractical and expensive. A 20-example system prompt (A) cannot cover a 10,000-article product catalog. RAG directly solves the 'accurate + current' requirements."
    },
    {
        id: 13,
        domain: 2,
        type: "single",
        text: "A developer adds an 'assistant' message turn in the Amazon Bedrock conversation history showing the beginning of a desired response format. This technique guides the model to continue in that format. What is this technique called?",
        options: ["System prompt injection", "Response prefilling (pre-filling the assistant turn)", "Chain-of-thought prompting", "Negative prompting"],
        correct: [1],
        explanation: "Response prefilling (or assistant turn prefilling) is a technique where you start the assistant's response in the conversation history with the desired beginning — a JSON opening bracket, a specific phrasing, or a structured header. The model then completes the response continuing from that prefix. This is a powerful way to enforce output format and structure without verbose system prompt instructions."
    },
    {
        id: 14,
        domain: 3,
        type: "single",
        text: "A company implements a RAG pipeline where retrieved document chunks are ranked by relevance score before being injected into the prompt. They only inject chunks with a similarity score above 0.75. What problem does this threshold solve?",
        options: ["It reduces the cost of embedding generation", "It prevents low-relevance noise from being injected into the prompt, which could confuse the model or dilute the signal from truly relevant content", "It increases the model's context window", "It automatically updates the knowledge base with new documents"],
        correct: [1],
        explanation: "Similarity score thresholding (relevance filtering) prevents the 'noise injection' problem in RAG. If all retrieved chunks are injected regardless of relevance quality, the model's prompt contains both useful and confusing/off-topic context. This can degrade answer quality by introducing contradictory or irrelevant information. A threshold ensures only sufficiently relevant content enriches the prompt. It doesn't affect embedding costs, context window size, or knowledge base updates."
    },
    {
        id: 15,
        domain: 3,
        type: "multi",
        text: "A team is building an Amazon Bedrock application that calls external APIs via an agent. They want to ensure the agent doesn't take irreversible actions (like deleting records or processing payments) without explicit user confirmation. Which TWO design patterns achieve this? (Select TWO)",
        options: ["Configure the agent to present proposed actions to the user for confirmation before executing irreversible operations", "Set the model temperature to 0 to prevent the agent from taking any actions", "Implement a human-in-the-loop confirmation step in the Lambda function for irreversible actions", "Reduce the agent's context window to limit its capabilities", "Grant the agent write-only permissions to all databases"],
        correct: [0, 2],
        explanation: "Presenting proposed actions for user confirmation (A) before execution implements human oversight at the agent orchestration layer — the agent plans but waits for approval. A confirmation step in the Lambda function (C) adds a second layer of safety — the Lambda executing the irreversible action explicitly requires an approval signal before proceeding. Temperature 0 doesn't prevent actions. Limiting context and write-only permissions are not valid safeguards for this purpose."
    },
    {
        id: 16,
        domain: 3,
        type: "single",
        text: "An application uses Amazon Bedrock and processes 50,000 documents for batch analysis. Each document is independent — there's no need for real-time responses. The team wants to minimize cost. Which inference approach is MOST cost-efficient for this workload?",
        options: ["Real-time inference on each document individually as they arrive", "Provisioned throughput with reserved capacity", "Batch inference — processing documents in bulk during off-peak hours", "Interactive streaming inference"],
        correct: [2],
        explanation: "Batch inference is designed for large-scale, non-time-sensitive workloads. It processes many requests together, typically at lower cost than real-time inference since it doesn't require reserved capacity or guaranteed latency. Amazon Bedrock supports batch inference for high-volume, asynchronous use cases. Real-time inference has higher per-call costs at scale. Provisioned throughput is for consistent high-volume real-time needs, not batch processing."
    },
    {
        id: 17,
        domain: 3,
        type: "single",
        text: "A team deploys a generative AI application and receives user complaints that responses are inconsistent in tone — sometimes formal, sometimes casual. The model works correctly but the inconsistency frustrates users. What is the MOST targeted fix?",
        options: ["Retrain the model on a consistent tone dataset", "Add explicit tone instructions and demonstrate the desired tone with 2-3 examples in the system prompt", "Increase the model's max_tokens", "Switch to a different foundation model provider"],
        correct: [1],
        explanation: "Tone inconsistency in a deployed model is almost always a prompt engineering problem, not a model capability problem. The most targeted fix is to specify the required tone explicitly in the system prompt ('Always respond in a professional, formal tone') and provide 1-3 examples demonstrating that tone. This costs nothing and can be implemented immediately. Retraining is expensive and slow. Max_tokens and provider switching don't address tone."
    },
    {
        id: 18,
        domain: 3,
        type: "single",
        text: "What is the PRIMARY purpose of the 'model registry' in a SageMaker MLOps workflow?",
        options: ["To store raw training data", "To provide a centralized catalog for versioning, approving, and managing trained model artifacts — enabling governance of which model versions are deployed to which environments", "To run hyperparameter tuning experiments", "To store the model's Python training code"],
        correct: [1],
        explanation: "Amazon SageMaker Model Registry is a centralized catalog that stores versioned model artifacts along with metadata (metrics, training data lineage, evaluation results). It supports approval workflows — requiring sign-off before a model version is promoted from staging to production. This enables model governance: audit trail of what was deployed when, by whom, with what approval. It handles model artifacts, not raw data, code, or experiments."
    },
    {
        id: 19,
        domain: 3,
        type: "multi",
        text: "An organization wants to implement content safety at multiple layers of their Amazon Bedrock application. Which TWO complementary layers of protection are MOST effective for defense-in-depth? (Select TWO)",
        options: ["Amazon Bedrock Guardrails — intercepting both input and output at the API level to filter harmful content, PII, and off-topic subjects", "Deploying the application on larger EC2 instances for better safety", "System prompt instructions — defining behavioral boundaries and persona for the model", "Increasing temperature to make outputs less predictable and harder to exploit", "Using Amazon CloudFront to cache all model responses"],
        correct: [0, 2],
        explanation: "Defense-in-depth for GenAI safety combines: Bedrock Guardrails (A) as a dedicated, API-level safety layer that intercepts inputs and outputs to filter harmful content, PII, denied topics, and prompt attacks — independent of the model. System prompt instructions (C) define the model's first line of behavioral guidance. Together they create two independent safety layers. Instance size, temperature, and caching don't contribute to content safety."
    },
    {
        id: 20,
        domain: 3,
        type: "single",
        text: "A developer uses Amazon Bedrock Knowledge Bases with an OpenSearch Serverless vector store. After ingesting 50,000 documents, retrieval latency for a 10ms SLA is not being met. What is the MOST appropriate optimization?",
        options: ["Reduce the number of documents in the knowledge base to 100", "Increase the chunk overlap size", "Optimize the number of returned results (top-K) and consider approximate nearest neighbor (ANN) index tuning in OpenSearch for faster retrieval", "Switch to Amazon RDS for vector storage"],
        correct: [2],
        explanation: "For vector search latency optimization: reducing top-K (number of results returned) reduces search time; tuning the ANN (approximate nearest neighbor) index parameters in OpenSearch (like the HNSW algorithm's ef_search and ef_construction) directly controls the speed-accuracy tradeoff. Reducing to 100 documents defeats the purpose. Chunk overlap doesn't affect search speed. RDS is not a native vector database."
    },
    {
        id: 21,
        domain: 3,
        type: "single",
        text: "A company wants to use Amazon Bedrock for a task that requires the model to make a series of reasoning steps before answering. They want to see the model's reasoning process, not just the final answer. Which prompting technique elicits this behavior?",
        options: ["Few-shot prompting with only final answers shown", "Zero-shot prompting with a short question", "Chain-of-thought prompting — instructing the model to reason step-by-step before giving its final answer", "Negative prompting"],
        correct: [2],
        explanation: "Chain-of-thought (CoT) prompting explicitly instructs the model to work through its reasoning step-by-step before arriving at a final answer. Instructions like 'Think step by step' or 'Walk through your reasoning before answering' elicit this behavior. CoT significantly improves accuracy on complex reasoning tasks (math, logic, multi-step problems) because the model externalizes and checks its intermediate reasoning. Few-shot with final-only answers hides the reasoning."
    },
    {
        id: 22,
        domain: 3,
        type: "single",
        text: "Which Amazon Bedrock capability specifically allows teams to define and run automated evaluations comparing multiple model outputs against a 'golden dataset' of reference answers using metrics like exact match, ROUGE, or BERTScore?",
        options: ["Bedrock Guardrails automated content scoring", "Bedrock Model Evaluation with automated metrics", "Bedrock Knowledge Bases relevance scoring", "Bedrock Playgrounds manual comparison"],
        correct: [1],
        explanation: "Amazon Bedrock Model Evaluation with automated metrics allows teams to define a golden dataset (input-output pairs), invoke multiple models on the inputs, and automatically compute quality metrics (exact match, ROUGE, BERTScore, etc.) comparing model outputs to the reference answers. This enables objective, scalable model comparison. Guardrails handle content filtering. Knowledge Bases handle retrieval scoring. Playgrounds are for manual exploration."
    },
    {
        id: 23,
        domain: 4,
        type: "single",
        text: "<div class='scenario-box'>A company deploys an AI hiring screening tool. The tool was built by a vendor who claims it is 'unbiased.' An independent audit finds it still rejects candidates with non-traditional career paths at higher rates. The company argues they are not responsible because the AI was built by a third party.</div>Which responsible AI accountability principle applies here?",
        options: ["The vendor is solely responsible; the deploying company has no obligations", "The deploying company retains accountability for the outcomes of AI systems they deploy — regardless of whether the AI was built internally or by a third party", "Only the candidates affected can be held accountable", "Accountability only applies to government AI systems"],
        correct: [1],
        explanation: "In responsible AI governance, accountability follows deployment — the organization that deploys and benefits from an AI system is accountable for its outcomes, even if a third party built it. This is a critical principle because otherwise organizations could outsource accountability. Deployers have obligations to audit third-party AI, understand its limitations, and remediate harms. This principle is embedded in emerging AI regulations globally."
    },
    {
        id: 24,
        domain: 4,
        type: "multi",
        text: "A company's AI ethics board establishes a pre-deployment checklist for all AI systems. Which TWO items should be on this checklist? (Select TWO)",
        options: ["Ensure model accuracy was optimized at the expense of all other considerations", "Verify the system's performance across demographic subgroups for disparate impact", "Document the model's intended use, limitations, and failure modes in a model card", "Confirm the model uses the maximum possible number of parameters", "Ensure all data was collected without any privacy safeguards to maximize data volume"],
        correct: [1, 2],
        explanation: "Subgroup performance verification (B) detects disparate impact before deployment — preventing harms from reaching production. Model card documentation (C) ensures all stakeholders understand what the model does, its limitations, and its failure modes — a transparency and accountability requirement. Optimizing only accuracy at the expense of fairness, maximizing parameters, and ignoring privacy are all irresponsible practices that should NOT be on a responsible deployment checklist."
    },
    {
        id: 25,
        domain: 4,
        type: "single",
        text: "What is 'algorithmic fairness' and why is it difficult to achieve in practice?",
        options: ["Algorithmic fairness means the model runs the same algorithm for all users — it has nothing to do with outcomes", "Algorithmic fairness means ensuring model outcomes are equitable across demographic groups; it is difficult because different mathematical definitions of fairness (e.g., demographic parity, equalized odds) are mathematically incompatible and involve value tradeoffs", "Algorithmic fairness is automatically guaranteed when using foundation models", "Algorithmic fairness only applies to image recognition systems"],
        correct: [1],
        explanation: "Algorithmic fairness aims to ensure AI decisions are equitable across demographic groups. The difficulty: different mathematical fairness definitions (demographic parity, equalized odds, calibration, individual fairness) are provably incompatible — satisfying one may mathematically preclude satisfying another. Additionally, fairness involves value judgments about what 'equal' means in context. Organizations must explicitly choose which fairness criteria to optimize and acknowledge the tradeoffs."
    },
    {
        id: 26,
        domain: 4,
        type: "single",
        text: "A company builds an AI system for parole risk assessment. They want to ensure the system is explainable to parole board members who are not data scientists. Which approach BEST supports this stakeholder requirement?",
        options: ["Deploy the most complex deep learning model to maximize accuracy", "Use SHAP values to generate natural language explanations of each decision tailored to a non-technical audience, showing which factors most influenced the risk score", "Remove all explainability features to protect proprietary model logic", "Only present the final score without any explanation"],
        correct: [1],
        explanation: "SHAP (SHapley Additive exPlanations) values identify which features most influenced a specific prediction. Translating these into natural language explanations ('Criminal history was the primary factor; employment status reduced the risk score') makes AI decisions accessible to non-technical decision-makers like parole board members. Explainability is legally and ethically required for high-stakes decisions affecting individual freedom. Complexity, opacity, and unexplained scores are irresponsible in this context."
    },
    {
        id: 27,
        domain: 5,
        type: "single",
        text: "<div class='scenario-box'>An ML team stores sensitive model training data in Amazon S3. They want to ensure that even if an IAM administrator accidentally grants broad access, the training data cannot be exfiltrated outside the company's AWS account or VPC.</div>Which S3 security feature prevents cross-account data exfiltration?",
        options: ["S3 Versioning", "S3 Object Lock", "S3 Block Public Access + VPC endpoint policies restricting S3 access to only the company's VPC", "S3 Transfer Acceleration"],
        correct: [2],
        explanation: "S3 Block Public Access prevents any public access configuration. VPC endpoint policies for S3 can restrict which S3 buckets can be accessed from within the VPC and prevent requests to buckets outside the organization's accounts. Together, these controls prevent exfiltration via public access and restrict access to approved organizational resources only — even if an IAM admin makes mistakes. Versioning protects against deletion. Object Lock prevents deletion/modification. Transfer Acceleration is for upload speed."
    },
    {
        id: 28,
        domain: 5,
        type: "single",
        text: "An organization's security team wants to receive immediate notification whenever a new Amazon SageMaker endpoint is created without encryption enabled. Which combination of AWS services delivers this automated detection and alerting?",
        options: ["Amazon Macie + Amazon Polly", "AWS Config Rule (detecting unencrypted endpoints) + Amazon SNS (sending alerts to the security team)", "AWS Glue + Amazon Kinesis", "Amazon Rekognition + AWS Lambda"],
        correct: [1],
        explanation: "AWS Config with a custom or managed Config Rule evaluates SageMaker endpoint configurations and marks any without encryption as non-compliant. This evaluation triggers in real time when the endpoint is created. An SNS notification is sent to the security team's subscription (email, Slack via Lambda, PagerDuty) upon non-compliance detection. This provides automated, real-time security control enforcement without manual auditing."
    },
    {
        id: 29,
        domain: 5,
        type: "multi",
        text: "A financial institution's AI governance framework requires complete traceability of all model decisions for regulatory examination. Which TWO technical controls provide this traceability? (Select TWO)",
        options: ["Enabling Amazon Bedrock model invocation logging to record inputs and outputs for all production API calls", "Deleting logs after 24 hours to reduce storage costs", "Implementing AWS CloudTrail to audit all API-level actions including who deployed which model version and when", "Using Amazon Polly to convert decision logs to audio format", "Storing model weights in Amazon Glacier"],
        correct: [0, 2],
        explanation: "Bedrock invocation logging (A) captures the actual prompts and responses for every production call — the content-level audit trail needed to explain specific decisions to regulators. CloudTrail (C) captures the API-level audit trail — who deployed models, changed configurations, or accessed data, and when. Together they provide complete traceability from deployment decision to individual inference. Deleting logs violates retention requirements. Polly and Glacier are not relevant here."
    },
    {
        id: 30,
        domain: 5,
        type: "single",
        text: "A company wants to implement a 'zero-trust' security posture for their AWS AI workloads. Under zero-trust, what is the guiding principle applied to every request, regardless of source?",
        options: ["Trust all requests that originate from within the corporate VPN", "Never trust, always verify — every request for AI resources must be authenticated, authorized, and validated regardless of network location or prior session", "Trust all AWS services by default since they are managed by Amazon", "Only verify requests from external (non-AWS) sources"],
        correct: [1],
        explanation: "Zero-trust security is based on the principle 'never trust, always verify.' Every request — whether from inside the VPN, a trusted service, or a known user — must be authenticated (confirm identity), authorized (confirm permission for the specific action), and validated (confirm the request is legitimate) before access is granted. This eliminates implicit trust based on network location, which is especially critical for AI workloads handling sensitive data."
    }
];

export default questions;