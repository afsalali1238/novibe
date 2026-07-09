export type ClusterId = "A" | "B" | "C" | "D" | "E" | "F";

export type ResourceType = "video" | "tool" | "article" | "paper" | "repo" | "doc" | "course";

export type NodeResource = {
  title: string;
  url: string;
  source: string; // author/publisher, shown as attribution
  type: ResourceType;
};

export type QuizQuestion = {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string; // shown after answering, whether right or wrong
};

export type NodeContent = {
  id: string;
  cluster: ClusterId;
  title: string;
  buildsOn: string[];
  seeAlso?: string[]; // lateral cross-links to related nodes, not a dependency
  layer0: string;
  layer1: string;
  layer2: string;
  diagram?: string; // raw inline SVG markup, rendered directly on node page
  resources?: NodeResource[]; // vetted external links - articles, tools, papers, videos
  quiz?: QuizQuestion; // optional one-question self-check, independent of "got it"
};

export type Cluster = {
  id: ClusterId;
  title: string;
  subtitle: string;
};
