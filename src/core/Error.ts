export class JSONError extends Error {
  public constructor(error: string | Error) {
    super(
      error instanceof JSONError
        ? error.message
        : `Failed to parse JSON: ${error instanceof Error ? error.message : error}`,
    );
  }
}
