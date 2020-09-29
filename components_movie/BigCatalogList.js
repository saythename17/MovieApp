import React,{Component} from 'react'
import {View,StyleSheet,FlatList, Alert,Text} from 'react-native'
import BigCatalog from './BigCatalog'

export default class BigCatalogList extends Component{
    state={
        data:[],

    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    data={this.state.data}
                    renderItem={(obj)=>(
                        <BigCatalog movie={obj.item} onPress={this.props.onPress}></BigCatalog>
                    )}
                    keyExtractor={(item,index)=>"Big"+index}></FlatList>
            </View>
        )
    }//()

    //영화 정보 json 받아오는 메소드
    loadData=()=>{
        //MovieList로 부터 전달받은 property uri를 통해 json 파싱 및 state.data 설정
        fetch(this.props.uri)
        // .then(response=>response.text())
        // .then(responseText=>alert(responseText))--확인용
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}))
    }

    componentDidMount(){
        if(this.props.uri) this.loadData()
    }
}//..

const styles=StyleSheet.create({
    container:{height:300,marginBottom:8}
})