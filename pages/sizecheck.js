import Layout from "../components/Layout";
import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";

export default function SizeCheck() {
  return <Layout>
    <Box sx={{textAlign: 'center'}}>
      <Button variant={'contained'}>
        <Link href={'/cirl'}>
          <Typography variant={'button'} fontWeight={'bold'}>
            Cirl Finder and Checker
          </Typography>
        </Link>
      </Button>
    </Box>
  </Layout>
};
