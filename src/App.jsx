import { Button } from "./components/ui/button";

//// Import Icon's:
import { LogoIcon } from "./assets/icons/logo-icon";
import { FacebookIcon } from "./assets/icons/facebook-icon";
import { TwitterIcon } from "./assets/icons/twitter-icon";
import { RightArrowIcon } from "./assets/icons/right-arrow-icon";
import { Form } from "./componts/form";

function App() {
  return (
    <div>
      <section className="w-[345px] shadow-sm mx-auto">
        <div className="container py-4">
          <div className="text-center pt-[24px]">
            <span className="max-w-[60px] mx-auto block">
              <LogoIcon />
            </span>
            <h1 className="text-[26px] font-bold pb-1 pt-[18px] text-Primary">
              Wlecome Back
            </h1>
            <p className="text-Secondary">
              Sign in to access to your dashboard, settings and projects
            </p>
          </div>
          <div>
            <Button className="flex w-[315px] mb-2 mt-5 mx-auto border shadow-shadowBtn border-borderClr rounded-[128px] items-center gap-[6px] text-Primary font-bold text-[16px]">
              <FacebookIcon />
              Connect with Facebook
            </Button>
            <Button className="flex w-[315px] mx-auto border shadow-shadowBtn border-borderClr rounded-[128px] items-center gap-[6px] text-Primary font-bold text-[16px]">
              <TwitterIcon /> Connect with Twitter
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 py-4">
            <span className="block bg-borderClr w-[79px] h-[1px]"></span>
            <p className="text-Secondary text-[14px]">or sign in with email</p>
            <span className="block bg-borderClr w-[79px] h-[1px]"></span>
          </div>

          <Form />

          <div className="mt-4">
            <Button className="flex items-center gap-[6px] bg-Clr06B6 text-white rounded-[128px] w-[315px]">
              Sign In <RightArrowIcon />
            </Button>
            <div className="flex items-center justify-center mt-2 gap-2">
              <p className="text-Primary">No account?</p>
              <Button className="text-Clr06B6 p-0">Create an account</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
