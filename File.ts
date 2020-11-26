import { Directory } from "./Directory";
import { FileType } from "./FileType";
import { IFile } from "./IFile";

export class File implements IFile {
  private name: string;
  private size: number;
  private type: FileType;
  private parent: string;

  constructor(name: string, size: number, type: FileType, parent: string) {
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

  setType(type: FileType): void {
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

  getType(): FileType {
    return this.type;
  }

  getParent(): string {
    return this.parent;
  }

  isDirectory(): this is Directory {
    return false;
  }

  print(depth: number = 0) {
    const indentation = "  ".repeat(depth);
    console.log(
      `${indentation}${
        this.name
      } (Size: ${this.getSize()}, Type: ${this.getType()})`
    );
  }
}
