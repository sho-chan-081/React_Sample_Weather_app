type ResultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Results = ({results}: ResultsPropsType) => {
    const  { country, cityName, temperature, conditionText, icon } = results;
    return (
        <div>
            {country && <div className="results-country"> {country}</div>}
            {cityName && <div className="results-city"> {cityName}</div>}
            {temperature && <div className="results-temp"> {temperature}</div>}
            {icon && <div> <img src={icon} alt="icon/"></img></div>}
            {conditionText && <div className="results-condition"><span>{conditionText}</span></div>}
        </div>
    );
};

export default Results;