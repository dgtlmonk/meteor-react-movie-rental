Dashboard = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // This is the place to subscribe to any data you need
    let handle =   Movies.find().fetch();
    return {
      movies : handle
    };
  },

  renderMovies() {
    return this.data.movies.map((movie) => {
      return <MovieItem  key={movie._id} movie={movie} editMode={false}/>;
    });
  },

  componentDidMount: function() {
    console.log('componentDidMount... ');
  },

  render: function() {
    return (
      <div className='row'>
          <h4>Dashboard</h4>
          { this.renderMovies() }
      </div>
    );
  }

});
