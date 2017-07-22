import { Router } from 'express';


function saveCharacterToDB(character_object) {
  console.log('saving to database (mock)', character_object);
  // if (validateCharacter(character_object))
  return { id: 1, timestemp: Date.now(), ss: 1,  ...character_object }
}

export default ({ config, db }) => {
  const characters_mocks = Router();

  characters_mocks.route('/')
    .post((req, res) => {
      const character_object = req.body;
      // console.log('request', req, req.);
      const character_entity = saveCharacterToDB(character_object)
      console.log('xxx', character_entity);
      res
        .status(200)
        .json(character_entity)
    })

  return characters_mocks
}
