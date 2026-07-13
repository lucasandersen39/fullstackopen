
const ConditionIcon = ({ info }) => {

    if (!info) {
        return null
    }
    return (
        <>
            <img src={`https://openweathermap.org/payload/api/media/file/${info.weather[0].icon}.png`} alt="" />
        </>
    )
}

export default ConditionIcon