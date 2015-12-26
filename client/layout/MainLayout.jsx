/* used in routes.js */
MainLayout = React.createClass({

  render: function() {
    return (
      <div>
        <div className='vr-header'>
          {this.props.header }
        </div>

        { this.props.navigation }

        <div className="container vr-content">
          { this.props.content }
        </div>

      </div>
    );
  }

});
