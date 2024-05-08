import css from './Description.module.css'

export default function Descriptions() {
    return (
        <div className={css.container_descr}>
            <h1 className={css.container_title}>Sip Happens Café</h1>
            <p className={css.container_text}>
                Please leave your feedback about our service by selecting one of the options below.
            </p>
        </div>
    )
}