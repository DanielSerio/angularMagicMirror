export interface HeadlineSource {
  id: (string | null);
  name: string;
}

export interface Headline {
    source: HeadlineSource;
    author: (string | null);
    title: string;
    description: (string | null);
    url: string;
    urlToImage: (string | null);
    publishedAt: string;
}

export interface HeadlineResponse {
  status: string;
  totalResults: number;
  articles: Headline[];
}