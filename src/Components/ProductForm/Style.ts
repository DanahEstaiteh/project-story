import makeStyles from "@material-ui/core/styles/makeStyles";

export const ProductFormStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    },
    textArea: {
        width: '90%',
    }
}))