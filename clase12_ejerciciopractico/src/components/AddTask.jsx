import { useState } from 'react';
import PropTypes from 'prop-types';


const AddTask = ({setlist}) => {

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const [title, descript] = e.target

        setlist(prevList => [...prevList, { title, descript }]);
        console.log(list)
    }


    return (
        <section onSubmit={handleSubmit}>
            <h1>Add Task</h1>
            <form>
                <input type="text" />
                <textarea></textarea>
                <button type='submit'>Add</button>
            </form>
            
        </section>
    );
};


AddTask.propTypes = {
    setlist: PropTypes.func.isRequired,
};


export default AddTask;
