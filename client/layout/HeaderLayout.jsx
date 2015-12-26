HeaderLayout = React.createClass({

  render: function() {
    return (
      <div className='row'>
        <nav className='nav-green'>
            <div className="nav-green__nav-wrapper nav-wrapper">
              <a href="/" className="brand-logo center">Movie Rental</a>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className='nav-green__search'>
                  <NavSearchInput />
                </li>
                <li className="nav-green__login">
                  <AccountsUIWrapper />
                </li>
              </ul>


            </div>

          </nav>
      </div>
    );
  }

});
