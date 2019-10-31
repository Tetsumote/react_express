import React from 'react'
import { View } from 'react-native'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

import store from './store'

export default class App extends React.Component {

  state = {}
  unsubscribe = store.subscribe(() => {
    const {todos} = store.getState()
    this.setState({todos})
  }) 
  componentWillMount() {
    const todos = store.getState().todos
    this.setState({todos})
  }

  componentWillUnmount() {
   unsubscribe()
  }

  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.state

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}
