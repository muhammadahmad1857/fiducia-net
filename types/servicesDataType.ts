export default interface ServicesDataType {
  serviceName: string;
  description: string;
  icon: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: {
    current: string;
  };
  color: {
    hex: string;
  };
}
