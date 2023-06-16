/** @type {import('./$types').RequestHandler} */
import { json } from '@sveltejs/kit';
export async function GET() {
	return json([
		{
			hello: 'hshsd'
		}
	]);
}
