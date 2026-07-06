export function commonProps(defaultName: string) {
  return {
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
}
