import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent'

export default class SignUp extends Component{

    state={
        tabs:['전화번호','이메일'],
        tabIndex:0 //현재 선택된 탭의 번호 0:전화번호,1:이메일
    }

    render(){
        return (
            <View style={styles.root}>
                {/* 1. 본문영역 */}
                <View style={styles.content}>
                    {/* 1.1 전화번호와 이메일 입력 가능한 탭으로 구성 */}
                    <View style={styles.tabContainer}>
                        {/* 탭이 여러개일 수 있음 -map 메소드를 사용하여 배열의 개수만큼 컴포넌트를 리턴 하도록 구현 */}
                        {
                            this.state.tabs.map( (value,index) => {
                                return <TabComponent 
                                            onPress={()=>this.setTabIndex(index)}
                                            label={value} 
                                            selected={this.state.tabIndex === index} //=== : 자료형까지 비교
                                            key={'Tab'+index}></TabComponent>
                            })
                        }
                    </View>

                    {/* 1.2 정보 입력창 */}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.2.1  이메일 탭 선택시 입력창 1개 추가 동적 생성 */}
                    {
                        //&& : 양쪽다 참이어야 하기에 왼쪽 조건문이 false일 경우 오른쪽 생성문이 호출되지 않음
                        //Xml 안 js는 if문 사용 불가->if문의 역할을 하는 연산자 && 사용
                        this.state.tabIndex===1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                    }

                    {/* 1.2.2 버튼 : 전화번호-[다음] / 이메일-[완료] */}
                    {
                        this.state.tabIndex===0 && 
                        <View style={{width:'100%', margin:16}}>
                            <Button title='다음'onPress={()=>this.setTabIndex(1)}></Button>
                        </View>
                    }
                    {
                        this.state.tabIndex===1 && 
                        <View style={{width:'100%', margin:16}}>
                            <Button title='완료'onPress={()=>this.props.navigation.goBack()}></Button>
                        </View>
                    }

                    {/* 1.2.3 전화번호 탭일 경우 안내메세지 */}
                    {
                        this.state.tabIndex===0 && 
                        <Text style={styles.infoMsg}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }

                </View>
                {/* 2. Footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        이미 계정이 있으신가요? <Text onPress={()=>this.props.navigation.goBack()} style={styles.goBack}>로그인</Text>
                    </Text>
                </View>
            </View>
        );
    }//()

    // TabIndex Change Method
    setTabIndex=index=>this.setState({tabIndex:index})
}//..

const styles= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32
    },
    footer:{
        borderTopColor:'#D3D3D3',
        borderTopWidth:1,
        padding:8
    },///
    footerText:{
        color:'#929292',
        textAlign:'center'
    },
    goBack:{
        color:'#3796FE'
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16
    },
    infoMsg:{
        color:'#929292',
        fontSize:14,
        marginHorizontal:8,
        textAlign:'center'
    }
});