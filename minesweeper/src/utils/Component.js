export class Component {
  constructor(props, extraprops) {
    this.extraprops = extraprops;

    this.node = document.createElement(props.tag ? props.tag : 'div');
    Object.assign(this.node, props);
    if (props.parent) {
      props.parent.append(this.node);
    }

    if (extraprops) {
      if (extraprops.event) {
        this.node.addEventListener(extraprops.event.name, extraprops.event.callback);
      }
      if (extraprops.attrs) {
        Object.keys(extraprops.attrs).forEach((key) => {
          this.node.setAttribute(key, extraprops.attrs[key]);
        });
      }
    }
  }
}
