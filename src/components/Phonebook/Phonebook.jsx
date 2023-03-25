import { Component } from "react";

class Phonebook extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <form>
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <label>Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        value={this.state.number}
                    />
                    <button type="submit">Add contact</button>
                </form>
                <h1>Contacts</h1>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}


export default Phonebook
