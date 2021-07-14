import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className='nav__left'><h4>Online Store</h4></div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i className='fa fa-shopping-cart' aria-hidden='true' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
