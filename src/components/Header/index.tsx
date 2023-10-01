import Logo from "@/assets/images/logo.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { RiMoonFill } from "react-icons/ri";

const HeaderContainer = styled.header({
  display: "flex",
  alignItems: "center",
  height: 60,
  backgroundColor: "#ffffff",
});

const HeaderInner = styled.div({
  display: "flex",
  width: 940,
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "center",
});

const HeaderSectionLogo = styled.div({
  display: "flex",
});

const HeaderSectionMenu = styled.div({
  display: "flex",
});

const HeaderThemeModeButton = styled.button({
  display: "flex",
  width: 32,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#000",
  border: "2px solid #000",
  borderRadius: 16,
  boxSizing: "border-box",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const HeaderLink = styled(Link)({});

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderSectionLogo>
          <HeaderLink href="/">
            <Image height={32} src={Logo} alt="R.MarkAI" />
          </HeaderLink>
        </HeaderSectionLogo>
        <HeaderSectionMenu>
          <HeaderThemeModeButton>
            <RiMoonFill size={20} />
          </HeaderThemeModeButton>
        </HeaderSectionMenu>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
