/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactList from '../components/ContactList';
import { deleteContact, getContacts } from '../utils/api';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword')

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getContacts()

    this.setState(() => {
      return {
        contacts: data,
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteContact(id);

    const { data } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
      }
    })
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    })

    this.props.keywordChange(keyword)
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(
        this.state.keyword.toLocaleLowerCase(),
      )
    })
    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}

export default HomePageWrapper;
