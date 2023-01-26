import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useNavigate } from 'react-router-dom';

export default function TopBanner() {
  const navigate = useNavigate();

  const action = (
    <Button color="secondary" size="medium" onClick={()=> navigate("pre_builts")}>
      On sale now up to 25% off! Shop now
    </Button>
  );

  return (
    <Stack spacing={2}>
      <SnackbarContent message=" Free Deliver & Now shipping orders in 3-5 working days" action={action} />
    </Stack>
  );
}
