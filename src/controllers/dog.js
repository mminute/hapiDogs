const Dog = require('../models/dog');

// GET List Dogs
exports.list = () =>
  Dog.find({}).exec()
    .then(dog => ({ dogs: dog }))
    .catch(err => ({ err }));

// GET Dog by ID
exports.get = request =>
  Dog.findById(request.params.id).exec()
    .then((dog) => {
      if (!dog) {
        return { message: 'Dog not found' };
      }

      return { dog };
    })
    .catch(err => ({ err }));

// POST a Dog
exports.create = (request) => {
  const dogData = {
    name: request.payload.name,
    breed: request.payload.breed,
    age: request.payload.age,
    image: request.payload.image,
  };

  return Dog.create(dogData)
    .then(dog => ({ message: 'Dog created successfully', dog }))
    .catch(err => ({ err }));
};

// PUT Update a Dog by ID
exports.update = request =>
  Dog.findById(request.params.id).exec()
    .then((dog) => {
      if (!dog) {
        return { err: 'Dog not found' };
      }

      dog.name = request.payload.name;
      dog.breed = request.payload.breed;
      dog.age = request.payload.age;
      dog.image = request.payload.image;

      return dog.save();
      // tutorial has dog.save(dogData)?
    }).catch(err => ({ err }));

// DELETE Dog by ID
exports.remove = request =>
  Dog.findById(request.params.id).exec((err, dog) => {
    if (err) return { dberror: err };
    if (!dog) return { message: 'Dog not found' };

    return dog.remove((removalErr) => {
      if (removalErr) return { dberror: removalErr };

      return { success: true };
    });
  });
