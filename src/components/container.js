import React from "react"
import { Box } from "rebass"
import PropTypes from "prop-types"

const Container = ({ children }) => (
  <Box width="100%" maxWidth={1260} mx="auto">
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
