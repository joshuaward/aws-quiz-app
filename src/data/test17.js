// Test 17 – Questions Data
// 30 questions | Domain-weighted per AIF-C01 official exam guide
// D1:20% (6q) | D2:24% (7q) | D3:28% (9q) | D4:14% (4q) | D5:14% (4q)
// Difficulty: Intermediate–Difficult | Plausible distractors throughout

const questions = [

// ── D1 Q1 ─────────────────────────────────────────────────────
{
  id: 1, domain: 1, type: "single",
  text: "A data science team is building a predictive model for customer lifetime value (CLV). During feature engineering, they create a feature called 'total_spend_to_date' that is the sum of all historical purchases. After training, the model shows an unusually high R² of 0.97 on the test set. When deployed to production, accuracy drops to R² of 0.51.\n\nWhich issue MOST likely explains this extreme performance gap between testing and production?",
  options: [
    "The model is underfitting — R² of 0.97 is too low and the model needs more parameters",
    "Target leakage — 'total_spend_to_date' was calculated using purchase data that occurred after the CLV label was assigned, so the feature contains future information unavailable at prediction time",
    "The test set is too large relative to the training set, causing overly optimistic test metrics",
    "The production environment uses a different AWS Region, causing model performance degradation due to data residency issues"
  ],
  correct: [1],
  explanation: "Target leakage is the diagnostic here. 'Total spend to date' likely includes purchases made after the CLV measurement period — meaning the feature already contains the information the model is trying to predict. This produces artificially inflated training and test metrics because the feature is almost perfectly correlated with the target. In production, future purchases don't exist yet, so the feature no longer carries predictive signal. This is a temporal leakage error: features must only use information available at the time a real prediction would be made. An R² of 0.97 on test data is a red flag, not underfitting evidence. Test set size and AWS Regions don't explain this pattern."
},

// ── D1 Q2 ─────────────────────────────────────────────────────
{
  id: 2, domain: 1, type: "single",
  text: "An ML team uses k-fold cross-validation (k=5) to evaluate a gradient boosting model. The five fold scores are: 0.81, 0.83, 0.79, 0.82, 0.80 (AUC-ROC). They also compute a final test set AUC-ROC of 0.82.\n\nWhat does the consistency between cross-validation scores and test set performance indicate?",
  options: [
    "The model is overfitting because all scores are below 0.90",
    "Cross-validation was unnecessary since the final test score matches the mean CV score",
    "The model generalizes consistently — the low variance across CV folds (range 0.04) and alignment with the held-out test score suggest the model is neither overfitting nor underfitting significantly",
    "The model has high bias because the AUC-ROC is not above 0.85"
  ],
  correct: [2],
  explanation: "K-fold cross-validation serves two purposes: estimating generalization performance and diagnosing variance. A small range across folds (0.79–0.83, spread of 0.04) indicates the model is stable and not highly sensitive to which data subset it trains on. Alignment between the CV mean (≈0.81) and the test set score (0.82) confirms the CV estimate was reliable and the model generalizes to truly unseen data. This is the expected behavior of a well-fit model. AUC-ROC thresholds for 'good' vs 'excellent' depend on the domain — 0.81 may be fully acceptable for many applications. CV reduces estimation variance; it doesn't become unnecessary when it produces matching results."
},

// ── D1 Q3 ─────────────────────────────────────────────────────
{
  id: 3, domain: 1, type: "multi",
  text: "A company wants to use ML to detect manufacturing defects in real-time on a production line. Each item is photographed and the model must classify it as 'defective' or 'non-defective' within 50 milliseconds. The team has 10,000 labeled images.\n\nWhich TWO characteristics of this use case are MOST important to address during model development? (Select TWO.)",
  options: [
    "The 50ms latency requirement constrains model size and architecture — a large, slow model may be accurate but fail the latency SLA, requiring optimization techniques like model distillation or quantization",
    "Manufacturing defect detection always requires reinforcement learning since the production environment is dynamic",
    "Class imbalance — in manufacturing, defective items are typically rare (e.g., 1–5% of items), which can cause a naive model to predict 'non-defective' for everything and still achieve 95%+ accuracy while missing all defects",
    "The model must use Amazon Rekognition Custom Labels because custom ML models cannot achieve 50ms latency",
    "Transfer learning from a pre-trained vision model is not applicable because manufacturing images are too different from natural images"
  ],
  correct: [0, 2],
  explanation: "Latency constraint (A) is critical for real-time production line deployment. A 50ms SLA rules out large, computationally expensive models unless optimized. Model distillation (training a small model to mimic a large one), quantization (reducing weight precision), and edge deployment all address this. Class imbalance (C) is endemic to defect detection — defect rates of 1–5% mean a model predicting 'no defect' always would achieve 95-99% accuracy but 0% recall on defects. Techniques like oversampling, class weights, or using precision/recall/F1 rather than accuracy are essential. Reinforcement learning is not standard for static image classification. Rekognition Custom Labels is one option but not mandatory. Transfer learning is highly applicable and commonly used."
},

// ── D1 Q4 ─────────────────────────────────────────────────────
{
  id: 4, domain: 1, type: "single",
  text: "A data scientist trains a linear regression model to predict energy consumption (kWh) from outdoor temperature. The model achieves R²=0.41 on the training set and R²=0.39 on the test set. The team reviews residual plots and finds a clear U-shaped pattern, suggesting the true relationship between temperature and consumption is non-linear (high consumption at both very high and very low temperatures).\n\nWhat is the PRIMARY issue and the recommended next step?",
  options: [
    "The model is overfitting — the team should apply L2 regularization to reduce the gap between training and test R²",
    "The model has high bias due to an incorrect functional form — adding polynomial temperature features (e.g., temperature², temperature³) or switching to a non-linear model would better capture the U-shaped relationship",
    "The dataset is too small — collecting more data will improve R² without changing the model",
    "The R² values are too close together — the model needs more features to create a meaningful train/test gap"
  ],
  correct: [1],
  explanation: "The near-identical training and test R² (0.41 vs 0.39) rules out overfitting — this is high bias / underfitting. The U-shaped residual pattern is the diagnostic: a linear model cannot capture a quadratic relationship between temperature and energy consumption, no matter how much data is collected. The solution is a better functional form: polynomial features (e.g., adding temp² as a feature) or switching to a non-linear model (decision tree, neural network) that can model the curve. Regularization reduces overfitting — it would worsen performance here. More data does not fix model misspecification (wrong functional form). A small train/test gap at low R² confirms underfitting, not a problem."
},

// ── D1 Q5 ─────────────────────────────────────────────────────
{
  id: 5, domain: 1, type: "match",
  text: "Select the correct description for each supervised learning output type. Each output type should be selected one time.",
  items: [
    "A model predicts whether a bank transaction is fraudulent (yes or no).",
    "A model predicts which of the following five categories a news article belongs to: politics, sports, technology, entertainment, or health.",
    "A model predicts the exact number of units a product will sell next month.",
    "A model produces a ranked list of products sorted by predicted relevance to a user's search query."
  ],
  choices: ["Binary classification", "Multi-class classification", "Ranking / learning-to-rank", "Regression"],
  correct: [0, 1, 3, 2],
  explanation: "<b>Binary classification</b> — The target variable has exactly two classes (fraud / not fraud). The model outputs a probability or binary label.<br><br><b>Multi-class classification</b> — The target variable has more than two mutually exclusive categories (five news categories). Each input is assigned to exactly one class.<br><br><b>Regression</b> — The target variable is a continuous numerical value (units sold). The model outputs a real number.<br><br><b>Ranking / learning-to-rank</b> — The model orders items by predicted relevance score for a given query. Used in search, recommendation systems, and information retrieval. Distinct from classification and regression because the output is a relative ordering, not a category or number."
},

// ── D1 Q6 ─────────────────────────────────────────────────────
{
  id: 6, domain: 1, type: "single",
  text: "An ML team is designing a training pipeline for a computer vision model on Amazon SageMaker. They need to store and serve a feature set that will be used for both real-time inference (low latency reads) and batch training jobs (high-throughput historical reads).\n\nWhich Amazon SageMaker feature supports both online (low-latency) and offline (high-throughput batch) access patterns for the same feature set?",
  options: [
    "SageMaker Experiments — which logs feature values alongside training metrics for comparison across runs",
    "SageMaker Data Wrangler — which provides both real-time and batch data preparation interfaces",
    "SageMaker Feature Store — which maintains an online store for low-latency real-time serving and an offline store (backed by S3) for batch training access",
    "SageMaker Model Monitor — which stores feature distributions for real-time comparison against baseline distributions"
  ],
  correct: [2],
  explanation: "Amazon SageMaker Feature Store is specifically designed for the dual-access pattern described. The online store uses a low-latency key-value backend (millisecond reads) for real-time inference feature serving. The offline store uses Amazon S3 with Glue Data Catalog integration for high-throughput batch access during training jobs. Both stores are automatically synchronized when features are ingested — eliminating the train-serve skew problem where offline training data differs from online inference data. Data Wrangler prepares data visually. Model Monitor tracks production data distributions. Experiments tracks training run metadata."
},

// ── D2 Q7 ─────────────────────────────────────────────────────
{
  id: 7, domain: 2, type: "single",
  text: "A prompt engineer is comparing two prompting strategies for a complex medical coding task:\n\nStrategy A: 'Assign the appropriate ICD-10 code to the following clinical note: [note]'\nStrategy B: 'You are a certified medical coder. For the clinical note below, first identify the primary diagnosis described, then identify any secondary diagnoses or complications, then determine the most specific ICD-10 code for the primary diagnosis. Explain your reasoning before providing the final code. Clinical note: [note]'\n\nStrategy B achieves 91% coding accuracy versus 74% for Strategy A on a 500-case evaluation set.\n\nWhat prompt engineering principles account for Strategy B's improvement?",
  options: [
    "Strategy B uses more tokens, and token count is the primary driver of LLM accuracy on medical tasks",
    "Strategy B combines role prompting (certified coder persona), chain-of-thought decomposition (step-by-step reasoning), and explicit output format specification — together reducing errors by directing the model's attention and reasoning process before committing to an answer",
    "Strategy B is better because it uses longer sentences, which force the model to process more context per token",
    "Strategy B works because it asks the model to explain reasoning, which triggers an external fact-checking process in the LLM"
  ],
  correct: [1],
  explanation: "Strategy B employs three evidence-backed prompt engineering techniques simultaneously: (1) Role prompting — 'You are a certified medical coder' activates domain-specific representation patterns in the model's weights; (2) Chain-of-thought decomposition — breaking the task into explicit sequential steps (identify primary diagnosis → identify secondary diagnoses → determine code) forces structured reasoning that catches errors before the final answer; (3) Explicit output format specification — requiring explanation before the code creates an intermediate reasoning checkpoint. Together these account for the 17-percentage-point accuracy improvement. Token count alone doesn't drive accuracy. Sentence length is irrelevant. LLMs don't perform external fact-checking — the improvement comes from structured internal reasoning."
},

// ── D2 Q8 ─────────────────────────────────────────────────────
{
  id: 8, domain: 2, type: "single",
  text: "A developer is building a multi-turn conversational AI application using Amazon Bedrock. After several turns, the user asks a question that references context from earlier in the conversation, but the model responds as if it has no memory of prior turns.\n\nWhat is the technical root cause of this issue and how should the developer address it?",
  options: [
    "Amazon Bedrock automatically manages conversation history, but the developer must enable the 'memory' feature in the Bedrock console",
    "The model's weights are being reset between API calls; the developer should use a stateful Bedrock endpoint",
    "Foundation models are stateless — each API call is independent with no persistent memory between calls; the developer must implement conversation history management by including prior turns in the messages array with each new API request",
    "The model's context window is exhausted because multi-turn conversations cannot fit in any current foundation model"
  ],
  correct: [2],
  explanation: "Foundation models are fundamentally stateless — they have no memory between API calls. Each invocation is independent. The only 'memory' a model has within a conversation is what appears in the context window of the current API call. To implement multi-turn conversation, developers must maintain conversation history externally (in their application state, database, or session store) and include all prior turns in the messages array with each new request. This is a core architectural pattern for conversational AI applications. Bedrock does not have a 'memory' toggle. Model weights are not reset (they're never changed during inference). Context windows are large enough for typical conversations — the issue is not window exhaustion but missing history in the API call."
},

// ── D2 Q9 ─────────────────────────────────────────────────────
{
  id: 9, domain: 2, type: "multi",
  text: "An enterprise's AI governance committee reviews a proposal to deploy a generative AI system for automated contract drafting. The committee identifies several risk categories that must be mitigated.\n\nWhich TWO risks are MOST specific to generative AI systems (as opposed to risks also present in traditional ML systems)? (Select TWO.)",
  options: [
    "Hallucination — the system may generate contract clauses that cite non-existent legal statutes with high confidence",
    "Overfitting — the model may memorize specific contracts from training data and reproduce them verbatim",
    "Intellectual property risk — the model may generate contract language that closely reproduces copyrighted template language from its training data",
    "Class imbalance — certain contract types may be underrepresented in the training data",
    "Hyperparameter sensitivity — the model's output quality may vary significantly with temperature changes"
  ],
  correct: [0, 2],
  explanation: "Hallucination (A) is a generative AI-specific risk: LLMs generate fluent, confident text regardless of factual grounding. A hallucinated legal statute in a contract has serious real-world consequences but is not a risk in traditional classification/regression ML. Intellectual property risk (C) is specific to generative AI: models trained on large corpora can reproduce verbatim or near-verbatim text from training data, creating copyright infringement liability — a risk that doesn't exist in traditional ML prediction tasks. Overfitting occurs in traditional ML but doesn't manifest as verbatim reproduction in generative models. Class imbalance and hyperparameter sensitivity are concerns in traditional ML systems too and are not GenAI-specific."
},

// ── D2 Q10 ─────────────────────────────────────────────────────
{
  id: 10, domain: 2, type: "single",
  text: "A company evaluates Amazon Bedrock's model evaluation feature to compare two foundation models on their internal customer support dataset. The evaluation reveals: Model A has higher ROUGE-L and BERTScore but lower human preference ratings. Model B has lower automated metric scores but 73% of human evaluators prefer its responses.\n\nFor a customer-facing production deployment, which model should the company select and why?",
  options: [
    "Model A — because automated metrics are objective and remove human evaluator bias",
    "Model B — because for customer-facing applications, actual human preference is the most relevant signal for production quality; automated metrics measure surface similarity to reference answers, not the holistic quality that end-users experience",
    "Neither — the discrepancy between automated and human evaluation indicates a data quality problem that must be resolved first",
    "Model A — because lower human preference ratings indicate the evaluators were not representative of the actual customer base"
  ],
  correct: [1],
  explanation: "For customer-facing deployment, human preference is the gold standard evaluation signal. Automated metrics like ROUGE-L measure similarity to reference answers — they reward reproducing reference wording but may penalize responses that are more concise, better phrased, or more helpful in ways that differ from the reference. Human evaluators assess holistic quality: clarity, usefulness, tone, and trustworthiness. A 73% human preference rate for Model B is strong evidence of production suitability. This is precisely why Amazon Bedrock Model Evaluation offers both automated metrics AND human evaluation workflows — and why the industry standard is to weight human evaluation heavily for customer-facing use cases. The discrepancy is expected, not a data quality issue."
},

// ── D2 Q11 ─────────────────────────────────────────────────────
{
  id: 11, domain: 2, type: "order",
  text: "A company is implementing continued pre-training on Amazon Bedrock to adapt a foundation model to their specialized manufacturing domain. Order the following implementation steps from FIRST to LAST.",
  items: [
    "Evaluate the customized model against a held-out set of domain-specific queries and compare against the base model baseline",
    "Collect and prepare a large corpus of unlabeled domain-specific text data (technical manuals, maintenance logs, engineering specifications) and upload to Amazon S3",
    "Configure and launch the continued pre-training job in Amazon Bedrock, specifying the base model, S3 training data location, and hyperparameters",
    "Deploy the customized model with provisioned throughput and integrate it into the production application"
  ],
  correctOrder: [1, 2, 0, 3],
  explanation: "The correct continued pre-training workflow: (1) <b>Data preparation</b> — collect, clean, and upload domain text to S3. Data quality directly determines customization quality. (2) <b>Launch training job</b> — configure the Bedrock continued pre-training job, specifying base model, S3 data source, and training hyperparameters. (3) <b>Evaluate</b> — test the customized model on held-out domain queries vs. the base model baseline before committing to deployment. This gates production deployment on validated quality improvement. (4) <b>Deploy</b> — provision throughput for the customized model and integrate into production. Deploying before evaluation risks deploying a degraded or unchanged model."
},

// ── D2 Q12 ─────────────────────────────────────────────────────
{
  id: 12, domain: 2, type: "single",
  text: "A GPT-style large language model generates text token by token. For each new token, the model computes a probability distribution over its entire vocabulary and selects the next token.\n\nWhich statement MOST accurately describes what 'temperature' is mathematically doing to this probability distribution?",
  options: [
    "Temperature controls the number of transformer attention heads activated during generation",
    "Temperature adds a random noise vector to the embedding layer before generation begins",
    "Temperature divides the logits (raw scores before softmax) by the temperature value before applying softmax — a temperature below 1.0 sharpens the distribution (high-probability tokens become more dominant) while a temperature above 1.0 flattens it (probabilities become more uniform)",
    "Temperature multiplies the final probability of the selected token by a scaling factor to adjust confidence"
  ],
  correct: [2],
  explanation: "Temperature operates directly on the logits (pre-softmax scores): the logits are divided by the temperature value T before the softmax function converts them to probabilities. When T < 1.0 (e.g., 0.3), dividing by a small number amplifies differences between logits, making high-probability tokens dominate even more — producing more deterministic, focused outputs. When T > 1.0 (e.g., 1.5), dividing by a large number compresses logit differences, making the distribution more uniform and increasing randomness. T = 1.0 leaves the distribution unchanged. This is the mathematical basis for all temperature-related behavior in LLMs. Temperature does not affect embeddings, attention heads, or post-selection confidence scaling."
},

// ── D2 Q13 ─────────────────────────────────────────────────────
{
  id: 13, domain: 2, type: "single",
  text: "A company's Amazon Q Business deployment is not finding relevant answers to employee questions about HR benefits, despite the benefits documents being indexed. Upon investigation, the team finds that HR documents are stored as scanned PDF images with no selectable text layer.\n\nWhat is the ROOT CAUSE of this retrieval failure and how should it be addressed?",
  options: [
    "Amazon Q Business does not support PDF files; the documents must be converted to DOCX format",
    "Scanned image PDFs contain no machine-readable text — the vector embedding process has nothing to embed because there are no text tokens to extract; the documents should be processed through Amazon Textract first to generate a searchable text layer before indexing",
    "The S3 bucket containing the HR documents is in a different region than the Q Business deployment, causing retrieval failures",
    "Amazon Q Business requires documents to be under 10 pages; longer benefit guides must be split before indexing"
  ],
  correct: [1],
  explanation: "Scanned image PDFs are photographs of pages — they contain no underlying text layer. When Q Business (or any RAG system) attempts to extract text for embedding, it finds no text tokens to process, so the documents are either skipped or indexed as empty. The solution is OCR preprocessing: Amazon Textract extracts text from scanned documents and produces machine-readable output that can then be indexed and embedded. Amazon Q Business supports PDFs and other formats as long as they contain extractable text. Region configuration and document length are not the cause of image-PDF indexing failures."
},

// ── D3 Q14 ─────────────────────────────────────────────────────
{
  id: 14, domain: 3, type: "single",
  caseStudy: "A national insurance company wants to modernize its claims processing. Currently, claims adjusters manually review 40,000 claims per month. Each claim includes: a scanned PDF claim form, photos of the damage, a recorded phone statement from the claimant, and a structured CSV extract from the policy management system. The company wants to automate initial claims triage: classify severity, extract key data fields from claim forms, and flag potentially fraudulent patterns — all before an adjuster reviews the claim.",
  caseLabel: "CASE STUDY — Questions 14–17",
  text: "The first pipeline step must extract structured data fields (claimant name, policy number, incident date, damage description) from the scanned PDF claim forms.\n\nWhich AWS service is PURPOSE-BUILT for extracting structured forms data and key-value pairs from scanned documents?",
  options: [
    "Amazon Kendra — which indexes scanned documents and enables search over their content",
    "Amazon Comprehend — which extracts named entities including names, dates, and locations from document text",
    "Amazon Textract — which uses ML to extract text, forms data (key-value pairs), and table content from scanned documents and PDFs",
    "Amazon Rekognition — which analyzes document images and classifies their content type"
  ],
  correct: [2],
  explanation: "Amazon Textract is specifically designed for structured data extraction from scanned documents. Unlike basic OCR (which only produces raw text), Textract understands document structure: it extracts key-value pairs from form fields ('Policy Number: 12345'), detects and extracts table contents, and preserves the relationship between labels and values. This is essential for insurance claim forms where data must be extracted into specific structured fields. Comprehend performs NLP on text (entity extraction, sentiment) but requires text input — it cannot process scanned images directly. Rekognition handles image/video analysis for objects and faces. Kendra provides intelligent search over indexed text."
},

// ── D3 Q15 ─────────────────────────────────────────────────────
{
  id: 15, domain: 3, type: "single",
  caseStudy: null,
  text: "(Continued from Case Study) After extracting text from claim forms and transcribing phone statements, the pipeline must classify each claim into severity tiers (Minor, Moderate, Severe, Catastrophic) and detect if the claim narrative contains any of 15 predefined fraud indicator patterns.\n\nWhich AWS managed AI service provides BOTH custom text classification AND pattern/entity detection capabilities through a single service API?",
  options: [
    "Amazon Lex — which can be trained to classify intents and detect slot entities from claim text",
    "Amazon Comprehend — which supports custom classification models for severity tiering and custom entity recognition models for fraud pattern detection, both trainable on domain-specific labeled data",
    "Amazon Translate — which converts claim narratives to a standardized format for downstream classification",
    "Amazon SageMaker Autopilot — which automatically trains text classification models but requires at least 500,000 labeled examples"
  ],
  correct: [1],
  explanation: "Amazon Comprehend supports two types of custom ML models relevant here: (1) Custom Classification — train a multi-class classifier on labeled claim examples to categorize severity (Minor/Moderate/Severe/Catastrophic); (2) Custom Entity Recognition — train an entity recognizer on labeled examples of fraud indicator patterns to detect them in new claim text. Both are trained within Comprehend using labeled data from S3 and deployed via managed endpoints. Amazon Lex is designed for conversational AI, not document classification. Translate converts languages. SageMaker Autopilot trains tabular ML models — not custom NLP entity recognizers. Comprehend's dual capability makes it the unified NLP service for this pipeline."
},

// ── D3 Q16 ─────────────────────────────────────────────────────
{
  id: 16, domain: 3, type: "single",
  caseStudy: null,
  text: "(Continued from Case Study) The company wants to add a generative AI assistant that allows adjusters to ask natural language questions about a claim's documents — 'What damage is described in the claimant's statement?' or 'Does the policy cover this type of incident?' The assistant must answer only from the claim's specific documents, not general insurance knowledge, and must cite which document it drew from.\n\nWhich architecture pattern BEST supports per-claim document grounding with citation?",
  options: [
    "Amazon Kendra indexed with all claims; Kendra's search results are displayed to the adjuster without AI generation",
    "A single Amazon Bedrock Knowledge Base with all 40,000 monthly claims indexed; the adjuster queries it with the claim ID as a filter",
    "An Amazon Bedrock agent with an action group that retrieves the specific claim's documents from S3 and passes them directly as context in the prompt — the model answers based only on the provided document text, enabling citation of source documents",
    "A fine-tuned Bedrock model trained on all historical claims; each adjuster query retrieves from the fine-tuned model's weights"
  ],
  correct: [2],
  explanation: "For per-claim grounding with citation, injecting the specific claim's documents directly into the prompt context is the most accurate approach. An agent with an action group can retrieve (from S3) only the documents for the current claim ID, pass them as context in the prompt, and the model generates answers grounded strictly in those documents — naturally enabling citation of source document names and passages. A single large knowledge base indexed with all claims would require precise metadata filtering (otherwise cross-claim contamination). Fine-tuning embeds general knowledge, not per-claim specific data. Kendra alone provides search without AI-generated synthesis and citation."
},

// ── D3 Q17 ─────────────────────────────────────────────────────
{
  id: 17, domain: 3, type: "single",
  caseStudy: null,
  text: "(Continued from Case Study) The company wants to transcribe the recorded phone statements from claimants. The recordings are in American English and average 8–12 minutes each. Some recordings contain heavy background noise and regional accents.\n\nWhich Amazon Transcribe feature should the team enable to improve accuracy on noisy, accented speech?",
  options: [
    "Amazon Transcribe Medical — which is optimized for clinical speech and improves accuracy in all noisy environments",
    "Custom vocabulary and custom language models in Amazon Transcribe — which allow the team to provide domain-specific terms (insurance terminology, policy codes) and train on representative audio samples to improve accuracy for specific accents and noise conditions",
    "Amazon Polly — which can pre-process audio to remove noise before sending to Transcribe",
    "Amazon Translate — which can normalize regional dialect variations before transcription"
  ],
  correct: [1],
  explanation: "Amazon Transcribe supports two complementary customization features for specialized domains: (1) Custom vocabulary — add domain-specific terms (policy numbers, coverage types, insurance jargon) that the base model may not recognize accurately; (2) Custom language models — train language models on domain-specific text corpora to improve contextual word prediction for insurance scenarios and reduce errors from background noise and accents. Together these significantly improve accuracy for specialized business audio. Transcribe Medical is optimized for clinical medical terminology only. Polly is a text-to-speech service. Translate converts between languages, not dialects or noise conditions."
},

// ── D3 Q18 ─────────────────────────────────────────────────────
{
  id: 18, domain: 3, type: "multi",
  text: "A developer is optimizing an Amazon Bedrock application for production. The application serves 800 users concurrently during peak hours and requires consistent, predictable response times. The developer's tests show that on-demand model invocations occasionally experience elevated latency during high concurrency.\n\nWhich TWO actions would MOST directly address consistent throughput and latency at this scale? (Select TWO.)",
  options: [
    "Purchase Amazon Bedrock provisioned throughput with sufficient Model Units to handle peak concurrency — this reserves dedicated model capacity and provides predictable throughput guarantees",
    "Reduce the system prompt length to decrease input token count and improve per-request latency",
    "Enable streaming responses using the InvokeModelWithResponseStream API — which returns tokens as they are generated, improving perceived time-to-first-token for end users",
    "Switch to a smaller, faster model regardless of quality requirements, as latency always improves linearly with model size reduction",
    "Use AWS Lambda with a 15-minute timeout to batch requests and send them all at once"
  ],
  correct: [0, 2],
  explanation: "Provisioned throughput (A) addresses the capacity constraint: it reserves dedicated Model Units for the application, eliminating competition with other tenants and guaranteeing consistent throughput at peak concurrency. This is the primary solution for high-concurrency production workloads. Streaming responses (C) improve user-perceived latency by delivering tokens progressively — users see text appear immediately rather than waiting for the entire response, significantly improving the experience for longer responses. System prompt optimization reduces tokens marginally. Model quality trade-offs must be justified by requirements, not assumed. Lambda batching would increase latency, not reduce it."
},

// ── D3 Q19 ─────────────────────────────────────────────────────
{
  id: 19, domain: 3, type: "single",
  text: "A company builds a SageMaker Pipelines ML workflow. The pipeline includes: a Processing step for feature engineering, a Training step for model training, a ClarifyCheck step for bias analysis, and a conditional step that only registers the model in Model Registry if bias metrics meet defined thresholds.\n\nWhat SageMaker Pipelines feature enables the conditional registration logic based on bias metric output?",
  options: [
    "SageMaker Pipelines does not support conditional logic; all steps always execute in sequence",
    "A ConditionStep in SageMaker Pipelines that evaluates the ClarifyCheck output metrics against defined thresholds and branches to either a ModelStep (register) or a FailStep (halt pipeline with notification)",
    "Amazon EventBridge must be used to evaluate bias metrics externally and trigger conditional pipeline execution",
    "The ClarifyCheck step automatically blocks model registration when bias is detected, without requiring explicit conditional logic"
  ],
  correct: [1],
  explanation: "SageMaker Pipelines includes a ConditionStep that enables branching logic based on metric comparisons. The ConditionStep evaluates a condition expression (e.g., 'bias metric < 0.05') against the output of a previous step (the ClarifyCheck), then routes execution to one of two branches: if the condition is met, proceed to ModelStep (register in Model Registry); if not, execute a FailStep that stops the pipeline and logs the failure reason. This enables automated quality gates in ML pipelines — no human intervention required to enforce bias thresholds. Conditional steps are a native SageMaker Pipelines feature, not requiring EventBridge for this specific use case."
},

// ── D3 Q20 ─────────────────────────────────────────────────────
{
  id: 20, domain: 3, type: "single",
  text: "A developer reviews their RAG application and notices the following pattern: for simple factual questions with short answers, the system performs well. For complex analytical questions requiring synthesis of information from multiple document sections, response quality is poor — the model provides incomplete or only partially correct answers.\n\nWhich characteristic of the current RAG pipeline architecture MOST likely explains this limitation for complex multi-section questions?",
  options: [
    "RAG is fundamentally unsuitable for multi-section synthesis; the company should use fine-tuning instead",
    "The embedding model is too small to handle complex queries",
    "The retrieval step fetches the top-k chunks by similarity to the full query, but individual chunks may not contain all the information needed — a complex question requiring synthesis across multiple sections may need either a larger top-k with re-ranking or a hierarchical retrieval strategy",
    "The foundation model cannot perform synthesis tasks — a specialized reasoning model is required"
  ],
  correct: [2],
  explanation: "Standard RAG retrieves the top-k most similar chunks to the query embedding. For complex analytical questions, relevant information may be distributed across many sections — not necessarily the sections most similar to the query surface text. If top-k is small, critical supporting information is missed. Solutions include: (1) increasing top-k with a re-ranking step (using a cross-encoder model) to select the most relevant from a larger candidate set; (2) hierarchical retrieval (retrieve documents first, then passages within those documents); (3) query decomposition (break complex queries into sub-queries, retrieve for each, merge context). Embedding model size affects recall quality but not this specific synthesis gap. Foundation models are capable of synthesis given sufficient context."
},

// ── D3 Q21 ─────────────────────────────────────────────────────
{
  id: 21, domain: 3, type: "match",
  text: "Select the correct AWS managed AI service from the following list for each use case. Each service should be selected one time.",
  items: [
    "A streaming platform wants to automatically detect explicit content in user-uploaded videos before they go live, including in animated content.",
    "A logistics company wants to extract structured data — shipper names, delivery addresses, weights, and package counts — from photographed shipping manifests and bills of lading.",
    "A financial services company wants to build a conversational virtual assistant for account inquiries that uses natural language understanding to identify user intent and collect account numbers and transaction dates.",
    "A news agency wants to automatically translate breaking news articles from 12 source languages into English within 2 seconds of publication."
  ],
  choices: ["Amazon Lex", "Amazon Rekognition", "Amazon Textract", "Amazon Translate"],
  correct: [1, 2, 0, 3],
  explanation: "<b>Amazon Rekognition</b> — Content moderation for video (including animated content) is a core Rekognition capability. It detects explicit, violent, and inappropriate content in images and video streams with confidence scores.<br><br><b>Amazon Textract</b> — Extracts structured data, key-value pairs, and table content from photographed documents. Perfect for shipping manifests and bills of lading where field relationships (label → value) must be preserved.<br><br><b>Amazon Lex</b> — NLU-powered conversational AI service for building chatbots and virtual assistants. Identifies intents (check balance, report transaction) and collects slot values (account number, dates) from natural language.<br><br><b>Amazon Translate</b> — Real-time neural machine translation between 75+ languages. Designed for high-throughput, low-latency translation of text documents and streams."
},

// ── D3 Q22 ─────────────────────────────────────────────────────
{
  id: 22, domain: 3, type: "single",
  text: "An Amazon SageMaker model endpoint has been in production for 6 months. SageMaker Model Monitor alerts indicate that the distribution of an input feature ('customer_age_group') has shifted significantly — the proportion of customers in the '18-25' age group has increased from 12% of traffic to 34% of traffic, while the '55+' group has decreased proportionally.\n\nThe model was trained when '55+' represented 31% of the training distribution. What does this shift indicate and what is the recommended action?",
  options: [
    "This is concept drift — the relationship between age group and outcomes has changed; retraining is urgent",
    "This is data drift in an input feature distribution; the model may perform well on the newly dominant '18-25' segment only if its training included sufficient examples from that group; investigate per-segment performance and consider retraining with data that better represents the current user distribution",
    "Input feature distribution changes are expected and never require action as long as the model's overall prediction distribution remains stable",
    "This indicates a data quality issue in the Model Monitor baseline configuration and the baseline should be recalculated"
  ],
  correct: [1],
  explanation: "This is data drift — the distribution of input features has shifted from what the model was trained on. The '18-25' segment has nearly tripled its traffic share while the '55+' segment (which dominated training data at 31%) has decreased. The model may perform well on '18-25' if the training data included adequate examples of that group — but accuracy may degrade if training data was insufficient for that cohort. The recommended response is: (1) analyze per-segment model performance to identify if accuracy has degraded specifically for the newly dominant or declining groups; (2) if degradation is confirmed, retrain with a dataset that reflects the current traffic distribution. Data drift alerts indicate investigation is warranted, not automatic emergency retraining."
},

// ── D4 Q23 ─────────────────────────────────────────────────────
{
  id: 23, domain: 4, type: "single",
  text: "A data scientist uses Amazon SageMaker Clarify's post-training bias analysis on a loan approval model. Clarify reports a Difference in Positive Proportions in Labels (DPPL) of +0.18 for the 'age_group' feature, where the reference group is '35-55 years'.\n\nWhat does a DPPL of +0.18 indicate about the training data?",
  options: [
    "The model's precision is 18% lower for non-reference age groups, indicating post-training model bias",
    "The model approves loans 18% more often overall compared to a theoretical unbiased model",
    "The proportion of positive labels (loan approvals) in the training data is 18 percentage points higher for the reference group (35-55 years) than for other age groups — indicating the training labels themselves are skewed, not just the feature distribution",
    "Clarify detected 18 specific biased records that should be removed from training data"
  ],
  correct: [2],
  explanation: "DPPL (Difference in Positive Proportions in Labels) measures pre-training label bias. A DPPL of +0.18 means the proportion of positive training labels (approved loans) is 18 percentage points higher for the reference group (35-55 years) than for other age groups. This indicates bias in the training labels themselves — the historical data shows significantly higher approval rates for the reference group. This is pre-training bias, not post-training model bias. If the model trains on this biased label distribution, it will learn to replicate the historical disparity. The remedy is in the training data: collect more representative data, adjust sampling, or apply label correction techniques. DPPL doesn't count records or measure model precision."
},

// ── D4 Q24 ─────────────────────────────────────────────────────
{
  id: 24, domain: 4, type: "multi",
  text: "A company deploys a generative AI application for employee HR support. Six months after deployment, a team member reports that the AI routinely provides more comprehensive answers to salary negotiation questions for employees with certain job titles compared to others with similar qualifications, appearing to reflect historical pay gap patterns from training data.\n\nWhich TWO actions directly address this responsible AI issue? (Select TWO.)",
  options: [
    "Run Amazon SageMaker Clarify evaluation to quantify whether response quality metrics (completeness, accuracy) differ significantly across job title groups",
    "Increase the model's temperature to introduce more response diversity, which will reduce systematic patterns in outputs",
    "Audit the training data and RLHF feedback for patterns where human raters consistently preferred certain responses for specific job title groups, and adjust the training process to ensure equitable response quality",
    "Disable logging of HR interactions to protect the privacy of employees who receive lower-quality responses",
    "Switch to a larger model, which will inherently produce more equitable outputs"
  ],
  correct: [0, 2],
  explanation: "Clarify evaluation (A) quantifies the disparity — measuring whether response completeness, accuracy, or length systematically differs across job title groups. This produces evidence-based findings rather than anecdotal reports, enabling targeted remediation. Auditing training data and RLHF feedback (C) addresses the root cause: if historical salary data encoded pay gaps and human raters (who may have implicit biases) consistently rated certain responses higher for certain groups, the model learned to perpetuate this disparity. Fixing the training signal corrects the behavior at its source. Temperature controls randomness but not systematic directional bias. Privacy protection by disabling logging impedes accountability. Larger models don't inherently produce more equitable outputs — scale amplifies training data biases."
},

// ── D4 Q25 ─────────────────────────────────────────────────────
{
  id: 25, domain: 4, type: "single",
  text: "A large technology company publishes detailed documentation about each AI system they deploy, including: the intended use cases, the populations and use cases explicitly out of scope, known limitations and failure modes, training data characteristics, evaluation results across demographic subgroups, and risk mitigation measures in place.\n\nThis documentation practice corresponds to which responsible AI concept, and which AWS feature provides a structured template for creating this documentation?",
  options: [
    "AI transparency through data lineage documentation; AWS Glue Data Catalog provides the structure for this",
    "Model governance through SageMaker Pipelines versioning; pipeline DAGs capture all model development decisions",
    "Model transparency through model cards; Amazon SageMaker Model Cards provides a structured framework for documenting model information including intended use, training details, evaluation results, and risk ratings",
    "Regulatory compliance documentation; AWS Artifact provides templates for creating AI system documentation"
  ],
  correct: [2],
  explanation: "Model cards are a responsible AI transparency practice — structured documentation for ML models that records everything stakeholders need to understand and responsibly use the model. Amazon SageMaker Model Cards implements this concept with a built-in schema covering: intended use, out-of-scope uses, model description, training details, evaluation results (including subgroup performance), risk ratings, and ethical considerations. Model cards can be versioned, exported as PDFs, and shared with internal and external stakeholders. AWS Glue Data Catalog tracks data metadata, not model documentation. SageMaker Pipelines tracks workflow execution. AWS Artifact provides AWS's own compliance documentation, not customer AI system documentation."
},

// ── D4 Q26 ─────────────────────────────────────────────────────
{
  id: 26, domain: 4, type: "single",
  text: "A judge reviews an AI-assisted sentencing recommendation tool. The tool outputs a risk score (Low/Medium/High) that judges are expected to consider when determining sentences. Research shows that when judges receive High-risk scores, they issue sentences 40% longer on average, regardless of other case factors.\n\nThis scenario illustrates which AI ethics concept, and what design principle should have been applied?",
  options: [
    "Automation bias — judges over-rely on the AI score even when their own case review suggests otherwise; Human-Centered Design should position the AI score as one input among many with explicit training that the score is advisory, not determinative",
    "Model drift — the sentencing model has degraded over time; regular retraining would resolve the over-reliance",
    "Hallucination — the AI is generating incorrect risk scores; Bedrock Guardrails would prevent this",
    "Privacy violation — the AI score reveals protected information about defendants; data minimization would address this"
  ],
  correct: [0],
  explanation: "This is automation bias — the tendency for humans to over-weight AI recommendations, deferring to algorithmic outputs even when their own judgment or other evidence suggests otherwise. The 40% longer sentences when AI scores 'High' (independent of case factors) shows judges are treating the score as determinative rather than advisory. Human-Centered Design (HCD) addresses this by: (1) explicitly framing AI tools as decision support, not decision makers; (2) training users on AI limitations and appropriate reliance; (3) designing interfaces that present AI scores alongside human judgment factors rather than leading with the score; (4) building in required written justification when sentencing significantly differs from baseline. Model drift, hallucination, and privacy are different concerns."
},

// ── D5 Q27 ─────────────────────────────────────────────────────
{
  id: 27, domain: 5, type: "single",
  text: "A company's ML training pipeline processes customer PII (Personally Identifiable Information) in Amazon SageMaker processing jobs. The security team requires that: (1) SageMaker jobs cannot access the internet, (2) all inter-service traffic stays within AWS, and (3) PII in S3 training data is encrypted at rest with a customer-managed KMS key.\n\nWhich combination of three controls implements all three requirements?",
  options: [
    "SageMaker network isolation mode + S3 VPC gateway endpoint + SSE-KMS with customer-managed key (CMK)",
    "SageMaker network isolation mode + NAT gateway in a private subnet + SSE-S3 (AWS-managed keys)",
    "SageMaker VPC mode without network isolation + S3 Block Public Access + SSE-KMS with AWS-managed key",
    "Private subnet without internet gateway + S3 Transfer Acceleration + client-side encryption"
  ],
  correct: [0],
  explanation: "All three requirements map to specific controls: (1) SageMaker Network Isolation Mode — enables a network isolation flag on SageMaker training jobs that blocks all outbound internet traffic from the training container; (2) S3 VPC gateway endpoint — routes all S3 traffic from within the VPC to S3 through the AWS private network without traversing the internet; required when network isolation is enabled so training jobs can still reach S3; (3) SSE-KMS with customer-managed key (CMK) — encrypts S3 objects with a KMS key that the customer owns, controls access to, and can audit. A NAT gateway provides internet access (violates requirement 1). SSE-S3 uses AWS-managed keys (violates requirement 3). S3 Transfer Acceleration routes through public CDN (violates requirement 2)."
},

// ── D5 Q28 ─────────────────────────────────────────────────────
{
  id: 28, domain: 5, type: "single",
  text: "An organization discovers that an employee with legitimate SageMaker data science permissions has been exfiltrating model artifacts by running SageMaker training jobs that write to a personal S3 bucket outside the company's AWS account.\n\nWhich IAM policy element MOST specifically restricts SageMaker training job output to only company-owned S3 buckets?",
  options: [
    "An IAM Condition key that restricts access based on the source IP address of the request",
    "A Service Control Policy (SCP) applied at the AWS Organization level that denies S3 PutObject actions to any bucket ARN not matching the company's approved bucket naming convention",
    "Enabling S3 Block Public Access on all company buckets, which prevents writes to external buckets",
    "Requiring MFA for all S3 write operations, which would alert security teams to unauthorized writes"
  ],
  correct: [1],
  explanation: "A Service Control Policy (SCP) applied at the AWS Organizations level can deny S3:PutObject to any bucket ARN that doesn't match the company's approved bucket pattern (e.g., 'arn:aws:s3:::company-prefix-*'). SCPs are guardrails that apply to all principals (including humans and service roles) in the organization — they override even identity-based policies, preventing any action from writing model artifacts to external buckets. IP-based conditions don't prevent cross-account S3 writes. S3 Block Public Access only prevents public bucket configurations — not cross-account writes to external private buckets. MFA alerts but doesn't prevent the exfiltration."
},

// ── D5 Q29 ─────────────────────────────────────────────────────
{
  id: 29, domain: 5, type: "multi",
  text: "A company is designing a secure, compliant AI data pipeline for processing sensitive financial data on AWS. The data flows from S3 through SageMaker processing, to a trained model endpoint. The security team requires encryption in transit between all components and encryption at rest for all stored data.\n\nWhich TWO mechanisms specifically address the encryption requirements for this pipeline? (Select TWO.)",
  options: [
    "HTTPS/TLS is enforced on all API calls to SageMaker and S3 endpoints — AWS services use TLS for all in-transit API communications by default, satisfying the in-transit encryption requirement",
    "Enabling Amazon VPC Flow Logs captures network traffic metadata between pipeline components, enabling encryption audit",
    "Configuring SageMaker training jobs and processing jobs to use inter-container traffic encryption encrypts data moving between distributed training instances using TLS",
    "Enabling AWS CloudTrail multi-region logging ensures that encryption events are captured across all regions",
    "Using S3 Intelligent-Tiering with server-side encryption encrypts data at rest in S3 while optimizing storage costs"
  ],
  correct: [0, 2],
  explanation: "TLS on API calls (A) addresses in-transit encryption for control plane and data plane communications with AWS services (S3 GetObject/PutObject, SageMaker API calls). AWS enforces HTTPS/TLS on service endpoints. For distributed SageMaker training (C), inter-container traffic encryption applies TLS to the network traffic between training instances in a distributed training cluster — data moving between nodes during model training is encrypted. This specifically addresses in-transit encryption within the compute environment. VPC Flow Logs capture metadata but don't enforce encryption. CloudTrail logs API events. S3 Intelligent-Tiering is a storage class feature — encryption at rest in S3 uses SSE-S3 or SSE-KMS, not Intelligent-Tiering which manages storage class transitions."
},

// ── D5 Q30 ─────────────────────────────────────────────────────
{
  id: 30, domain: 5, type: "single",
  text: "A company's AI security review requires them to classify their generative AI deployment into the correct scope of the Generative AI Security Scoping Matrix. The company has taken an open-source LLM, continued pre-training it on 500GB of proprietary manufacturing data, fine-tuned it on their internal processes, and deployed it on Amazon SageMaker.\n\nAccording to Maarek's coverage of this framework, which scope does this deployment represent?",
  options: [
    "Scope 1 — using a public consumer AI application where the company has minimal ownership",
    "Scope 3 — using a pre-trained base model from Bedrock with standard API access",
    "Scope 4 or 5 — the company has trained the model themselves using proprietary data, representing the highest level of customer ownership: responsible for training data governance, training infrastructure security, model artifact protection, and full deployment security stack",
    "Scope 2 — using an enterprise SaaS application with built-in GenAI features where AWS handles all security"
  ],
  correct: [2],
  explanation: "The Generative AI Security Scoping Matrix assigns ownership levels based on how much of the AI stack the customer controls. Scope 4/5 represents self-trained models where the customer owns: the training data (and its governance, privacy controls, and security), the training infrastructure, the model architecture decisions, all fine-tuning processes, deployment infrastructure, and the full application security stack. This company has: taken a base model, applied domain-specific continued pre-training on proprietary data, applied fine-tuning, and deployed on SageMaker — they own every layer. Scope 1 is consumer AI (ChatGPT). Scope 2 is enterprise SaaS with AI features. Scope 3 is using Bedrock base models via API. Each higher scope increases customer security responsibility."
}

];

export default questions;
