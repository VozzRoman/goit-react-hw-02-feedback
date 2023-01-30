import { SectionTitle } from './SectionStyle';
import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  console.log(children);
  return (
    <>
      <SectionTitle>
        {title}
        {children}
      </SectionTitle>
    </>
  );
};

//------PropTypes

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
