import express from 'express'
import ejs from 'ejs'

import cors from './cors-config'

const SERVER_PORT = 1337
const MAIN_HTML = 'express-cors.html'

const resourcesPath = `${ __dirname }/resources`
const viewsPath = `${ resourcesPath }/views`

const app = express();

/*
 * ### Express Server Configuration ###
 */
app.set('views', viewsPath)
app.use(express.static(resourcesPath))

app.engine('html', ejs.renderFile);
app.set('view engine', 'html')

// Enable Cors call
app.use(cors())


/*
 * ### Endpoints ###
 */
app.use('*', (request, response) => response.render(MAIN_HTML))


/*
 * ### Start The Server ###
 */
app.listen(SERVER_PORT, () => {
	console.log(`Express Server with cors enabled, listenning on ${ 'http://localhost:' + SERVER_PORT }`)
})
