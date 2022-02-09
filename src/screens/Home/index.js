import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Home
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
