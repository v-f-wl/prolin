import Logo from "./headerUI/Logo";
import ProfileDropdown from "./headerUI/ProfileDropdown";
import Search from "./headerUI/Search";
import ThemeSwitch from "./headerUI/ThemeSwitch";

const Header = () => {
  return (  
    <div className="flex py-8 items-center justify-between">
      <Logo/>
      <Search/>
      <ThemeSwitch/>
      <ProfileDropdown/>
    </div>
  );
}
 
export default Header;