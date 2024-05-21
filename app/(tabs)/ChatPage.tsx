import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for conversation list
  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unreadCount: 2, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 2, name: 'Jane Smith', lastMessage: 'Sure, I will be there.', timestamp: 'Yesterday', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 3, name: 'Michael Johnson', lastMessage: 'What are you up to?', timestamp: '09:45 AM', unreadCount: 1, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 4, name: 'Emily Davis', lastMessage: 'I have some exciting news!', timestamp: '12:15 PM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 5, name: 'David Brown', lastMessage: 'Can you send me the document?', timestamp: '11:20 AM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 6, name: 'Sarah Wilson', lastMessage: 'Let\'s meet up for coffee.', timestamp: '08:00 AM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 7, name: 'Robert Martinez', lastMessage: 'How was your weekend?', timestamp: 'Yesterday', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 8, name: 'Jennifer Taylor', lastMessage: 'Are you coming to the party?', timestamp: '11:50 PM', unreadCount: 3, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 9, name: 'William Anderson', lastMessage: 'I\'ll be late tonight.', timestamp: '10:00 PM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 10, name: 'Jessica Thomas', lastMessage: 'Thanks for your help.', timestamp: '08:30 AM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 11, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unreadCount: 2, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 12, name: 'Jane Smith', lastMessage: 'Sure, I will be there.', timestamp: 'Yesterday', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 13, name: 'Michael Johnson', lastMessage: 'What are you up to?', timestamp: '09:45 AM', unreadCount: 1, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 14, name: 'Emily Davis', lastMessage: 'I have some exciting news!', timestamp: '12:15 PM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
    { id: 15, name: 'David Brown', lastMessage: 'Can you send me the document?', timestamp: '11:20 AM', unreadCount: 0, profilePic: require('../../assets/images/profile_picture.png') },
  ];
  // Filtered conversation list based on search query
  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render item for each conversation
  const renderConversationItem = ({ item }) => (
    <View style={styles.conversationItem}>
    {/* Display profile picture */}
    <Image source={item.profilePic} style={styles.profilePicture} />

    {/* Display conversation details */}
    <View style={styles.conversationDetails}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </View>

    {/* Display timestamp and unread count */}
    <View style={styles.metaInfo}>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
      {item.unreadCount > 0 && <View style={styles.unreadBadge}><Text>{item.unreadCount}</Text></View>}
    </View>
  </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Chats</Text>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Conversation List */}
      <FlatList
        data={filteredConversations}
        renderItem={renderConversationItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#424242',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    padding:5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  conversationDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  lastMessage: {
    fontSize: 16,
    color: 'white',
  },
  metaInfo: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    marginBottom: 5,
    color: 'white',
  },
  unreadBadge: {
    backgroundColor: '#2ca890',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
});

export default ChatPage;
