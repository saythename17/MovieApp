import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'

const BigCatalog=props=>{
    return(
        <TouchableOpacity 
            onPress={()=>props.onPress(props.movie.id)}
            activeOpacity={0.9}>
            <Image source={{uri:props.movie.large_cover_image}}style={styles.bigImage}></Image>
            
            {/* 이미지와 겹쳐있는 영화정보 출력 : position을 absolute로 */}
            <View style={styles.infoContainer}>
                <Text style={styles.labelYear}>{props.movie.year}년 개봉</Text>
                
                <View style={styles.labelContainer}>
                    <Text style={styles.labelTitle}>{props.movie.title}</Text>
                    <Text style={styles.labelGenres}>{props.movie.genres.join(', ')}</Text>
                    {/* join() : 배열에 각 ,를 추가하여  */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BigCatalog

const styles=StyleSheet.create({
    bigImage:{
        width:Dimensions.get('window').width,height:300
    },
    infoContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'flex-start'
    },
    labelYear:{
        color:'#ffffff',
        padding:8,
        fontWeight:'bold',
        marginLeft:4,
        backgroundColor:'#E70915',
        borderRadius:16
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        paddingBottom:8,
        opacity:0.8
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        padding:8,
        color:'#fff'
    },
    labelGenres:{
        fontSize:12,
        color:'#FFFFFF',
        padding:8
    }
})