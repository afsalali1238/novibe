import type { NodeContent, ClusterId, NodeResource } from "./types";
export const R = {
  transformerExplainer: {
    title: "Transformer Explainer",
    url: "https://poloclub.github.io/transformer-explainer/",
    source: "Polo Club, Georgia Tech",
    type: "tool",
  },
  tiktokenizer: {
    title: "Tiktokenizer Playground",
    url: "https://tiktokenizer.vercel.app/",
    source: "AnySphere",
    type: "tool",
  },
  learningToReason: {
    title: "Learning to Reason with LLMs",
    url: "https://openai.com/index/learning-to-reason-with-llms/",
    source: "OpenAI",
    type: "article",
  },
  deepseekR1: {
    title: "DeepSeek-R1: Incentivizing Reasoning Capability via RL",
    url: "https://arxiv.org/abs/2501.12948",
    source: "DeepSeek-AI",
    type: "paper",
  },
  anthropicPromptTutorial: {
    title: "Anthropic Prompt Engineering Interactive Tutorial",
    url: "https://github.com/anthropics/prompt-eng-interactive-tutorial",
    source: "Anthropic",
    type: "repo",
  },
  chatgptPromptCourse: {
    title: "ChatGPT Prompt Engineering for Developers",
    url: "https://www.deeplearning.ai/courses/chatgpt-prompt-eng/",
    source: "DeepLearning.AI",
    type: "course",
  },
  promptingGuide: {
    title: "PromptingGuide.ai",
    url: "https://www.promptingguide.ai/",
    source: "DAIR.AI",
    type: "article",
  },
  promptCachingClaude: {
    title: "Prompt Caching with Claude",
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude/prompt-caching",
    source: "Google Cloud",
    type: "doc",
  },
  whatIsRag: {
    title: "What is Retrieval-Augmented Generation (RAG)?",
    url: "https://github.com/resources/articles/software-development-with-retrieval-augmentation-generation-rag",
    source: "GitHub",
    type: "article",
  },
  demystifyingEvals: {
    title: "Demystifying Evals for AI Agents",
    url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents",
    source: "Anthropic Engineering",
    type: "article",
  },
  vercelGenerativeUi: {
    title: "Vercel AI SDK: Generative User Interfaces",
    url: "https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces",
    source: "Vercel",
    type: "doc",
  },
  embeddingProjector: {
    title: "Embedding Projector",
    url: "https://projector.tensorflow.org/",
    source: "Google / TensorFlow",
    type: "tool",
  },
  arenaAi: {
    title: "Arena AI Leaderboard (formerly LMSYS Chatbot Arena)",
    url: "https://lmarena.ai/",
    source: "Arena AI",
    type: "tool",
  },
  ollamaRepo: {
    title: "Ollama",
    url: "https://github.com/ollama/ollama",
    source: "Ollama",
    type: "repo",
  },
  cursorTutorial: {
    title: "Cursor AI Tutorial for Beginners",
    url: "https://www.youtube.com/watch?v=3289vhOUdKA",
    source: "Volo Builds",
    type: "video",
  },
  vectorDbVideo: {
    title: "What is a Vector Database?",
    url: "https://www.youtube.com/watch?v=t9IDoenf-lo",
    source: "IBM Technology",
    type: "video",
  },
  n8nRepo: {
    title: "n8n",
    url: "https://github.com/n8n-io/n8n",
    source: "n8n",
    type: "repo",
  },
  phi3Report: {
    title: "Phi-3 Technical Report",
    url: "https://arxiv.org/abs/2404.14219",
    source: "Microsoft Research",
    type: "paper",
  },
  buildingEffectiveAgents: {
    title: "Building Effective Agents",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
    source: "Anthropic Engineering",
    type: "article",
  },
  mcpSpec: {
    title: "Model Context Protocol",
    url: "https://modelcontextprotocol.io/",
    source: "Anthropic / Open Source",
    type: "doc",
  },
  agentSwarms: {
    title: "AgentSwarms: Interactive Agentic AI Playground",
    url: "https://agentswarms.fyi/",
    source: "AgentSwarms",
    type: "tool",
  },
  langgraphOverview: {
    title: "LangGraph Overview",
    url: "https://docs.langchain.com/oss/python/langgraph/overview",
    source: "LangChain",
    type: "doc",
  },
  codexRce: {
    title: "Codex CLI RCE & Prompt Injection Mitigations",
    url: "https://cymulate.com/blog/codex-cli-rce-prompt-injection-mitigations/",
    source: "Cymulate Research Lab",
    type: "article",
  },
  thisIsAgi: {
    title: "2026: This is AGI",
    url: "https://sequoiacap.com/article/2026-this-is-agi/",
    source: "Sequoia Capital",
    type: "article",
  },
  tokenCostCalculator: {
    title: "LLM Token Cost Calculator",
    url: "https://llmgateway.io/token-cost-calculator",
    source: "LLM Gateway",
    type: "tool",
  },
  beyondPerTokenPricing: {
    title: "Beyond Per-Token Pricing: LLM Infrastructure Cost Estimation",
    url: "https://arxiv.org/abs/2606.11690",
    source: "Academic Submission (arXiv)",
    type: "paper",
  },
  owaspTop10: {
    title: "OWASP Top 10 for LLM Applications (2025)",
    url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf",
    source: "OWASP GenAI Security Project",
    type: "doc",
  },
  alwaysOnEconomy: {
    title: "The Always-On Economy: AI's Real Impact",
    url: "https://sequoiacap.com/article/always-on-economy/",
    source: "Sequoia Capital",
    type: "article",
  },
  prompting101: {
    title: "Prompting 101",
    url: "https://www.youtube.com/watch?v=ysPbXH0LpIE",
    source: "Anthropic (Code w/ Claude)",
    type: "video",
  },
  masteringClaudeCode: {
    title: "Mastering Claude Code in 30 minutes",
    url: "https://www.youtube.com/watch?v=6eBSHbLKuN0",
    source: "Anthropic",
    type: "video",
  },
  claudeCodeBestPractices: {
    title: "Claude Code best practices",
    url: "https://www.youtube.com/watch?v=gv0WHhKelSE",
    source: "Anthropic (Code w/ Claude)",
    type: "video",
  },
  mcp201: {
    title: "MCP 201",
    url: "https://www.youtube.com/watch?v=HNzH5Us1Rvg",
    source: "Anthropic (Code w/ Claude)",
    type: "video",
  },
  beyondBasicsClaudeCode: {
    title: "Beyond the basics with Claude Code",
    url: "https://www.youtube.com/watch?v=tuY2ChJIx48",
    source: "Claude",
    type: "video",
  },
  proactiveAgentWorkflow: {
    title: "Build a proactive agent workflow with Claude Code",
    url: "https://www.youtube.com/watch?v=eSP7PLTXNy8",
    source: "Claude",
    type: "video",
  },
  aiVsMlCloud: {
    title: "Artificial intelligence versus machine learning",
    url: "https://cloud.google.com/discover/deep-learning-vs-machine-learning",
    source: "Google Cloud",
    type: "article",
  },
  whatIsGpt3b1b: {
    title: "But what is a GPT? Visual intro to transformers",
    url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
    source: "3Blue1Brown",
    type: "video",
  },
  aiVsMlIbm: {
    title: "AI vs Machine Learning vs Deep Learning - What's Actually the Difference?",
    url: "https://www.youtube.com/watch?v=WiCHdba-aXM",
    source: "IBM Technology",
    type: "video",
  },
  hallucinationInevitable: {
    title: "Hallucination is Inevitable: An Innate Limitation of Large Language Models",
    url: "https://arxiv.org/abs/2401.11817",
    source: "arXiv",
    type: "paper",
  },
  whyAiLies: {
    title: "Why Does AI Lie, and What Can We Do About It?",
    url: "https://www.youtube.com/watch?v=w65p_IIp6JY",
    source: "Robert Miles AI Safety",
    type: "video",
  },
  howToFixHallucinations: {
    title: "How to Fix AI Hallucinations (RAG, Semantic Entropy & Defense in Depth)",
    url: "https://www.youtube.com/watch?v=7F_nx4WdFnY",
    source: "Aura Labs",
    type: "video",
  },
  deliberativeAlignment: {
    title: "Deliberative alignment: reasoning enables safer language models",
    url: "https://openai.com/index/deliberative-alignment/",
    source: "OpenAI",
    type: "article",
  },
  manyShotJailbreaking: {
    title: "Many-shot jailbreaking",
    url: "https://www.anthropic.com/research/many-shot-jailbreaking",
    source: "Anthropic",
    type: "article",
  },
  introToAiSafety: {
    title: "Intro to AI Safety, Remastered",
    url: "https://www.youtube.com/watch?v=pYXy-A4siMw",
    source: "Robert Miles AI Safety",
    type: "video",
  },
  ragVsFineTuningPaper: {
    title: "RAG vs Fine-tuning: Pipelines, Tradeoffs, and a Case Study on Agriculture",
    url: "https://arxiv.org/abs/2401.08406",
    source: "arXiv",
    type: "paper",
  },
  ragVsFineTuningIbm: {
    title: "RAG vs Fine-Tuning vs Prompt Engineering: Optimizing AI Models",
    url: "https://www.youtube.com/watch?v=zYGDpG-pTho",
    source: "IBM Technology",
    type: "video",
  },
} as const satisfies Record<string, NodeResource>;
import { CLUSTERS } from "./clusters";

// Re-export CLUSTERS and types so existing imports in routes don't break
export { CLUSTERS };
export * from "./types";

