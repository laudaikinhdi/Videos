import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from './../components/CategoryListItem';
import axios from 'axios';

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    axios.get('/categories')
    .then(res => {
      console.log(res.data)
      this.setState({
        categories: res.data
      })
    })
    .catch(errors => {
      console.log(errors);
    })
  }

  render() {
    const {categories} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        {/* {
            categories.map(category =>  <CategoryListItem key={'category_'+category.id} category={category}/>)
        } */}
        <FlatList data={categories} 
          renderItem={({item}) => <CategoryListItem category={item} onPress={() => navigation.navigate('Category', {
            categoryName: item.name
          })}/>}
          keyExtractor={(item) => 'category_'+item.id}
          contentContainerStyle={styles.container}
        />
        {/* mỗi define mà nằm stack thì có this.props.navigation */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});
