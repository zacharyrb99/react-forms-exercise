import {useState} from 'react';

const NewTodoForm = ({add}) => {
    const INITIAL_STATE = {
        text: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'> To-Do Text: </label>
            <input id='text' type='text' name='text' placeholder='To-Do Text' value={formData.text} onChange={handleChange}/>

            <button>Add To-Do</button>
        </form>
    )
}

export default NewTodoForm;