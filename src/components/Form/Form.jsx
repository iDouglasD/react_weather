import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const locationChangeHandler = e => {
        setLocation(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={locationChangeHandler}
            />

            <button type="submit" onSubmit={onSubmit} className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;
