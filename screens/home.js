import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';


const Home = ({navigation}) => {

  const image = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvO9ou7uow-3HKUlHylGZWeUGC8YbmrQJqEg&usqp=CAU',
  };

  const recentImage = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlxxpCvxTCouTTsVmhZ_sFHsMnA9srXHGJQ&usqp=CAU',
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxafua5ZrQyJtOtAO7ubFEFR6NhHS-pEpcg&usqp=CAU',
      },
      title: 'Places',
    },
    {
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY1WJBjP2s7I790QBdAhBwy0H8yAVL6Dg3w&usqp=CAU',
      },
      title: 'Adventure',
    },
    {
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpls9wm9ahB4JCCCTg_r8tIWE4X40Tij6gQ&usqp=CAU',
      },
      title: 'Maldives',
    },
    {
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMGUpUi7P0Lx3SG55VJX9PUehS4ro2gYT3g&usqp=CAU',
      },
      title: 'Nature',
    },
    {
      image: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePi9eUFvuuMbewta0l6YdnH9dUPckwiFAaA&usqp=CAU',
      },
      title: 'Water',
    },
  ]);

  const goToPost = () => {
    navigation.navigate('Post');
  };



  return (
    <View style={{flexGrow: 1, height: '100%'}}>
      <View>
        <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius: 60}}>
          <View style={styles.DarkOverlay}></View>
          <Text style={{fontSize: 30, fontWeight: 'bold', top: 20}}>AJAY'S Travel Dairy</Text>
          <Text style={{fontSize: 30, top: 20}}>Get Ready to travel </Text>
          <View>
            <TextInput
              style={styles.SearchBox}
              placeholder="search your destination"
              placeholderTextColor="black"></TextInput>
          </View>
          
        </ImageBackground>
      </View>

      <ScrollView>
        <View>
          <Text style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>
            Top trending
          </Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({item}) => {
              return (
                <View style={{paddingVertical: 20, paddingLeft: 16}}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.image}
                      style={{
                        width: 120,
                        height: 150,
                        marginRight: 1,
                        borderRadius: 10,
                      }}
                    />
                    <Text style={styles.ImageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{marginBottom: 60}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>
              Recent Viewed
            </Text>
            <Text style={{fontSize: 15, padding: 10, color: 'orange'}}>
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: '95%',
              height: 250,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <Text style={styles.ImageName}># SriLanka-</Text>
          <Text style={styles.ImageTitle}>
            Democratic Socialist Republic of SriLanka,it is an island country in
            South Asia
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    backgroundColor: 'white',
    opacity: 0.3,
    borderBottomRightRadius: 65,
  },
  SearchBox: {
    paddingLeft: 15,
    padding: 10,
    marginTop: 120,
    marginRight: 10,
    backgroundColor: 'yellow',
    opacity: 0.5,
    // borderBottomRightRadius: 40,
    // borderTopRightRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    width: '80%',
    height: 40,
  },
  ImageText: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    marginTop: 5,
    left: 7,
    bottom: 130,
  },

  ImageName: {
    position: 'absolute',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',

    left: 28,
    bottom: 40,
  },
  ImageTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,

    left: 30,
    bottom: 5,
  },
});
export default Home;
