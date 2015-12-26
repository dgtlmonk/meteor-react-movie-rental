/* Subject for refactor - stateless micro components */

MovieItem = React.createClass({
  mixins: [LinkedStateMixin],
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      editMode: this.props.editMode,
      movie: this.props.movie,
      name: this.props.movie.name,
      desc: this.props.movie.desc,
      director: this.props.movie.director,
      id: this.props.movie._id
    };
  },

  toggleEditMode() {
    let newState = !this.state.editMode;
    this.setState({
      editMode : newState
    });
  },

  isEditMode() {
    return this.state.editMode;
  },

  handleRentMovie() {
    let movie = Movies.findOne({_id:this.state.movie._id});
    console.log('handleRentMovie ...')
  },

  handleDeleteConfirm() {
    this.handleSelectedMovie(this.state.movie);
    $('#confirmDeleteModal').openModal();
    console.log('deletion confirmation ...');
  },

  handleSelectedMovie(movie){
    this.props.onSelectMovie(movie); // pass active movie to parent component
  },

  handleEditMode() {
    this.toggleEditMode();
  },

  handleUpdate(e) {
    e.preventDefault();

    // Get values via this.refs
    let data = {
      name     : ReactDOM.findDOMNode(this.refs.name).value,
      director : ReactDOM.findDOMNode(this.refs.director).value,
      desc    : ReactDOM.findDOMNode(this.refs.desc).value,
    };

    this.setState({
      movie: data
    });

    let movie = Movies.findOne({_id:this.state.movie._id});
    // Movies.update(movie, )
    Movies.update({_id:movie._id}, {$set:{
      name : data.name,
      desc: data.desc,
      director: data.director
    }});

   this.toggleEditMode();
  },

  componentWillUpdate(nextProp, nextState){
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div className="movie-item-card s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text input-field">
            {(() => {
              if (this.isEditMode()) {
               return (
                   <span>
                     <div className="col s12 right-align">
                          <MovieItemMenu isEditMode={this.isEditMode()} onToggleEditMode={this.toggleEditMode}/>
                     </div>
                     <span className="movie-item-card__title">
                       <div className="col s6">
                          <i className="material-icons prefix">mode_edit</i>
                         <input
                           defaultValue={this.state.movie.name}
                           ref="name"
                           type="text"/>
                       </div>

                      <div className="col s6">
                         <i className="material-icons prefix">mode_edit</i>
                        <input
                          defaultValue={ this.state.movie.director }
                          ref="director"
                          type="text"/>
                      </div>

                      <div className="col s12">
                         <i className="material-icons prefix">mode_edit</i>
                        <textarea
                          className="materialize-textarea"
                          defaultValue={ this.state.movie.desc}
                          ref="desc"/>
                      </div>
                     </span>
                   </span>
                 )
               } else {
                 return (
                   <span>
                       <MovieItemMenu isEditMode={this.isEditMode()} onToggleEditMode={this.toggleEditMode}  onDelete={this.handleDeleteConfirm}/>
                       <span className="movie-item-card__title">
                         { this.state.movie.name } - { this.state.movie.director }
                       </span>
                       <p> { this.state.movie.desc } </p>
                   </span>
                 )
               }
              })()}
            <div className="card-action">
               <a target="_blank" href={this.props.clip}><i className="material-icons vr-icon">movie</i> WATCH TRAILER</a>
               <span className="right"><i className="fa fa-info-circle"></i> { this.state.movie.available ? 'Available': 'Unvailable'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
