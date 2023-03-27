import React, { useState } from 'react'

const HelloWorld: React.FC = () => {
    const [counter, setCounter] = useState(0);
    const handleClickCallError = () => {
        setCounter(prev => prev + 1);
    }

    // TODO: Удалить, пока для презентации работы
    if(counter === 3) {
        throw new Error("some error")
    }

    return (
        <div onClick={handleClickCallError}>Hello world {counter}</div>
    )
}

export default HelloWorld
