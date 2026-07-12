const ErrorMessage = ({ message }) => {
    const errorStyle = {
        color: 'red',
        background: 'rgb(242, 207, 207)',
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
        <div style={errorStyle}>
            {message}
        </div>
    )
}

export default ErrorMessage