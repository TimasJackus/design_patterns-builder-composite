import { IFile } from "./IFile";

export class Directory implements IFile {
  private name: string;
  private parent: string;
  private files: Array<IFile> = [];

  constructor(name: string, parent: string) {
    this.setName(name);
    this.setParent(parent);
  }

  setName(name: string): void {
    this.name = name;
  }

  setParent(parent: string): void {
    this.parent = parent;
  }

  getParent(): string {
    return this.parent;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return 0;
  }

  getType(): string {
    return "Directory";
  }

  addFile(file: IFile) {
    this.files.push(file);
  }

  print() {
    console.log(
      `${this.getParent()}${
        this.name
      } (Size: ${this.getSize()}, Type: ${this.getType()})`
    );
    this.files.forEach((file) => {
      file.print();
    });
  }
}
