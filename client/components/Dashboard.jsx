Dashboard = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState: function () {
    return { selectedMovie: {} };
  },

  getMeteorData() {
    // This is the place to subscribe to any data you need
    let handle =   Movies.find().fetch();
    return {
      movies : handle
    };
  },

  handleSelectedMovie(movie) {
    this.setState({
      selectedMovie : movie
    });
  },

  handleDeleteOk() {
    let movie = Movies.findOne({_id:this.state.selectedMovie._id});
    Movies.remove({_id:movie._id});
    $('#confirmDeleteModal').closeModal();
  },

  renderMovies() {
    return this.data.movies.map((movie) => {
      return <MovieItem  key={movie._id} movie={movie} editMode={false} onSelectMovie={this.handleSelectedMovie}/>;
    });
  },

  componentDidMount: function() {
    console.log('componentDidMount... ');
  },

  render: function() {
    return (
      <div className='row'>
          <h4>Movies</h4>
          { this.renderMovies() }
          <ConfirmDeleteMovieModal onOk={this.handleDeleteOk} movie={this.state.selectedMovie}/>
      </div>
    );
  }

});
