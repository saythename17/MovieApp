import React,{Component} from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import BigCatalog from '../components_movie/BigCatalog'

export default class MovieDetail extends Component{
    state={
        data:null //영화 상세 정보를 저장할 변수
    }
    render(){
        return this.state.data? (
            //삼항연산자 사용 - true일때 (data가 로드되었을때) 보여줄 화면
            <View style={{flex:1}}>
                <BigCatalog movie={this.state.data}></BigCatalog>

                <View>
                    <Text style={styles.title}>영화 정보</Text>
                    <View style={styles.infoContainer}>
                        <Text>{this.state.data.runtime}분</Text>
                        <Text>평점 : {this.state.data.rating}</Text>
                        <Text>좋아요 : {this.state.data.like_count}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>줄거리</Text>
                    <Text style={styles.description}>{this.state.data.description_full}</Text>
                </View>
            </View>
        ) : 
        (
            //false(data가 아직 null일때) 보여질 화면
            <View style={styles.indicatotContainer}>
                <ActivityIndicator color='#E70915' size='large'></ActivityIndicator>
            </View>
        )
    }


    loadData=()=>{
        const {id} = this.props.route.params
        const url = 'https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true'
        fetch(url)/*.then(response=>response.text()).then(resText=>alert(resText))*/
        .then(response=>response.json()).then(json=>this.setState({data:json.data.movie}))
    }

    componentDidMount=()=>this.loadData()
}

const styles= StyleSheet.create({
    indicatotContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#FEFFFF'
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingBottom:8,
        paddingHorizontal:16
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16
    },
    description:{
        paddingHorizontal:16
    }

})