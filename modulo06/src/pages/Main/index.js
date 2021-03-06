import React, { Component } from 'react';
import { Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api'
import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state

    const response = await api.get(`/users/${newUser}`)

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    }

    this.setState({
      users: [...users, data],
      newUser: ''
    })


    //faz com que o teclado minimize quando usuario faz a requisiçao
    Keyboard.dismiss()
  }
  render() {

    const { users, newUser } = this.state
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="nome"
            placeholder="Adicionar Usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
