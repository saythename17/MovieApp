import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, TextComponent} from 'react-native';
import InputComponent from '../InputComponent';
import AsyncStorage from '@react-native-community/async-storage'

export default class Login extends Component{
    email=''
    render(){
        return (
            <View style={styles.root}>
                {/* 1. 로그인 콘텐츠 화면 */}
                <View style={ styles.content }>
                    {/* 1.1 로고 */}
                    <Text style={styles.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스 */}
                    <InputComponent secureTextEntry={false} placeholder="이메일" onChangeText={vlaue=>this.email=vlaue}></InputComponent>
                    <InputComponent secureTextEntry={true} placeholder="비밀번호"></InputComponent>

                    {/* 1.3 비밀번호 재설정 : Text Component :onPress동작 */}
                    <Text onPress={()=>this.props.navigation.navigate('ResetPassword')} style={styles.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 Login Button */}
                    <View style={{width:'100%',marginBottom:24}}>
                        <Button title="login" color="#3796FE" onPress={this.login}></Button>
                    </View>

                    {/* 1.5 회원가입 */}
                    <Text style={styles.signupQ}>
                        계정이 없으신가요? <Text onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.signupLink}>가입하기</Text>
                    </Text>
                </View>

                {/* 2. Footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright}>MovieApp made by FANXY_ON</Text>
                </View>
            </View>
        );
    }//()

    //login button click method
    login=async()=>{
        //AsyncStorage에 로그인 데이터 영구 저장
        //비동기 방식을 동기방식으로 변환 : async() - await || .then()
        await AsyncStorage.setItem('email',this.email)//key,value

        //로그인 완료 후 메인화면(MovieList를 가진drawerNav)로 이동
        this.props.navigation.replace('MainDrawerNav')
        //navigate() : 현재 컴포넌트가 남아있기 때문에 finish되지 않음
        //replace() 로 대체하고 넘어가야 뒤로가기 버튼이 생성되지 않음
    }
}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796FE',
        marginRight:8,
        marginTop:8,
        marginBottom:16
    },
    signupQ:{
        color:'#929292',
        textAlign:'center'
    },
    signupLink:{
        color:'#3796FE'
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center'
    }
});