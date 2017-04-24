/* @flow */
export type Syn$RootState = {
  about?: string,
  aboutLoaded?: boolean,
  loadingCount?: number,
  portfolio: Syn$Portfolio[],
  portfolioLoaded?: boolean,
  selectedPortfolioId?: string,
};

export type Syn$RootStateReducer = {
  about: (state: ?string, action: Syn$Action) => ?string,
  aboutLoaded: (state: boolean, action: Syn$Action) => boolean,
  loadingCount: (state: number, action: Syn$Action) => number,
  portfolio: (state: ?Syn$Portfolio[], action: Syn$Action) => ?Syn$Portfolio[],
  portfolioLoaded: (state: boolean, action: Syn$Action) => boolean,
  selectedPortfolioId: (state: ?string, action: Syn$Action) => ?string,
};

export type Syn$AppProps = {
  children: React$Element<any>,
  portfolio: Syn$Portfolio[],
};

type Syn$PortfolioMeta = {
  isSVG: boolean,
  mixUrl: string,
  stackDesign: boolean,
  trackList: string,
  websiteUrl: string,
};

export type Syn$TitledObject = {
  title: string,
};

export type Syn$Portfolio = {|
  categories: string[],
  description: ?string,
  id: string,
  imagePaths: {
    full: {
      url: string,
    },
    medium: ?{
      url: string,
    },
    thumbnail: ?{
      url: string,
    }
  },
  meta: ?Syn$PortfolioMeta,
  svgSource: ?string,
  tags: string[],
  title: string,
|};

export type Syn$PortfolioService = {
  fetchAll: () => Promise<Syn$Portfolio[]>,
  fetchById: (id: string) => Promise<?Syn$Portfolio>,
};

export type Syn$AboutService = {
  fetch: () => Promise<Syn$About>,
};

export type Syn$LoadPortfolio = () => Promise<Syn$Portfolio[]>;

export type Syn$PortfolioDetailComponentProps = {
  loadPortfolioDetail: (id: string) => Syn$Action,
  params: {
    id: string,
  },
  portfolioDetail: Syn$Portfolio,
  resetSelectedPortfolio: () => Syn$Action,
};

export type Syn$PortfolioListComponentProps = {
  loadPortfolio: Function,
  portfolio: Syn$Portfolio[],
};

export type Syn$Action = {|
  payload?: any,
  type: string,
|};

export type Syn$About = {
  content: string,
};

export type Syn$AboutComponentProps = {
  about: string,
  aboutLoaded: boolean,
  loadAbout: Function,
};

export type Syn$Api = {
  fetchAbout: () => Promise<Syn$About>,
  fetchPortfolio: () => Promise<Syn$Portfolio[]>,
  fetchPortfolioById: (id: string) => Promise<Syn$Portfolio>,
};
