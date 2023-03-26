import css from './Phonebook.module.css';

export const ContactList = ( { contacts, filteredContacts, deleteContact } ) => {
    return (
        <>
            <ul className={css.contact__List}>
                {filteredContacts.length > 0 ?
                    filteredContacts.map((contact) => (
                        <>
                        <li key={contact.id} className={css.contact__item}>{contact.name}: {contact.number}</li>
                        <button onClick={()=>{deleteContact(contact.id, 'filter')}} className={css.contact__button} type='submit'>Delete</button>
                        </>
                    ))
                :
                    contacts.map((contact) => (
                        <>
                        <li key={contact.id} className={css.contact__item}>{contact.name}: {contact.number}</li>
                        <button onClick={()=>{deleteContact(contact.id, 'contacts')}} className={css.contact__button} type='submit'>Delete</button>
                        </>
                    ))
                }
            </ul>
        </>
    )
}
