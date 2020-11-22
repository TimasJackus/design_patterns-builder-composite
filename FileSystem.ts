import { IFile } from "./IFile";
import { Directory } from "./Directory";

export class FileSystemBuilder {
  private path = "/";
  private rootDirectory: Directory = new Directory("/");

  addDirectory(name) {}

  addToParent() {}

  remove() {}
}
