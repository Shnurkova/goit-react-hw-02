import css from './Options.module.css'

export default function Options({ updateFeedback, total, setState }) {
    return (
        <div className={css.options_list}>
            <button
                className={css.options_btn}
                onClick={() => {
                updateFeedback('good');
            }}
            >
                Good
            </button>
            <button
                className={css.options_btn}
                onClick={() => {
                    updateFeedback('neutral');
                }}
            >
                Neutral
            </button>
            <button
                className={css.options_btn}
                onClick={() => {
                    updateFeedback('bad');
                }}
            >
                Bad
            </button>
            {total > 0 && (
                <button
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
            )}
        </div>
    )
}