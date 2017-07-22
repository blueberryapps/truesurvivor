const qs = require('qs');

/**	Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *		list(req, res) {
 *			collection.find({}, toRes(res));
 *		}
 */
export function toRes(res, status=200) {
	return (err, thing) => {
		if (err) return res.status(500).send(err);

		if (thing && typeof thing.toObject==='function') {
			thing = thing.toObject();
		}
		res.status(status).json(thing);
	};
}

const errors = {
	400: 'Bad Request, mate',
	404: 'I ain\'t got none',
	500: 'Fuck, I probably fucked up..',
}

export function getErrorType(status) {
    return errors[status] || 'Man, I have no clue what just happend';
}

export const constructQuery = (options) => {
	if (options.search) {
		const query = qs.parse(options.search);

		const property = Object.keys(query);
		// make sure phrases is Array
		const phrases = Array.isArray(query[property]) ? query[property] : [query[property]]
		const mongooseQuery = {};
		// merge phrases into regexp
		const regexp =  new RegExp(phrases.reduce((regexp, phrase) => `(?=.*${phrase})${regexp}`, ''), 'i');

		// construct mongooseQuery
		mongooseQuery[property] = {};
		mongooseQuery[property].$regex = regexp;
		mongooseQuery[property].$options = 'i';

		return mongooseQuery;
	}

	if (options.filter) return qs.parse(options.filter)

	return { _id: { $not: { $eq: null } } }
}

// { title: [ 'wam', 'sarm' ] }
// '?search[title]=wam&search[title]=sarm'
// `{ name: { $regex: /acme.*corp/, $options: 'i', $nin: [ 'acmeblahcorp' ] } }`
