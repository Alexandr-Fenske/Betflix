import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Stack>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} &laquo;Betflix&raquo; 18+ <br />
          Данный сайт создан исключительно в развлекательно-познавательных
          целях.
          <br />
          Все права принадлежат правообладателям.
        </Typography>
      </Stack>
      <Typography variant="h4" color="primary.main">
        Betflix
      </Typography>
    </Stack>
  );
};

export default Footer;
