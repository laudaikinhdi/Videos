
/**
 * Created by vunl on 13/06/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Animated
} from 'react-native';

class CListView extends React.PureComponent{

    _loadFirst = false;
    _loadMore = true;
    _animatedEvent = null;

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            refreshing: false,
            scrollY: new Animated.Value(0)
        };
        if(props.renderStickyHeader) {
            if(!props.stickyHeaderHeight || !props.headerHeight){
                console.error('Property `stickyHeaderHeight` and `headerHeight` is required');
            }
        }
        this._animatedEvent = Animated.event([{nativeEvent: { contentOffset: { y: this.state.scrollY } } }]);
    }

    _renderHeader=()=>{
        if(this.props.renderHeader){
            return this.props.renderHeader();
        }
        return null;
    };

    _renderFooter=()=>{
        if (!this.state.loading)
            return null;

        if(this.props.renderFooter){
            return this.props.renderFooter();
        }

        return (
            <ActivityIndicator animating size="large" />
        )
    };

    _renderEmpty=()=>{
        let length = this.props.data.length;
        if(length > 0 || this.state.loading || this.state.refreshing || !this._loadFirst )
            return null;
        if(this.props.renderEmpty){
            return this.props.renderEmpty();
        }
        return null;
    };

    _renderSeparator=()=>{
        if(this.props.renderSeparator){
            return this.props.renderSeparator();
        }
        return null;
    };

    _renderItem=({item,index})=>{
        if(this.props.renderItem){
            return this.props.renderItem(item,index);
        }
        return null;
    };

    _onScroll=(e)=>{
        this._animatedEvent(e);
        if(this.props.onScroll){
            this.props.onScroll(e);
        }
    };

    _onContentSizeChange=(contentWidth, contentHeight)=>{
        if(this.props.onContentSizeChange){
            this.props.onContentSizeChange(contentWidth, contentHeight);
        }
    };

    refresh=()=>{
        this._loadFirst = true;
        this._loadMore = true;
        this.setState({
                refreshing: true
            },
            () => {
                if(this.props.onRefresh){
                    this.props.onRefresh()
                        .then(()=>{
                            this.setState({refreshing: false,loading:false});
                        })
                }
                else{
                    this.setState({refreshing: false,loading:false});
                }
            }
        );
    };

    loadMore=()=>{
        console.log('=========================');
        if(!this._loadMore)
            return;
        this._loadMore = false;
        this._loadFirst = true;

        this.setState({
                loading: true
            },
            () => {
                if(this.props.onLoadMore){
                    this.props.onLoadMore()
                        .then(length=>{
                            this._loadMore = (length!==0);
                            this.setState({refreshing: false,loading:false});
                        })
                }
                else{
                    this.setState({refreshing: false,loading:false});
                }
            }
        );
    };

    scrollToTop=()=>{
        this.refs['ListView'].scrollToOffset({offset:0});
    };

    scrollToBottom=(params)=>{
        this.refs['ListView'].scrollToEnd(params);
    };

    scrollToIndex=(index)=>{
        this.refs['ListView'].scrollToIndex({index: index});
    };

    loadAuto=()=>{
        this._loadMore = true;
        this._loadFirst = false;
        this.loadMore();
    };

    render(){
        let {
            data,
            renderButtonTop,
            renderStickyHeader,
            stickyHeaderHeight,
            headerHeight,
            styleCustomStickyHeader,
            styleCustomButtonTop,
            keyExtractor,
            numColumns,
            inverted,
            style
        } = this.props;
        if(!data)
            return null;
        return(
            <View style={[{flex:1},style]}>
                <FlatList
                    ref="ListView"
                    style={{flex:1}}
                    data={data}
                    inverted={inverted}
                    numColumns={numColumns}
                    refreshing={this.state.refreshing}
                    onRefresh={this.refresh}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                    onScroll={this._onScroll}
                    onContentSizeChange={this._onContentSizeChange}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={this._renderSeparator}
                    ListHeaderComponent={this._renderHeader}
                    ListFooterComponent={this._renderFooter}
                    ListEmptyComponent={this._renderEmpty}
                    renderItem={this._renderItem}
                />
                {renderStickyHeader && (
                    <Animated.View
                        style={[styles.sticky_header,styleCustomStickyHeader,
                            {
                                height: stickyHeaderHeight,
                                opacity: this.state.scrollY.interpolate({
                                     inputRange: [headerHeight,headerHeight*1.5],
                                     outputRange: [0,1],
                                     extrapolate: 'clamp'
                                })
                            }
                        ]}>
                        {renderStickyHeader()}
                    </Animated.View>
                )}
                {renderButtonTop && data.length>0 && (
                    <Animated.View
                        style={[styles.button_top,styleCustomButtonTop,
                            {
                                opacity: this.state.scrollY.interpolate({
                                     inputRange: [50,100],
                                     outputRange: [0,1],
                                     extrapolate: 'clamp'
                                })
                            }
                        ]}>
                        <TouchableOpacity onPress={this.scrollToTop}>
                            {renderButtonTop()}
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </View>
        )
    }
}

export default CListView;

const styles = StyleSheet.create({

    button_top:{
        position: 'absolute',
        right: '10%',
        bottom: '10%'
    },

    sticky_header:{
        backgroundColor:'transparent',
        position:'absolute',
        top:0,
        left:0,
        right:0
    }

});
