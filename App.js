import { useState } from 'react';
import {  FlatList, StyleSheet, View } from 'react-native';
import {  getStatusBarHeight } from 'react-native-iphone-x-helper';
import { friendProfiles, myProfile} from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import Profile from './src/Profile';
import Header from './src/Header';
import TabBar from './src/TabBar';




const statusBarHeight = getStatusBarHeight(true);


export default function App() {

    const [isOpened, setIsOpened] = useState(true);
    const [selectedTabIdx, setSelectedTabIdx ] = useState(0);


    const onPressArrow = () => {
        setIsOpened(!isOpened);
    }

    const ItemSeparatorComponent = () => <Margin height={13}/>
    const renderItem = ({ item }) => (
      <View > 
          <Profile
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
          isMe={false}
          />
          
      </View>
    )

    const ListHeaderComponent = () => (
      <View style={{backgroundColor:"white"}}>
           <Header/>

            <Margin height={10}/>

            <Profile
              uri={myProfile.uri}
              name={myProfile.name}
              introduction={myProfile.introduction}
              isMe={true} //내프로필과 친구리스트의 이미지 크기를 다르게 하기 위함 
            />

            <Margin height= {15}/>

            <Division/>

            <Margin height= {12}/>

            <FriendSection
                friendProfileLen={friendProfiles.length}
                onPressArrow={onPressArrow}
                isOpened={isOpened}
            />
            
            <Margin height={15}/>
      </View>
    )

    const ListFooterComponent = () => <Margin height={10}/>


  return (
    <View style={styles.container}>
      <FlatList
          data={isOpened ? friendProfiles : []}  //이 연산자가 friendList에서의 보여주고 열어주는 함수를 대신한다.
          stickyHeaderIndices={[0]} //header가 하나이기 때문에 배열중 0번째 
          contentContainerStyle={{ paddingHorizontal: 15}}
          keyExtractor={(_, index) => index}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={ListFooterComponent}
      />
      <TabBar
      selectedTabIdx={selectedTabIdx}
      setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  )

  return (
        <View style={styles.container}>
          <View style={{ 
            flex: 1, 
            paddingHorizontal: 15,
          }}>   
          

            <FriendList
              data={friendProfiles}
              isOpened={isOpened}
            />
      </View>

      
     </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:statusBarHeight,
    paddingHorizontal: 15,
   
  },
});
