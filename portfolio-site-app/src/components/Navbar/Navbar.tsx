import { Wrapper, Nav, NavLinks, Bars, NavMenu } from "./Navbar.styled";

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLinks exact to="/" activeStyle>
            <div className="nav-title">Home</div>
          </NavLinks>

          <NavLinks to="/about" activeStyle>
            <div className="nav-title">About Me</div>
          </NavLinks>

          <NavLinks to="/projects" activeStyle>
            <div className="nav-title">Projects</div>
          </NavLinks>

          <NavLinks to="/contact" activeStyle>
            <div className="nav-title">Contact Me</div>
          </NavLinks>
        </NavMenu>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
