import ShowBanner from '@/sections/ShowBanner/ShowBanner.jsx'
import MovieDetails from '@/sections/MovieDetails/index.js'
import Seasons from '@/components/Seasons/index.js'

export const metadata = {
	title: 'Show - Stranger Things',
}

export default function () {
	return (
		<>
			<ShowBanner />
			<MovieDetails
				seasons={<Seasons/>}
			/>
		</>
	)
}