export type FileNode = {
    type: "folder" | "file";
    name: string;
    meta?: string;
    data?: FileNode[];
  };
  
export type FileExplorerProps = {
    fileTree: FileNode;
  };