import './Box.css'

const Box = ({id, width=50, height=50, color='red', handleRemove}) => {
    return (
        <div className='Box'>
            <div 
                className='Box' 
                style={{
                    border: '1px solid black',
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: color
                }}
            >
                <button onClick={() => handleRemove(id)}> X </button>
            </div>
        </div>
    )
}

export default Box;