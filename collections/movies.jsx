Movies = new Mongo.Collection("movies", {idGeneration: 'MONGO'});

if ( Meteor.isClient ) {


  let GenerateMongoID = ()=> {
    return new Meteor.Collection.ObjectID()._str;
  }


  if (Movies.find().count() === 0) {
    Movies.insert({
      name: 'Jurassic Park (1993)',
      desc: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok. (127 mins.)',
      director: 'Steven Spielberg',
      clip: 'https://www.youtube.com/watch?v=PJlmYh27MHg&list=PLZbXA4lyCtqrd-fXvh6kIIEpRDBLEnJs9',
      _id: GenerateMongoID()
    });

    Movies.insert({
      name: 'The Da Vinci Code (2006)',
      desc: 'A murder inside the Louvre and clues in Da Vinci paintings lead to the discovery of a religious mystery protected by a secret society for two thousand years -- which could shake the foundations of Christianity.',
      director: 'Ron Howard',
      clip: 'https://www.youtube.com/watch?v=F9QZxY5IP10',
      _id: GenerateMongoID()
    });

    Movies.insert({
      name: 'Troy (2004)',
      desc: "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved. (163 mins.)",
      director: 'Wolfgang Petersen',
      clip: 'https://www.youtube.com/watch?v=znTLzRJimeY',
      _id: GenerateMongoID()
    });


    Movies.insert({
      name:"The Hangover (2009)", desc: "Three buddies wake up from a bachelor party in  Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to fin their friend before his weddding. (100 mins)",
      director:"Todd Phillips",
      clip:"https://www.youtube.com/watch?v=vhFVZsk3XEs",
      _id: GenerateMongoID()
    });
  }
}
if ( Meteor.isServer ) {
  Meteor.publish('movies', function() {
    return Movies.find();
  });
}
