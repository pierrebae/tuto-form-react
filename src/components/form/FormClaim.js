import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, withStyles} from 'material-ui';
import Button from "material-ui/es/Button/Button";
import Select from "material-ui/es/Select/Select";
import MenuItem from "material-ui/es/Menu/MenuItem";
import InputLabel from "material-ui/es/Input/InputLabel";

const styles = theme => ({
    root: {
        textAlign: 'center',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit,
        padding: 50,
        minWidth: 120,

    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',


    },
    radioInput: {
        // display:'inline-block',
    },
    nameInput: {
      // marginLeft: theme.spacing.unit * 3,
    },
    selectInput: {
        marginTop: theme.spacing.unit * 3,
    },
    submitButton: {
        margin: theme.spacing.unit,
        position: 'relative',
    }

});


class FormClaim extends React.Component {

    state = {
        genre: 'male',
        motif: 'AUTRE'
    };

    //currying function function qui prends name qui retourne une fonction qui prend l'event en argument et qui execute une fonction à partir de ces fonctions
    // translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument.
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
                <RadioGroup
                    value={this.state.genre}
                    onChange={this.handleChange('genre')}
                    className={classes.radioGroup}
                    row={true}
                >
                    <FormControlLabel classes={classes.radioInput} value="male" control={<Radio color="primary" />} label="Homme" />
                    <FormControlLabel classes={classes.radioInput} value="female" control={<Radio color="primary" />} label="Femme" />
                </RadioGroup>

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
                <div>
                    <InputLabel htmlFor="motif">Motif</InputLabel>
                    <Select
                    value={this.state.motif}
                    onChange={this.handleChange}
                    className={classes.selectInput}
                    inputProps={{
                        name: 'motif',
                        id: 'motif',
                    }}
                    >
                    <MenuItem value={'AUTRE'}>Autre</MenuItem>
                    <MenuItem value={'MOTIF1'}>Motif 1</MenuItem>
                    <MenuItem value={'MOTIF2'}>Motif 2</MenuItem>
                    <MenuItem value={'MOTIF3'}>Motif 3</MenuItem>
                </Select>
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