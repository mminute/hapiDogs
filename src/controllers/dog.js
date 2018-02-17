var Dog = require('../models/dog');

// GET List Dogs
exports.list = (request, h) => {
  return Dog.find({}).exec().then((dog) => {
    return { dogs: dog };
  }).catch((err) => {
    return { err: err };
  });
}

// GET Dog by ID
exports.get = (request, h) => {
  return Dog.findById(request.params.id).exec().then((dog) => {
    if (!dog) {
      return { message: 'Dog not found' };
    }

    return { dog: dog };
  }).catch((err) => {
    return { err: err };
  });
}

// POST a Dog
exports.create = (request, h) => {
  const dogData = {
    name: request.payload.name,
    breed: request.payload.breed,
    age: request.payload.age,
    image: request.payload.image,
  };

  return Dog.create(dogData).then((dog) => {
    return { message: 'Dog created successfully', dog: dog }
  }).catch((err) => {
    return { err: err };
  });
}

// PUT Update a Dog by ID
exports.update = (request, h) => {
  return Dog.findById(request.params.id).exec().then((dog) => {
    if (!dog) {
      return { err: 'Dog not found' };
    }

    dog.name = request.payload.name;
    dog.breed = request.payload.breed;
    dog.age = request.payload.age;
    dog.image = request.payload.image;

    dog.save();
    // tutorial has dog.save(dogData)?
  }).catch((err) => {
    return { err: err };
  });
}

// Delete Dog by ID
exports.remove = (request, h) => {
  return Dog.findById(request.params.id).exec((err, dog) => {
    if (err) return { dberror: err };
    if (!dog) return { message: 'Dog not found' };

    dog.remove((err) => {
      if (err) return { dberror: err };

      return { success: true };
    });
  });
}