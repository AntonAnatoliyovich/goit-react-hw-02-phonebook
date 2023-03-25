import css from './Phonebook.module.css';

export const ContactList = () => {
    return (
        <ul className={css.contact__List}>
            <li className={css.contact__item}></li>
            <button className={css.contact__button} type='submit'>Delete</button>
        </ul>
    )
}
