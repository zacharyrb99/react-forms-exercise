import {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {id: uuid(), ...newBox}]);
    };

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <h2>Colored Boxes</h2>
            <NewBoxForm addBox={addBox} />
            <div className='BoxList-boxes'>
                {boxes.map(({id, width, height, color}) => <Box id={id} width={width} height={height} color={color} handleRemove={removeBox} key={id}/>)}
            </div>
        </div>
    )
}

export default BoxList;