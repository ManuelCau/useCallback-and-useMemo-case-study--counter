import React from "react";

type ChildProps = {
  onClick: () => void;
  label?: string;
};

export const ChildComponent: React.FC<ChildProps> = React.memo(
  ({ onClick, label = "Child Button" }) => {
    console.log("Child Render");

    return (
      <div>
        <button onClick={onClick}>{label}</button>
      </div>
    );
  }
);
