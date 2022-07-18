import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import SvgLogo from "./SvgLogo";
import CartIcon from "./Cart/CartIcon";
import CartDropDown from "./Cart/CartDropDown";

import { AiOutlineUser } from "react-icons/ai";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const [cart, setCart] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  function onCartClose() {
    setCart(false);
  }

  return (
    <Nav>
      <Logo href="/">
        <SvgLogo />A<span>raksha</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu open={open}>
        <MenuLink href="/aboutus">AboutUs</MenuLink>
        <MenuLink href="/products">Product</MenuLink>
        {/* <MenuLink href="">
          {" "}
          {/*<BsCart />}
          <div onClick={() => setCart(!cart)}>
            <CartIcon />
          </div>
  </MenuLink> */}
        <div onClick={() => setCart(!cart)}>
          <CartIcon />
        </div>

        {token ? <MenuLink href="/track">Track</MenuLink> : null}

        {token ? (
          <MenuLink>
            <AiOutlineUser onClick={() => dispatch(logOut())} />
            {user?.name}
          </MenuLink>
        ) : (
          <MenuLink href="/login">
            {" "}
            <AiOutlineUser />
            Login
          </MenuLink>
        )}
      </Menu>

      {cart && <CartDropDown onCartClose={onCartClose} />}
    </Nav>
  );
};

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ececec;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;

  &:hover {
    color: #9cc094;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // background: #000080;
  background: linear-gradient(to bottom right, #000080, #5757c2);
  height: 110px;

  /* position: absolute; */

  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ececec;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.5rem;
  display: flex;
  padding: 40px;
  align-items: center;

  span {
    font-weight: 300;
    font-size: 1.8rem;
    flex-grow: 1;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #ececec;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    z-index: 20;
  }
`;
