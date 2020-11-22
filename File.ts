import { IFile } from "./IFile";
// default browser
export class File implements IFile {
  private name: string;
  private size: number;
  private type: string;
  private parent: string;

  constructor(name: string, size: number, type: string, parent: string) {
    this.setName(name);
    this.setSize(size);
    this.setParent(parent);
    this.setType(type);
  }

  setName(name: string) {
    this.name = name;
  }

  setSize(size: number): void {
    this.size = size;
  }

  setType(type: string): void {
    this.type = type;
  }

  setParent(parent: string): void {
    this.parent = parent;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  getType(): string {
    return this.type;
  }

  getParent(): string {
    return this.parent;
  }

  print() {
    console.log(
      `${this.getParent()}${
        this.name
      } (Size: ${this.getSize()}, Type: ${this.getType()})`
    );
  }
}
