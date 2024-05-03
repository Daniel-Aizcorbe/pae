import TextArea from 'antd/es/input/TextArea';
import React from 'react'

export const ParrafoEditable = ({ editableText, setEditableText }) => {

    const textAreaStyle = {
        resize: "none",
    }

    const handleChange = (event) => {
        setEditableText(event.target.value)
    }

    return (
        <TextArea
            style={textAreaStyle}
            autoSize={{
                minRows: 10,
                maxRows: 20
            }}
            className="copyable"
            value={editableText}
            onChange={handleChange}
        />
    )
}
