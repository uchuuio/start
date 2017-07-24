import React from 'react';
import { connect } from 'react-redux';
import { addLink } from '../../actions/links';

let AddLink = ({ dispatch }) => {
  let group;
  let color;
  let text;
  let link;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!group.value.trim()) {
            return;
          };
          if (!color.value.trim()) {
            return;
          };
          if (!text.value.trim()) {
            return;
          };
          if (!link.value.trim()) {
            return;
          };
          dispatch(addLink(group.value, color.value, text.value, link.value));
          group.value = '';
          color.value = '';
          text.value = '';
          link.value = '';
        }}
      >
        <input
          ref={node => {
            group = node
          }}
          placeholder="Group"
        />
        <input
          ref={node => {
            color = node
          }}
          placeholder="Color"
        />
        <input
          ref={node => {
            text = node
          }}
          placeholder="Text"
        />
        <input
          ref={node => {
            link = node
          }}
          placeholder="URL"
        />
        <button type="submit">
          Add Link
        </button>
      </form>
    </div>
  )
};
AddLink = connect()(AddLink);

export default AddLink;