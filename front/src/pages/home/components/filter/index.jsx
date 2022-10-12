import React, { useState, useRef } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

const Filter = ({ setChosenTags }) => {
  const home = useSelector((state) => state.home);
  const { tags } = home;
  const [selectedTags, setSelectedTags] = useState([]);
  const multipleSelectRef = useRef();

  const submit = () => {
    setChosenTags(selectedTags);
  };

  const clear = () => {
    const multipleSelectElement = multipleSelectRef.current;
    Array.from(multipleSelectElement.options).forEach(
      (option) => (option.selected = false)
    );
    setSelectedTags([]);
    setChosenTags([]);
  };

  const selectTags = (ev) => {
    const selectedOptions = Array.from(ev.target.options).filter(
      (option) => option.selected === true
    );
    const selectedValues = selectedOptions.map(
      (selectedOption) => selectedOption.value
    );
    setSelectedTags(selectedValues);
  };

  const viewToRender = (
    <div className={styles.container}>
      <label className={styles.heading}>Filter</label>
      <select
        multiple
        className={styles.select}
        onChange={selectTags}
        ref={multipleSelectRef}
      >
        {tags.map((tag, index) => (
          <option value={tag} key={index}>
            {tag}
          </option>
        ))}
      </select>
      <div className={styles.controlls}>
        <button onClick={clear}>Clear</button>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );

  return viewToRender;
};

export default Filter;
