import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, withStyles} from 'material-ui';
import Button from "material-ui/es/Button/Button";

const styles = theme => ({
    root: {
        textAlign: 'center',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit,
        padding: 0,

    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
    },
    nameInput: {
      // marginLeft: theme.spacing.unit * 3,
    },
    submitButton: {
        margin: theme.spacing.unit,
        position: 'relative',
    }
});


class FormClaim extends React.Component {

    state = {
        genre: 'male',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return(
        <div className={classes.root}>
            <form className={classes.containerForm}>
            <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">Genre</FormLabel>

                <RadioGroup
                    value={this.state.genre}
                    onChange={this.handleChange('genre')}
                    className={classes.radioGroup}
                >
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Homme" />
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Femme" />
                </RadioGroup>
l
                <div>
                <span style={{width: '50px',display:'inline-block'}}>{this.state.genre === 'male'? 'Mr': 'Mme'}</span>
                <TextField
                    id="name"
                    label="Nom Prénom"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    className={classes.nameInput}
                />
                </div>

            </FormControl>
                <div>
                <Button variant="raised" color="primary" className={classes.submitButton}>
                    Valider
                </Button>
                </div>

            </form>

        </div>
            )
    }
}

FormClaim.PropTypes = {
    //myProp: PropTypes.string.isRequired
};

export default withStyles(styles)(FormClaim);