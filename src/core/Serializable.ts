export abstract class Serializable {
  public abstract encode(options?: Record<string, unknown>): number[];
  public abstract decode(bytes: number[], options?: Record<string, unknown>): Serializable;
  public abstract fromJSON(payload: Record<string, unknown> | unknown): Serializable;
}
