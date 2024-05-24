import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    socialsContainer: {
        marginTop: 50,
        flex: 1,
        padding: 24,
        alignItems: "center"
    },
    saveButtonContainer: {
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: "white",
        width: "500",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "darkgrey",
        alignItems: "flex-end",
        paddingEnd: 20
    },
    saveButtonContainerTouchable: {
        textAlign: "right"
    },
    saveButtonContainerText: {
        color: "blue",
        fontSize: 16
    },
    contactInfoContainer: {
        width: "50vh",
        height: "auto",
        alignItems: "center"
    },
    textInputContainer: {
        backgroundColor: "white",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        margin: 5,
        width: 250
    },
    textInput: {
        padding: 10,
        marginVertical: 2
    },
    verifyEmailTouchableButton: {
        width: 250,
        backgroundColor: "blue",
        marginTop: 5
    },
    verifyEmailTouchableText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        padding: 10
    },
    contactInfoContainerTextInput: {
        padding: 10
    },
    contactInfoContainerImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    uploadImageText: {
        color: "blue"
    },
    connectWithFacebookButton: {
        width: 250,
        backgroundColor: "#1877F2",
        padding: 5,
        marginBottom: 5
    }
})

export default styles