import { JSX, ReactNode } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Container, TextField, Typography, TextFieldProps } from "@mui/material";
import { motion } from "framer-motion";
import { MotionCard, MotionBox, MotionButton, MotionForm } from "../../motions/motions";

const COLORS = {
  PRIMARY: "primary.main",
  SUCCESS: "success.main",
  ERROR: "error.main",
} as const;

const MotionIconLogin = motion(SupervisedUserCircleIcon);

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

interface AuthFormWrapperProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  isError?: boolean;
}

export const AuthFormWrapper = ({ children, title, subtitle, isError }: AuthFormWrapperProps): JSX.Element => {
  const mainColor = isError === true ? COLORS.ERROR : COLORS.PRIMARY;

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
        <MotionIconLogin
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.6,
              },
            },
          }}
          sx={{
            fontSize: "3.6rem",
            color: "white",
            bgcolor: mainColor,
            borderRadius: "50%",
            p: 1.7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <MotionBox variants={itemVariants} sx={{ textAlign: "center", display: "grid", gap: 1 }}>
          <Typography
            variant="h5"
            color="primary"
            component="h1"
            sx={{
              fontWeight: 600,
              color: mainColor,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        </MotionBox>
        {children}
      </MotionCard>
    </Container>
  );
};

export const AuthEmailField = (props: TextFieldProps): JSX.Element => {
  const mainColor = props.error === true ? COLORS.ERROR : COLORS.PRIMARY;

  return (
    <TextField
      label="Email"
      variant="outlined"
      required
      fullWidth
      InputProps={{
        startAdornment: (
          <EmailIcon
            fontSize="small"
            sx={{
              mr: 1,
              color: mainColor,
            }}
          />
        ),
      }}
      {...props}
    />
  );
};

export const AuthPasswordField = (props: TextFieldProps): JSX.Element => {
  const mainColor = props.error === true ? COLORS.ERROR : COLORS.PRIMARY;

  return (
    <TextField
      label="Password"
      type="password"
      variant="outlined"
      required
      fullWidth
      InputProps={{
        startAdornment: (
          <LockIcon
            fontSize="small"
            sx={{
              mr: 1,
              color: mainColor,
            }}
          />
        ),
      }}
      {...props}
    />
  );
};

interface AuthSubmitButtonProps {
  isError: boolean;
  text: string;
  loadingText: string;
  successText: string;
  isSubmitting: boolean;
  isDisabled?: boolean;
}

export const AuthSubmitButton = ({
  isSubmitting,
  isError,
  text,
  loadingText,
  isDisabled,
}: AuthSubmitButtonProps): JSX.Element => (
  <MotionButton
    disabled={isDisabled}
    whileHover="hover"
    whileTap="tap"
    animate={isSubmitting ? "submitting" : "idle"}
    variant="contained"
    size="large"
    type="submit"
    color={isError ? "error" : "primary"}
    sx={{ borderRadius: 2 }}
    fullWidth
  >
    {isSubmitting ? loadingText : text}
  </MotionButton>
);

interface AuthMotionFormProps {
  children: ReactNode;
  onSubmit: ReturnType<UseFormHandleSubmit<FieldValues>>;
}

export const AuthMotionForm = ({ children, onSubmit }: AuthMotionFormProps): JSX.Element => (
  <MotionForm variants={itemVariants} onSubmit={onSubmit} style={{ display: "grid", gap: "40px", width: "100%" }}>
    {children}
  </MotionForm>
);
