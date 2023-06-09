import React, {useContext} from "react";
import { Context } from "../Context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";



const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');

    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find(
        (blogpost) => blogpost.id ===  id
    );

    return <BlogPostForm 
            initialValues = {{title : blogPost.title , content: blogPost.content}}
            onSubmit={(title, content) => {
                editBlogPost(id, title , content, () => navigation.pop())
            }}
        />
}

const styles = StyleSheet.create({});

export default EditScreen;