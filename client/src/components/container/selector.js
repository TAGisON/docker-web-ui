import React from 'react'
import { Checkbox } from 'evergreen-ui'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { groupItemSelector } from '../../store/actions/groups.action'

class ContainerSelector extends React.PureComponent {
  render () {
    const { groupItemSelector } = this.props
    const shortId = this.props.container.shortId
    return <Checkbox 
      marginRight={15}
      marginTop={0}
      marginBottom={0}
      onChange={() => {
        groupItemSelector(shortId)
      }}
    />
  }
}

const mapStateToProps = state => {
  return {
    selectedItems: state.groups.selectedItems,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    groupItemSelector
  },
  dispatch
)

export default connect(null, mapDispatchToProps)( ContainerSelector )