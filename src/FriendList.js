import React from "react";
import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import Margin from "./Margin";
import { getBottomSpace } from "react-native-iphone-x-helper";

const bottomspace = getBottomSpace();

export default (props) => {

    // case1 삼한연산자의 방법 
    // return props.isOpened ? (
    //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomspace}}>
    //         {/* data.js에 있는 정보들이 하나씩 순차적으로 나오게 된다. */}
    //         {props.data.map((item, index) => (
               
    //            <View key={index}>
    //                  <Profile
    //                     uri={item.uri}
    //                     name={item.name}
    //                     introduction={item.introduction}
    //                  />
    //                  <Margin height={13}/>
    //            </View>
    //         ))}
    //     </ScrollView>
    // ):null;


   // 두번째 케이스 if문 가독성이 좋음  
    if (!props.isOpened) return null;
    return  (
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
    );
};