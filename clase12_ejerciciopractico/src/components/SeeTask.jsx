import PropTypes from 'prop-types';


const SeeTask = ( {list} ) => {
    return (
        <div>
            <h1>List Task</h1>
            <article>
               { list.map ((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.descript}</p>
                    </div>
                )
               })}
            </article>
            
        </div>
    );
};


SeeTask.propTypes = {
    list: PropTypes.array.isRequired,
};


export default SeeTask;
