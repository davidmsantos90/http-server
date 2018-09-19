/**
 * @link https://www.npmjs.com/package/cors
 */
import cors from 'cors'

// ---

export const CORS_ORIGIN_WHITELIST = [
  'http://localhost:8080', 'http://localhost:9052'
]
export const CORS_WITH_CREDENTIALS = true;

const build = (...origins) => {
	return cors({
		credentials: CORS_WITH_CREDENTIALS,
		origin:      !origins.length ? origins : "*"
	});
}

export default build
