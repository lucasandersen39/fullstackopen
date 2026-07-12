import './../App.css'
const SuccessMessage = ({ message }) => {
    const successStyle = {
        color: 'green',
        background: 'rgb(164, 228, 167)',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
    if (message === null) {
        return null
    }
    return (
        <div style={successStyle}>
            {message}
        </div>
    )
}

export default SuccessMessage