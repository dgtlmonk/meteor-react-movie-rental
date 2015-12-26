NavigationLayout = React.createClass({
  mixins: [ ReactMeteorData ],
  // this is important to kick in reactive
 getMeteorData() {
   return {
     brandLink: !!Meteor.user() ? '/hidden' : '/login' // this is just a dummy return to trigger render for some reason, maybe i don't figured this out yet
   };
 },

  isAdmin() {
    if (Roles.userIsInRole(Meteor.userId(), ['view-secrets','admin'])) {
        return true;
    }
    return false;
  },

  render: function() {
    return (
      <div className="vr-menu-sidebar">
        <nav className="vr-menu-sidebar__nav">
          <ul className="right hide-on-med-and-down">
            <li className='--active'>
              <a href="#!">
                <i className="material-icons">subtitles</i>
                <span>Movie Listing</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons">receipt</i>
                <span>Due to Return</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons">query_builder</i>
                <span>Overdue</span>
              </a>
            </li>
            { this.isAdmin() && <AdminSideNavOptions /> }
          </ul>
        </nav>
      </div>
    );
  }
});
