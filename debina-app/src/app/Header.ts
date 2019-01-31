export class Header {
  header: string;
  internalHeaders: Array<string>;

  public constructor (p_header: string,
                      p_internalHeaders: Array<string>) {
    this.header = p_header;
    this.internalHeaders = p_internalHeaders;
  }
}
