import { PortableTextBlock } from "@portabletext/types";

type ReviewItem = PortableTextBlock[];

export default interface ReviewType {
  userName: string;
  review: ReviewItem; // Make review an array of PortableTextBlock
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
