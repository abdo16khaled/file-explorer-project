import React from "react";

type ContextMenuProps = {
  x: number;
  y: number;
  onDelete: () => void;
  onRename: () => void;
  onCopy: () => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onDelete, onRename, onCopy }) => {
  return (
    <div
      className="context-menu"
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        zIndex: 1000,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        <li onClick={onCopy} style={{ padding: "8px", cursor: "pointer" }}>
          Copy
        </li>
        <li onClick={onRename} style={{ padding: "8px", cursor: "pointer" }}>
          Rename
        </li>
        <li onClick={onDelete} style={{ padding: "8px", cursor: "pointer" }}>
          Delete
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;