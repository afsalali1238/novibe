export type ClusterId = "A" | "B" | "C" | "D" | "E" | "F";

export type NodeContent = {
  id: string;
  cluster: ClusterId;
  title: string;
  buildsOn: string[];
  layer0: string;
  layer1: string;
  layer2: string;
  diagram?: string; // raw inline SVG markup, rendered directly on node page
  videoUrl?: string; // optional external explainer link
  videoTitle?: string; // short label for the video link
};

export type Cluster = {
  id: ClusterId;
  title: string;
  subtitle: string;
};

export const CLUSTERS: Cluster[] = [
  { id: "A", title: "Ground Floor", subtitle: "What AI actually is" },
  { id: "B", title: "Talking to Models", subtitle: "Prompting mechanics" },
  { id: "C", title: "How Products Get Built", subtitle: "RAG, evals, APIs" },
  { id: "D", title: "Tools Landscape", subtitle: "Claude, n8n, Cursor" },
  { id: "E", title: "Agents & Automation", subtitle: "Loops, tools, memory" },
  { id: "F", title: "Business / Advisory", subtitle: "Buy, build, evaluate" },
];

export const NODES: NodeContent[] = [
  {
    id: "a1",
    cluster: "A",
    title: "What is AI, ML, and an LLM — really",
    buildsOn: [],
    layer0:
      "AI is the broad idea of machines doing tasks that normally need human judgement. Machine Learning is one way to build AI — instead of writing rules by hand, you show a system millions of examples and it learns the pattern itself. A Large Language Model (LLM) is a specific kind of ML system trained on huge amounts of text, whose only job is: given some text, predict what text comes next. That's it. Everything else — chatting, coding, reasoning — is that one skill used cleverly.",
    layer1:
      "During training, the model reads enormous amounts of text and adjusts billions of internal numbers (parameters) so that its next-word predictions get statistically closer to real text. It never \"understands\" in a human sense — it's compressed statistical structure over language. At inference (when you chat with it), those learned weights are frozen; the model just runs prediction, one token at a time, using whatever text is in front of it (the prompt) as its only source of \"memory.\"",
    layer2:
      "Open Claude or ChatGPT. Type one word, then keep hitting \"continue\" or asking \"what's the next most likely word\" mentally before reading the actual output. Notice: it's not \"thinking\" ahead — it's building the response piece by piece. Try asking it to write a sentence and then ask it \"why did you choose that specific next word\" — see how it explains its own pattern-following.",
  },
  {
    id: "a2",
    cluster: "A",
    title: "Tokens & parameters — the two numbers that matter",
    buildsOn: ["a1"],
    layer0:
      "A \"token\" is a chunk of text the model reads or writes — roughly ¾ of a word in English. \"Parameters\" are the model's internal dials — the things learned during training. More parameters generally means more capacity to capture patterns (and more cost/slowness). When people say \"70B model\" or \"trillion parameter model,\" that's the dial count.",
    layer1:
      "Text gets broken into tokens by a tokenizer before it ever reaches the model — \"unbelievable\" might become \"un\" + \"believ\" + \"able.\" The model's context window is measured in tokens, not words or characters, which is why long documents \"cost\" more and can hit limits. Parameters are the weights in the neural network; they don't map to specific facts or concepts you could point to — knowledge is distributed across all of them.",
    layer2:
      "Go to any tokenizer tool (search \"OpenAI tokenizer\" or use Anthropic's docs) and paste a paragraph of your own writing. Count how many tokens vs. words it produces. Then paste something in Arabic or another non-English language and compare the token count for the same amount of meaning — notice non-English text often costs more tokens.",
  },
  {
    id: "a3",
    cluster: "A",
    title: "Training vs. inference",
    buildsOn: ["a1"],
    layer0:
      "Training is the one-time (expensive, slow) process of teaching the model by showing it data and adjusting its parameters. Inference is every single time you actually use the model — fast, and it doesn't change the model at all. Nothing you type to Claude or ChatGPT teaches it anything permanent; your conversation just disappears from its \"brain\" the moment it ends (unless a product layer saves and re-feeds it, which is a separate thing).",
    layer1:
      "Training happens in massive data-center runs, often months long, producing a frozen set of weights that then gets deployed as \"the model\" (e.g. Claude Sonnet 5). Every time you send a message, that's a fresh inference call — the model reads your whole conversation as input text again from scratch, predicts a response, and forgets. This is why \"memory\" features in AI apps are really just re-inserting your past messages into the prompt every time, not the model actually learning.",
    layer2:
      "Have a long conversation with Claude about a fact you invented (e.g. \"my dog's name is Ziggy\"). Start a brand new chat and ask \"what's my dog's name?\" It won't know — proving the model itself didn't learn anything; the previous chat's context simply isn't there anymore.",
  },
  {
    id: "a4",
    cluster: "A",
    title: "The context window",
    buildsOn: ["a2", "a3"],
    layer0:
      "The context window is the total amount of text (measured in tokens) the model can \"see\" at once — your entire conversation, any documents you've attached, and its own response, all counted together. Once you go over the limit, the oldest parts get cut or the request fails. Bigger context window = the model can consider more information at once, but it doesn't mean better reasoning.",
    layer1:
      "Context windows range from tens of thousands to over a million tokens depending on the model. Everything inside it competes for the model's attention — very long contexts can cause the model to \"lose track\" of details buried in the middle (sometimes called the \"lost in the middle\" effect). This is why good prompt engineering often means putting critical instructions at the start or end, not buried in a wall of text.",
    layer2:
      "Paste a long document into Claude (5,000+ words) along with one specific instruction buried in the middle of it, and one at the very end. Ask a question that requires both. Notice which one it follows more reliably — a live demonstration of context window behavior.",
  },
  {
    id: "a5",
    cluster: "A",
    title: "Why models \"hallucinate\"",
    buildsOn: ["a1", "a3"],
    layer0:
      "A hallucination is when the model confidently states something false — a fake statistic, a book that doesn't exist, a wrong date. This happens because the model isn't looking anything up by default; it's generating the statistically most-likely next words based on patterns in its training data, and sometimes the most \"plausible-sounding\" answer just isn't true.",
    layer1:
      "The model has no built-in fact-checking step — it doesn't distinguish between \"I recall this precisely\" and \"this pattern feels right.\" Hallucination rates go up with obscure facts, exact numbers, quotes, and citations — anything requiring precision rather than pattern completion. This is exactly why tools like web search or RAG (Cluster C) exist: to give the model real, current text to ground its answer in, instead of relying purely on memorized patterns.",
    layer2:
      "Ask Claude or ChatGPT (without web search enabled) for \"the exact publication date and page number of a specific quote\" from an obscure book. Then ask it to search the web for the same thing. Compare confidence and accuracy — a direct feel for grounded vs. ungrounded answers.",
  },
  {
    id: "b1",
    cluster: "B",
    title: "Prompting fundamentals",
    buildsOn: ["a1"],
    layer0:
      "A prompt is just the input you give the model. The clearer and more specific it is, the better the output — because the model is pattern-matching to your exact wording, not reading your mind. Vague prompt → vague, generic answer. Specific prompt (what, for whom, in what format, how long) → sharp, usable answer.",
    layer1:
      "Effective prompts usually specify: the task, the context/audience, the format of the output, and any constraints (length, tone, things to avoid). The model treats all of this as \"more pattern to match\" — so specificity narrows the space of plausible next-tokens toward what you actually want.",
    layer2:
      "Take one task you do for Kasper (e.g. drafting an operator outreach message). Write it two ways: (1) \"write an outreach message\" and (2) a fully specified version with audience, tone, length, and one example of good vs bad. Compare the two outputs side by side.",
  },
  {
    id: "b2",
    cluster: "B",
    title: "System prompts",
    buildsOn: ["b1"],
    layer0:
      "A system prompt is a special instruction set given to the model before the conversation starts — it defines the model's role, rules, and boundaries for the whole session, and usually takes priority over what the user says afterward. Think of it as the \"job description\" the model reads before you ever say a word.",
    layer1:
      "In apps built on the API, developers set the system prompt invisibly; the end user never sees or edits it. It's used to lock in persona, tone, safety rules, and constraints that should hold no matter what a user types. This is the mechanism behind \"Claude will always speak formally\" or \"this bot will never discuss competitor pricing\" behaviors you see in production AI products.",
    layer2:
      "In Claude's API or console (or even by prefacing a chat message with \"For this entire conversation, act as X and never do Y\"), set a strict role, then try to get the model to break it with a normal user message. Notice how much more it resists compared to no system prompt at all.",
  },
  {
    id: "b3",
    cluster: "B",
    title: "Few-shot examples",
    buildsOn: ["b1"],
    layer0:
      "Few-shot prompting means showing the model 2-5 examples of exactly the input/output pattern you want, instead of just describing it. Models are much better at copying a demonstrated pattern than following an abstract description — \"show, don't tell\" applied to AI.",
    layer1:
      "This works because the model is a pattern-completer at its core — giving it several input→output pairs strongly conditions what \"the next output\" should look like, often more reliably than lengthy instructions. It's especially powerful for consistent formatting, tone-matching, or classification tasks where the \"shape\" of the output matters more than creative variation.",
    layer2:
      "Ask the model to write a one-line product description with no examples first. Then give it 3 examples of the exact style/length you want and ask for a 4th. Compare consistency.",
  },
  {
    id: "b4",
    cluster: "B",
    title: "Structured output (XML / JSON)",
    buildsOn: ["b1", "b2"],
    layer0:
      "Instead of getting a free-flowing paragraph back, you can ask the model to format its response in a strict structure like JSON (for code/apps to read) or XML tags (to clearly separate different parts of a long prompt or response). This turns messy natural language into something a program can reliably parse.",
    layer1:
      "XML tags are especially useful inside prompts themselves — wrapping instructions, examples, and data in distinct tags (e.g. <instructions>, <document>) removes ambiguity about which part of a huge prompt is \"the rule\" vs. \"the content to act on.\" JSON output is used when the model's response needs to plug directly into other software — an app can't safely parse a conversational paragraph, but it can parse a JSON object with fixed fields.",
    layer2:
      "Ask Claude to output a movie recommendation as a JSON object with fields \"title,\" \"genre,\" \"one_line_reason.\" Then try asking without specifying a format and see how much messier and harder-to-reuse the plain-text version is.",
  },
  {
    id: "b5",
    cluster: "B",
    title: "Prompt caching & cost basics",
    buildsOn: ["b2", "a2"],
    layer0:
      "Every word (token) you send to and receive from a model costs money and time, roughly proportional to length. Prompt caching is a trick where a long, unchanging part of your prompt (like a big system prompt or document) gets \"remembered\" cheaply by the provider for repeated calls, instead of being fully reprocessed (and repaid for) every single time.",
    layer1:
      "This matters at the product-building level, not casual chat use — if you're building an app that sends the same 5,000-word system prompt with every single user message, caching that static prefix can cut cost and latency dramatically at volume. It's a lever specifically for people building AI products/agents, not something an individual chatting occasionally needs to think about.",
    layer2:
      "No hands-on task needed here — this is a \"know it exists\" node for when you're evaluating or building a product. Case in point: if you ever price out an AI feature for Kasper's platform, ask whichever provider/dev you're working with whether prompt caching is being used for the static parts of the prompt — it directly affects your running cost.",
  },
  {
    id: "c1",
    cluster: "C",
    title: "RAG (Retrieval-Augmented Generation)",
    buildsOn: ["a5"],
    layer0:
      "RAG is how you give a model access to your specific, current information instead of relying on what it memorized during training. The system first searches (retrieves) relevant chunks of your documents/data, then hands those chunks to the model along with your question, so it answers grounded in real material instead of guessing.",
    layer1:
      "Practically: your documents get broken into chunks, converted into \"embeddings\" (see C5), and stored in a searchable index. When you ask a question, the system finds the most relevant chunks, stuffs them into the prompt as context, and the model generates an answer using that inserted text. This is the core mechanism behind \"chat with your PDF\" tools and most internal company AI assistants.",
    layer2:
      "Case example: think about ProvaCV or AfzalOS — any tool where an AI needs to answer using specific documents (a CV, a vault of notes) rather than general knowledge is a RAG-shaped problem, even if it's built simply.",
  },
  {
    id: "c2",
    cluster: "C",
    title: "Fine-tuning vs. prompting",
    buildsOn: ["a3", "b1"],
    layer0:
      "Fine-tuning means actually retraining a model further on your own examples, permanently changing its weights. Prompting means just giving good instructions/context at inference time without touching the model at all. For almost all product needs today, good prompting (plus RAG) beats fine-tuning — it's cheaper, faster to iterate, and doesn't require ML infrastructure.",
    layer1:
      "Fine-tuning makes sense in narrow cases: you need a very specific consistent style/format at massive scale, you have thousands of high-quality labeled examples, and prompting genuinely can't achieve the consistency you need. It's expensive, slower to iterate (need to retrain to change behavior), and not reversible the way editing a prompt is. Most companies people assume are \"fine-tuning\" are actually just prompting well with RAG.",
    layer2:
      "Advisory exercise: next time you hear a startup claim \"we fine-tuned our own model,\" ask (mentally or literally) whether prompting + RAG could have achieved the same result cheaper — this is a genuinely useful skeptical instinct for evaluating AI product claims.",
  },
  {
    id: "c3",
    cluster: "C",
    title: "Evals — how AI quality gets measured",
    buildsOn: ["a5", "c1"],
    layer0:
      "An \"eval\" is a test set used to measure whether an AI system is actually good at its job — a fixed set of example inputs with known correct (or graded) outputs, run automatically to score a model or prompt. Without evals, teams are just \"vibes-checking\" outputs, which doesn't scale and hides regressions.",
    layer1:
      "Good evals matter more than picking the \"best\" model, because model quality varies wildly by task — a model great at coding might be mediocre at your specific classification task. Serious AI teams build a private eval set from real examples of their use case, then measure any prompt/model change against it before shipping, the same way software teams use test suites.",
    layer2:
      "Advisory case: if you're ever hiring someone to build an AI feature, one strong question is \"how will we know if this is actually working well, beyond it looking fine in a demo?\" — the answer should involve some form of eval set, not just \"we tried it and it seemed good.\"",
  },
  {
    id: "c4",
    cluster: "C",
    title: "APIs — how apps actually call models",
    buildsOn: ["a3"],
    layer0:
      "An API (Application Programming Interface) is how software talks to the model directly, instead of a human typing into a chat window. When an app \"uses AI,\" it's almost always sending a request to a model's API behind the scenes and getting a response back to display or act on.",
    layer1:
      "Every API call is a fresh, stateless request (see A3) — the app itself is responsible for storing conversation history and re-sending it each time to fake \"memory.\" This is exactly the layer you already work in when building things like Kasper Trips or ProvaCV — the model call is just one component in a larger app doing auth, storage, and UI around it.",
    layer2:
      "Skip the hands-on task — you already do this. Instead: the next time you're specifying a feature to a dev (or reviewing a quote), notice whether they talk about \"which model/API and what it costs per call\" — that's a sign they actually understand the layer, not just gluing a chatbot widget on top.",
  },
  {
    id: "c5",
    cluster: "C",
    title: "Embeddings — the math of meaning",
    buildsOn: ["a2", "c1"],
    layer0:
      "An embedding is a way of converting text into a list of numbers that captures its meaning, so that similar meanings end up as similar numbers — even if the actual words are totally different. This is what lets a search system find \"vehicle maintenance costs\" as relevant to a query about \"truck repair expenses,\" despite no shared words.",
    layer1:
      "Text gets passed through an embedding model, producing a vector (a long list of numbers) representing its position in a huge \"meaning space.\" Searching then becomes a math problem: find the stored vectors closest to your query's vector. This is the retrieval half of RAG (C1) and the core of any \"semantic search\" feature.",
    layer2:
      "No task needed to grasp this conceptually — but if curious, search \"embedding projector visualization\" to see an actual 3D map of words/sentences clustered by meaning; seeing similar concepts cluster together makes the idea concrete fast.",
  },
  {
    id: "d1",
    cluster: "D",
    title: "Claude vs. GPT vs. Gemini — real differences",
    buildsOn: ["a1"],
    layer0:
      "These are competing LLM providers (Anthropic, OpenAI, Google) — not fundamentally different technology, but different training approaches, strengths, pricing, and product ecosystems. For most everyday tasks, differences are smaller than marketing suggests; for specific tasks (coding, long documents, agentic tool use), real gaps exist and change often as each releases new versions.",
    layer1:
      "Anthropic (Claude) has generally been strong on careful reasoning, longer context handling, and safety-conscious behavior; OpenAI (GPT/ChatGPT) has the broadest ecosystem and plugin/tool integrations; Google (Gemini) integrates tightly with Google's own data/products and offers very large context windows. These positions shift with every release, so \"which is best\" is a moving target, not a fixed fact.",
    layer2:
      "Run the exact same real task (e.g. an actual Kasper document draft) through Claude, ChatGPT, and Gemini and compare outputs side by side — the fastest way to form your own informed opinion instead of repeating marketing claims.",
  },
  {
    id: "d2",
    cluster: "D",
    title: "No-code automation: n8n, Make, Zapier",
    buildsOn: ["c4"],
    layer0:
      "These are visual, drag-and-drop tools for connecting apps and AI models together into automated workflows — \"when X happens in Gmail, send the text to Claude, then post the result to Slack\" — without writing code. They're the glue layer between AI models and the rest of your business tools.",
    layer1:
      "n8n and Make are more flexible/powerful (support branching logic, loops, self-hosting for n8n) and popular for building \"agentic\" workflows; Zapier is simpler and more mainstream but less flexible for complex logic. Each node in these tools is usually either an app action (send email, add row) or an AI call (classify, summarize, generate) — meaning everything from Cluster B (prompting) applies directly inside these tools.",
    layer2:
      "Build one tiny real workflow: a new email in a specific label triggers an AI call that classifies it, and the result gets logged to a Google Sheet. Even a 3-node workflow makes the \"automation glue\" concept concrete.",
  },
  {
    id: "d3",
    cluster: "D",
    title: "Coding copilots: Cursor, Claude Code",
    buildsOn: ["a1"],
    layer0:
      "These are AI tools built specifically for writing and editing code — instead of a general chat window, they work directly inside your codebase, can read your files, and can make edits or run commands for you, with you approving or guiding the changes.",
    layer1:
      "Cursor is an AI-native code editor (a modified VS Code) where you chat with AI that has full context of your open project. Claude Code is a command-line/agentic tool that can autonomously read files, write code, run tests, and iterate — closer to \"delegate a coding task\" than \"autocomplete.\" Both are dramatically changing how fast solo builders (like you, with Kasper Trips) can ship.",
    layer2:
      "You already have real experience here (Kasper Trips, ProvaCV) — the useful exercise is comparing: what did you delegate fully vs. review carefully? That distinction (autonomy level) previews Cluster E's \"agent loop\" concept directly.",
  },
  {
    id: "d4",
    cluster: "D",
    title: "Vector databases & embedding tools",
    buildsOn: ["c5"],
    layer0:
      "A vector database is specialized storage built to hold embeddings (C5) and search through them by \"closeness of meaning\" instead of exact keyword match. It's the practical infrastructure piece that makes RAG (C1) actually work at scale.",
    layer1:
      "Popular options range from fully-managed (Pinecone) to open-source/self-hosted (Chroma, Weaviate) to \"bolt-on\" features inside existing databases (Supabase's pgvector, which you've already used). Choosing one is mostly about scale, hosting preference, and whether you want it bundled with a database you already run.",
    layer2:
      "Advisory-only node — if a dev ever proposes \"we'll build a RAG feature,\" ask what vector store they're planning to use and why; a vague answer is a signal of inexperience with this layer.",
  },
  {
    id: "d5",
    cluster: "D",
    title: "Open-source models — when they actually matter",
    buildsOn: ["a2", "d1"],
    layer0:
      "Open-source (or \"open-weight\") models are ones whose parameters are publicly downloadable, letting anyone run them on their own hardware instead of calling a company's API. They matter for privacy-sensitive use cases, cost control at huge scale, or full customization — not usually for quality, since top closed models are typically still ahead.",
    layer1:
      "Running an open model yourself means you own infrastructure costs (GPUs, hosting) and lose the \"it just works\" reliability of a managed API — a real tradeoff, not a free lunch. Companies choose open-source mainly for data sovereignty (nothing leaves their servers), predictable fixed cost at extreme scale, or the ability to fine-tune deeply for a narrow task.",
    layer2:
      "Advisory case: if a healthcare-AI conversation ever raises \"patient data can't leave our servers,\" that's exactly the scenario where open-source/self-hosted becomes the right call over a closed API — a good real test of whether you can apply this distinction correctly.",
  },
  {
    id: "e1",
    cluster: "E",
    title: "What actually makes something an \"agent\"",
    buildsOn: ["a1", "b1"],
    layer0:
      "A chatbot answers one message at a time and stops. An \"agent\" is a system that can take multiple steps on its own toward a goal — deciding what to do next, using tools, and continuing without a human approving every single step. The word gets used loosely in marketing; the real test is: does it make its own next-step decisions, or is a human choosing every action?",
    layer1:
      "Agentic systems typically run a loop: observe the current state → decide an action (possibly using a tool) → take the action → observe the result → repeat, until a goal is met or a limit is hit. The \"intelligence\" isn't one big magic model — it's the same LLM being called repeatedly in a loop with tools and memory wired around it (this is the \"orchestrator mindset\" — and it's exactly correct).",
    layer2:
      "Take something you already automated manually in n8n/Make and ask: at which step did you make the decision vs. the AI? Relabeling your own workflow this way is the fastest way to see the human/agent line clearly.",
  },
  {
    id: "e2",
    cluster: "E",
    title: "Tool use / function calling",
    buildsOn: ["b4", "e1"],
    layer0:
      "Tool use (or \"function calling\") is how a model does things beyond just generating text — like searching the web, running code, or calling an API — by outputting a structured request (\"call this tool with these inputs\"), which the surrounding software then actually executes and feeds the result back in.",
    layer1:
      "The model itself never directly \"does\" anything — it only ever outputs text/structured data. When it \"uses a tool,\" it's really outputting something like a JSON block saying \"call weather_api with city=Dubai,\" and the application code intercepts that, actually calls the real API, and returns the result to the model as new context for its next response. This is the exact mechanism behind every AI tool you've used in this very conversation.",
    layer2:
      "Ask Claude \"what's the weather in Dubai right now\" — you're watching tool use happen live. Notice the model doesn't know this from training; it had to decide to call a tool, and that tool's real result got fed back in before the final answer.",
  },
  {
    id: "e3",
    cluster: "E",
    title: "Memory — short-term vs. long-term",
    buildsOn: ["a3", "a4"],
    layer0:
      "\"Memory\" in AI products isn't the model learning — it's engineering. Short-term memory is just re-sending the recent conversation each time (limited by the context window, A4). Long-term memory is a separate system that saves facts about you somewhere (a database) and selectively re-inserts relevant bits into future prompts — which is exactly how the memory you're experiencing in this very conversation works.",
    layer1:
      "Building real long-term memory means deciding: what gets saved, how it gets retrieved (often via embeddings/RAG, C1/C5), and how much gets re-injected without blowing the context window. Badly designed memory either forgets things that matter or stuffs in irrelevant details that confuse the model — a real design problem, not a solved default.",
    layer2:
      "Notice, right now, that this conversation \"knows\" things about your work at Kasper from before — that's long-term memory in action: facts stored elsewhere, silently re-inserted into context, not the model recalling on its own.",
  },
  {
    id: "e4",
    cluster: "E",
    title: "The agent loop & autonomy levels",
    buildsOn: ["e1", "e2", "e3"],
    layer0:
      "Not all agents are equally autonomous. There's a spectrum: (1) human approves every single step, (2) human sets a goal and checks in periodically, (3) fully autonomous — runs for hours/days with no check-in, only reporting at the end. Higher autonomy is riskier (harder to catch mistakes) but more valuable for tedious multi-step work.",
    layer1:
      "Real agent systems need guardrails proportional to their autonomy level: logging every action, limits on what tools it can call, and often a \"human approval\" gate before any irreversible action (sending an email, spending money). This is the exact reasoning behind why Claude itself asks you for confirmation before sending emails or making purchases on your behalf — autonomy and safety are a direct tradeoff.",
    layer2:
      "Design (on paper, no build needed) an autonomy ladder for one real Kasper task — e.g. \"operator onboarding follow-up\": what would level-1 (approve every message) vs. level-3 (fully autonomous) look like, and where would you personally draw the line?",
  },
  {
    id: "e5",
    cluster: "E",
    title: "Orchestration — chaining AI calls",
    buildsOn: ["e1", "e2"],
    layer0:
      "Complex AI systems rarely use one giant prompt for everything — they break a task into smaller steps, each handled by a separate, narrower AI call, with the output of one step feeding into the next. Decomposition is the core orchestrator skill.",
    layer1:
      "Chaining smaller, verifiable jobs (classify → extract → draft, for example) is more reliable than one massive prompt trying to do everything at once, because each step is easier to check, debug, and improve independently. This is the actual mental model behind everything you already build — Kasper Trips, ProvaCV, your Claude skills library — even when it doesn't look like \"AI agents\" on the surface.",
    layer2:
      "Take one of your own multi-step Claude skills (e.g. cv-tailoring) and map it explicitly as a chain: what's step 1's exact input/output, what feeds into step 2, etc. You'll likely find you've been orchestrating without naming it as such.",
  },
  {
    id: "f1",
    cluster: "F",
    title: "Build vs. buy vs. fine-tune",
    buildsOn: ["c2", "d5"],
    layer0:
      "When a company needs an AI capability, there are three broad paths: buy an existing tool/product, build a custom app on top of an existing model's API (prompting + maybe RAG), or fine-tune/train something bespoke. Most real business problems are solved with the middle option — bespoke fine-tuning is rare and usually unnecessary.",
    layer1:
      "The decision usually comes down to: how differentiated does this capability need to be (generic tools are fine for generic problems), how much data/control do you need over the exact behavior, and what's the cost of being wrong (a bought tool is easy to abandon; a fine-tuned model is a sunk investment). This exact framework applies directly to Kasper's GPS-as-a-Service build-vs-vendor decisions you've already been working through.",
    layer2:
      "Take one open decision from your actual Kasper GPS work (e.g. Wialon/Navixy vs. custom build) and explicitly run it through this three-way framework — you'll likely find you've already been reasoning this way intuitively.",
  },
  {
    id: "f2",
    cluster: "F",
    title: "Cost & latency tradeoffs",
    buildsOn: ["a2", "b5"],
    layer0:
      "Every AI feature has two practical costs: money (roughly proportional to tokens in/out) and time (latency — how long a response takes). Bigger/smarter models are usually slower and pricier; smaller/faster models are cheaper but less capable. Product decisions constantly trade these off — you don't always need the smartest model for every task.",
    layer1:
      "A common real pattern: use a small, cheap, fast model for simple tasks (classification, extraction) and reserve the expensive, slow, capable model only for the hard reasoning step — exactly mirroring the \"orchestration\" idea (E5). Latency also compounds in agent loops — five sequential model calls each taking 2 seconds is a 10-second wait, which matters hugely for user-facing products vs. background jobs.",
    layer2:
      "Advisory exercise: for any AI feature proposal (yours or a vendor's), ask \"which parts genuinely need the most capable model, and which are simple enough for something cheaper and faster?\" — a question that immediately signals sophistication in a vendor conversation.",
  },
  {
    id: "f3",
    cluster: "F",
    title: "Where AI actually fails in production",
    buildsOn: ["a5", "c3"],
    layer0:
      "Demos are misleading — an AI feature that looks flawless in a 5-minute demo often breaks on edge cases: unusual inputs, adversarial users, rare formats, or simply running at scale across thousands of real (messy) cases instead of a few clean examples. The gap between \"impressive demo\" and \"reliable product\" is the single biggest thing separating real AI products from hype.",
    layer1:
      "Common failure modes: hallucination on rare/specific facts (A5), inconsistent output format breaking downstream code, silent failures when a tool call errors out, and cost blowing up at scale in ways that weren't visible in testing. Serious teams stress-test with adversarial and edge-case inputs, not just happy-path demos — this is what evals (C3) are actually for.",
    layer2:
      "Advisory habit: whenever you see an impressive AI demo (a pitch, a competitor's feature), ask yourself \"what messy real-world input would break this?\" — practicing this instinct is most of what \"advisory-level literacy\" actually is.",
  },
  {
    id: "f4",
    cluster: "F",
    title: "The vendor landscape — who to hire for what",
    buildsOn: ["d1", "d2", "d3", "f1"],
    layer0:
      "\"I need AI help\" can mean wildly different things requiring different people: a prompt engineer (good prompting/evals, Cluster B/C), a no-code automation builder (n8n/Make, D2), a full-stack AI engineer (APIs, RAG, agents, Clusters C/E), or a fine-tuning/ML specialist (rare need, F1). Knowing which one you actually need avoids hiring mismatches — the single most common mistake non-technical founders make.",
    layer1:
      "Most day-to-day AI feature work (like most of what you already build) sits in the \"full-stack AI engineer\" or \"no-code automation builder\" bands — API integration, prompting, some RAG, some agent orchestration — not deep ML research. Genuine ML/fine-tuning specialists are needed far less often than the market suggests, and are usually overkill (and overpriced) for typical product needs.",
    layer2:
      "Advisory case: next time you're scoping a hire or vendor for Kasper or Realla.AI, write down (before talking to them) which of the four hats you actually need — then see whether their pitch matches that, or tries to upsell you into a fancier (unnecessary) category.",
  },
  {
    id: "f5",
    cluster: "F",
    title: "Evaluating AI hype vs. reality",
    buildsOn: ["f3", "c2"],
    layer0:
      "AI news and pitches are full of overclaiming — \"we built our own AI,\" \"fully autonomous agent,\" \"proprietary model\" often actually mean \"we prompted GPT-4 well\" or \"we automated 3 steps in n8n.\" Being able to translate marketing language back into the real underlying mechanism is the core skill of advisory-level literacy.",
    layer1:
      "A useful mental checklist when evaluating any AI claim: What model is actually underneath this (D1)? Is this really fine-tuned or just well-prompted (C2)? Is \"agent\" here doing multi-step autonomous work, or is it a single chatbot call (E1)? Has this been tested beyond a demo (F3)? Running any pitch through these five questions cuts through most hype fast.",
    layer2:
      "Pick one AI product or startup pitch you've seen recently (Realla.AI's own materials are a good real example) and run it through the checklist above — write down your honest guess at what's actually happening underneath, then see if you can find out how close you were.",
  },
];

export const TOTAL_NODES = NODES.length;

export function nodesInCluster(clusterId: ClusterId): NodeContent[] {
  return NODES.filter((n) => n.cluster === clusterId);
}

export function findNode(id: string): NodeContent | undefined {
  return NODES.find((n) => n.id === id);
}
