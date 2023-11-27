import NavItem from '../components/NavItem';

function NavigationBar() {
  return (
    <div className="hidden justify-center gap-16 pt-16 md:flex">
      <NavItem text={'<My Work/>'} to={'projects'} />
      <NavItem text={'<Experience/>'} to={'experience'} />
    </div>
  );
}

export default NavigationBar;
