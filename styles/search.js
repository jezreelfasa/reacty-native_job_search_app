import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES,SHADOWS } from "../constants";
import { logOut } from "../services/authService";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    upload: {
       textAlign: "right", // Aligns the text content to the right
        alignSelf: "flex-end",
        marginRight: 10,
       
    
    },
    centImage: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    noo: {
        backgroundColor: COLORS.lightWhite,
        fontFamily: "",
        color: COLORS.gray,
        ...SHADOWS.medium,
        padding: 3,
        borderRadius: SIZES.small / 1.25,
        marginTop:1.5
    },
    up: {
        fontFamily: "DMBold",
        color: COLORS.gray,
        padding: 1,
        
    },
    containerSign: {
        marginTop:10,
        position: "absolute",
    bottom: 0,
    
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    },

    logOut: {
        flex: 1,
        padding:15,
    backgroundColor: "#FE7654",
        height: "100%",
    
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    },
    logOutText: {
        fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
    }
    
});

export default styles;