import MovieBanner from '@/sections/MovieBanner'
import MovieDetails from '@/sections/MovieDetails'


export const metadata = {
	title: "Movies - Kantara",
}

export default function () {
	return (
		<>
			<MovieBanner/>
			<MovieDetails/>
		</>
	)
}
