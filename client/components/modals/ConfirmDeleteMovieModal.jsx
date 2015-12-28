ConfirmDeleteMovieModal = React.createClass({
   propTypes: {
     onOk: React.PropTypes.func.isRequired,
     movie: React.PropTypes.object.isRequired
   },
   mixins: [RMMx.changeDatatMx],

   handleOk() {
     this.props.onOk();
   },

   handleCancel(){

   },

   render : function() {
     return (
      <div id="confirmDeleteModal" className="modal modal bottom-sheet">
        <div className="modal-content">
          <h4 className="brown-text darken-3-text"><i className="fa fa-exclamation-triangle"></i>Confirm Delete</h4>
          <p className="red-text accent-3-text">This operation is permanent. Are you sure you want to delete this movie ({this.props.movie.name})?</p>
        </div>
        <div className="modal-footer">
          <a href="#!" onClick={this.handleOk} className="modal-action modal-close waves-effect waves-green btn blue darken-2">Ok</a>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn --space-right">Cancel</a>
        </div>
      </div>
     )
   }

})
