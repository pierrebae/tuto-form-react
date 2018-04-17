import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, FormControlLabel, Radio, RadioGroup, withStyles} from 'material-ui';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});


class FormClaim extends React.Component {

    state = {
        value: 'Femme',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return(
        <div>
            <FormControl component="fieldset" required className={classes.formControl} >
                <RadioGroup
                    aria-label="gender"
                    name="gender2"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Homme" />
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Femme" />
                </RadioGroup>
            </FormControl>
        </div>
            )
    }
}

FormClaim.PropTypes = {
    //myProp: PropTypes.string.isRequired
};

export default withStyles(styles)(FormClaim);