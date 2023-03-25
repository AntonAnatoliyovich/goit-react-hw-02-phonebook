import { Component } from "react";

class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <form>
                    <h2>Name</h2>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <button>Add contact</button>
                </form>
            </div>
        )
    }
}


export default Phonebook
