export default class TemplateMainPage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
  }

  public render(): HTMLElement {
    this.container.innerText = "MAIN";
    return this.container;
  }
}
