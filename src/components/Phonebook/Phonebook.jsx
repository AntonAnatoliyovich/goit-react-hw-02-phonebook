import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        name: '',
        number: '',
        filter: []
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createUser=(data)=>{
        this.setState(prevState => {
            return {contacts: [...prevState.contacts, data]}
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let isContactExist
        this.state.contacts.map((contact) => {
            if(contact.name === this.state.name) {
                return isContactExist=true
            }
        });
        if(!isContactExist){
            this.createUser({
                name: this.state.name,
                number: this.state.number,
                id: nanoid()
            })
        } else {
                alert(this.state.name + ' is already in contacts')
        }
    }

    handleFilter=(userName)=>{
        let searchArray = this.state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(userName)
        });
        this.setState({
            filter: searchArray
        })
    }

    deleteContact=(id, name)=>{
        this.state[name].map((contact) => {
            if (contact.id === id) {
                const index = this.state[name].indexOf(contact)
                this.state[name].splice(index, 1)
                this.setState({
                    filter: this.state[name],
                    contacts: this.state[name]
                })
            }
        })
    }

    render() {
        return (
            <div className={css.phonebook__card}>
                <h1 className={css.phonebook__title}>Phonebook</h1>
                <ContactForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
                <h2 className={css.phonebook__title}>Contacts</h2>
                <Filter onFilter={this.handleFilter} />
                <ContactList contacts={this.state.contacts} filteredContacts={this.state.filter} deleteContact={this.deleteContact} />
            </div>
        )
    }
}

export default Phonebook
