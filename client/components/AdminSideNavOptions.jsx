AdminSideNavOptions = React.createClass({
  render: function() {
    return (
      <li>
        <a href={ FlowHelpers.pathFor( 'newItem') }>
          <i className="material-icons">playlist_add</i>
          <span>Add Item</span>
        </a>
      </li>
    );
  }

});
