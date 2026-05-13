interface BlocksTextNode {
  type: "text";
  text: string;
}

interface BlocksContainerNode {
  type: string;
  children?: unknown[];
}

type BlocksNode = BlocksTextNode | BlocksContainerNode | unknown;

export function extractTextFromBlocks(nodes: unknown): string[] {
  if (!Array.isArray(nodes)) return [];
  const result: string[] = [];

  for (const raw of nodes) {
    const node = raw as BlocksNode;
    if (isTextNode(node)) {
      result.push(node.text);
      continue;
    }
    if (isContainerNode(node)) {
      result.push(...extractTextFromBlocks(node.children));
    }
  }

  return result;
}

function isTextNode(node: unknown): node is BlocksTextNode {
  return (
    typeof node === "object" &&
    node !== null &&
    (node as { type?: unknown }).type === "text" &&
    typeof (node as { text?: unknown }).text === "string"
  );
}

function isContainerNode(node: unknown): node is BlocksContainerNode {
  return (
    typeof node === "object" &&
    node !== null &&
    Array.isArray((node as { children?: unknown }).children)
  );
}
