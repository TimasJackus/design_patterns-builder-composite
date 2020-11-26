import { FileType } from "./FileType";
import { File } from "./File";
import { Directory } from "./Directory";

export class FileSystemBuilder {
  private rootDirectory: Directory;

  constructor() {
    this.rootDirectory = new Directory("/", null);
  }

  getRootDir(): Directory {
    return this.rootDirectory;
  }

  findParentDirectoryByParentPaths(
    parentPaths: string[],
    currentParent: Directory = this.rootDirectory
  ): Directory {
    const children = currentParent.getChildren();
    const nextParent = children.find((child) => {
      return child.getName() === parentPaths[0] && child.isDirectory();
    }) as Directory;
    if (!nextParent) {
      throw new Error(`Parent ${parentPaths[0]} does not exist`);
    }
    const nextParentPaths = [...parentPaths];
    nextParentPaths.shift();
    if (nextParentPaths.length === 0) {
      return nextParent;
    }
    return this.findParentDirectoryByParentPaths(nextParentPaths, nextParent);
  }

  findParentDirectoryByPathString(parentPath: string): Directory {
    if (parentPath === "/") {
      return this.rootDirectory;
    }
    const parentPaths = parentPath
      .split("/")
      .filter((value) => value.length > 0);
    return this.findParentDirectoryByParentPaths(parentPaths);
  }

  addDirectory(name: string, parentPath: string = "/") {
    const parentDirectory = this.findParentDirectoryByPathString(parentPath);
    const directory = new Directory(name, parentDirectory.getName());
    parentDirectory.add(directory);
  }

  addFile(
    name: string,
    parentPath: string = "/",
    size: number = 0,
    type: FileType = FileType.TextFile
  ) {
    const parentDirectory = this.findParentDirectoryByPathString(parentPath);
    const file = new File(name, size, type, parentDirectory.getName());
    parentDirectory.add(file);
  }

  remove() {}
}
