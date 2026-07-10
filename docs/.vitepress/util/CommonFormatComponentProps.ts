export function commonProps(defaultName: string, extraProps: object = {}) {
  let props = {
    name: {
      type: String,
      required: false,
      default: defaultName,
    },
    desc: {
      type: String,
      required: false,
    },
    colour: {
      type: String,
      required: false,
    },
  };
  Object.assign(props, extraProps);
  return props;
}
