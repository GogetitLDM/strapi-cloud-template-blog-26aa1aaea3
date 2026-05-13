import { extractTextFromBlocks } from "./blocks-editor-walker";

const WORDS_PER_MINUTE = 200;

interface ArticleBlock {
  __component: string;
  content?: unknown;
}

export function computeReadingTime(blocks: ArticleBlock[]): number {
  const wordCount = blocks
    .filter((b) => b.__component === "blocks.rich-text")
    .reduce((sum, b) => sum + countWords(b.content), 0);
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

function countWords(content: unknown): number {
  const texts = extractTextFromBlocks(content);
  return texts
    .map((t) => t.trim())
    .filter((t) => t.length > 0)
    .reduce((sum, t) => sum + t.split(/\s+/).length, 0);
}