export const NODES: NodeContent[] = [
  {
    id: "a1",
    cluster: "A",
    title: "What is AI, ML, and an LLM - really",
    buildsOn: [],
    layer0:
      "AI is the broad idea of machines doing tasks that normally need human judgement. Machine Learning is one way to build AI - instead of writing rules by hand, you show a system millions of examples and it learns the pattern itself. A Large Language Model (LLM) is a specific kind of ML system trained on huge amounts of text, whose only job is: given some text, predict what text comes next. That's it. Everything else - chatting, coding, reasoning - is that one skill used cleverly.",
    layer1:
      "During training, the model reads enormous amounts of text and adjusts billions of internal numbers (parameters) so that its next-word predictions get statistically closer to real text. It never \"understands\" in a human sense - it's compressed statistical structure over language. At inference (when you chat with it), those learned weights are frozen; the model just runs prediction, one token at a time, using whatever text is in front of it (the prompt) as its only source of \"memory.\"",
    layer2:
      "Open Claude or ChatGPT. Type one word, then keep hitting \"continue\" or asking \"what's the next most likely word\" mentally before reading the actual output. Notice: it's not \"thinking\" ahead - it's building the response piece by piece. Try asking it to write a sentence and then ask it \"why did you choose that specific next word\" - see how it explains its own pattern-following.",
    quiz: {
      prompt: "What is an LLM literally doing, at each step, when it responds to you?",
      options: [
        "Looking up facts in an internal database",
        "Predicting the most statistically likely next chunk of text",
        "Searching the live internet for an answer",
        "Retrieving a memorized encyclopedia entry",
      ],
      correctIndex: 1,
      explanation: "That's it — chatting, coding, reasoning are all that one skill (next-token prediction) used cleverly, layered with tools.",
    },
    resources: [R.aiVsMlCloud, R.whatIsGpt3b1b, R.aiVsMlIbm],
  },
  {
    id: "a2",
    cluster: "A",
    title: "Tokens & parameters - the two numbers that matter",
    buildsOn: ["a1"],
    seeAlso: ["d6"],
    layer0:
      "A \"token\" is a chunk of text the model reads or writes - roughly ¾ of a word in English. \"Parameters\" are the model's internal dials - the things learned during training. More parameters generally means more capacity to capture patterns (and more cost/slowness). When people say \"70B model\" or \"trillion parameter model,\" that's the dial count.",
    layer1:
      "Text gets broken into tokens by a tokenizer before it ever reaches the model - \"unbelievable\" might become \"un\" + \"believ\" + \"able.\" The model's context window is measured in tokens, not words or characters, which is why long documents \"cost\" more and can hit limits. Parameters are the weights in the neural network; they don't map to specific facts or concepts you could point to - knowledge is distributed across all of them.",
    layer2:
      "Go to any tokenizer tool (search \"OpenAI tokenizer\" or use Anthropic's docs) and paste a paragraph of your own writing. Count how many tokens vs. words it produces. Then paste something in Arabic or another non-English language and compare the token count for the same amount of meaning - notice non-English text often costs more tokens.",
    diagram: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="30" text-anchor="middle" font-size="13" fill="var(--muted-foreground)" font-family="ui-monospace, monospace" letter-spacing="0.5">THE MODEL NEVER SEES WORDS — IT SEES TOKENS</text>
  <rect x="220" y="55" width="160" height="34" rx="6" fill="var(--card)" stroke="var(--border)"/>
  <text x="300" y="77" text-anchor="middle" font-size="15" fill="var(--foreground)" font-family="ui-monospace, monospace">unbelievable</text>
  <line x1="300" y1="89" x2="300" y2="112" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="330" y="105" font-size="10" fill="var(--muted-foreground)">tokenizer</text>
  <g font-family="ui-monospace, monospace" font-size="14">
    <rect x="130" y="118" width="60" height="34" rx="6" fill="var(--chart-1)" fill-opacity="0.12" stroke="var(--chart-1)"/>
    <text x="160" y="140" text-anchor="middle" fill="var(--chart-1)">un</text>
    <rect x="200" y="118" width="110" height="34" rx="6" fill="var(--chart-2)" fill-opacity="0.12" stroke="var(--chart-2)"/>
    <text x="255" y="140" text-anchor="middle" fill="var(--chart-2)">believ</text>
    <rect x="320" y="118" width="80" height="34" rx="6" fill="var(--warning)" fill-opacity="0.12" stroke="var(--warning)"/>
    <text x="360" y="140" text-anchor="middle" fill="var(--warning)">able</text>
  </g>
  <text x="300" y="172" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">3 tokens, not 1 word — this is what you're billed and limited by</text>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/>
    </marker>
  </defs>
</svg>`,
    quiz: {
      prompt: "What does a model actually read and write, under the hood?",
      options: [
        "Whole words, one at a time",
        "Individual letters",
        "Tokens — chunks of roughly ¾ of a word",
        "Full sentences at once",
      ],
      correctIndex: 2,
      explanation: "Text is broken into tokens by a tokenizer before it ever reaches the model — tokens are also the unit you're billed and limited by.",
    },
    resources: [R.transformerExplainer, R.tiktokenizer],
  },
  {
    id: "a3",
    cluster: "A",
    title: "Training vs. inference",
    buildsOn: ["a1"],
    layer0:
      "Training is the one-time (expensive, slow) process of teaching the model by showing it data and adjusting its parameters. Inference is every single time you actually use the model - fast, and it doesn't change the model at all. Nothing you type to Claude or ChatGPT teaches it anything permanent; your conversation just disappears from its \"brain\" the moment it ends (unless a product layer saves and re-feeds it, which is a separate thing).",
    layer1:
      "Training happens in massive data-center runs, often months long, producing a frozen set of weights that then gets deployed as \"the model\" (e.g. Claude Sonnet 5). Every time you send a message, that's a fresh inference call - the model reads your whole conversation as input text again from scratch, predicts a response, and forgets. This is why \"memory\" features in AI apps are really just re-inserting your past messages into the prompt every time, not the model actually learning.",
    layer2:
      "Have a long conversation with Claude about a fact you invented (e.g. \"my dog's name is Ziggy\"). Start a brand new chat and ask \"what's my dog's name?\" It won't know - proving the model itself didn't learn anything; the previous chat's context simply isn't there anymore.",
    quiz: {
      prompt: "You tell Claude your dog's name mid-chat, then open a brand new chat and ask again. What happens?",
      options: [
        "It remembers, because the conversation taught it something",
        "It doesn't know — inference never changes the model's weights",
        "It guesses correctly based on probability",
        "It asks you to re-verify your identity first",
      ],
      correctIndex: 1,
      explanation: "Training is the one-time process that changes weights. Inference just reads the current prompt and predicts — nothing is learned permanently.",
    },
    resources: [R.transformerExplainer, R.learningToReason, R.deepseekR1],
  },
  {
    id: "a4",
    cluster: "A",
    title: "The context window",
    buildsOn: ["a2", "a3"],
    layer0:
      "The context window is the total amount of text (measured in tokens) the model can \"see\" at once - your entire conversation, any documents you've attached, and its own response, all counted together. Once you go over the limit, the oldest parts get cut or the request fails. Bigger context window = the model can consider more information at once, but it doesn't mean better reasoning.",
    layer1:
      "Context windows range from tens of thousands to over a million tokens depending on the model. Everything inside it competes for the model's attention - very long contexts can cause the model to \"lose track\" of details buried in the middle (sometimes called the \"lost in the middle\" effect). This is why good prompt engineering often means putting critical instructions at the start or end, not buried in a wall of text.",
    layer2:
      "Paste a long document into Claude (5,000+ words) along with one specific instruction buried in the middle of it, and one at the very end. Ask a question that requires both. Notice which one it follows more reliably - a live demonstration of context window behavior.",
    diagram: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="24" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">CONTEXT WINDOW — ONLY WHAT'S INSIDE THE BOX EXISTS TO THE MODEL</text>
  <g opacity="0.35">
    <rect x="10" y="70" width="70" height="60" rx="6" fill="var(--card)" stroke="var(--border)" stroke-dasharray="3 3"/>
    <text x="45" y="103" text-anchor="middle" font-size="10" fill="var(--muted-foreground)">msg 1</text>
    <rect x="90" y="70" width="70" height="60" rx="6" fill="var(--card)" stroke="var(--border)" stroke-dasharray="3 3"/>
    <text x="125" y="103" text-anchor="middle" font-size="10" fill="var(--muted-foreground)">msg 2</text>
  </g>
  <text x="80" y="150" text-anchor="middle" font-size="10" fill="var(--destructive)">forgotten</text>
  <rect x="180" y="55" width="340" height="90" rx="10" fill="none" stroke="var(--chart-1)" stroke-width="2"/>
  <text x="350" y="48" text-anchor="middle" font-size="10" fill="var(--chart-1)" letter-spacing="0.5">THE WINDOW (e.g. 200K tokens)</text>
  <rect x="195" y="70" width="70" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
  <text x="230" y="103" text-anchor="middle" font-size="10" fill="var(--foreground)">msg 3</text>
  <rect x="275" y="70" width="70" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
  <text x="310" y="103" text-anchor="middle" font-size="10" fill="var(--foreground)">msg 4</text>
  <rect x="355" y="70" width="70" height="60" rx="6" fill="var(--card)" stroke="var(--border)"/>
  <text x="390" y="103" text-anchor="middle" font-size="10" fill="var(--foreground)">msg 5</text>
  <rect x="435" y="70" width="70" height="60" rx="6" fill="var(--chart-2)" fill-opacity="0.12" stroke="var(--chart-2)"/>
  <text x="470" y="98" text-anchor="middle" font-size="10" fill="var(--chart-2)">your new</text>
  <text x="470" y="112" text-anchor="middle" font-size="10" fill="var(--chart-2)">message</text>
  <text x="300" y="175" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">Once full, the oldest messages drop out to make room — the model never "remembers" them again</text>
</svg>`,
    quiz: {
      prompt: "You bury one instruction in the middle of a 5,000-word document and put another right at the end. Which is the model more likely to follow reliably?",
      options: [
        "The one buried in the middle",
        "Neither — length never affects reliability",
        "The one near the edges (start or end)",
        "Whichever one uses more exclamation points",
      ],
      correctIndex: 2,
      explanation: "This is the \"lost in the middle\" effect — instructions buried deep in a long context are followed less reliably than ones at the edges.",
    },
    resources: [R.transformerExplainer, R.tiktokenizer],
  },
  {
    id: "a5",
    cluster: "A",
    title: "Why models \"hallucinate\"",
    buildsOn: ["a1", "a3"],
    layer0:
      "A hallucination is when the model confidently states something false - a fake statistic, a book that doesn't exist, a wrong date. Last month, a major airline's chatbot hallucinated a refund policy and the court forced them to honor it. This happens because the model isn't looking anything up by default; it's generating the statistically most-likely next words based on patterns in its training data, and sometimes the most \"plausible-sounding\" answer just isn't true.",
    layer1:
      "The model has no built-in fact-checking step - it doesn't distinguish between \"I recall this precisely\" and \"this pattern feels right.\" Hallucination rates go up with obscure facts, exact numbers, quotes, and citations - anything requiring precision rather than pattern completion. This is exactly why tools like web search or RAG (Cluster C) exist: to give the model real, current text to ground its answer in, instead of relying purely on memorized patterns.",
    layer2:
      "Ask Claude or ChatGPT (without web search enabled) for \"the exact publication date and page number of a specific quote\" from an obscure book. Then ask it to search the web for the same thing. Compare confidence and accuracy - a direct feel for grounded vs. ungrounded answers.",
    quiz: {
      prompt: "Why do models hallucinate?",
      options: [
        "They intentionally deceive users",
        "They generate the most plausible-sounding next words with no built-in fact-check step",
        "They only hallucinate when a server is overloaded",
        "They lack a keyboard to type facts precisely",
      ],
      correctIndex: 1,
      explanation: "There's no internal check separating \"I recall this precisely\" from \"this pattern feels right\" — which is exactly why RAG and web search exist.",
    },
    resources: [R.hallucinationInevitable, R.whyAiLies, R.howToFixHallucinations],
  },
  {
    id: "a6",
    cluster: "A",
    title: "AI safety, alignment & jailbreaks",
    buildsOn: ["a1"],
    seeAlso: ["e4", "f5"],
    layer0:
      "\"Alignment\" is the effort to make an AI model actually do what humans intend, not just what a prompt literally says or what maximizes some narrow objective - the gap between \"did what I said\" and \"did what I meant\" is the core alignment problem. A \"jailbreak\" is a prompt crafted specifically to bypass a model's built-in safety training and get it to say or do something its provider tried to prevent. Neither is solved - it's active, ongoing work at every major lab, not a checkbox that gets ticked once.",
    layer1:
      "Providers layer safety training (RLHF, constitutional AI, red-teaming) on top of raw next-token prediction to reduce harmful, biased, or dangerous outputs. Each major lab publishes its own version of this as policy - Anthropic's Responsible Scaling Policy, OpenAI's Preparedness Framework, Google DeepMind's Frontier Safety Framework - all trying to tie a model's real-world autonomy to proportionally stronger safeguards. That training is shaped by imperfect human judgment calls, so it's never airtight - clever rephrasing, role-play framing, or multi-step prompts can sometimes get a model to produce something it would normally refuse. \"Alignment\" spans this narrow \"don't say bad things\" layer all the way up to much harder questions about whether increasingly capable, autonomous systems reliably pursue the goals we actually intend once they're taking real-world actions (see autonomy levels, E4) rather than just talking.",
    layer2:
      "Ask a model to explain the reasoning behind one of its own refusals - \"why did you decline that specific request?\" - and notice it can usually articulate the actual safety principle involved, rather than giving a generic canned response. That's a direct, honest look at how alignment training shows up in a real conversation.",
    quiz: {
      prompt: "In plain terms, what is a \"jailbreak\"?",
      options: [
        "A bug that crashes the model",
        "A prompt crafted specifically to bypass a model's safety training",
        "An official developer feature for testing",
        "A method for fine-tuning a model faster",
      ],
      correctIndex: 1,
      explanation: "Safety training is never airtight — clever rephrasing or role-play framing can sometimes get a model to produce something it would normally refuse.",
    },
    resources: [R.deliberativeAlignment, R.manyShotJailbreaking, R.introToAiSafety],
  },
  {
    id: "a7",
    cluster: "A",
    title: "Reasoning Models (o1, DeepSeek R1)",
    buildsOn: ["a1", "a2"],
    layer0:
      "Until recently, models just predicted the next word instantly. Reasoning models (like OpenAI's o1 or DeepSeek R1) pause to \"think\" before answering. They generate a hidden chain of thought—breaking the problem down, checking their own work, and fixing mistakes—before outputting the final answer.",
    layer1:
      "This shifts compute from training to inference. Instead of needing a massively smarter base model, you just give the model more time to think. It's the AI equivalent of System 1 (fast, instinctive) vs System 2 (slow, deliberate) thinking.",
    layer2:
      "Ask a standard model (like GPT-4o or Claude 3.5 Sonnet) a tricky logic puzzle. Then ask a reasoning model (o1 or R1) the exact same puzzle. Notice how the reasoning model outputs a \"thought process\" block that takes 10-20 seconds before giving the right answer.",
    quiz: {
      prompt: "What actually makes a \"reasoning model\" like o1 or DeepSeek R1 different from a standard model?",
      options: [
        "It's simply a much bigger model",
        "It pauses to generate a hidden chain of thought before answering",
        "It runs on specialized hardware only",
        "It skips tokenization entirely",
      ],
      correctIndex: 1,
      explanation: "It trades instant response for thinking time — shifting compute from training to inference, closer to \"slow, deliberate\" reasoning.",
    },
    resources: [R.learningToReason, R.deepseekR1],
  },
  {
    id: "b1",
    cluster: "B",
    title: "Prompting fundamentals",
    buildsOn: ["a1"],
    layer0:
      "A prompt is just the input you give the model. The clearer and more specific it is, the better the output - because the model is pattern-matching to your exact wording, not reading your mind. Vague prompt → vague, generic answer. Specific prompt (what, for whom, in what format, how long) → sharp, usable answer.",
    layer1:
      "Effective prompts usually specify: the task, the context/audience, the format of the output, and any constraints (length, tone, things to avoid). The model treats all of this as \"more pattern to match\" - so specificity narrows the space of plausible next-tokens toward what you actually want.",
    layer2:
      "Take one task you do for Kasper (e.g. drafting an operator outreach message). Write it two ways: (1) \"write an outreach message\" and (2) a fully specified version with audience, tone, length, and one example of good vs bad. Compare the two outputs side by side.",
    quiz: {
      prompt: "Why does a vague prompt tend to produce a vague, generic answer?",
      options: [
        "The model is being deliberately unhelpful",
        "The model is pattern-matching to your exact wording, not reading your mind",
        "Vague prompts always cost more tokens",
        "The model prioritizes shorter prompts over longer ones",
      ],
      correctIndex: 1,
      explanation: "Specificity (task, audience, format, constraints) narrows the space of plausible next-tokens toward what you actually want.",
    },
    resources: [R.anthropicPromptTutorial, R.chatgptPromptCourse, R.promptingGuide, R.prompting101],
  },
  {
    id: "b2",
    cluster: "B",
    title: "System prompts",
    buildsOn: ["b1"],
    layer0:
      "A system prompt is a special instruction set given to the model before the conversation starts - it defines the model's role, rules, and boundaries for the whole session, and usually takes priority over what the user says afterward. Think of it as the \"job description\" the model reads before you ever say a word.",
    layer1:
      "In apps built on the API, developers set the system prompt invisibly; the end user never sees or edits it. It's used to lock in persona, tone, safety rules, and constraints that should hold no matter what a user types. This is the mechanism behind \"Claude will always speak formally\" or \"this bot will never discuss competitor pricing\" behaviors you see in production AI products.",
    layer2:
      "In Claude's API or console (or even by prefacing a chat message with \"For this entire conversation, act as X and never do Y\"), set a strict role, then try to get the model to break it with a normal user message. Notice how much more it resists compared to no system prompt at all.",
    quiz: {
      prompt: "What makes a system prompt different from a regular user message?",
      options: [
        "Users can see and edit it live in most apps",
        "It's set before the conversation starts and usually takes priority over what the user says after",
        "It only ever affects tone, never actual rules",
        "It's optional and almost never used in real products",
      ],
      correctIndex: 1,
      explanation: "It's the model's \"job description,\" read before the user says a word — the mechanism behind consistent persona and hard boundaries in production apps.",
    },
    resources: [R.anthropicPromptTutorial, R.promptCachingClaude],
  },
  {
    id: "b3",
    cluster: "B",
    title: "Few-shot examples",
    buildsOn: ["b1"],
    layer0:
      "Few-shot prompting means showing the model 2-5 examples of exactly the input/output pattern you want, instead of just describing it. Models are much better at copying a demonstrated pattern than following an abstract description - \"show, don't tell\" applied to AI.",
    layer1:
      "This works because the model is a pattern-completer at its core - giving it several input→output pairs strongly conditions what \"the next output\" should look like, often more reliably than lengthy instructions. It's especially powerful for consistent formatting, tone-matching, or classification tasks where the \"shape\" of the output matters more than creative variation.",
    layer2:
      "Ask the model to write a one-line product description with no examples first. Then give it 3 examples of the exact style/length you want and ask for a 4th. Compare consistency.",
    quiz: {
      prompt: "Why does showing a model 2-5 examples (few-shot) often work better than describing what you want?",
      options: [
        "Examples permanently retrain the model",
        "Showing input→output pairs strongly conditions what the next output should look like",
        "It reduces the number of tokens used",
        "It's required syntax for every prompt",
      ],
      correctIndex: 1,
      explanation: "The model is a pattern-completer at its core — \"show, don't tell\" plays directly to that strength, especially for consistent formatting or tone.",
    },
    resources: [R.chatgptPromptCourse, R.promptingGuide],
  },
  {
    id: "b4",
    cluster: "B",
    title: "Structured output (XML / JSON)",
    buildsOn: ["b1", "b2"],
    layer0:
      "Instead of getting a free-flowing paragraph back, you can ask the model to format its response in a strict structure like JSON (for code/apps to read) or XML tags (to clearly separate different parts of a long prompt or response). This turns messy natural language into something a program can reliably parse.",
    layer1:
      "XML tags are especially useful inside prompts themselves - wrapping instructions, examples, and data in distinct tags (e.g. <instructions>, <document>) removes ambiguity about which part of a huge prompt is \"the rule\" vs. \"the content to act on.\" JSON output is used when the model's response needs to plug directly into other software - an app can't safely parse a conversational paragraph, but it can parse a JSON object with fixed fields.",
    layer2:
      "Ask Claude to output a movie recommendation as a JSON object with fields \"title,\" \"genre,\" \"one_line_reason.\" Then try asking without specifying a format and see how much messier and harder-to-reuse the plain-text version is.",
    quiz: {
      prompt: "Why ask a model to output JSON instead of a free-flowing paragraph?",
      options: [
        "JSON responses are always shorter",
        "So a program can reliably parse the output instead of guessing at messy natural language",
        "JSON output reduces hallucination rates",
        "It's the model's only native output format",
      ],
      correctIndex: 1,
      explanation: "An app can't safely parse a conversational paragraph, but it can parse a JSON object with fixed fields — that's the whole point.",
    },
    resources: [R.anthropicPromptTutorial],
  },
  {
    id: "b5",
    cluster: "B",
    title: "Prompt caching & cost basics",
    buildsOn: ["b2", "a2"],
    layer0:
      "Every word (token) you send to and receive from a model costs money and time, roughly proportional to length. Prompt caching is a trick where a long, unchanging part of your prompt (like a big system prompt or document) gets \"remembered\" cheaply by the provider for repeated calls, instead of being fully reprocessed (and repaid for) every single time.",
    layer1:
      "This matters at the product-building level, not casual chat use - if you're building an app that sends the same 5,000-word system prompt with every single user message, caching that static prefix can cut cost and latency dramatically at volume. Anthropic, OpenAI, and Google all ship this natively in their APIs (usually called \"prompt caching\" or \"context caching\") - it's a lever specifically for people building AI products/agents, not something an individual chatting occasionally needs to think about.",
    layer2:
      "No hands-on task needed here - this is a \"know it exists\" node for when you're evaluating or building a product. Case in point: if you ever price out an AI feature for Kasper's platform, ask whichever provider/dev you're working with whether prompt caching is being used for the static parts of the prompt - it directly affects your running cost.",
    quiz: {
      prompt: "Who does prompt caching actually matter for?",
      options: [
        "Anyone chatting with a model casually",
        "People building products that repeatedly send the same long, unchanging prefix",
        "Only teams using fine-tuned models",
        "It only ever affects output tokens, never input",
      ],
      correctIndex: 1,
      explanation: "It's a lever for product builders sending the same static system prompt/document with every call — not something casual chat users need to think about.",
    },
    resources: [R.promptCachingClaude],
  },
  {
    id: "b6",
    cluster: "B",
    title: "Reverse Prompting (The Interview Pattern)",
    buildsOn: ["b1"],
    layer0:
      "One of the most powerful prompting techniques is asking the AI to ask YOU questions. Instead of trying to guess all the context the AI needs, you simply tell it what your goal is, and instruct it to interview you until it has enough context to do the job perfectly.",
    layer1:
      "This solves the 'blank page syndrome' of prompt engineering. By writing 'I want to build X. Ask me exactly 5 questions, one at a time, to gather all the context you need before you start drafting,' you force the model to build its own perfect prompt through you. It takes the burden of knowing what's important off your shoulders and puts it on the AI.",
    layer2:
      "Open ChatGPT or Claude and type: 'I need to write a difficult email to a client delaying a project. Do not write it yet. Interview me, asking one question at a time, until you have exactly what you need to write a perfect draft.' See how it guides you instead of the other way around.",
    quiz: {
      prompt: "What does the \"reverse prompting\" / interview pattern actually ask the model to do?",
      options: [
        "Answer immediately with its best guess",
        "Ask you questions first, one at a time, to gather context before doing the task",
        "Refuse to answer ambiguous prompts",
        "Generate five different draft answers at once",
      ],
      correctIndex: 1,
      explanation: "It flips who carries the burden of figuring out what's important — the model builds its own perfect prompt by interviewing you.",
    },
    resources: [R.promptingGuide],
  },
  {
    id: "b7",
    cluster: "B",
    title: "Chain of Thought (CoT) Prompting",
    buildsOn: ["b1", "a7"],
    layer0:
      "Before native reasoning models (A7) existed, the best way to make a model smarter was to force it to write out its thinking before giving an answer. This is called Chain of Thought prompting—literally just adding \"think step by step\" to your prompt.",
    layer1:
      "If you ask a model a complex math problem and demand just the final number, it will often guess wrong because it has to calculate everything in one \"token\" (prediction). By forcing it to write out its steps first, it uses the generated text as a scratchpad to \"show its work,\" increasing its accuracy exponentially.",
    layer2:
      "Ask Claude a complex word problem and tell it: \"Output ONLY the final answer, nothing else.\" Then ask it again, but tell it: \"Explain your reasoning step-by-step, then give the answer.\" Compare the results.",
    quiz: {
      prompt: "Why does telling a model to \"think step by step\" often improve accuracy on math or logic?",
      options: [
        "It runs the model on more powerful hardware",
        "The generated steps act as a scratchpad instead of forcing the whole answer into one token",
        "It reduces the total number of tokens used",
        "It switches the model into an entirely different mode",
      ],
      correctIndex: 1,
      explanation: "Without a scratchpad, the model has to \"calculate everything\" in one leap — writing out steps first dramatically raises accuracy on anything multi-step.",
    },
    resources: [R.chatgptPromptCourse, R.promptingGuide],
  },
  {
    id: "c1",
    cluster: "C",
    title: "RAG (Retrieval-Augmented Generation)",
    buildsOn: ["a5"],
    seeAlso: ["d4"],
    layer0:
      "RAG is how you give a model access to your specific, current information instead of relying on what it memorized during training. The system first searches (retrieves) relevant chunks of your documents/data, then hands those chunks to the model along with your question, so it answers grounded in real material instead of guessing.",
    layer1:
      "Practically: your documents get broken into chunks, converted into \"embeddings\" (see C5), and stored in a searchable index. When you ask a question, the system finds the most relevant chunks, stuffs them into the prompt as context, and the model generates an answer using that inserted text. This is the core mechanism behind popular products like Google's NotebookLM and Perplexity's search-grounded answers, and behind most internal \"chat with your PDF\" company assistants; developers usually wire it up with a framework like LangChain or LlamaIndex rather than from scratch.",
    layer2:
      "Case example: think about ProvaCV or AfzalOS - any tool where an AI needs to answer using specific documents (a CV, a vault of notes) rather than general knowledge is a RAG-shaped problem, even if it's built simply.",
    diagram: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="22" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">RAG — GROUNDING THE MODEL IN YOUR OWN DOCUMENTS</text>
  <rect x="10" y="70" width="90" height="50" rx="8" fill="var(--card)" stroke="var(--border)"/>
  <text x="55" y="99" text-anchor="middle" font-size="11" fill="var(--foreground)">Your</text>
  <text x="55" y="112" text-anchor="middle" font-size="11" fill="var(--foreground)">question</text>
  <path d="M100 95 L140 95" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a1)"/>
  <rect x="145" y="70" width="90" height="50" rx="8" fill="var(--chart-1)" fill-opacity="0.12" stroke="var(--chart-1)"/>
  <text x="190" y="99" text-anchor="middle" font-size="11" fill="var(--chart-1)">Search your</text>
  <text x="190" y="112" text-anchor="middle" font-size="11" fill="var(--chart-1)">documents</text>
  <path d="M235 95 L275 95" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a1)"/>
  <rect x="280" y="70" width="90" height="50" rx="8" fill="var(--chart-2)" fill-opacity="0.12" stroke="var(--chart-2)"/>
  <text x="325" y="93" text-anchor="middle" font-size="11" fill="var(--chart-2)">Relevant</text>
  <text x="325" y="106" text-anchor="middle" font-size="11" fill="var(--chart-2)">chunks found</text>
  <path d="M370 95 L410 95" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a1)"/>
  <rect x="415" y="70" width="80" height="50" rx="8" fill="var(--card)" stroke="var(--border)"/>
  <text x="455" y="99" text-anchor="middle" font-size="11" fill="var(--foreground)">Model reads</text>
  <text x="455" y="112" text-anchor="middle" font-size="10" fill="var(--foreground)">question + chunks</text>
  <path d="M495 95 L535 95" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a1)"/>
  <rect x="540" y="70" width="55" height="50" rx="8" fill="var(--warning)" fill-opacity="0.12" stroke="var(--warning)"/>
  <text x="567" y="99" text-anchor="middle" font-size="10" fill="var(--warning)">Grounded</text>
  <text x="567" y="111" text-anchor="middle" font-size="10" fill="var(--warning)">answer</text>
  <text x="300" y="165" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">Without this, the model answers from memorized training data only — often wrong for anything specific to you</text>
  <defs><marker id="a1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/></marker></defs>
