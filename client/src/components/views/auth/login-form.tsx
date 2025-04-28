import { JSX, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/components/views/auth/schema/auth.schema";
import {
  AuthFormWrapper,
  AuthEmailField,
  AuthPasswordField,
  AuthSubmitButton,
  AuthMotionForm,
} from "../../shared/auth/elements";

const LoginForm = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (_data: LoginFormData): Promise<void> => {
    setIsSubmitting(true);

    try {
      // TODO: Implement actual login logic here
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch {
      // TODO: Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasError = useMemo(() => Object.keys(errors).length > 0, [errors]);

  return (
    <AuthFormWrapper title="Welcome to Aether" subtitle="Login to continue" isError={hasError}>
      <AuthMotionForm onSubmit={handleSubmit(onSubmit)}>
        <AuthEmailField {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
        <AuthPasswordField {...register("password")} error={!!errors.password} helperText={errors.password?.message} />
        <AuthSubmitButton
          isDisabled={isSubmitting}
          isSubmitting={isSubmitting}
          isError={hasError}
          text="Login"
          loadingText="Logging in..."
          successText="Login Successful"
        />
      </AuthMotionForm>
    </AuthFormWrapper>
  );
};

export default LoginForm;
