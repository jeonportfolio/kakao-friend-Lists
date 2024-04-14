import React from "react";
import { Image, View, Text } from "react-native";


export default ( uri, name, introduction, isMe) => {
    const size = isMe ? 50 : 40;

    return(
        <View style={{flexDirection: "row"}}>
            < Image source={{ uri }} style={{ width: size, height: size, borderRadius: size * 0.5}}/>
                <View style={{justifyContent:"center", marginLeft: 10}}>
                    <Text style= {{ fontWeight: "bold", fontSize: 16}}>{name}</Text>
                    <Margin height={6}/>
                    <Text style= {{ fontSize:12, color:"grey"}}>{introduction}</Text>

                </View>

        </View>
    );
}