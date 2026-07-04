export type Day = {
  id: string;
  topic: string;
  concept: string;
  resourceQuery: string;
};

export type Challenge = {
  scenario: string;
  instructions: string;
  validationKey: string;
  language: "xml" | "json" | "text";
  explanation: string;
};

export type Week = {
  id: string;
  number: number;
  title: string;
  focus: string;
  days: Day[];
  challenge: Challenge;
};

export const COURSE_TITLE = "No-Code AI & Agentic Engineering";
export const COURSE_SUBTITLE = "The AI Orchestrator's Blueprint";

export const resourceUrl = (q: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(q)}`;

export const WEEKS: Week[] = [
  {
    id: "wk1",
    number: 1,
    title: "AI Fundamentals & High-Level Prompting",
    focus:
      "Treat LLMs as programmable cognitive engines. Master context windows, XML scaffolding, and prompt caching.",
    days: [
      { id: "wk1-day1", topic: "The Anatomy of an LLM & the Orchestrator Mindset", concept: "LLMs are prediction engines; the modern builder orchestrates cognitive labor.", resourceQuery: "Anthropic Founder's Playbook AI-Native Startup" },
      { id: "wk1-day2", topic: "System Prompts & Role-Based Guardrails", concept: "System prompts are the immutable OS defining identity, constraints, and boundaries.", resourceQuery: "Anthropic Prompting Best Practices System Prompts" },
      { id: "wk1-day3", topic: "XML Tags for Context Separation", concept: "Distinct XML tags eliminate ambiguity between instructions and incoming data.", resourceQuery: "Anthropic Structure Prompts with XML Tags" },
      { id: "wk1-day4", topic: "Few-Shot Prompting Mechanics", concept: "3–5 structured examples enforce output consistency without fine-tuning.", resourceQuery: "Anthropic Prompting Use Examples Effectively" },
      { id: "wk1-day5", topic: "Prompt Caching for Efficiency & Economics", concept: "Cache static prefixes to slash API cost and latency at volume.", resourceQuery: "Anthropic Prompt Caching Guide" },
      { id: "wk1-day6", topic: "Bounding Outputs with Prefills & Directives", concept: "Prefill the assistant turn to suppress conversational filler.", resourceQuery: "Anthropic Prefilling Claude's Response" },
      { id: "wk1-day7", topic: "Chat → Asynchronous Agentic Execution", concept: "True agents run logic loops autonomously across hours or days.", resourceQuery: "Anthropic Claude Tag in Slack Asynchronous" },
    ],
    challenge: {
      scenario:
        "A B2B distribution company receives unstructured buyer emails asking for inventory quotes. Design a zero-shot system prompt that ingests the email and extracts intent, urgency, and requested items without breaking downstream automation.",
      instructions:
        "Write the exact system instructions + XML structure you'd paste into an n8n or Make.com LLM node. Include <system_instructions>, <output_format>, and a directive forbidding conversational filler.",
      language: "xml",
      validationKey: `<system_instructions>
You are an automated logistics parser. Your sole function is to extract
structured data from buyer emails. You must never output conversational
text. Return ONLY the requested XML structure.
</system_instructions>
<output_format>
Format your response exactly like this, returning nothing else:
<extraction>
  <intent>[Quote|Complaint|Question]</intent>
  <urgency>[High|Medium|Low]</urgency>
  <items>[Item 1, Item 2]</items>
