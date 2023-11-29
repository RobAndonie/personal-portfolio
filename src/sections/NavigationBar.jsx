import NavItem from '../components/NavItem';

function NavigationBar() {
  return (
    <div className="flex h-1/6 justify-center gap-16">
      <NavItem text={'<My Work/>'} to={'projects'} />
      <NavItem text={'<Experience/>'} to={'experience'} />
    </div>
  );
}

export default NavigationBar;
