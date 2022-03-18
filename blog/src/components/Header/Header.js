const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``.
}

export { Header }