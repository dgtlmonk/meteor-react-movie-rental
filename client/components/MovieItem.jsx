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
    // console.log(this.state.movie)
  },

  isEditMode() {
    return this.state.editMode;
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

  handleChange: function (key) {
    // console.log('handleChange ...')
    //   return function (e) {
    //     var state = {};
    //     state[key] = e.target.value;
    //     this.replaceState(state);
    //   }.bind(this);
  },

  onDelete() {
    // Set the checked property to the opposite of its current value
    console.log('onDelete .... ');

  },

  componentWillUpdate(nextProp, nextState){
   console.log('componentWillUpdate ...');
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
                           <a className="btn-floating" onClick={this.handleUpdate}><i className="fa fa-check-square-o"></i></a>
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
                         <div className="col s12 right-align">
                           <a className="btn-floating waves-effect waves-light btn-icon--push-right" onClick={this.handleEditMode}><i className="fa fa-pencil-square-o"></i></a>
                           <a className="btn-floating" onClick={this.onDelete}><i className="fa fa-trash"></i></a>
                         </div>
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
              </div>
            </div>
          </div>
        </div>
    );
  }
});