</svg>`,
    quiz: {
      prompt: "What core problem does RAG (Retrieval-Augmented Generation) solve?",
      options: [
        "It makes model responses generate faster",
        "It grounds answers in your specific, current documents instead of only memorized training data",
        "It eliminates token costs",
        "It removes the need for prompting entirely",
      ],
      correctIndex: 1,
      explanation: "Retrieve relevant chunks first, then hand them to the model alongside your question — grounded answers instead of guesses.",
    },
    resources: [R.whatIsRag],
  },
  {
    id: "c2",
    cluster: "C",
    title: "Fine-tuning vs. prompting",
    buildsOn: ["a3", "b1"],
    layer0:
      "Fine-tuning means actually retraining a model further on your own examples, permanently changing its weights. Prompting means just giving good instructions/context at inference time without touching the model at all. For almost all product needs today, good prompting (plus RAG) beats fine-tuning - it's cheaper, faster to iterate, and doesn't require ML infrastructure.",
    layer1:
      "Fine-tuning makes sense in narrow cases: you need a very specific consistent style/format at massive scale, you have thousands of high-quality labeled examples, and prompting genuinely can't achieve the consistency you need. It's expensive, slower to iterate (need to retrain to change behavior), and not reversible the way editing a prompt is. Most companies people assume are \"fine-tuning\" are actually just prompting well with RAG.",
    layer2:
      "Advisory exercise: next time you hear a startup claim \"we fine-tuned our own model,\" ask (mentally or literally) whether prompting + RAG could have achieved the same result cheaper - this is a genuinely useful skeptical instinct for evaluating AI product claims.",
    quiz: {
      prompt: "For most real product needs today, which usually wins?",
      options: [
        "Fine-tuning, almost always",
        "Good prompting plus RAG — cheaper, faster to iterate, no ML infrastructure needed",
        "Training a brand-new model from scratch",
        "It's arbitrary and depends on the day of the week",
      ],
      correctIndex: 1,
      explanation: "Fine-tuning only makes sense in narrow cases with thousands of examples and a real consistency need prompting can't hit.",
    },
    resources: [R.ragVsFineTuningPaper, R.ragVsFineTuningIbm],
  },
  {
    id: "c3",
    cluster: "C",
    title: "Evals - how AI quality gets measured",
    buildsOn: ["a5", "c1"],
    layer0:
      "An \"eval\" is a test set used to measure whether an AI system is actually good at its job - a fixed set of example inputs with known correct (or graded) outputs, run automatically to score a model or prompt. Without evals, teams are just \"vibes-checking\" outputs, which doesn't scale and hides regressions.",
    layer1:
      "Good evals matter more than picking the \"best\" model, because model quality varies wildly by task - a model great at coding might be mediocre at your specific classification task. Serious AI teams build a private eval set from real examples of their use case, then measure any prompt/model change against it before shipping, the same way software teams use test suites - tools like LangSmith, Braintrust, and OpenAI's own Evals framework exist specifically to run and track this.",
    layer2:
      "Advisory case: if you're ever hiring someone to build an AI feature, one strong question is \"how will we know if this is actually working well, beyond it looking fine in a demo?\" - the answer should involve some form of eval set, not just \"we tried it and it seemed good.\"",
    quiz: {
      prompt: "What is an \"eval,\" in plain terms?",
      options: [
        "One person's subjective vibe-check of an output",
        "A fixed test set with known correct/graded outputs, run automatically to measure quality",
        "Another word for fine-tuning",
        "A public leaderboard score, and nothing else",
      ],
      correctIndex: 1,
      explanation: "Without evals, teams are just vibes-checking outputs — which doesn't scale and hides regressions when something changes.",
    },
    resources: [R.demystifyingEvals],
  },
  {
    id: "c4",
    cluster: "C",
    title: "APIs - how apps actually call models",
    buildsOn: ["a3"],
    layer0:
      "An API (Application Programming Interface) is how software talks to the model directly, instead of a human typing into a chat window. When an app \"uses AI,\" it's almost always sending a request to a model's API behind the scenes and getting a response back to display or act on.",
    layer1:
      "Every API call is a fresh, stateless request (see A3) - the app itself is responsible for storing conversation history and re-sending it each time to fake \"memory.\" This is exactly the layer you already work in when building things like Kasper Trips or ProvaCV - the model call is just one component in a larger app doing auth, storage, and UI around it.",
    layer2:
      "Skip the hands-on task - you already do this. Instead: the next time you're specifying a feature to a dev (or reviewing a quote), notice whether they talk about \"which model/API and what it costs per call\" - that's a sign they actually understand the layer, not just gluing a chatbot widget on top.",
    quiz: {
      prompt: "When an app \"uses AI\" behind the scenes, what's actually happening?",
      options: [
        "A human is typing the responses manually",
        "The app sends a request to a model's API and gets a response back to display or act on",
        "The app trains its own private model on the fly",
        "The model runs entirely inside the user's browser",
      ],
      correctIndex: 1,
      explanation: "Every API call is a fresh, stateless request — the app itself handles auth, storage, and re-sending history to fake \"memory.\"",
    },
    resources: [R.vercelGenerativeUi],
  },
  {
    id: "c5",
    cluster: "C",
    title: "Embeddings - the math of meaning",
    buildsOn: ["a2", "c1"],
    seeAlso: ["d4"],
    layer0:
      "An embedding is a way of converting text into a list of numbers that captures its meaning, so that similar meanings end up as similar numbers - even if the actual words are totally different. This is what lets a search system find \"vehicle maintenance costs\" as relevant to a query about \"truck repair expenses,\" despite no shared words.",
    layer1:
      "Text gets passed through an embedding model, producing a vector (a long list of numbers) representing its position in a huge \"meaning space.\" Searching then becomes a math problem: find the stored vectors closest to your query's vector. This is the retrieval half of RAG (C1) and the core of any \"semantic search\" feature.",
    layer2:
      "No task needed to grasp this conceptually - but if curious, search \"embedding projector visualization\" to see an actual 3D map of words/sentences clustered by meaning; seeing similar concepts cluster together makes the idea concrete fast. Popular embedding models you'll see named in the wild: OpenAI's text-embedding-3, Voyage AI (Anthropic's recommended partner), and Cohere Embed.",
    diagram: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">EMBEDDINGS — SIMILAR MEANING = CLOSE TOGETHER</text>
  <rect x="30" y="35" width="540" height="155" rx="10" fill="none" stroke="var(--border)"/>
  <g fill="var(--chart-1)">
    <circle cx="120" cy="80" r="4"/>
    <circle cx="145" cy="100" r="4"/>
    <circle cx="110" cy="115" r="4"/>
  </g>
  <text x="128" y="68" font-size="11" fill="var(--chart-1)">dog · puppy · canine</text>
  <g fill="var(--chart-2)">
    <circle cx="430" cy="70" r="4"/>
    <circle cx="455" cy="90" r="4"/>
    <circle cx="415" cy="95" r="4"/>
  </g>
  <text x="410" y="58" font-size="11" fill="var(--chart-2)">car · vehicle · truck</text>
  <g fill="var(--warning)">
    <circle cx="260" cy="150" r="4"/>
    <circle cx="290" cy="165" r="4"/>
    <circle cx="245" cy="170" r="4"/>
  </g>
  <text x="230" y="190" font-size="11" fill="var(--warning)">happy · joyful · glad</text>
  <text x="300" y="210" text-anchor="middle" font-size="11" fill="var(--muted-foreground)" opacity="0">spacer</text>
</svg>`,
    quiz: {
      prompt: "What does an embedding actually capture about a piece of text?",
      options: [
        "The exact words used, verbatim",
        "Meaning — similar meanings end up as similar numbers, even with totally different words",
        "The number of tokens in the input",
        "The model's confidence score for that text",
      ],
      correctIndex: 1,
      explanation: "This is what lets a search system match \"truck repair expenses\" to \"vehicle maintenance costs\" despite zero shared words.",
    },
    resources: [R.embeddingProjector, R.whatIsRag],
  },
  {
    id: "c6",
    cluster: "C",
    title: "GitHub & Hosting: Where AI code actually lives",
    buildsOn: ["c4"],
    seeAlso: ["d3"],
    layer0:
      "AI coding tools (like Cursor or Lovable) just generate text files. To turn those files into a real, live product on the internet, you need version control and hosting. GitHub is the vault that saves and tracks your code history; hosting platforms like Vercel or Supabase are the engines that pull your code from GitHub and run it on the public internet.",
    layer1:
      "A huge hurdle for non-technical founders is realizing that AI doesn't \"deploy\" itself by default. When an AI writes code, it sits locally on your machine (or in a sandbox). You have to \"git commit\" (save) and \"git push\" (upload to GitHub). Once pushed, modern hosting platforms automatically detect the new code and build a live website from it. This entire flow is called CI/CD (Continuous Integration/Continuous Deployment).",
    layer2:
      "Look at the URL of this exact app. It ends in vercel.app. This means the code was pushed to a GitHub repository, and Vercel automatically grabbed it, built it, and hosted it. If you change a file locally, the live site won't change until you push it to GitHub again.",
    quiz: {
      prompt: "Why doesn't an AI-generated app go live on the internet automatically?",
      options: [
        "It does — AI tools deploy code themselves",
        "Code has to be pushed to GitHub, then a hosting platform builds and runs it from there",
        "Hosting platforms scan your computer directly for changes",
        "Only paid AI subscriptions support deployment",
      ],
      correctIndex: 1,
      explanation: "AI-written code sits locally until you commit and push it — then platforms like Vercel detect the new code and build a live site from it.",
    },
    resources: [R.vercelGenerativeUi],
  },
  {
    id: "c7",
    cluster: "C",
    title: "AI UX: Streaming & Generative UI",
    buildsOn: ["c4"],
    seeAlso: ["d3"],
    layer0:
      "AI models don't return their answer all at once; they generate it one token at a time. If an app waits for the entire response to finish before showing it, the user might stare at a loading spinner for 10 seconds. Streaming is the technical fix for this.",
    layer1:
      "\"Streaming\" means showing the text typing out in real-time as the model generates it. A newer trend is \"Generative UI\"—instead of just streaming text, the model streams raw data (like JSON), and the app uses that data to instantly build native buttons, charts, or components on the screen on the fly (like Vercel's v0 does).",
    layer2:
      "Notice how ChatGPT types its answers out letter-by-letter instead of making you wait. If you ever build a user-facing AI tool, explicitly ask your developer to \"enable streaming\"—it is the single biggest upgrade to perceived performance.",
    quiz: {
      prompt: "Why does ChatGPT's answer type out letter by letter instead of appearing all at once?",
      options: [
        "It's a pure stylistic choice with no technical reason",
        "The model generates one token at a time, and streaming shows each token as it's ready",
        "It's deliberately slowed down to feel more human",
        "It's a rendering bug most chat apps haven't fixed",
      ],
      correctIndex: 1,
      explanation: "Streaming is the technical fix for \"stare at a spinner for 10 seconds\" — showing text as it's actually generated, piece by piece.",
    },
    resources: [R.vercelGenerativeUi],
  },
  {
    id: "d1",
    cluster: "D",
    title: "Claude vs. GPT vs. Gemini - real differences",
    buildsOn: ["a1"],
    layer0:
      "These are competing LLM providers (Anthropic, OpenAI, Google) - not fundamentally different technology, but different training approaches, strengths, pricing, and product ecosystems. For most everyday tasks, differences are smaller than marketing suggests; for specific tasks (coding, long documents, agentic tool use), real gaps exist and change often as each releases new versions.",
    layer1:
      "Anthropic (Claude) has generally been strong on careful reasoning, longer context handling, and safety-conscious behavior; OpenAI (GPT/ChatGPT) has the broadest ecosystem and plugin/tool integrations; Google (Gemini) integrates tightly with Google's own data/products and offers very large context windows. These positions shift with every release, so \"which is best\" is a moving target, not a fixed fact.",
    layer2:
      "Run the exact same real task (e.g. an actual Kasper document draft) through Claude, ChatGPT, and Gemini and compare outputs side by side - the fastest way to form your own informed opinion instead of repeating marketing claims.",
    quiz: {
      prompt: "What's the best way to decide which model (Claude, GPT, Gemini) is \"best\" for you?",
      options: [
        "Pick whichever has the loudest marketing",
        "Run your actual real task through each and compare — rankings shift with every release",
        "Always default to the newest release",
        "It never matters — they're functionally identical",
      ],
      correctIndex: 1,
      explanation: "Real gaps exist for specific tasks (coding, long documents, agentic use) and change constantly — direct comparison beats repeating marketing claims.",
    },
    resources: [R.arenaAi],
  },
  {
    id: "d2",
    cluster: "D",
    title: "No-code automation: n8n, Make, Zapier",
    buildsOn: ["c4"],
    seeAlso: ["e2"],
    layer0:
      "These are visual, drag-and-drop tools for connecting apps and AI models together into automated workflows - \"when X happens in Gmail, send the text to Claude, then post the result to Slack\" - without writing code. They're the glue layer between AI models and the rest of your business tools.",
    layer1:
      "n8n and Make are more flexible/powerful (support branching logic, loops, self-hosting for n8n) and popular for building \"agentic\" workflows; Zapier is simpler and more mainstream but less flexible for complex logic. Each node in these tools is usually either an app action (send email, add row) or an AI call (classify, summarize, generate) - meaning everything from Cluster B (prompting) applies directly inside these tools.",
    layer2:
      "Build one tiny real workflow in n8n or Make: a new email triggers a 'Reading Agent' that classifies it. If it's a sales lead, it triggers a 'Research Agent' to scrape the sender's website, which then hands off to a 'Drafting Agent' to write a customized reply. Even building this 3-step loop makes the \"automation glue\" concept concrete.",
    quiz: {
      prompt: "What's the core idea behind tools like n8n, Make, and Zapier?",
      options: [
        "They're chatbots you converse with directly",
        "Visual, drag-and-drop tools that connect apps and AI calls into automated workflows without code",
        "They replace the need for any underlying AI model",
        "They only work with one specific AI provider",
      ],
      correctIndex: 1,
      explanation: "They're the glue layer between AI models and the rest of your business tools — each node is either an app action or an AI call.",
    },
    resources: [R.n8nRepo],
  },
  {
    id: "d3",
    cluster: "D",
    title: "Coding copilots & AI app builders: Cursor, Lovable, Replit",
    buildsOn: ["a1"],
    seeAlso: ["e2"],
    layer0:
      "These are AI tools built specifically for writing and shipping software. Copilots like Cursor and Claude Code work inside an existing codebase, reading your files and making edits you approve. App builders like Lovable, Replit, bolt.new, and v0 go further - describe the app you want in plain English and get a real, working product back, which you keep refining with more prompts. You're reading this sentence inside an app that was built exactly that way, with Lovable.",
    layer1:
      "Cursor is an AI-native code editor (a modified VS Code) where you chat with AI that has full context of your open project. Claude Code is a command-line/agentic tool that can autonomously read files, write code, run tests, and iterate - closer to \"delegate a coding task\" than \"autocomplete.\" Lovable, Replit, bolt.new, and v0 are the most popular \"prompt-to-app\" builders right now - each turns a plain-English description into a deployed app, which is often called \"vibe coding.\" Both categories are dramatically changing how fast solo builders (like you, with Kasper Trips and this very Novibe app) can ship.",
    layer2:
      "You already have real experience across both camps (Kasper Trips built with a copilot, Novibe built with Lovable) - the useful exercise is comparing: what did you delegate fully vs. review carefully in each? That distinction (autonomy level) previews Cluster E's \"agent loop\" concept directly.",
    quiz: {
      prompt: "What's the key difference between a coding copilot (Cursor, Claude Code) and an app builder (Lovable, Replit, v0)?",
      options: [
        "Copilots work inside an existing codebase; app builders generate a working app from a plain-English description",
        "There's no meaningful difference between the two",
        "App builders can never produce a real, deployed product",
        "Copilots are only usable by non-technical people",
      ],
      correctIndex: 0,
      explanation: "This exact app was built with an app builder (Lovable) — describe what you want, get a real working product, keep refining with prompts.",
    },
    resources: [R.cursorTutorial, R.masteringClaudeCode, R.claudeCodeBestPractices],
  },
  {
    id: "d4",
    cluster: "D",
    title: "Vector databases & embedding tools",
    buildsOn: ["c5"],
    seeAlso: ["c1"],
    layer0:
      "A vector database is specialized storage built to hold embeddings (C5) and search through them by \"closeness of meaning\" instead of exact keyword match. It's the practical infrastructure piece that makes RAG (C1) actually work at scale.",
    layer1:
      "Popular options range from fully-managed (Pinecone) to open-source/self-hosted (Chroma, Weaviate) to \"bolt-on\" features inside existing databases (Supabase's pgvector, which you've already used). Choosing one is mostly about scale, hosting preference, and whether you want it bundled with a database you already run.",
    layer2:
      "Advisory-only node - if a dev ever proposes \"we'll build a RAG feature,\" ask what vector store they're planning to use and why; a vague answer is a signal of inexperience with this layer.",
    quiz: {
      prompt: "What is a vector database actually for?",
      options: [
        "Storing plain text logs and transcripts",
        "Storing embeddings and searching by closeness of meaning instead of exact keyword match",
        "Fully replacing traditional SQL databases",
        "Running the language model itself",
      ],
      correctIndex: 1,
      explanation: "It's the practical infrastructure piece that makes RAG actually work at scale — from managed (Pinecone) to bolt-on (Supabase's pgvector).",
    },
    resources: [R.vectorDbVideo],
  },
  {
    id: "d5",
    cluster: "D",
    title: "Open-source models - when they actually matter",
    buildsOn: ["a2", "d1"],
    layer0:
      "Open-source (or \"open-weight\") models are ones whose parameters are publicly downloadable, letting anyone run them on their own hardware instead of calling a company's API. Meta's Llama, Mistral, DeepSeek, and Alibaba's Qwen are the names you'll hear most often. They matter for privacy-sensitive use cases, cost control at huge scale, or full customization - not usually for quality, since top closed models are typically still ahead.",
    layer1:
      "Running an open model yourself means you own infrastructure costs (GPUs, hosting) and lose the \"it just works\" reliability of a managed API - a real tradeoff, not a free lunch. Companies choose open-source mainly for data sovereignty (nothing leaves their servers), predictable fixed cost at extreme scale, or the ability to fine-tune deeply for a narrow task.",
    layer2:
      "Advisory case: if a healthcare-AI conversation ever raises \"patient data can't leave our servers,\" that's exactly the scenario where open-source/self-hosted becomes the right call over a closed API - a good real test of whether you can apply this distinction correctly.",
    quiz: {
      prompt: "When do open-source (open-weight) models matter most?",
      options: [
        "When you want the single highest-quality model available, full stop",
        "Privacy-sensitive use cases, cost control at huge scale, or deep customization",
        "Only for hobbyists — never for real businesses",
        "They're always strictly cheaper and better than closed models",
      ],
      correctIndex: 1,
      explanation: "Running one yourself means owning infrastructure costs and losing managed-API reliability — a real tradeoff, not a free lunch.",
    },
    resources: [R.arenaAi, R.ollamaRepo],
  },
  {
    id: "d6",
    cluster: "D",
    title: "Multimodal models: image, video, audio",
    buildsOn: ["a1", "d1"],
    seeAlso: ["a2"],
    layer0:
      "An LLM only reads and writes text. A multimodal model extends the same core idea - predict the next chunk - to other formats: generating or understanding images, video, or audio, or combining several at once (describe this image, narrate this video). You already use two of these directly - ElevenLabs (text to voice) and Runway (text/image to video) are both multimodal generation tools, each specialized to one output type. Midjourney (images), OpenAI's Sora, and Google's Veo (both video) are the other names you'll hear most.",
    layer1:
      "Under the hood these aren't fundamentally different from LLMs - many use the same transformer architecture, just trained on tokenized pixels, audio waveforms, or video frames instead of (or alongside) text; newer \"world models\" go further, learning to predict how a whole scene evolves over time rather than generating one static image. General-purpose multimodal models (recent Claude, GPT, and Gemini versions) can take an image or audio clip as input and reason about it inside the same conversation as text; dedicated generation tools like Runway or ElevenLabs are usually narrower, tuned specifically for output quality in one modality rather than general reasoning.",
    layer2:
      "Take a real Kasper or Provia asset - a photo, or a short script - and run it through two paths: describe it in words to a text-only model, versus feeding the actual image or audio directly to a multimodal model. Notice how much nuance your text description loses compared to the model reasoning over the real file.",
    quiz: {
      prompt: "What makes a model \"multimodal\"?",
      options: [
        "It supports many spoken languages",
        "It extends the same predict-the-next-chunk idea to images, video, or audio — not just text",
        "It runs across multiple GPUs simultaneously",
        "It has several distinct personalities to choose from",
      ],
      correctIndex: 1,
      explanation: "Many multimodal models use the same transformer architecture, just trained on tokenized pixels or audio instead of (or alongside) text.",
    },
    resources: [R.phi3Report],
  },
  {
    id: "d7",
    cluster: "D",
    title: "Local AI & Small Language Models (SLMs)",
    buildsOn: ["a2", "f2"],
    layer0:
      "You don't always need a massive cloud server to run AI. Small Language Models (SLMs) like Llama 8B or Apple Intelligence are small enough to run entirely locally on your phone or laptop. They are faster, completely private, and work offline.",
    layer1:
      "SLMs aren't smart enough to write a complex app, but they are perfect for fast, frequent tasks on your device—like summarizing a notification, formatting text, or basic extraction. They trade deep reasoning for zero latency, zero cloud cost, and absolute privacy. This is why Apple and Google are pushing SLMs to run entirely on-device for consumer features.",
    layer2:
      "Download an app like LM Studio or Ollama on your computer. Download a small open-source model (like Llama 3 8B) and turn off your wifi. Chat with the model. Experiencing an LLM run offline on your own hardware completely demystifies the \"magic\" of the cloud.",
    quiz: {
      prompt: "What's the real tradeoff with running a small local model (SLM) on your own device?",
      options: [
        "Smarter than any cloud model, but noticeably slower",
        "Less deep reasoning power, traded for speed, privacy, and offline use",
        "There's no tradeoff at all — SLMs are strictly better",
        "It requires a constant internet connection to run",
      ],
      correctIndex: 1,
      explanation: "SLMs aren't built for complex reasoning — they're built for fast, frequent, private, zero-latency tasks right on your device.",
    },
    resources: [R.ollamaRepo, R.phi3Report],
  },
  {
    id: "e1",
    cluster: "E",
    title: "What actually makes something an \"agent\"",
    buildsOn: ["a1", "b1"],
    layer0:
      "A chatbot answers one message at a time and stops. An \"agent\" is a system that can take multiple steps on its own toward a goal - deciding what to do next, using tools, and continuing without a human approving every single step. The word gets used loosely in marketing; the real test is: does it make its own next-step decisions, or is a human choosing every action?",
    layer1:
      "Agentic systems typically run a loop: observe the current state → decide an action (possibly using a tool) → take the action → observe the result → repeat, until a goal is met or a limit is hit. The \"intelligence\" isn't one big magic model - it's the same LLM being called repeatedly in a loop with tools and memory wired around it (this is the \"orchestrator mindset\" - and it's exactly correct). Real products built on this loop include Claude's computer use, ChatGPT's agent mode, and Manus - each just wires more tools and longer autonomy around the same underlying mechanism.",
    layer2:
      "Take something you already automated manually in n8n/Make and ask: at which step did you make the decision vs. the AI? Relabeling your own workflow this way is the fastest way to see the human/agent line clearly.",
    diagram: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <text x="200" y="24" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">THE AGENT LOOP</text>
  <rect x="150" y="45" width="100" height="46" rx="8" fill="var(--chart-1)" fill-opacity="0.12" stroke="var(--chart-1)"/>
  <text x="200" y="73" text-anchor="middle" font-size="12" fill="var(--chart-1)">Observe</text>
  <rect x="290" y="177" width="100" height="46" rx="8" fill="var(--chart-2)" fill-opacity="0.12" stroke="var(--chart-2)"/>
  <text x="340" y="205" text-anchor="middle" font-size="12" fill="var(--chart-2)">Decide</text>
  <rect x="150" y="309" width="100" height="46" rx="8" fill="var(--warning)" fill-opacity="0.12" stroke="var(--warning)"/>
  <text x="200" y="337" text-anchor="middle" font-size="12" fill="var(--warning)">Act (tool)</text>
  <rect x="10" y="177" width="100" height="46" rx="8" fill="var(--card)" stroke="var(--border)"/>
  <text x="60" y="205" text-anchor="middle" font-size="12" fill="var(--foreground)">Result</text>
  <path d="M245 88 L320 175" stroke="var(--muted-foreground)" stroke-width="1.5" fill="none" marker-end="url(#a2)"/>
  <path d="M335 224 L245 305" stroke="var(--muted-foreground)" stroke-width="1.5" fill="none" marker-end="url(#a2)"/>
  <path d="M150 328 L75 225" stroke="var(--muted-foreground)" stroke-width="1.5" fill="none" marker-end="url(#a2)"/>
  <path d="M65 176 L155 90" stroke="var(--muted-foreground)" stroke-width="1.5" fill="none" marker-end="url(#a2)"/>
  <text x="200" y="385" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">Same model, called repeatedly — the "intelligence" is in the loop, not one big prompt</text>
  <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/></marker></defs>
</svg>`,
    quiz: {
      prompt: "What actually separates an \"agent\" from a plain chatbot?",
      options: [
        "Agents just have a nicer chat interface",
        "Agents make their own next-step decisions across multiple actions instead of a human choosing every step",
        "Agents are inherently more accurate than chatbots",
        "Agents don't use a language model at all",
      ],
      correctIndex: 1,
      explanation: "The real test: does it decide what to do next on its own, or is a human approving every single action?",
    },
    resources: [R.buildingEffectiveAgents],
  },
  {
    id: "e2",
    cluster: "E",
    title: "Tool use & MCPs (Model Context Protocol)",
    buildsOn: ["b4", "e1"],
    seeAlso: ["d2", "d3"],
    layer0:
      "Tool use (or \"function calling\") is how a model does things beyond just generating text - like searching the web, running code, or calling an API - by outputting a structured request (\"call this tool with these inputs\"), which the surrounding software then actually executes and feeds the result back in.",
    layer1:
      "The model itself never directly \"does\" anything - it only ever outputs text/structured data. When it \"uses a tool,\" it's really outputting something like a JSON block saying \"call weather_api with city=Dubai,\" and the application code intercepts that, actually calls the real API, and returns the result to the model as new context for its next response. This is the exact mechanism behind every AI tool you've used in this very conversation. The Model Context Protocol (MCP), introduced by Anthropic, has become the popular open standard for wiring up these tool connections consistently across different apps and models.",
    layer2:
      "Ask Claude \"what's the weather in Dubai right now\" - you're watching tool use happen live. Notice the model doesn't know this from training; it had to decide to call a tool, and that tool's real result got fed back in before the final answer.",
    diagram: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">TOOL USE — THE MODEL NEVER ACTS DIRECTLY</text>
  <rect x="20" y="70" width="120" height="55" rx="8" fill="var(--chart-1)" fill-opacity="0.12" stroke="var(--chart-1)"/>
  <text x="80" y="94" text-anchor="middle" font-size="11" fill="var(--chart-1)">Model outputs:</text>
  <text x="80" y="110" text-anchor="middle" font-size="10" fill="var(--chart-1)" font-family="ui-monospace, monospace">"call weather_api"</text>
  <path d="M140 97 L185 97" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a3)"/>
  <rect x="190" y="70" width="120" height="55" rx="8" fill="var(--warning)" fill-opacity="0.12" stroke="var(--warning)"/>
  <text x="250" y="94" text-anchor="middle" font-size="11" fill="var(--warning)">App actually</text>
  <text x="250" y="110" text-anchor="middle" font-size="11" fill="var(--warning)">calls the API</text>
  <path d="M310 97 L355 97" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a3)"/>
  <rect x="360" y="70" width="110" height="55" rx="8" fill="var(--card)" stroke="var(--border)"/>
  <text x="415" y="94" text-anchor="middle" font-size="11" fill="var(--foreground)">Real result</text>
  <text x="415" y="110" text-anchor="middle" font-size="10" fill="var(--foreground)">"28°C, sunny"</text>
  <path d="M415 125 Q415 160 250 160 Q140 160 100 128" stroke="var(--muted-foreground)" stroke-width="1.5" fill="none" marker-end="url(#a3)"/>
  <text x="260" y="150" text-anchor="middle" font-size="10" fill="var(--muted-foreground)">fed back in as new context</text>
  <rect x="490" y="70" width="90" height="55" rx="8" fill="var(--chart-2)" fill-opacity="0.12" stroke="var(--chart-2)"/>
  <text x="535" y="94" text-anchor="middle" font-size="11" fill="var(--chart-2)">Final</text>
  <text x="535" y="110" text-anchor="middle" font-size="11" fill="var(--chart-2)">answer</text>
  <path d="M470 97 L485 97" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a3)"/>
  <defs><marker id="a3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/></marker></defs>
</svg>`,
    quiz: {
      prompt: "When a model \"uses a tool,\" what is it literally doing?",
      options: [
        "Directly executing code on your machine",
        "Outputting a structured request that the surrounding application then actually executes",
        "Downloading and installing a plugin",
        "Bypassing the limits of its own training data",
      ],
      correctIndex: 1,
      explanation: "The model never directly \"does\" anything — it outputs something like a JSON request, and app code intercepts and executes it for real.",
    },
    resources: [R.mcpSpec, R.mcp201, R.beyondBasicsClaudeCode],
  },
  {
    id: "e3",
    cluster: "E",
    title: "Memory - short-term vs. long-term",
    buildsOn: ["a3", "a4"],
    layer0:
      "\"Memory\" in AI products isn't the model learning - it's engineering. Short-term memory is just re-sending the recent conversation each time (limited by the context window, A4). Long-term memory is a separate system that saves facts about you somewhere (a database) and selectively re-inserts relevant bits into future prompts - which is exactly how the memory you're experiencing in this very conversation works.",
    layer1:
      "Building real long-term memory means deciding: what gets saved, how it gets retrieved (often via embeddings/RAG, C1/C5), and how much gets re-injected without blowing the context window. Badly designed memory either forgets things that matter or stuffs in irrelevant details that confuse the model - a real design problem, not a solved default. ChatGPT's \"Memory\" and Claude's \"memory\" features are consumer-facing versions of exactly this system, just built and tuned by the provider instead of you.",
    layer2:
      "Notice, right now, that this conversation \"knows\" things about your work at Kasper from before - that's long-term memory in action: facts stored elsewhere, silently re-inserted into context, not the model recalling on its own.",
    diagram: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">MEMORY IS ENGINEERING, NOT THE MODEL LEARNING</text>
  <rect x="30" y="45" width="230" height="130" rx="10" fill="var(--chart-1)" fill-opacity="0.06" stroke="var(--chart-1)"/>
  <text x="145" y="65" text-anchor="middle" font-size="11" fill="var(--chart-1)" letter-spacing="0.3">SHORT-TERM (context window)</text>
  <rect x="50" y="80" width="190" height="24" rx="4" fill="var(--card)" stroke="var(--border)"/>
  <text x="145" y="96" text-anchor="middle" font-size="10" fill="var(--foreground)">this conversation so far</text>
  <rect x="50" y="112" width="190" height="24" rx="4" fill="var(--card)" stroke="var(--border)"/>
  <text x="145" y="128" text-anchor="middle" font-size="10" fill="var(--foreground)">disappears when chat ends</text>
  <rect x="340" y="45" width="230" height="130" rx="10" fill="var(--chart-2)" fill-opacity="0.06" stroke="var(--chart-2)"/>
  <text x="455" y="65" text-anchor="middle" font-size="11" fill="var(--chart-2)" letter-spacing="0.3">LONG-TERM (database)</text>
  <rect x="360" y="80" width="190" height="24" rx="4" fill="var(--card)" stroke="var(--border)"/>
  <text x="455" y="96" text-anchor="middle" font-size="10" fill="var(--foreground)">saved facts about you</text>
  <rect x="360" y="112" width="190" height="24" rx="4" fill="var(--card)" stroke="var(--border)"/>
  <text x="455" y="128" text-anchor="middle" font-size="10" fill="var(--foreground)">persists across sessions</text>
  <path d="M340 110 L260 110" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a4)"/>
  <text x="300" y="150" text-anchor="middle" font-size="9" fill="var(--muted-foreground)">relevant bits</text>
  <text x="300" y="162" text-anchor="middle" font-size="9" fill="var(--muted-foreground)">re-inserted</text>
  <defs><marker id="a4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/></marker></defs>
