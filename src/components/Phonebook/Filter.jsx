import css from './Phonebook.module.css';

export const Filter = ( {onFilter} ) => {
    return (
        <div className={css.filter}>
            <label className={css.filter__label} htmlFor="">Find contacts by name</label>
            <input onChange={(e)=>{onFilter(e.target.value)}} className={css.filter__input} type="text" />
        </div>
    )
}
