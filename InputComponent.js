import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//단순 스타일링된 TextInput을 만드는 것이므로
//state는 사용할 필요 없음... 그렇기에.. 간단한 함수형 컴포넌트로 제작
export default InputComponent= (props)=>{
    return (
        <View style={styles.container}>
            <TextInput 
                selectionColor='green'
                autoCapitalize="none"//charactors:모두 대문자/words: 단어마다 첫글자 대문자/sentences : 문장 첫글자 대문자
                autoCorrect={false}//자동 교정
                placeholderTextColor="gray"//hint color
                secureTextEntry={props.secureTextEntry}//비밀번호 입력테스트가리기
                placeholder={props.placeholder} 
                onChangeText={props.onChangeText}//필수 속성- 글씨를 변경할때마다 실행될 메소드 : property로 전달받음
                style={styles.input}></TextInput>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8
    },
    input:{
        flex:1,
        color:'#292929',
    }
});