</svg>`,
    quiz: {
      prompt: "How does \"long-term memory\" in AI products actually work?",
      options: [
        "The model permanently updates its own weights as you chat with it",
        "A separate system saves facts in a database and selectively re-inserts relevant bits into future prompts",
        "Everything just stays in the context window forever",
        "It's pure marketing — there's no real mechanism behind it",
      ],
      correctIndex: 1,
      explanation: "Memory is engineering, not the model learning — deciding what gets saved, how it's retrieved, and how much gets re-injected.",
    },
    resources: [R.langgraphOverview],
  },
  {
    id: "e4",
    cluster: "E",
    title: "The agent loop & autonomy levels",
    buildsOn: ["e1", "e2", "e3"],
    seeAlso: ["a6", "e6"],
    layer0:
      "Not all agents are equally autonomous. There's a spectrum: (1) human approves every single step, (2) human sets a goal and checks in periodically, (3) fully autonomous - runs for hours/days with no check-in, only reporting at the end. Higher autonomy is riskier (harder to catch mistakes) but more valuable for tedious multi-step work.",
    layer1:
      "Real agent systems need guardrails proportional to their autonomy level: logging every action, limits on what tools it can call, and often a \"human approval\" gate before any irreversible action (sending an email, spending money). This is the exact reasoning behind why Claude itself asks you for confirmation before sending emails or making purchases on your behalf - autonomy and safety are a direct tradeoff.",
    layer2:
      "Design (on paper, no build needed) an autonomy ladder for one real Kasper task - e.g. \"operator onboarding follow-up\": what would level-1 (approve every message) vs. level-3 (fully autonomous) look like, and where would you personally draw the line?",
    diagram: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">AUTONOMY LADDER — MORE FREEDOM, MORE RISK</text>
  <rect x="60" y="130" width="480" height="40" rx="6" fill="var(--card)" stroke="var(--border)"/>
  <text x="80" y="155" font-size="12" fill="var(--foreground)">Level 1 — human approves every single step</text>
  <rect x="60" y="80" width="480" height="40" rx="6" fill="var(--warning)" fill-opacity="0.1" stroke="var(--warning)"/>
  <text x="80" y="105" font-size="12" fill="var(--warning)">Level 2 — human sets goal, checks in periodically</text>
  <rect x="60" y="30" width="480" height="40" rx="6" fill="var(--destructive)" fill-opacity="0.1" stroke="var(--destructive)"/>
  <text x="80" y="55" font-size="12" fill="var(--destructive)">Level 3 — fully autonomous, reports only at the end</text>
  <text x="300" y="200" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">Higher levels need proportionally stronger guardrails — logging, tool limits, approval gates on irreversible actions</text>
</svg>`,
    quiz: {
      prompt: "Why do higher-autonomy agents need proportionally stronger guardrails?",
      options: [
        "They don't — autonomy carries no real safety implications",
        "More freedom to act on its own means mistakes are harder to catch before they happen",
        "Guardrails are only ever needed for low-autonomy agents",
        "Guardrails exist purely to slow agents down, with no other purpose",
      ],
      correctIndex: 1,
      explanation: "This is exactly why Claude asks for confirmation before sending emails or making purchases on your behalf — autonomy and safety trade off directly.",
    },
    resources: [R.buildingEffectiveAgents, R.agentSwarms, R.proactiveAgentWorkflow],
  },
  {
    id: "e5",
    cluster: "E",
    title: "Orchestration - chaining AI calls",
    buildsOn: ["e1", "e2"],
    layer0:
      "Complex AI systems rarely use one giant prompt for everything - they break a task into smaller steps, each handled by a separate, narrower AI call, with the output of one step feeding into the next. Decomposition is the core orchestrator skill.",
    layer1:
      "Chaining smaller, verifiable jobs (classify → extract → draft, for example) is more reliable than one massive prompt trying to do everything at once, because each step is easier to check, debug, and improve independently. Frameworks like LangChain, LangGraph, and CrewAI exist specifically to build and manage these chains in code. This is the actual mental model behind everything you already build - Kasper Trips, ProvaCV, your Claude skills library - even when it doesn't look like \"AI agents\" on the surface.",
    layer2:
      "Take one of your own multi-step Claude skills (e.g. cv-tailoring) and map it explicitly as a chain: what's step 1's exact input/output, what feeds into step 2, etc. You'll likely find you've been orchestrating without naming it as such.",
    diagram: `<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">ORCHESTRATION — SMALL VERIFIABLE JOBS, CHAINED</text>
  <rect x="30" y="55" width="140" height="55" rx="8" fill="var(--chart-1)" fill-opacity="0.12" stroke="var(--chart-1)"/>
  <text x="100" y="79" text-anchor="middle" font-size="12" fill="var(--chart-1)">Classify</text>
  <text x="100" y="94" text-anchor="middle" font-size="9" fill="var(--chart-1)">raw transcript</text>
  <path d="M170 82 L215 82" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a5)"/>
  <rect x="220" y="55" width="140" height="55" rx="8" fill="var(--chart-2)" fill-opacity="0.12" stroke="var(--chart-2)"/>
  <text x="290" y="79" text-anchor="middle" font-size="12" fill="var(--chart-2)">Extract</text>
  <text x="290" y="94" text-anchor="middle" font-size="9" fill="var(--chart-2)">key details</text>
  <path d="M360 82 L405 82" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a5)"/>
  <rect x="410" y="55" width="150" height="55" rx="8" fill="var(--warning)" fill-opacity="0.12" stroke="var(--warning)"/>
  <text x="485" y="79" text-anchor="middle" font-size="12" fill="var(--warning)">Draft</text>
  <text x="485" y="94" text-anchor="middle" font-size="9" fill="var(--warning)">follow-up email</text>
  <text x="300" y="140" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">Each box is one narrow, checkable AI call — not one giant prompt trying to do everything</text>
  <defs><marker id="a5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/></marker></defs>
</svg>`,
    quiz: {
      prompt: "Why break a task into a chain of smaller AI calls instead of one giant prompt?",
      options: [
        "It's always strictly cheaper, for no other reason",
        "Each narrow step is easier to check, debug, and improve independently",
        "A single prompt can technically never contain more than one instruction",
        "Every AI provider requires chained calls by policy",
      ],
      correctIndex: 1,
      explanation: "Classify → extract → draft (each a separate, verifiable job) is more reliable than one massive prompt trying to do everything at once.",
    },
    resources: [R.agentSwarms, R.langgraphOverview],
  },
  {
    id: "e6",
    cluster: "E",
    title: "Prompt injection & AI security",
    buildsOn: ["e2"],
    seeAlso: ["e4"],
    layer0:
      "Prompt injection is what happens when untrusted text - a webpage, an email, a document, a message from someone else - contains hidden instructions that an AI system reads and mistakenly follows as if they came from you, the actual user. It's the AI-era version of the classic security rule \"never trust user input,\" except here the \"input\" can be anything the model reads, not just what you typed.",
    layer1:
      "This becomes a real risk specifically once a model has tool use (E2) or reads content it didn't generate itself - an AI agent that reads emails, browses the web, or opens documents on your behalf can be quietly told, by the content itself, to exfiltrate data, take unintended actions, or ignore its real instructions. Defenses are still evolving: treating fetched content as data rather than commands, requiring human approval before irreversible actions (tying back to the autonomy ladder, E4), and sandboxing what tools an agent is allowed to call are the main mitigations today - there's no fully solved fix yet.",
    layer2:
      "Directly relevant to what you build: next time you design or evaluate a feature where an AI reads content from outside the user (an inbox, a scraped webpage, an uploaded document), ask explicitly - \"if this content contained hidden instructions, what's the worst it could make the AI do, and what actually stops that?\" That single question is most of what security-conscious AI product design really is.",
    quiz: {
      prompt: "What is prompt injection?",
      options: [
        "A technique that makes prompts execute faster",
        "Hidden instructions in untrusted content (a webpage, email) that an AI mistakenly follows as if from the real user",
        "A specific method used for fine-tuning models",
        "Another name for a normal hallucination",
      ],
      correctIndex: 1,
      explanation: "The AI-era version of \"never trust user input\" — except the untrusted input here can be anything the model reads, not just what you typed.",
    },
    resources: [R.codexRce],
  },
  {
    id: "e7",
    cluster: "E",
    title: "Multi-Agent Systems (Swarms)",
    buildsOn: ["e1", "e5"],
    layer0:
      "Instead of building one giant AI trying to do everything, the future of work is a team of agents. A Multi-Agent System (or swarm) splits complex work among specialized AI roles—like a \"Manager\" agent delegating tasks to a \"Researcher\" agent and a \"Coder\" agent. Each has a narrow job and they talk to each other.",
    layer1:
      "This mirrors human corporate structure. If an agent tries to be a researcher, writer, and editor all at once, it loses focus (context window limits, A4) and fails. If you explicitly wire an \"Editor\" agent to review the \"Writer\" agent's output before passing it to the \"Manager,\" quality skyrockets. Tools like CrewAI and AutoGen exist specifically to build these digital coworker teams.",
    layer2:
      "Think about your internal tools (like Cowork or Clawbot). Sketch a 3-agent team for a real Kasper workflow. For example: a 'Scraping Agent' pulls data from a URL, hands it to a 'Validation Agent' to check for missing fields, which then hands it to a 'Formatting Agent' to output pure JSON. How does the Manager Agent verify the final work before a human ever sees it?",
    quiz: {
      prompt: "Why split work across a team of specialized agents instead of one agent doing everything?",
      options: [
        "It's always cheaper token-for-token, with no other reason",
        "One agent juggling too many roles loses focus (context limits) and quality drops",
        "Multi-agent systems don't actually rely on language models",
        "It's purely a marketing distinction with no functional effect",
      ],
      correctIndex: 1,
      explanation: "Mirrors a human org chart — a dedicated \"editor\" agent reviewing a \"writer\" agent's output before it reaches the manager noticeably raises quality.",
    },
    resources: [R.agentSwarms, R.langgraphOverview],
  },
  {
    id: "f1",
    cluster: "F",
    title: "Build vs. buy vs. fine-tune",
    buildsOn: ["c2", "d5"],
    layer0:
      "When a company needs an AI capability, there are three broad paths: buy an existing tool/product, build a custom app on top of an existing model's API (prompting + maybe RAG), or fine-tune/train something bespoke. Most real business problems are solved with the middle option - bespoke fine-tuning is rare and usually unnecessary.",
    layer1:
      "The decision usually comes down to: how differentiated does this capability need to be (generic tools are fine for generic problems), how much data/control do you need over the exact behavior, and what's the cost of being wrong (a bought tool is easy to abandon; a fine-tuned model is a sunk investment). This exact framework applies directly to Kasper's GPS-as-a-Service build-vs-vendor decisions you've already been working through.",
    layer2:
      "Take one open decision from your actual Kasper GPS work (e.g. Wialon/Navixy vs. custom build) and explicitly run it through this three-way framework - you'll likely find you've already been reasoning this way intuitively.",
    diagram: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="20" text-anchor="middle" font-size="12" fill="var(--muted-foreground)" letter-spacing="0.5">NEED AN AI CAPABILITY?</text>
  <rect x="240" y="35" width="120" height="40" rx="8" fill="var(--card)" stroke="var(--border)"/>
  <text x="300" y="60" text-anchor="middle" font-size="11" fill="var(--foreground)">Decision point</text>
  <path d="M270 75 L110 130" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a6)"/>
  <path d="M300 75 L300 130" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a6)"/>
  <path d="M330 75 L490 130" stroke="var(--muted-foreground)" stroke-width="1.5" marker-end="url(#a6)"/>
  <rect x="20" y="135" width="180" height="60" rx="8" fill="var(--chart-1)" fill-opacity="0.1" stroke="var(--chart-1)"/>
  <text x="110" y="158" text-anchor="middle" font-size="12" fill="var(--chart-1)">Buy</text>
  <text x="110" y="173" text-anchor="middle" font-size="10" fill="var(--chart-1)">existing tool solves it</text>
  <text x="110" y="186" text-anchor="middle" font-size="10" fill="var(--chart-1)">— most common answer</text>
  <rect x="210" y="135" width="180" height="60" rx="8" fill="var(--chart-2)" fill-opacity="0.1" stroke="var(--chart-2)"/>
  <text x="300" y="158" text-anchor="middle" font-size="12" fill="var(--chart-2)">Build</text>
  <text x="300" y="173" text-anchor="middle" font-size="10" fill="var(--chart-2)">API + prompting + RAG</text>
  <text x="300" y="186" text-anchor="middle" font-size="10" fill="var(--chart-2)">— usually the right call</text>
  <rect x="400" y="135" width="180" height="60" rx="8" fill="var(--warning)" fill-opacity="0.1" stroke="var(--warning)"/>
  <text x="490" y="158" text-anchor="middle" font-size="12" fill="var(--warning)">Fine-tune</text>
  <text x="490" y="173" text-anchor="middle" font-size="10" fill="var(--warning)">rare — narrow, high-scale,</text>
  <text x="490" y="186" text-anchor="middle" font-size="10" fill="var(--warning)">prompting genuinely can't do it</text>
  <defs><marker id="a6" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--muted-foreground)"/></marker></defs>
