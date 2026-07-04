export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number; // index
  explain: string;
};

/** 3 MCQs per day. Indexed by dayId. */
export const QUIZZES: Record<string, QuizQuestion[]> = {
  "wk1-day1": [
    { q: "What is an LLM at its core?", options: ["A reasoning brain", "A next-token prediction engine", "A search index", "A rule engine"], answer: 1, explain: "LLMs predict the next token given prior context — everything else emerges from that." },
    { q: "The 'orchestrator mindset' means…", options: ["Writing more code yourself", "Directing cognitive labor across models & tools", "Fine-tuning every model", "Avoiding automation"], answer: 1, explain: "You compose models, tools, and workflows rather than write imperative code for every step." },
    { q: "Which is NOT typically a lever you control?", options: ["System prompt", "Context window contents", "Model weights at runtime", "Tool schemas"], answer: 2, explain: "You do not mutate weights at inference; you shape context, prompt, and tools." },
  ],
  "wk1-day2": [
    { q: "A system prompt primarily sets…", options: ["Temperature", "Identity, constraints, boundaries", "Token limits", "Model version"], answer: 1, explain: "Think of it as the immutable OS for the conversation." },
    { q: "Best place for a hard 'never do X' rule?", options: ["User turn", "System prompt", "Assistant prefill", "Tool description"], answer: 1, explain: "System prompt guardrails are the most durable across turns." },
    { q: "Role-based prompting works because…", options: ["Models roleplay literally", "It biases the distribution toward relevant patterns", "It changes the tokenizer", "It bypasses safety"], answer: 1, explain: "A persona shifts the probability mass toward on-role tokens." },
  ],
  "wk1-day3": [
    { q: "Why use XML tags in prompts?", options: ["They compress tokens", "They separate instructions from data unambiguously", "They enable tool calls", "They are required by the API"], answer: 1, explain: "Distinct tags remove ambiguity so the model treats data as data." },
    { q: "Which tag pair is a good scaffolding choice?", options: ["<html>", "<instructions>...</instructions>", "<div>", "<script>"], answer: 1, explain: "Semantic, task-relevant tag names help the model reason about roles." },
    { q: "XML tags help most when…", options: ["Prompts are short", "You mix rules + user-supplied text", "Only using function calling", "The model is fine-tuned"], answer: 1, explain: "Mixed content is where injection and confusion happen." },
  ],
  "wk1-day4": [
    { q: "Few-shot prompting means…", options: ["Training the model briefly", "Giving 3–5 in-context examples", "Reducing temperature", "Using a smaller model"], answer: 1, explain: "Examples inside the prompt steer output structure without fine-tuning." },
    { q: "Best examples are…", options: ["Random", "Representative and diverse", "All positive cases", "As long as possible"], answer: 1, explain: "Diversity teaches the pattern, not a single case." },
    { q: "Too many examples can…", options: ["Always help", "Inflate cost & context, cause overfit-to-format", "Break the API", "Change the model"], answer: 1, explain: "More isn't free — balance cost, latency, and generalization." },
  ],
  "wk1-day5": [
    { q: "Prompt caching is best applied to…", options: ["The user's last message", "Long static prefixes reused across calls", "The model's response", "The API key"], answer: 1, explain: "Cache stable prefixes; charge full price only for the deltas." },
    { q: "Main benefit of prompt caching?", options: ["Higher accuracy", "Lower latency & cost at scale", "Better safety", "Bigger context"], answer: 1, explain: "Caching amortizes tokenization/attention for the reused prefix." },
    { q: "You should NOT cache…", options: ["System prompts", "Long tool schemas", "Per-user private data across users", "Style guides"], answer: 2, explain: "Never share a cache across users when it contains private data." },
  ],
  "wk1-day6": [
    { q: "Prefilling the assistant turn does what?", options: ["Trains the model", "Forces output to start a certain way", "Adds a tool", "Changes temperature"], answer: 1, explain: "The model continues from the prefill, suppressing filler." },
    { q: "A good prefill to force JSON output starts with…", options: ["'Sure! Here is'", "'{'", "'```'", "'Answer:'"], answer: 1, explain: "Starting with '{' commits the completion to a JSON object." },
    { q: "Prefills are useful to…", options: ["Enforce format", "Skip greetings", "Steer tone", "All of the above"], answer: 3, explain: "All three are common uses of a prefill." },
  ],
  "wk1-day7": [
    { q: "A chatbot differs from an agent because…", options: ["Agents can't chat", "Agents run autonomous loops over time", "Agents are always faster", "Agents don't use LLMs"], answer: 1, explain: "Agents observe→reason→act asynchronously, not just reply." },
    { q: "Async agentic execution enables…", options: ["Instant answers only", "Long-running tasks across hours or days", "Cheaper models", "Local-only inference"], answer: 1, explain: "The loop can wait, retry, and resume without a human in the seat." },
    { q: "A trigger for an async agent is typically…", options: ["A keypress", "A webhook, email, or schedule", "A GPU", "A cookie"], answer: 1, explain: "External signals wake the agent to observe and act." },
  ],

  "wk2-day1": [
    { q: "Why prefer structured JSON over prose?", options: ["Looks nicer", "Downstream systems need exact keys", "Uses fewer tokens always", "The model is smarter with JSON"], answer: 1, explain: "Automation depends on deterministic keys, not paragraphs." },
    { q: "A common structured-output failure is…", options: ["Extra keys or missing fields", "Wrong font", "Too fast responses", "Model refusal"], answer: 0, explain: "Loose prompts yield drift; strict schemas fix it." },
    { q: "Best first defense against malformed JSON?", options: ["Retry blindly", "Constrain via schema/strict mode", "Increase temperature", "Ask the user"], answer: 1, explain: "Grammar constraints prevent bad output at inference time." },
  ],
  "wk2-day2": [
    { q: "output_config.format lets you…", options: ["Choose a font", "Constrain the model to a JSON schema", "Cache the prompt", "Pick a model"], answer: 1, explain: "Provider-side schema enforcement is the modern replacement for 'please return JSON'." },
    { q: "Schema-enforced output means…", options: ["Guaranteed semantic correctness", "Guaranteed syntactic validity vs schema", "No hallucinations", "Faster inference"], answer: 1, explain: "Fields will be right shape — but values still need validation." },
    { q: "You should still…", options: ["Skip validation", "Validate values (ranges, enums) in code", "Trust the model", "Disable retries"], answer: 1, explain: "Shape is not truth. Business rules still belong in code." },
  ],
  "wk2-day3": [
    { q: "strict: true on a tool means…", options: ["The tool is required", "Schema compiled into a grammar constraint", "Tool runs synchronously", "Model can't refuse"], answer: 1, explain: "Strict mode enforces the schema at token sampling time." },
    { q: "Strict mode helps prevent…", options: ["Cold starts", "Hallucinated keys or types", "Latency", "Rate limits"], answer: 1, explain: "The output cannot deviate from the declared schema." },
    { q: "Strict schemas should be…", options: ["Deeply nested", "Flat and specific", "Optional-heavy", "Open-ended"], answer: 1, explain: "Flat schemas compile smaller grammars and generate faster." },
  ],
  "wk2-day4": [
    { q: "Deeply nested optional fields cause…", options: ["Better accuracy", "Grammar explosion & instability", "Faster generation", "Lower cost"], answer: 1, explain: "State space explodes; providers may reject or degrade quality." },
    { q: "Preferred schema shape is…", options: ["One giant object", "Flat with explicit required lists", "Union types everywhere", "Arrays of anyOf"], answer: 1, explain: "Predictable required fields keep parsers and models happy." },
    { q: "When a schema gets complex, prefer…", options: ["Skip validation", "Split into multiple calls or steps", "Increase temperature", "Add examples only"], answer: 1, explain: "Decompose: extract, then transform, then validate." },
  ],
  "wk2-day5": [
    { q: "Why evaluate output consistency?", options: ["Vanity metrics", "Catch edge-case regressions before prod", "Reduce token cost", "Speed up model"], answer: 1, explain: "You cannot ship what you have not measured on realistic inputs." },
    { q: "Best eval starting point?", options: ["Random prompts", "A curated set of realistic + adversarial cases", "Model self-critique only", "Production traffic in real time"], answer: 1, explain: "Curated goldens make regressions visible." },
    { q: "Consistency issues often trace to…", options: ["Weather", "Prompt ambiguity + no schema", "TLS", "IPv6"], answer: 1, explain: "Fix the prompt/schema first, model second." },
  ],
  "wk2-day6": [
    { q: "Chaining prompts helps when…", options: ["Task is trivial", "Task has clearly separable phases (research → format)", "You want more randomness", "Latency doesn't matter"], answer: 1, explain: "Separation of concerns beats one megaprompt." },
    { q: "RAG stands for…", options: ["Random Answer Generator", "Retrieval-Augmented Generation", "Rate-Adjusted Grammar", "Really Awesome Graph"], answer: 1, explain: "You retrieve context and feed it to generation." },
    { q: "For long docs, chunking should…", options: ["Be one giant chunk", "Respect semantic boundaries + overlap", "Be random", "Be per byte"], answer: 1, explain: "Semantic chunks with overlap preserve context." },
  ],
  "wk2-day7": [
    { q: "'Formatting bleed' means…", options: ["Ink issues", "Prompt style leaking into output style", "API errors", "Tokenizer drift"], answer: 1, explain: "Casual prompts → casual outputs; disciplined prompts → disciplined outputs." },
    { q: "To get terse output, your prompt should be…", options: ["Chatty", "Terse and directive", "Emoji-filled", "In poetry"], answer: 1, explain: "Model mirrors the register of the prompt." },
    { q: "Steerability improves when you…", options: ["Add ambiguity", "Show + tell (rule + example)", "Use higher temperature", "Skip system prompt"], answer: 1, explain: "Combining rules with examples is strongest." },
  ],

  "wk3-day1": [
    { q: "A Claude Skill is essentially…", options: ["A model checkpoint", "A folder bundling instructions + assets", "A CLI tool", "A GPU driver"], answer: 1, explain: "Skills are portable domain expertise as files." },
    { q: "SKILL.md's purpose?", options: ["Landing page", "Entry-point instructions + metadata", "Test file", "Config only"], answer: 1, explain: "It's the manifest the agent loads first." },
    { q: "Skills package what?", options: ["Model weights", "Instructions, formats, and reference material", "Users", "API keys"], answer: 1, explain: "How-to knowledge, not credentials." },
  ],
  "wk3-day2": [
    { q: "Progressive disclosure means…", options: ["Loading everything up front", "Loading deeper detail only when relevant", "Hiding from user", "Streaming tokens"], answer: 1, explain: "Keep base context lean; pull details when triggered." },
    { q: "Three-tier loading typically goes…", options: ["Assets → refs → SKILL.md", "Metadata → SKILL.md → assets/refs", "Refs → assets → metadata", "Random"], answer: 1, explain: "Description first, main body next, referenced files on demand." },
    { q: "Progressive disclosure primarily saves…", options: ["Money & context tokens", "GPU cycles", "Disk", "Bandwidth"], answer: 0, explain: "Less irrelevant text in context = cheaper, sharper responses." },
  ],
  "wk3-day3": [
    { q: "YAML frontmatter's key job?", options: ["Styling", "Activation metadata (name, description)", "Auth", "Compression"], answer: 1, explain: "It tells the router when to load the skill." },
    { q: "A good description is…", options: ["Vague", "Trigger-rich, listing when to use", "One word", "A joke"], answer: 1, explain: "Triggers make the skill discoverable." },
    { q: "Skill names should be…", options: ["camelCase", "kebab-case, unique, descriptive", "UPPERCASE", "Emojis"], answer: 1, explain: "Kebab-case matches the ecosystem convention." },
  ],
  "wk3-day4": [
    { q: "SKILL.md main body should stay under about…", options: ["50 lines", "500 lines", "5000 lines", "No limit"], answer: 1, explain: "Compact instructions load reliably." },
    { q: "Include anti-patterns because…", options: ["Filler", "Preventing wrong behavior is as valuable as showing right behavior", "SEO", "Legal"], answer: 1, explain: "Negatives are underrated steering tools." },
    { q: "Best structure inside instructions?", options: ["A wall of text", "Numbered sequential steps", "Random order", "Just links"], answer: 1, explain: "Sequences are executable; prose is not." },
  ],
  "wk3-day5": [
    { q: "assets/ typically holds…", options: ["Executable code only", "Templates, schemas, fixtures the skill emits or fills", "User data", "Model weights"], answer: 1, explain: "Reusable content the agent hands out or fills in." },
    { q: "references/ typically holds…", options: ["Random notes", "Style guides, policies, domain knowledge to read", "Binary blobs", "Screenshots"], answer: 1, explain: "Docs the agent reads to inform behavior." },
    { q: "Loading a reference should be…", options: ["Always", "On-demand when trigger matches", "Never", "Manual by user"], answer: 1, explain: "Progressive disclosure again." },
  ],
  "wk3-day6": [
    { q: "Best way to manage skills over time?", options: ["Email attachments", "Version control (git)", "Copy-paste", "In-memory only"], answer: 1, explain: "Skills are code artifacts; treat them like code." },
    { q: "For a team, distribution via…", options: ["USB sticks", "A shared repo / registry", "Screenshots", "PDF"], answer: 1, explain: "Single source of truth, reviewable diffs." },
    { q: "Skill libraries should be…", options: ["One giant skill", "Small, composable, single-purpose", "Locked to one user", "Undocumented"], answer: 1, explain: "Composability beats monoliths." },
  ],
  "wk3-day7": [
    { q: "Skills describe…", options: ["Where data lives", "How to do a task", "Who executes", "When to trigger only"], answer: 1, explain: "Skills = how; Tools = where; Sub-Agents = who." },
    { q: "Tools are…", options: ["Instructions", "External systems/APIs the agent can call", "Prompts", "Users"], answer: 1, explain: "Tools access state outside the model." },
    { q: "Sub-agents are useful when…", options: ["Task fits one context", "You want isolated context / specialized loops", "You need less structure", "Latency doesn't matter at all"], answer: 1, explain: "Divide-and-conquer keeps each agent focused." },
  ],

  "wk4-day1": [
    { q: "Deterministic automation means…", options: ["LLM chooses next node", "Fixed branches based on rules", "Random routing", "No trigger"], answer: 1, explain: "If/else logic, not model choice." },
    { q: "Agentic routing lets…", options: ["The LLM decide the branch semantically", "The user always decide", "The CRON decide", "Nothing decide"], answer: 0, explain: "Model reads intent and picks the path." },
    { q: "Use agentic routing when…", options: ["Input is highly structured", "Input is fuzzy natural language", "You need audit-proof determinism", "You must avoid LLM costs"], answer: 1, explain: "Fuzziness is where models beat rules." },
  ],
  "wk4-day2": [
    { q: "An Agent node fuses…", options: ["Only prompts", "LLM + memory + tools in one orchestrator", "Only tools", "Only memory"], answer: 1, explain: "That triple is the anatomy of an agent." },
    { q: "Without tools, an agent is…", options: ["Still fully agentic", "Basically a chatbot", "A vector store", "A cron"], answer: 1, explain: "Without acting on the world, it just talks." },
    { q: "Memory in an agent node lets it…", options: ["Persist weights", "Recall prior turns / facts", "Skip inference", "Bypass tools"], answer: 1, explain: "Memory bridges turns and sessions." },
  ],
  "wk4-day3": [
    { q: "A webhook is…", options: ["A polling loop", "An HTTP endpoint that receives events", "A database", "A CRON"], answer: 1, explain: "External systems POST to it to wake your workflow." },
    { q: "Webhooks are the agent's…", options: ["Muscles", "Sensory input", "Memory", "Reasoning"], answer: 1, explain: "They're how the outside world says 'hey, act'." },
    { q: "First thing a webhook handler should do?", options: ["Reply 500", "Validate/authenticate the payload", "Delete data", "Restart"], answer: 1, explain: "Never trust unverified inbound traffic." },
  ],
  "wk4-day4": [
    { q: "n8n's $fromAI() lets the model…", options: ["Choose the tool", "Fill in a tool parameter from context", "Skip the tool", "Rename the tool"], answer: 1, explain: "The agent supplies the argument dynamically." },
    { q: "Signature is roughly…", options: ["$fromAI(name, description, type)", "$fromAI(value)", "$fromAI()", "$fromAI(type, value)"], answer: 0, explain: "Name + human description + expected type." },
    { q: "The description matters because…", options: ["It's decorative", "It steers extraction quality", "It changes cost", "It sets timeout"], answer: 1, explain: "The model reads it to decide what to extract." },
  ],
  "wk4-day5": [
    { q: "In Make.com, 'Return Output' from a sub-scenario…", options: ["Ends the whole run", "Passes structured data back to the caller", "Sends an email", "Nothing"], answer: 1, explain: "Sub-scenarios behave like function returns." },
    { q: "Structured returns matter because…", options: ["They look nice", "The parent orchestrator can act on typed data", "They save money", "They enable auth"], answer: 1, explain: "Downstream logic needs shape, not prose." },
    { q: "Sub-scenarios enable…", options: ["Spaghetti", "Reuse & separation of concerns", "Slower runs only", "Weaker security"], answer: 1, explain: "Modular workflows scale better." },
  ],
  "wk4-day6": [
    { q: "Why summarize memory over long sessions?", options: ["Prettier logs", "Keep context lean and within limits", "Save disk", "Legal"], answer: 1, explain: "Rolling summaries prevent context blow-up." },
    { q: "Simple Memory (n8n) is best for…", options: ["Cross-user recall", "Short-term chat continuity", "Long-term vector search", "Model training"], answer: 1, explain: "Buffer memory ≠ persistent DB." },
    { q: "For long-term recall, use…", options: ["More prompt tokens", "A vector store / database", "A bigger model", "Higher temperature"], answer: 1, explain: "Externalize memory to storage." },
  ],
  "wk4-day7": [
    { q: "Chat Trigger nodes are useful because…", options: ["Free XP", "They give a live debug UI for the agent loop", "They train models", "They cache prompts"], answer: 1, explain: "Test-drive the agent before wiring prod triggers." },
    { q: "In prod, replace Chat Trigger with…", options: ["Nothing", "Webhook / schedule / event trigger", "Manual runs", "Screenshots"], answer: 1, explain: "Real triggers drive real automation." },
    { q: "A good base interface exposes…", options: ["Only success", "Inputs, intermediate reasoning, and outputs", "Only tokens", "Only errors"], answer: 1, explain: "Observability is a first-class feature." },
  ],

  "wk5-day1": [
    { q: "The tool-use contract flows as…", options: ["User → tool → model", "Model emits tool_use → runtime executes → returns tool_result → model continues", "Model executes tools directly", "Tools call the model"], answer: 1, explain: "The runtime is the executor; the model just declares intent." },
    { q: "tool_use is emitted as…", options: ["Free text", "Structured JSON matching the tool schema", "A binary blob", "SQL"], answer: 1, explain: "Structured JSON is what enables reliable dispatch." },
    { q: "After tool_result the model…", options: ["Stops", "Continues reasoning with the new info", "Retries automatically forever", "Deletes context"], answer: 1, explain: "It integrates the result and decides the next step." },
  ],
  "wk5-day2": [
    { q: "Generic HTTP node lets you…", options: ["Only call built-in APIs", "Turn any REST API into an agent tool", "Skip auth", "Bypass rate limits"], answer: 1, explain: "Universal adapter for the whole web." },
    { q: "For each HTTP tool, define…", options: ["Only URL", "Method, URL, headers, params, response shape", "Just the body", "Just the name"], answer: 1, explain: "Full contract makes it usable." },
    { q: "Sensitive keys go in…", options: ["Prompt text", "Credentials/secret store", "Comments", "Filenames"], answer: 1, explain: "Never leak secrets to the LLM context." },
  ],
  "wk5-day3": [
    { q: "Tool description is critical because…", options: ["Aesthetics", "The model chooses tools using it", "Speed", "Auth"], answer: 1, explain: "Bad descriptions → wrong tool called → workflow fails." },
    { q: "Good descriptions include…", options: ["Vague verbs", "When to use, when NOT to use, inputs/outputs", "Just the tool name", "Emojis only"], answer: 1, explain: "Selection quality tracks description quality." },
    { q: "Overlapping tool descriptions cause…", options: ["Nothing", "Selection ambiguity and misroutes", "Faster inference", "Higher accuracy"], answer: 1, explain: "Make each tool's niche crystal clear." },
  ],
  "wk5-day4": [
    { q: "Return payload should be…", options: ["The full raw API response", "Trimmed, relevant fields only", "Base64", "XML always"], answer: 1, explain: "Noise burns context and confuses the model." },
    { q: "Large payloads risk…", options: ["Nothing", "Blowing context window & cost", "Faster runs", "Better memory"], answer: 1, explain: "Post-process before returning to the model." },
    { q: "Errors from a tool should be…", options: ["Swallowed", "Returned as a structured error the model can reason about", "Retried forever", "Ignored"], answer: 1, explain: "Let the LLM decide to retry, fallback, or ask." },
  ],
  "wk5-day5": [
    { q: "Human-in-the-loop gates are for…", options: ["Any read call", "Destructive or high-stakes actions", "Speeding up runs", "Free tier only"], answer: 1, explain: "Confirm before you send money, delete data, or email customers." },
    { q: "A good approval UX includes…", options: ["Only 'yes'", "Context of the action + accept/reject + reason", "Nothing", "Auto-approve"], answer: 1, explain: "Reviewers need enough context to say yes safely." },
    { q: "Approvals should be logged because…", options: ["Vanity", "Auditability & post-mortems", "Storage tax", "SEO"], answer: 1, explain: "Traces are gold when things go wrong." },
  ],
  "wk5-day6": [
    { q: "Best fallback on tool error?", options: ["Crash", "Return the error to the LLM for self-correction", "Retry infinitely", "Silently succeed"], answer: 1, explain: "The model can pick another tool or ask for input." },
    { q: "Bound retries with…", options: ["Nothing", "Max attempts + backoff", "Only backoff", "Only attempts"], answer: 1, explain: "Prevent thundering herds & billing surprises." },
    { q: "For repeated failures, do…", options: ["Keep looping", "Escalate to human review", "Delete the workflow", "Ignore"], answer: 1, explain: "Loops without exits become incidents." },
  ],
  "wk5-day7": [
    { q: "Cheapest way to control cost?", options: ["Bigger model", "Route simple steps to a cheap model, complex to a strong one", "Always max tokens", "Disable caching"], answer: 1, explain: "Model routing is the highest-leverage lever." },
    { q: "Latency drops when you…", options: ["Chain more calls", "Cache prefixes, trim context, parallelize independent steps", "Increase temperature", "Add tools"], answer: 1, explain: "All three are proven latency wins." },
    { q: "Runaway loops are prevented by…", options: ["Faith", "Step limits + termination conditions", "Bigger context", "Better vibes"], answer: 1, explain: "Every loop needs a stop." },
  ],

  "wk6-day1": [
    { q: "Supervisor-Worker pattern means…", options: ["One big prompt", "A router agent delegates to specialized workers", "No agents", "Random routing"], answer: 1, explain: "Divide-and-conquer keeps each worker sharp." },
    { q: "Workers should be…", options: ["Generalists", "Narrow & focused", "Idle", "Duplicates"], answer: 1, explain: "Specialization beats sprawl." },
    { q: "The Supervisor's core job?", options: ["Do everything", "Decompose, route, synthesize", "Chat", "Cache"], answer: 1, explain: "Plan → dispatch → assemble." },
  ],
  "wk6-day2": [
    { q: "Reflection means…", options: ["Meditation", "A second pass that critiques the first output", "Deleting context", "Streaming"], answer: 1, explain: "Verifier catches issues before shipping." },
    { q: "Verifier compares output against…", options: ["Nothing", "A rubric or checklist", "Weather data", "GPU temps"], answer: 1, explain: "Explicit criteria make critique consistent." },
    { q: "Verifier's output should be…", options: ["Prose", "Structured status + notes so router can act", "Random", "Silence"], answer: 1, explain: "Machine-parseable enables auto-loop or ship." },
  ],
  "wk6-day3": [
    { q: "Call Workflow / Call Scenario nodes turn…", options: ["Users into agents", "Whole workflows into callable tools", "Prompts into memory", "Tools into prompts"], answer: 1, explain: "Sub-workflows compose like functions." },
    { q: "This enables…", options: ["Nothing", "Reuse & sub-agent orchestration", "Higher cost only", "Weaker isolation"], answer: 1, explain: "Modularity at the workflow layer." },
    { q: "Good boundary for a sub-workflow?", options: ["One-off logic", "Repeated, well-defined capability", "Debug prints", "Just triggers"], answer: 1, explain: "Extract what recurs and has a clean contract." },
  ],
  "wk6-day4": [
    { q: "Vector stores enable…", options: ["Faster tokens", "Semantic recall across sessions", "Model training", "Auth"], answer: 1, explain: "Embed → store → retrieve by meaning." },
    { q: "Key choice for embeddings?", options: ["Model + chunking strategy", "Font", "Color palette", "Region"], answer: 0, explain: "Both drive recall quality." },
    { q: "Retrieval feeds into…", options: ["The user's screen only", "The prompt as grounded context", "The database schema", "The GPU"], answer: 1, explain: "That's RAG at its core." },
  ],
  "wk6-day5": [
    { q: "Observability means…", options: ["Watching the UI", "Tracing reasoning, tool calls, and errors", "Screenshots", "Logs off"], answer: 1, explain: "You can't debug what you can't see." },
    { q: "Trace at minimum…", options: ["Nothing", "Inputs, prompts, tool I/O, outputs, timings", "Only errors", "Only success"], answer: 1, explain: "End-to-end visibility catches drift." },
    { q: "Good logs are…", options: ["Free-form prose", "Structured, sampled, and searchable", "Binary", "Ephemeral"], answer: 1, explain: "Structure enables querying and dashboards." },
  ],
  "wk6-day6": [
    { q: "Capstone pattern for zero-touch orchestration?", options: ["Webhook → Supervisor → Workers → Verifier → System of record", "Cron only", "Manual clicks", "Static site"], answer: 0, explain: "That's the reference architecture for autonomous flows." },
    { q: "Where does the Verifier sit?", options: ["Before the Supervisor", "Between Workers and system of record", "Only in dev", "Never"], answer: 1, explain: "It gates writes with reflection." },
    { q: "System of record could be…", options: ["Only Slack", "CRM, DB, ticketing, whatever owns state", "Only the LLM", "Only email"], answer: 1, explain: "Any authoritative store your business uses." },
  ],
  "wk6-day7": [
    { q: "Prod deployment must include…", options: ["Only prompts", "Fallbacks, rate limits, observability, alerts", "Just the model", "Just tools"], answer: 1, explain: "Reliability is a stack, not one feature." },
    { q: "Skill maintenance means…", options: ["Set and forget", "Version, test, and update as the world changes", "Delete monthly", "Ignore"], answer: 1, explain: "Skills drift as APIs and policies change." },
    { q: "Scaling agents requires…", options: ["Hope", "Concurrency limits, queues, and cost caps", "Bigger prompts", "Fewer tools"], answer: 1, explain: "Guardrails prevent runaway spend and outages." },
  ],
};

export function quizFor(dayId: string): QuizQuestion[] {
  return QUIZZES[dayId] ?? [];
}