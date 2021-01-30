import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export async function getStaticProps() {
  const apollo = initializeApollo()

  const { data } = await apollo.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map((b) => ({
        img: `http://localhost:1337${b.image?.url}`,
        title: b.title,
        subtitle: b.subtitle,
        buttonLabel: b.button?.label,
        buttonLink: b.button?.link,
        ...(b.ribbon && {
          ribbon: b.ribbon.color,
          ribbonColor: b.ribbon.color,
          ribbonSize: b.ribbon.size
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
