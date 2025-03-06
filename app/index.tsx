import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from 'styled-components/native';

const NumberButton = styled.TouchableOpacity`
    background-color: #d9d9d9;
    width: 19%;
    height: 31%;
    border-radius: 50%;
    margin: 5%;
`;

const OperatorButton = styled.TouchableOpacity`
    background-color: #4a6cca;
    align-items: center;
    border-radius: 50%;
    width : 110%;
    height : 8.5%;
    `;

const MainText = styled.Text`
font-size: 60px;
text-align: right;
margin: 7%;
color: white;
`

export default function index() {
    const [number, setNumber] = useState("0");
    const [operator, setOperator] = useState(null);
    const [prevNumber, setPrevNumber] = useState(null);
    const test = (num) => {
        setNumber((prev) => {
            if (prev == "0") return num;
            return prev + num;});
    };

    return (
        <View style={{backgroundColor : "#2D2D2D", flex : 1}}>
            <MainText>{number}</MainText>
            <View style={{flexDirection : "row", flexWrap : "wrap", marginRight: "10%", marginTop: "65%"}}
            >
            {Array.from({ length : 10}, (_, index) => (
                <NumberButton key={index} onPress={() => test(String(index))}>
                    <Text style={{marginLeft : "45%", marginBottom: "-35%", marginTop: "35%",}}>
                        {index}</Text>
                </NumberButton>
            )).reverse()}
            </View>
            <View style={{
                marginLeft : "80%", 
                marginRight : "5%", 
                marginTop : "-52%", 
                gap : "4.5%",
                height : "90%",
                }}
                >
                <OperatorButton style={{height : "9.2%", width : "115%"}}>
                    <Text style={{color: "white", fontSize: 50}}>+</Text>
                </OperatorButton>
                <OperatorButton style={{height : "9.2%", width : "115%"}}>
                    <Text style={{color: "white", fontSize: 50}}>-</Text>
                </OperatorButton>
                <OperatorButton style={{height : "9.2%", width : "115%"}}>
                    <Text style={{color: "white", fontSize: 50}}>*</Text>
                </OperatorButton>
                <OperatorButton style={{height : "9.2%", width : "115%"}}>
                    <Text style={{color: "white", fontSize: 50}}>%</Text>
                </OperatorButton>
                <View style={{
                    flexDirection : "row",
                    marginLeft : "-330%",
                    marginRight : "330%",
                    gap : "55%",
                    marginTop : "-172%",
                }}
                >
                <OperatorButton style={{height : "102%", width : "120%"}}>
                    <Text style={{color: "white", fontSize: 50}}>.</Text>
                </OperatorButton>
                <OperatorButton style={{height : "102%", width : "120%"}}>
                    <Text style={{color: "white", fontSize: 50}}>=</Text>
                </OperatorButton>
                </View>
            </View>
        </View>
    );
}
