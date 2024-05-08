import css from './Options.module.css'

export default function Options({ updateFeedback, total, setState }) {
    return (
        <ul className={css.options_list}>
            <li>
            <button
                className={css.options_btn}
                onClick={() => {
                updateFeedback('good');
            }}
            >
                Good
            </button>
            </li>
            <li>
            <button
                className={css.options_btn}
                onClick={() => {
                    updateFeedback('neutral');
                }}
            >
                Neutral
            </button>
            </li>
            <li><button
                className={css.options_btn}
                onClick={() => {
                    updateFeedback('bad');
                }}
            >
                Bad
            </button>
            </li>
            {total > 0 &&(
                <li><button
                    className={css.options_btn}
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