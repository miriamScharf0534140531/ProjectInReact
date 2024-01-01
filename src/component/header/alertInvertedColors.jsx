import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Appstore from './class/appstore';

export default function AlertInvertedColors() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Alert
        variant="soft"
        color="danger"
        invertedColors
        startDecorator={
          <CircularProgress size="lg" color="danger">
            {/* <Warning /> */}
          </CircularProgress>
        }
        sx={{ alignItems: 'flex-start', gap: '1rem' }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography level="title-md">Lost connection</Typography>
          <Typography level="body-md">
            wrong username or password
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="solid" size="sm" onClick={()=>Appstore.setIsErrorLogin(false)}>
              Try again
            </Button>
          </Box>
        </Box>
      </Alert>
    </Stack>
  );
}