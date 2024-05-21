import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfilePage = () => {
  const availability = [
    { day: 'Mon', available: true },
    { day: 'Tue', available: false },
    { day: 'Wed', available: true },
    { day: 'Thu', available: true },
    { day: 'Fri', available: false },
    { day: 'Sat', available: true },
    { day: 'Sun', available: false },
  ];

  const groups = [
    { name: 'Football Fans', size: 150, image: require('../../assets/images/profile_picture.png') },
    { name: 'Basketball Enthusiasts', size: 120, image: require('../../assets/images/profile_picture.png') },
    { name: 'Tennis Aficionados', size: 80, image: require('../../assets/images/profile_picture.png') }
  ];

  const renderAvailability = () => {
    return availability.map((item, index) => (
      <View style={[styles.availabilityItem, { backgroundColor: item.available ? '#2ca890' : 'white' }]} key={index}>
        <Text style={[styles.availabilityDay, { color: item.available ? 'white' : '#2ca890' }]}>
          {item.day}
        </Text>
      </View>
    ));
  };

  const renderGroups = () => {
    return groups.map((group, index) => (
      <View style={styles.groupItem} key={index}>
        <Image source={group.image} style={styles.groupImage} />
        <View style={styles.groupTextContainer}>
          <Text style={styles.groupName}>{group.name}</Text>
          <Text style={styles.groupSize}>{`Members: ${group.size}`}</Text>
        </View>
      </View>
    ));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
              <Ionicons name="create-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileInfoLeft}>
            <Image
              source={require('../../assets/images/profile_picture.png')}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.profileInfoRight}>
            <Text style={styles.userName}>
              John Doe, 24
            </Text>
            <Text style={styles.bio}>
              Passionate athlete with interests in multiple sports. Always ready for a new challenge!
            </Text>
            <View style={styles.interestContainer}>
              <View style={styles.sportIconContainer}>
                <Ionicons name="football" size={40} color="#2ca890" />
                <Text style={styles.sportName}>Football</Text>
              </View>
              <View style={styles.sportIconContainer}>
                <Ionicons name="basketball" size={40} color="#2ca890" />
                <Text style={styles.sportName}>Basketball</Text>
              </View>
              <View style={styles.sportIconContainer}>
                <Ionicons name="tennisball" size={40} color="#2ca890" />
                <Text style={styles.sportName}>Tennis</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.availabilityContainer}>
          <View style={styles.availabilityList}>
            {renderAvailability()}
          </View>
        </View>
        <View style={styles.groupsContainer}>
          <Text style={styles.sectionTitle}>Groups</Text>
          <View style={styles.groupsList}>
            {renderGroups()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 120,
    height: 60,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  profileInfoLeft: {
    alignItems: 'center',
    marginRight: 25,
  },
  profileInfoRight: {
    flex: 1,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 0,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 0,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  bio: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  interestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sportIconContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  sportIcon: {
    marginBottom: 5,
  },
  sportName: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  availabilityContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  availabilityList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  availabilityItem: {
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
  },
  availabilityDay: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  groupsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  groupsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#1c1c1c',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  groupImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  groupTextContainer: {
    flex: 1,
  },
  groupName: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 2,
  },
  groupSize: {
    color: '#2ca890',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default ProfilePage;
