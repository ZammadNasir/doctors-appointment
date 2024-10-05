import Badge from "@mui/material/Badge";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import useHelper from "hooks/useHelper";
import { lazy } from "react";
import { useDispatch } from "react-redux";
import { openLoginDrawer } from "store/loginDrawerReducer";
import { set_language } from "store/transalationReducer";
import Loadable from "ui-components/Loadable";
import { languages } from "utils/constants";
import cart from "../../../../assets/images/header/cart_icon.svg";
import motorbike from "../../../../assets/images/header/motorbike.svg";
import store_icon from "../../../../assets/images/header/store_icon.svg";
import user_icon from "../../../../assets/images/header/user.svg";

const CustomToolTip = Loadable(lazy(() => import("ui-components/Tooltip")));
const UserToolTip = Loadable(lazy(() => import("ui-components/UserTooliTip")));

const LanguageFlags = ({ lang }: { lang: string }) => {
  const dispatch = useDispatch();
  return languages.map(
    (item: { label: string; lang: string; flag: any }) =>
      item.lang !== lang && (
        <>
          <div
            onClick={() => {
              dispatch(set_language(item.lang));
            }}
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              justifyContent: "center",
              padding: 4,
              cursor: "pointer",
            }}
          >
            <img src={item.flag} height={25} width={25} alt={item.label} />
            <span className="fs-14">{item.label}</span>
          </div>
          <Divider />
        </>
      )
  );
};

export default function HeaderIcons({ lang }: { lang: string }) {
  const { isMobile, dispatch, token } = useHelper();

  const parent_div: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  };

  return (
    <div style={{ display: "flex", gap: 26, alignItems: "flex-end" }}>
      {!isMobile && (
        <>
          <div style={parent_div}>
            <ButtonBase href="/stores">
              <img
                // src={header_icons.store_icon}
                src={store_icon}
                alt="store"
                width={isMobile ? 25 : 35}
                height={isMobile ? 25 : 35}
              />
            </ButtonBase>
            <span className="Poppins-Regular fs-12 text-lightest-gray">
              Stores
            </span>
          </div>
          <div style={parent_div}>
            <ButtonBase href="/tracker">
              <img
                style={{ marginBottom: -2 }}
                // src={header_icons.motorbike}
                src={motorbike}
                alt="tracker"
                width={isMobile ? 25 : 42}
                height={isMobile ? 25 : 42}
              />
            </ButtonBase>
            <span className="Poppins-Regular fs-12 text-lightest-gray">
              Tracker
            </span>
          </div>
          <CustomToolTip
            width={"80px"}
            height={"auto"}
            show_arrow={true}
            placement="bottom-end"
            title={<LanguageFlags lang={lang} />}
          >
            <div style={parent_div}>
              <ButtonBase>
                <img
                  src={
                    lang === "en"
                      ? languages[0].flag
                      : lang === "az"
                      ? languages[1].flag
                      : languages[2].flag
                  }
                  alt="Eng"
                  width={isMobile ? 25 : 35}
                  height={isMobile ? 25 : 35}
                />
              </ButtonBase>
              <span className="Poppins-Regular fs-12 text-lightest-gray">
                {lang === "en"
                  ? languages[0].label
                  : lang === "az"
                  ? languages[1].label
                  : languages[2].label}
              </span>
            </div>
          </CustomToolTip>

          {token ? (
            <CustomToolTip
              width={"250px"}
              height={"auto"}
              show_arrow={true}
              placement="bottom-end"
              title={<UserToolTip />}
            >
              <div style={parent_div}>
                <ButtonBase>
                  <img
                    src={user_icon}
                    alt="User"
                    width={isMobile ? 25 : 35}
                    height={isMobile ? 25 : 35}
                  />
                </ButtonBase>
                <span className="Poppins-Regular fs-12 text-lightest-gray">
                  Domino's
                </span>
              </div>
            </CustomToolTip>
          ) : (
            <div style={parent_div}>
              <ButtonBase onClick={() => dispatch(openLoginDrawer())}>
                <img
                  src={user_icon}
                  alt="User"
                  width={isMobile ? 25 : 35}
                  height={isMobile ? 25 : 35}
                />
              </ButtonBase>
              <span className="Poppins-Regular fs-12 text-lightest-gray">
                User
              </span>
            </div>
          )}
        </>
      )}
      <CustomToolTip
        width={"400px"}
        height={"400px"}
        minWidth={400}
        show_arrow={true}
        placement="bottom-end"
        title={<></>}
      >
        <div style={parent_div}>
          {/* <ButtonBase href="/cart">
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  top: 6,
                },
              }}
              color="error"
            >
              <img
                src={cart}
                alt="cart"
                width={isMobile ? 25 : 35}
                height={isMobile ? 25 : 35}
              />
            </Badge>
          </ButtonBase> */}
          {!isMobile && (
            <span className="Poppins-Regular fs-12 text-lightest-gray">Cart</span>
          )}
        </div>
      </CustomToolTip>
    </div>
  );
}
