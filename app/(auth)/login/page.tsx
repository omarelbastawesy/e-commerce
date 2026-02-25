import otpImage from "@/public/otp.png";
import LoginForm from "../_components/LoginForm";
import Container from "@/components/layout/Container";
import LeftCard from "@/components/common/LeftCard";
import Link from "next/link";
import RightCard from "@/components/common/RightCard";

export default function App() {
  return (
    <Container className="min-h-screen mx-auto py-12 px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-start gap-8">
      <LeftCard
        image={otpImage}
        head="Create your account"
        info="Let's create your account."
        underPhoto={
          <p className="text-center mt-8 text-gray-600">
            Already a member?{" "}
            <Link
              href="/signup"
              className="underline font-semibold cursor-pointer"
            >
              Log In
            </Link>
          </p>
        }
      />

      <RightCard>
        <LoginForm />
      </RightCard>
    </Container>
  );
}
