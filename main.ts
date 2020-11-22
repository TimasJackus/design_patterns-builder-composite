import { Directory } from "./Directory";
import { File } from "./File";
import { FileSystemBuilder } from "./FileSystem";

(() => {
  // const directory = new Directory("root");
  // const file = new File("file_name.txt", 1000, "/root/");
  // const testDirectory = new Directory("test", "/root/");
  // const file2 = new File("file_name2.txt", 1000, "/root/test/");
  // directory.addFile(file);
  // directory.addFile(testDirectory);
  // testDirectory.addFile(file2);
  // directory.print();
})();

(() => {
  const fileSystemBuilder = new FileSystemBuilder();
  console.log(fileSystemBuilder);
})();
