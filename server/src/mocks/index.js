import { Router } from 'express';
import characters_mocks from './characters'

export default ({ config, db }) => {
	let mocks = Router();

  mocks.use('/characters', characters_mocks({ config, db }))

  return mocks
}
