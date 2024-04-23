export interface IPaper {
  content: string;
  pictureUrl: string;
  sort: number;
  title: string;
}

export interface IState {
  homeData: IPaper[];
  solutionData: IPaper[];
  advantageData: IPaper[];
  excellentCaseData: IPaper[];
}
