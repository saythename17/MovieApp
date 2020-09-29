import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert} from 'react-native';
import TabComponent from '../components/TabComponent'
import InputComponent from '../components/InputComponent'

export default class ResetPassword extends Component{
    state={
        tabs:['이메일','전화번호'],
        tabIndex:0,
        message:[
            '이메일을 입력하면 임시 비밀번호를 보내드립니다.',
            '전화번호를 입력하면 임시 비밀번호를 보내드립니다.'
        ]
    }
    render(){
        return (
            <View style={styles.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={styles.content}>
                    {/* 1.1 자물쇠 이미지(아이콘) 영역 */}
                    <View style={styles.lockImageContainer}>
                        <Image source={require('../Images/lock.png')}></Image>
                    </View>

                    {/* 1.2 타이틀 글씨 */}
                    <Text style={styles.title}>로그인에 문제가 있나요?</Text>

                    {/* 1.3 탭선택에 따른 메세지 보내주기 */}
                    <Text style={styles.message}> {this.state.message[this.state.tabIndex]} </Text>

                    {/* 1.4 탭 버튼 */}
                    <View style={styles.tabContainer}>
                        {
                            this.state.tabs.map((value,index)=>{
                                return (
                                    <TabComponent label={value} key={'Tab'+index}
                                        selected={this.state.tabIndex===index}
                                        onPress={()=>this.setTabIndex(index)}></TabComponent>
                                )
                            })
                        }
                    </View>

                    {/* 1.5 유저 정보 입력 컴포넌트 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.6 입력 완료 버튼 */}
                    <View style={styles.btnContainer}>
                        <Button title='다음' onPress={()=>Alert.alert('임시비밀번호가 발송되었습니다.',
                                            '로그인 후 개인정보 수정페이지로 이동해 안전한 비밀번호로 변경해 주세요.')}></Button>
                    </View>

                </View>

                {/* 2. Footer 영역 */}
                <View style={styles.footer}>
                    <Text style={styles.goBack} onPress={()=>this.props.navigation.goBack()}>로그인 화면으로 돌아가기</Text>
                </View>
            </View>
        );
    }//()

    //TabComponent onPress method
    setTabIndex= index => this.setState({tabIndex:index})
}

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8
    },
    goBack:{
        color:'#3796FE',
        textAlign:'center'
    },
    lockImageContainer:{
        padding:24,
        borderWidth:4.3,
        borderColor:'#292929',
        borderRadius:100,
        margin:16
    },
    title:{
        fontSize:16,
        marginBottom:8
    },
    message:{
        textAlign:'center',
        marginBottom:40,
        color:'#292929'
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    },
    btnContainer:{
        margin:16,
        width:'100%'
    }
});