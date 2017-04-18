/* @flow */
export type Syn$RootState = {
  about?: string,
  loadingCount?: number,
  portfolio: Syn$Portfolio[],
  selectedPortfolioId?: string,
};

export type Syn$RootStateReducer = {
  about: Function,
  loadingCount: Function,
  portfolio: Function,
  selectedPortfolioId: Function,
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
  id: string,
  categories: string[],
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
  description: ?string,
|};

export type Syn$PortfolioService = {
  fetchAll: () => Promise<Syn$Portfolio[]>,
  fetchById: (id: string) => Promise<?Syn$Portfolio>,
};

export type Syn$AboutService = {
  fetch: () => Promise<Syn$About>,
};

export type Syn$AboutController = {
  index: (req: express$Request, res: express$Response) => void,
};

export type Syn$PortfolioController = {
  index: (req: express$Request, res: express$Response) => void,
  detail: (req: express$Request, res: express$Response) => void,
};

export type Syn$UIController = {
  index: (req: express$Request, res: express$Response, props: Object) => void,
  detail: (req: express$Request, res: express$Response, props: Object) => void,
  all: (req: express$Request, res: express$Response) => void,
}

export type Syn$LoadPortfolio = () => Promise<Syn$Portfolio[]>;

export type Syn$PortfolioDetailComponentProps = {
  loadPortfolioDetail: (id: string) => Syn$Action,
  resetSelectedPortfolio: () => Syn$Action,
  portfolioDetail: Syn$Portfolio,
  params: {
    id: string,
  },
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
  loadAbout: Function,
};

export type Syn$Api = {
  fetchAbout: () => Promise<Syn$About>,
  fetchPortfolio: () => Promise<Syn$Portfolio[]>,
  fetchPortfolioById: (id: string) => Promise<Syn$Portfolio>,
};
