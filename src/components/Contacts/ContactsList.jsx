import React from 'react';
// import PropTypes from 'prop-types';
import { Item } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors'
import {deleteContact} from '../../redux/contactsSlice'





export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(item => {
        return (
          <Item key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                dispatch(deleteContact(item.id));
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};

// ContactsList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
