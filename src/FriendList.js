import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper"
import Margin from "./Margin";

const bottomspace = getBottomSpace();

export default (props) => {
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomspace}}>
            {/* data.js에 있는 정보들이 하나씩 순차적으로 나오게 된다. */}
            {props.data.map((item, index) => (
               
               <View key={index}>
                     <Profile
                        uri={item.uri}
                        name={item.name}
                        introduction={item.introduction}
                     />
                     <Margin height={13}/>
               </View>
            ))}
        </ScrollView>
    )
}