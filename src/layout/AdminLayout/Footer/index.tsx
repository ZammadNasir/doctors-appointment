import { Link } from "react-router-dom";

export default function Footer({
  classes,
}: {
  classes: Record<string, never>;
}) {
  return (
    <footer
      style={{
        background: "#f8f8f8",
        marginTop: 20,
        height: 60,
        paddingBlock: 20
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 40
        }}
      >
        <div>
          <Link style={{fontSize: 14, color: "#444444"}} to={"/admin/dashboard"}>Privacy Policy</Link>
          &nbsp;
          &nbsp;
          <Link style={{fontSize: 14, color: "#444444"}} to={"/admin/dashboard"}>Terms & Conditions</Link>
        </div>
        <div>
          <span className="fs-12">
            Copyright © {new Date().getFullYear()} H-Cloud. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
