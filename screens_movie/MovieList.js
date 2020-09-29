import AsyncStorage from '@react-native-community/async-storage'
import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import BigCatalogList from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';

export default class MovieList extends Component{
    render(){

        //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";

        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";

        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";


        return(
            <ScrollView style={styles.root}>
                {/* 큰 이미지는 가로 스크롤 (페이징) 으로 보여주기 */}
                <BigCatalogList 
                    uri={bigUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail',{id:id})}></BigCatalogList>

                {/* 최신등록순 horizontal scroll list */}
                <SubCatalogList 
                    title='최신등록순' uri={recentUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail',{id})}></SubCatalogList>
                {/* id===id:id---변수명과 값이 같으면 변수명 생략가능 */}


                {/* 평점순 */}
                <SubCatalogList 
                    title='평점순' uri={ratingtUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail',{id})}></SubCatalogList>

                {/* 다운로드 순 */}
                <SubCatalogList 
                    title='다운로드순' uri={downloadUrl}
                    onPress={id=>this.props.navigation.navigate('MovieDetail',{id})}></SubCatalogList>
            </ScrollView>
        )
    }

    //제목줄 작업
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerLeft: ()=>{
                return (
                    <TouchableOpacity style={styles.drawerMenu} onPress={()=>this.props.navigation.openDrawer()}>
                        <Image source={require('../Images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )
            },
            headerRight: ()=><TouchableOpacity 
                                style={styles.logoutContainer} 
                                onPress={async()=>{
                                    await AsyncStorage.removeItem('email')
                                    this.props.navigation.replace('Intro')
                                }}>
                                <Image source={require('../Images/Tabs/ic_profile.png')}></Image>
                                <Text style={{marginLeft:4}}>Logout</Text>
                            </TouchableOpacity>
        })
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#FEFFFF'
    },
    drawerMenu:{
        marginHorizontal:16
    },
    logoutContainer:{
        marginHorizontal:16,
        flexDirection:'row',
        alignItems:'center'
    }
})