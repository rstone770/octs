const $root = document.getElementById("root");

if ($root == null) {
  throw new Error("Unable to find root element");
}

type Props = {
  name: string;
  age: number;
};

class View {
  public readonly root: HTMLElement;

  constructor(props: Props) {
    this.root = document.createElement("div");
    this.root.classList.add("view");
  }

  public render() {}
}
