import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack component="footer" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Stack>
        <Typography>
          Данный сайт создан исключительно в развлекательно-познавательных
          целях. <br />
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
