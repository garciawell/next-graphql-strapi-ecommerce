import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Game, { GameTemplateProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'

const apollo = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <Game {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { data } = await apollo.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apollo.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },

      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((cat) => cat.name)
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
