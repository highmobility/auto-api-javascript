export class AutoApiError extends Error {
  constructor(error: string | Error) {
    super(error instanceof Error ? error.message : error);
  }
}

export class InvalidCommandError extends AutoApiError {
  constructor(error: string | Error) {
    super(
      error instanceof InvalidCommandError
        ? error.message
        : `Invalid command: ${error instanceof Error ? error.message : error}`,
    );
  }
}

export class FormatError extends AutoApiError {
  constructor(error: string | Error) {
    super(
      error instanceof FormatError
        ? error.message
        : `Failed to parse payload: ${error instanceof Error ? error.message : error}`,
    );
  }
}
