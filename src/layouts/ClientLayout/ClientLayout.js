import React from "react";
import { Navigation } from "../../components";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div className="client-layout">
      <Navigation />
      <div className="children">{children}</div>
    </div>
  );
}
