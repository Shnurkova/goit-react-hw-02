export default function Options({updateFeedback, total, setState}) {
    return (
        <ul>
            <li>
            <button
                onClick={() => {
                updateFeedback('good');
            }}
            >
                Good
            </button>
            </li>
            <li>
            <button
                onClick={() => {
                    updateFeedback('neutral');
                }}
            >
                Neutral
            </button>
            </li>
            <li><button
                onClick={() => {
                    updateFeedback('bad');
                }}
            >
                Bad
            </button>
            </li>
            {total > 0 &&(
                <li><button
                    onClick={() => {
                        setState({
                good: 0,
                neutral: 0,
                bad: 0,
              });
                    }}
                >
                    Reset
                </button>
                </li>
            )}
        </ul>
    )
}