import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import Button from "ui-components/Button";

export default function CartToolTip() {
  return (
    <div>
      <div
        style={{
          height: 340,
          paddingBottom: 22,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {[].map((item: any) => {
          return (
            <>
              <div
                style={{
                  position: "relative",
                  padding: 16,
                }}
              >
                <div style={{ position: "absolute", right: 10, top: 10 }}>
                  <CloseIcon style={{ fontSize: 16, cursor: "pointer" }} />
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <img
                    src={item.en_content.web_media_detail}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain", display: "inline-block" }}
                    alt={item.en_content.web}
                    loading="lazy"
                  />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      gap: ".5rem",
                    }}
                  >
                    <div>
                      <p className="Poppins-Bold fs-18">{item.en_content.web}</p>
                      {item.category_code === "pizza" && (
                        <p className="gray200 capitalize fs-12">
                          {item.products[0].size_code},{" "}
                          {item.products[0].dough?.dough_desc?.en}
                        </p>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="Poppins-Bold fs-20 text-blue">34:00 ₼</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </>
          );
        })}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 14,
          width: "100%",
          background: "#fff",
          boxShadow: "0px -6px 7px 1px rgba(166,166,166,1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
          }}
        >
          <Button value={"View Cart"} variant="blue" />
          <h3 className="fs-22 Poppins-Bold">Total &nbsp;&nbsp;&nbsp; 28:00 ₼</h3>
        </div>
      </div>
    </div>
  );
}
