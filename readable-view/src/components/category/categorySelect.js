import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import propTypes from 'prop-types';

class categorySelect extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    if (selectedOption) {
      this.setState({ selectedOption });
      this.props.handleSelect(selectedOption.value);
    } else {
      this.setState({ selectedOption: null });
      this.props.handleSelect(null);
    }
  };

  render() {
    const { selectvalues, selectedOption } = this.props;
    let selected = this.state.selectedOption
      ? this.state.selectedOption
      : Object.keys(selectvalues)
          .filter(key => selectvalues[key].value === selectedOption)
          .map(key => selectvalues[key]);

    return (
      <Select
        value={selected}
        placeholder="Select a category"
        onChange={this.handleChange}
        options={selectvalues}
        isClearable={true}
        isSearchable={true}
      />
    );
  }
}

categorySelect.propTypes = {
  handleSelect: propTypes.func.isRequired
};

function mapStateToProps({ categories }) {
  let selectvalues = Object.keys(categories).map(key => ({
    value: categories[key].name,
    label: categories[key].name
  }));

  return {
    selectvalues
  };
}
export default connect(mapStateToProps)(categorySelect);
