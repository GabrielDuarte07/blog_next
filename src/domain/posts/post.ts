export type PostID = number;

export type PostAuthor = {
  data: {
    id?: PostID;
    attributes: {
      name?: string;
      publishedAt?: string;
      createdAt?: string;
      updatedAt?: string;
    };
  };
};

export type PostCategory = {
  data: {
    id?: PostID;
    attributes: {
      name?: string;
      publishedAt?: string;
      createdAt?: string;
      updatedAt?: string;
    };
  };
};

export type PostCreatedBy = {
  id?: PostID;
  firstname?: string;
  lastname?: string;
  username?: null;
};

export type PostCoverFormat = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
  provider_metadata?: {
    public_id?: string;
    resource_type?: string;
  };
};

export type PostCover = {
  data: {
    id?: PostID;
    attributes: {
      alternativeText?: string;
      caption?: string;
      name?: string;
      width?: number;
      height?: number;
      formats?: {
        thumbnail?: PostCoverFormat;
        small?: PostCoverFormat;
        medium?: PostCoverFormat;
        large?: PostCoverFormat;
      };
    };
  };
};

export type PostData = {
  id?: PostID;
  attributes: {
    title?: string;
    content?: string;
    slug?: string;
    author?: PostAuthor;
    category?: PostCategory;
    publishedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    cover?: PostCover;
  };
};
