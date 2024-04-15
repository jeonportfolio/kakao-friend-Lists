import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';


const IconButton = (props) => {
    return(
     
        <TouchableOpacity hitSlop={ {top:15, bottom:15}} style={{ paddingHorizontal: 6 }}> 
        {/* hitslop은 기존의 컴포넌트를 유지하며 디자인을 변동시키지 않고 터치범위만 넓힐 수 있다. */}
            <Ionicons name={props.name} size={24} color="black" />
        </TouchableOpacity>
    );
};

export default () => {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10}}>
            <Text style={{ fontSize:22, fontWeight: "bold"}}>친구</Text>
        
            <View style={{ flexDirection:"row"}}>
                <IconButton name="search-outline" />
                <IconButton name="person-add-outline" />
                <IconButton name="musical-notes-sharp" />
                <IconButton name="settings" />
            </View>
        
        </View>
    )
}

