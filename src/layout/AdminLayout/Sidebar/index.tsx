import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import facebook from "assets/images/global/facebook.svg";
import favorite from "assets/images/global/favourite_icon.png";
import insta from "assets/images/global/insta.svg";
import language_icon from "assets/images/global/language-icon.webp";
import logout from "assets/images/global/logout.png";
import order_history from "assets/images/global/order_history.png";
import profile_icon from "assets/images/global/profile_icon.png";
import redeem from "assets/images/global/redeem.png";
import reward from "assets/images/global/reqwrd_icon.png";
import user_default from "assets/images/global/user_default.jpg";
import youtube from "assets/images/global/youtube.svg";
import useHelper from "hooks/useHelper";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store";
import { openLoginDrawer } from "store/loginDrawerReducer";
import { set_language } from "store/transalationReducer";
import Button from "ui-components/Button";
import { languages } from "utils/constants";
import { clearDataFromLocalStorage } from "utils/localStore";
import { handleClose } from "../../../store/drawerReducer";

export default function SideBar() {
  const drawer_open = useSelector((state: RootState) => state.drawer.opened);
  const { token, dispatch, pathname, lang } = useHelper();

  const handle_logout = () => {
    clearDataFromLocalStorage("token");
    window.location.reload();
  };

  useEffect(() => {
    dispatch(handleClose());
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <Drawer
      variant="temporary"
      anchor={"left"}
      open={drawer_open}
      onClose={() => dispatch(handleClose())}
      ModalProps={{
        keepMounted: true,
      }}
      style={{
        overflow: "hidden",
        zIndex: "9999999",
        width: 280,
        position: "relative",
      }}
    >
      <div style={{ width: 280, position: "relative" }}>
        <div style={{ paddingInline: 16 }}>
          <div
            style={{
              paddingBlock: 16,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={user_default}
              alt="User Default"
              loading="lazy"
              width={80}
              height={80}
              style={{ borderRadius: 100, marginBottom: 20 }}
            />
            {token ? (
              <>
                <p className="fs-20">Domino's</p>
                <span
                  className="Poppins-Regular fs-14"
                  style={{ color: "#333", margin: 0 }}
                >
                  +994 123456789
                </span>
                <div>
                  <Chip
                    avatar={
                      <Avatar sx={{ background: "#d3d3d3" }}>
                        <img
                          src={redeem}
                          alt="Redeem"
                          loading="lazy"
                          width={20}
                          height={20}
                        />
                      </Avatar>
                    }
                    style={{
                      width: "200px",
                      justifyContent: "flex-start",
                      paddingLeft: "8px",
                      height: "2em",
                      background: "#d3d3d3",
                      color: "#616161",
                    }}
                    label="Rewards: 1430 Points"
                  />
                </div>
              </>
            ) : (
              <>
                <p className="gray500 Poppins-SemiBold fs-12">
                  Login to unlock awesome new features
                </p>
                <Button
                  value={"Login"}
                  variant="gradient"
                  size="medium"
                  style={{ marginTop: 8 }}
                  onClick={() => {
                    dispatch(handleClose());
                    dispatch(openLoginDrawer());
                  }}
                />
              </>
            )}
          </div>

          <Divider />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingBlock: 18,
            }}
          >
            <img
              src={language_icon}
              alt="Languages"
              width={30}
              height={30}
              loading="lazy"
            />
            {languages.map(
              (item: any) =>
                item.lang !== lang && (
                  <img
                    onClick={() => {
                      dispatch(set_language(item.lang));
                    }}
                    src={item.flag}
                    alt={item.label}
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                )
            )}
          </div>
          <Divider />

          <div style={{ height: 245, overflow: "scroll" }}>
            <List>
              <Link to={"/user-profile"}>
                <ListItem>
                  <ListItemButton selected={pathname === "/user-profile"}>
                    <ListItemIcon>
                      <img
                        src={profile_icon}
                        alt="User"
                        width={27}
                        height={25}
                        loading="lazy"
                      />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to={"/order-history"}>
                <ListItem>
                  <ListItemButton
                    style={{ paddingBlock: 8 }}
                    selected={pathname === "/order-history"}
                  >
                    <ListItemIcon>
                      <img
                        src={order_history}
                        alt="Order History"
                        width={27}
                        height={25}
                        loading="lazy"
                      />
                    </ListItemIcon>
                    <ListItemText>Order History</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/favorites">
                <ListItem>
                  <ListItemButton
                    style={{ paddingBlock: 8 }}
                    selected={pathname === "/favorites"}
                  >
                    <ListItemIcon>
                      <img
                        src={favorite}
                        alt="Favorites"
                        width={27}
                        height={25}
                        loading="lazy"
                      />
                    </ListItemIcon>
                    <ListItemText>Favorites</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/my-rewards">
                <ListItem>
                  <ListItemButton
                    style={{ paddingBlock: 8 }}
                    selected={pathname === "/my-rewards"}
                  >
                    <ListItemIcon>
                      <img
                        src={reward}
                        alt="Redeem"
                        width={27}
                        height={25}
                        loading="lazy"
                      />
                    </ListItemIcon>
                    <ListItemText>Rewards</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>

            <Divider />
            <div style={{ paddingTop: 8 }}>
              <List>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemButton style={{ paddingBlock: 8 }}>
                      <ListItemText>About Domino's</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemButton style={{ paddingBlock: 8 }}>
                      <ListItemText>Suggestion and Complaint</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemButton style={{ paddingBlock: 8 }}>
                      <ListItemText>Terms of Service and Order</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemButton style={{ paddingBlock: 8 }}>
                      <ListItemText>Privacy Policy</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemButton style={{ paddingBlock: 8 }}>
                      <ListItemText>Contacts</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemButton style={{ paddingBlock: 8 }}>
                      <ListItemText>
                        <p className="Poppins-Regular fs-14">Join Us</p>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: 280,
            background: "white",
          }}
        >
          <Divider />

          <div
            style={{
              padding: 16,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div
              className="social_images"
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <Link to={"/"}>
                <img
                  src={facebook}
                  alt="Facebook"
                  width={35}
                  height={35}
                  loading="lazy"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src={insta}
                  alt="Instagram"
                  width={35}
                  height={35}
                  loading="lazy"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src={youtube}
                  alt="Youtube"
                  width={35}
                  height={35}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>

          <Divider />

          <div style={{ paddingInline: 16 }}>
            <List>
              <ListItem onClick={handle_logout} disablePadding>
                <ListItemButton style={{ paddingBlock: 8 }} disableRipple>
                  <ListItemIcon>
                    <img
                      src={logout}
                      alt="Logout"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
