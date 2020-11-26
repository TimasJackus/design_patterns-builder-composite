import { FileType } from "./FileType";
import { IFile } from "./IFile";

export class Directory implements IFile {
  private name: string;
  private parent: string | null;
  private children: Array<IFile> = [];

  constructor(name: string, parent: string | null) {
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

  getType(): FileType {
    return FileType.Directory;
  }

  add(child: IFile) {
    this.children.push(child);
  }

  getChildren(): IFile[] {
    return this.children;
  }

  isDirectory(): this is Directory {
    return true;
  }

  printChildren(depth = 0) {
    this.children.forEach((child) => {
      child.print(depth + 1);
    });
  }

  print(depth = 0) {
    const indentation = " ".repeat(depth * 4);
    console.log(
      `${indentation}${
        this.name
      } (Size: ${this.getSize()}, Type: ${this.getType()})`
    );
    this.printChildren(depth);
  }
}
