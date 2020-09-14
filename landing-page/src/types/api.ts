export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type sectionModulesProps = {
  title: string
  modules: Modules[]
}
export type sectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<{
    name: string
    photo: {
      alternativeText: string
      url: string
    }
    role: string
    socialLinks: Array<{
      title: string
      url: string
    }>
    description: string
  }>
}
export type SectionReviewsProps = {
  title: string
  reviews: Array<{
    photo: {
      alternativeText: string
      url: string
    }
    name: string
    text: string
  }>
}

export type SectionFaqProps = {
  title: string
  questions: Array<{
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
