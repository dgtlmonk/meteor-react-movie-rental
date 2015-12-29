MovieItemMenu = React.createClass({
  mixins: [ ReactMeteorData ],

  propTypes: {
    isEditMode: React.PropTypes.bool.isRequired,
    onToggleEditMode:  React.PropTypes.func.isRequired,
    onDelete:  React.PropTypes.func,
    onUpdate:  React.PropTypes.func,
  },
  // this is important to kick in reactive
 getMeteorData() {
   return {
     brandLink: !!Meteor.user() ? '/hidden' : '/login' // this is just a dummy return to trigger render for some reason, as i haven't figured this out yet :P
   };
 },

  isAdmin() {
    if (Roles.userIsInRole(Meteor.userId(), ['view-secrets','admin'])) {
        return true;
    }
    return false;
  },

  handleUpdate(e) {
    e.preventDefault();
    this.props.onUpdate();
  },

  handleDelete() {
    if (typeof this.props.onToggleEditMode === 'function') {
        this.props.onDelete();
      }
  },

  handleToggleEditMode() {
    if (typeof this.props.onToggleEditMode === 'function') {
        this.props.onToggleEditMode();
      }
  },

  render: function() {
    const btnClass = "btn-floating waves-effect waves-light btn-icon--push-right ";
      if (this.props.isEditMode) {
        return (
          <div className="col s12 right-align">
            <a className="btn-floating" onClick={this.handleUpdate}><i className="fa fa-check-square-o"></i></a>
          </div>
        )
      } else {
        return (
          <div className="col s12 right-align">
            <a className={btnClass} onClick={this.handleRentMovie}><i className="fa fa-cart-plus"></i></a>
            <a className={btnClass, 'hide'} onClick={this.handleRentMovie}><i className="fa fa-sign-out"></i></a>
            <a className={!this.isAdmin() ? 'hide' : btnClass}
              onClick={this.handleDelete}>
              <i className="fa fa-trash"></i>
            </a>
            <a className={!this.isAdmin() ? 'hide' : btnClass}
              onClick={this.handleToggleEditMode}>
              <i className="fa fa-pencil-square-o"></i>
            </a>
          </div>
        )
      }
  }

});
