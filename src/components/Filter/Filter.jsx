import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ OnSearch, onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={OnSearch}
          name="nameToFind"
          onChange={onChange}
          autoComplete="off"
          placeholder="Наталья, морская пехота"
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  OnSearch: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
