import React,{Component} from 'react'
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'

export default class SubCatalogList extends Component{
    state={
        data:[]
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={({item, index})=>{
                        return (
                        
                        //obj는 item과 index를 멤버변수로 가지고 있음->구조분해할당
                        <TouchableOpacity 
                            activeOpacity={0.5}
                            onPress={()=>this.props.onPress(item.id)}
                            style={styles.imageContainer}>
                            <Image
                                source={{uri:item.large_cover_image}}
                                style={styles.image}></Image>
                        </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item,index)=>'Sub'+index}>
                </FlatList>
            </View>
        )
    }

    loadData=()=>{
        fetch(this.props.uri)
        // .then(response=>response.text()
        // .then(resText=>alert(resText)))---데이터가 받아지는지 확인용
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movies}))
    }

    componentDidMount(){
        if(this.props.uri) this.loadData()
    }
}

const styles=StyleSheet.create({
    container:{
        margin:8
    },
    titleContainer:{
        padding:8
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    imageContainer:{
        paddingHorizontal:4
    },
    image:{
        width:140,height:200
    }
})