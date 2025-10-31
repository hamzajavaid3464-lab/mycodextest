declare module 'reading-time' {
  interface ReadingTimeOptions {
    wordsPerMinute?: number;
    wordBound?: (character: string) => boolean;
  }

  interface ReadingTimeResult {
    text: string;
    minutes: number;
    time: number;
    words: number;
  }

  export default function readingTime(
    text: string,
    options?: ReadingTimeOptions,
  ): ReadingTimeResult;
}
