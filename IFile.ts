import { Directory } from "./Directory";
import { FileType } from "./FileType";
export interface IFile {
  getName(): string;
  getSize(): number;
  getType(): FileType;
  getParent(): string;
  isDirectory(): this is Directory;
  print(depth: number): void;
}
