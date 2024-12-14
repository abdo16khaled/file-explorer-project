import React, { useState } from "react";
import "./../../styles/file-explorer.css";
import { FileExplorerProps, FileNode } from "../../models/file-explorer.model";
import ContextMenu from "../context-menu/context-menu";


const FileExplorer: React.FC<FileExplorerProps> = ({ fileTree }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    file: FileNode | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    file: null,
  });

  const toggleFolder = (path: string) => {
    setExpanded((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const handleRightClick = (event: React.MouseEvent, file: FileNode) => {
    event.preventDefault(); // Prevent the default context menu from showing
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      file: file,
    });
  };
const handleDelete = () => {
    if (contextMenu.file) {
      console.log(`Deleted: ${contextMenu.file.name}`);
      setContextMenu((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleRename = () => {
    if (contextMenu.file) {
      console.log(`Renamed: ${contextMenu.file.name}`);
      setContextMenu((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleCopy = () => {
    if (contextMenu.file) {
      console.log(`Copied: ${contextMenu.file.name}`);
      setContextMenu((prev) => ({ ...prev, visible: false }));
    }
  };
  const renderTree = (node: FileNode, path: string) => {
    const isFolder = node.type === "folder";
    const fullPath = `${path}/${node.name}`;
    const isExpanded = expanded[fullPath] || false;

    return (
      <div key={fullPath} className={`node ${selected === fullPath ? "selected" : ""}`}>
        <div
          className="node-label"
          onClick={() => (isFolder ? toggleFolder(fullPath) : setSelected(fullPath))}
          onContextMenu={(e) => handleRightClick(e, node)}
        >
          {isFolder ? (isExpanded ? "📂" : "📁") : "📄"} {node.name}
        </div>
        {isFolder && isExpanded && (
          <div className="node-children">
            {node.data?.map((child) =>
              renderTree(child, fullPath)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="file-explorer">
      {renderTree(fileTree, "")}
      {contextMenu.visible && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onDelete={handleDelete}
          onRename={handleRename}
          onCopy={handleCopy}
        />
      )}
    </div>
  );
};

export default FileExplorer;
