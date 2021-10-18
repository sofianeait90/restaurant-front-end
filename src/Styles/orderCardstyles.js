import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        marginLeft: "5%",
        width: "50%",
        minWidth: 400,
    },
    textH3: {
        textAlign: "center",
    },
    card: {
        marginTop: -20,
        justifyContent: "center",
        minWidth: 400,
        width: "100%",
        borderRadius: 30,
        background: "#EFEFEF",
    },
    CardContent: {
        alignContent: "center",
    },
    sumbitButton: {
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 30,
        background: "linear-gradient(45deg, #000000 30%, #000000 90%)",
        color: "#FFFFFF",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        height: 50,
        width: 110,
    },
    header: {
        backgroundColor: "#000000",
        textAlign: "center",
    },
    fontWhite: { color: "#FFFFFF" },
    textFieldCountry: { width: 200, marginBottom: 15 },

    textFieldAddress: { width: 500, marginBottom: 15 },

    Progress: { marginLeft: "50%", marginTop: "20%" },
});