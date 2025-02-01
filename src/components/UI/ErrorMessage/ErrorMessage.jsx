import { Box, Typography } from '@mui/material';

const ErrorMessage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      color="red"
    >
      <Typography variant="h6">
        Произошла ошибка - попробуйте обновить страницу.
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
