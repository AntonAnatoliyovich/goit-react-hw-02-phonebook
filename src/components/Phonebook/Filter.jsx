import css from './Phonebook.module.css';

export const Filter = () => {
    return (
        <div className={css.filter}>
            <label className={css.filter__label} htmlFor="">Find contacts by name</label>
            <input className={css.filter__input} type="text" />
        </div>
    )
}
