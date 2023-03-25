import css from './Phonebook.module.css';

export const ContactForm = ({ handleSubmit, handleChange }) => {
    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor="" className={css.form__label}>Name</label>
            <input
                className={css.form__input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                // value={this.state.name}
            />
            <label htmlFor="" className={css.form__label}>Number</label>
            <input
                className={css.form__input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                // value={this.state.number}
            />
            <button className={css.form__button} type="submit">Add contact</button>
        </form>
    )
}
