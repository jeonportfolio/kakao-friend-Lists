import { useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import {  getStatusBarHeight } from 'react-native-iphone-x-helper';
import { friendProfiles, myProfile} from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import Profile from './src/Profile';
import Header from './src/Header';




const statusBarHeight = getStatusBarHeight(true);


export default function App() {

    const [isOpened, setIsOpened] = useState(true);

    const onPressArrow = () => {
        setIsOpened(!isOpened);
    }

  return (
        <View style={styles.container}>
            <Header/>

            <Margin height={10}/>

            <Profile
              uri={myProfile.uri}
              name={myProfile.name}
              introduction={myProfile.introduction}
            />

            <Margin height= {15}/>

            <Division/>

            <Margin height= {12}/>

            <FriendSection
                friendProfileLen={friendProfiles.length}
                onPressArrow={onPressArrow}
                isOpened={isOpened}
            />

            <FriendList
              data={friendProfiles}
              isOpened={isOpened}
            />
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