</svg>`,
    quiz: {
      prompt: "Which path solves most real business AI needs?",
      options: [
        "Fine-tuning a bespoke model from the start",
        "Building on an existing model's API with good prompting (and maybe RAG)",
        "Buying literally any AI tool on the market",
        "Always building a model completely from scratch",
      ],
      correctIndex: 1,
      explanation: "Bespoke fine-tuning is rare and usually unnecessary — most needs fit squarely in the \"build on an API\" middle path.",
    },
    resources: [R.thisIsAgi, R.tokenCostCalculator],
  },
  {
    id: "f2",
    cluster: "F",
    title: "Cost & latency tradeoffs",
    buildsOn: ["a2", "b5"],
    layer0:
      "Every AI feature has two practical costs: money (roughly proportional to tokens in/out) and time (latency - how long a response takes). Bigger/smarter models are usually slower and pricier; smaller/faster models are cheaper but less capable. For example, running a heavy task through GPT-4o can cost 10x more per token than using Claude 3.5 Haiku for the exact same result. Product decisions constantly trade these off - you don't always need the smartest model for every task.",
    layer1:
      "A common real pattern: use a small, cheap, fast model for simple tasks (classification, extraction) and reserve the expensive, slow, capable model only for the hard reasoning step - exactly mirroring the \"orchestration\" idea (E5). Latency also compounds in agent loops - five sequential model calls each taking 2 seconds is a 10-second wait, which matters hugely for user-facing products vs. background jobs.",
    layer2:
      "Advisory exercise: for any AI feature proposal (yours or a vendor's), ask \"which parts genuinely need the most capable model, and which are simple enough for something cheaper and faster?\" - a question that immediately signals sophistication in a vendor conversation.",
    quiz: {
      prompt: "What's a common, smart pattern for managing AI cost and latency?",
      options: [
        "Always use the single biggest, most capable model for every task",
        "Use a small, cheap, fast model for simple steps and reserve the expensive model for the genuinely hard reasoning step",
        "Latency is irrelevant for anything user-facing",
        "Cost is fixed no matter which model you pick",
      ],
      correctIndex: 1,
      explanation: "This mirrors orchestration directly — matching model capability to task difficulty instead of over-paying for every single step.",
    },
    resources: [R.tokenCostCalculator, R.beyondPerTokenPricing],
  },
  {
    id: "f3",
    cluster: "F",
    title: "Where AI actually fails in production",
    buildsOn: ["a5", "c3"],
    layer0:
      "Demos are misleading - an AI feature that looks flawless in a 5-minute demo often breaks on edge cases: unusual inputs, adversarial users, rare formats, or simply running at scale across thousands of real (messy) cases instead of a few clean examples. The gap between \"impressive demo\" and \"reliable product\" is the single biggest thing separating real AI products from hype.",
    layer1:
      "Common failure modes: hallucination on rare/specific facts (A5), inconsistent output format breaking downstream code, silent failures when a tool call errors out, and cost blowing up at scale in ways that weren't visible in testing. Serious teams stress-test with adversarial and edge-case inputs, not just happy-path demos - this is what evals (C3) are actually for.",
    layer2:
      "Advisory habit: whenever you see an impressive AI demo (a pitch, a competitor's feature), ask yourself \"what messy real-world input would break this?\" - practicing this instinct is most of what \"advisory-level literacy\" actually is.",
    quiz: {
      prompt: "Why can an AI feature look flawless in a demo but break in production?",
      options: [
        "Demos secretly use a different, better model",
        "Real-world use hits edge cases, adversarial inputs, and scale that a few clean demo examples never test",
        "Production servers always run slower than demo servers",
        "It's pure random luck, with no systematic cause",
      ],
      correctIndex: 1,
      explanation: "The gap between \"impressive demo\" and \"reliable product\" is the biggest thing separating real AI products from hype.",
    },
    resources: [R.beyondPerTokenPricing, R.owaspTop10],
  },
  {
    id: "f4",
    cluster: "F",
    title: "The vendor landscape - who to hire for what",
    buildsOn: ["d1", "d2", "d3", "f1"],
    layer0:
      "\"I need AI help\" can mean wildly different things requiring different people: a prompt engineer (good prompting/evals, Cluster B/C), a no-code automation builder (n8n/Make, D2), a full-stack AI engineer (APIs, RAG, agents, Clusters C/E), or a fine-tuning/ML specialist (rare need, F1). Knowing which one you actually need avoids hiring mismatches - the single most common mistake non-technical founders make.",
    layer1:
      "Most day-to-day AI feature work (like most of what you already build) sits in the \"full-stack AI engineer\" or \"no-code automation builder\" bands - API integration, prompting, some RAG, some agent orchestration - not deep ML research. Genuine ML/fine-tuning specialists are needed far less often than the market suggests, and are usually overkill (and overpriced) for typical product needs.",
    layer2:
      "Advisory case: next time you're scoping a hire or vendor for Kasper or Realla.AI, write down (before talking to them) which of the four hats you actually need - then see whether their pitch matches that, or tries to upsell you into a fancier (unnecessary) category.",
    quiz: {
      prompt: "Why does hiring the wrong \"AI person\" happen so often?",
      options: [
        "Every AI-related role requires the exact same skill set",
        "\"I need AI help\" can mean a prompt engineer, automation builder, full-stack AI engineer, or ML specialist — very different needs",
        "Fine-tuning specialists are the right hire for almost every AI task",
        "It rarely happens — the market for AI talent is well-defined",
      ],
      correctIndex: 1,
      explanation: "Knowing which of the four hats you actually need avoids the single most common mismatch non-technical founders run into.",
    },
    resources: [R.thisIsAgi, R.alwaysOnEconomy],
  },
  {
    id: "f5",
    cluster: "F",
    title: "Evaluating AI hype vs. reality",
    buildsOn: ["f3", "c2"],
    seeAlso: ["a6"],
    layer0:
      "AI news and pitches are full of overclaiming - \"we built our own AI,\" \"fully autonomous agent,\" \"proprietary model\" often actually mean \"we prompted GPT-4 well\" or \"we automated 3 steps in n8n.\" Being able to translate marketing language back into the real underlying mechanism is the core skill of advisory-level literacy.",
    layer1:
      "A useful mental checklist when evaluating any AI claim: What model is actually underneath this (D1)? Is this really fine-tuned or just well-prompted (C2)? Is \"agent\" here doing multi-step autonomous work, or is it a single chatbot call (E1)? Has this been tested beyond a demo (F3)? Running any pitch through these five questions cuts through most hype fast.",
    layer2:
      "Pick one AI product or startup pitch you've seen recently (Realla.AI's own materials are a good real example) and run it through the checklist above - write down your honest guess at what's actually happening underneath, then see if you can find out how close you were.",
    quiz: {
      prompt: "What's the fastest way to cut through an AI hype claim?",
      options: [
        "Trust it if the pitch uses enough technical jargon",
        "Ask what model is really underneath, whether it's actually fine-tuned or just well-prompted, and whether it's been tested beyond a demo",
        "Assume every AI claim is automatically false",
        "Only trust claims from the largest, best-funded companies",
      ],
      correctIndex: 1,
      explanation: "Running any pitch through this short checklist translates marketing language back into the real underlying mechanism, fast.",
    },
    resources: [R.thisIsAgi, R.alwaysOnEconomy],
  },
  {
    id: "f6",
    cluster: "F",
    title: "Data Privacy & Enterprise Security",
    buildsOn: ["c4"],
    seeAlso: ["d5", "e6"],
    layer0:
      "\"Will my data train the model?\" The answer depends entirely on how you access it. If you use free consumer tools (like ChatGPT.com), your inputs are often used for training by default. If you use the developer API (C4) or Enterprise tiers, providers explicitly guarantee your data is zero-retention and never used for training.",
    layer1:
      "Most non-technical founders accidentally ban AI out of fear, without realizing that plugging into an API is exactly as secure as using AWS or Stripe. The rule of thumb: Consumer Chat UI = potentially used for training. Developer API = private and safe. If extreme privacy is required, open-source models (D5) or local SLMs (D7) are the only way to ensure data physically never leaves your hardware.",
    layer2:
      "Go to your personal ChatGPT or Claude settings right now and find the \"Data Controls\" or \"Improve the Model for Everyone\" toggle. Turn it off. You've just switched from the consumer default to a private tier manually.",
    quiz: {
      prompt: "What's the key privacy difference between a consumer chat app and the developer API?",
      options: [
        "There is no real difference between the two",
        "Consumer tools may use your input for training by default; API/Enterprise tiers are typically zero-retention",
        "The developer API is always less secure than consumer chat",
        "Only fully open-source models can ever be private",
      ],
      correctIndex: 1,
      explanation: "Plugging into an API is exactly as secure as using AWS or Stripe — the consumer chat UI is the one with the training-data risk.",
    },
    resources: [R.owaspTop10],
  },
];

export const TOTAL_NODES = NODES.length;

export function nodesInCluster(clusterId: ClusterId): NodeContent[] {
  return NODES.filter((n) => n.cluster === clusterId);
}

export function findNode(id: string): NodeContent | undefined {
  return NODES.find((n) => n.id === id);
}
