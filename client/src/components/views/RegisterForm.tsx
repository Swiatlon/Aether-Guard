import { JSX, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LockIcon from "@mui/icons-material/Lock";
import { Container, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MotionCard, MotionBox, MotionButton } from "../motions/motions";

const MotionIcon = motion(GroupAddIcon);

const RegisterForm = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MotionCard
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{
          p: 6,
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
          gap: 5,
          borderRadius: 4,
          boxShadow: 2,
          minWidth: "300px",
          backgroundColor: "#fff",
        }}
      >
        <MotionIcon
          variants={itemVariants}
          sx={{
            fontSize: "3.6rem",
            color: "white",
            bgcolor: isSuccess ? "success.main" : "primary.main",
            borderRadius: "50%",
            p: 1.7,
          }}
        />

        <MotionBox variants={itemVariants} sx={{ textAlign: "center", display: "grid", gap: 1 }}>
          <Typography
            variant="h5"
            color="primary"
            component="h1"
            sx={{
              fontWeight: 600,
            }}
          >
            Welcome to Aether
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Register to continue
          </Typography>
        </MotionBox>

        <MotionBox variants={itemVariants} onSubmit={handleSubmit} sx={{ display: "grid", gap: 5, width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            required
            InputProps={{
              startAdornment: <EmailIcon fontSize="small" color="primary" sx={{ mr: 1 }} />,
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            required
            InputProps={{
              startAdornment: <LockIcon fontSize="small" color="primary" sx={{ mr: 1 }} />,
            }}
          />

          <MotionButton
            whileHover="hover"
            whileTap="tap"
            animate={isSubmitting ? "submitting" : isSuccess ? "success" : "idle"}
            variant="contained"
            size="large"
            type="submit"
            sx={{ borderRadius: 2 }}
          >
            {isSuccess ? "Registration Successful" : isSubmitting ? "Registering..." : "Register"}
          </MotionButton>
        </MotionBox>
      </MotionCard>
    </Container>
  );
};

export default RegisterForm;
