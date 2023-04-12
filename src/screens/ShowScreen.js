import React, { useContext } from "react";
import { View, Text, StyleSheet ,TouchableOpacity, Button } from "react-native";
import { Context } from "../Context/BlogContext";
import {EvilIcons} from '@expo/vector-icons'



const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
//    const titleData = navigation.getParam('title');

const blogPost = state.find((blogpost) => blogpost.id === navigation.getParam('id'))

    return <View>
        <Text style={styles.title}> {blogPost.title} </Text>
        <Text style={styles.content}> {blogPost.content} </Text>

        <Button title="Blog List" onPress={() => navigation.navigate('Index')}/>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => 
            navigation.navigate('Edit', {id: navigation.getParam('id')})}>
              <EvilIcons name="pencil" size={33} />
            </TouchableOpacity>
          ),
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        marginBottom:5,
        marginLeft:5,
    },
    content:{
        fontSize: 18,
        marginBottom:15,
        padding: 5,
        margin: 5,
        marginLeft: 50
    }
})

export default ShowScreen;