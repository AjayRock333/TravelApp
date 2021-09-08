import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const bgimage = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxafua5ZrQyJtOtAO7ubFEFR6NhHS-pEpcg&usqp=CAU',
};

const goBack = () => {
navigation.goBack('home');
}


const Post = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }} >

      <ImageBackground
        source={bgimage}
        style={{ width: '100%', height: 200, justifyContent: 'flex-end' }}
        imageStyle={{ borderBottomRightRadius: 0 }} >
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingbottom: 10, color: 'white' }}>Places</Text>
        <Text style={{ fontSize: 15, bottom:5, color: 'white' }}>The best time to explore the Western Ghats has to be during Monsoon </Text>

      </ImageBackground>

      <TouchableOpacity onPress={goBack} style={styles.BackBtn}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BookBtn}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>BOOK NOW</Text>
      </TouchableOpacity>

      <ScrollView style={{ backgroundColor: 'lightblue' }}>
        <Text style={{ padding: 20, fontSize: 25, fontWeight: 'bold' }}>About this place</Text>
        <Text style={styles.tagline}>An adventure is an exciting or unusual experience. It may also be a bold, usually risky undertaking, with an uncertain outcome.Adventures may be activities with some potential for physical danger such as exploring, skydiving,mountain climbing,participating in extreme sports.
        </Text>
        <Text style={styles.tagline}>The term also broadly refers to any enterprise that is potentially fraught with physical, financial or psychological risk, such as a business venture, or other major life undertakings.An adventure is an exciting or unusual experience. It may also be a bold, usually risky undertaking, with an uncertain outcome.Adventures may be activities with some potential for physical danger such as exploring, skydiving,mountain climbing, river rafting or participating in extreme sports. The term also broadly refers to any enterprise that is potentially fraught with physical, financial or psychological risk, such as a business venture, or other major life undertakings.adventure is an exciting or unusual experience. It may also be a bold, usually risky undertaking, with an uncertain outcome.Adventures may be activities with some potential for physical danger such as exploring, skydiving,mountain climbing, river rafting or participating in extreme sports. The term also broadly refers to any enterprise that is potentially fraught with physical, financial or psychological risk, such as a business venture, or other major life undertakings.An adventure is an exciting or unusual experience. It may also be a bold, usually risky undertaking, with an uncertain outcome.Adventures may be activities with some potential for physical danger such as exploring, skydiving,mountain climbing, river rafting or participating in extreme sports. The term also broadly refers to any enterprise that is potentially fraught with physical, financial or psychological risk, such as a business venture, or other major life undertakings. </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BookBtn: {
    position: 'absolute',
    right: 15,
    top: 190,
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 10,
    elevation: 5
  },
  tagline: {
    paddingHorizontal: 15,
    fontSize: 15,
    justifyContent: 'flex-start',
    textAlign: 'justify',
    lineHeight: 30
  },
  BackBtn: {
    position: 'absolute',
    right: 300,
    top: 20,
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 10,

  },
});

export default Post;
