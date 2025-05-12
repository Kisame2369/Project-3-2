const Feedback = ({ value, total }) =>
{
    return (
        <div>
            <ul>
                <li>Good {value.good}</li>
                <li>Neutral {value.neutral}</li>
                <li>Bad {value.bad}</li>
                <li>Total {total}</li>
                <li>Positive feedback {Math.round((value.good / total) * 100)}%</li>
            </ul>
        </div>)
};

export default Feedback;