import React, { useContext} from "react";
import { Context } from "../Context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";



const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    return <BlogPostForm 
        onSubmit = {(title, content) => {
        addBlogPost(title,content, () => navigation.navigate('Index'));
    }}/>

}

const styles = StyleSheet.create({});

export default CreateScreen;