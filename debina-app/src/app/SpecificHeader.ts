export class SpecificHeader {
  specificHeader: string;
  text: string;
  image: string;

  public constructor (p_specificHeader: string,
                      p_text: string,
                      p_img: string) {
    this.specificHeader = p_specificHeader;
    this.text = p_text;
    this.image = p_img;
  }
}
