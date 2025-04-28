import { JSX, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthFormWrapper,
  AuthEmailField,
  AuthPasswordField,
  AuthSubmitButton,
  AuthMotionForm,
} from "@/components/shared/auth/elements";
import { RegisterFormData, registerSchema } from "@/components/views/auth/schema/auth.schema";

const RegisterForm = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (_data: RegisterFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual registration logic here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    } catch {
      // TODO: Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasError = useMemo(() => Object.keys(errors).length > 0, [errors]);

  return (
    <AuthFormWrapper title="Welcome to Aether" subtitle="Register to continue" isError={hasError}>
      <AuthMotionForm onSubmit={handleSubmit(onSubmit)}>
        <AuthEmailField {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
        <AuthPasswordField {...register("password")} error={!!errors.password} helperText={errors.password?.message} />
        <AuthPasswordField
          {...register("confirmPassword")}
          label="Confirm Password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <AuthSubmitButton
          isDisabled={isSubmitting}
          isSubmitting={isSubmitting}
          isError={hasError}
          text="Register"
          loadingText="Registering..."
          successText="Registration Successful"
        />
      </AuthMotionForm>
    </AuthFormWrapper>
  );
};

export default RegisterForm;
