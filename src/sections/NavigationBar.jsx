import NavItem from '../components/NavItem';

function NavigationBar() {
  return (
    <div className="flex justify-center gap-16 py-16">
      <NavItem text={'<Home/>'}></NavItem>
      <NavItem text={'<My Work/>'}></NavItem>
      <NavItem text={'<Experience/>'}></NavItem>
    </div>
  );
}

export default NavigationBar;
