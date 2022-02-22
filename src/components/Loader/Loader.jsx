import {SpinnerCircular} from 'spinners-react';
import { SpinnerWrapper } from './Loader.styled';

const Loader = () => (
  <SpinnerWrapper>
    <SpinnerCircular size={50} thickness={100} speed={100} color="#1eee0b" secondaryColor="rgba(0, 0, 0, 0.44)" />
  </SpinnerWrapper>
);

export default Loader;