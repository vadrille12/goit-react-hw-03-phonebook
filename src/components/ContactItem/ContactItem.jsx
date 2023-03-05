import PropTypes from 'prop-types';
import { DeleteBtn, Data } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <Data>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteBtn>
      </Data>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
