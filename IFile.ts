export interface IFile {
  getName(): string;
  getSize(): number;
  getType(): string;
  getParent(): string;
  print(): void;
}
