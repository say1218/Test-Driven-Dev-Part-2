import React from "react"; // 1
import { configure, shallow } from "enzyme"; // 2
import Adapter from "enzyme-adapter-react-16";
import CarouselButton from "../CarouselButton";





configure({ adapter: new Adapter() });



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
//2. Enzyme needs us to pass a React version-appropriate adapter to its configure function before we can use it, so we do that at the top of the test file. Later in this chapter, we’ll move that setup code elsewhere to avoid duplicating it across all test files.
//3. Enzyme’s shallow() method returns a shallow wrapper.
//4. wrapper.setProps(props) simulates props being passed into the wrapped React element after the initial render, making it useful for testing lifecycle methods like componentWillReceiveProps() and componentDidUpdate(). The props passed in with setProps() are merged into the existing props object.
