import React from "react"; // 1
import { configure, shallow } from "enzyme"; // 2
import Adapter from "enzyme-adapter-react-16";
import CarouselButton from "../CarouselButton";

configure({ adapter: new Adapter() });

describe("CarouselButton", () => {
  it("renders a <button>", () => {
    const wrapper = shallow(<CarouselButton />); // 3
    expect(wrapper.type()).toBe("button");
  });
});

//1. Even though our code never references React directly, we need to import it in both the component module and the test module because both use JSX expressions, which compile to React.createElement statements.
//2. Enzyme needs us to pass a React version-appropriate adapter to its configure function before we can use it, so we do that at the top of the test file. Later in this chapter, we’ll move that setup code elsewhere to avoid duplicating it across all test files.
//3. Enzyme’s shallow() method returns a shallow wrapper.
