import Logo from "./Logo"
import Menu from "./Menu"

const Nav = () => {
  return (
    <nav className="bg-background-navy2 row-span-12 rounded-2xl p-4 flex flex-col gap-8 justify-start items-center">
      <Logo />
      <Menu />
    </nav>
  )
}

export default Nav