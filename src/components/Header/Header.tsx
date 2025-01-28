import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/e-letter.svg";
import {
  Container,
  Link,
  IconButton,
  Drawer,
  List,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "О НАС", href: "/" },
    { text: "КОНТАКТЫ", href: "/" },
    { text: "ПРОЕКТЫ", href: "/" },
    { text: "НАПИСАТЬ НАМ", href: "/" },
  ];

  return (
    <div className="header__container">
      <Container maxWidth="lg">
        <div className="header">
          <div className="left">
            <Link className="link" href="/">
              О НАС
            </Link>
            <Link className="link" href="/">
              КОНТАКТЫ
            </Link>
          </div>

          <div className="logo">
            <img src={logo} alt="" />
            <h4>upBuilding</h4>
          </div>

          <div className="right">
            <Link className="link" href="/">
              ПРОЕКТЫ
            </Link>
            <Link className="link" href="/">
              НАПИСАТЬ НАМ
            </Link>
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="burger"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Container>

      <Drawer
        style={{ background: "black" }}
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: "drawer-paper" }}
      >
        <div className="list">
          <List>
            {menuItems.map((item) => (
              <ListItemText key={item.text} onClick={toggleDrawer(false)}>
                <Link className="link" href={item.href}>
                  {item.text}
                </Link>
              </ListItemText>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
