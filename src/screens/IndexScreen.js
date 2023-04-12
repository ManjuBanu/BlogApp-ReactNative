import React,{useContext,useEffect} from "react";
import { View, Text, StyleSheet,FlatList, Button,TouchableOpacity } from "react-native";
import { Context } from "../Context/BlogContext"; 
import {Feather} from '@expo/vector-icons'


const IndexScreen = ({navigation}) => {

    useEffect(() => {
        getBlogPosts();
        const listener =  navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        return () => {
            listener.remove();
        };
    },[])

const {state, deleteBlogPost, getBlogPosts} = useContext(Context);
    return <View>
        {/* <Button title="Add Post !" onPress={addBlogPost}/> */}
        <FlatList 
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item}) => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style = {styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                     <Feather style={styles.icon} name="trash"/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
            );
        }}
        />

    </View>
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather style={{paddingRight:15}} name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth: 1,
        // borderBottomWidth:1,
        borderColor:'gray',
    },
    title: {
        fontSize: 18,
        paddingLeft:20,
    },
    icon: {
        fontSize:24,
        paddingRight:20,
        color:'red',
    },
});

export default IndexScreen;