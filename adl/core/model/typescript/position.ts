import { Node, SourceFile } from 'ts-morph';

/**
 * A range in a text document expressed as (zero-based) start and end positions.
 *
 * If you want to specify a range that contains a line including the line ending
 * character(s) then use an end position denoting the start of the next line.
 * For example:
 * ```ts
 * {
 *     start: { line: 5, character: 23 }
 *     end : { line 6, character : 0 }
 * }
 * ```
 */
export interface Range {
  /**
   * The range's start position
   */
  start: Position;
  /**
   * The range's end position.
   */
  end: Position;
}

/**
 * Position in a text document expressed as zero-based line and character offset.
 * The offsets are based on a UTF-16 string representation. So a string of the form
 * `a𐐀b` the character offset of the character `a` is 0, the character offset of `𐐀`
 * is 1 and the character offset of b is 3 since `𐐀` is represented using two code
 * units in UTF-16.
 *
 * Positions are line end character agnostic. So you can not specify a position that
 * denotes `\r|\n` or `\n|` where `|` represents the character offset.
 */
export interface Position {
  /**
   * Line position in a document (zero-based).
   * If a line number is greater than the number of lines in a document, it defaults back to the number of lines in the document.
   * If a line number is negative, it defaults to 0.
   */
  line: number;
  /**
   * Character offset on a line in a document (zero-based). Assuming that the line is
   * represented as a string, the `character` value represents the gap between the
   * `character` and `character + 1`.
   *
   * If the character value is greater than the line length it defaults back to the
   * line length.
   * If a line number is negative, it defaults to 0.
   */
  character: number;
}

/** A {@link Range} with the actual text value  */
export interface Text extends Range {
  value: string;
}

export class Range {
  static fromNode(node: Node): Range {
    return Range.fromOffsets(node.getSourceFile(), node.getNonWhitespaceStart(), node.getEnd());
  }

  static fromOffset(sourceFile: SourceFile, offset: number, width: number) {
    return Range.fromOffsets(sourceFile, offset, offset+width);
  }

  static fromOffsets(sourceFile: SourceFile, startOffset: number, endOffset: number) {
    return {
      start: Position.fromOffset(sourceFile, startOffset),
      end: Position.fromOffset(sourceFile,endOffset)
    };
  }

  static fromFile(sourceFile: SourceFile) {
    return Range.fromOffsets(sourceFile, 0, sourceFile.getEnd());
  }
}

export class Position {
  static fromNode(node: Node): Position {
    return Position.fromOffset(node.getSourceFile(), node.getNonWhitespaceStart());
  }

  static fromOffset(sourceFile: SourceFile, offset: number) {
    const { line, column } = sourceFile.getLineAndColumnAtPos(offset);
    return { line: line - 1, character: column - 1 };
  }
}


export interface Rangeable {
  readonly filename: string;
  readonly range: Range;
  readonly fullRange: Range;
}