</extraction>
</output_format>`,
      explanation:
        "Isolates persona from formatting rules via XML tags, bans conversational text, and gives a rigid <extraction> structure downstream nodes can parse with RegEx or native XML-to-JSON.",
    },
  },
  {
    id: "wk2",
    number: 2,
    title: "Advanced Prompting & Structuring",
    focus:
      "From prose to deterministic machine-readable data: JSON schemas, strict tool use, and grammar-constrained sampling.",
    days: [
      { id: "wk2-day1", topic: "Text → Structured Data (JSON)", concept: "Downstream systems need exact key-value pairs, not paragraphs.", resourceQuery: "Anthropic Structured Outputs JSON API" },
      { id: "wk2-day2", topic: "JSON Outputs via output_config.format", concept: "Schema-passing mathematically constrains the model to valid JSON.", resourceQuery: "Anthropic JSON Outputs format config" },
      { id: "wk2-day3", topic: "Strict Tool Use (strict: true)", concept: "Strict mode compiles the tool schema into a grammar constraint at inference.", resourceQuery: "Anthropic Strict Tool Use" },
      { id: "wk2-day4", topic: "Flattening Schemas & Reducing Complexity", concept: "Nested optionals explode grammar state space; flatten aggressively.", resourceQuery: "Anthropic JSON Schema limitations and complexity" },
      { id: "wk2-day5", topic: "Evaluating Output Consistency at Scale", concept: "Batch-test edge cases before shipping to production.", resourceQuery: "Anthropic Test and Evaluate Increase Consistency" },
      { id: "wk2-day6", topic: "Complex B2B Document Extraction (RAG & Chaining)", concept: "Chain a research prompt with a strict-structuring prompt.", resourceQuery: "Anthropic Capabilities Classification Guide Document Support" },
      { id: "wk2-day7", topic: "Steerability & Formatting Bleed", concept: "Prompt style leaks into output style — match discipline to intent.", resourceQuery: "Anthropic Claude Prompting Best Practices Output Formatting" },
    ],
    challenge: {
      scenario:
        "A workflow receives disorganized meeting transcripts. Extract action items + assignees into a strict format an n8n webhook can push directly to Asana/Jira.",
      instructions:
        "Write the exact JSON Schema for a strict output config extracting an array of 'tasks', each strictly requiring a 'description' (string) and 'assignee' (string).",
      language: "json",
      validationKey: `{
  "name": "extract_action_items",
  "description": "Extracts action items from meeting notes.",
  "strict": true,
  "input_schema": {
    "type": "object",
    "properties": {
      "tasks": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "description": { "type": "string" },
            "assignee": { "type": "string" }
          },
          "required": ["description", "assignee"]
        }
      }
    },
    "required": ["tasks"]
  }
}`,
      explanation:
        "strict:true blocks hallucinated keys. Marking description + assignee as required prevents 400 Bad Request downstream when a task lands in the project management API.",
    },
  },
  {
    id: "wk3",
    number: 3,
    title: "Claude Skills & Reusable Workflows",
    focus:
      "Encode domain expertise into portable SKILL.md directories with progressive disclosure.",
    days: [
      { id: "wk3-day1", topic: "Anatomy of an Agent Skill (SKILL.md)", concept: "A Skill folder bundles instructions, formats, and references into a domain specialist.", resourceQuery: "Anthropic Agent Skills Guide GitHub" },
      { id: "wk3-day2", topic: "Progressive Disclosure Architecture", concept: "Three-tier loading keeps context lean until relevance triggers deeper load.", resourceQuery: "Anthropic Agent Skills Progressive Disclosure" },
      { id: "wk3-day3", topic: "YAML Frontmatter & Activation Metadata", concept: "Trigger-heavy descriptions guarantee the skill activates when it should.", resourceQuery: "Anthropic Agent Skills Best Practices Frontmatter" },
      { id: "wk3-day4", topic: "Structuring the Main Instructions Body", concept: "Under 500 lines, sequential steps + anti-patterns beat vague guidance.", resourceQuery: "DeepLearning.AI Agent Skills with Anthropic" },
      { id: "wk3-day5", topic: "Bundling Assets & Reference Documents", concept: "assets/ and references/ let a skill pull templates and schemas dynamically.", resourceQuery: "Anthropic Skills References Assets Directory" },
      { id: "wk3-day6", topic: "Distributing & Managing Skill Libraries", concept: "Skills are portable folders — version-control them like source code.", resourceQuery: "Agentic Skills Enterprise Architects" },
      { id: "wk3-day7", topic: "Skills vs Tools vs Sub-Agents", concept: "Skills = how, Tools = where the data lives, Sub-Agents = who executes.", resourceQuery: "Skills vs MCP vs Subagents Human in the Loop" },
    ],
    challenge: {
      scenario:
        "A marketing agency automates weekly client reports via an n8n webhook. The agent can pull raw data via a tool, but needs a Skill to know exactly how to format that data to the agency's brand guidelines.",
      instructions:
        "Draft the SKILL.md YAML frontmatter (name + description) and the core XML-tagged instructions section directing the agent to locate the brand style guide and apply it.",
      language: "text",
      validationKey: `---
name: generate-branded-client-report
description: Formats raw marketing metrics into a branded weekly report.
  Use this skill whenever the user requests a client update, report
  generation, or metric formatting.
---

<instructions>
1. Read references/brand_style_guide.md to load the current voice, tone,
   and color palette rules.
