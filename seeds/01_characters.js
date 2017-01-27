
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      let matrixChars = [{
        id: 1,
        character: "Morpheus",
        img_url: "http://static.comicvine.com/uploads/original/11/113887/4203256-6039769709-morph.png",
        option_1: "The cubicle across from you is empty",
        option_2: "To your left there's a window. Go to it",
        option_3: "You can use the scaffold to get to the roof",
        option_4: "Then go to the Adam Street Bridge",
      },{
        id: 2,
        character: "Trinity",
        img_url: "http://vignette4.wikia.nocookie.net/matrix/images/8/8e/Trinity_face.jpg/revision/latest?cb=20110226150411",
        option_1: "Get in",
        option_2: "Please, you have to trust me",
        option_3: "Lie back, lift up your shirt",
        option_4: "Clear",
      },{
        id: 3,
        character: "Neo",
        img_url: "http://static.comicvine.com/uploads/original/11/113887/4203256-6039769709-morph.png",
        option_1: "I know Kung Fu",
        option_2: "All right, no problem. Free my mind. Free my mind. All right",
        option_3: "I'm going in",
        option_4: "My name is Neo",
      }]
    return knex('characters').insert(matrixChars)
    });
};
