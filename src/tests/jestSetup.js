import Adapter from 'enzyme-adapter-react-16';  //2
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

//2. Enzyme needs us to pass a React version-appropriate adapter to its configure function before we can use it, so we do that at the top of the test file. Later in this chapter, we’ll move that setup code elsewhere to avoid duplicating it across all test files.