2. Read assets/report_template.md as the structural skeleton.
3. Map incoming metrics (impressions, CTR, conversions) into the
   template sections in order.
4. Return the fully populated report wrapped in <report>...</report>
   tags so the downstream webhook can extract it cleanly.
</instructions>

<anti_patterns>
- Do not invent metric values.
- Do not deviate from the brand color hex codes in the style guide.
</anti_patterns>`,
      explanation:
        "Kebab-case name + trigger-heavy description satisfy the YAML constraints. Sequential XML instructions reference external files, using progressive disclosure to keep the base context lean.",
    },
  },
  {
    id: "wk4",
    number: 4,
    title: "The Agent Loop in No-Code",
    focus:
      "Map Observe → Reason → Act into the node-based canvas of n8n and Make.com.",
    days: [
      { id: "wk4-day1", topic: "Deterministic Automation vs Agentic Routing", concept: "Agentic routing lets the LLM choose the branch based on semantic intent.", resourceQuery: "Make.com The rise of nondeterministic automation" },
      { id: "wk4-day2", topic: "Anatomy of an Agent Node in n8n & Make", concept: "Agent nodes fuse LLM + memory + tools into one orchestrator.", resourceQuery: "How to build AI agents with Make n8n AI Agent Chat" },
      { id: "wk4-day3", topic: "Triggering Workflows with Webhooks & APIs", concept: "Webhooks are the sensory input that wakes an autonomous agent.", resourceQuery: "n8n Webhook Node Make Custom Webhook" },
      { id: "wk4-day4", topic: "Dynamic Parameter Extraction with $fromAI() (n8n)", concept: "$fromAI() lets the model populate tool parameters from context.", resourceQuery: "n8n Let AI specify tool parameters with fromAI" },
      { id: "wk4-day5", topic: "Defining Outputs with 'Return Output' (Make.com)", concept: "Sub-scenarios pass structured data back to the orchestrator agent.", resourceQuery: "Make.com Use scenario outputs" },
      { id: "wk4-day6", topic: "Memory Modules & Context Accumulation", concept: "Attach memory sub-nodes; summarize to keep context lean.", resourceQuery: "n8n Simple Memory Node Make AI Agent Memory" },
      { id: "wk4-day7", topic: "Architecting the Base Interaction Interface", concept: "Chat Triggers give you a live debugging UI for the agent loop.", resourceQuery: "n8n Chat Trigger AI Agent" },
    ],
    challenge: {
      scenario:
        "You're designing a custom HTTP tool in n8n so your agent can fetch weather data. Configure the 'city' query parameter so the AI populates it dynamically from the user's unstructured prompt.",
      instructions:
        "Write the exact n8n expression using $fromAI() to define the 'city' parameter, including its description and expected data type.",
      language: "text",
      validationKey: `{{ $fromAI("city", "The name of the city to get the weather for", "string") }}`,
      explanation:
        "$fromAI signals the Tools Agent to pause, analyze conversational context, extract the city as a string, and inject it into the HTTP request before execution.",
    },
  },
  {
    id: "wk5",
    number: 5,
    title: "Tool Use & Function Calling",
    focus:
      "Strip away the visual magic to see the JSON schemas that dictate how an AI chooses, executes, and recovers from tool calls.",
    days: [
      { id: "wk5-day1", topic: "The Tool-Use API Contract", concept: "LLMs emit tool_use JSON; your platform executes it and returns tool_result.", resourceQuery: "Anthropic How tool use works" },
      { id: "wk5-day2", topic: "Designing Custom API Tools (HTTP Requests)", concept: "The generic HTTP node turns any REST API into an agent tool.", resourceQuery: "n8n HTTP Request node as tool" },
      { id: "wk5-day3", topic: "Writing Effective Tool Descriptions", concept: "Ambiguous descriptions cause tool-selection failures.", resourceQuery: "Anthropic Tool description best practices" },
      { id: "wk5-day4", topic: "Formatting the Tool Return Payload", concept: "Strip noise before returning — raw API responses blow the context window.", resourceQuery: "Make Scenario Outputs n8n Tool Output format" },
      { id: "wk5-day5", topic: "Human-in-the-Loop & Approval Gates", concept: "Suspend the workflow on destructive actions until a human clicks approve.", resourceQuery: "n8n Human review for tool calls" },
      { id: "wk5-day6", topic: "Fallback Chains & Error Handling", concept: "Route tool errors back to the LLM so it can self-correct.", resourceQuery: "n8n AI agent error handling build resilient workflows" },
      { id: "wk5-day7", topic: "Controlling Costs & Latency", concept: "Cheap models for routing; terminate loops; clear stale history.", resourceQuery: "Reduce Claude API costs Superbuilder" },
    ],
    challenge: {
      scenario:
        "You're building an agent that checks customer billing status. Define the JSON schema for the tool check_billing_status so the LLM knows exactly what parameters to provide.",
      instructions:
        "Write the complete JSON schema for the tool input. It must strictly require customer_id (string) and an optional include_history (boolean).",
      language: "json",
      validationKey: `{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "The unique ID of the customer."
    },
    "include_history": {
      "type": "boolean",
      "description": "Set to true to return the last 5 invoices."
    }
  },
  "required": ["customer_id"]
}`,
      explanation:
        "This is the tool-use API contract. The LLM reads the schema at inference and knows it must find customer_id before calling the tool, while safely defaulting include_history to false.",
    },
  },
  {
    id: "wk6",
    number: 6,
    title: "Memory, Self-Correction & Systemization",
    focus:
      "Chain specialized agents with Supervisor-Worker orchestration, reflection loops, and observability for the Capstone.",
    days: [
      { id: "wk6-day1", topic: "The Supervisor-Worker Orchestrator Pattern", concept: "A Supervisor delegates sub-tasks to narrow, specialized Worker agents.", resourceQuery: "DeepLearning.AI Agentic AI Andrew Ng Multi-Agent" },
      { id: "wk6-day2", topic: "Verifier Logic & Automated QA (Reflection)", concept: "A second model critiques the first's output against a rubric.", resourceQuery: "DeepLearning.AI Agentic AI Reflection Andrew Ng" },
      { id: "wk6-day3", topic: "Implementing Sub-Agents in Visual Builders", concept: "Call Workflow / Call Scenario nodes turn whole workflows into tools.", resourceQuery: "n8n Call Workflow Tool Make Call a Scenario" },
      { id: "wk6-day4", topic: "Persistent Memory across Sessions (Vector Stores)", concept: "Databases + vector stores give agents long-term cross-session recall.", resourceQuery: "n8n Vector Store Pinecone" },
      { id: "wk6-day5", topic: "Observability, Tracing & Logging", concept: "Log the agent's reasoning path so failures become debuggable.", resourceQuery: "Nvidia Agent Toolkit Observability Phoenix Tracing" },
      { id: "wk6-day6", topic: "Finalizing the Capstone Architecture", concept: "Wire Webhook → Supervisor → Sub-Agents → Verifier → CRM.", resourceQuery: "Zero-Touch B2B Invoice RFP Orchestrator n8n" },
      { id: "wk6-day7", topic: "Deployment, Monitoring & Scaling", concept: "Fallback nodes, rate limits, and skill maintenance keep agents alive in prod.", resourceQuery: "Anthropic Founder's Playbook Scale" },
    ],
    challenge: {
      scenario:
        "Design the prompt for the Capstone's Verifier Agent. It receives the Worker agent's draft response and critiques it against a strict SKILL.md checklist before approval.",
      instructions:
        "Write the system prompt for the Verifier. It must take {{worker_draft}} and {{original_email}}, compare them against a QA checklist, and return a JSON object with 'status' (Approved/Rejected) and 'feedback_notes'.",
      language: "xml",
      validationKey: `<system_instructions>
You are an automated Quality Assurance Verifier.
Review the provided {{worker_draft}} against the {{original_email}}.

Checklist:
1. Does the draft address all questions in the original email?
2. Is the tone professional?
3. Are there any hallucinatory pricing figures?

You must output your evaluation strictly as JSON matching this schema:
{
  "status": "Approved" | "Rejected",
  "feedback_notes": "String explaining the rejection or approval logic."
}
</system_instructions>`,
      explanation:
        "This is the Reflection pattern. Enforcing strict JSON lets a router node parse 'status' — if Rejected, feedback_notes loops back to the Worker for retry; if Approved, the workflow proceeds.",
    },
  },
];

export const TOTAL_DAYS = WEEKS.reduce((n, w) => n + w.days.length, 0);
export const TOTAL_CHALLENGES = WEEKS.length;

export const findWeek = (id: string) => WEEKS.find((w) => w.id === id);