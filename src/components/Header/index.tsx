import Logo from "@/assets/images/logo.svg";
import DarkModeButton from "@/components/Header/DarkModeButton";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const HeaderContainer = styled.header({
  display: "flex",
  alignItems: "center",
  height: 60,
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

const HeaderLink = styled(Link)({});

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderSectionLogo>
          <HeaderLink href="/">
            <Image height={32} src={Logo} alt="blog.sungmin.me" />
          </HeaderLink>
        </HeaderSectionLogo>
        <HeaderSectionMenu>
          <DarkModeButton />
        </HeaderSectionMenu>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
