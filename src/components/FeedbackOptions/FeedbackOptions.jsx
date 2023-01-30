import { ButtonBox, Button } from './FeedOptStyle';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(label => (
        <Button key={label} onClick={() => onLeaveFeedback(label)}>
          {label}
        </Button>
      ))}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
