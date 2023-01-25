const styles = {
  arrowIcon: (theme) => (
    {
      backgroundColor: 'background.paper',
      color: 'primary.main',
      '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
      bottom: { xs: '-70px !important', md: '-28px !important' },
      left: 'unset !important',
      zIndex: 10,
      boxShadow: 1,
    }
  ),
  wrapper: (theme) => ({
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '1240px',
      display: 'flex',
      alignItems: 'center',
      gap: '35px',
    },
  }),
  photo: {
    width: '100%',
    maxWidth: '509px',
    display: 'block',
    margin: '44px auto 0',
  },
  text: (theme) => ({
    margin: '25px 0',
    maxWidth: '630px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '44px',
    },
  }),
}

export default styles
