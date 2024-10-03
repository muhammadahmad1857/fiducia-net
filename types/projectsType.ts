export default interface ProjectsType {
  projectName: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: string;
  slug: {
    current: string;
  };
}
