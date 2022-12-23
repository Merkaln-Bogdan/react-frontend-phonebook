import { Layout } from "sections/Layout/Layout";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <Layout>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
        }}
      >
        Hello, you can create, add and delete contacts after authorization
      </Typography>
    </Layout>
  );
};

export { HomePage };
