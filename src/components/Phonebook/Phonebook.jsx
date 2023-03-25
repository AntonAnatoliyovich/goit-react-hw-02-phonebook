import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
// import { ContactList } from "./ContactList";
import css from './Phonebook.module.css';

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

    // createUser=(data)=>{
    //     console.log(data)
    // }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.createUser({
            name: this.state.name,
            number: this.state.number
        })
    }

    render() {
        return (
            <div className={css.phonebook__card}>
                <h1 className={css.phonebook__title}>Phonebook</h1>
                <ContactForm />
                <h2 className={css.phonebook__title}>Contacts</h2>
                <Filter />
                {/* <ContactList /> */}
            </div>
        )
    }
}

export default Phonebook
