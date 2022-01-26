import React, { useState } from 'react';

import styles from './Form.module.css';

const Form = () => {
    const [location, setLocation] = useState('');
    const locationChangeHandler = e => {
        setLocation(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
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

            <button type="submit" className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};

export default Form;
