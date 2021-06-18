import React from "react"; // 1
import { shallow } from "enzyme"; // 2
import CarouselButton from "../CarouselButton";

describe("CarouselButton", () => {
  const text = "Button text";
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
  });

  it("renders a <button>", () => {
    //const wrapper = shallow(<CarouselButton />); // 3
    expect(wrapper.type()).toBe("button");
  });

  it("passes `children` through to the <button>", () => {
    //const wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
    expect(wrapper.prop("children")).toBe(text);
  });

  it("passes props to <button>", () => {
    const onClick = () => {};
    const className = "my-carousel-button";
    const dataAction = "prev";
    wrapper.setProps({ onClick, className, "data-action": dataAction }); //4
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
    expect(wrapper.prop("data-action")).toBe(dataAction);
  });
});

//1. Even though our code never references React directly, we need to import it in both the component module and the test module because both use JSX expressions, which compile to React.createElement statements.
//3. Enzyme’s shallow() method returns a shallow wrapper.
//4. wrapper.setProps(props) simulates props being passed into the wrapped React element after the initial render, making it useful for testing lifecycle methods like componentWillReceiveProps() and componentDidUpdate(). The props passed in with setProps() are merged into the existing props object.
