import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import CListView from './CListView.js';

class ExampleCListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            data: [],
        };

    }

    componentDidMount() {
        this.refs['CListView'].loadAuto();
    }

    _renderHeader=()=>{
        return (
            <View style={{
                        height: 70,
                        width:'100%',
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                <Text style={{color: 'white',flex:1}}>
                    Header list
                </Text>
            </View>
        )
    };

    _renderStickyHeader=()=>{
        return(
            <View style={{flex:1,backgroundColor:'yellow'}}/>
        )
    };

    _renderButtonTop=()=>{
        return(
            <View style={{backgroundColor: 'blue',width:30,height:30}} />
        )
    };

    _renderEmpty=()=>{
        return(
            <View>
                <Text>
                    Not Data...
                </Text>
            </View>
        )
    };

    _renderSeparator=()=>{
        return (
            <View
                style={{
                  height: 1,
                  width: "80%",
                  backgroundColor: "#CED0CE",
                  marginLeft: "10%"
                }}
            />
        );
    };

    _onRefresh=()=>{
        this.setState({page: 1});
        return this._makeRemoteRequest()
            .then(length=>{
                this.setState({page: this.state.page+1});
                return length;
            });
    };

    _onLoadMore=()=>{
        return this._makeRemoteRequest()
                    .then(length=>{
                        this.setState({page: this.state.page+1});
                        return length;
                    })
    };

    _makeRemoteRequest=()=>{
        const { page } = this.state;

        const url = `https://randomuser.me/api/?seed=1&page=${page}&results=20`;
        console.log(url);
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    data: (page === 1) ? res.results:(page>=10)?this.state.data:[...this.state.data, ...res.results],
                    error: res.error || null
                });
                return (page>=10)?0:res.results.length;
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#ccc',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width:'100%',height:'100%'}}>
                    <CListView
                        ref="CListView"
                        data={this.state.data}
                        keyExtractor={(item)=>item.email}
                        renderHeader={this._renderHeader}
                        renderStickyHeader={this._renderStickyHeader}
                        stickyHeaderHeight={50}
                        headerHeight={200}
                        renderButtonTop={this._renderButtonTop}
                        renderEmpty={this._renderEmpty}
                        renderSeparator={this._renderSeparator}
                        onRefresh={this._onRefresh}
                        onLoadMore={this._onLoadMore}
                        renderItem={(item,index)=>(
                            <Item data={item}
                                  index={index}/>
                        )}
                    />
                </View>


                <Text
                    style={{
                        position:'absolute',
                        top: 0,
                        right: 0,
                        fontSize:20
                    }}>
                    Example ListView
                </Text>

                <Text
                    onPress={this.props.onBack}
                    style={{
                        backgroundColor:'red',
                        position:'absolute',
                        top: 30,
                        left: 30,
                        width: 60,
                        height: 20,
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>
                    Back
                </Text>
            </View>

        );
    }
}

export default ExampleCListView;

class Item extends React.PureComponent{
    render(){
        let {data} = this.props;
        return(
            <View style={styles.item}>
                <Text>
                    {data.email}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
