import { FileSystemBuilder } from "./FileSystem";
import { FileType } from "./FileType";

(() => {
  const fileSystemBuilder = new FileSystemBuilder();
  fileSystemBuilder.addDirectory("test", "/");
  fileSystemBuilder.addDirectory("test-subfolder", "/test/");
  fileSystemBuilder.addDirectory("some-subfolder", "/test/test-subfolder/");
  fileSystemBuilder.addDirectory("aa", "/");
  fileSystemBuilder.addDirectory("aa-subfolder", "/aa");
  fileSystemBuilder.addFile("testinis_failas.txt", "/aa", 100);
  fileSystemBuilder.addFile(
    "testinis_failas.png",
    "/test",
    2048,
    FileType.Image
  );
  fileSystemBuilder.getRootDir().print();
})();
