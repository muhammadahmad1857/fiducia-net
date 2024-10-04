type ReviewItem = {
    markDefs: any[];
    children: {
      _type: string;
      style: string;
      _key: string;
    }[];
  };
  
  export default interface ReviewType {
    userName: string;
    review: ReviewItem; // Using ReviewItem as the type for the `review` property
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }
  